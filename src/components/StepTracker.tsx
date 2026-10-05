"use client";

import { useEffect, useRef, useState } from "react";
import { visitSteps } from "@/lib/specimen";
import { WithConfirms } from "./ConfirmChip";

/**
 * Sticky step tracker (Part 4.8). Desktop: big number, step name and a rail
 * of dots on the left; steps right, driven by IntersectionObserver and click.
 */
export default function StepTracker() {
  const [current, setCurrent] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const steps = stepsRef.current;
    if (!steps) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setCurrent(Number((en.target as HTMLElement).dataset.i));
          }
        }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.querySelectorAll(".step").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="tracker">
      <div className="trk-side">
        <div className="trk-num" aria-hidden>
          {String(current + 1).padStart(2, "0")}
        </div>
        <div className="trk-lab">{visitSteps[current].title}</div>
        <div className="rail" aria-hidden>
          {visitSteps.map((s, i) => (
            <i key={s.title} className={i < current ? "done" : i === current ? "now" : ""} />
          ))}
        </div>
      </div>
      <div className="steps" ref={stepsRef}>
        {visitSteps.map((s, i) => (
          <div
            key={s.title}
            className={`step${i === current ? " on" : ""}`}
            data-i={i}
            tabIndex={0}
            onClick={() => setCurrent(i)}
            onKeyDown={(e) => e.key === "Enter" && setCurrent(i)}
          >
            <small>{String(i + 1).padStart(2, "0")}</small>
            <h3>{s.title}</h3>
            <p>
              <WithConfirms text={s.text} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
