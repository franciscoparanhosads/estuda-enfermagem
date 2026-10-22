// Modelo de configuração do Supabase.
// Copie este arquivo para "config.js" e preencha com os dados do seu projeto.
// O config.js real fica fora do Git (.gitignore). Sem ele, o site roda no MODO LOCAL
// (contas e histórico só neste aparelho, sem servidor).
// Onde encontrar (painel do Supabase):
//   supabaseUrl     = Project Settings → Data API → Project URL (sem o /rest/v1/)
//   supabaseAnonKey = Project Settings → API Keys → chave "anon public" (ou "publishable")
window.SIMULADO_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: '',
  // Opcional: "Site Key" do Cloudflare Turnstile (CAPTCHA no login/cadastro).
  // Preencha ANTES de ligar o CAPTCHA no Supabase (Authentication → Attack Protection).
  turnstileSiteKey: ''
};
