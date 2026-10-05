"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Auto-moving scroll row (master prompt Part 4.6): advances every 4.5s,
 * loops, pauses on hover, focus, touch and hidden tab, resumes 6s after the
 * last interaction, visible pause/play button, progress bar, off under
 * prefers-reduced-motion. mobileOnly rows only auto-move below 768px.
 */
export default function AutoScrollRow({
  id,
  className,
  ariaLabel = "Scrolling cards",
  mobileOnly = false,
  children,
}: {
  id: string;
  className: string;
  ariaLabel?: string;
  mobileOnly?: boolean;
  children: ReactNode;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const userHold = useRef(false);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let resume: ReturnType<typeof setTimeout> | undefined;

    const active = () =>
      !reduce &&
      !pausedRef.current &&
      !userHold.current &&
      !document.hidden &&
      (!mobileOnly || window.innerWidth < 768);

    const step = () => {
      const card = row.children[0] as HTMLElement | undefined;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(row).gap || "0");
      const w = card.getBoundingClientRect().width + gap;
      const max = row.scrollWidth - row.clientWidth;
      const left = row.scrollLeft + w > max + 2 ? 0 : row.scrollLeft + w;
      row.scrollTo({ left, behavior: "smooth" });
    };
    const timer = setInterval(() => {
      if (active()) step();
    }, 4500);

    const hold = () => {
      userHold.current = true;
      clearTimeout(resume);
      resume = setTimeout(() => {
        userHold.current = false;
      }, 6000);
    };
    const events = ["pointerenter", "focusin", "touchstart", "wheel"] as const;
    events.forEach((e) => row.addEventListener(e, hold, { passive: true }));

    const upd = () => {
      const bar = barRef.current;
      if (!bar) return;
      const max = row.scrollWidth - row.clientWidth;
      bar.style.width = `${max > 0 ? Math.min(100, (row.scrollLeft / max) * 100) : 100}%`;
    };
    row.addEventListener("scroll", upd, { passive: true });
    upd();

    return () => {
      clearInterval(timer);
      clearTimeout(resume);
      events.forEach((e) => row.removeEventListener(e, hold));
      row.removeEventListener("scroll", upd);
    };
  }, [mobileOnly]);

  return (
    <>
      <div
        id={id}
        ref={rowRef}
        className={className}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        {children}
      </div>
      <div className={`ctrl${mobileOnly ? " mobile-only" : ""}`}>
        <button
          type="button"
          className="pp"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          aria-pressed={paused}
        >
          {paused ? (
            <Play size={18} strokeWidth={1.75} aria-hidden />
          ) : (
            <Pause size={18} strokeWidth={1.75} aria-hidden />
          )}
        </button>
        <span className="prog" aria-hidden>
          <i ref={barRef} />
        </span>
      </div>
    </>
  );
}
