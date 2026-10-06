"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarDays, MessageCircle, Phone, X } from "lucide-react";
import { site } from "@/lib/site-config";
import { booking, whatsappPrefill } from "@/lib/nav";
import { resolveConfirm } from "@/lib/confirm";

const waNumber = resolveConfirm<string>(site.whatsapp);

function pageTitle(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean).pop();
  if (!seg) return "the home page";
  return seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Fixed mobile action bar (<1024px): Book, Call sheet, WhatsApp. */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [sheet, setSheet] = useState(false);
  const [typing, setTyping] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const hidden = pathname === "/thank-you/";

  useEffect(() => {
    const onFocusIn = (e: FocusEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches("input, textarea, select")) setTyping(true);
    };
    const onFocusOut = (e: FocusEvent) => {
      const t = e.target as HTMLElement;
      if (t.matches("input, textarea, select")) setTyping(false);
    };
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const closeSheet = useCallback(() => setSheet(false), []);
  useEffect(() => {
    if (!sheet) return;
    sheetRef.current?.querySelector<HTMLElement>("a.num")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSheet();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sheet, closeSheet]);

  if (hidden) return null;

  const waHref = waNumber
    ? `https://wa.me/${waNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill(pageTitle(pathname)))}`
    : null;

  return (
    <>
      <div className={`appbar${typing ? " hidden-while-typing" : ""}`} role="group" aria-label="Quick actions">
        <a href={booking.href}>
          <CalendarDays size={20} strokeWidth={1.8} aria-hidden />
          Book Now
        </a>
        <button type="button" aria-haspopup="dialog" aria-expanded={sheet} onClick={() => setSheet(true)}>
          <Phone size={20} strokeWidth={1.8} aria-hidden />
          Call Now
        </button>
        {waHref ? (
          <a href={waHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} strokeWidth={1.8} aria-hidden />
            WhatsApp
          </a>
        ) : (
          <button type="button" disabled aria-disabled="true" title="WhatsApp number to be confirmed">
            <MessageCircle size={20} strokeWidth={1.8} aria-hidden />
            WhatsApp
          </button>
        )}
      </div>

      <button
        type="button"
        className={`callsheet-scrim${sheet ? " show" : ""}`}
        aria-label="Close"
        onClick={closeSheet}
        tabIndex={sheet ? 0 : -1}
      />
      <div
        ref={sheetRef}
        className={`callsheet${sheet ? " show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Call the clinic"
        aria-hidden={!sheet}
      >
        <h3>Call the clinic</h3>
        {site.phones.map((p) => (
          <a key={p.e164} className="num" href={`tel:${p.e164}`} onClick={closeSheet}>
            <Phone size={18} strokeWidth={1.8} aria-hidden />
            {p.display}
          </a>
        ))}
        <button type="button" className="cs-close" onClick={closeSheet}>
          <X size={16} strokeWidth={2} aria-hidden style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} />
          Close
        </button>
      </div>
    </>
  );
}
