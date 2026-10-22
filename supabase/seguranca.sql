-- Simulado Enfermagem VR — reforço de segurança
-- Rode no SQL Editor DEPOIS do schema.sql. Pode rodar de novo sem perder dados.
--
-- O que muda:
--   1. O gabarito (alternativa correta e comentário) deixa de ser enviado aos alunos antes da prova.
--      Cada aluno só recebe o gabarito das questões que já fez.
--   2. A correção passa a ser feita no servidor (função finalizar_prova). Ninguém consegue
--      gravar um resultado inventado direto na tabela.
--   3. Limites de tamanho e de quantidade nas provas gravadas (anti-abuso).
--   4. Alterações nas questões só pelas funções de administrador.

-- ---------- 1. Resultado por questão + limites nas tentativas ----------
alter table public.tentativas add column if not exists resultado jsonb;  -- { "tec-012": true, ... }

-- Preenche o resultado das provas antigas
update public.tentativas t set resultado = coalesce((
  select jsonb_object_agg(e->>'id', (t.respostas->>(e->>'id')) is not null and (t.respostas->>(e->>'id'))::int = q.correta)
  from jsonb_array_elements(t.questoes) e
  join public.questoes q on q.id = e->>'id'
), '{}'::jsonb)
where t.resultado is null;

alter table public.tentativas drop constraint if exists tentativas_limites;
alter table public.tentativas add constraint tentativas_limites check (
  total between 1 and 70
  and acertos between 0 and total
  and tempo between 0 and 604800
  and (area is null or area in ('pt', 'sus', 'esp'))
  and jsonb_typeof(questoes) = 'array' and jsonb_array_length(questoes) = total
  and octet_length(questoes::text) <= 10000
  and octet_length(respostas::text) <= 5000
  and octet_length(por_area::text) <= 1000
  and (resultado is null or octet_length(resultado::text) <= 5000)
) not valid;

-- ---------- 2. Gabarito oculto ----------
-- Alunos leem só as colunas sem resposta; escrita nas tabelas questoes/tentativas só pelas funções abaixo.
revoke all on public.questoes from anon, authenticated;
grant select (id, area, texto_id, enunciado, alternativas, ativa, criada_em) on public.questoes to authenticated;

revoke insert, update, delete on public.tentativas from anon, authenticated;
drop policy if exists "tentativas_criar" on public.tentativas;

revoke insert, update, delete on public.perfis from anon, authenticated;

-- ---------- 3. Correção no servidor ----------
drop function if exists public.finalizar_prova(text, text, text, jsonb, jsonb, int);
create function public.finalizar_prova(
  p_cargo text, p_modo text, p_area text, p_questoes jsonb, p_respostas jsonb, p_tempo int
) returns public.tentativas
language plpgsql security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_ids text[];
  v_total int;
  v_acertos int := 0;
  v_por jsonb := '{}'::jsonb;
  v_res jsonb := '{}'::jsonb;
  v_ok boolean;
  v_ar text;
  v_resp text;
  v_row public.tentativas;
  r record;
begin
  if v_uid is null then raise exception 'É preciso estar logado.'; end if;
  if p_cargo not in ('tec', 'enf') or p_modo not in ('completo', 'area', 'erradas')
     or (p_modo = 'area' and coalesce(p_area, '') not in ('pt', 'sus', 'esp'))
     or jsonb_typeof(p_questoes) <> 'array' or jsonb_typeof(p_respostas) <> 'object' then
    raise exception 'Dados da prova inválidos.';
  end if;

  if (select count(*) from public.tentativas where user_id = v_uid and criada_em > now() - interval '1 day') >= 100 then
    raise exception 'Limite diário de provas atingido. Tente novamente amanhã.';
  end if;

  select array_agg(e->>'id') into v_ids from jsonb_array_elements(p_questoes) e;
  v_total := coalesce(array_length(v_ids, 1), 0);
  if v_total < 1 or v_total > 70
     or v_total <> (select count(distinct x) from unnest(v_ids) x)
     or exists (select 1 from jsonb_array_elements(p_questoes) e
                where jsonb_typeof(e->'ordem') <> 'array' or jsonb_array_length(e->'ordem') <> 5)
     or v_total <> (select count(*) from public.questoes where id = any(v_ids) and area in ('pt', 'sus', p_cargo)) then
    raise exception 'A prova contém questões inválidas.';
  end if;

  for r in select q.id, q.area, q.correta from public.questoes q where q.id = any(v_ids) loop
    v_ar := case when r.area in ('tec', 'enf') then 'esp' else r.area end;
    v_resp := p_respostas->>r.id;
    v_ok := v_resp is not null and v_resp ~ '^[0-4]$' and v_resp::int = r.correta;
    v_res := v_res || jsonb_build_object(r.id, v_ok);
    v_por := jsonb_set(v_por, array[v_ar], jsonb_build_object(
      'a', coalesce((v_por->v_ar->>'a')::int, 0) + (case when v_ok then 1 else 0 end),
      'n', coalesce((v_por->v_ar->>'n')::int, 0) + 1));
    if v_ok then v_acertos := v_acertos + 1; end if;
  end loop;

  insert into public.tentativas (user_id, cargo, modo, area, questoes, respostas, resultado, acertos, total, por_area, aprovado, tempo)
  values (
    v_uid, p_cargo, p_modo, case when p_modo = 'area' then p_area end,
    p_questoes, p_respostas, v_res, v_acertos, v_total, v_por,
    case when p_modo = 'completo' then
      coalesce((v_por->'pt'->>'n')::int, 0) = 10 and coalesce((v_por->'sus'->>'n')::int, 0) = 10
      and coalesce((v_por->'esp'->>'n')::int, 0) = 50 and v_acertos >= 35
      and coalesce((v_por->'pt'->>'a')::int, 0) > 0 and coalesce((v_por->'sus'->>'a')::int, 0) > 0
      and coalesce((v_por->'esp'->>'a')::int, 0) > 0
    end,
    least(greatest(coalesce(p_tempo, 0), 0), 604800)
  ) returning * into v_row;
  return v_row;
end $$;

-- Gabarito (correta + comentário) só das questões que o aluno já fez. O administrador vê tudo.
create or replace function public.meu_gabarito() returns table (id text, correta smallint, comentario text)
language sql stable security definer set search_path = public as $$
  select q.id, q.correta, q.comentario
  from public.questoes q
  where public.eh_admin()
     or exists (select 1 from public.tentativas t
                where t.user_id = auth.uid()
                  and t.questoes @> jsonb_build_array(jsonb_build_object('id', q.id)))
$$;

-- ---------- 4. Funções do administrador ----------
create or replace function public.admin_questoes() returns setof public.questoes
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.eh_admin() then raise exception 'Acesso negado.'; end if;
  return query select * from public.questoes order by id;
end $$;

create or replace function public.admin_salvar_questao(q jsonb) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.eh_admin() then raise exception 'Acesso negado.'; end if;
  insert into public.questoes (id, area, texto_id, enunciado, alternativas, correta, comentario, ativa)
  values (q->>'id', q->>'area', nullif(q->>'texto_id', '')::int, q->>'enunciado', q->'alternativas',
          (q->>'correta')::smallint, coalesce(q->>'comentario', ''), coalesce((q->>'ativa')::boolean, true))
  on conflict (id) do update set
    area = excluded.area, texto_id = excluded.texto_id, enunciado = excluded.enunciado,
    alternativas = excluded.alternativas, correta = excluded.correta,
    comentario = excluded.comentario, ativa = excluded.ativa;
end $$;

create or replace function public.admin_excluir_questao(p_id text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.eh_admin() then raise exception 'Acesso negado.'; end if;
  delete from public.questoes where id = p_id;
end $$;

-- Só usuários logados podem chamar as funções
revoke execute on function public.finalizar_prova(text, text, text, jsonb, jsonb, int) from public, anon;
revoke execute on function public.meu_gabarito() from public, anon;
revoke execute on function public.admin_questoes() from public, anon;
revoke execute on function public.admin_salvar_questao(jsonb) from public, anon;
revoke execute on function public.admin_excluir_questao(text) from public, anon;
grant execute on function public.finalizar_prova(text, text, text, jsonb, jsonb, int) to authenticated;
grant execute on function public.meu_gabarito() to authenticated;
grant execute on function public.admin_questoes() to authenticated;
grant execute on function public.admin_salvar_questao(jsonb) to authenticated;
grant execute on function public.admin_excluir_questao(text) to authenticated;
