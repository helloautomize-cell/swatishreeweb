"use client";

import { useId, type ReactNode } from "react";

const heart = "M0 4c-2-3-6.5-2-6.5 1.5C-6.5 9 0 12.5 0 12.5S6.5 9 6.5 5.5C6.5 2 2 1 0 4z";
const names = ["calendar", "clipboard", "conversation", "tests", "options", "follow-up"];

export default function VisitArtwork({ step }: { step: number }) {
  const clipId = useId();
  let artwork: ReactNode;
  switch (step) {
    case 0:
      artwork = <>
        <rect className="wh" x="36" y="40" width="68" height="60" rx="12" /><rect className="ln" x="36" y="40" width="68" height="60" rx="12" />
        <path className="ln" d="M36 58h68M54 32v16M86 32v16" /><path className="ln dr t1" pathLength="1" d="M55 79l10 10 20-20" /><circle className="acc pop t3" cx="104" cy="44" r="5" />
      </>;
      break;
    case 1:
      artwork = <>
        <rect className="wh" x="40" y="34" width="60" height="76" rx="10" /><rect className="ln" x="40" y="34" width="60" height="76" rx="10" />
        <rect className="soft" x="56" y="27" width="28" height="14" rx="5" /><rect className="ln" x="56" y="27" width="28" height="14" rx="5" />
        <path className="ln dr t1" pathLength="1" d="M53 58h34" /><path className="ln dr t2" pathLength="1" d="M53 71h34" /><path className="ln dr t3" pathLength="1" d="M53 84h20" /><path className="ln dr t4" pathLength="1" d="M76 96l5 5 10-10" />
        <g transform="translate(104 98)"><path className="rose pop t4" d={heart} /></g>
      </>;
      break;
    case 2:
      artwork = <>
        <path className="wh" d="M30 40h56a10 10 0 0 1 10 10v20a10 10 0 0 1-10 10H50l-14 11V80h-6a10 10 0 0 1-10-10V50a10 10 0 0 1 10-10z" />
        <path className="ln" d="M30 40h56a10 10 0 0 1 10 10v20a10 10 0 0 1-10 10H50l-14 11V80h-6a10 10 0 0 1-10-10V50a10 10 0 0 1 10-10z" />
        <circle className="rose blk" cx="44" cy="60" r="3.5" /><circle className="rose blk b2" cx="58" cy="60" r="3.5" /><circle className="rose blk b3" cx="72" cy="60" r="3.5" />
        <g className="pop t2"><path className="soft" d="M70 86h36a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-2v9l-11-9H70a8 8 0 0 1-8-8V94a8 8 0 0 1 8-8z" /><path className="ln" d="M70 86h36a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-2v9l-11-9H70a8 8 0 0 1-8-8V94a8 8 0 0 1 8-8z" /></g>
        <path className="ln dr t3" pathLength="1" d="M74 100h28" />
      </>;
      break;
    case 3:
      artwork = <>
        <defs><clipPath id={clipId}><path d="M58 34v54a12 12 0 0 0 24 0V34z" /></clipPath></defs>
        <path className="wh" d="M58 34v54a12 12 0 0 0 24 0V34z" /><g clipPath={`url(#${clipId})`}><rect className="acc riseup" x="56" y="66" width="28" height="40" /></g>
        <path className="ln" d="M52 34h36M58 34v54a12 12 0 0 0 24 0V34" /><path className="ln dr t2" pathLength="1" d="M24 112h20l6-10 8 18 6-8h12" />
      </>;
      break;
    case 4:
      artwork = <>
        <circle className="ln wh" cx="34" cy="72" r="8" /><path className="ln dr" pathLength="1" d="M42 72c22 0 26-30 54-30" /><path className="ln dr t1" pathLength="1" d="M42 72h56" /><path className="ln dr t2" pathLength="1" d="M42 72c22 0 26 30 54 30" />
        <circle className="soft pop t2" cx="104" cy="42" r="8" /><circle className="soft pop t3" cx="106" cy="72" r="8" /><circle className="rose pop t4" cx="104" cy="102" r="8" />
      </>;
      break;
    default:
      artwork = <>
        <g className="turn"><path className="ln" d="M104 70a34 34 0 0 1-58 24M36 70a34 34 0 0 1 58-24" /><path className="ln" d="M96 34v13H83M44 108V95h13" /></g>
        <g transform="translate(70 62) scale(1.6)"><path className="rose pop t2" d={heart} /></g>
      </>;
  }
  return <svg className="ill" viewBox="0 0 140 140" data-artwork={names[step]} aria-hidden="true"><circle className="bgc" cx="70" cy="72" r="56" />{artwork}</svg>;
}
