// Banco extra — Legislação do SUS (parte 2: CF/88, Lei 8.080, Lei 8.142, Decreto 7.508, LC 141, PNAB, PNH, Carta dos Direitos)
Q_SUS.push(
  // ---------- Constituição Federal ----------
  { t: "Segundo a Constituição Federal de 1988, a seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade destinadas a assegurar os direitos relativos à:",
    o: ["saúde, à previdência e à assistência social.", "saúde, à educação e à segurança pública.", "previdência, ao trabalho e à moradia.", "saúde, à alimentação e ao lazer.", "assistência social, à cultura e ao transporte."],
    e: "Art. 194 da CF/88. A saúde integra o capítulo da Seguridade Social, no Título VIII (Da Ordem Social)." },
  vf("Acerca da saúde na Constituição Federal de 1988, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["As ações e serviços de saúde são de relevância pública, cabendo ao Poder Público dispor sobre sua regulamentação, fiscalização e controle.", true],
    ["É vedada a participação direta ou indireta de empresas ou capitais estrangeiros na assistência à saúde no País, salvo nos casos previstos em lei.", true],
    ["Os agentes comunitários de saúde e os agentes de combate às endemias podem ser admitidos pelos gestores locais do SUS por meio de processo seletivo público.", true],
    ["A assistência à saúde é exclusiva do Poder Público, sendo vedada a atuação da iniciativa privada.", false]
  ], "A assistência à saúde é livre à iniciativa privada (art. 199), que pode participar do SUS de forma complementar. Os demais itens reproduzem os arts. 197, 199, §3º, e 198, §4º." ),
  { t: "De acordo com o art. 200 da Constituição Federal, compete ao SUS, além de outras atribuições:",
    o: ["incrementar, em sua área de atuação, o desenvolvimento científico e tecnológico e a inovação.", "regular as tarifas de energia elétrica dos hospitais privados.", "julgar as infrações éticas dos profissionais de saúde.", "definir o currículo das escolas de ensino fundamental.", "administrar os fundos de previdência dos servidores da saúde."],
    e: "Art. 200, V (redação da EC 85/2015). Também cabe ao SUS ordenar a formação de recursos humanos, executar vigilâncias e participar do saneamento básico." },

  // ---------- Lei 8.080/1990 ----------
  af("A Lei nº 8.080/1990 estabelece princípios e diretrizes para as ações e serviços públicos de saúde e para os serviços privados contratados ou conveniados que integram o SUS. Analise as afirmativas a seguir.", [
    ["A utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática é um dos princípios do SUS.", true],
    ["A descentralização político-administrativa, com direção única em cada esfera de governo, enfatiza a descentralização dos serviços para os municípios.", true],
    ["O direito à informação sobre sua saúde é assegurado às pessoas assistidas, mas a divulgação de informações sobre o potencial dos serviços não integra os princípios do SUS.", false]
  ], "O art. 7º prevê tanto o direito à informação às pessoas assistidas (V) quanto a divulgação de informações quanto ao potencial dos serviços de saúde e à sua utilização pelo usuário (VI)." ),
  vf("A Lei nº 8.080/1990 estabelece os princípios e diretrizes que orientam as ações e os serviços públicos de saúde. Com base nessas disposições, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A universalidade garante o acesso aos serviços de saúde em todos os níveis de assistência.", true],
    ["A integralidade da assistência refere-se apenas a ações individuais e curativas, sem contemplar as ações coletivas ou preventivas.", false],
    ["A preservação da autonomia das pessoas na defesa de sua integridade física e moral é um princípio do SUS.", true],
    ["A igualdade da assistência permite privilégios no atendimento conforme a condição econômica do usuário.", false]
  ], "A integralidade abrange ações preventivas e curativas, individuais e coletivas, em todos os níveis. A igualdade deve ocorrer sem preconceitos ou privilégios de qualquer espécie." ),
  { t: "A Lei nº 8.080/1990 inclui entre os princípios do SUS a integração, em nível executivo, das ações de saúde com as de:",
    o: ["meio ambiente e saneamento básico.", "segurança pública e defesa civil.", "educação e cultura.", "previdência e assistência social.", "habitação e transporte urbano."],
    e: "Art. 7º, X: integração em nível executivo das ações de saúde, meio ambiente e saneamento básico." },
  vf("A Lei nº 8.080/1990 prevê a criação de comissões intersetoriais de âmbito nacional, subordinadas ao Conselho Nacional de Saúde, destinadas a articular políticas e programas de interesse para a saúde. Sobre as atividades que essas comissões abrangerão, em especial, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["Alimentação e nutrição.", true],
    ["Vigilância sanitária e farmacoepidemiologia.", true],
    ["Saúde do trabalhador.", true],
    ["Segurança pública e previdência social.", false]
  ], "Art. 13: alimentação e nutrição; saneamento e meio ambiente; vigilância sanitária e farmacoepidemiologia; recursos humanos; ciência e tecnologia; saúde do trabalhador." ),
  { t: "Segundo a Lei nº 8.080/1990, deverão ser criadas comissões permanentes de integração entre:",
    o: ["os serviços de saúde e as instituições de ensino profissional e superior.", "os hospitais privados e as operadoras de planos de saúde.", "o Ministério da Saúde e os organismos internacionais.", "as secretarias de saúde e o Poder Judiciário.", "os conselhos de classe e as câmaras municipais."],
    e: "Art. 14. Essas comissões propõem prioridades, métodos e estratégias para a formação e a educação continuada dos recursos humanos do SUS." },
  { t: "A Lei nº 8.080/1990 reconhece o Conselho Nacional de Secretários de Saúde (CONASS) e o Conselho Nacional de Secretarias Municipais de Saúde (CONASEMS) como:",
    o: ["entidades representativas dos entes estaduais e municipais para tratar de matérias referentes à saúde.", "órgãos executores da assistência hospitalar de alta complexidade.", "instâncias de controle social com representação paritária de usuários.", "órgãos de fiscalização do exercício profissional.", "conselhos subordinados ao Ministério da Previdência."],
    e: "Art. 14-B. Os COSEMS são reconhecidos como representantes dos municípios no âmbito estadual." },
  { t: "Considerando a estrutura de gestão do SUS, a Comissão Intergestores Tripartite (CIT) é:",
    o: ["a instância de pactuação no âmbito da União, composta paritariamente por representantes do Ministério da Saúde, do CONASS e do CONASEMS.", "a instância de pactuação no âmbito municipal, composta pela Secretaria Municipal de Saúde e pela Câmara Municipal.", "o órgão de controle social no nível estadual, composto por usuários e trabalhadores.", "a instância de pactuação estadual, composta apenas pelo Secretário Estadual de Saúde.", "o comitê gestor municipal formado pelos diretores dos hospitais privados contratados."],
    e: "CIT: União (MS + CONASS + CONASEMS); CIB: Estado (SES + COSEMS); CIR: Região de Saúde. São instâncias de pactuação entre gestores, não de controle social." },
  { t: "Segundo a Lei nº 8.080/1990, para atender a necessidades coletivas, urgentes e transitórias, decorrentes de situações de perigo iminente, de calamidade pública ou de irrupção de epidemias, a autoridade competente da esfera administrativa correspondente poderá:",
    o: ["requisitar bens e serviços, tanto de pessoas naturais como de jurídicas, sendo-lhes assegurada justa indenização.", "confiscar bens privados sem qualquer indenização.", "suspender o funcionamento do Conselho de Saúde.", "dispensar a participação da comunidade nas decisões.", "transferir a gestão do SUS para a iniciativa privada."],
    e: "Art. 15, XIII, da Lei 8.080/90." },
  vf("A Lei nº 8.080/1990 define competências para a direção municipal do SUS. Registre V para as competências municipais e F para as que não são atribuídas ao município.", [
    ["Executar serviços de vigilância epidemiológica, vigilância sanitária, alimentação e nutrição, saneamento básico e saúde do trabalhador.", true],
    ["Celebrar contratos e convênios com entidades prestadoras de serviços privados de saúde, bem como controlar e avaliar sua execução.", true],
    ["Gerir laboratórios públicos de saúde e hemocentros.", true],
    ["Estabelecer normas e executar a vigilância sanitária de portos, aeroportos e fronteiras, com exclusividade.", false]
  ], "A vigilância sanitária de portos, aeroportos e fronteiras é atribuição da direção nacional (art. 16), podendo ser complementada pelos demais entes; ao município cabe colaborar (art. 18, IX)." ),
  { t: "De acordo com a Lei nº 8.080/1990, compete à direção estadual do SUS:",
    o: ["promover a descentralização para os municípios dos serviços e das ações de saúde e prestar-lhes apoio técnico e financeiro.", "executar diretamente todas as ações de atenção básica dos municípios.", "definir as normas nacionais de vigilância sanitária de portos e aeroportos.", "formular a política nacional de sangue e hemoderivados.", "celebrar contratos com organismos internacionais em nome da União."],
    e: "Art. 17, I e III. As competências nacionais e as municipais estão nos arts. 16 e 18." },
  { t: "Segundo a Lei nº 8.080/1990, quando as suas disponibilidades forem insuficientes para garantir a cobertura assistencial à população de uma determinada área, o SUS poderá recorrer aos serviços ofertados pela iniciativa privada, sendo essa participação complementar formalizada mediante:",
    o: ["contrato ou convênio, observadas as normas de direito público.", "acordo verbal entre o gestor e o prestador.", "doação voluntária dos serviços pelo prestador.", "decreto do Poder Legislativo municipal.", "simples cadastro do estabelecimento no conselho de classe."],
    e: "Arts. 24 e 25 da Lei 8.080/90. Têm preferência as entidades filantrópicas e as sem fins lucrativos." },
  { t: "Segundo a Lei nº 8.080/1990, os critérios e valores para a remuneração de serviços e os parâmetros de cobertura assistencial são estabelecidos pela direção nacional do SUS e aprovados:",
    o: ["no Conselho Nacional de Saúde.", "pela Agência Nacional de Saúde Suplementar.", "pelas câmaras municipais.", "pelos conselhos de classe profissional.", "pelo Tribunal de Contas da União."],
    e: "Art. 26 da Lei 8.080/90." },
  { t: "Conforme a Lei nº 8.080/1990, os cargos e funções de chefia, direção e assessoramento, no âmbito do SUS, só poderão ser exercidos:",
    o: ["em regime de tempo integral.", "por profissionais com mais de dez anos de serviço.", "por servidores federais.", "mediante indicação do Conselho de Saúde.", "por médicos, exclusivamente."],
    e: "Art. 28 da Lei 8.080/90." },
  { t: "De acordo com a Lei nº 8.080/1990, os serviços públicos que integram o SUS constituem:",
    o: ["campo de prática para ensino e pesquisa, mediante normas específicas elaboradas conjuntamente com o sistema educacional.", "espaços exclusivos de assistência, vedada a atividade de ensino.", "unidades subordinadas às universidades privadas.", "locais de estágio apenas para estudantes de medicina.", "serviços de caráter militar."],
    e: "Art. 27, parágrafo único." },
  { t: "Os serviços de saúde dos hospitais universitários e de ensino, segundo a Lei nº 8.080/1990:",
    o: ["integram-se ao SUS mediante convênio, preservada a sua autonomia administrativa em relação ao patrimônio, aos recursos humanos e financeiros, ao ensino, à pesquisa e à extensão.", "não podem integrar o SUS.", "integram o SUS automaticamente, perdendo sua autonomia administrativa.", "integram-se ao SUS apenas para atendimentos de urgência.", "subordinam-se exclusivamente ao Ministério da Educação, sem relação com o SUS."],
    e: "Art. 45 da Lei 8.080/90." },
  af("Considerando as disposições da Lei nº 8.080/1990 sobre a assistência terapêutica e a incorporação de tecnologias, incluídas pela Lei nº 12.401/2011, analise as afirmativas a seguir.", [
    ["A incorporação, a exclusão ou a alteração de novos medicamentos, produtos e procedimentos pelo SUS são atribuições do Ministério da Saúde, assessorado pela CONITEC.", true],
    ["O processo administrativo de incorporação deve ser concluído em prazo definido em lei, admitida prorrogação.", true],
    ["Na falta de protocolo clínico, a dispensação de medicamentos pode ocorrer com base nas relações de medicamentos instituídas pelo gestor federal e, de forma suplementar, pelos gestores estaduais e municipais.", true],
    ["É permitido o reembolso, pelo SUS, de medicamento experimental sem registro na ANVISA, quando prescrito por médico do serviço público.", false]
  ], "O art. 19-T veda o pagamento, o ressarcimento ou o reembolso de medicamento experimental ou de uso não autorizado pela ANVISA, ressalvadas as exceções legais." ),
  vf("A Lei nº 8.080/1990 define o campo de atuação da saúde do trabalhador. Sobre as ações nela previstas, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["Assistência ao trabalhador vítima de acidentes de trabalho ou portador de doença profissional e do trabalho.", true],
    ["Revisão periódica da listagem oficial de doenças originadas no processo de trabalho.", true],
    ["Garantia ao sindicato dos trabalhadores de requerer ao órgão competente a interdição de máquina, setor ou ambiente de trabalho, quando houver risco iminente para a vida ou a saúde dos trabalhadores.", true],
    ["Fiscalização exclusiva das relações trabalhistas e dos contratos de emprego, em substituição à Justiça do Trabalho.", false]
  ], "Art. 6º, §3º. A saúde do trabalhador no SUS envolve vigilância, assistência e informação, e não a fiscalização das relações de emprego." ),

  // ---------- Lei 8.142/1990 e Resolução CNS 453/2012 ----------
  { t: "A Lei nº 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS e sobre as transferências intergovernamentais de recursos. São instâncias colegiadas do SUS, em cada esfera de governo, previstas nessa lei:",
    o: ["a Conferência de Saúde e o Conselho de Saúde.", "a Comissão Intergestores Bipartite e a Comissão Intergestores Tripartite.", "a Ouvidoria e a Auditoria do SUS.", "o Fundo de Saúde e o Plano de Saúde.", "a Agência Nacional de Vigilância Sanitária e a Agência Nacional de Saúde Suplementar."],
    e: "Art. 1º da Lei 8.142/90. As Comissões Intergestores são instâncias de pactuação entre gestores, previstas na Lei 8.080/90 e no Decreto 7.508/11." },
  { t: "Segundo a Resolução CNS nº 453/2012, as vagas nos Conselhos de Saúde devem ser distribuídas da seguinte forma:",
    o: ["50% de entidades e movimentos representativos de usuários, 25% de trabalhadores de saúde e 25% de representação de governo e prestadores de serviços.", "25% de usuários, 25% de trabalhadores e 50% de gestores.", "33% para cada segmento: usuários, trabalhadores e gestores.", "50% de gestores e 50% de trabalhadores.", "100% de usuários, por se tratar de controle social."],
    e: "A paridade prevista na Lei 8.142/90 é detalhada na Resolução 453/2012: usuários = 50%; trabalhadores = 25%; governo e prestadores = 25%." },
  vf("Com base na Lei nº 8.142/1990, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O Conselho de Saúde tem caráter permanente e deliberativo.", true],
    ["As decisões do Conselho de Saúde são homologadas pelo chefe do poder legalmente constituído em cada esfera de governo.", true],
    ["As Conferências e os Conselhos de Saúde têm sua organização e normas de funcionamento definidas em regimento próprio, aprovado pelo respectivo conselho.", true],
    ["A Conferência de Saúde reúne-se anualmente, convocada exclusivamente pelo Conselho de Saúde.", false]
  ], "A Conferência reúne-se a cada quatro anos, convocada pelo Poder Executivo ou, extraordinariamente, por ela própria ou pelo Conselho de Saúde." ),
  { t: "Segundo a Lei nº 8.142/1990, os recursos do Fundo Nacional de Saúde serão alocados como, EXCETO:",
    o: ["pagamento de planos de saúde privados para servidores públicos.", "despesas de custeio e de capital do Ministério da Saúde, seus órgãos e entidades.", "investimentos previstos em lei orçamentária, de iniciativa do Poder Legislativo e aprovados pelo Congresso Nacional.", "investimentos previstos no Plano Quinquenal do Ministério da Saúde.", "cobertura das ações e serviços de saúde a serem implementados pelos Municípios, Estados e Distrito Federal."],
    e: "Art. 2º da Lei 8.142/90." },

  // ---------- Decreto 7.508/2011 ----------
  { t: "Segundo o Decreto nº 7.508/2011, a Rede de Atenção à Saúde (RAS) é definida como:",
    o: ["o conjunto de ações e serviços de saúde articulados em níveis de complexidade crescente, com a finalidade de garantir a integralidade da assistência à saúde.", "o conjunto de hospitais de alta complexidade de uma capital.", "a relação de todos os medicamentos ofertados pelo SUS.", "o acordo de colaboração firmado entre os entes federativos.", "o espaço geográfico formado por municípios limítrofes."],
    e: "Art. 2º, VI. O acordo de colaboração é o COAP; o espaço geográfico é a Região de Saúde; a relação de medicamentos é a RENAME." },
  { t: "O Decreto nº 7.508/2011 define \"Serviços Especiais de Acesso Aberto\" como:",
    o: ["serviços de saúde específicos para o atendimento da pessoa que, em razão de agravo ou de situação laboral, necessita de atendimento especial.", "serviços privados que atendem sem necessidade de encaminhamento mediante pagamento.", "hospitais de ensino com portas abertas 24 horas.", "unidades de pronto atendimento que dispensam a classificação de risco.", "farmácias populares conveniadas ao SUS."],
    e: "Art. 2º, IV. São exemplos os serviços de referência em saúde do trabalhador (CEREST) e os de atenção às pessoas com HIV/aids." },
  { t: "Segundo o Decreto nº 7.508/2011, o documento que estabelece critérios para o diagnóstico da doença ou do agravo, o tratamento preconizado, com os medicamentos e demais produtos apropriados, as posologias recomendadas, os mecanismos de controle clínico e o acompanhamento e a verificação dos resultados terapêuticos, é o:",
    o: ["Protocolo Clínico e Diretriz Terapêutica (PCDT).", "Mapa da Saúde.", "Contrato Organizativo da Ação Pública da Saúde.", "Relatório Anual de Gestão.", "Plano Diretor de Regionalização."],
    e: "Art. 2º, VIII, do Decreto 7.508/2011." },
  af("De acordo com o Decreto nº 7.508/2011, analise as afirmativas a seguir sobre a organização do SUS.", [
    ["As Regiões de Saúde serão instituídas pelo Estado, em articulação com os Municípios, respeitadas as diretrizes gerais pactuadas na CIT.", true],
    ["O planejamento da saúde é ascendente e integrado, do nível local até o federal, ouvidos os respectivos Conselhos de Saúde.", true],
    ["A RENASES compreende todas as ações e serviços que o SUS oferece ao usuário para atendimento da integralidade da assistência à saúde.", true],
    ["O planejamento da saúde deve desconsiderar os serviços prestados pela iniciativa privada.", false]
  ], "O art. 18 determina que o planejamento considere também os serviços e ações prestados pela iniciativa privada, de forma complementar ou não ao SUS." ),
  { t: "Segundo o Decreto nº 7.508/2011, a Relação Nacional de Medicamentos Essenciais (RENAME) e a Relação Nacional de Ações e Serviços de Saúde (RENASES) terão suas atualizações consolidadas e publicadas pelo Ministério da Saúde a cada:",
    o: ["dois anos.", "seis meses.", "quatro anos.", "cinco anos.", "dez anos."],
    e: "Arts. 22 e 25, parágrafo único, do Decreto 7.508/2011." },
  { t: "Conforme o Decreto nº 7.508/2011, os serviços de atenção hospitalar e os ambulatoriais especializados, entre outros de maior complexidade e densidade tecnológica, serão:",
    o: ["referenciados pelas Portas de Entrada.", "acessados livremente, sem necessidade de encaminhamento.", "ofertados exclusivamente pela iniciativa privada.", "organizados sem relação com a atenção primária.", "acessados somente por decisão judicial."],
    e: "Art. 10. O acesso universal e igualitário se inicia nas Portas de Entrada e se completa na rede regionalizada e hierarquizada." },
  { t: "Segundo o Decreto nº 7.508/2011, o ente federativo assegurará ao usuário:",
    o: ["a continuidade do cuidado em saúde, em todas as suas modalidades, nos serviços, hospitais e demais ambulatórios que constituem as redes de atenção da respectiva região.", "o atendimento exclusivo em serviços do seu município de residência.", "a escolha livre de qualquer serviço, sem considerar a regulação.", "o acesso a medicamentos não registrados na ANVISA.", "atendimento prioritário em hospitais privados não conveniados."],
    e: "Art. 13 do Decreto 7.508/2011." },

  // ---------- LC 141/2012 ----------
  { t: "Segundo a Lei Complementar nº 141/2012, o gestor do SUS em cada ente da Federação deve apresentar, em audiência pública na Casa Legislativa do respectivo ente, até o final dos meses de maio, setembro e fevereiro:",
    o: ["o Relatório Detalhado referente ao quadrimestre anterior.", "o Plano Plurianual de Saúde.", "o Relatório Anual de Gestão do exercício seguinte.", "a lista de servidores contratados.", "a proposta de Conferência de Saúde."],
    e: "Art. 36 da LC 141/2012. O Relatório Anual de Gestão deve ser enviado ao Conselho de Saúde até 30 de março do ano seguinte." },
  vf("Para fins de apuração da aplicação dos recursos mínimos em ações e serviços públicos de saúde, a Lei Complementar nº 141/2012 define o que pode ser considerado despesa com saúde. Registre V para o que é considerado despesa em saúde e F para o que não é.", [
    ["Remuneração do pessoal ativo da área de saúde em atividade nas ações de saúde.", true],
    ["Manejo ambiental vinculado diretamente ao controle de vetores de doenças.", true],
    ["Pagamento de aposentadorias e pensões, inclusive dos servidores da saúde.", false],
    ["Limpeza urbana e remoção de resíduos.", false]
  ], "Arts. 3º e 4º da LC 141/2012. Aposentadorias e pensões, limpeza urbana, merenda escolar e assistência social não entram no cálculo do mínimo constitucional." ),
  { t: "Segundo a Lei Complementar nº 141/2012, os Estados devem aplicar, anualmente, em ações e serviços públicos de saúde, no mínimo:",
    o: ["12% da arrecadação dos impostos e das transferências constitucionais, deduzidas as parcelas transferidas aos Municípios.", "15% da arrecadação dos impostos.", "25% da receita corrente líquida.", "5% do orçamento total.", "o mesmo valor aplicado pela União no ano anterior."],
    e: "Estados: 12%; Municípios: 15%." },

  // ---------- PNAB ----------
  { t: "Segundo a Política Nacional de Atenção Básica (PNAB/2017), a Atenção Básica é o conjunto de ações de saúde individuais, familiares e coletivas que envolvem:",
    o: ["promoção, prevenção, proteção, diagnóstico, tratamento, reabilitação, redução de danos, cuidados paliativos e vigilância em saúde.", "exclusivamente consultas médicas e dispensação de medicamentos.", "apenas ações de vacinação e pré-natal.", "atendimentos de urgência e internações de curta duração.", "procedimentos de alta complexidade realizados em ambulatórios especializados."],
    e: "Conceito da PNAB (Portaria 2.436/2017), desenvolvido por meio de práticas de cuidado integrado e gestão qualificada, com equipe multiprofissional e população adscrita." },
  vf("A Política Nacional de Atenção Básica (PNAB) estabelece as diretrizes essenciais para a organização da Atenção Básica. Registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A PNAB estabelece que a Atenção Básica deve ser a porta de entrada preferencial da RAS, mas sua função de ordenadora do fluxo na rede é facultativa.", false],
    ["A territorialização permite o planejamento das ações com base no conhecimento da realidade local.", true],
    ["A longitudinalidade do cuidado pressupõe a continuidade da relação de cuidado, inclusive quando o usuário é referenciado a outros pontos de atenção.", true],
    ["A população adscrita por equipe de Saúde da Família deve ser de, no máximo, 1.500 pessoas, sendo vedada a adscrição de pessoas em situação de rua.", false]
  ], "Ordenar a rede é uma das funções da Atenção Básica. A população recomendada por eSF é de 2.000 a 3.500 pessoas, e não há vedação à adscrição de pessoas em situação de rua." ),
  af("A PNAB atribui à Atenção Básica funções na Rede de Atenção à Saúde. Analise as afirmativas a seguir.", [
    ["Ser base, sendo a modalidade de atenção e de serviço de saúde com o mais elevado grau de descentralização e capilaridade.", true],
    ["Ser resolutiva, identificando riscos, necessidades e demandas de saúde e utilizando intervenções clínicas e sanitariamente efetivas.", true],
    ["Coordenar o cuidado, elaborando, acompanhando e organizando o fluxo dos usuários entre os pontos de atenção.", true],
    ["Atuar como ponto de atenção secundário, recebendo apenas usuários encaminhados pelos hospitais.", false]
  ], "A Atenção Básica é o primeiro nível de atenção e a principal porta de entrada; também tem a função de ordenar as redes." ),
  { t: "De acordo com a PNAB/2017, a Unidade Básica de Saúde deve funcionar com carga horária mínima de:",
    o: ["40 horas semanais, no mínimo 5 dias da semana e nos 12 meses do ano.", "20 horas semanais, 3 dias por semana.", "24 horas por dia, todos os dias.", "30 horas semanais, exceto nos meses de férias.", "40 horas semanais, apenas nos dias úteis de 10 meses do ano."],
    e: "A PNAB admite horários alternativos pactuados com a comunidade, respeitada a carga horária mínima." },
  { t: "Segundo a PNAB/2017, o número de agentes comunitários de saúde por equipe deve ser definido de acordo com a base populacional, os critérios demográficos, epidemiológicos e socioeconômicos, observado o limite máximo de:",
    o: ["750 pessoas por ACS.", "200 pessoas por ACS.", "1.500 pessoas por ACS.", "3.500 pessoas por ACS.", "100 famílias por ACS."],
    e: "Em áreas de risco e vulnerabilidade social, recomenda-se cobertura de 100% da população." },
  vf("De acordo com a PNAB/2017, são diretrizes da Atenção Básica, EXCETO uma delas. Registre V para as diretrizes previstas e F para a que não é diretriz da PNAB.", [
    ["Regionalização e hierarquização.", true],
    ["Cuidado centrado na pessoa.", true],
    ["Participação da comunidade.", true],
    ["Centralização das decisões no gestor federal.", false]
  ], "Diretrizes da PNAB: regionalização e hierarquização; territorialização; população adscrita; cuidado centrado na pessoa; resolutividade; longitudinalidade; coordenação do cuidado; ordenação da rede; participação da comunidade." ),
  { t: "A PNAB/2017 recomenda a inclusão, nas Unidades Básicas de Saúde, do gerente de Atenção Básica, que deve ser, preferencialmente:",
    o: ["um profissional qualificado, com experiência na Atenção Básica e que não seja integrante das equipes vinculadas à UBS.", "o médico mais antigo da equipe.", "o agente comunitário de saúde com maior tempo de serviço.", "um representante dos usuários eleito pelo Conselho Local.", "obrigatoriamente o enfermeiro da equipe de Saúde da Família."],
    e: "O gerente contribui para o aprimoramento e a qualificação do processo de trabalho na UBS." },
  af("Considerando as atribuições do enfermeiro na Atenção Básica, segundo a PNAB/2017, analise as afirmativas a seguir.", [
    ["Realizar consulta de enfermagem, procedimentos, solicitar exames complementares e prescrever medicações conforme protocolos ou normas técnicas estabelecidos.", true],
    ["Planejar, gerenciar e avaliar as ações desenvolvidas pelos técnicos e auxiliares de enfermagem, ACS e ACE, em conjunto com os outros membros da equipe.", true],
    ["Supervisionar as ações do técnico ou auxiliar de enfermagem e do ACS.", true],
    ["Realizar, de forma privativa, o cadastramento das famílias do território.", false]
  ], "O cadastramento e a atualização cadastral são atribuições comuns a todos os membros da equipe, com protagonismo do ACS." ),
  { t: "Segundo a PNAB/2017, é atribuição do técnico de enfermagem na Atenção Básica:",
    o: ["participar das atividades de atenção, realizando procedimentos regulamentados no exercício de sua profissão na UBS e, quando indicado ou necessário, no domicílio e nos demais espaços comunitários.", "realizar a consulta de enfermagem e prescrever a assistência de enfermagem.", "coordenar a equipe de Saúde da Família.", "definir o diagnóstico médico dos usuários.", "aprovar o plano municipal de saúde."],
    e: "O técnico participa da atenção, de ações de educação em saúde e do gerenciamento de insumos, sob supervisão do enfermeiro." },
  af("Acerca das atribuições comuns a todos os membros das equipes que atuam na Atenção Básica, segundo a PNAB/2017, analise as afirmativas a seguir.", [
    ["Participar do processo de territorialização e mapeamento da área de atuação da equipe.", true],
    ["Realizar busca ativa e notificar doenças e agravos de notificação compulsória.", true],
    ["Realizar o cuidado integral à saúde da população adscrita, prioritariamente no âmbito da UBS e, quando necessário, no domicílio e em espaços comunitários.", true]
  ], "Todas são atribuições comuns previstas na PNAB." ),
  { t: "A PNAB prevê a equipe de Consultório na Rua (eCR), que tem como objetivo:",
    o: ["ampliar o acesso da população em situação de rua aos serviços de saúde, ofertando atenção integral de forma itinerante.", "realizar exclusivamente a remoção compulsória de pessoas em situação de rua.", "substituir os CAPS no cuidado em saúde mental.", "atender apenas pessoas em situação de rua com plano de saúde.", "realizar internações hospitalares de longa permanência."],
    e: "As eCR atuam de forma itinerante, articuladas às UBS e à rede, inclusive na atenção a pessoas que usam álcool e outras drogas." },
  { t: "A Portaria GM/MS nº 635/2023 instituiu, no âmbito da Atenção Primária à Saúde, as:",
    o: ["equipes Multiprofissionais (eMulti), que atuam de forma integrada às equipes de Atenção Primária.", "Unidades de Pronto Atendimento 24 horas.", "Centrais de Regulação Médica das Urgências.", "equipes de Consultório na Rua.", "Comissões Intergestores Regionais."],
    e: "As eMulti sucederam o NASF-AB, ampliando o apoio multiprofissional às equipes da APS." },
  { t: "Associe os tipos de equipe da Atenção Básica às suas características.\n\n1. Equipe de Saúde da Família (eSF)\n2. Equipe de Saúde Bucal (eSB)\n3. Equipe de Consultório na Rua (eCR)\n\n( ) Atua de forma itinerante, com foco na população em situação de rua.\n( ) É composta, no mínimo, por médico, enfermeiro, auxiliar ou técnico de enfermagem e agente comunitário de saúde.\n( ) Pode ser composta por cirurgião-dentista e auxiliar ou técnico em saúde bucal.\n\nA sequência correta, de cima para baixo, é:",
    o: ["3, 1, 2", "1, 2, 3", "2, 3, 1", "3, 2, 1", "1, 3, 2"],
    e: "eCR: itinerante, população em situação de rua; eSF: composição mínima com médico, enfermeiro, técnico/auxiliar e ACS; eSB: cirurgião-dentista e ASB/TSB." },
  { t: "Associe as esferas de gestão às respectivas responsabilidades pela Atenção Básica, segundo a PNAB.\n\n1. Responsabilidade comum a todas as esferas de governo\n2. Competência do Ministério da Saúde\n3. Competência das Secretarias Municipais de Saúde\n\n( ) Contribuir com o financiamento tripartite da Atenção Básica.\n( ) Definir e rever periodicamente, de forma pactuada na CIT, as diretrizes da Política Nacional de Atenção Básica.\n( ) Organizar, executar e gerenciar os serviços e as ações de Atenção Básica no seu território.\n\nA sequência correta, de cima para baixo, é:",
    o: ["1, 2, 3", "2, 1, 3", "3, 2, 1", "1, 3, 2", "2, 3, 1"],
    e: "O financiamento é tripartite (comum); a definição das diretrizes nacionais, pactuadas na CIT, cabe ao MS; a organização e a execução dos serviços no território cabem ao município." },

  // ---------- PNH ----------
  { t: "A Política Nacional de Humanização (PNH) tem entre os seus princípios:",
    o: ["a transversalidade, a indissociabilidade entre atenção e gestão e o protagonismo, a corresponsabilidade e a autonomia dos sujeitos e coletivos.", "a centralização das decisões e a hierarquia rígida entre profissionais.", "a competição interprofissional como forma de aumentar a produtividade.", "o foco exclusivo na doença e nos protocolos clínicos.", "a redução de custos como finalidade principal."],
    e: "Os três princípios da PNH: transversalidade; indissociabilidade entre atenção e gestão; protagonismo, corresponsabilidade e autonomia dos sujeitos e dos coletivos." },
  vf("Sobre as diretrizes da Política Nacional de Humanização (PNH), registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O acolhimento pressupõe escuta qualificada e responsabilização pelas necessidades de saúde do usuário.", true],
    ["A clínica ampliada e compartilhada considera a singularidade do sujeito e a complexidade do processo saúde-doença.", true],
    ["A ambiência refere-se à criação de espaços saudáveis, acolhedores e confortáveis, que respeitem a privacidade.", true],
    ["A gestão participativa e a cogestão restringem as decisões ao gestor, para garantir a eficiência administrativa.", false]
  ], "A cogestão inclui trabalhadores e usuários nas decisões; diretrizes da PNH: acolhimento, gestão participativa e cogestão, ambiência, clínica ampliada e compartilhada, valorização do trabalhador e defesa dos direitos dos usuários." ),
  { t: "Uma Unidade de Pronto Atendimento enfrenta longos tempos de espera e queixas sobre falta de informação. A gestão decide implantar um dispositivo da PNH para garantir que todo usuário seja ouvido, tenha suas necessidades avaliadas segundo critérios de gravidade e seja encaminhado de forma responsável. Esse dispositivo é o:",
    o: ["Acolhimento com Classificação de Risco.", "Projeto Terapêutico Singular.", "Grupo de Trabalho de Humanização.", "Colegiado Gestor.", "Visita Aberta."],
    e: "O ACCR organiza o atendimento pela gravidade e pelo risco, e não pela ordem de chegada." },
  { t: "No âmbito da PNH, o dispositivo que garante ao usuário internado o direito de receber visitas de forma ampliada e de ter a presença de acompanhante, respeitando a dinâmica de cada unidade, é denominado:",
    o: ["Visita Aberta e Direito a Acompanhante.", "Ambiência.", "Ouvidoria.", "Clínica Ampliada.", "Equipe de Referência."],
    e: "O dispositivo amplia o acesso da rede social do usuário ao espaço de internação, favorecendo o vínculo." },
  { t: "Na PNH, o Grupo de Trabalho de Humanização (GTH) é um dispositivo que:",
    o: ["reúne trabalhadores, gestores e usuários para discutir e implementar melhorias nos processos de trabalho e na qualidade da atenção.", "fiscaliza o cumprimento de metas de produtividade.", "substitui o Conselho de Saúde no controle social.", "realiza a regulação de leitos hospitalares.", "audita as contas da unidade de saúde."],
    e: "O GTH é um espaço coletivo de análise e intervenção sobre o cotidiano do serviço." },
  { t: "Na PNH, a diretriz que propõe o trabalho em equipe e o compartilhamento de saberes, ampliando o objeto de trabalho da clínica para além da doença e considerando o sujeito em seu contexto, é a:",
    o: ["Clínica Ampliada e Compartilhada.", "Ambiência.", "Gestão Participativa.", "Valorização do Trabalhador.", "Defesa dos Direitos dos Usuários."],
    e: "A clínica ampliada reconhece a singularidade de cada pessoa e a complexidade do adoecimento." },

  // ---------- Carta dos Direitos dos Usuários ----------
  af("A Carta dos Direitos dos Usuários da Saúde (Portaria nº 1.820/2009) assegura direitos e estabelece deveres. Analise as afirmativas a seguir.", [
    ["Toda pessoa tem direito ao acesso ordenado e organizado aos sistemas de saúde.", true],
    ["Toda pessoa tem direito a atendimento humanizado, acolhedor e livre de qualquer discriminação.", true],
    ["Toda pessoa tem responsabilidade para que seu tratamento e sua recuperação sejam adequados e sem interrupção.", true],
    ["O usuário perde o direito ao acesso ao seu prontuário após a alta hospitalar.", false]
  ], "A Carta garante o acesso do usuário ao próprio prontuário e às informações sobre sua saúde, inclusive após a alta." ),
  { t: "Segundo a Carta dos Direitos dos Usuários da Saúde, é direito da pessoa, no atendimento:",
    o: ["ser identificada pelo nome e sobrenome civil, podendo existir campo para o nome social, independentemente do registro civil.", "ser chamada pelo número do leito, para preservar o sigilo.", "ter suas informações divulgadas à imprensa em casos de interesse público, sem autorização.", "receber tratamento sem qualquer informação sobre riscos.", "ser atendida exclusivamente por ordem de chegada."],
    e: "A Carta assegura identificação pelo nome, uso do nome social e vedação de identificação por número, código ou doença." },

  // ---------- Situações-problema (estilo banca) ----------
  { t: "Em um município, o Conselho Municipal de Saúde deliberou sobre a reorganização da rede de Atenção Básica, mas a resolução não foi publicada pelo prefeito. De acordo com a Lei nº 8.142/1990, é correto afirmar que:",
    o: ["as decisões do Conselho de Saúde são homologadas pelo chefe do poder legalmente constituído em cada esfera de governo.", "as decisões do Conselho dispensam homologação e entram em vigor automaticamente.", "o Conselho tem caráter apenas consultivo, e suas decisões não precisam ser consideradas.", "a homologação cabe ao Ministério Público.", "as decisões do Conselho só valem após aprovação da Conferência Nacional."],
    e: "Art. 1º, §2º, da Lei 8.142/90." },
  { t: "Durante a elaboração do plano municipal de saúde, a equipe técnica analisou dados de morbimortalidade para definir prioridades e alocar recursos. Essa prática corresponde ao princípio do SUS que prevê:",
    o: ["a utilização da epidemiologia para o estabelecimento de prioridades, a alocação de recursos e a orientação programática.", "a universalidade de acesso em todos os níveis.", "a preservação da autonomia das pessoas.", "a participação da comunidade.", "a igualdade da assistência sem preconceitos."],
    e: "Art. 7º, VII, da Lei 8.080/90." },
  { t: "Dois municípios vizinhos decidem unir esforços para manter um centro de especialidades que atenderá as duas populações. A Lei nº 8.080/1990 prevê que, para desenvolver em conjunto as ações e os serviços de saúde que lhes correspondam, os Municípios poderão:",
    o: ["constituir consórcios, aplicando-se a eles o princípio da direção única.", "transferir a gestão do serviço ao Estado, obrigatoriamente.", "contratar uma operadora de plano de saúde para administrar o serviço.", "solicitar autorização prévia ao Conselho Nacional de Saúde.", "criar uma nova esfera de governo com direção própria."],
    e: "Art. 10 da Lei 8.080/90." },
  { t: "Um gestor municipal pretende contratar um hospital privado para complementar a oferta de leitos. Segundo a legislação do SUS, nessa contratação devem ter preferência:",
    o: ["as entidades filantrópicas e as sem fins lucrativos.", "as empresas de capital estrangeiro.", "os hospitais com maior lucro anual.", "as empresas de propriedade de servidores públicos.", "os hospitais localizados em outros estados."],
    e: "CF, art. 199, §1º, e Lei 8.080/90, art. 25." },
  { t: "Uma Região de Saúde precisa pactuar, entre os gestores municipais e o gestor estadual, os aspectos operacionais da rede de urgência regional. Segundo o Decreto nº 7.508/2011, essa pactuação ocorre na:",
    o: ["Comissão Intergestores Regional (CIR).", "Comissão Intergestores Tripartite (CIT).", "Conferência Nacional de Saúde.", "Câmara de Vereadores do município-sede.", "Agência Nacional de Saúde Suplementar."],
    e: "A CIR é a instância de pactuação no âmbito da Região de Saúde." },
  { t: "Ao receber um usuário que procurou diretamente o hospital de referência sem encaminhamento, a equipe o orientou sobre o acesso pela atenção primária, sem deixar de avaliar a gravidade do caso. Segundo o Decreto nº 7.508/2011, o acesso universal, igualitário e ordenado às ações e serviços de saúde:",
    o: ["se inicia pelas Portas de Entrada do SUS e se completa na rede regionalizada e hierarquizada, de acordo com a complexidade do serviço.", "se dá exclusivamente pelos hospitais de referência.", "independe de qualquer ordenação ou regulação.", "é restrito aos usuários com cartão de plano de saúde.", "deve ser autorizado pelo Conselho de Saúde em cada caso."],
    e: "Art. 8º do Decreto 7.508/2011. A atenção primária ordena o acesso, considerando a gravidade do risco individual e coletivo." },
  vf("O Decreto nº 7.508/2011 estabelece que, para ser instituída, a Região de Saúde deve conter, no mínimo, ações e serviços de determinadas áreas. Registre V para as que integram esse mínimo e F para as que não integram.", [
    ["Atenção ambulatorial especializada e hospitalar.", true],
    ["Vigilância em saúde.", true],
    ["Atenção psicossocial.", true],
    ["Serviços de estética e cirurgia plástica eletiva.", false]
  ], "Art. 5º: atenção primária; urgência e emergência; atenção psicossocial; atenção ambulatorial especializada e hospitalar; vigilância em saúde." ),
  { t: "Um usuário recebe prescrição de um medicamento no ambulatório de um hospital privado não conveniado e procura a farmácia da UBS. Segundo o Decreto nº 7.508/2011, o acesso universal e igualitário à assistência farmacêutica pressupõe, entre outros requisitos:",
    o: ["que o usuário esteja assistido por ações e serviços de saúde do SUS e que a prescrição tenha sido feita por profissional no exercício regular de suas funções no SUS.", "apenas a apresentação de documento de identidade.", "a comprovação de renda inferior a um salário mínimo.", "a autorização do Conselho Municipal de Saúde.", "que o medicamento seja importado."],
    e: "Art. 28. Também se exige conformidade com a RENAME e os PCDT e dispensação nas unidades indicadas pela direção do SUS." },
  { t: "No contexto do controle social, a participação de usuários, trabalhadores e gestores na avaliação da situação de saúde e na proposição de diretrizes para a política de saúde, a cada quatro anos, ocorre:",
    o: ["nas Conferências de Saúde.", "nas Comissões Intergestores.", "nas reuniões de equipe da UBS.", "nos Conselhos de Classe.", "nas audiências do Poder Judiciário."],
    e: "Lei 8.142/90, art. 1º, §1º." },
  { t: "A Lei nº 8.080/1990 estabelece que a direção do SUS é única e exercida, no âmbito da União, pelo:",
    o: ["Ministério da Saúde.", "Conselho Nacional de Saúde.", "Ministério do Desenvolvimento Social.", "Presidente da República.", "Congresso Nacional."],
    e: "Art. 9º, I. Nos Estados, DF e Municípios: respectivas Secretarias de Saúde ou órgão equivalente." },
  af("A Lei nº 8.080/1990, ao tratar da organização, da direção e da gestão do SUS, estabelece algumas regras. Analise as afirmativas a seguir.", [
    ["As ações e serviços executados pelo SUS, diretamente ou mediante participação complementar da iniciativa privada, são organizados de forma regionalizada e hierarquizada, em níveis de complexidade crescente.", true],
    ["As comissões intersetoriais de âmbito nacional são subordinadas ao Ministério do Desenvolvimento Social.", false],
    ["A direção do SUS é única, sendo exercida em cada esfera de governo.", true]
  ], "As comissões intersetoriais de âmbito nacional são subordinadas ao Conselho Nacional de Saúde (art. 12)." ),
  vf("Considerando a Lei nº 8.080/1990, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O dever do Estado de garantir a saúde não exclui o das pessoas, da família, das empresas e da sociedade.", true],
    ["Os níveis de saúde expressam a organização social e econômica do País.", true],
    ["Estão incluídas no campo de atuação do SUS a vigilância nutricional e a orientação alimentar.", true],
    ["A iniciativa privada é a principal executora das ações do SUS, cabendo ao Estado apenas o financiamento.", false]
  ], "A iniciativa privada participa em caráter complementar (art. 4º, §2º)." ),
  { t: "Segundo a Lei nº 8.080/1990, o conjunto de ações e serviços de saúde prestados por órgãos e instituições públicas federais, estaduais e municipais, da administração direta e indireta e das fundações mantidas pelo Poder Público, constitui:",
    o: ["o Sistema Único de Saúde (SUS).", "a Rede de Atenção às Urgências.", "a Agência Nacional de Vigilância Sanitária.", "a Seguridade Social.", "o Subsistema de Atenção à Saúde Indígena."],
    e: "Art. 4º da Lei 8.080/90." },
  { t: "De acordo com a Lei nº 8.080/1990, a execução de ações de vigilância sanitária, de vigilância epidemiológica e de saúde do trabalhador, bem como de assistência terapêutica integral, inclusive farmacêutica, está:",
    o: ["incluída no campo de atuação do SUS.", "excluída do campo de atuação do SUS.", "restrita à iniciativa privada.", "sob responsabilidade exclusiva da previdência social.", "condicionada à aprovação do Poder Judiciário."],
    e: "Art. 6º, I, da Lei 8.080/90." },
  { t: "Segundo a Lei nº 8.080/1990, a política de recursos humanos na área da saúde deve cumprir o objetivo de:",
    o: ["organizar um sistema de formação de recursos humanos em todos os níveis de ensino, inclusive de pós-graduação, além de programas de permanente aperfeiçoamento de pessoal.", "restringir a formação de profissionais às universidades privadas.", "eliminar os programas de educação continuada.", "priorizar a contratação de profissionais estrangeiros.", "transferir à previdência a responsabilidade pela formação."],
    e: "Art. 27, I, da Lei 8.080/90." },
  { t: "No SUS, os recursos financeiros transferidos pelo Fundo Nacional de Saúde aos Municípios, de forma regular e automática, devem ser:",
    o: ["movimentados por meio do Fundo Municipal de Saúde, sob fiscalização do Conselho de Saúde.", "depositados na conta pessoal do secretário de saúde.", "aplicados livremente pelo prefeito, sem prestação de contas.", "repassados a hospitais privados sem contrato.", "devolvidos à União ao final de cada mês."],
    e: "Lei 8.080/90, art. 33, e Lei 8.142/90, art. 4º." }
);
