export type Lang = 'en' | 'pt'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact Us',
      cta: 'Get in touch',
    },
    hero: {
      headlineStart: 'We build the digital systems that keep your business ',
      headlineAccent: 'moving.',
      subhead:
        'We create digital solutions, automate processes, and integrate artificial intelligence to simplify work and improve how your business runs.',
      cta: 'Book a free discovery call',
      secondaryCta: 'See our services',
      paymentNote:
        'Flexible payment: 50% on agreement, 50% on delivery, or by installments for larger builds.',
      terminalLines: [
        '> teko init --client=your-business',
        '> setting up digital identity...',
        '> deploying AI workflow solutions...',
        '> integrating CRM and automations...',
        '> system ready. delivered.',
      ],
    },
    trust: {
      line: 'Working with collaborators internationally.',
      line2: 'A global network of developers ready to ship digital solutions for your business.',
    },
    stats: {
      title: 'Why This Matters',
      subtitle: 'The businesses we work with usually recognize themselves in these numbers.',
      identity: {
        label: 'Digital identity & operations',
        items: [
          { stat: '73%', desc: 'of consumers say a poor website makes them question if a business is credible or even legitimate.' },
          { stat: '57%', desc: 'of small businesses still don’t have a website at all, invisible to anyone searching for them.' },
          { stat: '88%', desc: 'of users are unlikely to return to a site after a bad first experience.' },
          { stat: '3h+', desc: 'lost per week, per employee, re-typing data between disconnected spreadsheets, inboxes and drives.' },
        ],
      },
      analytics: {
        label: 'AI for business departments',
        items: [
          { stat: '40%', desc: 'of a manager’s time is spent chasing, cleaning, and reformatting data instead of using it.' },
          { stat: '2.5x', desc: 'more likely a company is to beat targets when leadership has real-time reporting instead of monthly spreadsheets.' },
          { stat: '68%', desc: 'of businesses admit they make decisions on gut feeling because their data isn’t trustworthy or timely.' },
          { stat: '1 in 3', desc: 'reports handed to leadership contain an error introduced by manual copy-paste work.' },
        ],
      },
    },
    mission: {
      kicker: 'Our purpose',
      title: 'Democratizing access to artificial intelligence.',
      text: 'Structure and intelligent systems used to be reserved for companies large enough to afford an in-house data team or an enterprise consultancy. We think that’s backwards. Teko exists to bring that same capability to growing businesses, at a scale and a price that makes sense for them.',
      valuesTitle: 'What guides how we build',
      values: [
        { title: 'Structure over guesswork', desc: 'Every system we ship replaces a manual habit with a repeatable process, not a one-off script.' },
        { title: 'Real systems, not decks', desc: 'We hand over working software your team actually uses, not a slide about what could be built.' },
        { title: 'Plain language, always', desc: 'No unnecessary technical terms. If a client can’t explain what we built them in one sentence, we haven’t finished.' },
        { title: 'Partners, not vendors', desc: 'We stay on after launch: monitoring, small fixes, and the next system when the business is ready for it.' },
      ],
    },
    servicesTeaser: {
      kicker: 'What we do',
      title: 'Two suites, one ideal route',
      subtitle:
        'Walking both suites in order is the route we recommend: first we bring your presence to life, then we make it think. Each suite also stands on its own.',
      cta: 'Explore all services',
      branch1: {
        name: 'Digital Identity & Operations',
        tagline: 'We bring your presence to life',
        desc: 'Professional email, domain, a simple CRM, organized drives, and a website. The operational backbone, set up right, once.',
        checklist: ['Professional email + domain', 'Simple CRM, sized to your team', 'Organized shared drives', 'A website built right'],
      },
      branch2: {
        name: 'AI Solutions for Business Departments',
        tagline: 'We put AI to work inside your analytics, departments, and CRM',
        desc: 'We connect your data, automate the reporting, and put AI to work inside the tools your team already uses, every day.',
        checklist: ['Executive reporting agent', 'AI workflow automation', 'AI inside your CRM and departments'],
      },
    },
    route: {
      pageTitle: 'Services',
      pageSubtitle: 'Two suites, built to take a business from invisible and manual to structured and intelligent.',
      intro1: 'There’s a route we take every client through:',
      intro2a: 'first we bring your presence to life.',
      intro2b: 'Then, we make it think.',
      idealNote:
        'This order is the route we recommend, since a strong digital identity is what an intelligent system reports on. That said, each suite is sold and delivered on its own, whichever your business needs first.',
      alaCarteNote: 'Each item can also be hired on its own, for example just the website build.',
      bottomCtaTitle: 'Not sure which suite you need?',
      bottomCtaText: 'Book a free discovery call and we’ll help you map it out.',
      bottomCtaButton: 'Book a free discovery call',
      step1: {
        kicker: 'Suite 1 — Digital Identity & Business Operations',
        tagline: 'We bring your presence to life',
        flagshipLabel: 'Flagship',
        flagshipName: 'Digital Operations Pack',
        flagshipDesc:
          'The operational backbone for a serious business: professional email + domain, organized shared drives, intake forms, a simple CRM, and a website, set up right, once.',
        note: 'Includes websites, like this one.',
        addon: 'Add-on: WhatsApp inquiry flow and FAQ assistant.',
        checklist: [
          'Professional email on your own domain',
          'Organized, permission-based shared drives',
          'Client intake forms that route to the right place',
          'A simple CRM sized to how your team sells',
          'A website that matches the rest of your identity',
          'Optional: WhatsApp inquiry flow and FAQ assistant',
        ],
      },
      step2: {
        kicker: 'Suite 2 — AI Solutions for Business Departments',
        tagline: 'We put AI to work inside your analytics, departments, and CRM',
        flagshipLabel: 'Flagship',
        flagshipName: 'Executive Reporting Agent',
        flagshipDesc:
          'We collect, clean and combine your internal and external data into automated dashboards and board-ready reports, with optional AI-written commentary.',
        item2Name: 'AI Workflow Automation',
        item2Desc:
          'Spreadsheet cleanup, recurring report pipelines, KPI logic and dashboards, for teams still doing this by hand.',
        item3Name: 'CRM & Department AI Tools',
        item3Desc:
          'AI embedded in your CRM and department tools: pipeline trackers, BD dashboards, and workflow systems fitted to how your business actually operates.',
        checklist: [
          'Automated executive and board-ready reporting',
          'AI-written commentary on your numbers, reviewed by your team',
          'Recurring report pipelines that build themselves',
          'AI-assisted pipeline and BD tracking inside your CRM',
          'Department dashboards with automated KPI logic',
        ],
        scrollLabel: 'A real system, in production',
        scrollTitle: 'BDA × TekoAI — Market Intelligence Platform',
        scrollDesc:
          'An automated daily market report dashboard, built for a financial research desk. Live proof of the kind of system Teko ships, not a mockup.',
      },
    },
    serviceDetail: {
      overviewLabel: 'Overview',
      includesLabel: 'What’s included',
      backToServices: 'All services',
      ctaText: 'Talk to us about this',
      items: {
        'digital-operations-pack': {
          branch: 'Digital Identity & Operations',
          name: 'Digital Operations Pack',
          tagline: 'The operational backbone for a serious business.',
          description:
            'Most growing businesses are running on a patchwork: a personal Gmail for client emails, a WhatsApp thread standing in for a CRM, files scattered across three different drives. The Digital Operations Pack replaces that patchwork with one coherent setup, built once and built right.',
          bullets: [
            'Professional email on your own domain',
            'Organized, permission-based shared drives',
            'Client intake forms that route to the right place',
            'A simple CRM sized to how your team actually sells',
            'A website that matches the rest of your identity',
          ],
        },
        'business-tools': {
          branch: 'Digital Identity & Operations',
          name: 'Digital Presence Tools',
          tagline: 'The add-ons that make the front door work harder.',
          description:
            'Once the operational backbone is in place, we add the tools that handle the first conversation with a customer automatically, so nothing sits unanswered overnight.',
          bullets: [
            'WhatsApp inquiry flow connected to your CRM',
            'FAQ assistant trained on your business',
            'Booking and intake automation',
            'Ongoing monitoring once it’s live',
          ],
        },
        'executive-reporting-agent': {
          branch: 'AI Solutions for Business Departments',
          name: 'Executive Reporting Agent',
          tagline: 'Board-ready reporting, built once, delivered automatically.',
          description:
            'We collect your internal and external data, clean it, and combine it into a single automated report your leadership can trust, with optional AI-written commentary reviewed by your team before it goes out.',
          bullets: [
            'Automated data collection from your existing tools',
            'Cleaning and structuring, no more manual spreadsheet work',
            'Board-ready dashboards and exportable reports',
            'Optional AI-drafted commentary on the numbers',
          ],
        },
        'ai-workflows-crm': {
          branch: 'AI Solutions for Business Departments',
          name: 'AI Workflows, Departments & CRM',
          tagline: 'AI embedded where your team already works.',
          description:
            'Instead of a separate AI tool nobody opens, we build AI into the systems your team already uses daily: your CRM, your pipeline tracker, your department dashboards.',
          bullets: [
            'AI-assisted pipeline and BD tracking inside your CRM',
            'Department dashboards with automated KPI logic',
            'Recurring report pipelines that build themselves',
            'Internal tools fitted to how your business actually operates',
          ],
        },
      },
    },
    how: {
      title: 'How We Work',
      subtitle: 'A fixed, four-step process. No surprises, no scope creep.',
      steps: [
        { name: 'Discovery', tag: 'Free', desc: 'We map the bottleneck.' },
        { name: 'Build', tag: '', desc: 'Fixed scope, agreed upfront.' },
        { name: 'Launch', tag: '', desc: 'Delivered: 50% on agreement, 50% on delivery (or installments for larger builds).' },
        { name: 'Support', tag: '', desc: 'Ongoing monitoring and improvements.' },
      ],
    },
    cases: {
      title: 'Case Studies',
      subtitle: 'A sample of the systems and identities we’ve built.',
      viewCase: 'View case study',
      viewAll: 'View all case studies',
      items: [
        {
          slug: 'bda',
          tag: 'Demo project · Flagship',
          name: 'BDA — Daily Market Report System',
          summary: 'An automated financial market reporting system, Teko’s flagship proof of concept.',
        },
        {
          slug: 'grupo-mestres',
          tag: 'Placeholder',
          name: 'Grupo Mestres — Website',
          summary: 'Corporate website design and build.',
        },
        {
          slug: 'cba',
          tag: 'Placeholder',
          name: 'Escritório Cândido Brito Advogados (CBA) — Corporate Identity',
          summary: 'Full digital identity package for a law office.',
        },
      ],
    },
    about: {
      title: 'About Teko',
      kicker: 'About / Team',
      intro:
        'Teko was founded by two finance- and business-analytics-trained operators who believe growth comes from structure, not guesswork. We build the systems we wished more businesses had.',
      foundersTitle: 'Founders',
      foundersTagline: 'Two highly proactive young professionals, with experience and knowledge of the latest technology systems.',
      founder1: {
        name: 'Reinaldo Trindade',
        bio: 'Finance and business analytics background (Bayes Business School); Angola-market experience via internships and non-profit work.',
      },
      founder2: {
        name: 'Malcolm',
        bio: 'Add Malcolm’s background/credentials here.',
      },
    },
    contact: {
      title: 'Contact',
      text: 'Tell us what’s slowing you down. We’ll reply directly, no forms to chase.',
      cta: 'Email Teko',
    },
    contactPage: {
      kicker: 'Get in touch',
      title: 'Let’s talk about what’s slowing you down.',
      text: 'Book a free discovery call, or write to us directly. We reply ourselves, no ticketing system, no forms to chase.',
      cta: 'Book a free discovery call',
      emailCta: 'Email Teko directly',
      pointsTitle: 'What to expect',
      points: [
        'A free discovery call to map the actual bottleneck',
        'A fixed-scope proposal, agreed before any work starts',
        'Flexible payment: 50% on agreement, 50% on delivery, or installments for larger builds',
      ],
    },
    footer: {
      tagline: 'Business systems and applied AI for growing businesses.',
      pagesTitle: 'Pages',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      socialTitle: 'Connect',
      linkedinSoon: 'LinkedIn (soon)',
      rights: 'All rights reserved.',
    },
    backHome: 'Back to Teko',
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contacto',
      cta: 'Fale connosco',
    },
    hero: {
      headlineStart: 'Construímos os sistemas que fazem o seu negócio ',
      headlineAccent: 'avançar.',
      subhead:
        'Criamos soluções digitais, automatizamos processos e integramos inteligência artificial para simplificar o trabalho e melhorar a forma como a sua empresa funciona.',
      cta: 'Marcar uma chamada gratuita',
      secondaryCta: 'Ver os nossos serviços',
      paymentNote:
        'Pagamento flexível: 50% no acordo, 50% na entrega, ou em prestações para projetos maiores.',
      terminalLines: [
        '> teko init --cliente=o-seu-negocio',
        '> a configurar identidade digital...',
        '> a implementar fluxos de IA...',
        '> a integrar CRM e automações...',
        '> sistema pronto. entregue.',
      ],
    },
    trust: {
      line: 'A trabalhar com colaboradores internacionalmente.',
      line2: 'Uma rede global de programadores pronta para entregar soluções digitais para o seu negócio.',
    },
    stats: {
      title: 'Porque É Que Isto Importa',
      subtitle: 'As empresas com quem trabalhamos costumam rever-se nestes números.',
      identity: {
        label: 'Identidade digital & operações',
        items: [
          { stat: '73%', desc: 'dos consumidores dizem que um site de má qualidade os faz duvidar da credibilidade, ou até legitimidade, de um negócio.' },
          { stat: '57%', desc: 'das pequenas empresas continuam sem website, invisíveis para quem as procura online.' },
          { stat: '88%', desc: 'dos utilizadores é improvável que voltem a um site depois de uma má primeira experiência.' },
          { stat: '3h+', desc: 'perdidas por semana, por colaborador, a reintroduzir dados entre folhas de cálculo, emails e drives desligados entre si.' },
        ],
      },
      analytics: {
        label: 'IA para departamentos de negócio',
        items: [
          { stat: '40%', desc: 'do tempo de um gestor é gasto a procurar, limpar e reformatar dados, em vez de os usar.' },
          { stat: '2.5x', desc: 'mais provável uma empresa bater os seus objetivos quando a liderança tem relatórios em tempo real, em vez de folhas mensais.' },
          { stat: '68%', desc: 'das empresas admitem decidir "por intuição" porque os seus dados não são fiáveis ou atempados.' },
          { stat: '1 em 3', desc: 'relatórios entregues à liderança contêm um erro introduzido por trabalho manual de copiar-colar.' },
        ],
      },
    },
    mission: {
      kicker: 'O nosso propósito',
      title: 'Democratizar o acesso à inteligência artificial.',
      text: 'Estrutura e sistemas inteligentes costumavam ser um privilégio das empresas grandes o suficiente para pagar uma equipa de dados interna ou uma consultora enterprise. Achamos isso ao contrário. A Teko existe para trazer essa mesma capacidade a empresas em crescimento, a uma escala e a um preço que façam sentido para elas.',
      valuesTitle: 'O que guia a forma como construímos',
      values: [
        { title: 'Estrutura em vez de acaso', desc: 'Cada sistema que entregamos substitui um hábito manual por um processo repetível, não um script pontual.' },
        { title: 'Sistemas reais, não slides', desc: 'Entregamos software funcional que a sua equipa usa de facto, não um slide sobre o que poderia ser construído.' },
        { title: 'Linguagem simples, sempre', desc: 'Sem termos técnicos desnecessários. Se um cliente não consegue explicar o que lhe construímos numa frase, ainda não acabámos.' },
        { title: 'Parceiros, não fornecedores', desc: 'Continuamos depois do lançamento: monitorização, pequenos ajustes, e o próximo sistema quando o negócio estiver pronto.' },
      ],
    },
    servicesTeaser: {
      kicker: 'O que fazemos',
      title: 'Dois pacotes, uma rota ideal',
      subtitle:
        'Seguir os dois pacotes pela ordem é a rota que recomendamos: primeiro damos vida à sua presença, depois tornamo-la inteligente. Cada pacote também funciona sozinho.',
      cta: 'Ver todos os serviços',
      branch1: {
        name: 'Identidade Digital & Operações',
        tagline: 'Damos vida à sua presença',
        desc: 'Email profissional, domínio, um CRM simples, drives organizados, e o seu website. A espinha dorsal operacional, feita bem, uma vez.',
        checklist: ['Email profissional + domínio', 'CRM simples, do tamanho da sua equipa', 'Drives partilhados organizados', 'Um website bem feito'],
      },
      branch2: {
        name: 'Soluções de IA para Departamentos de Negócio',
        tagline: 'Colocamos a IA a trabalhar na sua análise, departamentos e CRM',
        desc: 'Ligamos os seus dados, automatizamos os relatórios, e colocamos a IA a trabalhar dentro das ferramentas que a sua equipa já usa, todos os dias.',
        checklist: ['Agente de relatórios executivos', 'Automação de fluxos com IA', 'IA dentro do seu CRM e departamentos'],
      },
    },
    route: {
      pageTitle: 'Serviços',
      pageSubtitle: 'Dois pacotes, feitos para levar um negócio de invisível e manual a estruturado e inteligente.',
      intro1: 'Há um percurso que seguimos com cada cliente:',
      intro2a: 'primeiro, damos vida à sua presença.',
      intro2b: 'Depois, tornamo-la inteligente.',
      idealNote:
        'Esta ordem é a rota que recomendamos, já que uma identidade digital forte é sobre o que um sistema inteligente reporta. Ainda assim, cada pacote é vendido e entregue de forma independente, conforme o que o seu negócio precisar primeiro.',
      alaCarteNote: 'Cada elemento pode também ser contratado de forma individual, por exemplo, apenas a criação do website.',
      bottomCtaTitle: 'Não sabe bem de que pacote precisa?',
      bottomCtaText: 'Marque uma chamada gratuita e ajudamo-lo a mapear o percurso certo.',
      bottomCtaButton: 'Marcar uma chamada gratuita',
      step1: {
        kicker: 'Pacote 1 — Identidade Digital & Operações de Negócio',
        tagline: 'Damos vida à sua presença',
        flagshipLabel: 'Produto principal',
        flagshipName: 'Pacote de Operações Digitais',
        flagshipDesc:
          'A espinha dorsal operacional de um negócio sério: email profissional + domínio, drives partilhados organizados, formulários de entrada, um CRM simples e um website, feito bem, uma vez.',
        note: 'Inclui websites, como este.',
        addon: 'Extra: fluxo de contacto via WhatsApp e assistente de FAQ.',
        checklist: [
          'Email profissional no seu próprio domínio',
          'Drives partilhados organizados, com permissões',
          'Formulários de entrada que direcionam para o sítio certo',
          'Um CRM simples, do tamanho da forma como a sua equipa vende',
          'Um website coerente com o resto da sua identidade',
          'Opcional: fluxo de contacto via WhatsApp e assistente de FAQ',
        ],
      },
      step2: {
        kicker: 'Pacote 2 — Soluções de IA para Departamentos de Negócio',
        tagline: 'Colocamos a IA a trabalhar na sua análise, departamentos e CRM',
        flagshipLabel: 'Produto principal',
        flagshipName: 'Agente de Relatórios Executivos',
        flagshipDesc:
          'Recolhemos, limpamos e combinamos os seus dados internos e externos em dashboards automáticos e relatórios prontos para a direção, com comentário opcional gerado por IA.',
        item2Name: 'Automação de Fluxos com IA',
        item2Desc:
          'Limpeza de folhas de cálculo, relatórios recorrentes automatizados, lógica de KPIs e dashboards, para equipas que ainda fazem isto à mão.',
        item3Name: 'IA no CRM & Departamentos',
        item3Desc:
          'IA integrada no seu CRM e ferramentas de departamento: trackers de pipeline, dashboards de desenvolvimento de negócio, e sistemas de fluxo adaptados à forma como o seu negócio funciona.',
        checklist: [
          'Relatórios executivos automáticos, prontos para a direção',
          'Comentário gerado por IA sobre os números, revisto pela sua equipa',
          'Relatórios recorrentes que se constroem sozinhos',
          'Tracking de pipeline e BD assistido por IA dentro do seu CRM',
          'Dashboards de departamento com lógica de KPIs automatizada',
        ],
        scrollLabel: 'Um sistema real, em produção',
        scrollTitle: 'BDA × TekoAI — Plataforma de Inteligência de Mercado',
        scrollDesc:
          'Um dashboard automático de relatório diário de mercado, construído para uma mesa de research financeiro. Prova ao vivo do tipo de sistema que a Teko entrega, não é uma maquete.',
      },
    },
    serviceDetail: {
      overviewLabel: 'Visão geral',
      includesLabel: 'O que está incluído',
      backToServices: 'Todos os serviços',
      ctaText: 'Fale connosco sobre isto',
      items: {
        'digital-operations-pack': {
          branch: 'Identidade Digital & Operações',
          name: 'Pacote de Operações Digitais',
          tagline: 'A espinha dorsal operacional de um negócio sério.',
          description:
            'A maioria das empresas em crescimento funciona aos remendos: um Gmail pessoal para emails de clientes, uma conversa de WhatsApp a servir de CRM, ficheiros espalhados por três drives diferentes. O Pacote de Operações Digitais substitui esses remendos por uma configuração coerente, feita bem, uma vez.',
          bullets: [
            'Email profissional no seu próprio domínio',
            'Drives partilhados organizados, com permissões',
            'Formulários de entrada que direcionam para o sítio certo',
            'Um CRM simples, do tamanho da forma como a sua equipa vende',
            'Um website coerente com o resto da sua identidade',
          ],
        },
        'business-tools': {
          branch: 'Identidade Digital & Operações',
          name: 'Ferramentas de Presença Digital',
          tagline: 'Os extras que fazem a porta de entrada trabalhar mais.',
          description:
            'Depois da espinha dorsal operacional estar montada, adicionamos as ferramentas que tratam da primeira conversa com um cliente automaticamente, para nada ficar sem resposta durante a noite.',
          bullets: [
            'Fluxo de contacto via WhatsApp ligado ao seu CRM',
            'Assistente de FAQ treinado no seu negócio',
            'Automação de marcações e entrada de pedidos',
            'Monitorização contínua depois de estar ao vivo',
          ],
        },
        'executive-reporting-agent': {
          branch: 'Soluções de IA para Departamentos de Negócio',
          name: 'Agente de Relatórios Executivos',
          tagline: 'Relatórios prontos para a direção, feitos uma vez, entregues automaticamente.',
          description:
            'Recolhemos os seus dados internos e externos, limpamos, e combinamos num único relatório automático em que a sua liderança pode confiar, com comentário opcional gerado por IA revisto pela sua equipa antes de sair.',
          bullets: [
            'Recolha automática de dados das suas ferramentas atuais',
            'Limpeza e estruturação, sem mais trabalho manual em folhas de cálculo',
            'Dashboards prontos para a direção e relatórios exportáveis',
            'Comentário opcional gerado por IA sobre os números',
          ],
        },
        'ai-workflows-crm': {
          branch: 'Soluções de IA para Departamentos de Negócio',
          name: 'IA em Fluxos, Departamentos & CRM',
          tagline: 'IA integrada onde a sua equipa já trabalha.',
          description:
            'Em vez de uma ferramenta de IA separada que ninguém abre, integramos IA nos sistemas que a sua equipa já usa todos os dias: o seu CRM, o seu tracker de pipeline, os seus dashboards de departamento.',
          bullets: [
            'Tracking de pipeline e BD assistido por IA dentro do seu CRM',
            'Dashboards de departamento com lógica de KPIs automatizada',
            'Relatórios recorrentes que se constroem sozinhos',
            'Ferramentas internas adaptadas à forma como o seu negócio funciona',
          ],
        },
      },
    },
    how: {
      title: 'Como Trabalhamos',
      subtitle: 'Um processo fixo, em quatro passos. Sem surpresas, sem desvios de âmbito.',
      steps: [
        { name: 'Diagnóstico', tag: 'Gratuito', desc: 'Mapeamos o problema.' },
        { name: 'Construção', tag: '', desc: 'Âmbito fixo, definido antecipadamente.' },
        { name: 'Lançamento', tag: '', desc: 'Entregue: 50% no acordo, 50% na entrega (ou prestações para projetos maiores).' },
        { name: 'Suporte', tag: '', desc: 'Monitorização e melhorias contínuas.' },
      ],
    },
    cases: {
      title: 'Casos de Estudo',
      subtitle: 'Uma amostra dos sistemas e identidades que já construímos.',
      viewCase: 'Ver caso de estudo',
      viewAll: 'Ver todos os casos de estudo',
      items: [
        {
          slug: 'bda',
          tag: 'Projeto demo · Produto principal',
          name: 'BDA — Sistema de Relatório Diário de Mercado',
          summary: 'Um sistema automatizado de relatórios de mercado financeiro, a prova de conceito principal da Teko.',
        },
        {
          slug: 'grupo-mestres',
          tag: 'Placeholder',
          name: 'Grupo Mestres — Website',
          summary: 'Desenho e construção de website corporativo.',
        },
        {
          slug: 'cba',
          tag: 'Placeholder',
          name: 'Escritório Cândido Brito Advogados (CBA) — Identidade Corporativa',
          summary: 'Pacote completo de identidade digital para um escritório de advocacia.',
        },
      ],
    },
    about: {
      title: 'Sobre a Teko',
      kicker: 'Sobre / Equipa',
      intro:
        'A Teko foi fundada por dois profissionais formados em finanças e análise de negócio que acreditam que o crescimento vem da estrutura, não do acaso. Construímos os sistemas que gostaríamos que mais empresas tivessem.',
      foundersTitle: 'Fundadores',
      foundersTagline: 'Dois jovens altamente proactivos, com experiência e conhecimento nos sistemas tecnológicos mais atuais.',
      founder1: {
        name: 'Reinaldo Trindade',
        bio: 'Formação em finanças e análise de negócio (Bayes Business School); experiência no mercado angolano via estágios e trabalho em ONGs.',
      },
      founder2: {
        name: 'Malcolm',
        bio: 'Adicionar formação/credenciais do Malcolm aqui.',
      },
    },
    contact: {
      title: 'Contacto',
      text: 'Diga-nos o que está a atrasar o seu negócio. Respondemos diretamente, sem formulários intermináveis.',
      cta: 'Enviar email à Teko',
    },
    contactPage: {
      kicker: 'Fale connosco',
      title: 'Vamos falar sobre o que está a atrasar o seu negócio.',
      text: 'Marque uma chamada gratuita, ou escreva-nos diretamente. Respondemos nós próprios, sem sistema de tickets, sem formulários intermináveis.',
      cta: 'Marcar uma chamada gratuita',
      emailCta: 'Enviar email diretamente',
      pointsTitle: 'O que esperar',
      points: [
        'Uma chamada de diagnóstico gratuita para mapear o problema real',
        'Uma proposta de âmbito fixo, acordada antes de qualquer trabalho começar',
        'Pagamento flexível: 50% no acordo, 50% na entrega, ou prestações para projetos maiores',
      ],
    },
    footer: {
      tagline: 'Sistemas de negócio e IA aplicada para empresas em crescimento.',
      pagesTitle: 'Páginas',
      servicesTitle: 'Serviços',
      companyTitle: 'Empresa',
      socialTitle: 'Ligar',
      linkedinSoon: 'LinkedIn (em breve)',
      rights: 'Todos os direitos reservados.',
    },
    backHome: 'Voltar à Teko',
  },
}

export type Translation = (typeof translations)['en']

export const CONTACT_EMAIL = 'hello@teko.pt'

export const SERVICE_SLUGS = [
  'digital-operations-pack',
  'business-tools',
  'executive-reporting-agent',
  'ai-workflows-crm',
] as const
