"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CircleAlert } from "lucide-react";
import { submitAppointment, type AppointmentResult } from "@/app/actions/appointment";
import { BOOKING_REASONS, type BookingReason } from "@/lib/booking-context";
import { track } from "@/lib/analytics";
import { resolveConfirm } from "@/lib/confirm";
import { whatsappPrefill } from "@/lib/nav";
import { site } from "@/lib/site-config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const DAY_MS = 86_400_000;

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Appointment form (Part 5.3). Native `<form action={formAction}>` bound to
 * a Server Action: it works with no JavaScript (the POST runs the action
 * and follows its redirect or re-renders with the returned error), and
 * `useActionState` layers inline pending/error state on top when JS runs.
 */
export default function AppointmentForm({
  defaultReason,
  sourcePath,
  renderedAt,
}: {
  defaultReason?: BookingReason | string;
  sourcePath: string;
  /** Server render time (Part 12 anti-spam min-fill check); computed by the
   * caller so this component stays pure. See `ContactPage`. */
  renderedAt: number;
}) {
  const [state, formAction, isPending] = useActionState<AppointmentResult | null, FormData>(
    submitAppointment,
    null,
  );
  const [under18, setUnder18] = useState(false);
  const [time, setTime] = useState<"morning" | "afternoon" | "evening" | "">("");
  const [reason, setReason] = useState<string>(defaultReason ?? "");
  const errRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A `?reason=` link (e.g. a service page's Book button) prefills the
    // dropdown; read client-side only so every route stays statically
    // generated (no searchParams on the server component).
    if (defaultReason) return;
    const id = window.requestAnimationFrame(() => {
      const q = new URLSearchParams(window.location.search).get("reason");
      if (q && (BOOKING_REASONS as readonly string[]).includes(q)) setReason(q);
    });
    return () => window.cancelAnimationFrame(id);
  }, [defaultReason]);

  const error = state && !state.ok ? state.error : null;
  const errField = state && !state.ok ? state.field : undefined;

  useEffect(() => {
    if (error) errRef.current?.focus();
  }, [error]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || document.getElementById("cf-turnstile-script")) return;
    const s = document.createElement("script");
    s.id = "cf-turnstile-script";
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  const waNumber = resolveConfirm<string>(site.whatsapp);
  const waHref = waNumber
    ? `https://wa.me/${waNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill("your appointment request"))}`
    : null;

  const today = new Date();
  const minDate = isoDate(today);
  const maxDate = isoDate(new Date(today.getTime() + 60 * DAY_MS));

  return (
    <form
      id="book"
      className="form"
      action={formAction}
      onSubmit={() => track("generate_lead", { form_type: "appointment" })}
      noValidate
    >
      {error && (
        <div className="errsummary" role="alert" tabIndex={-1} ref={errRef}>
          <b>Please check these fields</b>
          <ul>
            <li>{errField ? <a href={`#${errField}`}>{error}</a> : error}</li>
          </ul>
        </div>
      )}

      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Leave this field empty</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="ts" value={renderedAt} />
      <input type="hidden" name="source" value={sourcePath} />

      <div className="field">
        <label htmlFor="f-name">Full name</label>
        <input id="f-name" name="name" autoComplete="name" required />
        <span className="hint">As on your records or prescription.</span>
      </div>

      <div className={errField === "f-phone" ? "field invalid" : "field"}>
        <label htmlFor="f-phone">Mobile number</label>
        <div className="phone-prefix">
          <span aria-hidden>+91</span>
          <input
            id="f-phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel-national"
            required
            aria-invalid={errField === "f-phone"}
            aria-describedby={errField === "f-phone" ? "f-phone-err" : undefined}
          />
        </div>
        {errField === "f-phone" && (
          <span className="err" id="f-phone-err">
            <CircleAlert size={16} strokeWidth={1.75} aria-hidden />
            {error}
          </span>
        )}
      </div>

      <div className="field">
        <label htmlFor="f-age">Age, in years</label>
        <input id="f-age" name="age" type="number" inputMode="numeric" min={1} max={120} />
      </div>

      <div className={errField === "f-reason" ? "field invalid" : "field"}>
        <label htmlFor="f-reason">Reason for visit</label>
        <select
          id="f-reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        >
          <option value="" disabled>
            Choose one
          </option>
          {BOOKING_REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label id="f-time-lab">Preferred time</label>
        <div className="pillrow" role="group" aria-labelledby="f-time-lab">
          {(["morning", "afternoon", "evening"] as const).map((v) => (
            <button
              key={v}
              type="button"
              className="pill"
              aria-pressed={time === v}
              onClick={() => setTime(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
        <input type="hidden" name="time" value={time} />
      </div>

      <div className="field">
        <label htmlFor="f-date">Preferred date</label>
        <input id="f-date" name="date" type="date" min={minDate} max={maxDate} />
        <span className="hint">Any day in the next 60 days.</span>
      </div>

      <div className="field">
        <label htmlFor="f-town">Town or city</label>
        <input id="f-town" name="town" autoComplete="address-level2" />
        <span className="hint">Optional.</span>
      </div>

      <label className="checkline">
        <input
          type="checkbox"
          name="under18"
          checked={under18}
          onChange={(e) => setUnder18(e.target.checked)}
        />
        <span>The patient is under 18.</span>
      </label>

      {under18 && (
        <div className={errField === "f-guardian" ? "field invalid" : "field"}>
          <label htmlFor="f-guardian">Parent or guardian name</label>
          <input id="f-guardian" name="guardian" autoComplete="off" required />
          <span className="hint">
            I am the parent or legal guardian and I consent to EVE Women and Fertility Clinic
            using these details to arrange care for this patient.
          </span>
        </div>
      )}

      <label className="checkline">
        <input type="checkbox" id="f-consent" name="consent" required />
        <span>
          I agree that EVE Women and Fertility Clinic may use these details to contact me about
          my appointment, as explained in the <Link href="/privacy-policy/">Privacy Policy</Link>.
        </span>
      </label>

      {TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-response-field-name="cf-turnstile-response"
        />
      )}

      <div className="btns">
        <button className="btn btn-p" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <span className="spinner" aria-hidden /> Sending
            </>
          ) : (
            "Request appointment"
          )}
        </button>
        {error && (
          <>
            <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
              Call {site.phones[0].display}
            </a>
            {waHref && (
              <a className="btn-wa" href={waHref}>
                WhatsApp us
              </a>
            )}
          </>
        )}
      </div>
    </form>
  );
}
