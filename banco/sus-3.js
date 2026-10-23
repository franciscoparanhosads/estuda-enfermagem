// Banco extra — Legislação do SUS (parte 3: redes e políticas — RUE, SAMU, Rede Alyne, RAPS, Pessoa com Deficiência,
// políticas de saúde do idoso, homem, mulher, trabalhador, população negra, promoção, segurança do paciente, educação permanente e vigilância)
Q_SUS.push(
  // ---------- Rede de Atenção às Urgências (Portaria 1.600/2011) ----------
  vf("A Rede de Atenção às Urgências (RUE), instituída pela Portaria GM/MS nº 1.600/2011, é composta por diferentes pontos de atenção que devem atuar de forma articulada. Sobre os componentes da RUE, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O componente Promoção, Prevenção e Vigilância à Saúde integra a RUE.", true],
    ["As UPA 24h e as Salas de Estabilização são componentes da RUE.", true],
    ["Os leitos de retaguarda clínica e de terapia intensiva compõem o componente hospitalar da RUE.", true],
    ["A Atenção Domiciliar foi excluída da RUE por atender apenas pacientes crônicos estáveis.", false]
  ], "Componentes da RUE: promoção, prevenção e vigilância; Atenção Básica; SAMU 192 e Centrais de Regulação; Sala de Estabilização; Força Nacional do SUS; UPA 24h e serviços de urgência 24h; hospitalar; Atenção Domiciliar." ),
  af("A Política Nacional de Atenção às Urgências foi reformulada pela Portaria nº 1.600/2011, que instituiu a RUE. Considerando as suas diretrizes e componentes, analise as afirmativas a seguir.", [
    ["A RUE é constituída por componentes como a Atenção Básica, o SAMU 192 e suas Centrais de Regulação Médica, as portas hospitalares de urgência e a Atenção Domiciliar.", true],
    ["Uma das diretrizes da RUE é a ampliação do acesso e do acolhimento aos casos agudos em todos os pontos de atenção, com classificação de risco.", true],
    ["As Centrais de Regulação do SAMU 192 atuam de forma isolada, apenas no transporte pré-hospitalar, sem articulação com os demais serviços.", false]
  ], "A regulação médica das urgências é elemento ordenador e articulador da RUE." ),
  { t: "Segundo a Portaria nº 1.600/2011, o componente da RUE que tem como objetivo ordenar o fluxo assistencial e disponibilizar atendimento precoce e transporte adequado, rápido e resolutivo às vítimas acometidas por agravos à saúde, mediante envio de veículos tripulados por equipe capacitada, é o:",
    o: ["SAMU 192 e suas Centrais de Regulação Médica das Urgências.", "componente hospitalar.", "componente Atenção Domiciliar.", "componente Promoção, Prevenção e Vigilância.", "componente Atenção Básica."],
    e: "O SAMU 192 é acessado pelo número 192 e acionado por uma Central de Regulação Médica." },
  { t: "Na RUE, a Sala de Estabilização (SE) é definida como:",
    o: ["ambiente para estabilização de pacientes críticos e/ou graves, com condições de garantir assistência 24 horas, vinculado a um equipamento de saúde e articulado aos demais pontos da rede.", "unidade de internação de longa permanência para pacientes crônicos.", "consultório de atendimento eletivo da Atenção Básica.", "central telefônica de regulação de leitos.", "ambulância de suporte avançado."],
    e: "A SE estabiliza o paciente até a transferência para o ponto de atenção adequado." },
  { t: "A Força Nacional de Saúde do SUS, componente da RUE, tem como objetivo:",
    o: ["aglutinar esforços para garantir a integralidade da assistência em situações de risco ou emergenciais para populações com vulnerabilidades específicas e em regiões de difícil acesso.", "fiscalizar hospitais privados.", "substituir as UPA 24h nos municípios de pequeno porte.", "executar ações de segurança pública em hospitais.", "realizar o transporte de pacientes eletivos."],
    e: "Atua em situações de epidemias, desastres e desassistência, quando a capacidade local é superada." },

  // ---------- SAMU e atenção pré-hospitalar ----------
  af("A Portaria nº 2.048/2002 aprova o Regulamento Técnico dos Sistemas Estaduais de Urgência e Emergência. Sobre a organização do atendimento pré-hospitalar móvel, analise as afirmativas a seguir.", [
    ["As ambulâncias de Suporte Básico de Vida (tipo B) devem ser tripuladas por, no mínimo, dois profissionais: o condutor e um técnico ou auxiliar de enfermagem.", true],
    ["As ambulâncias de Suporte Avançado de Vida (tipo D) devem ser tripuladas por, no mínimo, três profissionais: condutor, enfermeiro e médico.", true],
    ["As Centrais de Regulação Médica das Urgências devem contar com médicos reguladores de forma permanente.", true],
    ["As ambulâncias de Suporte Avançado dispensam a presença do médico quando houver enfermeiro na equipe.", false]
  ], "A USA (tipo D) exige condutor, enfermeiro e médico." ),
  { t: "Segundo a Portaria nº 2.048/2002, a ambulância destinada ao transporte inter-hospitalar de pacientes com risco de vida conhecido e ao atendimento pré-hospitalar de pacientes com risco de vida desconhecido, não classificados com potencial de necessitar de intervenção médica no local, é a do tipo:",
    o: ["B (Suporte Básico).", "A (Transporte).", "C (Resgate).", "D (Suporte Avançado).", "E (Aeronave)."],
    e: "Tipo A: transporte simples, sem risco de vida; B: suporte básico; C: resgate; D: suporte avançado (UTI móvel); E: aeronave; F: embarcação." },
  vf("A regulação médica das urgências é fundamental no SAMU 192. Sobre a transferência inter-hospitalar de pacientes graves, conforme a Portaria nº 2.048/2002, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A responsabilidade pela assistência durante o transporte em USA é exclusiva da equipe de enfermagem, cabendo ao médico da origem apenas a solicitação.", false],
    ["A decisão de transferir um paciente grave é estritamente médica, devendo o serviço de origem esgotar seus recursos diagnósticos e terapêuticos antes de solicitar a transferência.", true],
    ["O médico regulador deve aceitar a inexistência de leitos informada pelo hospital de destino como justificativa para negar o recurso de transporte.", false],
    ["O médico solicitante é responsável pelo paciente até que ele seja recebido pelo médico da unidade de transporte ou pelo médico do serviço receptor.", true]
  ], "Em USA, a assistência no transporte é responsabilidade da equipe da unidade (médico e enfermeiro). A falta de leito não justifica negar o transporte: o regulador pode decidir pela \"vaga zero\"." ),
  { t: "No âmbito da regulação médica das urgências, o termo \"vaga zero\" refere-se:",
    o: ["à prerrogativa do médico regulador de encaminhar o paciente ao serviço mais adequado mesmo sem leito disponível, em situação de risco de vida.", "à proibição de internação de pacientes sem leito livre.", "à alta hospitalar sem acompanhamento.", "ao leito reservado exclusivamente para pacientes particulares.", "à ausência de ambulâncias no município."],
    e: "A \"vaga zero\" garante o acesso imediato em situações de urgência, cabendo ao serviço receptor acolher o paciente." },
  { t: "Na Central de Regulação Médica das Urgências, o profissional responsável pelo atendimento inicial das chamadas, pela identificação do solicitante e pelo registro dos dados básicos, antes da avaliação do médico regulador, é o:",
    o: ["Técnico Auxiliar de Regulação Médica (TARM).", "Rádio-operador.", "Condutor de veículo de urgência.", "Enfermeiro intervencionista.", "Médico intervencionista."],
    e: "O TARM atende o chamado e o transfere ao médico regulador; o rádio-operador controla a frota e a comunicação com as equipes." },

  // ---------- Rede Alyne ----------
  { t: "A Portaria GM/MS nº 5.350/2024 instituiu a Rede Alyne, que reestrutura a atenção materna e infantil no SUS em substituição à:",
    o: ["Rede Cegonha.", "Rede de Atenção Psicossocial.", "Rede de Cuidados à Pessoa com Deficiência.", "Rede de Atenção às Urgências.", "Rede de Atenção à Saúde das Pessoas com Doenças Crônicas."],
    e: "A Rede Alyne atualiza e amplia as ações da Rede Cegonha, criada em 2011." },
  { t: "A Rede Alyne recebeu esse nome em homenagem a Alyne Pimentel, mulher negra que morreu em 2002, em decorrência de complicações obstétricas por falhas na assistência. A escolha do nome reforça um dos focos centrais da rede, que é:",
    o: ["reduzir a mortalidade materna, com ênfase no enfrentamento das desigualdades étnico-raciais.", "ampliar a oferta de cesarianas eletivas.", "transferir a atenção ao pré-natal para a rede privada.", "restringir o acompanhamento às gestantes de alto risco.", "substituir a Atenção Básica pelos ambulatórios especializados."],
    e: "O caso Alyne levou à condenação do Brasil em um comitê da ONU; a rede enfatiza a redução da mortalidade materna, especialmente entre mulheres negras." },
  { t: "Uma gestante negra, moradora de área rural, com hipertensão arterial crônica, inicia o pré-natal na UBS e relata dificuldade de transporte e medo de não conseguir vaga na maternidade. Com base nos objetivos da Rede Alyne, a conduta correta da equipe é:",
    o: ["garantir a vinculação da gestante à maternidade de referência e acionar o sistema logístico para assegurar o transporte, mantendo o acompanhamento na Atenção Básica.", "informar que a Rede Alyne é focada apenas no parto e que o transporte deve ser providenciado pela gestante.", "encaminhar a gestante ao pré-natal de alto risco e encerrar o acompanhamento na Atenção Básica.", "recomendar apenas teleconsultas, dispensando consultas presenciais.", "realizar o pré-natal de alto risco exclusivamente na UBS, sem articulação com a maternidade."],
    e: "A rede prevê vinculação à maternidade, transporte sanitário e regulação, e a gestante de alto risco continua acompanhada pela Atenção Básica (cuidado compartilhado)." },
  { t: "Considerando a organização do componente pré-natal da Rede Alyne, assinale a alternativa que apresenta pontos de atenção que o constituem.",
    o: ["Unidade Básica de Saúde, ambulatório especializado e Ambulatório de Gestação e Puerpério de Alto Risco (AGPAR).", "Estratégia Saúde da Família, Centro de Atenção Psicossocial e SAMU 192.", "UPA 24h, maternidade de referência e UTI neonatal.", "UBS, equipe de Consultório na Rua e Centro de Referência de Assistência Social.", "Centro de Parto Normal, banco de leite humano e CAPS."],
    e: "O pré-natal se organiza na APS, com referência a ambulatórios especializados e ao AGPAR para a gestação de alto risco." },
  vf("Sobre a Rede Alyne (Portaria GM/MS nº 5.350/2024), registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A rede abrange o cuidado no pré-natal, no parto e nascimento, no puerpério e na atenção integral à saúde da criança.", true],
    ["A rede prevê um sistema logístico, com transporte sanitário e regulação, para garantir o acesso da gestante e do recém-nascido.", true],
    ["A rede tem como foco exclusivo o momento do parto, sem ações no pré-natal.", false],
    ["A rede considera a redução das desigualdades étnico-raciais na mortalidade materna.", true]
  ], "A Rede Alyne é uma rede de cuidado contínuo, do pré-natal à atenção à criança." ),
  { t: "A Rede Alyne deve ser integrada ao ______ para organização de forma ______, considerando as especificidades, o perfil epidemiológico e a capacidade instalada nos diferentes territórios. Assinale a alternativa que preenche corretamente as lacunas.",
    o: ["Planejamento Regional Integrado (PRI) — ascendente", "Plano Nacional de Saúde (PNS) — hierarquizada", "Plano Diretor de Regionalização (PDR) — centralizada", "Programa Anual de Saúde (PAS) — integrada", "Planejamento Estratégico Municipal (PEM) — descendente"],
    e: "As redes de atenção são organizadas no âmbito do Planejamento Regional Integrado, de forma ascendente, a partir das necessidades locais." },

  // ---------- RAPS (Portaria 3.088/2011) ----------
  vf("A Rede de Atenção Psicossocial (RAPS), instituída pela Portaria nº 3.088/2011, é composta por diferentes componentes. Registre V para os componentes da RAPS e F para o que não é componente.", [
    ["Atenção Básica em Saúde, incluindo UBS, equipes de Consultório na Rua e Centros de Convivência.", true],
    ["Atenção Psicossocial Especializada, formada pelos CAPS em suas diferentes modalidades.", true],
    ["Estratégias de Desinstitucionalização, como os Serviços Residenciais Terapêuticos.", true],
    ["Hospitais psiquiátricos de longa permanência como ponto central da rede.", false]
  ], "A RAPS prioriza serviços de base territorial e comunitária; os componentes são: Atenção Básica, Atenção Psicossocial Especializada, Urgência e Emergência, Atenção Residencial de Caráter Transitório, Atenção Hospitalar, Estratégias de Desinstitucionalização e Reabilitação Psicossocial." ),
  af("Considerando as diretrizes da RAPS, analise as afirmativas a seguir.", [
    ["Respeito aos direitos humanos, garantindo a autonomia e a liberdade das pessoas.", true],
    ["Combate a estigmas e preconceitos.", true],
    ["Desenvolvimento da lógica do cuidado centrado nas necessidades das pessoas com transtornos mentais, incluídos os decorrentes do uso de substâncias psicoativas.", true],
    ["Ênfase na internação em instituições fechadas como primeira opção de tratamento.", false]
  ], "A RAPS enfatiza serviços de base territorial e comunitária, com participação e controle social dos usuários e familiares." ),
  { t: "Na RAPS, o componente Atenção Residencial de Caráter Transitório é constituído por:",
    o: ["Unidades de Acolhimento e Serviços de Atenção em Regime Residencial.", "Serviços Residenciais Terapêuticos.", "CAPS III e CAPS AD III.", "enfermarias especializadas em hospital geral.", "Centros de Convivência e Cultura."],
    e: "Os Serviços Residenciais Terapêuticos pertencem às Estratégias de Desinstitucionalização." },
  { t: "Na RAPS, as ações de geração de trabalho e renda, os empreendimentos solidários e as cooperativas sociais compõem o componente:",
    o: ["Reabilitação Psicossocial.", "Atenção Básica em Saúde.", "Atenção Hospitalar.", "Atenção de Urgência e Emergência.", "Atenção Residencial de Caráter Transitório."],
    e: "A reabilitação psicossocial busca a inclusão produtiva e o exercício da cidadania." },
  { t: "Em uma UBS, a equipe de Saúde da Família recebe um usuário em sofrimento psíquico e discute a melhor forma de organizar o seu cuidado no território, recorrendo ao apoio matricial. Sobre essa estratégia, é correto afirmar que:",
    o: ["o apoio matricial oferece suporte especializado às equipes da Atenção Básica no cuidado em saúde mental, com corresponsabilização.", "o matriciamento substitui a Atenção Básica pela internação em hospital psiquiátrico.", "o acolhimento em saúde mental consiste no encaminhamento imediato ao serviço especializado.", "o apoio matricial transfere definitivamente o usuário para o CAPS.", "o matriciamento é realizado apenas por médicos psiquiatras."],
    e: "O matriciamento envolve discussão de casos, atendimentos conjuntos e educação permanente, mantendo o vínculo do usuário com a equipe de referência." },

  // ---------- Rede de Cuidados à Pessoa com Deficiência ----------
  { t: "A Rede de Cuidados à Pessoa com Deficiência, instituída pela Portaria GM/MS nº 793/2012, organiza-se nos componentes:",
    o: ["Atenção Básica; Atenção Especializada em Reabilitação Auditiva, Física, Intelectual, Visual, Ostomia e em Múltiplas Deficiências; e Atenção Hospitalar e de Urgência e Emergência.", "Atenção Básica e Atenção Psicossocial Especializada, exclusivamente.", "Atenção hospitalar de longa permanência e instituições de abrigamento.", "Escolas especiais e centros de assistência social.", "Pré-natal, parto e puerpério."],
    e: "O ponto especializado de referência é o Centro Especializado em Reabilitação (CER), além das oficinas ortopédicas." },
  vf("A atenção à pessoa com deficiência busca a inclusão e a autonomia, com ações organizadas na rede de atenção. Registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A reabilitação da pessoa com deficiência ocorre exclusivamente no serviço especializado, mediante encaminhamento da UBS.", false],
    ["O projeto terapêutico da pessoa com deficiência é construído com a participação do usuário e da família.", true],
    ["A pessoa com deficiência participa das ações de promoção da saúde somente mediante solicitação de adaptação individual.", false],
    ["O cuidado à pessoa com deficiência favorece a autonomia e a inclusão social do usuário.", true]
  ], "A Atenção Básica também realiza ações de cuidado e reabilitação, e a pessoa com deficiência tem direito de participar das ações de promoção em igualdade de condições." ),
  { t: "No âmbito da Rede de Cuidados à Pessoa com Deficiência, o Centro Especializado em Reabilitação (CER) é classificado conforme:",
    o: ["o número de modalidades de reabilitação que oferta (CER II, III ou IV).", "o número de leitos de internação.", "a quantidade de médicos especialistas.", "a renda média da população atendida.", "o porte do hospital ao qual está vinculado."],
    e: "CER II: duas modalidades; CER III: três; CER IV: quatro (auditiva, física, intelectual e visual)." },

  // ---------- Pessoa idosa ----------
  af("A Política Nacional de Saúde da Pessoa Idosa (Portaria nº 2.528/2006) orienta o cuidado à população idosa no SUS. Analise as afirmativas a seguir.", [
    ["A promoção do envelhecimento ativo e saudável é uma das diretrizes da política.", true],
    ["A capacidade funcional é um parâmetro central na avaliação da pessoa idosa.", true],
    ["A atenção à pessoa idosa deve considerar suas necessidades de forma integral.", true],
    ["A política concentra o cuidado ao idoso no serviço especializado de geriatria.", false]
  ], "A política valoriza a Atenção Básica como porta de entrada, com foco na funcionalidade e na integralidade." ),
  vf("A Caderneta de Saúde da Pessoa Idosa é um instrumento de acompanhamento que reúne informações de saúde e apoia o cuidado longitudinal do idoso na Atenção Básica. Registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A caderneta reúne informações de saúde que apoiam o acompanhamento longitudinal do idoso.", true],
    ["A caderneta registra dados como medicamentos em uso e a ocorrência de quedas.", true],
    ["A caderneta fica guardada no prontuário da unidade, sob responsabilidade exclusiva da equipe.", false],
    ["A caderneta substitui a consulta de enfermagem no acompanhamento da pessoa idosa.", false]
  ], "A caderneta fica com a pessoa idosa, que a leva aos atendimentos; é um instrumento de apoio e não substitui as consultas." ),

  // ---------- Saúde do homem e da mulher ----------
  vf("Na rotina de uma UBS, a equipe identifica baixa procura de homens adultos pelos serviços e discute as diretrizes da Política Nacional de Atenção Integral à Saúde do Homem (PNAISH). Registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A política orienta o cuidado do homem prioritariamente para as ações de urgência e emergência hospitalar.", false],
    ["A política busca ampliar o acesso da população masculina aos serviços da Atenção Básica.", true],
    ["A política atribui o cuidado à saúde do homem exclusivamente aos serviços de média complexidade.", false],
    ["O estímulo ao autocuidado do homem é uma das estratégias da política.", true]
  ], "A PNAISH busca a entrada do homem pela Atenção Básica, promovendo prevenção e autocuidado." ),
  { t: "A Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM) tem como princípios norteadores, entre outros:",
    o: ["a integralidade e a perspectiva de gênero, com humanização e qualidade da atenção.", "o foco exclusivo na saúde reprodutiva da mulher.", "o atendimento restrito às mulheres em idade fértil.", "a centralização das ações nos hospitais-maternidade.", "a exclusão das mulheres no climatério."],
    e: "A PNAISM amplia o cuidado para além do ciclo gravídico-puerperal, incluindo climatério, violência, saúde mental e doenças crônicas." },

  // ---------- Saúde do trabalhador ----------
  vf("Em um município, a equipe identifica aumento de agravos relacionados ao trabalho e planeja ações com base na Política Nacional de Saúde do Trabalhador e da Trabalhadora (Portaria nº 1.823/2012). Registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["A política orienta ações de promoção e de proteção da saúde dos trabalhadores no sistema de saúde.", true],
    ["A política alcança exclusivamente o trabalhador com vínculo formal, registrado em carteira de trabalho.", false],
    ["A vigilância dos ambientes e processos de trabalho integra as ações previstas na política.", true],
    ["A política atribui as ações de saúde do trabalhador exclusivamente à rede previdenciária.", false]
  ], "A PNSTT alcança todos os trabalhadores, independentemente da forma de inserção no mercado (formal ou informal), inclusive desempregados e aposentados, e é executada pelo SUS." ),
  { t: "No âmbito da saúde do trabalhador, a Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST) tem como pontos de referência técnica regionais os:",
    o: ["Centros de Referência em Saúde do Trabalhador (CEREST).", "Centros de Atenção Psicossocial (CAPS).", "Centros Especializados em Reabilitação (CER).", "Centros de Referência de Assistência Social (CRAS).", "Centros de Testagem e Aconselhamento (CTA)."],
    e: "Os CEREST oferecem suporte técnico e são polos irradiadores das ações de saúde do trabalhador." },
  af("No campo da saúde do trabalhador, a identificação de acidentes e doenças relacionados ao trabalho envolve instrumentos de comunicação e notificação. Analise as afirmativas a seguir.", [
    ["A Comunicação de Acidente de Trabalho (CAT) formaliza a ocorrência do evento junto à previdência social.", true],
    ["A notificação dos agravos relacionados ao trabalho alimenta o sistema de informação da vigilância em saúde.", true],
    ["A notificação de doença ocupacional só é realizada quando o afastamento do trabalhador supera quinze dias.", false]
  ], "A notificação no SINAN independe do tempo de afastamento; o critério de 15 dias refere-se a benefícios previdenciários." ),

  // ---------- Promoção, população negra, segurança do paciente, educação permanente, vigilância ----------
  { t: "A Política Nacional de Promoção da Saúde (PNPS), revisada em 2014, elenca temas prioritários. É um desses temas:",
    o: ["promoção da mobilidade segura.", "ampliação da oferta de leitos de UTI.", "privatização dos serviços de atenção básica.", "aumento das internações hospitalares.", "centralização da gestão no Ministério da Saúde."],
    e: "Temas prioritários: formação e educação permanente; alimentação adequada e saudável; práticas corporais e atividades físicas; enfrentamento do tabaco; enfrentamento do uso abusivo de álcool e outras drogas; mobilidade segura; cultura da paz e direitos humanos; desenvolvimento sustentável." },
  { t: "A Política Nacional de Saúde Integral da População Negra (Portaria nº 992/2009) tem como marca:",
    o: ["o reconhecimento do racismo, das desigualdades étnico-raciais e do racismo institucional como determinantes sociais das condições de saúde.", "a criação de serviços de saúde exclusivos para a população negra.", "a dispensa do registro do quesito raça/cor nos sistemas de informação.", "a restrição do acesso de outros grupos aos serviços de Atenção Básica.", "a substituição dos princípios do SUS por critérios étnicos."],
    e: "A política reforça a equidade; a coleta do quesito raça/cor, por autodeclaração, é obrigatória nos sistemas de informação do SUS." },
  af("O Programa Nacional de Segurança do Paciente (Portaria nº 529/2013) adota definições para orientar suas ações. Analise as afirmativas a seguir.", [
    ["Segurança do paciente é a redução, a um mínimo aceitável, do risco de dano desnecessário associado ao cuidado de saúde.", true],
    ["Evento adverso é o incidente que resulta em dano ao paciente.", true],
    ["Um dos objetivos do programa é envolver os pacientes e os familiares nas ações de segurança do paciente.", true],
    ["A cultura de segurança tem caráter punitivo, priorizando a identificação de culpados.", false]
  ], "A cultura de segurança estimula a notificação e o aprendizado a partir dos erros, sem caráter punitivo." ),
  { t: "A Política Nacional de Educação Permanente em Saúde define a educação permanente como:",
    o: ["aprendizagem no trabalho, em que o aprender e o ensinar se incorporam ao cotidiano das organizações, com base na problematização do processo de trabalho.", "cursos de atualização realizados exclusivamente fora do horário de trabalho.", "transmissão vertical de conteúdos técnicos pelos especialistas.", "capacitação obrigatória apenas para profissionais recém-contratados.", "treinamentos pontuais sem relação com as necessidades do serviço."],
    e: "A educação permanente parte dos problemas reais do serviço, envolvendo trabalhadores, gestão, ensino e controle social." },
  { t: "A Política Nacional de Vigilância em Saúde (Resolução CNS nº 588/2018) compreende a articulação dos saberes, processos e práticas relacionados à:",
    o: ["vigilância epidemiológica, vigilância em saúde ambiental, vigilância em saúde do trabalhador e vigilância sanitária.", "assistência hospitalar e ambulatorial de média complexidade.", "fiscalização tributária dos estabelecimentos de saúde.", "regulação de planos privados de saúde.", "formação de profissionais de nível superior."],
    e: "A PNVS integra as vigilâncias, alinhando-as ao conjunto de políticas do SUS." },
  { t: "No território de uma equipe, o enfermeiro observa a presença de vetores e reservatórios de doenças e busca articular ações com o centro de controle de zoonoses do município. Sobre essas atribuições, é correto afirmar que:",
    o: ["o centro de controle de zoonoses atua no controle das doenças transmitidas por animais à população.", "a vigilância ambiental restringe sua atuação à inspeção de estabelecimentos comerciais.", "as ações do controle de zoonoses limitam-se às doenças transmitidas entre seres humanos.", "a vigilância da qualidade da água para consumo humano compete exclusivamente à vigilância epidemiológica.", "o controle de vetores só é iniciado após a confirmação laboratorial dos casos."],
    e: "As ações de controle de vetores e reservatórios são preventivas e articuladas com a vigilância ambiental." },
  af("A vigilância sanitária integra o SUS e atua sobre fatores capazes de causar dano à saúde da população. Analise as afirmativas a seguir.", [
    ["A vigilância sanitária abrange o controle de bens de consumo que se relacionam com a saúde, em todas as etapas, da produção ao consumo.", true],
    ["A vigilância sanitária fiscaliza estabelecimentos que produzem e manipulam alimentos destinados ao consumo humano.", true],
    ["A vigilância sanitária tem por finalidade principal a detecção e o controle dos casos de doenças de notificação no território.", false]
  ], "A detecção e o controle de casos de doenças de notificação são atribuições da vigilância epidemiológica." ),

  // ---------- Redes de Atenção à Saúde (conceitos) ----------
  { t: "As Redes de Atenção à Saúde (RAS) são organizações poliárquicas de conjuntos de serviços de saúde. Nesse modelo, o centro de comunicação da rede, responsável por coordenar o cuidado, é:",
    o: ["a Atenção Primária à Saúde.", "o hospital de alta complexidade.", "a Central de Regulação de Leitos.", "o pronto-socorro.", "o ambulatório de especialidades."],
    e: "Na concepção de RAS, a APS é o centro de comunicação, coordenadora do cuidado e ordenadora da rede." },
  vf("Sobre as Redes de Atenção à Saúde (RAS), registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["As RAS buscam superar a fragmentação da atenção e da gestão.", true],
    ["Nas RAS, os pontos de atenção são organizados de forma hierárquica rígida, com o hospital no topo da pirâmide.", false],
    ["Os sistemas de apoio e os sistemas logísticos integram a estrutura operacional das RAS.", true],
    ["As redes temáticas prioritárias incluem a Rede de Atenção às Urgências e a Rede de Atenção Psicossocial.", true]
  ], "As RAS são poliárquicas (horizontais), com a APS como centro de comunicação, e não piramidais." ),

  // ---------- Situações-problema ----------
  { t: "Uma Unidade de Pronto Atendimento recebe um paciente com dor torácica. Após a estabilização, a equipe aciona a Central de Regulação para transferência a um hospital com hemodinâmica. Nessa situação, a articulação entre os pontos da rede é responsabilidade principal:",
    o: ["da regulação médica das urgências, elemento ordenador e orientador da RUE.", "da família do paciente, que deve providenciar o transporte.", "do Conselho Municipal de Saúde.", "da Vigilância Sanitária.", "do hospital privado mais próximo, sem necessidade de regulação."],
    e: "A regulação médica organiza o fluxo e garante o acesso ao recurso adequado." },
  { t: "Um município de pequeno porte deseja implantar um serviço para o atendimento de pessoas com sofrimento psíquico grave e persistente. Considerando a RAPS, o serviço de base territorial e comunitária, substitutivo ao modelo asilar, indicado para esse cuidado é o:",
    o: ["Centro de Atenção Psicossocial (CAPS).", "hospital psiquiátrico.", "Serviço Residencial Terapêutico.", "Centro de Referência em Saúde do Trabalhador.", "ambulatório de neurologia."],
    e: "O CAPS é o ponto estratégico de atenção psicossocial especializada da RAPS." },
  { t: "Uma pessoa com deficiência física recente, após alta hospitalar, precisa de reabilitação e de órtese. O ponto de atenção especializado de referência para esse cuidado, na Rede de Cuidados à Pessoa com Deficiência, é o:",
    o: ["Centro Especializado em Reabilitação (CER), com acesso a oficina ortopédica.", "CAPS AD.", "Centro de Referência de Assistência Social.", "UPA 24h.", "Serviço Residencial Terapêutico."],
    e: "O CER oferta reabilitação, e as oficinas ortopédicas confeccionam e adaptam órteses, próteses e meios auxiliares de locomoção." },
  { t: "Uma trabalhadora informal, vendedora ambulante, sofre um acidente durante o trabalho e é atendida na UPA. Segundo a Política Nacional de Saúde do Trabalhador e da Trabalhadora, é correto afirmar que:",
    o: ["ela é sujeito da política, que alcança todos os trabalhadores, independentemente de vínculo formal, e o acidente deve ser notificado.", "ela não é contemplada pela política, por não ter carteira assinada.", "o atendimento deve ser cobrado, por se tratar de acidente de trabalho.", "o caso deve ser encaminhado exclusivamente à previdência social.", "a notificação só é obrigatória para trabalhadores do setor público."],
    e: "A PNSTT abrange trabalhadores formais e informais, autônomos, desempregados e aposentados." },
  { t: "Na RUE, o componente que tem como objetivo garantir a continuidade do cuidado no domicílio, contribuindo para a desospitalização e a redução de internações, é a:",
    o: ["Atenção Domiciliar.", "Força Nacional do SUS.", "Sala de Estabilização.", "Central de Regulação.", "UPA 24h."],
    e: "A Atenção Domiciliar integra a RUE e articula o cuidado pós-urgência." },
  { t: "As Unidades de Pronto Atendimento (UPA 24h), na RUE, caracterizam-se como:",
    o: ["estabelecimentos de saúde de complexidade intermediária entre as UBS e a rede hospitalar, que funcionam 24 horas por dia.", "unidades de internação de longa permanência.", "serviços que substituem a Atenção Básica no acompanhamento de doenças crônicas.", "centros de reabilitação física.", "unidades exclusivas de atendimento a gestantes."],
    e: "As UPA compõem a rede organizada de atenção às urgências, articuladas à Atenção Básica, ao SAMU e aos hospitais." },
  vf("Sobre o atendimento pré-hospitalar e a regulação das urgências, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O SAMU 192 é acionado pela população por meio de ligação gratuita para o número 192.", true],
    ["O médico regulador define a resposta mais adequada a cada chamado, que pode incluir orientação por telefone ou envio de viatura.", true],
    ["A motolância é um veículo previsto para o atendimento pré-hospitalar em situações em que a agilidade no acesso é necessária.", true],
    ["Todas as solicitações ao SAMU resultam obrigatoriamente no envio de uma ambulância de suporte avançado.", false]
  ], "A regulação define o recurso adequado: orientação, USB, USA, motolância etc." ),
  { t: "Em relação à integração entre as redes de atenção, uma gestante em sofrimento psíquico grave, usuária de crack, em situação de rua, deve ser acompanhada:",
    o: ["de forma articulada entre a equipe de Consultório na Rua, a Rede Alyne e a RAPS, com garantia do pré-natal e do cuidado psicossocial.", "exclusivamente pelo CAPS AD, sem pré-natal.", "exclusivamente pela maternidade, após o parto.", "apenas pela assistência social, sem envolvimento da saúde.", "por meio de internação compulsória imediata, como primeira medida."],
    e: "Situações de maior vulnerabilidade exigem cuidado intersetorial e articulação entre as redes." },
  { t: "Na RAPS, o serviço que atende pessoas com sofrimento ou transtornos mentais graves e persistentes e com necessidades decorrentes do uso de crack, álcool e outras drogas, com funcionamento 24 horas, inclusive feriados e fins de semana, e com até 12 leitos de acolhimento noturno, é o:",
    o: ["CAPS AD III.", "CAPS I.", "CAPS i.", "Serviço Residencial Terapêutico.", "Centro de Convivência."],
    e: "O CAPS AD III oferece atenção contínua 24 horas e acolhimento noturno." },
  af("Considerando as políticas de equidade no SUS, analise as afirmativas a seguir.", [
    ["A coleta do quesito raça/cor, por autodeclaração, é obrigatória nos formulários dos sistemas de informação do SUS.", true],
    ["As equipes de Consultório na Rua são estratégia de equidade para a população em situação de rua.", true],
    ["O princípio da equidade justifica tratar de forma diferente os desiguais, de acordo com suas necessidades.", true],
    ["A equidade autoriza a cobrança de taxas dos usuários com maior renda.", false]
  ], "O acesso ao SUS é gratuito para todos; a equidade orienta a alocação de recursos e a priorização conforme as necessidades." ),
  { t: "No contexto da Política Nacional de Humanização, a \"equipe de referência\" associada ao \"apoio matricial\" busca:",
    o: ["fortalecer o vínculo e a responsabilização de uma equipe por um conjunto de usuários, com suporte especializado compartilhado.", "dividir o cuidado em procedimentos isolados, sem responsável definido.", "transferir a responsabilidade pelo usuário para o especialista.", "reduzir o contato entre profissionais e usuários.", "eliminar a participação dos usuários nas decisões terapêuticas."],
    e: "A equipe de referência é responsável longitudinalmente pelo usuário; o apoio matricial amplia sua capacidade de resposta." },
  { t: "O Projeto Terapêutico Singular (PTS), dispositivo da Política Nacional de Humanização, é:",
    o: ["um conjunto de propostas de condutas terapêuticas articuladas, para um sujeito individual ou coletivo, resultado da discussão coletiva de uma equipe interdisciplinar.", "a prescrição médica padronizada para todos os pacientes com o mesmo diagnóstico.", "o protocolo de classificação de risco da UPA.", "o regimento interno do Conselho Local de Saúde.", "o plano de alta hospitalar definido exclusivamente pelo médico."],
    e: "O PTS envolve diagnóstico, definição de metas, divisão de responsabilidades e reavaliação, com participação do usuário." },
  vf("Sobre a organização do controle social no SUS, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["Os Conselhos de Saúde atuam na formulação de estratégias e no controle da execução da política de saúde, inclusive nos aspectos econômicos e financeiros.", true],
    ["Os usuários têm representação paritária em relação ao conjunto dos demais segmentos.", true],
    ["O CONASS e o CONASEMS têm representação no Conselho Nacional de Saúde.", true],
    ["As Comissões Intergestores são instâncias de controle social com participação majoritária de usuários.", false]
  ], "As Comissões Intergestores são instâncias de pactuação entre gestores, não de controle social." ),
  { t: "O Pacto pela Saúde (2006) estabeleceu, no Pacto pela Vida, prioridades sanitárias. Entre elas, inclui-se:",
    o: ["a saúde do idoso.", "a privatização da atenção hospitalar.", "o fim da Estratégia Saúde da Família.", "a redução do controle social.", "a centralização da gestão na União."],
    e: "Prioridades do Pacto pela Vida incluíam saúde do idoso, controle do câncer de colo e de mama, redução da mortalidade infantil e materna, resposta às doenças emergentes, promoção da saúde e fortalecimento da Atenção Básica." },
  { t: "Ao classificar um usuário na porta de urgência, a equipe utiliza um protocolo que prioriza o atendimento pela gravidade, e não pela ordem de chegada. Sobre o acolhimento com classificação de risco, é correto afirmar que:",
    o: ["ele qualifica a entrada do usuário e organiza o fluxo do atendimento conforme a gravidade do quadro.", "ele ordena o atendimento pela ordem de chegada dos usuários.", "ele se baseia exclusivamente na aferição de sinais vitais registrada na recepção por profissional administrativo.", "ele dispensa a reavaliação do usuário enquanto aguarda atendimento.", "ele é realizado apenas pelo médico plantonista."],
    e: "A classificação de risco é feita por profissional de saúde capacitado (em geral, o enfermeiro), com reavaliações periódicas." },
  { t: "O Sistema Nacional de Vigilância Sanitária é coordenado, no âmbito federal, pela:",
    o: ["Agência Nacional de Vigilância Sanitária (ANVISA).", "Agência Nacional de Saúde Suplementar (ANS).", "Fundação Nacional de Saúde (FUNASA).", "Fundação Oswaldo Cruz (FIOCRUZ).", "Secretaria de Atenção Primária à Saúde."],
    e: "Lei 9.782/1999. A ANS regula os planos privados de saúde." },
  { t: "A Agência Nacional de Saúde Suplementar (ANS), criada pela Lei nº 9.961/2000, tem como finalidade:",
    o: ["regular, normatizar, controlar e fiscalizar as atividades das operadoras de planos privados de assistência à saúde.", "executar ações de vigilância epidemiológica nos municípios.", "coordenar a Rede de Atenção às Urgências.", "registrar medicamentos e alimentos.", "gerir os hospitais universitários federais."],
    e: "O registro de medicamentos é atribuição da ANVISA." },
  { t: "No contexto da Política Nacional de Atenção Básica, a estratégia prioritária para expansão e consolidação da Atenção Básica é a:",
    o: ["Estratégia Saúde da Família.", "Unidade de Pronto Atendimento.", "atenção hospitalar de média complexidade.", "rede de farmácias privadas conveniadas.", "teleconsulta como única forma de atendimento."],
    e: "A PNAB reconhece a Saúde da Família como estratégia prioritária, admitindo outras modalidades de equipe." },
  vf("Considerando o financiamento e o planejamento no SUS, registre V para as afirmativas verdadeiras e F para as falsas.", [
    ["O Plano de Saúde é o instrumento central de planejamento para o período de quatro anos.", true],
    ["O Relatório Anual de Gestão apresenta os resultados alcançados com a execução da Programação Anual de Saúde.", true],
    ["O Conselho de Saúde não participa da apreciação do Relatório Anual de Gestão.", false],
    ["Os recursos do SUS em cada esfera são movimentados em fundos de saúde.", true]
  ], "O RAG deve ser apreciado pelo Conselho de Saúde (LC 141/2012)." )
);
