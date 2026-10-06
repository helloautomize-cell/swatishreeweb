"use client";

import { useEffect, useRef, useState } from "react";
import { serviceTabs, type ServiceTab } from "@/lib/specimen";
import AutoScrollRow from "./AutoScrollRow";
import ServiceCard from "./ServiceCard";

/**
 * Tabs with a self-moving row of ServiceGlassCards per tab (Part 4.6, 4.7).
 * On touch devices the badge orbit ring spins once when a card scrolls in.
 */
export default function ServiceTabs({ groups = serviceTabs }: { groups?: ServiceTab[] }) {
  const [tab, setTab] = useState(0);
  const tabs = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!panel.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("spin"); observer.unobserve(entry.target); }
    }), { threshold: 0.6 });
    panel.current.querySelectorAll(".badge").forEach((badge) => observer.observe(badge));
    return () => observer.disconnect();
  }, [tab]);
  return <div className="service-tabs">
    <div className="tabs" role="tablist" aria-label="Service groups" ref={tabs}>
      {groups.map((group, index) => <button key={group.label} className="tab" role="tab" id={`service-tab-${index}`} aria-controls={`service-panel-${index}`} aria-selected={tab === index} tabIndex={tab === index ? 0 : -1}
        onClick={() => setTab(index)} onKeyDown={(event) => {
          let next = index;
          if (event.key === "ArrowRight") next = (index + 1) % groups.length;
          else if (event.key === "ArrowLeft") next = (index - 1 + groups.length) % groups.length;
          else if (event.key === "Home") next = 0;
          else if (event.key === "End") next = groups.length - 1;
          else return;
          event.preventDefault(); setTab(next); (tabs.current?.children[next] as HTMLElement)?.focus();
        }}>{group.label}</button>)}
    </div>
    <div ref={panel}>{groups.map((group, index) => <div key={group.label} role="tabpanel" id={`service-panel-${index}`} aria-labelledby={`service-tab-${index}`} hidden={tab !== index}>
      <p className="tab-intro">{group.intro}</p>
      <AutoScrollRow id={`svc-${index}`} className="sgrow" ariaLabel={`${group.label} services`}>
        {group.cards.map((card) => <ServiceCard key={card.slug} {...card} />)}
      </AutoScrollRow>
    </div>)}</div>
  </div>;
}
