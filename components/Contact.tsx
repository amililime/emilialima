"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}${email ? ` · ${email}` : ""}`,
    );
    window.location.href = `mailto:emilialimadacunha@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" eyebrow="VII — Contact">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl md:text-[7rem]">
            Let&rsquo;s talk.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-ink/75 mx-auto mt-8 max-w-xl text-base leading-relaxed font-light sm:text-lg">
            Available for frontend, full-stack, and localization engineering
            roles. Onsite · Hybrid · Remote. Based in Montevideo, open to
            Berlin and beyond.
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-16">
          <form
            onSubmit={onSubmit}
            className="mx-auto max-w-xl space-y-8 text-left"
            noValidate
          >
            <Field
              label="Name"
              id="contact-name"
              value={name}
              onChange={setName}
              required
              autoComplete="name"
            />
            <Field
              label="Email"
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
                Message
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
              <p className="text-ink/45 text-[10px] uppercase tracking-[0.28em]">
                Opens your mail client
              </p>
              <button
                type="submit"
                className="border-ink hover:bg-ink hover:text-paper border px-8 py-3 text-[11px] uppercase tracking-[0.28em] transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={360} className="mt-20">
          <ul className="text-ink/75 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-8 sm:text-base">
            <li>
              <a
                className="hover:text-ink"
                href="mailto:emilialimadacunha@gmail.com"
              >
                emilialimadacunha@gmail.com
              </a>
            </li>
            <li aria-hidden="true" className="text-ink/30 hidden sm:block">
              ·
            </li>
            <li>
              <a
                className="hover:text-ink"
                href="https://www.linkedin.com/in/emilia-lima"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/emilia-lima
              </a>
            </li>
            <li aria-hidden="true" className="text-ink/30 hidden sm:block">
              ·
            </li>
            <li>
              <a
                className="hover:text-ink"
                href="https://github.com/amililime"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/amililime
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
