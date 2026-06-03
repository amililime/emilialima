"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Volunteering() {
  const t = useT();
  const items = t.volunteering.items;
  return (
    <Section
      id="volunteering"
      eyebrow={t.volunteering.eyebrow}
      title={t.volunteering.title}
    >
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
