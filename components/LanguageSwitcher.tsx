"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import {
  LOCALES,
  LOCALE_FLAGS,
  LOCALE_LABELS,
  LOCALE_SHORT,
  type Locale,
} from "@/lib/i18n/types";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((o) => !o)}
        className={`relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 tracking-eyebrow transition-colors ${
          open ? "bg-ink/5" : "hover:bg-ink/5"
        }`}
      >
        <span aria-hidden="true" className="text-base leading-none">
          {LOCALE_FLAGS[locale]}
        </span>
        <span>{LOCALE_SHORT[locale]}</span>
        <span
          aria-hidden="true"
          className={`text-ink/50 text-[8px] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <ul
        role="listbox"
        aria-label={t.nav.language}
        aria-hidden={!open}
        className={`bg-paper/95 absolute right-0 top-full z-50 mt-3 min-w-[180px] origin-top-right rounded-2xl p-1.5 text-[11px] uppercase tracking-eyebrow shadow-[0_12px_32px_-8px_rgba(10,10,10,0.18),0_4px_12px_-4px_rgba(10,10,10,0.08)] backdrop-blur-md transition-all duration-150 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {LOCALES.map((l) => {
          const selected = l === locale;
          return (
            <li key={l} role="option" aria-selected={selected}>
              <button
                type="button"
                onClick={() => pick(l)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  selected
                    ? "bg-ink/5 text-ink"
                    : "text-ink/70 hover:bg-ink/[0.035] hover:text-ink"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="text-base leading-none">
                    {LOCALE_FLAGS[l]}
                  </span>
                  <span>{LOCALE_LABELS[l]}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[9px] ${
                    selected ? "text-ink/60" : "text-ink/30"
                  }`}
                >
                  {LOCALE_SHORT[l]}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
