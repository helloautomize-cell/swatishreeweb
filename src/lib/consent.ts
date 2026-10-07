/*
 * Shared cookie-consent store (DPDP Act 2023; master prompt Part 10, 12).
 * `localStorage["eve-consent"]` is the single source `CookieBanner` and
 * `analytics.ts` both read, so a choice made once gates every tag the
 * same way without a reload. Re-open the banner via the `eve:cookie-settings`
 * window event (see `CookieSettingsButton`).
 */

export type ConsentChoice = "accepted" | "rejected";
export type Consent = { choice: ConsentChoice; at: number };

const KEY = "eve-consent";
const EVENT = "eve:consent-change";

export function getConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.choice === "accepted";
}

export function setConsent(choice: ConsentChoice): void {
  const value: Consent = { choice, at: Date.now() };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable; tags stay off for this visit */
  }
  window.dispatchEvent(new CustomEvent<Consent>(EVENT, { detail: value }));
}

/** Call back whenever the stored choice changes, in this tab. */
export function subscribeConsent(cb: (consent: Consent | null) => void): () => void {
  const handler = (e: Event) => cb((e as CustomEvent<Consent>).detail ?? getConsent());
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

export function openConsentSettings(): void {
  window.dispatchEvent(new Event("eve:cookie-settings"));
}
