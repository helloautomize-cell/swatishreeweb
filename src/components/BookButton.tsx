"use client";

import { usePathname } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { track } from "@/lib/analytics";
import { bookingHref } from "@/lib/booking-context";

/**
 * The two-part Book button: sage icon block, deep moss label, one line.
 * With no explicit `href`, it carries the current page as the booking
 * reason (site-plan §8) via `lib/booking-context.ts`.
 */
export default function BookButton({
  label = "Book Consultation",
  href,
}: {
  label?: string;
  href?: string;
}) {
  const pathname = usePathname();
  const finalHref = href ?? bookingHref(pathname);
  return (
    <a
      className="book"
      href={finalHref}
      aria-label={label}
      onClick={() => track("book_click", { href: finalHref })}
    >
      <span className="ic">
        <CalendarDays size={22} strokeWidth={1.8} aria-hidden />
      </span>
      <span className="lb">{label}</span>
    </a>
  );
}
