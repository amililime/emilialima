import Reveal from "./Reveal";
import Section from "./Section";

const cvHref =
  "mailto:emilialimadacunha@gmail.com?subject=CV%20Request%20%E2%80%94%20Emilia%20Lima";

export default function About() {
  return (
    <Section id="about" eyebrow="I — About" title="A short biography">
      <div className="mx-auto grid max-w-5xl gap-16 sm:gap-20 md:grid-cols-[1fr_280px] md:items-start md:gap-24">
        <Reveal>
          <div className="space-y-8 text-base leading-[1.75] font-light sm:text-lg">
            <p>
              She started in psychology, moved across continents, learned to
              code, and ended up owning the multilingual web presence of a
              global SaaS company. Not a typical path. That&rsquo;s the point.
            </p>
            <p>
              At NinjaOne in Berlin, she owns ninjaone.com end-to-end across 8+
              languages &mdash; frontend development, localization engineering,
              multilingual QA, SEO, and Core Web Vitals. She onboards
              developers, coordinates between Marketing, Product, Engineering,
              and Sales, and bridges the gap between technical systems and
              human language.
            </p>
            <p>
              Spanish native. English C2. Portuguese C1. German B1. She tutors
              language learners from migrant and refugee communities,
              volunteers at Gezellig Sessions (a Berlin concert series for
              emerging artists), and plays piano and guitar. She learns fast.
              She communicates clearly. She ships.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-10">
            <figure>
              <div
                className="bg-ink/4 border-ink/10 relative w-full overflow-hidden border"
                style={{ aspectRatio: "3 / 4" }}
                aria-label="Portrait of Emilia Lima"
              >
                {/* Portrait placeholder — replace `src` with the provided portrait photo */}
                {/* <Image src="/portrait.jpg" alt="Portrait of Emilia Lima" fill className="object-cover" priority /> */}
                <div className="text-ink/30 absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.28em]">
                  Portrait
                </div>
              </div>
              <figcaption className="text-ink/60 mt-3 text-[10px] uppercase tracking-[0.28em]">
                Emilia Lima · Montevideo, 2026
              </figcaption>
            </figure>

            <dl className="space-y-5 text-sm font-light">
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  Location
                </dt>
                <dd>Montevideo, Uruguay</dd>
              </div>
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  Open to
                </dt>
                <dd>Onsite · Hybrid · Remote</dd>
              </div>
              <div className="border-ink/10 border-t pt-5">
                <dt className="text-ink/60 mb-1 text-[10px] uppercase tracking-[0.28em]">
                  Email
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
                  LinkedIn
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

            <a
              href={cvHref}
              className="border-ink hover:bg-ink hover:text-paper inline-block w-full border px-5 py-3 text-center text-[11px] uppercase tracking-[0.28em] transition-colors"
            >
              Request CV
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
