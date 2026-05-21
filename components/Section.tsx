import Reveal from "./Reveal";

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 sm:px-10 sm:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        {(eyebrow || title) && (
          <Reveal className="mb-16 text-center sm:mb-20">
            {eyebrow && (
              <p className="text-ink/60 mb-6 text-[10px] uppercase tracking-[0.32em] sm:text-xs">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
