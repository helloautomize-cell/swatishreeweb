"use server";

import { redirect } from "next/navigation";
import { BOOKING_REASONS, type BookingReason } from "@/lib/booking-context";
import { site } from "@/lib/site-config";

/*
 * Appointment form server action (master prompt Part 5.3, Part 12 "Forms").
 * No database: on success we email the clinic via Resend and redirect to
 * `/thank-you/?type=`. Works without JavaScript (a native form POST to a
 * Server Action still runs this and still gets the redirect or the
 * returned error state); `AppointmentForm` additionally uses
 * `useActionState` so the error summary and pending state render inline
 * when JS is available.
 */

export type AppointmentResult = { ok: true } | { ok: false; error: string; field?: string };

const MIN_FILL_MS = 3000;
const CONSENT_TEXT =
  "I agree that EVE Women and Fertility Clinic may use these details to contact me about my appointment, as explained in the Privacy Policy.";
const GUARDIAN_CONSENT_TEXT =
  "I am the parent or legal guardian and I consent to EVE Women and Fertility Clinic using these details to arrange care for this patient.";

function str(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

function isBookingReason(v: string): v is BookingReason {
  return (BOOKING_REASONS as readonly string[]).includes(v);
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile is enforced only once keys are set (Part 12)
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

function waLink(e164: string, text: string): string {
  return `https://wa.me/${e164.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

type Fields = {
  name: string;
  phoneE164: string;
  phoneDisplay: string;
  age: string;
  reason: BookingReason;
  date: string;
  time: string;
  town: string;
  under18: boolean;
  guardian: string;
  source: string;
  consentAt: string;
};

async function notifyClinic(f: Fields): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.APPOINTMENT_NOTIFY_EMAIL;
  if (!apiKey || !from || !to) {
    console.error(
      "[appointment] Resend is not configured: set RESEND_API_KEY, RESEND_FROM_EMAIL and APPOINTMENT_NOTIFY_EMAIL.",
    );
    return false;
  }

  const rows: [string, string][] = [
    ["Patient name", escapeHtml(f.name)],
    ["Mobile number", `<a href="tel:${f.phoneE164}">${escapeHtml(f.phoneDisplay)}</a>`],
    ["WhatsApp", `<a href="${waLink(f.phoneE164, `Hello ${escapeHtml(f.name)}, this is EVE Women and Fertility Clinic about your appointment request.`)}">Message on WhatsApp</a>`],
    ["Age", f.age ? escapeHtml(f.age) : "Not given"],
    ["Reason for visit", escapeHtml(f.reason)],
    ["Preferred date", f.date ? escapeHtml(f.date) : "Not given"],
    ["Preferred time", f.time ? escapeHtml(f.time) : "Not given"],
    ["Town or city", f.town ? escapeHtml(f.town) : "Not given"],
    ["Source page", escapeHtml(f.source || "/contact/")],
    [
      "Under 18",
      f.under18 ? `Yes. Guardian: ${escapeHtml(f.guardian)}. "${escapeHtml(GUARDIAN_CONSENT_TEXT)}"` : "No",
    ],
    ["Consent given", `"${escapeHtml(CONSENT_TEXT)}" at ${escapeHtml(f.consentAt)} IST`],
  ];

  const html = `<div style="font-family:sans-serif;max-width:560px">
    <div style="background:#5F7350;color:#FFFFFF;padding:14px 18px;border-radius:10px 10px 0 0;font-size:15px;font-weight:bold">EVE Women and Fertility Clinic · New appointment request</div>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;background:#F8F3EA;border:1px solid #E4DAC7;border-top:none">
    ${rows.map(([k, v]) => `<tr><th align="left" style="border-bottom:1px solid #E4DAC7;color:#6B4F3A">${k}</th><td style="border-bottom:1px solid #E4DAC7;color:#4A3A2C">${v}</td></tr>`).join("")}
  </table>
  </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: site.phones[0].e164,
        subject: `New appointment request: ${f.reason}`,
        html,
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("[appointment] Resend request failed", err);
    return false;
  }
}

export async function submitAppointment(
  _prev: AppointmentResult | null,
  formData: FormData,
): Promise<AppointmentResult> {
  // Honeypot: real visitors never fill this hidden field. Redirect as if it
  // succeeded (so a bot sees a normal "success" and a false positive from
  // autofill isn't stranded), but never email the clinic for it.
  if (str(formData, "website")) redirect("/thank-you/");

  const ts = Number(formData.get("ts"));
  if (!Number.isFinite(ts) || Date.now() - ts < MIN_FILL_MS) {
    return { ok: false, error: "That was fast. Please try again." };
  }

  const name = str(formData, "name");
  if (!name) return { ok: false, error: "Enter the patient's name.", field: "f-name" };

  const phone = str(formData, "phone").replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return { ok: false, error: "Enter a 10 digit mobile number.", field: "f-phone" };
  }

  const reason = str(formData, "reason");
  if (!isBookingReason(reason)) {
    return { ok: false, error: "Choose a reason for the visit.", field: "f-reason" };
  }

  const under18 = str(formData, "under18") === "on";
  const guardian = str(formData, "guardian");
  if (under18 && !guardian) {
    return { ok: false, error: "Enter the parent or guardian's name.", field: "f-guardian" };
  }

  if (str(formData, "consent") !== "on") {
    return { ok: false, error: "Agree to be contacted before you submit.", field: "f-consent" };
  }

  const turnstileOk = await verifyTurnstile(str(formData, "cf-turnstile-response"));
  if (!turnstileOk) {
    return { ok: false, error: "We could not verify you are human. Please try again." };
  }

  const consentAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const sent = await notifyClinic({
    name,
    phoneE164: `+91${phone}`,
    phoneDisplay: phone,
    age: str(formData, "age"),
    reason,
    date: str(formData, "date"),
    time: str(formData, "time"),
    town: str(formData, "town"),
    under18,
    guardian,
    source: str(formData, "source"),
    consentAt,
  });

  if (!sent) {
    return {
      ok: false,
      error: "We could not send your request. Please call or WhatsApp us instead, your details are kept below.",
    };
  }

  redirect(`/thank-you/?type=${encodeURIComponent(reason)}`);
}
