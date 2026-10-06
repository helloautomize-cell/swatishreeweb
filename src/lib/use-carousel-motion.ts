"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";

export function useCarouselMotion(advance: () => void, mobileOnly = false) {
  const regionRef = useRef<HTMLDivElement>(null);
  const advanceRef = useRef(advance);
  const hold = useRef({ hover: false, focus: false, touch: false, until: 0 });
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => { advanceRef.current = advance; }, [advance]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;
    let visible = !('IntersectionObserver' in window);
    const observer = visible ? null : new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer?.observe(region);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = setInterval(() => {
      const state = hold.current;
      if (visible && !media.matches && !pausedRef.current && !document.hidden && !state.hover && !state.focus && !state.touch && Date.now() >= state.until && (!mobileOnly || innerWidth < 768)) {
        advanceRef.current();
      }
    }, 4500);
    return () => { clearInterval(timer); observer?.disconnect(); };
  }, [mobileOnly]);

  const release = () => { hold.current.until = Date.now() + 6000; };
  const events = {
    onPointerEnter: (event: React.PointerEvent) => { if (event.pointerType !== 'touch') hold.current.hover = true; },
    onPointerLeave: () => { hold.current.hover = false; release(); },
    onPointerDown: () => { hold.current.touch = true; },
    onPointerUp: () => { hold.current.touch = false; release(); },
    onPointerCancel: () => { hold.current.touch = false; release(); },
    onFocusCapture: () => { hold.current.focus = true; },
    onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) { hold.current.focus = false; release(); }
    },
    onWheel: release,
  };
  return { regionRef, paused, toggle: () => setPaused((value) => !value), events };
}
