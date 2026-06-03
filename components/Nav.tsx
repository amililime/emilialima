"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const sectionIds = ["about", "work", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

export default function Nav() {
  const t = useT();
  const [active, setActive] = useState<string>("");
  const [condensed, setCondensed] = useState(false);

  const sections: { id: SectionId; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "work", label: t.nav.work },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = sectionIds.slice();
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
        aria-label={t.nav.primary}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-tight sm:text-xl"
          aria-label={t.nav.backToTop}
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
                  className="relative inline-block py-1 tracking-eyebrow transition-opacity hover:opacity-60"
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
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
