"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { conditionCards } from "@/lib/specimen";
import { CardIcon } from "./ReferenceIcons";
import { useCarouselMotion } from "@/lib/use-carousel-motion";

/** Centred carousel: side cards fade and tilt, active dot widens. */
export default function CenteredCarousel() {
  const [ref, api] = useEmblaCarousel({ align: "center", loop: true, startIndex: 1 });
  const [cur, setCur] = useState(1);
  const advance = useCallback(() => api?.scrollNext(), [api]);
  const { regionRef, events, paused, toggle } = useCarouselMotion(advance);
  useEffect(() => {
    if (!api) return;
    const update = () => setCur(api.selectedScrollSnap());
    api.on("select", update).on("reInit", update);
    return () => { api.off("select", update).off("reInit", update); };
  }, [api]);

  return (
    <div className="carousel-group" ref={regionRef} {...events}>
      <div className="car" ref={ref} tabIndex={0} role="region" aria-label="Condition guides"
        onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); if (event.key === "ArrowRight") api?.scrollNext(); else api?.scrollPrev(); } }}>
        <div className="track">
          {conditionCards.map((card, index) => {
            return (
              <article key={card.title} className={`cc${index === cur ? " on" : ""}`}>
                <div className="i"><CardIcon name={card.icon} /></div>
                <h3>{card.title}</h3><div className="sub">{card.sub}</div><p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="carnav">
        <button className="arr" type="button" aria-label="Previous" onClick={() => api?.scrollPrev()}><ArrowLeft size={18} strokeWidth={1.75} aria-hidden /></button>
        <div className="dots">{conditionCards.map((card, index) => (
          <button key={card.title} type="button" className={index === cur ? "on" : ""} aria-label={`Card ${index + 1}`} aria-current={index === cur} onClick={() => api?.scrollTo(index)} />
        ))}</div>
        <button className="arr" type="button" aria-label="Next" onClick={() => api?.scrollNext()}><ArrowRight size={18} strokeWidth={1.75} aria-hidden /></button>
        <button className="arr" type="button" aria-label={paused ? "Play condition slideshow" : "Pause condition slideshow"} aria-pressed={paused} onClick={toggle}>
          {paused ? <Play size={18} strokeWidth={1.75} aria-hidden /> : <Pause size={18} strokeWidth={1.75} aria-hidden />}
        </button>
      </div>
    </div>
  );
}
