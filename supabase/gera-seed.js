// Gera os arquivos SQL de carga do banco de questões a partir de questoes.js + banco/*.js.
//
// Uso:
//   node supabase/gera-seed.js                      → carga completa em supabase/carga/
//   node supabase/gera-seed.js --desde pt=60,sus=60,tec=208,enf=182
//                                                   → só as questões novas (após essas quantidades) em supabase/carga-novas/
//
// Os IDs (pt-001, sus-001, tec-001, enf-001...) seguem a ordem dos arquivos abaixo — por isso,
// acrescente questões sempre no FINAL das listas ou em arquivos novos no FINAL desta lista
// (e na lista LOCAL_FILES do index.html), nunca no meio.
// Os arquivos são divididos em partes de até ~150 KB para caber no SQL Editor do Supabase.
const fs = require('fs'), path = require('path'), vm = require('vm');

const ARQUIVOS = [
  'questoes.js', 'banco/_formatos.js',
  'banco/pt-sus.js', 'banco/tec-1.js', 'banco/tec-2.js', 'banco/enf-1.js', 'banco/enf-2.js',
  'banco/pt-2.js', 'banco/pt-3.js', 'banco/sus-2.js', 'banco/sus-3.js',
  'banco/tec-3.js', 'banco/tec-4.js', 'banco/tec-5.js', 'banco/tec-6.js', 'banco/tec-7.js', 'banco/tec-8.js',
  'banco/enf-3.js', 'banco/enf-4.js', 'banco/enf-5.js', 'banco/enf-6.js', 'banco/enf-7.js', 'banco/enf-8.js',
  'banco/fechamento.js'
];
const LIMITE_BYTES = 150 * 1024;

const raiz = path.join(__dirname, '..');
const ctx = {};
vm.createContext(ctx);
for (const f of ARQUIVOS) vm.runInContext(fs.readFileSync(path.join(raiz, f), 'utf8').replace(/^const /gm, 'var '), ctx, { filename: f });

const listas = { pt: ctx.Q_PT, sus: ctx.Q_SUS, tec: ctx.Q_TEC, enf: ctx.Q_ENF };
const argDesde = process.argv.indexOf('--desde');
const desde = argDesde > 0
  ? Object.fromEntries(process.argv[argDesde + 1].split(',').map(p => p.split('=')).map(([k, v]) => [k, +v]))
  : { pt: 0, sus: 0, tec: 0, enf: 0 };

// Validação
const erros = [];
for (const [area, lista] of Object.entries(listas)) {
  lista.forEach((q, i) => {
    const onde = `${area} #${i + 1}`;
    if (!q.t || !q.e) erros.push(`${onde}: enunciado ou comentário vazio`);
    if (!Array.isArray(q.o) || q.o.length !== 5) erros.push(`${onde}: precisa de 5 alternativas`);
    else if (new Set(q.o).size !== 5) erros.push(`${onde}: alternativas repetidas`);
    if (q.txt && !ctx.TEXTOS[q.txt]) erros.push(`${onde}: texto ${q.txt} inexistente`);
  });
}
if (erros.length) { console.error(erros.join('\n')); process.exit(1); }

const sql = s => "'" + String(s).replace(/'/g, "''") + "'";
const linhas = [
  'insert into public.textos (id, conteudo) values\n' +
  Object.entries(ctx.TEXTOS).map(([id, c]) => `  (${id}, ${sql(c)})`).join(',\n') +
  '\non conflict (id) do update set conteudo = excluded.conteudo;'
];
let total = 0;
for (const [area, lista] of Object.entries(listas)) {
  lista.forEach((q, i) => {
    if (i < (desde[area] || 0)) return;
    const id = `${area}-${String(i + 1).padStart(3, '0')}`;
    linhas.push(`insert into public.questoes (id, area, texto_id, enunciado, alternativas, correta, comentario) values (${sql(id)}, ${sql(area)}, ${q.txt || 'null'}, ${sql(q.t)}, ${sql(JSON.stringify(q.o))}::jsonb, 0, ${sql(q.e)})`
      + ' on conflict (id) do update set area = excluded.area, texto_id = excluded.texto_id, enunciado = excluded.enunciado, alternativas = excluded.alternativas, correta = excluded.correta, comentario = excluded.comentario;');
    total++;
  });
}

const pasta = path.join(__dirname, argDesde > 0 ? 'carga-novas' : 'carga');
fs.rmSync(pasta, { recursive: true, force: true });
fs.mkdirSync(pasta);
const partes = [[]];
let tamanho = 0;
for (const l of linhas) {
  const b = Buffer.byteLength(l, 'utf8') + 1;
  if (tamanho + b > LIMITE_BYTES && partes[partes.length - 1].length) { partes.push([]); tamanho = 0; }
  partes[partes.length - 1].push(l);
  tamanho += b;
}
partes.forEach((p, i) => {
  const nome = `parte-${String(i + 1).padStart(2, '0')}.sql`;
  fs.writeFileSync(path.join(pasta, nome), ['-- Gerado por supabase/gera-seed.js — rode as partes em ordem', 'begin;', ...p, 'commit;'].join('\n') + '\n');
  console.log(path.relative(raiz, path.join(pasta, nome)), Math.round(fs.statSync(path.join(pasta, nome)).size / 1024) + ' KB');
});
console.log(`${total} questões em ${partes.length} parte(s).`, 'Banco completo:', Object.fromEntries(Object.entries(listas).map(([k, v]) => [k, v.length])));
