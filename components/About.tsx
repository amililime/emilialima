import Image from "next/image";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="I — About" title="A short biography">
      <div className="mx-auto grid max-w-5xl gap-16 sm:gap-20 md:grid-cols-[1fr_280px] md:items-start md:gap-24">
        <Reveal>
          <div className="space-y-8 text-base leading-[1.75] font-light sm:text-lg">
            <p>
              I am a Software Developer who builds polished web experiences
              where functionality and aesthetics carry equal weight. I see the
              big picture, and the smallest of bugs — a detailed eye that lets
              me QA thoroughly without losing sight of the whole. Through my
              side projects, I help clients raise their standards by showcasing
              the value of their work with the elegance it deserves.
            </p>
            <p>I lead with energy, discipline, and empathy.</p>
            <p>
              At NinjaOne in Berlin, I owned ninjaone.com end-to-end across 8+ languages, working across Marketing, Product, Engineering, Sales, and Success. Driving EMEA+ growth.
            </p>
            <p>
             I speak several languages, both human and computer. I love solving &quot;impossible&quot; problems — whether about business, people, or tech.
I learn from success, and I&apos;m not afraid of failure, it makes me sharper while it keeps me humble.
              I am grateful to have the most amazing mentors, who shaped much more than just how I work.
              I am strategic, I learn fast, I communicate clearly.
             I&apos;m fascinated by the human brain — from behavioural science to neuroscience — and passionate about language, communication, and AI.
                          When I&apos;m not programming, you&apos;ll find me running, bouldering, making music, or reading.

            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-10">
            <figure>
              <div
                className="bg-ink/4 border-ink/10 relative w-full overflow-hidden border"
                style={{ aspectRatio: "3 / 4" }}
              >
                <Image
                  src="/Emiliabluebackground.png"
                  alt="Portrait of Emilia Lima"
                  fill
                  sizes="(min-width: 768px) 280px, 100vw"
                  className="object-cover"
                  priority
                />
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
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
