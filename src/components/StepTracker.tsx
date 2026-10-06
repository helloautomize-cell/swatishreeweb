"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { visitSteps } from "@/lib/specimen";
import { WithConfirms } from "./ConfirmChip";
import AutoScrollRow from "./AutoScrollRow";
import BookButton from "./BookButton";
import InView from "./InView";
import { VisitStepIcon } from "./ReferenceIcons";
import VisitArtwork from "./VisitArtwork";

/**
 * Sticky step tracker (Part 4.8). Desktop: big number, step name and a rail
 * of dots on the left; steps right, driven by IntersectionObserver and click.
 */
export default function StepTracker({
  steps = visitSteps,
  bookHref = "#styleguide-form",
}: {
  steps?: { title: string; text: string; chips?: string[] }[];
  bookHref?: string;
}) {
  const [current, setCurrent] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  const manualSelection = useRef(false);
  const select = (index: number) => { manualSelection.current = true; setCurrent(index); };
  useEffect(() => {
    const container = stepsRef.current;
    if (!container || !("IntersectionObserver" in window)) return;
    const media = window.matchMedia("(max-width: 767px)");
    const row = container.querySelector<HTMLElement>(".steps2")!;
    const steps = [...container.querySelectorAll<HTMLElement>(".step2")];
    let observer: IntersectionObserver;
    const sync = () => {
      if (manualSelection.current) return;
      const rowBox = row.getBoundingClientRect();
      if (rowBox.bottom <= 0 || rowBox.top >= innerHeight) return;
      const target = media.matches ? rowBox.left + rowBox.width / 2 : innerHeight / 2;
      let nearest = 0;
      let distance = Infinity;
      steps.forEach((step, index) => {
        const box = step.getBoundingClientRect();
        const centre = media.matches ? box.left + box.width / 2 : box.top + box.height / 2;
        const delta = Math.abs(centre - target);
        if (delta < distance) { nearest = index; distance = delta; }
      });
      setCurrent(nearest);
    };
    const release = () => { manualSelection.current = false; sync(); };
    const keyRelease = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) release();
    };
    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(sync, media.matches ? { root: row, threshold: 0.7 } : { rootMargin: "-40% 0px -40% 0px" });
      steps.forEach((step) => observer.observe(step));
    };
    observe();
    media.addEventListener("change", observe);
    window.addEventListener("scroll", sync, { passive: true });
    row.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("wheel", release, { passive: true });
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("pointerdown", release, { passive: true });
    window.addEventListener("keydown", keyRelease);
    return () => {
      observer.disconnect(); media.removeEventListener("change", observe);
      window.removeEventListener("scroll", sync); row.removeEventListener("scroll", sync);
      window.removeEventListener("wheel", release); window.removeEventListener("touchmove", release);
      window.removeEventListener("pointerdown", release); window.removeEventListener("keydown", keyRelease);
    };
  }, []);
  return <div className="tracker2">
    <div ref={stepsRef}>
      <AutoScrollRow id="visit-steps" className="steps2" mobileOnly ariaLabel="Your first visit steps">
        {steps.map((step, index) => <div key={step.title} className={`step2${index === current ? " on" : ""}`} data-i={index} tabIndex={0} role="button" aria-current={index === current ? "step" : undefined} aria-controls="visit-guide"
          onClick={() => select(index)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(index); } }}>
          <span className="sic"><VisitStepIcon step={index} /></span><div><small>{String(index + 1).padStart(2, "0")}</small><h3>{step.title}</h3><p><WithConfirms text={step.text} /></p>
            {(step.chips?.length ?? 0) > 0 && <div className="chips">{step.chips!.map((chip) => <span className="chip" key={chip}><Check size={14} strokeWidth={1.75} aria-hidden />{chip}</span>)}</div>}
          </div>
        </div>)}
      </AutoScrollRow>
    </div>
    <aside className="trk-side2" id="visit-guide" aria-label="Current visit step">
      <div className="trk-card"><span className="eyebrow">Step</span><div className="trk-top"><span className="trk-num">{String(current + 1).padStart(2, "0")}</span><span className="trk-of">/ {String(steps.length).padStart(2, "0")}</span></div>
        <h3 className="trk-lab">{steps[current]?.title}</h3>
        <InView className="trk-ill" key={current}><VisitArtwork step={current} /></InView>
        <div className="rail2" aria-hidden>{steps.map((step, index) => <i key={step.title} className={index < current ? "done" : index === current ? "now" : ""} />)}</div>
        <BookButton href={bookHref} />
      </div>
    </aside>
  </div>;
}
