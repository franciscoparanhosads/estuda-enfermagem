// Testes de segurança "de fora": usa só a URL e a chave pública (o que qualquer visitante vê no site).
// Uso: node testes/teste-anonimo.js
// Lê a URL e a chave do config.js (que fica fora do Git).
const fs = require('fs'), path = require('path');

const cfg = fs.readFileSync(path.join(__dirname, '..', 'config.js'), 'utf8');
const URL = cfg.match(/supabaseUrl:\s*'([^']+)'/)[1];
const KEY = cfg.match(/supabaseAnonKey:\s*'([^']+)'/)[1];
const SITE = 'https://estudaenfermagem.netlify.app';
const H = { apikey: KEY, Authorization: 'Bearer ' + KEY, 'Content-Type': 'application/json', Prefer: 'return=representation' };

const resultados = [];
async function caso(nome, esperado, fn) {
  let obtido, passou;
  try { [passou, obtido] = await fn(); } catch (e) { passou = false; obtido = 'erro: ' + e.message; }
  resultados.push({ nome, esperado, obtido, passou });
}
const req = async (metodo, rota, corpo) => {
  const r = await fetch(URL + rota, { method: metodo, headers: H, body: corpo && JSON.stringify(corpo) });
  const txt = await r.text();
  let json; try { json = JSON.parse(txt); } catch (e) { json = txt; }
  return { status: r.status, json };
};
const negado = r => r.status === 401 || r.status === 403 || (r.json && r.json.code === '42501');
const resumo = r => `HTTP ${r.status}` + (Array.isArray(r.json) ? `, ${r.json.length} linha(s)` : r.json && r.json.code ? `, ${r.json.code}` : '');

(async () => {
  await caso('Site publicado usa correção no servidor', 'index.html chama finalizar_prova', async () => {
    const html = await (await fetch(SITE + '/?t=' + Date.now())).text();
    const ok = html.includes('finalizar_prova');
    return [ok, ok ? 'versão nova no ar' : 'versão antiga no ar'];
  });
  await caso('Site publicado está público', 'HTTP 200 sem tela de login do Netlify', async () => {
    const r = await fetch(SITE + '/', { redirect: 'manual' });
    return [r.status === 200, 'HTTP ' + r.status];
  });

  for (const t of ['questoes', 'textos', 'perfis', 'tentativas']) {
    await caso(`Visitante lê a tabela ${t}`, 'nenhum dado (0 linhas ou acesso negado)', async () => {
      const r = await req('GET', `/rest/v1/${t}?select=*&limit=5`);
      return [negado(r) || (Array.isArray(r.json) && r.json.length === 0), resumo(r)];
    });
  }
  await caso('Visitante lê a coluna "correta" (gabarito)', 'acesso negado', async () => {
    const r = await req('GET', '/rest/v1/questoes?select=id,correta&limit=5');
    return [negado(r) || (Array.isArray(r.json) && r.json.length === 0), resumo(r)];
  });
  await caso('Visitante cria uma questão', 'bloqueado', async () => {
    const r = await req('POST', '/rest/v1/questoes', { id: 'teste-invasao', area: 'pt', enunciado: 'x', alternativas: ['a', 'b', 'c', 'd', 'e'], correta: 0 });
    return [r.status >= 400, resumo(r)];
  });
  await caso('Visitante altera uma questão', 'nenhuma linha alterada', async () => {
    const r = await req('PATCH', '/rest/v1/questoes?id=eq.pt-001', { enunciado: 'invadido' });
    return [negado(r) || (Array.isArray(r.json) && r.json.length === 0), resumo(r)];
  });
  await caso('Visitante apaga uma questão', 'nenhuma linha apagada', async () => {
    const r = await req('DELETE', '/rest/v1/questoes?id=eq.pt-001');
    return [negado(r) || (Array.isArray(r.json) && r.json.length === 0), resumo(r)];
  });
  await caso('Visitante se torna administrador', 'nenhuma linha alterada', async () => {
    const r = await req('PATCH', '/rest/v1/perfis?admin=eq.false', { admin: true });
    return [negado(r) || (Array.isArray(r.json) && r.json.length === 0), resumo(r)];
  });
  await caso('Visitante grava uma nota direto na tabela', 'bloqueado', async () => {
    const r = await req('POST', '/rest/v1/tentativas', { cargo: 'tec', modo: 'completo', questoes: [], respostas: {}, acertos: 70, total: 70, por_area: {}, tempo: 1 });
    return [r.status >= 400, resumo(r)];
  });
  const rpcs = {
    finalizar_prova: { p_cargo: 'tec', p_modo: 'area', p_area: 'pt', p_questoes: [{ id: 'pt-001', ordem: [0, 1, 2, 3, 4] }], p_respostas: { 'pt-001': 0 }, p_tempo: 1 },
    meu_gabarito: {},
    admin_questoes: {},
    admin_salvar_questao: { q: { id: 'teste-invasao', area: 'pt', enunciado: 'x', alternativas: ['a', 'b', 'c', 'd', 'e'], correta: 0 } },
    admin_excluir_questao: { p_id: 'pt-001' }
  };
  for (const [fn, args] of Object.entries(rpcs)) {
    await caso(`Visitante chama a função ${fn}`, 'acesso negado (função existe)', async () => {
      const r = await req('POST', `/rest/v1/rpc/${fn}`, args);
      const naoExiste = r.status === 404 || (r.json && r.json.code === 'PGRST202');
      return [!naoExiste && negado(r), naoExiste ? 'função não encontrada (SQL não aplicado?)' : resumo(r)];
    });
  }

  const ok = resultados.filter(r => r.passou).length;
  console.log(JSON.stringify({ data: new Date().toISOString(), passou: ok, total: resultados.length, resultados }, null, 2));
})();
