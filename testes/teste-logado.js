// Testes com usuário logado — cole no Console do navegador (F12) com o site aberto e logado.
// Cria 2 registros de teste no histórico (uma prova de validação e um treino de 10 questões).
// Os testes de correção e do painel exigem uma conta de administrador (usam o gabarito para conferir).
(async () => {
  const W = ms => new Promise(r => setTimeout(r, ms));
  const res = [];
  const add = (nome, esperado, passou, obtido) => res.push({ nome, esperado, passou, obtido });
  const st = r => r.error ? `${r.error.code || ''} ${r.error.message}`.trim() : `ok (${Array.isArray(r.data) ? r.data.length + ' linhas' : typeof r.data})`;
  const o = [0, 1, 2, 3, 4];
  const fin = (q, resp, extra = {}) => sb.rpc('finalizar_prova', Object.assign({ p_cargo: 'tec', p_modo: 'area', p_area: 'pt', p_questoes: q, p_respostas: resp || {}, p_tempo: 10 }, extra));

  // ---- Bloqueios ----
  add('Sessão logada', 'usuário logado', !!ME, ME ? `logado (admin: ${ME.admin})` : 'não logado');
  let r = await sb.from('questoes').select('id,correta').limit(3);
  add('Ler "correta" direto da tabela', 'acesso negado', !!r.error, st(r));
  r = await sb.from('questoes').select('id,comentario').limit(3);
  add('Ler "comentario" direto da tabela', 'acesso negado', !!r.error, st(r));
  r = await sb.from('questoes').select('id,area,enunciado,alternativas').limit(3);
  add('Ler enunciado e alternativas', 'permitido', !r.error && r.data.length === 3, st(r));
  r = await sb.from('tentativas').insert({ cargo: 'tec', modo: 'completo', questoes: [], respostas: {}, acertos: 70, total: 70, por_area: {}, tempo: 1 });
  add('Gravar nota inventada direto na tabela', 'bloqueado', !!r.error, st(r));
  r = await sb.from('perfis').update({ nome: 'teste' }).eq('id', ME.id).select();
  add('Alterar o próprio perfil', 'bloqueado', !!r.error || (r.data || []).length === 0, st(r));
  r = await sb.from('questoes').update({ enunciado: 'x' }).eq('id', 'pt-001').select();
  add('Alterar questão direto na tabela', 'bloqueado', !!r.error || (r.data || []).length === 0, st(r));
  r = await fin(Array.from({ length: 71 }, (_, i) => ({ id: 'tec-' + String(i + 1).padStart(3, '0'), ordem: o })), {}, { p_area: 'esp' });
  add('Prova com 71 questões', 'recusada', !!r.error, st(r));
  r = await fin([{ id: 'pt-001', ordem: o }, { id: 'pt-001', ordem: o }]);
  add('Prova com questão repetida', 'recusada', !!r.error, st(r));
  r = await fin([{ id: 'nao-existe', ordem: o }]);
  add('Prova com questão inexistente', 'recusada', !!r.error, st(r));
  r = await fin([{ id: 'enf-001', ordem: o }], {}, { p_cargo: 'tec', p_area: 'esp' });
  add('Prova de Técnico com questão de Enfermeiro', 'recusada', !!r.error, st(r));
  r = await fin([{ id: 'pt-001', ordem: [0, 1] }]);
  add('Ordem de alternativas adulterada', 'recusada', !!r.error, st(r));
  r = await fin([{ id: 'pt-001', ordem: o }], {}, { p_cargo: 'medico' });
  add('Cargo inválido', 'recusada', !!r.error, st(r));

  // ---- Correção no servidor e funções de administrador ----
  r = await fin([{ id: 'pt-001', ordem: o }, { id: 'pt-002', ordem: o }], { 'pt-001': BY_ID['pt-001'].c, 'pt-002': 9 }, { p_modo: 'completo', p_area: null });
  add('Correção no servidor (1 certa + 1 inválida)', 'acertos 1/2', !r.error && r.data.acertos === 1 && r.data.total === 2, r.error ? r.error.message : `${r.data.acertos}/${r.data.total}`);
  add('Simulado completo incompleto não aprova', 'aprovado = false', !r.error && r.data.aprovado === false, r.error ? r.error.message : 'aprovado = ' + r.data.aprovado);
  r = await sb.rpc('admin_questoes').range(0, 999);
  add('Admin carrega o banco com gabarito', '510 questões', !r.error && r.data.length === 510, r.error ? r.error.message : r.data.length + ' questões');

  // ---- Prova pela interface ----
  window.confirm = () => true;
  go('home'); await W(100);
  $('#qtd').value = '10'; $('#qtd').dispatchEvent(new Event('change'));
  $('[data-start=area][data-area=pt]').click(); await W(100);
  add('Sorteio de 10 questões de Português', '10 distintas', CUR.ids.length === 10 && new Set(CUR.ids).size === 10, CUR.ids.join(', '));
  let esperado = 0;
  for (let i = 0; i < 10; i++) {
    const btn = $('.opt'); const orig = +btn.dataset.o; btn.click(); await W(30);
    if (orig === BY_ID[CUR.ids[i]].c) esperado++;
    const nx = $('#next'); if (!nx.disabled) { nx.click(); await W(30); }
  }
  $('#fin').click(); await W(2500);
  const h = HIST[HIST.length - 1];
  add('Nota do servidor confere', 'igual à conferência', h.acertos === esperado, `servidor ${h.acertos}, conferência ${esperado}`);

  console.table(res);
  console.log(`${res.filter(x => x.passou).length}/${res.length} passaram`);
})();
