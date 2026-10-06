import type { ReactNode } from "react";

export function WhyIcon({ index }: { index: number }) {
  let shape: ReactNode;
  switch (index) {
    case 0:
      shape = <g className="mi-clock"><circle cx="12" cy="12" r="9" pathLength="1" /><path className="hand" d="M12 7v5l3 2" pathLength="1" /></g>;
      break;
    case 1:
      shape = <g className="mi-cap"><path d="M3 9l9-5 9 5-9 5z" pathLength="1" /><path d="M7 11.5V16c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" pathLength="1" /></g>;
      break;
    case 2:
      shape = <g className="mi-look"><g className="lens"><circle cx="11" cy="11" r="6" pathLength="1" /><path d="M15.5 15.5L20 20" pathLength="1" /></g></g>;
      break;
    case 3:
      shape = <g className="mi-chat"><path d="M4 5h16v11H9l-5 4z" pathLength="1" /><circle className="d" cx="9" cy="10.5" r=".9" fill="currentColor" /><circle className="d" cx="12" cy="10.5" r=".9" fill="currentColor" /><circle className="d" cx="15" cy="10.5" r=".9" fill="currentColor" /></g>;
      break;
    case 4:
      shape = <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" pathLength="1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" pathLength="1" /></>;
      break;
    default:
      shape = <g className="mi-home"><path d="M4 11l8-7 8 7v9H4z" pathLength="1" /><path className="door" d="M10 20v-5h4v5" fill="none" pathLength="1" /></g>;
  }
  return <svg className="draw" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shape}</svg>;
}

export function CardIcon({ name }: { name: string }) {
  let shape: ReactNode;
  switch (name) {
    case "ovary":
      shape = <><circle cx="9" cy="12" r="5" /><circle cx="8" cy="10" r="1" /><circle cx="11" cy="13" r="1" /><circle cx="7" cy="14" r=".8" /><path d="M14 10c3-1 5 0 7 2" /></>;
      break;
    case "pain":
      shape = <path d="M13 3L5 13h6l-1 8 8-10h-6z" />;
      break;
    case "loss":
      shape = <><path d="M12 20s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.5-8 11-8 11z" /><path d="M9 11h6" /></>;
      break;
    case "thy":
      shape = <path d="M8 6c-3 2-3 9 0 11 2 1 3-1 4-3 1 2 2 4 4 3 3-2 3-9 0-11-2-1-3 2-4 4-1-2-2-5-4-4z" />;
      break;
    case "fibroid":
      shape = <><path d="M12 6c-4 0-6 3-6 6s2 6 6 6 6-3 6-6-2-6-6-6z" /><circle cx="14" cy="11" r="2" /></>;
      break;
    default:
      shape = <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" /></>;
  }
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shape}</svg>;
}

export function VisitStepIcon({ step }: { step: number }) {
  let shape: ReactNode;
  switch (step) {
    case 0:
      shape = <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18M8.5 15l2.5 2.5 4.5-4.5" /></>;
      break;
    case 1:
      shape = <><rect x="5" y="4" width="14" height="17" rx="2.5" /><rect x="9" y="2.5" width="6" height="3.5" rx="1.2" /><path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" /></>;
      break;
    case 2:
      shape = <><path d="M3.5 5h12v8.5H8l-4.5 3.5z" /><path d="M11 16.5h5.5l4 3v-9h-2" /></>;
      break;
    case 3:
      shape = <><path d="M9 3h6M10 3v14a2 2 0 0 0 4 0V3" /><path d="M10 11h4" /></>;
      break;
    case 4:
      shape = <><circle cx="5" cy="12" r="2" /><path d="M7 12h3c3 0 4-6 7-6M10 12h9M10 12c3 0 4 6 7 6" /></>;
      break;
    default:
      shape = <><path d="M20 12a8 8 0 0 1-13.7 5.6M4 12A8 8 0 0 1 17.7 6.4" /><path d="M18 2.5v4h-4M6 21.5v-4h4" /></>;
  }
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shape}</svg>;
}
