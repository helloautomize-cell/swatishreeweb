"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-config";
import { whatsappPrefill } from "@/lib/nav";
import { resolveConfirm } from "@/lib/confirm";
import { track } from "@/lib/analytics";

function pageTitle(pathname: string): string {
  const seg = pathname.split("/").filter(Boolean).pop();
  if (!seg) return "the home page";
  return seg
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Floating WhatsApp button, desktop only (>=1024px). */
export default function WhatsAppFab() {
  const pathname = usePathname();
  const num = resolveConfirm<string>(site.whatsapp);
  if (pathname === "/thank-you/") return null;
  if (!num) {
    return process.env.NODE_ENV === "production" ? null : (
      <span className="wa-fab" title="[CONFIRM: WhatsApp number]">
        <MessageCircle size={26} strokeWidth={1.8} aria-hidden />
      </span>
    );
  }
  const href = `https://wa.me/${num.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill(pageTitle(pathname)))}`;
  return (
    <a
      className="wa-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => track("whatsapp_click", { source: pathname })}
    >
      <MessageCircle size={26} strokeWidth={1.8} aria-hidden />
    </a>
  );
}
