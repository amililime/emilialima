"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  const t = useT();
  const jobs = t.experience.jobs;
  return (
    <Section
      id="work"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
    >
      <ol className="divide-ink/15 border-ink/15 mx-auto max-w-4xl divide-y border-t border-b">
        {jobs.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 40}>
            <article className="grid gap-6 py-10 sm:grid-cols-[140px_1fr] sm:gap-10 sm:py-12">
              <div className="text-ink/60 font-display text-base leading-tight sm:text-lg">
                {job.span}
                <div className="text-ink/60 font-body mt-2 text-[10px] uppercase tracking-[0.28em]">
                  {job.location}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight font-light tracking-tight sm:text-3xl">
                  {job.company}
                </h3>
                {job.body && (
                  <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
                    {job.body}
                  </p>
                )}
                {job.roles && (
                  <ul className="mt-8 space-y-8">
                    {job.roles.map((r) => (
                      <li key={r.title}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h4 className="font-display text-lg font-normal italic sm:text-xl">
                            {r.title}
                          </h4>
                          <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em] sm:whitespace-nowrap">
                            {r.dates}
                          </span>
                        </div>
                        <p className="mt-3 text-base leading-relaxed font-light sm:text-[1.05rem]">
                          {r.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
