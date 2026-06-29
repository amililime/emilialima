import type { Dict } from "../types";

const ptBR: Dict = {
  skipToContent: "Pular para o conteúdo",
  nav: {
    primary: "Principal",
    backToTop: "Emilia Lima — voltar ao topo",
    about: "Sobre mim",
    work: "Trabalho",
    contact: "Contato",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Desenvolvedora Full Stack",
    name1: "Emilia",
    name2: "Lima",
    subtitle: "TypeScript, React, Next.js, Node.js.",
    viewWork: "Ver trabalhos",
    getInTouch: "Falar comigo",
    scroll: "Role",
  },
  about: {
    eyebrow: "I — Sobre",
    title: "Uma breve biografia",
    paragraphs: [
      "Sou desenvolvedora de software, fascinada pelo que conseguimos construir com tecnologia — curiosa, criativa e com vontade de criar pontes entre culturas para que o significado realmente chegue.",
      "Sou apaixonada por linguagem, comunicação e IA. Gosto de resolver problemas complexos, especialmente os tidos como impossíveis.",
      "Quando não estou programando ou construindo algo, me encontra escalando boulder, fazendo música ou lendo.",
    ],
    portraitAlt: "Retrato de Emilia Lima",
    fields: {
      location: { label: "Localização", value: "Montevidéu, Uruguai" },
      openTo: { label: "Modalidade", value: "Híbrido · Remoto" },
      email: { label: "E-mail" },
      linkedin: { label: "LinkedIn" },
    },
  },
  skills: {
    eyebrow: "II — Habilidades",
    title: "Com o que eu trabalho",
    groups: [
      {
        title: "Desenvolvimento Frontend",
        items: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "APIs REST"],
      },
      {
        title: "Web e CMS",
        items: ["WordPress", "Sanity", "SEO", "Performance web", "Core Web Vitals"],
      },
      {
        title: "Engenharia de localização",
        items: [
          "i18n",
          "Fluxos de tradução",
          "LQA",
          "Testes de UI",
          "Validação de releases",
        ],
      },
      {
        title: "Dados e scripting",
        items: ["Python", "SQL (nível básico)"],
      },
      {
        title: "Ferramentas de IA",
        items: ["Agentic Engineering", "Claude e outras IAs", "Fluxos GenAI"],
      },
      {
        title: "Ferramentas e plataformas",
        items: [
          "Git",
          "Jira",
          "Figma",
          "Zendesk",
          "DevTools",
          "Google Workspace",
        ],
      },
      { title: "Metodologias", items: ["Agile", "Scrum", "SAFe", "SDLC"] },
      {
        title: "Idiomas",
        items: [
          "Espanhol (Nativo)",
          "Inglês (C2)",
          "Português (C1)",
          "Alemão (B1)",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "III — Experiência",
    title: "Uma cronologia profissional",
    jobs: [
      {
        company: "NinjaOne",
        location: "Berlim",
        span: "Out 2023 — Presente",
        roles: [
          {
            title: "Desenvolvedora Web de Localização",
            dates: "Mar 2025 — Presente",
            body: "Lidero o desenvolvimento e a localização end-to-end do ninjaone.com em mais de 8 idiomas para o crescimento de marketing na EMEA. Conduzo a pipeline de localização: fluxos de tradução, QA multilíngue, validação de releases, SEO e Core Web Vitals. Faço onboarding e mentoria de novos devs; colaboro com Marketing, Produto, Engenharia, Suporte e Vendas.",
          },
          {
            title: "Engenheira de Localização de Software",
            dates: "Ago 2024 — Mar 2025",
            body: "Conduzi a localização e o QA da UI do produto SaaS da NinjaOne em vários idiomas. Gerenciei fluxos de tradução, validação de releases e correção de bugs de UI junto com Produto e Engenharia.",
          },
          {
            title: "Engenheira de Suporte Técnico",
            dates: "Out 2023 — Ago 2024",
            body: "Suporte ao agente SaaS da NinjaOne (patch management, MDM, monitoramento de rede, automação) para clientes globais. Especializei-me progressivamente em questões de localização e migrei para Engenharia.",
          },
        ],
      },
      {
        company: "Frontend / Web Developer — Freelance",
        location: "Amsterdã · Hamburgo · Munique",
        span: "2022 — 2023",
        body: "Construí sites responsivos e componentes de UI em HTML, CSS, JavaScript e React para clientes individuais. Integrei APIs REST; colaborei com designers UX/UI; remoto, Agile, com Git.",
      },
      {
        company: "Recrutadora de TI — Thaloz",
        location: "Montevidéu, Remoto",
        span: "Jun — Set 2021",
        body: "Recrutei engenheiros de software sêniores em escala global para clientes de fintech. Avaliei habilidades técnicas e nível de inglês; otimizei o ciclo de recrutamento via OKRs.",
      },
      {
        company: "Analista de Suporte Técnico — Tata Consultancy Services",
        location: "Montevidéu, Remoto",
        span: "Jul 2020 — Jun 2021",
        body: "Suporte técnico a mais de 200 colaboradores no Panamá e na África do Sul via Zendesk. Otimizei processos de ITOps; certificada em Agile/Scrum.",
      },
      {
        company: "Especialista de Suporte Técnico — Amazon (via Alorica)",
        location: "Montevidéu, Remoto",
        span: "Mar 2019 — Nov 2020",
        body: "Resolução de problemas de hardware e software para clientes nos EUA; contribuí com uma redução de 18 % no tempo de SLA. Liderei o tribe de feedback de clientes, levando insights ao Produto e à Engenharia.",
      },
    ],
  },
  projects: {
    eyebrow: "IV — Trabalhos selecionados",
    title: "Três projetos que merecem um parágrafo",
    featured: "Destaque",
    no: "Nº",
    items: [
      {
        title: "ninjaone.com — Plataforma web multilíngue",
        org: "NinjaOne",
        span: "2023 — Presente",
        featured: true,
        body: "Ownership end-to-end do ninjaone.com em mais de 8 idiomas para impulsionar o crescimento na EMEA. Cobre desenvolvimento e QA em todo o ciclo de release.",
        stack: ["React", "CMS", "i18n", "SEO", "Python", "Git"],
      },
      {
        title: "Gezellig Sessions — Digital e Operações",
        org: "Berlim e Amsterdã",
        span: "2022 — Presente",
        featured: true,
        body: "Estratégia e operações para uma marca sediada em Berlim e Amsterdã, escalando uma série de shows aconchegantes — de apresentações em living rooms até espaços históricos. Definí a estratégia de redes sociais e conduzi o gerenciamento de projeto de ponta a ponta. Liderei a comunicação com stakeholders, construí o onboarding de novas pessoas e gerenciei um time de estagiários — remotamente, com operações presenciais frequentes nos eventos.",
        stack: [
          "Estratégia",
          "Comunicação",
          "Redes sociais",
          "Gerenciamento de projetos",
        ],
      },
      {
        title: "Projetos web freelance",
        org: "Amsterdã · Hamburgo · Munique",
        span: "2022 — 2023",
        body: "Construí sites e aplicações web para clientes na Europa. Trabalho remoto, Agile, fluxo baseado em Git.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "APIs REST"],
      },
    ],
  },
  volunteering: {
    eyebrow: "V — Voluntariado",
    title: "Fora do expediente",
    items: [
      {
        role: "Estratégia e Operações",
        org: "Gezellig Sessions",
        location: "Berlim e Amsterdã",
        span: "Em andamento",
        body: "Série de shows para artistas novos e emergentes, que cresceu de apresentações íntimas em living rooms até salas históricas.",
      },
      {
        role: "Tutora de idiomas",
        org: "The Poetry Project",
        location: "Berlim",
        span: "2024 — Presente",
        body: "Apoio na aquisição de idiomas para migrantes e refugiados.",
      },
      {
        role: "Tutora de inglês",
        org: "Confident English",
        location: "Montevidéu",
        span: "2019 — 2022",
        body: "Tutoria voluntária para crianças e famílias de baixa renda.",
      },
    ],
  },
  education: {
    eyebrow: "VI — Educação e credenciais",
    title: "Onde estudei",
    educationHeading: "Educação",
    certificationsHeading: "Certificações",
    education: [
      {
        program: "Licenciatura",
        org: "Universidad de la República",
      },
      {
        program: "Data Science Path",
        org: "TechLabs Germany",
        span: "2023",
      },
      {
        program: "Front-End Development",
        org: "Traineeship na Altimetrik",
        span: "2023",
      },
    ],
    certifications: [
      { name: "Back-End Development", org: "Meta · Coursera", year: "2020" },
      {
        name: "Introdução a bancos de dados",
        org: "Meta · Coursera",
        year: "2020",
      },
      {
        name: "Pensamento computacional",
        org: "U Michigan · Coursera",
        year: "2020",
      },
      { name: "TEFL", org: "Cambridge", year: "" },
      { name: "TESOL", org: "University of Arizona", year: "" },
    ],
  },
  contact: {
    eyebrow: "VII — Contato",
    title: "Vamos conversar.",
    availability:
      "Disponível para vagas full-stack — Presencial em Montevidéu · Híbrido · Remoto.",
    nameLabel: "Nome",
    emailLabel: "E-mail",
    messageLabel: "Mensagem",
    helper: "As respostas vão direto para a minha caixa.",
    send: "Enviar",
    sending: "Enviando…",
    sent: "Mensagem enviada. Te respondo logo.",
    error: "Não foi possível enviar agora. Tente de novo ou me escreva direto por e-mail.",
  },
  footer: {
    locations: "Montevidéu · Berlim",
  },
};

export default ptBR;
