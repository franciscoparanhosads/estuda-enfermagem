# Como colocar o Simulado no ar

O site funciona de dois jeitos:

- **Modo local** (como está agora): sem servidor. Contas e histórico ficam só no aparelho.
- **Modo online** (Supabase): login real por e-mail, histórico salvo no servidor (entra de qualquer aparelho), painel de administração para cadastrar e editar questões e ver o desempenho dos alunos.

## 1. Criar o projeto no Supabase (grátis)

1. Crie uma conta em https://supabase.com e clique em **New project**.
2. Dê um nome (ex.: `simulado-vr`), crie uma senha para o banco e escolha a região **South America (São Paulo)**.

## 2. Criar as tabelas e carregar as questões

No menu **SQL Editor** → **New query**, cole e rode (**Run**) um arquivo por vez, nesta ordem:

1. `supabase/schema.sql` — tabelas e regras de segurança
2. `supabase/seed-1-portugues-sus.sql` — textos + 60 Português + 60 SUS
3. `supabase/seed-2-tecnico.sql` — 208 questões do Técnico
4. `supabase/seed-3-enfermeiro.sql` — 182 questões do Enfermeiro

## 3. Ajustar o login

Em **Authentication → Sign In / Providers → Email**:

- **Confirm email** ligado: o aluno precisa clicar no link do e-mail antes de entrar (mais seguro).
- Desligado: o cadastro já entra direto.

Depois de publicar o site (passo 5), vá em **Authentication → URL Configuration** e coloque o endereço do site em **Site URL**. Os links de confirmação e de "esqueci minha senha" usam esse endereço.

## 4. Ligar o site ao Supabase

Copie o arquivo `config.example.js` para `config.js`. Depois, em **Project Settings → API**, copie a **Project URL** e a chave **anon public** e cole no `config.js`. Ele fica fora do Git, pelo `.gitignore`.

```js
window.SIMULADO_CONFIG = {
  supabaseUrl: 'https://xxxxxxxx.supabase.co',
  supabaseAnonKey: 'eyJhbGciOi...'
};
```

A chave *anon* pode ficar no site. Quem protege os dados são as regras do banco (cada aluno só vê o próprio histórico, e só o administrador altera questões).

## 5. Publicar

O jeito mais simples é o **Netlify Drop**: entre em https://app.netlify.com/drop e arraste a pasta com `index.html`, `config.js`, `questoes.js` e a pasta `banco/`. Ele gera um link `https://...netlify.app`, e depois você pode trocar o nome do site.

No iPhone: abra o link no Safari → **Compartilhar** → **Adicionar à Tela de Início**.

## 6. Virar administrador

Crie sua conta pelo site e depois rode no SQL Editor (trocando o e-mail):

```sql
update public.perfis set admin = true
where id = (select id from auth.users where email = 'SEU-EMAIL@exemplo.com');
```

Saia e entre de novo no site: vai aparecer o botão **Administração** com três abas:

- **Questões** — buscar, editar, criar, desativar ou excluir.
- **Textos** — os textos de apoio de Português.
- **Alunos** — provas feitas, aprovações e média de cada um.

## Como funciona o sorteio

- **Simulado completo**: 10 Português + 10 SUS + 50 Específicos do cargo, sorteados na hora. Entram primeiro as questões que o aluno nunca viu e, quando acabam, as vistas há mais tempo.
- A ordem das alternativas (A–E) muda a cada prova.
- **Treino por área**: 10, 20, 30 ou 50 questões de uma área.
- **Treino das erradas**: só as questões que o aluno errou ou deixou em branco da última vez que apareceram.

## Acrescentar questões pelos arquivos (opcional)

Também dá para editar os arquivos em `banco/` (sempre acrescentando no **final** das listas) e gerar os SQL de novo:

```
node supabase/gera-seed.js
```

Rodar os arquivos `seed-*.sql` de novo atualiza as questões existentes e insere as novas, sem apagar o histórico dos alunos.
