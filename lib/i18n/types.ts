export const LOCALES = ["en", "es", "pt-BR", "nl", "de", "jp"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  "pt-BR": "Português (BR)",
  nl: "Nederlands",
  de: "Deutsch",
  jp: "日本語",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  "pt-BR": "PT",
  nl: "NL",
  de: "DE",
  jp: "JP",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  "pt-BR": "🇧🇷",
  nl: "🇳🇱",
  de: "🇩🇪",
  jp: "🇯🇵",
};

export type Role = { title: string; dates: string; body: string };
export type Job = {
  company: string;
  location: string;
  span: string;
  body?: string;
  roles?: Role[];
};
export type Project = {
  title: string;
  org: string;
  span: string;
  featured?: boolean;
  body: string;
  stack: string[];
};
export type Volunteer = {
  role: string;
  org: string;
  location: string;
  span: string;
  body: string;
};
export type EducationItem = {
  program: string;
  org: string;
  span?: string;
  note?: string;
};
export type Certification = { name: string; org: string; year: string };
export type SkillGroup = { title: string; items: string[] };

export type Dict = {
  skipToContent: string;
  nav: {
    primary: string;
    backToTop: string;
    about: string;
    work: string;
    contact: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    name1: string;
    name2: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    portraitAlt: string;
    fields: {
      location: { label: string; value: string };
      openTo: { label: string; value: string };
      email: { label: string };
      linkedin: { label: string };
    };
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  experience: {
    eyebrow: string;
    title: string;
    jobs: Job[];
  };
  projects: {
    eyebrow: string;
    title: string;
    featured: string;
    no: string;
    items: Project[];
  };
  volunteering: {
    eyebrow: string;
    title: string;
    items: Volunteer[];
  };
  education: {
    eyebrow: string;
    title: string;
    educationHeading: string;
    certificationsHeading: string;
    education: EducationItem[];
    certifications: Certification[];
  };
  contact: {
    eyebrow: string;
    title: string;
    availability: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    helper: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
  };
  footer: {
    locations: string;
  };
};
