"use client";

import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  const t = useT();
  const projects = t.projects.items;
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
    >
      <div className="mx-auto max-w-4xl space-y-20 sm:space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="border-ink/15 border-t pt-10 sm:pt-12">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <p className="text-ink/60 text-[10px] uppercase tracking-[0.28em]">
                  {p.featured ? `${t.projects.featured} · ` : ""}
                  {p.org} · {p.span}
                </p>
                {p.featured && (
                  <span className="text-ink/60 text-[10px] uppercase tracking-[0.28em]">
                    {t.projects.no} {String(i + 1).padStart(2, "0")}
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
