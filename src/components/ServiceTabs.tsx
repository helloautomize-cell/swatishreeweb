"use client";

import { useEffect, useRef, useState } from "react";
import { serviceTabs } from "@/lib/specimen";
import AutoScrollRow from "./AutoScrollRow";
import ServiceGlassCard from "./ServiceGlassCard";

/**
 * Tabs with a self-moving row of ServiceGlassCards per tab (Part 4.6, 4.7).
 * On touch devices the badge orbit ring spins once when a card scrolls in.
 */
export default function ServiceTabs() {
  const [tab, setTab] = useState(0);
  const rowKey = `svc-${tab}`;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    if (reduce || !touch || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("spin");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.6 },
    );
    document
      .querySelectorAll(`#${rowKey} .badge`)
      .forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, [tab, rowKey]);

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Service groups">
        {serviceTabs.map((t, i) => (
          <button
            key={t.label}
            className="tab"
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p style={{ margin: 0, color: "var(--ink-2)" }}>{serviceTabs[tab].intro}</p>
      <div className="washsvc">
        <AutoScrollRow id={rowKey} className="sgrow" key={tab}>
          {serviceTabs[tab].cards.map((c, i) => (
            <ServiceGlassCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              line={c.line}
              group={(tab + i) % 5}
            />
          ))}
        </AutoScrollRow>
      </div>
    </>
  );
}
