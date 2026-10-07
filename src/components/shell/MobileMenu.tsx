"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { brand, site } from "@/lib/site-config";
import { mobileMenu, type MegaMenu } from "@/lib/nav";
import { bookingHref } from "@/lib/booking-context";
import { track } from "@/lib/analytics";
import { MaybeConfirm } from "@/components/ConfirmChip";

function MenuAccordion({ menu }: { menu: MegaMenu }) {
  const [open, setOpen] = useState(false);
  const panelId = `mm-acc-${menu.id}`;
  return (
    <li>
      <button
        type="button"
        className="acc-b"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {menu.label}
        <ChevronDown size={18} strokeWidth={2} aria-hidden />
      </button>
      <div id={panelId} className="acc-p" hidden={!open}>
        <div className="group">
          <Link href={menu.href}>All {menu.label.toLowerCase()}</Link>
        </div>
        {menu.columns.map((col) => (
          <div className="group" key={col.title}>
            <h5>{col.title}</h5>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
        {menu.side && (
          <div className="group">
            <h5>Help</h5>
            {menu.side.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

/** Off-canvas mobile menu. Accordions all start closed; fixed Book/Call footer. */
export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>(".mclose")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        className={`mm-scrim${open ? " show" : ""}`}
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <div
        id="mobile-menu"
        ref={ref}
        className={`mmenu${open ? " show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="mhead-row">
          <Image src={`/images/${brand.logoFull}`} alt={site.name} width={1099} height={338} style={{ height: 40, width: "auto" }} />
          <button type="button" className="mclose" aria-label="Close menu" onClick={onClose}>
            <X size={22} strokeWidth={1.8} aria-hidden />
          </button>
        </div>
        <nav className="mbody" aria-label="Mobile">
          <ul>
            {mobileMenu.map((item) =>
              item.type === "menu" ? (
                <MenuAccordion key={item.menu.id} menu={item.menu} />
              ) : (
                <li key={item.link.href}>
                  <Link className="mrow-link" href={item.link.href} onClick={onClose}>
                    {item.link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="mfoot">
          <div className="row">
            <a
              className="book"
              href={bookingHref(pathname)}
              onClick={() => track("book_click", { href: pathname })}
            >
              <span className="lb" style={{ display: "block", width: "100%", textAlign: "center" }}>
                Book
              </span>
            </a>
            <a
              className="call"
              href={`tel:${site.phones[0].e164}`}
              onClick={() => track("call_click", { source: pathname })}
            >
              Call {site.phones[0].display}
            </a>
          </div>
          <p className="hours">
            <MaybeConfirm value={site.hours} />
          </p>
        </div>
      </div>
    </>
  );
}
