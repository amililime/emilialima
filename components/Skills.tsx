"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  const t = useT();
  const groups = t.skills.groups;
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
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
