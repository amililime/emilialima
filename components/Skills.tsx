import Reveal from "./Reveal";
import Section from "./Section";

const groups: { title: string; items: string[] }[] = [
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
  {
    title: "Data & Scripting",
    items: ["Python", "SQL (foundational)"],
  },
  {
    title: "AI Tooling",
    items: ["Claude Code", "GenAI workflows"],
  },
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
  {
    title: "Methods",
    items: ["Agile", "Scrum", "SAFe", "SDLC"],
  },
  {
    title: "Languages",
    items: [
      "Spanish (Native)",
      "English (C2)",
      "Portuguese (C1)",
      "German (B1)",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="work"
      eyebrow="II — Skills"
      title="What I work with"
    >
      <div className="mx-auto max-w-4xl">
        <dl className="divide-ink/15 border-ink/15 divide-y border-t border-b">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <div className="grid gap-3 py-7 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-8">
                <dt className="text-ink/60 text-[10px] uppercase tracking-[0.28em] sm:pt-1">
                  {g.title}
                </dt>
                <dd className="text-base leading-relaxed font-light sm:text-lg">
                  {g.items.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < g.items.length - 1 && (
                        <span className="text-ink/30 mx-2">·</span>
                      )}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
