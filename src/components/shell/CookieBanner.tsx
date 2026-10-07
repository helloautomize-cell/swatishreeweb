"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getConsent, openConsentSettings, setConsent, type ConsentChoice } from "@/lib/consent";

/**
 * Cookie consent banner. Stores the choice via `lib/consent.ts`; `analytics.ts`
 * gates GA4 behind the same store. The footer's "Cookie settings" button
 * re-opens the banner via the `eve:cookie-settings` window event.
 */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (!getConsent()) setShow(true);
    });
    const reopen = () => setShow(true);
    window.addEventListener("eve:cookie-settings", reopen);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("eve:cookie-settings", reopen);
    };
  }, []);

  const choose = useCallback((choice: ConsentChoice) => {
    setConsent(choice);
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div className="cookie" role="region" aria-label="Cookie consent">
      <p>
        We use cookies to keep the site working and, with your permission, to understand how it is used.
        You can accept or reject non-essential cookies. Read our{" "}
        <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
      <div className="cbtns">
        <button type="button" className="c-acc" onClick={() => choose("accepted")}>
          Accept
        </button>
        <button type="button" className="c-rej" onClick={() => choose("rejected")}>
          Reject non-essential
        </button>
      </div>
    </div>
  );
}

/** Footer button that re-opens the consent banner. */
export function CookieSettingsButton() {
  return (
    <button type="button" className="cset" onClick={openConsentSettings}>
      Cookie settings
    </button>
  );
}
