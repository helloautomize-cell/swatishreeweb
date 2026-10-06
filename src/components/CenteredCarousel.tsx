"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { conditionCards } from "@/lib/specimen";
import { assetEntry } from "@/lib/images";

const badgeMap: Record<string, string> = {
  pcos: "badge-pcos.png",
  endometriosis: "badge-endometriosis.png",
  "pregnancy-loss": "badge-pregnancy-loss.png",
  thyroid: "badge-thyroid.png",
  fibroids: "badge-fibroids.png",
  menopause: "badge-menopause.png",
};

/** Centred carousel: side cards fade and tilt, active dot widens. */
export default function CenteredCarousel() {
  const [cur, setCur] = useState(1);
  const carRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const n = conditionCards.length;

  const go = useCallback(
    (i: number) => {
      const next = ((i % n) + n) % n;
      setCur(next);
      const car = carRef.current;
      const track = trackRef.current;
      if (!car || !track || !track.children[0]) return;
      const card = track.children[0] as HTMLElement;
      const cw = card.offsetWidth + 24;
      const off = car.offsetWidth / 2 - card.offsetWidth / 2 - next * cw;
      track.style.transform = `translateX(${off}px)`;
    },
    [n],
  );

  useEffect(() => {
    go(1);
    const onResize = () => go(cur);
    window.addEventListener("resize", onResize);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce
      ? undefined
      : setInterval(() => {
          if (!hoverRef.current && !document.hidden) go(cur + 1);
        }, 4500);
    return () => {
      window.removeEventListener("resize", onResize);
      if (timer) clearInterval(timer);
    };
  }, [cur, go]);

  const drag = useRef<number | null>(null);

  return (
    <>
      <div
        className="car"
        ref={carRef}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerLeave={() => (hoverRef.current = false)}
        onPointerDown={(e) => (drag.current = e.clientX)}
        onPointerUp={(e) => {
          if (drag.current !== null && Math.abs(e.clientX - drag.current) > 40) {
            go(cur + (e.clientX < drag.current ? 1 : -1));
          }
          drag.current = null;
        }}
      >
        <div className="track" ref={trackRef}>
          {conditionCards.map((c, i) => {
            const asset = assetEntry(badgeMap[c.icon]);
            return (
              <article
                key={c.title}
                className={`cc${i === cur ? " on" : ""}`}
                aria-hidden={i !== cur}
                onClick={() => go(i)}
              >
                <div className="i">
                  {asset ? (
                    <img src={asset.src} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
                  ) : null}
                </div>
                <h3>{c.title}</h3>
                <div className="sub">{c.sub}</div>
                <p>{c.text}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="carnav">
        <button className="arr" type="button" aria-label="Previous" onClick={() => go(cur - 1)}>
          <ArrowLeft size={18} strokeWidth={1.75} aria-hidden />
        </button>
        <div className="dots">
          {conditionCards.map((c, i) => (
            <button
              key={c.title}
              type="button"
              className={i === cur ? "on" : ""}
              aria-label={`Card ${i + 1}`}
              aria-current={i === cur}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button className="arr" type="button" aria-label="Next" onClick={() => go(cur + 1)}>
          <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </>
  );
}
