import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "emilialimadacunha@gmail.com";
const FROM = "Emilia Lima <hello@emilialima.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Server is missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  const body = (await req.json().catch(() => null)) as {
    name?: unknown;
    email?: unknown;
    message?: unknown;
  } | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "")
    .trim()
    .slice(0, 200);
  const email = String(body.email ?? "")
    .trim()
    .slice(0, 200);
  const message = String(body.message ?? "")
    .trim()
    .slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Contact form: ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0a0a0a">
  <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
  <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
</div>`,
  });

  if (result.error) {
    console.error("Resend error", result.error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
