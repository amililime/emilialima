import type { Dict } from "../types";

const nl: Dict = {
  skipToContent: "Naar de inhoud",
  nav: {
    primary: "Hoofdnavigatie",
    backToTop: "Emilia Lima — terug naar boven",
    about: "Over mij",
    work: "Werk",
    contact: "Contact",
    language: "Taal",
  },
  hero: {
    eyebrow: "Full Stack Developer",
    name1: "Emilia",
    name2: "Lima",
    subtitle: "TypeScript, React, Next.js, Node.js.",
    viewWork: "Bekijk werk",
    getInTouch: "Neem contact op",
    scroll: "Scrol",
  },
  about: {
    eyebrow: "I — Over mij",
    title: "Een korte biografie",
    paragraphs: [
      "Ik ben softwareontwikkelaar en bouw webervaringen waarin functionaliteit en esthetiek even zwaar wegen. Ik zie het grote geheel én de kleinste bug — een oog voor detail waarmee ik grondig kan QA'en zonder het overzicht te verliezen. Met mijn nevenprojecten help ik klanten hun lat hoger te leggen door de waarde van hun werk te tonen met de elegantie die het verdient.",
      "Ik leid met energie, discipline en empathie.",
      "Bij NinjaOne in Berlijn was ik eindverantwoordelijk voor ninjaone.com in meer dan 8 talen, in samenwerking met Marketing, Product, Engineering, Sales en Customer Success — om de groei in EMEA+ te stuwen.",
      "Ik spreek meerdere talen, menselijke en computertalen. Ik los graag “onmogelijke” problemen op — of het nu om business, mensen of techniek gaat. Ik leer van succes en ben niet bang voor falen: het maakt me scherper en houdt me bescheiden. Ik ben dankbaar voor de fantastische mentoren die veel meer hebben gevormd dan alleen mijn werk. Ik ben strategisch, leer snel en communiceer helder. Het menselijk brein fascineert me — van gedragswetenschap tot neurowetenschap — en ik ben gepassioneerd door taal, communicatie en AI. Als ik niet aan het programmeren ben, vind je me hardlopend, boulderend, muziek makend of lezend.",
    ],
    portraitAlt: "Portret van Emilia Lima",
    portraitCaption: "Emilia Lima · Montevideo, 2026",
    fields: {
      location: { label: "Locatie", value: "Montevideo, Uruguay" },
      openTo: { label: "Open voor", value: "Hybride · Remote" },
      email: { label: "E-mail" },
      linkedin: { label: "LinkedIn" },
    },
  },
  skills: {
    eyebrow: "II — Vaardigheden",
    title: "Waar ik mee werk",
    moreOnGithub: "Meer op github.com/amililime",
    groups: [
      {
        title: "Frontend-ontwikkeling",
        items: ["HTML", "CSS", "JavaScript", "React", "REST API's"],
      },
      {
        title: "Web & CMS",
        items: ["WordPress", "SEO", "Web Performance", "Core Web Vitals"],
      },
      {
        title: "Localization Engineering",
        items: [
          "i18n",
          "Vertaalworkflows",
          "LQA",
          "Meertalige QA",
          "UI-testen",
          "Release-validatie",
        ],
      },
      {
        title: "Data & scripting",
        items: ["Python", "SQL (basis)"],
      },
      {
        title: "AI-tools",
        items: ["Claude Code", "GenAI-workflows"],
      },
      {
        title: "Tools & platformen",
        items: [
          "Git",
          "Jira",
          "Figma",
          "Zendesk",
          "DevTools",
          "Google Workspace",
        ],
      },
      { title: "Methodes", items: ["Agile", "Scrum", "SAFe", "SDLC"] },
      {
        title: "Talen",
        items: [
          "Spaans (Moedertaal)",
          "Engels (C2)",
          "Portugees (C1)",
          "Duits (B1)",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "III — Ervaring",
    title: "Een werkchronologie",
    jobs: [
      {
        company: "NinjaOne",
        location: "Berlijn",
        span: "Okt 2023 — Heden",
        roles: [
          {
            title: "Localization Web Developer",
            dates: "Mrt 2025 — Heden",
            body: "Verantwoordelijk voor de end-to-end ontwikkeling en lokalisatie van ninjaone.com in meer dan 8 talen voor EMEA-marketinggroei. Stuur de lokalisatiepipeline aan: vertaalworkflows, meertalige QA, release-validatie, SEO en Core Web Vitals. Onboarding en mentoring van nieuwe developers; samenwerking met Marketing, Product, Engineering, Support en Sales.",
          },
          {
            title: "Software Localization Engineer",
            dates: "Aug 2024 — Mrt 2025",
            body: "Gestuurd op UI-lokalisatie en QA van het SaaS-product van NinjaOne in meerdere talen. Beheer van vertaalworkflows, release-validatie en UI-bugfixes met Product en Engineering.",
          },
          {
            title: "Technical Support Engineer",
            dates: "Okt 2023 — Aug 2024",
            body: "Ondersteuning van NinjaOne's SaaS-agent (patch management, MDM, netwerkmonitoring, automatisering) voor wereldwijde klanten. Geleidelijke specialisatie in lokalisatieproblemen; doorgegroeid naar Engineering.",
          },
        ],
      },
      {
        company: "Frontend / Web Developer — Freelance",
        location: "Amsterdam · Hamburg · München",
        span: "2022 — 2023",
        body: "Responsieve websites en UI-componenten gebouwd in HTML, CSS, JavaScript en React voor individuele klanten. REST API's geïntegreerd; samengewerkt met UX/UI-designers; remote, Agile, op basis van Git.",
      },
      {
        company: "IT Recruiter — Thaloz",
        location: "Montevideo, Remote",
        span: "Jun — Sep 2021",
        body: "Wereldwijd senior software engineers geworven voor fintech-klanten. Screening van technische vaardigheden en Engels; recruitmentcyclus geoptimaliseerd via OKR's.",
      },
      {
        company: "Technical Support Analyst — Tata Consultancy Services",
        location: "Montevideo, Remote",
        span: "Jul 2020 — Jun 2021",
        body: "Technische ondersteuning voor 200+ medewerkers in Panama en Zuid-Afrika via Zendesk. ITOps-processen geoptimaliseerd; Agile/Scrum-gecertificeerd.",
      },
      {
        company: "Technical Support Specialist — Amazon (via Alorica)",
        location: "Montevideo, Remote",
        span: "Mrt 2019 — Nov 2020",
        body: "Hardware- en softwaretroubleshooting voor klanten in de VS; bijgedragen aan 18 % SLA-tijdreductie. De customer-feedback-tribe geleid en inzichten doorgegeven aan Product en Engineering.",
      },
    ],
  },
  projects: {
    eyebrow: "IV — Geselecteerd werk",
    title: "Drie projecten die een alinea waard zijn",
    featured: "Uitgelicht",
    no: "Nr.",
    items: [
      {
        title: "ninjaone.com — Meertalig webplatform",
        org: "NinjaOne",
        span: "2023 — Heden",
        featured: true,
        body: "End-to-end ownership van ninjaone.com in meer dan 8 talen voor EMEA-groei. Omvat ontwikkeling en QA gedurende de hele release-cyclus.",
        stack: ["React", "CMS", "i18n", "SEO", "Python", "Git"],
      },
      {
        title: "Gezellig Sessions — Digital & Operations",
        org: "Berlijn & Amsterdam",
        span: "2022 — Heden",
        featured: true,
        body: "Strategie en operations voor een merk met basis in Berlijn en Amsterdam, dat een knusse concertserie opschaalde van huiskameroptredens tot iconische locaties. Vormgegeven aan de social-media-strategie en het projectmanagement van A tot Z gevoerd. Stakeholder-communicatie geleid, onboarding voor nieuwe mensen opgezet en een team stagiairs aangestuurd — remote, met regelmatige onsite eventoperaties.",
        stack: [
          "Strategie",
          "Communicatie",
          "Social media",
          "Projectmanagement",
        ],
      },
      {
        title: "Freelance webprojecten",
        org: "Amsterdam · Hamburg · München",
        span: "2022 — 2023",
        body: "Websites en webapplicaties gebouwd voor klanten in heel Europa. Remote, Agile, Git-based workflows.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "REST API's"],
      },
    ],
  },
  volunteering: {
    eyebrow: "V — Vrijwilligerswerk",
    title: "Buiten werktijd",
    items: [
      {
        role: "Strategy & Operations",
        org: "Gezellig Sessions",
        location: "Berlijn & Amsterdam",
        span: "Doorlopend",
        body: "Concertserie voor nieuwe en opkomende artiesten, gegroeid van intieme huiskameroptredens tot historische concertzalen.",
      },
      {
        role: "Taalcoach",
        org: "The Poetry Project",
        location: "Berlijn",
        span: "2024 — Heden",
        body: "Ondersteuning bij taalverwerving voor migranten en vluchtelingen.",
      },
      {
        role: "Engelse taalcoach",
        org: "Confident English",
        location: "Montevideo",
        span: "2019 — 2022",
        body: "Vrijwillige bijles voor kinderen en gezinnen met een laag inkomen.",
      },
    ],
  },
  education: {
    eyebrow: "VI — Opleiding & certificeringen",
    title: "Waar ik studeerde",
    educationHeading: "Opleiding",
    certificationsHeading: "Certificeringen",
    education: [
      {
        program: "Licentiaat",
        org: "Universidad de la República",
        span: "2019 — 2021",
        note: "deels — overgestapt naar tech",
      },
      {
        program: "Data Science Path",
        org: "TechLabs Germany",
        span: "2023",
      },
      {
        program: "Front-End Development",
        org: "Altimetrik traineeship",
        span: "2023",
      },
    ],
    certifications: [
      { name: "Back-End Development", org: "Meta · Coursera", year: "2020" },
      {
        name: "Introduction to Databases",
        org: "Meta · Coursera",
        year: "2020",
      },
      {
        name: "Computational Thinking",
        org: "U Michigan · Coursera",
        year: "2020",
      },
      { name: "TEFL", org: "Cambridge", year: "" },
      { name: "TESOL", org: "University of Arizona", year: "" },
    ],
  },
  contact: {
    eyebrow: "VII — Contact",
    title: "Laten we praten.",
    availability:
      "Beschikbaar voor full-stack rollen — Onsite in Montevideo · Hybride · Remote.",
    nameLabel: "Naam",
    emailLabel: "E-mail",
    messageLabel: "Bericht",
    helper: "Opent je e-mailprogramma",
    send: "Versturen",
    mailSubject: "Hallo vanaf",
    fallbackName: "jouw site",
  },
  footer: {
    locations: "Montevideo · Berlijn",
  },
};

export default nl;
