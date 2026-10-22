# Relatório de Testes — Estuda Enfermagem

| | |
|---|---|
| **Data** | 22/10/2026 |
| **Ambiente** | Produção: [estudaenfermagem.netlify.app](https://estudaenfermagem.netlify.app) + projeto Supabase de produção |
| **Versão** | Commit com o reforço de segurança (`supabase/seguranca.sql`) aplicado |
| **Resultado geral** | ✅ **46 de 46 testes passaram** |

## Resumo

| Bloco | Como foi testado | Resultado |
|---|---|---|
| 1. Segurança sem login (visitante) | Requisições diretas à API REST com a chave pública | ✅ 17/17 |
| 2. Segurança com login | Chamadas à API com a sessão de um usuário logado, tentando burlar regras | ✅ 13/13 |
| 3. Correção no servidor e administração | Funções do banco (`finalizar_prova`, `admin_*`, `meu_gabarito`) | ✅ 7/7 |
| 4. Fluxo do aluno pela interface | Treino de 10 questões feito pelo site, clicando como um aluno | ✅ 9/9 |

Os scripts usados estão nesta pasta e podem ser executados de novo:

- [`teste-anonimo.js`](teste-anonimo.js) — bloco 1 (`node testes/teste-anonimo.js`, lê a URL e a chave do `config.js`)
- [`teste-logado.js`](teste-logado.js) — blocos 2 a 4 (colar no Console do navegador com o site aberto e logado como administrador)

## 1. Segurança sem login (visitante)

Simula alguém que pegou a URL e a chave pública do site (visíveis para qualquer visitante) e tenta usar a API diretamente.

| # | Teste | Esperado | Obtido | |
|---|---|---|---|---|
| 1.1 | Site publicado usa a correção no servidor | versão nova no ar | versão nova no ar | ✅ |
| 1.2 | Site publicado está público | HTTP 200 | HTTP 200 | ✅ |
| 1.3 | Ler a tabela `questoes` | nenhum dado | HTTP 401 (42501, acesso negado) | ✅ |
| 1.4 | Ler a tabela `textos` | nenhum dado | 0 linhas | ✅ |
| 1.5 | Ler a tabela `perfis` | nenhum dado | 0 linhas | ✅ |
| 1.6 | Ler a tabela `tentativas` (históricos) | nenhum dado | 0 linhas | ✅ |
| 1.7 | Ler a coluna `correta` (gabarito) | acesso negado | HTTP 401 (42501) | ✅ |
| 1.8 | Criar uma questão | bloqueado | HTTP 401 (42501) | ✅ |
| 1.9 | Alterar uma questão | bloqueado | HTTP 401 (42501) | ✅ |
| 1.10 | Apagar uma questão | bloqueado | HTTP 401 (42501) | ✅ |
| 1.11 | Tornar-se administrador | bloqueado | HTTP 401 (42501) | ✅ |
| 1.12 | Gravar uma nota direto na tabela | bloqueado | HTTP 401 (42501) | ✅ |
| 1.13 | Chamar `finalizar_prova` | acesso negado | HTTP 401 (42501) | ✅ |
| 1.14 | Chamar `meu_gabarito` | acesso negado | HTTP 401 (42501) | ✅ |
| 1.15 | Chamar `admin_questoes` | acesso negado | HTTP 401 (42501) | ✅ |
| 1.16 | Chamar `admin_salvar_questao` | acesso negado | HTTP 401 (42501) | ✅ |
| 1.17 | Chamar `admin_excluir_questao` | acesso negado | HTTP 401 (42501) | ✅ |

## 2. Segurança com login

Simula um usuário cadastrado tentando ver o gabarito antes da prova, inventar notas ou enviar provas adulteradas. O teste foi feito com a conta de administrador. Os bloqueios de tabela (2.2 a 2.7) valem também para administradores, porque as alterações só são aceitas pelas funções do banco.

| # | Teste | Esperado | Obtido | |
|---|---|---|---|---|
| 2.1 | Sessão logada | usuário logado | logado | ✅ |
| 2.2 | Ler a coluna `correta` direto da tabela | acesso negado | 42501 permission denied | ✅ |
| 2.3 | Ler a coluna `comentario` direto da tabela | acesso negado | 42501 permission denied | ✅ |
| 2.4 | Ler enunciado e alternativas | permitido | 3 linhas | ✅ |
| 2.5 | Gravar nota inventada (70/70) direto na tabela | bloqueado | 42501 permission denied | ✅ |
| 2.6 | Alterar o próprio perfil (ex.: virar admin) | bloqueado | 42501 permission denied | ✅ |
| 2.7 | Alterar questão direto na tabela | bloqueado | 42501 permission denied | ✅ |
| 2.8 | Enviar prova com 71 questões | recusada | "A prova contém questões inválidas." | ✅ |
| 2.9 | Enviar prova com questão repetida | recusada | "A prova contém questões inválidas." | ✅ |
| 2.10 | Enviar prova com questão inexistente | recusada | "A prova contém questões inválidas." | ✅ |
| 2.11 | Prova de Técnico com questão de Enfermeiro | recusada | "A prova contém questões inválidas." | ✅ |
| 2.12 | Ordem de alternativas adulterada | recusada | "A prova contém questões inválidas." | ✅ |
| 2.13 | Cargo inválido | recusada | "Dados da prova inválidos." | ✅ |

## 3. Correção no servidor e administração

| # | Teste | Esperado | Obtido | |
|---|---|---|---|---|
| 3.1 | Servidor corrige prova com 1 resposta certa e 1 inválida (`9`) | 1/2 | 1/2 | ✅ |
| 3.2 | "Simulado completo" com só 2 questões não pode aprovar | aprovado = false | aprovado = false | ✅ |
| 3.3 | Resultado registrado por questão | pt-001 certa, pt-002 errada | `{"pt-001":true,"pt-002":false}` | ✅ |
| 3.4 | Admin carrega o banco completo com gabarito | 510 questões | 510 questões | ✅ |
| 3.5 | Gabarito liberado para o administrador | 510 itens | 510 itens | ✅ |
| 3.6 | Admin salva questão pela função (sem alterar o conteúdo) | salvo e idêntico | salvo, conteúdo idêntico | ✅ |
| 3.7 | Textos de apoio disponíveis | 6 textos | 6 textos | ✅ |

## 4. Fluxo do aluno pela interface

Treino de 10 questões de Língua Portuguesa feito pelo site publicado: sorteio, resposta clicando nas alternativas, finalização e revisão.

| # | Teste | Esperado | Obtido | |
|---|---|---|---|---|
| 4.1 | Painel carrega | saudação e banco com 510 questões | ok | ✅ |
| 4.2 | Sorteio do treino | 10 questões distintas de Português | pt-014, pt-011, pt-025, pt-021, pt-033, pt-006, pt-044, pt-039, pt-008, pt-007 | ✅ |
| 4.3 | Alternativas embaralhadas | ordem diferente de A–E | ex.: 03241, 14023, 02314 | ✅ |
| 4.4 | Respostas registradas pela interface | 10 respondidas | 10 respondidas | ✅ |
| 4.5 | Prova finalizada e salva no servidor | novo registro no histórico | registro criado, tela de resultado | ✅ |
| 4.6 | Nota do servidor confere com conferência independente | iguais | servidor 5/10, conferência 5/10 | ✅ |
| 4.7 | Tela de resultado | acertos e desempenho por área | "5 / 10 acertos (50%)" | ✅ |
| 4.8 | Gabarito comentado após a prova | 10 questões com gabarito e comentário | 10/10 com comentário | ✅ |
| 4.9 | Contador de questões vistas | aumenta | "você já viu 10 · 318 inéditas" | ✅ |

## Testes anteriores (desenvolvimento, modo local)

Executados durante o desenvolvimento, com o site em modo local:

- Duas provas completas seguidas não repetiram nenhuma questão (prioridade às inéditas).
- O treino das erradas selecionou exatamente as questões erradas na prova anterior.
- A regra de aprovação do edital (≥ 35 pontos, sem zerar área) foi aplicada corretamente.
- Uma prova em andamento foi retomada após recarregar a página.
- O layout foi verificado em tela de celular (375 px).
- O widget de CAPTCHA (Cloudflare Turnstile) carregou e gerou o token com a chave de teste da Cloudflare.

## Não testado / limitações

| Item | Motivo |
|---|---|
| Aluno comum recebe o gabarito só das questões já feitas | Exige uma conta de aluno (não administrador). A regra está na função `meu_gabarito` e foi verificada por revisão de código. |
| Limite de 100 provas por dia por aluno | Exigiria criar 100 registros no banco de produção. |
| CAPTCHA em produção | Ainda não foi ligado no Supabase (ver `COMO-CONFIGURAR.md`). |
| E-mails de confirmação e de recuperação de senha | O servidor de e-mail padrão do Supabase limita os envios a cerca de 2 por hora (veja abaixo). |

## Observações e próximos passos

1. **Cadastro bloqueado por limite de e-mail (encontrado em uso real):** um cadastro falhou com HTTP 429 (`/auth/v1/signup`) porque o servidor de e-mail padrão do Supabase permite poucos envios por hora. Medida imediata: desligar a confirmação de e-mail. Solução definitiva: configurar um SMTP próprio (Brevo ou Resend).
2. **Ligar o CAPTCHA** seguindo a ordem do `COMO-CONFIGURAR.md`: primeiro publicar o site com a Site Key, depois ativar no Supabase.
3. **Registros de teste:** os blocos 3 e 4 criaram 2 registros no histórico da conta de administrador. Eles podem ser removidos no SQL Editor:
   ```sql
   delete from public.tentativas where id in (2, 3);
   ```
