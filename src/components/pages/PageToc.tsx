"use client";

import { useEffect, useRef, useState } from "react";
import BookButton from "@/components/BookButton";

/*
 * Sticky table of contents for detail pages (Part 5.4): right of the text on
 * desktop, the active section is highlighted and a small Book card sits
 * beneath. Hidden below 1024px.
 */
export default function PageToc({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const listRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="pg-toc" aria-label="On this page" ref={listRef}>
      <p className="pg-toc-title">On this page</p>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="pg-toc-book">
        <p>Ready to plan a visit?</p>
        <BookButton />
      </div>
    </nav>
  );
}
