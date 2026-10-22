// Gera supabase/seed.sql a partir dos arquivos de questões (questoes.js + banco/*.js).
// Uso: node supabase/gera-seed.js
// Os IDs (pt-001, sus-001, tec-001, enf-001...) seguem a ordem dos arquivos — por isso,
// acrescente questões novas sempre no FINAL das listas (ou cadastre pelo painel do administrador).
const fs = require('fs'), path = require('path'), vm = require('vm');

const raiz = path.join(__dirname, '..');
const arquivos = ['questoes.js', 'banco/pt-sus.js', 'banco/tec-1.js', 'banco/tec-2.js', 'banco/enf-1.js', 'banco/enf-2.js'];
const ctx = {};
vm.createContext(ctx);
for (const f of arquivos) vm.runInContext(fs.readFileSync(path.join(raiz, f), 'utf8').replace(/^const /gm, 'var '), ctx, { filename: f });

const sql = s => "'" + String(s).replace(/'/g, "''") + "'";
const listas = { pt: ctx.Q_PT, sus: ctx.Q_SUS, tec: ctx.Q_TEC, enf: ctx.Q_ENF };
const insere = (area, lista) => lista.map((q, i) => {
  if (q.o.length !== 5) throw new Error(`${area} #${i + 1}: precisa de 5 alternativas`);
  const id = `${area}-${String(i + 1).padStart(3, '0')}`;
  return `insert into public.questoes (id, area, texto_id, enunciado, alternativas, correta, comentario) values (${sql(id)}, ${sql(area)}, ${q.txt || 'null'}, ${sql(q.t)}, ${sql(JSON.stringify(q.o))}::jsonb, 0, ${sql(q.e || '')})`
    + ' on conflict (id) do update set area = excluded.area, texto_id = excluded.texto_id, enunciado = excluded.enunciado, alternativas = excluded.alternativas, correta = excluded.correta, comentario = excluded.comentario;';
});

// Dividido em 3 arquivos para caber no SQL Editor do Supabase (rode na ordem)
const textos = ['insert into public.textos (id, conteudo) values',
  Object.entries(ctx.TEXTOS).map(([id, c]) => `  (${id}, ${sql(c)})`).join(',\n'),
  'on conflict (id) do update set conteudo = excluded.conteudo;'];
const partes = {
  'seed-1-portugues-sus.sql': [...textos, ...insere('pt', listas.pt), ...insere('sus', listas.sus)],
  'seed-2-tecnico.sql': insere('tec', listas.tec),
  'seed-3-enfermeiro.sql': insere('enf', listas.enf)
};
for (const [nome, linhas] of Object.entries(partes)) {
  fs.writeFileSync(path.join(__dirname, nome), ['-- Gerado por gera-seed.js', 'begin;', ...linhas, 'commit;'].join('\n') + '\n');
  console.log(nome, Math.round(fs.statSync(path.join(__dirname, nome)).size / 1024) + ' KB');
}
console.log('Questões:', Object.fromEntries(Object.entries(listas).map(([k, v]) => [k, v.length])));
