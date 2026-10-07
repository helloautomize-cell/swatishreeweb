import { ArrowRight, Check, Clock, Phone, Heart, Sprout, RefreshCw, Droplet, FlaskConical, Snowflake, Activity, Sun } from "lucide-react";
import { concerns, heroCopy, whyCards } from "@/lib/specimen";
import Image from "next/image";
import { WhyIcon } from "./ReferenceIcons";
import { brand, site } from "@/lib/site-config";
import BookButton from "./BookButton";
import DoctorPortrait from "./DoctorPortrait";
import InView from "./InView";
import AutoScrollRow from "./AutoScrollRow";
import { WithConfirms } from "./ConfirmChip";

export function HeroB() {
  return <div className="site-specimen">
    <div className="mini-hdr"><Image src={`/images/${brand.logoFull}`} width={143} height={44} alt={site.name} loading="lazy" unoptimized style={{ width: "auto", height: 44 }} /><span>Doctor-led care</span><BookButton href="#styleguide-form" /></div>
    <InView className="hero2 hb">
      <div className="media">
        <div className="hb-blob2" /><div className="hb-blob" />
        <svg className="hb-line" viewBox="0 0 400 500" aria-hidden><path className="l" pathLength="1" d="M34 486C6 380 18 230 92 140C150 70 250 52 318 98C372 136 388 214 360 276C346 306 330 322 336 346C341 364 362 368 370 352" /><path className="heart" d="M366 336c-4-6-13-4-13 3 0 6 13 13 13 13s13-7 13-13c0-7-9-9-13-3z" /></svg>
        <div className="hb-fig"><DoctorPortrait slot="D1" id="hero" priority /></div>
        <div className="glasschip name"><span className="seal-mini">MRCOG</span><span><b>Dr. Swati Shree</b><small>MBBS, DNB (OBG), MRCOG (UK)</small></span></div>
        <div className="glasschip c2"><span className="gi"><Clock size={18} strokeWidth={1.75} aria-hidden /></span><span>Unhurried visits<small>Time for every question</small></span></div>
      </div>
      <div className="head"><span className="eyebrow">{heroCopy.eyebrow}</span><h1>{heroCopy.h1Before}<em className="acc">{heroCopy.h1Accent}</em></h1></div>
      <div className="body"><p className="sub">{heroCopy.sub}</p><p className="mline">{heroCopy.mobileLine}</p>
        <div className="btns"><BookButton href="#styleguide-form" /><a className="btn btn-s hero-call" href={`tel:${site.phones[0].e164}`} aria-label={`Call ${site.phones[0].display}`}><Phone size={20} strokeWidth={1.75} aria-hidden /><span>Call {site.phones[0].display}</span></a></div>
        <div className="creds">{["A full evaluation first", "Every option explained", "One doctor throughout"].map((text) => <span key={text}><Check size={16} strokeWidth={1.75} aria-hidden /><b>{text}</b></span>)}</div>
      </div>
    </InView>
  </div>;
}

export function ConcernRows({
  label = "What brings you here today",
  items = concerns.map(([title, href, line]) => ({ label: title, href, line })),
  labelAs: LabelTag = "h3",
}: {
  label?: string;
  items?: { label: string; href: string; line?: string }[];
  labelAs?: "h2" | "h3";
}) {
  const icons = [Sprout, RefreshCw, Heart, Droplet, FlaskConical, Snowflake, Activity, Sun];
  return <div className="cwrap"><LabelTag className="cwrap-label">{label}</LabelTag><div className="concern-b">{items.map(({ label: title, href, line }, index) => {
    const Icon = icons[index % icons.length];
    return <a className="crow" href={href} key={href}><span className="ci"><Icon size={22} strokeWidth={1.75} aria-hidden /></span><span><b>{title}</b>{line ? <small>{line}</small> : null}</span><span className="go"><ArrowRight size={18} strokeWidth={1.75} aria-hidden /></span></a>;
  })}</div></div>;
}

export function WhyBento({ cards = whyCards }: { cards?: { title: string; text: string }[] }) {
  const ordered = [4, 0, 2, 3, 1, 5];
  return <InView className="bgsoft wc" replay><AutoScrollRow id="why-bento" className="bento" mobileOnly ariaLabel="Why EVE">
    {ordered.map((index) => {
      const card = cards[index];
      if (!card) return null;
      return <article className={`gcard${index === 4 ? " feat" : index === 5 ? " full" : ""}`} key={card.title}>
        {index !== 4 && <span className="i"><WhyIcon index={index} /></span>}
        {index === 4 && <span className="eyebrow">The heart of EVE</span>}
        <h3>{card.title}</h3><p><WithConfirms text={card.text} /></p>
        {index === 4 && <svg className="journey" viewBox="0 0 560 120" role="img" aria-label="First visit, tests, options, treatment and follow-up with one doctor">
          <path className="track-path" d="M30 70C120 10 200 130 290 70S460 10 530 70" /><path className="done-path" pathLength="1" d="M30 70C120 10 200 130 290 70S460 10 530 70" />
          {[[30,70,"First visit"],[160,62,"Tests"],[290,70,"Options"],[420,40,"Treatment"],[530,70,"Follow-up"]].map(([x,y,label]) => <g key={label}><circle className="node" cx={x} cy={y} r="7" /><text x={x} y={Number(y)+30} textAnchor="middle">{label}</text></g>)}
          <circle className="travel" r="6" cx="0" cy="0">
            <animateMotion dur="9s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.85;1" calcMode="linear" path="M30 70C120 10 200 130 290 70S460 10 530 70" />
          </circle>
        </svg>}
      </article>;
    })}
  </AutoScrollRow></InView>;
}
