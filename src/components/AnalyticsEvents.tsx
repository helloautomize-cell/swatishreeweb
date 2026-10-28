"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/*
 * Document-level conversion events (Part 12). One delegated click listener
 * covers every tel:/WhatsApp/mailto:/directions link and every Book or
 * appointment CTA, including links rendered from markdown content, so
 * components do not wire their own onClick tracking. Events carry only
 * page_path and link_location, never the href, link text or any form field.
 * `track()` itself no-ops until the visitor accepts analytics cookies, so
 * nothing here fires before consent.
 */

const APPOINTMENT_RE = /appointment|book|consult/i;

function linkLocation(el: Element): string {
  const region = el.closest("header, footer, nav, section, main, form, [role='dialog']");
  if (!region) return "body";
  if (region.getAttribute("role") === "dialog") return "dialog";
  const tag = region.tagName.toLowerCase();
  if (tag === "section") {
    const label = `${region.id} ${typeof region.className === "string" ? region.className : ""}`;
    return /hero/i.test(label) ? "hero" : "section";
  }
  return tag;
}

function isMapsUrl(url: URL): boolean {
  const host = url.hostname.toLowerCase();
  return (
    host === "maps.app.goo.gl" ||
    host.startsWith("maps.google.") ||
    (/(^|\.)google\.[a-z.]+$/.test(host) && url.pathname.startsWith("/maps"))
  );
}

export default function AnalyticsEvents() {
  const pathname = usePathname();
  const submitted = useRef(false);

  // Successful appointment submissions redirect to /thank-you/; landing on
  // it is the conversion signal, so fire once per visit to that page.
  useEffect(() => {
    if (pathname === "/thank-you/" && !submitted.current) {
      submitted.current = true;
      track("appointment_submit", { form_name: "appointment", page_path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("a, button");
      if (!el) return;
      const params = { page_path: window.location.pathname, link_location: linkLocation(el) };
      const href = el.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) return track("phone_click", params);
      if (href.startsWith("mailto:")) return track("email_click", params);
      try {
        const url = new URL(href, window.location.href);
        if (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com") {
          return track("whatsapp_click", params);
        }
        if (isMapsUrl(url)) return track("directions_click", params);
      } catch {
        /* empty or non-URL hrefs fall through to the label check */
      }
      const label = `${el.getAttribute("aria-label") ?? ""} ${el.textContent ?? ""}`;
      if (APPOINTMENT_RE.test(label)) track("appointment_click", params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
