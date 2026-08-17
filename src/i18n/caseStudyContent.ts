export type CaseStudyContent = {
  slug: string
  tag: string
  name: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  showDashboard?: boolean
}

export const caseStudyContent: Record<'en' | 'pt', Record<string, CaseStudyContent>> = {
  en: {
    bda: {
      slug: 'bda',
      tag: 'Demo project · Flagship',
      name: 'BDA — Daily Market Report System',
      summary: 'An automated financial market reporting system — Teko’s flagship proof of concept.',
      challenge:
        'A financial research desk was compiling its daily market brief by hand — pulling numbers from several data feeds into spreadsheets, then writing commentary from scratch every morning before markets opened.',
      approach:
        'Teko built an automated pipeline that ingests market data overnight, cleans and structures it, and assembles a board-ready daily report — complete with charts, KPI tracking, and optional AI-drafted commentary the team reviews before it goes out.',
      outcome:
        'What used to take a few hours of manual work every morning is now ready before the desk opens, freeing the team to focus on judgment calls instead of data wrangling.',
      showDashboard: true,
    },
    'grupo-mestres': {
      slug: 'grupo-mestres',
      tag: 'Placeholder',
      name: 'Grupo Mestres — Website',
      summary: 'Corporate website design and build.',
      challenge:
        'Grupo Mestres needed a corporate website that matched the seriousness of the business — content and structure to be finalized with the client.',
      approach:
        'Teko’s Digital Operations Pack approach: information architecture, brand-consistent design, and a build that’s easy for the internal team to maintain going forward.',
      outcome: 'Case study content in progress — full write-up to follow once the build ships.',
    },
    cba: {
      slug: 'cba',
      tag: 'Placeholder',
      name: 'Escritório Cândido Brito Advogados (CBA) — Corporate Identity',
      summary: 'Full digital identity package for a law office.',
      challenge:
        'CBA, a law office, needed a complete, credible digital identity — professional email and domain, an organized document structure, and a public-facing website.',
      approach:
        'A full Digital Operations Pack: domain and professional email setup, organized shared drives, intake forms, and a website designed to reflect the practice’s credibility.',
      outcome: 'Case study content in progress — full write-up to follow once the build ships.',
    },
  },
  pt: {
    bda: {
      slug: 'bda',
      tag: 'Projeto demo · Produto principal',
      name: 'BDA — Sistema de Relatório Diário de Mercado',
      summary: 'Um sistema automatizado de relatórios de mercado financeiro — a prova de conceito principal da Teko.',
      challenge:
        'Uma mesa de research financeiro compilava o seu briefing diário de mercado à mão — juntando números de várias fontes em folhas de cálculo e escrevendo comentário do zero todas as manhãs antes da abertura dos mercados.',
      approach:
        'A Teko construiu um pipeline automatizado que recolhe dados de mercado durante a noite, limpa e estrutura a informação, e monta um relatório diário pronto para a direção — com gráficos, acompanhamento de KPIs, e comentário opcional gerado por IA que a equipa revê antes de enviar.',
      outcome:
        'O que costumava levar algumas horas de trabalho manual todas as manhãs está agora pronto antes da abertura da mesa, libertando a equipa para se focar em decisões, não em tratar dados.',
      showDashboard: true,
    },
    'grupo-mestres': {
      slug: 'grupo-mestres',
      tag: 'Placeholder',
      name: 'Grupo Mestres — Website',
      summary: 'Desenho e construção de website corporativo.',
      challenge:
        'A Grupo Mestres precisava de um website corporativo à altura da seriedade do negócio — conteúdo e estrutura a finalizar com o cliente.',
      approach:
        'Abordagem do Pacote de Operações Digitais da Teko: arquitetura de informação, design consistente com a marca, e uma construção fácil de manter pela equipa interna.',
      outcome: 'Conteúdo do caso de estudo em curso — resumo completo após o lançamento.',
    },
    cba: {
      slug: 'cba',
      tag: 'Placeholder',
      name: 'Escritório Cândido Brito Advogados (CBA) — Identidade Corporativa',
      summary: 'Pacote completo de identidade digital para um escritório de advocacia.',
      challenge:
        'A CBA, um escritório de advocacia, precisava de uma identidade digital completa e credível — email profissional e domínio, estrutura de documentos organizada, e um website público.',
      approach:
        'Um Pacote de Operações Digitais completo: domínio e email profissional, drives partilhados organizados, formulários de entrada, e um website desenhado para refletir a credibilidade do escritório.',
      outcome: 'Conteúdo do caso de estudo em curso — resumo completo após o lançamento.',
    },
  },
}
