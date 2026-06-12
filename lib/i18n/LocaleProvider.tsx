"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DICTIONARIES } from "./dictionaries";
import { LOCALES, type Dict, type Locale } from "./types";

const STORAGE_KEY = "emilialima.locale";
const DEFAULT_LOCALE: Locale = "en";

function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

function detectFromNavigator(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);
  for (const raw of candidates) {
    const tag = raw.toLowerCase();
    if (tag.startsWith("pt-br") || tag === "pt-br" || tag.startsWith("pt"))
      return "pt-BR";
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("nl")) return "nl";
    if (tag.startsWith("de")) return "de";
    if (tag.startsWith("ja") || tag.startsWith("jp")) return "jp";
    if (tag.startsWith("en")) return "en";
  }
  return DEFAULT_LOCALE;
}

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    let resolved: Locale | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) resolved = stored;
    } catch {
      // localStorage unavailable — fall through to detection
    }
    if (!resolved) resolved = detectFromNavigator();
    document.documentElement.lang = resolved;
    document.documentElement.classList.toggle("font-jp", resolved === "jp");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(resolved);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
    document.documentElement.classList.toggle("font-jp", l === "jp");
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: DICTIONARIES[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: DICTIONARIES[DEFAULT_LOCALE],
    } satisfies Ctx;
  }
  return ctx;
}

export function useT() {
  return useLocale().t;
}
