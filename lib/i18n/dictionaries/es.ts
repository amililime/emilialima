import type { Dict } from "../types";

const es: Dict = {
  skipToContent: "Saltar al contenido",
  nav: {
    primary: "Principal",
    backToTop: "Emilia Lima — volver arriba",
    about: "Sobre mí",
    work: "Trabajo",
    contact: "Contacto",
    language: "Idioma",
  },
  hero: {
    eyebrow: "Desarrolladora Full Stack",
    name1: "Emilia",
    name2: "Lima",
    subtitle: "TypeScript, React, Next.js, Node.js.",
    viewWork: "Ver trabajo",
    getInTouch: "Contactar",
    scroll: "Desplazar",
  },
  about: {
    eyebrow: "I — Sobre mí",
    title: "Una breve biografía",
    paragraphs: [
      "Soy desarrolladora de software, fascinada por lo que podemos construir con la tecnología — curiosa, creativa y con ganas de tender puentes entre culturas para que el sentido realmente llegue.",
      "Me apasionan el lenguaje, la comunicación y la IA. Me gusta resolver problemas complejos, sobre todo los que parecen imposibles.",
      "Cuando no estoy programando o construyendo algo, me vas a encontrar escalando boulder, haciendo música o leyendo.",
    ],
    portraitAlt: "Retrato de Emilia Lima",
    portraitCaption: "Emilia Lima · Montevideo, 2026",
    fields: {
      location: { label: "Ubicación", value: "Montevideo, Uruguay" },
      openTo: { label: "Modalidad", value: "Híbrido · Remoto" },
      email: { label: "Correo" },
      linkedin: { label: "LinkedIn" },
    },
  },
  skills: {
    eyebrow: "II — Habilidades",
    title: "Con qué trabajo",
    groups: [
      {
        title: "Desarrollo Frontend",
        items: ["HTML", "CSS", "JavaScript", "React", "APIs REST"],
      },
      {
        title: "Web y CMS",
        items: ["WordPress", "SEO", "Rendimiento web", "Core Web Vitals"],
      },
      {
        title: "Ingeniería de localización",
        items: [
          "i18n",
          "Flujos de traducción",
          "LQA",
          "QA multilingüe",
          "Pruebas de UI",
          "Validación de releases",
        ],
      },
      {
        title: "Datos y scripting",
        items: ["Python", "SQL (nivel base)"],
      },
      {
        title: "Herramientas de IA",
        items: ["Claude Code", "Flujos GenAI"],
      },
      {
        title: "Herramientas y plataformas",
        items: [
          "Git",
          "Jira",
          "Figma",
          "Zendesk",
          "DevTools",
          "Google Workspace",
        ],
      },
      { title: "Metodologías", items: ["Agile", "Scrum", "SAFe", "SDLC"] },
      {
        title: "Idiomas",
        items: [
          "Español (Nativo)",
          "Inglés (C2)",
          "Portugués (C1)",
          "Alemán (B1)",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "III — Experiencia",
    title: "Una cronología laboral",
    jobs: [
      {
        company: "NinjaOne",
        location: "Berlín",
        span: "Oct 2023 — Presente",
        roles: [
          {
            title: "Desarrolladora Web de Localización",
            dates: "Mar 2025 — Presente",
            body: "Lidero el desarrollo y la localización end-to-end de ninjaone.com en más de 8 idiomas para el crecimiento de marketing en EMEA. Conduzco la pipeline de localización: flujos de traducción, QA multilingüe, validación de releases, SEO y Core Web Vitals. Hago onboarding y mentoría a nuevos desarrolladores; colaboro con Marketing, Producto, Ingeniería, Soporte y Ventas.",
          },
          {
            title: "Ingeniera de Localización de Software",
            dates: "Ago 2024 — Mar 2025",
            body: "Impulsé la localización y el QA de la UI del producto SaaS de NinjaOne en varios idiomas. Gestioné flujos de traducción, validación de releases y corrección de bugs de UI con Producto e Ingeniería.",
          },
          {
            title: "Ingeniera de Soporte Técnico",
            dates: "Oct 2023 — Ago 2024",
            body: "Soporte del agente SaaS de NinjaOne (patch management, MDM, monitoreo de red, automatización) para clientes globales. Me especialicé progresivamente en temas de localización y pasé al área de Ingeniería.",
          },
        ],
      },
      {
        company: "Frontend / Web Developer — Freelance",
        location: "Ámsterdam · Hamburgo · Múnich",
        span: "2022 — 2023",
        body: "Construí sitios web responsivos y componentes de UI en HTML, CSS, JavaScript y React para clientes individuales. Integré APIs REST; colaboré con diseñadores UX/UI; remoto, Agile, basado en Git.",
      },
      {
        company: "Reclutadora IT — Thaloz",
        location: "Montevideo, Remoto",
        span: "Jun — Sep 2021",
        body: "Recluté ingenieros senior de software a nivel global para clientes fintech. Evalué habilidades técnicas y nivel de inglés; optimicé el ciclo de reclutamiento mediante OKRs.",
      },
      {
        company: "Analista de Soporte Técnico — Tata Consultancy Services",
        location: "Montevideo, Remoto",
        span: "Jul 2020 — Jun 2021",
        body: "Soporte técnico a más de 200 empleados en Panamá y Sudáfrica vía Zendesk. Optimicé procesos de ITOps; certificación Agile/Scrum.",
      },
      {
        company: "Especialista en Soporte Técnico — Amazon (vía Alorica)",
        location: "Montevideo, Remoto",
        span: "Mar 2019 — Nov 2020",
        body: "Resolución de problemas de hardware y software para clientes de EE. UU.; contribuí a una reducción del 18 % en el tiempo de SLA. Lideré el tribe de feedback de clientes, canalizando insights hacia Producto e Ingeniería.",
      },
    ],
  },
  projects: {
    eyebrow: "IV — Trabajos destacados",
    title: "Tres proyectos que merecen un párrafo",
    featured: "Destacado",
    no: "N.º",
    items: [
      {
        title: "ninjaone.com — Plataforma web multilingüe",
        org: "NinjaOne",
        span: "2023 — Presente",
        featured: true,
        body: "Ownership end-to-end de ninjaone.com en más de 8 idiomas para impulsar el crecimiento en EMEA. Cubre desarrollo y QA en todo el ciclo de release.",
        stack: ["React", "CMS", "i18n", "SEO", "Python", "Git"],
      },
      {
        title: "Gezellig Sessions — Digital y Operaciones",
        org: "Berlín y Ámsterdam",
        span: "2022 — Presente",
        featured: true,
        body: "Estrategia y operaciones para una marca con base en Berlín y Ámsterdam, escalando una serie de conciertos íntimos desde living rooms hasta salas emblemáticas. Definí la estrategia de redes sociales y lideré la gestión de proyecto de punta a punta. Conduje la comunicación con stakeholders, construí el onboarding de nuevas incorporaciones y gestioné un equipo de pasantes — en remoto, con operaciones presenciales frecuentes durante los eventos.",
        stack: [
          "Estrategia",
          "Comunicación",
          "Redes sociales",
          "Gestión de proyectos",
        ],
      },
      {
        title: "Proyectos web freelance",
        org: "Ámsterdam · Hamburgo · Múnich",
        span: "2022 — 2023",
        body: "Construí sitios y aplicaciones web para clientes en Europa. Trabajo remoto, Agile, flujos basados en Git.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "APIs REST"],
      },
    ],
  },
  volunteering: {
    eyebrow: "V — Voluntariado",
    title: "Fuera del horario laboral",
    items: [
      {
        role: "Estrategia y Operaciones",
        org: "Gezellig Sessions",
        location: "Berlín y Ámsterdam",
        span: "En curso",
        body: "Serie de conciertos para artistas emergentes que pasó de conciertos íntimos en living rooms a salas históricas.",
      },
      {
        role: "Tutora de idiomas",
        org: "The Poetry Project",
        location: "Berlín",
        span: "2024 — Presente",
        body: "Acompañamiento en adquisición de idiomas para migrantes y refugiados.",
      },
      {
        role: "Tutora de inglés",
        org: "Confident English",
        location: "Montevideo",
        span: "2019 — 2022",
        body: "Tutorías voluntarias para niños y familias de bajos recursos.",
      },
    ],
  },
  education: {
    eyebrow: "VI — Educación y credenciales",
    title: "Dónde estudié",
    educationHeading: "Educación",
    certificationsHeading: "Certificaciones",
    education: [
      {
        program: "Licenciatura",
        org: "Universidad de la República",
        span: "2019 — 2021",
        note: "parcial — pivoteé hacia la tecnología",
      },
      {
        program: "Data Science Path",
        org: "TechLabs Germany",
        span: "2023",
      },
      {
        program: "Front-End Development",
        org: "Traineeship en Altimetrik",
        span: "2023",
      },
    ],
    certifications: [
      { name: "Back-End Development", org: "Meta · Coursera", year: "2020" },
      {
        name: "Introducción a bases de datos",
        org: "Meta · Coursera",
        year: "2020",
      },
      {
        name: "Pensamiento computacional",
        org: "U Michigan · Coursera",
        year: "2020",
      },
      { name: "TEFL", org: "Cambridge", year: "" },
      { name: "TESOL", org: "University of Arizona", year: "" },
    ],
  },
  contact: {
    eyebrow: "VII — Contacto",
    title: "Hablemos.",
    availability:
      "Disponible para roles full-stack — Presencial en Montevideo · Híbrido · Remoto.",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    messageLabel: "Mensaje",
    helper: "Las respuestas llegan directo a mi bandeja.",
    send: "Enviar",
    sending: "Enviando…",
    sent: "Mensaje enviado. Te respondo pronto.",
    error: "No se pudo enviar ahora. Probá de nuevo o escribime directo por mail.",
  },
  footer: {
    locations: "Montevideo · Berlín",
  },
};

export default es;
