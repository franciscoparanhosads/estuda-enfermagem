# Próximas atualizações

Lista do que está planejado para o projeto, em ordem de prioridade.

Legenda: ⬜ a fazer · 🟨 parcialmente pronto · ✅ concluído

## Prioridade alta

### ⬜ Serviço de e-mail próprio (SMTP com Brevo)

**Problema:** o servidor de e-mail padrão do Supabase permite só cerca de 2 envios por hora. Um cadastro real já falhou por isso (HTTP 429 em `/auth/v1/signup`). Por enquanto, a confirmação de e-mail está desligada para os alunos conseguirem se cadastrar.

**Plano:**
1. Criar conta gratuita no Brevo (300 e-mails/dia) e verificar o e-mail remetente.
2. Gerar a SMTP key e configurar em **Supabase → Authentication → Emails → SMTP Settings** (servidor `smtp-relay.brevo.com`, porta `587`).
3. Aumentar o limite de envio em **Authentication → Rate Limits**.
4. Religar **Confirm email** e testar um cadastro novo e o "Esqueci minha senha".

**Resultado esperado:** confirmação de cadastro e recuperação de senha funcionando para todos os alunos.

> A SMTP key é secreta: fica só no painel do Supabase, nunca no código ou no repositório.

### 🟨 CAPTCHA no login e no cadastro (Cloudflare Turnstile)

**Situação:** o site já está preparado (campo `turnstileSiteKey` no `config.js`) e o widget foi testado com a chave de teste da Cloudflare. Falta ativar em produção.

**Plano (nesta ordem):**
1. Criar o widget em **Cloudflare → Turnstile** para o domínio `estudaenfermagem.netlify.app`.
2. Colocar a **Site Key** no `config.js` e republicar o site no Netlify.
3. Só depois, ligar em **Supabase → Authentication → Attack Protection** com a **Secret Key**.

> Se o passo 3 for feito antes do 2, ninguém consegue entrar no site.

## Prioridade média

### ⬜ E-mails em português

Traduzir os modelos de e-mail do Supabase (confirmação de cadastro e recuperação de senha) em **Authentication → Emails → Templates**. Depende do SMTP próprio.

### ⬜ Testar o gabarito com uma conta de aluno

Criar uma conta de aluno (sem perfil de administrador) e confirmar que ela recebe o gabarito **somente** das questões que já fez. Hoje essa regra foi verificada só por revisão de código (ver [relatório de testes](testes/RELATORIO-DE-TESTES.md)).

### ⬜ Revisão do banco de questões

Revisar o conteúdo das 1.500 questões com alguém da área (atualizações de normas, como a COFEN 736/2024 e o rastreamento do câncer do colo do útero por DNA-HPV) e corrigir pelo painel de administração.

## Prioridade baixa

### ⬜ Prints do site no README

Adicionar capturas de tela (login, prova, resultado e painel) para valorizar o projeto no portfólio.

### ⬜ Domínio próprio

Registrar um domínio (ex.: `.com.br`) para o site e, com ele, migrar o e-mail para o Resend, com melhor entrega e menos chance de cair no spam.

### ⬜ Limpeza dos registros de teste

Remover do histórico os 2 registros criados nos testes de produção:

```sql
delete from public.tentativas where id in (2, 3);
```

## Concluído

- ✅ Banco com 1.500 questões (Português, SUS, Técnico e Enfermeiro), nos formatos usados pela banca
- ✅ Provas sorteadas na hora, com prioridade às questões inéditas e alternativas embaralhadas
- ✅ Login real com Supabase e histórico salvo no servidor
- ✅ Painel de administração (questões, textos e alunos)
- ✅ Segurança: gabarito oculto, correção no servidor e limites anti-abuso
- ✅ Testes em produção: 46/46 aprovados
- ✅ Site publicado no Netlify e código no GitHub
