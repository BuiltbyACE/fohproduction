import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type SupportPayload = {
  type: "donate" | "partner";
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: SupportPayload;

  try {
    body = (await request.json()) as SupportPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { type, name, email, phone, message } = body ?? {};
  const safeName = typeof name === "string" ? name.trim() : "";
  const safeEmail = typeof email === "string" ? email.trim() : "";
  const safeType = type === "donate" || type === "partner" ? type : null;

  if (!safeType || !safeName || !safeEmail) {
    return NextResponse.json(
      { error: "Type, name and email are required" },
      { status: 400 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO;
  const mailFrom = process.env.MAIL_FROM;

  if (!host || !user || !pass || !mailTo) {
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 500 }
    );
  }

  const isDonate = safeType === "donate";
  const subject = isDonate
    ? `New donation lead — ${safeName}`
    : `New partnership enquiry — ${safeName}`;
  const label = isDonate ? "Donation" : "Partnership enquiry";

  const fields = [
    ["Type", label],
    ["Name", safeName],
    ["Email", safeEmail],
    ["Phone", phone || "—"],
    ["Message", message || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 16px;border:1px solid #ddd;font-weight:600;white-space:nowrap">${escapeHtml(
          k
        )}</td><td style="padding:8px 16px;border:1px solid #ddd">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e">
      <h2 style="margin:0 0 16px">${escapeHtml(label)} — Fountain of Hope</h2>
      <table style="border-collapse:collapse;width:100%">${fields}</table>
      <p style="margin-top:24px;color:#666;font-size:13px">
        Sent from the Fountain of Hope website. Reply directly to this email to reach ${escapeHtml(
          safeName
        )} at ${escapeHtml(safeEmail)}.
      </p>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: safeEmail,
      subject,
      text: `Type: ${label}\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${
        phone || "—"
      }\nMessage: ${message || "—"}`,
      html,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}