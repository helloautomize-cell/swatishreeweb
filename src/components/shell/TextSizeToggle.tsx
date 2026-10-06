"use client";

import { useEffect, useState } from "react";

const KEY = "eve-text-size";

/** A / A+ text-size control for the utility bar. */
export default function TextSizeToggle() {
  const [large, setLarge] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (window.localStorage.getItem(KEY) === "lg") {
        setLarge(true);
        document.documentElement.dataset.textsize = "lg";
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const set = (lg: boolean) => {
    setLarge(lg);
    if (lg) {
      document.documentElement.dataset.textsize = "lg";
      window.localStorage.setItem(KEY, "lg");
    } else {
      delete document.documentElement.dataset.textsize;
      window.localStorage.setItem(KEY, "base");
    }
  };

  return (
    <span className="tsz" role="group" aria-label="Text size">
      <button type="button" aria-pressed={!large} onClick={() => set(false)}>
        A
      </button>
      <button type="button" aria-pressed={large} onClick={() => set(true)}>
        A+
      </button>
    </span>
  );
}
