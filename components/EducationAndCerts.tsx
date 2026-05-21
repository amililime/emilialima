import Reveal from "./Reveal";
import Section from "./Section";

const education = [
  {
    program: "Licentiate in Psychology",
    org: "Universidad de la República",
    span: "2019 — 2021",
    note: "partial — pivoted into tech",
  },
  {
    program: "Data Science Semester",
    org: "TechLabs Hamburg",
    span: "2023",
  },
  {
    program: "Front-End Development",
    org: "Altimetrik",
    span: "2023",
  },
];

const certifications = [
  { name: "Back-End Development", org: "Meta · Coursera", year: "2020" },
  { name: "Introduction to Databases", org: "Meta · Coursera", year: "2020" },
  {
    name: "Computational Thinking",
    org: "U Michigan · Coursera",
    year: "2020",
  },
  { name: "TEFL", org: "Cambridge", year: "" },
  { name: "TESOL", org: "University of Arizona", year: "" },
];

export default function EducationAndCerts() {
  return (
    <Section
      id="education"
      eyebrow="VI — Education & Credentials"
      title="Where she studied"
    >
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div>
            <h3 className="text-ink/60 mb-8 text-[10px] uppercase tracking-[0.32em]">
              Education
            </h3>
            <ul className="divide-ink/15 border-ink/15 divide-y border-t border-b">
              {education.map((e) => (
                <li key={e.program} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-lg leading-tight font-normal sm:text-xl">
                      {e.program}
                    </h4>
                    <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em] whitespace-nowrap">
                      {e.span}
                    </span>
                  </div>
                  <p className="text-ink/70 mt-2 text-sm font-light sm:text-base">
                    {e.org}
                    {e.note && (
                      <span className="text-ink/60 italic"> ({e.note})</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h3 className="text-ink/60 mb-8 text-[10px] uppercase tracking-[0.32em]">
              Certifications
            </h3>
            <ul className="divide-ink/15 border-ink/15 divide-y border-t border-b">
              {certifications.map((c) => (
                <li key={c.name} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-lg leading-tight font-normal sm:text-xl">
                      {c.name}
                    </h4>
                    {c.year && (
                      <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em] whitespace-nowrap">
                        {c.year}
                      </span>
                    )}
                  </div>
                  <p className="text-ink/70 mt-2 text-sm font-light sm:text-base">
                    {c.org}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
