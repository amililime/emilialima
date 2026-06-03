"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  const t = useT();
  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="mx-auto grid max-w-5xl gap-16 sm:gap-20 md:grid-cols-[1fr_280px] md:items-start md:gap-24">
        <Reveal>
          <div className="space-y-8 text-base leading-[1.75] font-light sm:text-lg">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-10">
            <figure className="flex flex-col items-center">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full">
                <Image
                  src="/emilia.png"
                  alt={t.about.portraitAlt}
                  fill
                  sizes="(min-width: 768px) 280px, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="text-ink/60 mt-3 text-[10px] uppercase tracking-[0.28em]">
                {t.about.portraitCaption}
              </figcaption>
            </figure>

            <dl className="space-y-5 text-sm font-light">
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  {t.about.fields.location.label}
                </dt>
                <dd>{t.about.fields.location.value}</dd>
              </div>
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  {t.about.fields.openTo.label}
                </dt>
                <dd>{t.about.fields.openTo.value}</dd>
              </div>
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  {t.about.fields.email.label}
                </dt>
                <dd>
                  <a
                    className="hover:opacity-60"
                    href="mailto:emilialimadacunha@gmail.com"
                  >
                    emilialimadacunha@gmail.com
                  </a>
                </dd>
              </div>
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  {t.about.fields.linkedin.label}
                </dt>
                <dd>
                  <a
                    className="hover:opacity-60"
                    href="https://www.linkedin.com/in/emilia-lima"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/emilia-lima
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
