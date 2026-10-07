"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function InView({ className, children, replay = false }: { className: string; children: ReactNode; replay?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.classList.add("armed");
    if (!("IntersectionObserver" in window)) {
      element.classList.add("in", "onscreen");
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      element.classList.toggle("onscreen", entry.isIntersecting);
      if (entry.isIntersecting) element.classList.add("in");
      else if (replay) element.classList.remove("in");
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [replay]);
  return <div ref={ref} className={className}>{children}</div>;
}
