import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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
  title: "Emilia Lima — Full Stack Developer",
  description:
    "Full stack developer. Python for backend, TypeScript for frontend. React, Next.js.",
  openGraph: {
    title: "Emilia Lima — Full Stack Developer",
    description:
      "Full stack developer. Python for backend, TypeScript for frontend. React, Next.js.",
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
      </body>
    </html>
  );
}
