-- Simulado Enfermagem VR — estrutura do banco (Supabase / PostgreSQL)
-- Rode este arquivo inteiro uma vez no SQL Editor do Supabase. Pode rodar de novo sem perder dados.

-- ---------- Tabelas ----------
create table if not exists public.textos (
  id        int primary key,
  conteudo  text not null
);

create table if not exists public.questoes (
  id           text primary key,
  area         text not null check (area in ('pt', 'sus', 'tec', 'enf')),
  texto_id     int references public.textos(id),
  enunciado    text not null,
  alternativas jsonb not null check (jsonb_typeof(alternativas) = 'array' and jsonb_array_length(alternativas) = 5),
  correta      smallint not null check (correta between 0 and 4),
  comentario   text not null default '',
  ativa        boolean not null default true,
  criada_em    timestamptz not null default now()
);
create index if not exists questoes_area_idx on public.questoes (area) where ativa;

create table if not exists public.perfis (
  id     uuid primary key references auth.users(id) on delete cascade,
  nome   text not null default '',
  admin  boolean not null default false
);

create table if not exists public.tentativas (
  id         bigint generated always as identity primary key,
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  cargo      text not null check (cargo in ('tec', 'enf')),
  modo       text not null check (modo in ('completo', 'area', 'erradas')),
  area       text,
  questoes   jsonb not null,  -- [{ "id": "tec-012", "ordem": [3,0,4,1,2] }, ...]
  respostas  jsonb not null,  -- { "tec-012": 0, ... } (índice da alternativa original)
  acertos    int not null,
  total      int not null,
  por_area   jsonb not null,
  aprovado   boolean,
  tempo      int not null,    -- segundos
  criada_em  timestamptz not null default now()
);
create index if not exists tentativas_user_idx on public.tentativas (user_id, criada_em);

-- ---------- Perfil criado automaticamente no cadastro ----------
create or replace function public.novo_perfil() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.perfis (id, nome)
  values (new.id, coalesce(nullif(new.raw_user_meta_data->>'nome', ''), split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.novo_perfil();

create or replace function public.eh_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select admin from public.perfis where id = auth.uid()), false)
$$;

-- ---------- Segurança (Row Level Security) ----------
alter table public.textos     enable row level security;
alter table public.questoes   enable row level security;
alter table public.perfis     enable row level security;
alter table public.tentativas enable row level security;

drop policy if exists "textos_ler" on public.textos;
drop policy if exists "textos_admin" on public.textos;
create policy "textos_ler"   on public.textos for select to authenticated using (true);
create policy "textos_admin" on public.textos for all    to authenticated using (public.eh_admin()) with check (public.eh_admin());

drop policy if exists "questoes_ler" on public.questoes;
drop policy if exists "questoes_admin" on public.questoes;
create policy "questoes_ler"   on public.questoes for select to authenticated using (ativa or public.eh_admin());
create policy "questoes_admin" on public.questoes for all    to authenticated using (public.eh_admin()) with check (public.eh_admin());

-- Usuários só leem o próprio perfil (o admin lê todos). Ninguém altera a coluna "admin" pelo site.
drop policy if exists "perfis_ler" on public.perfis;
create policy "perfis_ler" on public.perfis for select to authenticated using (id = auth.uid() or public.eh_admin());

drop policy if exists "tentativas_ler" on public.tentativas;
drop policy if exists "tentativas_criar" on public.tentativas;
create policy "tentativas_ler"   on public.tentativas for select to authenticated using (user_id = auth.uid() or public.eh_admin());
create policy "tentativas_criar" on public.tentativas for insert to authenticated with check (user_id = auth.uid());

-- ---------- Para tornar alguém administrador (rode depois de criar a conta no site) ----------
-- update public.perfis set admin = true where id = (select id from auth.users where email = 'SEU-EMAIL@exemplo.com');
