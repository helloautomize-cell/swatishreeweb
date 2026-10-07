/*
 * Consent-gated GA4 (Consent Mode v2) and the named events (master prompt
 * Part 12 "Analytics"). No gtag.js request happens before Accept; ad
 * signals stay denied always. `NEXT_PUBLIC_GA_ID` is the client-exposed
 * measurement id (a `[CONFIRM]` client input until the GA4 property exists).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}

/** Query string with everything but utm_* stripped (Part 12: no PII in GA). */
function cleanUrl(href: string): string {
  try {
    const u = new URL(href);
    const kept = new URLSearchParams();
    for (const k of UTM_KEYS) {
      const v = u.searchParams.get(k);
      if (v) kept.set(k, v);
    }
    u.search = kept.size ? `?${kept.toString()}` : "";
    return u.toString();
  } catch {
    return href;
  }
}

/** Every signal starts denied. Call once, as early as possible, client-side only. */
export function initConsentDefaults(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

let loaded = false;

/** Grant analytics_storage and inject gtag.js. Idempotent; call only after Accept. */
export function loadAnalytics(): void {
  if (loaded || !GA_ID || typeof window === "undefined") return;
  loaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? gtag;
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", GA_ID, {
    page_location: cleanUrl(window.location.href),
    anonymize_ip: true,
    allow_google_signals: false,
  });
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
}

/** Cookie settings -> Reject after a prior Accept: stop collection going forward. */
export function revokeAnalytics(): void {
  if (typeof window === "undefined" || !loaded) return;
  gtag("consent", "update", { analytics_storage: "denied" });
}

export type AnalyticsEvent =
  | "book_click"
  | "call_click"
  | "whatsapp_click"
  | "directions_click"
  | "map_load"
  | "generate_lead";

/** Fire a named event. No-ops until gtag has actually loaded (post-consent). */
export function track(event: AnalyticsEvent, params?: Record<string, string>): void {
  if (typeof window === "undefined" || !loaded || !window.gtag) return;
  window.gtag("event", event, params);
}
