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
        <Reveal delay={groups.length * 40}>
          <div className="mt-16 flex justify-center">
            <a
              href="https://github.com/amililime"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.skills.moreOnGithub}
              className="text-ink/70 inline-flex items-center gap-3 transition-colors hover:text-[#ACC5FE]"
            >
              <svg
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 2.86-.38c.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55 4.51-1.5 7.76-5.75 7.76-10.77C23.33 5.56 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
