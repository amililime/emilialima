"use client";

import { useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import Reveal from "./Reveal";
import Section from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" eyebrow={t.contact.eyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl md:text-[7rem]">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-ink/75 mx-auto mt-8 max-w-xl text-base leading-relaxed font-light sm:text-lg">
            {t.contact.availability}
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-16">
          <form
            onSubmit={onSubmit}
            className="mx-auto max-w-xl space-y-8 text-left"
            noValidate
          >
            <Field
              label={t.contact.nameLabel}
              id="contact-name"
              value={name}
              onChange={setName}
              required
              autoComplete="name"
            />
            <Field
              label={t.contact.emailLabel}
              id="contact-email"
              value={email}
              onChange={setEmail}
              type="email"
              required
              autoComplete="email"
            />
            <div>
              <label
                htmlFor="contact-message"
                className="text-ink/60 mb-3 block text-[10px] uppercase tracking-[0.28em]"
              >
                {t.contact.messageLabel}
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="border-ink/30 focus:border-ink w-full resize-none border-b bg-transparent py-3 text-base leading-relaxed font-light outline-none transition-colors sm:text-lg"
              />
            </div>
            <div className="flex items-center justify-between gap-4 pt-2">
              <p
                role={status === "error" ? "alert" : undefined}
                aria-live="polite"
                className={`text-[10px] uppercase tracking-[0.28em] ${
                  status === "error" ? "text-ink" : "text-ink/60"
                }`}
              >
                {status === "sending" && t.contact.sending}
                {status === "sent" && t.contact.sent}
                {status === "error" && t.contact.error}
                {status === "idle" && t.contact.helper}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="border-ink hover:bg-ink hover:text-paper border px-8 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-ink"
              >
                {t.contact.send}
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={360} className="mt-20">
          <ul className="flex items-center justify-center gap-8 sm:gap-10">
            <li>
              <a
                href="mailto:emilialimadacunha@gmail.com"
                aria-label="emilialimadacunha@gmail.com"
                className="text-ink/70 inline-flex transition-colors hover:text-[#ACC5FE]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/emilia-lima"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin.com/in/emilia-lima"
                className="text-ink/70 inline-flex transition-colors hover:text-[#ACC5FE]"
              >
                <svg
                  viewBox="0 0 448 512"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/amililime"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github.com/amililime"
                className="text-ink/70 inline-flex transition-colors hover:text-[#ACC5FE]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 2.86-.38c.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55 4.51-1.5 7.76-5.75 7.76-10.77C23.33 5.56 18.27.5 12 .5z" />
                </svg>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-ink/60 mb-3 block text-[10px] uppercase tracking-[0.28em]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="border-ink/30 focus:border-ink w-full border-b bg-transparent py-3 text-base font-light outline-none transition-colors sm:text-lg"
      />
    </div>
  );
}
