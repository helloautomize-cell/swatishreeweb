"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useCarouselMotion } from "@/lib/use-carousel-motion";

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
  const [progress, setProgress] = useState(0);
  const move = useCallback((direction: number) => {
    const row = rowRef.current;
    const card = row?.children[0] as HTMLElement | undefined;
    if (!row || !card || !row.offsetWidth) return;
    const width = card.getBoundingClientRect().width + parseFloat(getComputedStyle(row).gap || "0");
    const max = row.scrollWidth - row.clientWidth;
    const next = row.scrollLeft + direction * width;
    row.scrollTo({ left: next > max + 2 ? 0 : next < -2 ? max : next, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }, []);
  const advance = useCallback(() => move(1), [move]);
  const { regionRef, events, paused, toggle } = useCarouselMotion(advance, mobileOnly);
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const update = () => {
      const max = row.scrollWidth - row.clientWidth;
      setProgress(max > 0 ? Math.min(100, row.scrollLeft / max * 100) : 100);
    };
    row.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(row);
    return () => { row.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);

  return (
    <div className="carousel-group" ref={regionRef} {...events}>
      <div id={id} ref={rowRef} className={className} role="region" aria-label={ariaLabel} tabIndex={0}
        onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
        {children}
      </div>
      <div className={`ctrl${mobileOnly ? " mobile-only" : ""}`}>
        <button type="button" className="pp" aria-label="Previous cards" onClick={() => move(-1)}><ArrowLeft size={18} strokeWidth={1.75} aria-hidden /></button>
        <button type="button" className="pp" onClick={toggle} aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused}>
          {paused ? <Play size={18} strokeWidth={1.75} aria-hidden /> : <Pause size={18} strokeWidth={1.75} aria-hidden />}
        </button>
        <button type="button" className="pp" aria-label="Next cards" onClick={() => move(1)}><ArrowRight size={18} strokeWidth={1.75} aria-hidden /></button>
        <span className="prog" aria-hidden><i style={{ width: `${progress}%` }} /></span>
      </div>
    </div>
  );
}
