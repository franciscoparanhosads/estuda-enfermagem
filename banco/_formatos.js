// Formatos de questão usados pela banca. As funções montam as 5 alternativas a partir dos itens;
// a primeira alternativa gerada é sempre a correta (o site embaralha a ordem na prova).
// A escolha das alternativas erradas é determinística (depende do texto), então os IDs e o
// conteúdo das questões não mudam entre a carga do banco e o modo local.
//
//   vf(enunciado, [[texto, verdadeiro?], ...], comentário, extra?)  → "Registre V ou F" com sequência
//   af(enunciado, [[texto, verdadeiro?], ...], comentário, extra?)  → "Analise as afirmativas I, II, III..."
//   extra: campos adicionais, por exemplo { txt: 7 } para questões ligadas a um texto de apoio.

const ROMANOS = ['I', 'II', 'III', 'IV', 'V'];

function _hashTexto(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function _distratores(candidatos, correta, semente, n) {
  const pool = candidatos.filter(c => c !== correta);
  const out = [];
  let x = semente || 1;
  while (out.length < n && pool.length) {
    x = Math.imul(x ^ (x >>> 15), 2246822507) >>> 0;
    x = (x ^ (x >>> 13)) >>> 0;
    out.push(pool.splice(x % pool.length, 1)[0]);
  }
  return out;
}

function vf(t, itens, e, extra) {
  const n = itens.length;
  const seq = bits => bits.map(b => (b ? 'V' : 'F')).join(', ');
  const correta = seq(itens.map(i => i[1]));
  const todas = [];
  for (let m = 0; m < (1 << n); m++) todas.push(seq(Array.from({ length: n }, (_, k) => (m >> (n - 1 - k)) & 1)));
  return Object.assign({
    t: t + '\n\n' + itens.map(i => '( ) ' + i[0]).join('\n') + '\n\nAssinale a alternativa que apresenta a sequência correta, de cima para baixo.',
    o: [correta].concat(_distratores(todas, correta, _hashTexto(t), 4)),
    e
  }, extra || {});
}

function af(t, itens, e, extra) {
  const n = itens.length;
  const rotulo = idx => {
    const r = idx.map(i => ROMANOS[i]);
    const s = r.length === 1 ? r[0] : r.slice(0, -1).join(', ') + ' e ' + r[r.length - 1];
    return idx.length === n ? s : s + ' apenas';
  };
  const certos = itens.map((x, i) => (x[1] ? i : -1)).filter(i => i >= 0);
  if (!certos.length) throw new Error('af() precisa de ao menos um item verdadeiro: ' + t.slice(0, 60));
  const todas = [];
  for (let m = 1; m < (1 << n); m++) {
    const idx = [];
    for (let k = 0; k < n; k++) if (m & (1 << k)) idx.push(k);
    todas.push(rotulo(idx));
  }
  const correta = rotulo(certos);
  return Object.assign({
    t: t + '\n\n' + itens.map((x, i) => ROMANOS[i] + '. ' + x[0]).join('\n') + '\n\nEstá correto o que se afirma em:',
    o: [correta].concat(_distratores(todas, correta, _hashTexto(t), 4)),
    e
  }, extra || {});
}
