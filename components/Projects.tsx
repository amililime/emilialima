import Reveal from "./Reveal";
import Section from "./Section";

type Project = {
  title: string;
  org: string;
  span: string;
  featured?: boolean;
  body: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: "ninjaone.com — Multilingual Web Platform",
    org: "NinjaOne",
    span: "2023 — Present",
    featured: true,
    body: "End-to-end ownership of ninjaone.com across 8+ languages for EMEA growth. Covers frontend development (React, WordPress), localization engineering, multilingual SEO, Core Web Vitals optimization, and QA across the full release lifecycle.",
    stack: ["React", "WordPress", "i18n", "SEO", "Python", "Git"],
  },
  {
    title: "Gezellig Sessions — Digital & Operations",
    org: "Berlin & Amsterdam",
    span: "2022 — Present",
    featured: true,
    body: "Volunteer strategy and operations for a Berlin concert series that scaled from living-room performances to landmark venues. Manages social-media strategy, project backlog, intern onboarding, and onsite event operations.",
    stack: ["Strategy", "Social media", "Project management"],
  },
  {
    title: "Freelance Web Projects",
    org: "Amsterdam · Hamburg · Munich",
    span: "2022 — 2023",
    body: "Responsive websites and UI components for individual clients across Europe. Remote, Agile, Git-based workflows.",
    stack: ["HTML", "CSS", "JavaScript", "React", "REST APIs"],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="IV — Selected Work"
      title="Three projects worth a paragraph"
    >
      <div className="mx-auto max-w-4xl space-y-20 sm:space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="border-ink/15 border-t pt-10 sm:pt-12">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-ink/55 text-[10px] uppercase tracking-[0.28em]">
                  {p.featured ? "Featured · " : ""}
                  {p.org} · {p.span}
                </p>
                {p.featured && (
                  <span className="text-ink/40 text-[10px] uppercase tracking-[0.28em]">
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              <h3 className="font-display max-w-3xl text-3xl leading-[1.1] font-light tracking-tight sm:text-4xl md:text-5xl">
                {p.title}
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed font-light sm:text-lg">
                {p.body}
              </p>
              <p className="text-ink/60 mt-8 text-[11px] uppercase tracking-[0.24em]">
                {p.stack.map((s, idx) => (
                  <span key={s}>
                    {s}
                    {idx < p.stack.length - 1 && (
                      <span className="text-ink/30 mx-2">·</span>
                    )}
                  </span>
                ))}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
