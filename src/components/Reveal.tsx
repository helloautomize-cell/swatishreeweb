"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Scroll reveal: children fade + rise 16px once when scrolled into view,
 * staggered 70ms via CSS nth-child delays. The hidden state is only armed
 * by JS (rv-armed), so content renders fully with JS off or before mount.
 */
export default function Reveal({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("rv-armed");
    if (!("IntersectionObserver" in window)) {
      el.classList.add("rv-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rv-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className ? `rv ${className}` : "rv"}>
      {children}
    </div>
  );
}
