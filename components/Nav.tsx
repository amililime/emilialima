"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

const cvHref =
  "mailto:emilialimadacunha@gmail.com?subject=CV%20Request%20%E2%80%94%20Emilia%20Lima";

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              visible.set(id, entry.intersectionRatio);
            } else {
              visible.delete(id);
            }
          }
          if (visible.size === 0) {
            setActive("");
            return;
          }
          const top = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
          setActive(top[0]);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
      );
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-300 ${
        condensed
          ? "bg-paper/90 border-b border-ink/10 py-3 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-tight sm:text-xl"
          aria-label="Emilia Lima — back to top"
        >
          Emilia Lima
        </a>

        <ul className="flex items-center gap-6 text-[11px] uppercase sm:gap-10 sm:text-xs">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="relative inline-block py-1 tracking-[0.22em] transition-opacity hover:opacity-60"
                >
                  {s.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px bg-periwinkle transition-[width,opacity] duration-500 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li className="hidden sm:block">
            <a
              href={cvHref}
              className="border-ink/80 hover:bg-ink hover:text-paper inline-block border px-3 py-1.5 tracking-[0.22em] transition-colors"
            >
              Request CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
