import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emilialima.com"),
  title: "Emilia Lima — Full Stack Developer · TypeScript & React",
  description:
    "Full stack developer building web experiences in TypeScript, React, Next.js, and Node. Multilingual, detail-driven, based in Montevideo and working across EMEA.",
  openGraph: {
    title: "Emilia Lima — Full Stack Developer · TypeScript & React",
    description:
      "Full stack developer building web experiences in TypeScript, React, Next.js, and Node. Multilingual, detail-driven, based in Montevideo and working across EMEA.",
    siteName: "Emilia Lima",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="bg-paper text-ink min-h-screen antialiased">
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
