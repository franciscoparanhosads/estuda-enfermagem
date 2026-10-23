# Notas de atualização

Histórico das versões do Estuda Enfermagem, da mais recente para a mais antiga.

---

## Versão 1.3 — 23/10/2026

### Banco de questões ampliado para 1.500

| Área | Antes | Agora |
|---|---|---|
| Língua Portuguesa | 60 | **200** |
| Legislação do SUS | 60 | **200** |
| Técnico em Enfermagem | 208 | **546** |
| Enfermeiro | 182 | **554** |
| **Total** | 510 | **1.500** |

- **Questões inéditas no estilo da banca**, elaboradas a partir da análise de duas provas anteriores de Enfermeiro (um concurso hospitalar e um da Atenção Básica).
- **Novos formatos de questão**, iguais aos das provas reais:
  - "Registre V ou F" com sequência de quatro itens;
  - "Analise as afirmativas I, II e III";
  - associação de colunas;
  - asserção-razão (I PORQUE II).
- **Gerador automático de alternativas** para os formatos V/F e de afirmativas (`banco/_formatos.js`): a alternativa correta é calculada a partir dos itens marcados como verdadeiros, o que evita erros de gabarito.
- **Português:** 6 novos textos de interpretação (12 no total) e questões de crase, regência, concordância, pontuação, sintaxe, orações, semântica, figuras de linguagem e coesão.
- **Legislação do SUS:** novos conteúdos, como Rede Alyne (Portaria GM/MS nº 5.350/2024), Rede de Atenção às Urgências e SAMU, PNH, RAPS, Rede de Cuidados à Pessoa com Deficiência, políticas de saúde do trabalhador, do idoso, do homem e da população negra, segurança do paciente e LC 141/2012.
- **Conhecimentos Específicos:** urgência e emergência (SAVC, PALS, trauma e reanimação neonatal 2022), obstetrícia e puerpério, Banco de Leite Humano (RDC 171/2006), UTI, centro cirúrgico, CME, controle de infecção, feridas, imunização, cálculo de medicamentos, gestão e Processo de Enfermagem (COFEN 736/2024).
- As 510 questões anteriores mantiveram os mesmos códigos, preservando o histórico dos alunos.

### Site

- **Removidas as referências ao concurso específico** (prefeitura, edital e banca) da tela de login, do título da página, do nome do atalho no celular, da tela de resultado e de duas questões. O site passou a se chamar **Estuda Enfermagem** em todos os pontos.
- **Questões V/F e de afirmativas** passaram a exibir cada item em uma linha, facilitando a leitura no celular.

### Painel de administração

- **Paginação** com botões « ‹ › » nas abas:
  - **Questões:** 50 por página;
  - **Textos:** 10 por página;
  - **Alunos:** 20 por página.
- **Busca de alunos pelo nome.**
- Ao editar uma questão e voltar, a lista permanece na mesma página.

### Correções

- **Consultas acima de 1.000 registros:** o gabarito dos alunos, o banco de questões do administrador e a lista de alunos e provas passaram a ser carregados em páginas, contornando o limite de 1.000 linhas por consulta da API do Supabase.
- **Carga do banco em partes de até 150 KB** (`supabase/carga/`), para caber no SQL Editor do Supabase, com opção de gerar apenas as questões novas (`node supabase/gera-seed.js --desde ...`).

---

## Versão 1.2 — 22/10/2026

### Testes e documentação

- **Relatório de testes em produção:** 46 de 46 testes aprovados, cobrindo segurança sem login, segurança com login, correção no servidor, funções de administrador e o fluxo completo do aluno ([relatório](testes/RELATORIO-DE-TESTES.md)).
- **Scripts de teste reutilizáveis:** `testes/teste-anonimo.js` e `testes/teste-logado.js`.
- **Roadmap** com as próximas atualizações planejadas ([ROADMAP](ROADMAP.md)).

---

## Versão 1.1 — 22/10/2026

### Segurança

- **Gabarito oculto:** a alternativa correta e o comentário só são enviados ao aluno depois que ele faz a questão.
- **Correção no servidor:** a nota é calculada por uma função do banco de dados (`finalizar_prova`), que valida a prova e impede o registro de notas inventadas.
- **Limites anti-abuso:** tamanho máximo dos registros, até 70 questões por prova e até 100 provas por dia por aluno.
- **Funções exclusivas de administrador** para criar, editar e excluir questões.
- **CAPTCHA opcional** (Cloudflare Turnstile) no login, no cadastro e na recuperação de senha, pronto para ser ativado.
- **Chaves fora do repositório:** o `config.js` passou a ser ignorado pelo Git, com um modelo em `config.example.js`.

---

## Versão 1.0 — 22/10/2026

### Lançamento

- Site publicado em [estudaenfermagem.netlify.app](https://estudaenfermagem.netlify.app), com banco de 510 questões.
- **Provas geradas na hora:** 70 questões (10 de Português, 10 de SUS e 50 de Específicos), priorizando questões inéditas e embaralhando as alternativas.
- **Correção pela regra de aprovação:** 35 pontos ou mais e nenhuma área zerada, com desempenho por área.
- **Gabarito comentado**, revisão das questões erradas, treino por área e treino das erradas.
- **Login real** com Supabase (e-mail e senha, recuperação de senha) e histórico salvo no servidor.
- **Painel de administração** para questões, textos de apoio e acompanhamento dos alunos.
- **Modo local**, que funciona sem servidor, para testes e uso offline.
