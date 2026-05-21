import Reveal from "./Reveal";
import Section from "./Section";

const items = [
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
];

export default function Volunteering() {
  return (
    <Section id="volunteering" eyebrow="V — Volunteering" title="Off the clock">
      <ol className="divide-ink/15 border-ink/15 mx-auto max-w-4xl divide-y border-t border-b">
        {items.map((it, i) => (
          <Reveal as="li" key={it.org + it.role} delay={i * 40}>
            <div className="grid gap-3 py-8 sm:grid-cols-[140px_1fr] sm:gap-10 sm:py-10">
              <div className="text-ink/60 font-display text-base sm:text-lg">
                {it.span}
                <div className="text-ink/60 font-body mt-2 text-[10px] uppercase tracking-[0.28em]">
                  {it.location}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl leading-tight font-light sm:text-2xl">
                  {it.role}{" "}
                  <span className="text-ink/60 italic">— {it.org}</span>
                </h3>
                <p className="mt-3 text-base leading-relaxed font-light sm:text-[1.05rem]">
                  {it.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
