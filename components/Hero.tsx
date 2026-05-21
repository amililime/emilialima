import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-32 pb-24 text-center sm:px-10 sm:pt-40 sm:pb-32"
    >
      <Reveal>
        <p className="text-ink/60 mb-10 text-[10px] uppercase tracking-[0.4em] sm:mb-14 sm:text-xs">
          Localization Engineer · Frontend Developer
        </p>
      </Reveal>

      <Reveal delay={120}>
        <h1 className="font-display text-6xl font-light leading-[0.92] tracking-tight sm:text-[8rem] md:text-[10rem] lg:text-[12rem]">
          <span className="block">Emilia</span>
          <span className="block italic">Lima</span>
        </h1>
      </Reveal>

      <Reveal delay={280} className="mt-10 sm:mt-14">
        <p className="text-ink/80 mx-auto max-w-xl text-base leading-relaxed font-light sm:text-lg">
          Localization engineer and frontend developer — bridging code,
          language, and culture across 8 languages and four continents.
        </p>
      </Reveal>

      <Reveal delay={420} className="mt-12 sm:mt-16">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <a
            href="#work"
            className="border-ink hover:bg-ink hover:text-paper inline-flex items-center justify-center border px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="hover:bg-ink/5 inline-flex items-center justify-center px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={620} className="mt-24 sm:mt-32">
        <div className="text-ink/60 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.32em]">
          <span>Scroll</span>
          <span aria-hidden="true" className="bg-ink/30 h-10 w-px" />
        </div>
      </Reveal>
    </section>
  );
}
