"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function EducationAndCerts() {
  const t = useT();
  const education = t.education.education;
  const certifications = t.education.certifications;
  return (
    <Section
      id="education"
      eyebrow={t.education.eyebrow}
      title={t.education.title}
    >
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div>
            <h3 className="text-ink/60 mb-8 text-[10px] uppercase tracking-[0.32em]">
              {t.education.educationHeading}
            </h3>
            <ul className="divide-ink/15 border-ink/15 divide-y border-t border-b">
              {education.map((e) => (
                <li key={e.program} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-lg leading-tight font-normal sm:text-xl">
                      {e.program}
                    </h4>
                    {e.span && (
                      <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em] whitespace-nowrap">
                        {e.span}
                      </span>
                    )}
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
              {t.education.certificationsHeading}
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
