"use client";

import { useT } from "@/lib/i18n/LocaleProvider";

export default function SkipToContent() {
  const t = useT();
  return (
    <a
      href="#main"
      className="bg-ink text-paper sr-only px-4 py-2 text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
    >
      {t.skipToContent}
    </a>
  );
}
