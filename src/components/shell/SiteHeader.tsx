"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import EveImage from "@/components/EveImage";
import { brand, site } from "@/lib/site-config";
import { headerLinks, megaMenus, type MegaMenu } from "@/lib/nav";
import { bookingHref } from "@/lib/booking-context";
import { track } from "@/lib/analytics";
import MobileMenu from "./MobileMenu";

function DoctorMiniCard() {
  return (
    <div className="mcard">
      <div className="mrow">
        <EveImage src="doctor-avatar-1x1.png" sizes="40px" className="mavatar" imgClassName="mavatar-img" />
        <span>
          <b>{site.doctor}</b>
          <small>MRCOG (UK)</small>
        </span>
      </div>
      <Link href="/dr-swati-shree/">
        View profile <ArrowRight size={15} strokeWidth={2} aria-hidden />
      </Link>
    </div>
  );
}

function MegaPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className={`mega ${menu.id === "treatments" ? "treat" : menu.id === "conditions" ? "cond" : ""}`}>
      <div className="mega-panel">
        <Link className="mhead" href={menu.href}>
          All {menu.label.toLowerCase()} <ArrowRight size={14} strokeWidth={2} aria-hidden style={{ display: "inline", verticalAlign: "-2px" }} />
        </Link>
        {menu.columns.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {menu.side && (
          <div className="mside">
            <h4>Help</h4>
            <ul>
              {menu.side.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <DoctorMiniCard />
      </div>
    </div>
  );
}

/** Sticky site header: logo, three mega menus, flat links, Book button, burger. */
export default function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // Close menus on navigation by adjusting state during render.
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  const closeMenu = useCallback(() => setOpen(null), []);

  const onItemKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      setOpen(null);
      navRef.current?.querySelector<HTMLButtonElement>(`[data-menu="${id}"]`)?.focus();
    } else if (e.key === "ArrowDown" && open !== id) {
      setOpen(id);
    }
  };

  const onItemBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
  };

  return (
    <>
      <header className="sh-hdr">
        <div className="container-eve hrow">
          <Link href="/" className="logo" aria-label={`${site.name} home`}>
            <Image src={`/images/${brand.logoFull}`} alt="" width={1099} height={338} priority style={{ height: 50, width: "auto" }} />
          </Link>
          <nav aria-label="Main">
            <ul ref={navRef}>
              {megaMenus.map((m) => (
                <li
                  key={m.id}
                  className={`nav-item${open === m.id ? " open" : ""}`}
                  onMouseEnter={() => setOpen(m.id)}
                  onMouseLeave={closeMenu}
                  onBlur={onItemBlur}
                  onKeyDown={(e) => onItemKeyDown(e, m.id)}
                >
                  <button
                    type="button"
                    className="nav-trigger"
                    data-menu={m.id}
                    aria-expanded={open === m.id}
                    aria-haspopup="true"
                    aria-controls={`mega-${m.id}`}
                    onClick={() => setOpen(open === m.id ? null : m.id)}
                    onFocus={() => setOpen(null)}
                  >
                    {m.label}
                    <ChevronDown size={15} strokeWidth={2} aria-hidden />
                  </button>
                  <div id={`mega-${m.id}`} role="group" aria-label={`${m.label} menu`}>
                    <MegaPanel menu={m} />
                  </div>
                </li>
              ))}
              {headerLinks.map((l) => (
                <li key={l.href} className="nav-item">
                  <Link className="nav-link" href={l.href} onFocus={closeMenu}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hact">
            <a
              className="book"
              href={bookingHref(pathname)}
              aria-label="Book Consultation"
              onClick={() => track("book_click", { href: pathname })}
            >
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="3" />
                  <path d="M8 3v4M16 3v4M3 10h18" />
                </svg>
              </span>
              <span className="lb">Book Consultation</span>
            </a>
            <button
              type="button"
              className="burger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.8} aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
