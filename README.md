# Estuda Enfermagem — Simulados para Concurso

Plataforma web de simulados para o concurso da Prefeitura de Volta Redonda/RJ (Edital nº 003/2026-SMA, banca FEVRE), cargos **Técnico em Enfermagem** e **Enfermeiro**.

**🔗 Acesse: [estudaenfermagem.netlify.app](https://estudaenfermagem.netlify.app)**

> Projeto independente de estudo, sem vínculo com a prefeitura ou com a banca organizadora.

## Funcionalidades

- **Provas geradas na hora**: cada simulado sorteia 70 questões (10 Língua Portuguesa + 10 Legislação do SUS + 50 Conhecimentos Específicos), seguindo a estrutura do edital.
- **Sorteio inteligente**: prioriza questões que o aluno ainda não viu; quando acabam, entram as vistas há mais tempo. A ordem das alternativas (A–E) muda a cada prova.
- **Correção pela regra do edital**: aprovação com ≥ 35 pontos e nenhuma área zerada, com desempenho por área.
- **Gabarito comentado** e revisão só das questões erradas.
- **Modos de treino**: por área (10 a 50 questões) e "treino das erradas", montado a partir do histórico do aluno.
- **Contas de usuário** com e-mail e senha, confirmação de cadastro e recuperação de senha; histórico salvo no servidor e acessível de qualquer dispositivo.
- **Painel administrativo**: cadastro, edição e desativação de questões e textos de apoio, e acompanhamento do desempenho dos alunos.
- **Mobile first**: funciona no celular e pode ser adicionado à tela inicial do iPhone/Android; tema claro e escuro automático.

## Banco de questões

| Área | Questões |
|---|---|
| Língua Portuguesa (6 textos de interpretação + gramática) | 60 |
| Legislação do SUS (CF/88, Leis 8.080 e 8.142, Decreto 7.508, LC 141, PNAB) | 60 |
| Conhecimentos Específicos — Técnico em Enfermagem | 208 |
| Conhecimentos Específicos — Enfermeiro | 182 |
| **Total** | **510** |

Todas as questões têm 5 alternativas e comentário explicando o gabarito.

## Tecnologias

- **Front-end**: HTML, CSS e JavaScript puro (sem framework e sem etapa de build), em uma single-page application.
- **Back-end**: [Supabase](https://supabase.com), com PostgreSQL, autenticação e API REST gerada automaticamente.
- **Segurança**:
  - Row Level Security (RLS) e privilégios por coluna no PostgreSQL. Cada aluno só lê o próprio histórico, e a chave pública do front-end não dá acesso além do que as políticas permitem.
  - **Gabarito oculto**: a alternativa correta e o comentário só são enviados ao aluno depois que ele faz a questão.
  - **Correção no servidor**: a prova é corrigida por uma função `security definer` (`finalizar_prova`), que valida as questões, calcula a nota e grava o resultado. Não é possível gravar uma nota inventada.
  - Limites anti-abuso (tamanho dos registros, provas por dia), funções exclusivas de administrador e CAPTCHA (Cloudflare Turnstile) opcional no login e no cadastro.
- **Hospedagem**: Netlify.
- **Modo local**: sem Supabase configurado, o site roda 100% no navegador (contas e histórico em `localStorage`), útil para desenvolvimento e uso offline.

## Estrutura

```
index.html              # aplicação (telas, sorteio, correção, painel admin)
config.example.js       # modelo do config.js (URL e chave pública do Supabase; sem ele = modo local)
questoes.js, banco/     # banco de questões em JS (fonte da carga inicial e do modo local)
supabase/schema.sql     # tabelas, gatilhos e políticas RLS
supabase/gera-seed.js   # gera os arquivos SQL de carga a partir de banco/
supabase/seed-*.sql     # carga inicial (textos + 510 questões)
supabase/seguranca.sql  # gabarito oculto, correção no servidor, limites e funções de admin
COMO-CONFIGURAR.md      # passo a passo de implantação
```

### Modelo de dados

- `questoes`: área, texto de apoio, enunciado, alternativas (jsonb), índice da correta, comentário e status ativo.
- `textos`: textos de apoio das questões de interpretação.
- `perfis`: nome e papel (administrador), criado automaticamente no cadastro por gatilho.
- `tentativas`: cada prova feita, com as questões, a ordem embaralhada das alternativas, as respostas, os acertos por área e o tempo.

## Como rodar

**Modo local:** sirva a pasta com qualquer servidor estático e abra no navegador:

```bash
npx serve .
```

**Com Supabase:** siga o [COMO-CONFIGURAR.md](COMO-CONFIGURAR.md). Em resumo: rode `supabase/schema.sql` e os `seed-*.sql` no SQL Editor, copie `config.example.js` para `config.js`, preencha com os dados do seu projeto e publique os arquivos estáticos. O `config.js` fica fora do repositório (`.gitignore`).

Para regenerar a carga após editar `banco/`:

```bash
node supabase/gera-seed.js
```
