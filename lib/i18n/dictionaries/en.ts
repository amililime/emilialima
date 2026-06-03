import type { Dict } from "../types";

const en: Dict = {
  skipToContent: "Skip to content",
  nav: {
    primary: "Primary",
    backToTop: "Emilia Lima — back to top",
    about: "About",
    work: "Work",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    eyebrow: "Full Stack Developer",
    name1: "Emilia",
    name2: "Lima",
    subtitle: "Typescript, React, Next.js, Node.js.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "I — About",
    title: "A short biography",
    paragraphs: [
      "I am a Software Developer who builds web experiences where functionality and aesthetics carry equal weight. I see the big picture, and the smallest of bugs — a detailed eye that lets me QA thoroughly without losing sight of the whole. Through my side projects, I help clients raise their standards by showcasing the value of their work with the elegance it deserves.",
      "I lead with energy, discipline, and empathy.",
      "At NinjaOne in Berlin, I owned ninjaone.com end-to-end across 8+ languages, working across Marketing, Product, Engineering, Sales, and Success. Driving EMEA+ growth.",
      "I speak several languages, both human and computer. I love solving “impossible” problems — whether about business, people, or tech. I learn from success, and I'm not afraid of failure; it makes me sharper while it keeps me humble. I am grateful to have the most amazing mentors, who shaped much more than just how I work. I am strategic, I learn fast, I communicate clearly. I'm fascinated by the human brain — from behavioural science to neuroscience — and passionate about language, communication, and AI. When I'm not programming, you'll find me running, bouldering, making music, or reading.",
    ],
    portraitAlt: "Portrait of Emilia Lima",
    portraitCaption: "Emilia Lima · Montevideo, 2026",
    fields: {
      location: { label: "Location", value: "Montevideo, Uruguay" },
      openTo: { label: "Open to", value: "Hybrid · Remote" },
      email: { label: "Email" },
      linkedin: { label: "LinkedIn" },
    },
  },
  skills: {
    eyebrow: "II — Skills",
    title: "What I work with",
    groups: [
      {
        title: "Frontend Development",
        items: ["HTML", "CSS", "JavaScript", "React", "REST APIs"],
      },
      {
        title: "Web & CMS",
        items: ["WordPress", "SEO", "Web Performance", "Core Web Vitals"],
      },
      {
        title: "Localization Engineering",
        items: [
          "i18n",
          "Translation workflows",
          "LQA",
          "Multilingual QA",
          "UI testing",
          "Release validation",
        ],
      },
      { title: "Data & Scripting", items: ["Python", "SQL (foundational)"] },
      { title: "AI Tooling", items: ["Claude Code", "GenAI workflows"] },
      {
        title: "Tools & Platforms",
        items: [
          "Git",
          "Jira",
          "Figma",
          "Zendesk",
          "DevTools",
          "Google Workspace",
        ],
      },
      { title: "Methods", items: ["Agile", "Scrum", "SAFe", "SDLC"] },
      {
        title: "Languages",
        items: [
          "Spanish (Native)",
          "English (C2)",
          "Portuguese (C1)",
          "German (B1)",
        ],
      },
    ],
  },
  experience: {
    eyebrow: "III — Experience",
    title: "A working chronology",
    jobs: [
      {
        company: "NinjaOne",
        location: "Berlin",
        span: "Oct 2023 — Present",
        roles: [
          {
            title: "Localization Web Developer",
            dates: "Mar 2025 — Present",
            body: "Owns end-to-end development and localization of ninjaone.com across 8+ languages for EMEA marketing growth. Leads the localization pipeline: translation workflows, multilingual QA, release validation, SEO, Core Web Vitals. Onboards and mentors new developers; collaborates across Marketing, Product, Engineering, Support, and Sales.",
          },
          {
            title: "Software Localization Engineer",
            dates: "Aug 2024 — Mar 2025",
            body: "Drove software UI localization and QA for NinjaOne's SaaS product across multiple languages. Managed translation workflows, release validation, and UI bug fixes with Product and Engineering.",
          },
          {
            title: "Technical Support Engineer",
            dates: "Oct 2023 — Aug 2024",
            body: "Supported NinjaOne's SaaS agent (patch management, MDM, network monitoring, automation) for global customers. Specialized progressively in localization issues; transitioned into Engineering.",
          },
        ],
      },
      {
        company: "Frontend / Web Developer — Freelance",
        location: "Amsterdam · Hamburg · Munich",
        span: "2022 — 2023",
        body: "Built responsive websites and UI components in HTML, CSS, JavaScript, and React for individual clients. Integrated REST APIs; collaborated with UX/UI designers; remote, Agile, Git-based.",
      },
      {
        company: "IT Recruiter — Thaloz",
        location: "Montevideo, Remote",
        span: "Jun — Sep 2021",
        body: "Recruited senior software engineers globally for fintech clients. Screened technical skills and English proficiency; optimized recruiting lifecycle via OKRs.",
      },
      {
        company: "Technical Support Analyst — Tata Consultancy Services",
        location: "Montevideo, Remote",
        span: "Jul 2020 — Jun 2021",
        body: "Technical support for 200+ employees across Panama and South Africa via Zendesk. Optimized ITOps processes; Agile/Scrum certified.",
      },
      {
        company: "Technical Support Specialist — Amazon (via Alorica)",
        location: "Montevideo, Remote",
        span: "Mar 2019 — Nov 2020",
        body: "Hardware/software troubleshooting for US customers; contributed to 18% SLA-time reduction. Led the customer feedback tribe, channeling user insights to Product and Engineering.",
      },
    ],
  },
  projects: {
    eyebrow: "IV — Selected Work",
    title: "Three projects worth a paragraph",
    featured: "Featured",
    no: "No.",
    items: [
      {
        title: "ninjaone.com — Multilingual Web Platform",
        org: "NinjaOne",
        span: "2023 — Present",
        featured: true,
        body: "End-to-end ownership of ninjaone.com across 8+ languages for EMEA growth. Covering development and QA across the full release lifecycle.",
        stack: ["React", "CMS", "i18n", "SEO", "Python", "Git"],
      },
      {
        title: "Gezellig Sessions — Digital & Operations",
        org: "Berlin & Amsterdam",
        span: "2022 — Present",
        featured: true,
        body: "Strategy & operations for a Berlin- and Amsterdam-based brand, scaling a cozy concert series from living-room performances to landmark venues. Shaped social-media strategy and owned project management end to end. Led stakeholder communication, built new-hire onboarding, and managed a team of interns — remotely, with frequent onsite event operations.",
        stack: [
          "Strategy",
          "Communication",
          "Social media",
          "Project management",
        ],
      },
      {
        title: "Freelance Web Projects",
        org: "Amsterdam · Hamburg · Munich",
        span: "2022 — 2023",
        body: "Built websites and web applications for clients across Europe. Remote work, Agile, Git-based workflows.",
        stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "REST APIs"],
      },
    ],
  },
  volunteering: {
    eyebrow: "V — Volunteering",
    title: "Off the clock",
    items: [
      {
        role: "Strategy & Operations",
        org: "Gezellig Sessions",
        location: "Berlin & Amsterdam",
        span: "Ongoing",
        body: "Concert series for new and emerging artists scaled from intimate living-room concerts to historic concert halls.",
      },
      {
        role: "Language Tutor",
        org: "The Poetry Project",
        location: "Berlin",
        span: "2024 — Present",
        body: "Language acquisition support for migrants and refugees.",
      },
      {
        role: "English Tutor",
        org: "Confident English",
        location: "Montevideo",
        span: "2019 — 2022",
        body: "Volunteer tutoring for children and low-income families.",
      },
    ],
  },
  education: {
    eyebrow: "VI — Education & Credentials",
    title: "Where I studied",
    educationHeading: "Education",
    certificationsHeading: "Certifications",
    education: [
      {
        program: "Licentiate degree",
        org: "Universidad de la República",
        span: "2019 — 2021",
        note: "partial — pivoted into tech",
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
    title: "Let’s talk.",
    availability:
      "Available for full-stack roles — Onsite in Montevideo · Hybrid · Remote.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    helper: "Opens your mail client",
    send: "Send",
    mailSubject: "Hello from",
    fallbackName: "your site",
  },
  footer: {
    locations: "Montevideo · Berlin",
  },
};

export default en;
