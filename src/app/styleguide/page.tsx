import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  CircleAlert,
  Clock,
  Heart,
  Info,
  Lightbulb,
  MapPin,
  Menu,
  MessageCircle,
  Pause,
  Phone,
  Play,
  Plus,
  Shield,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import AutoScrollRow from "@/components/AutoScrollRow";
import BookButton from "@/components/BookButton";
import Callout from "@/components/Callout";
import CenteredCarousel from "@/components/CenteredCarousel";
import ComparisonTable from "@/components/ComparisonTable";
import ConfirmChip, { WithConfirms } from "@/components/ConfirmChip";
import DoctorCard from "@/components/DoctorCard";
import EveImage from "@/components/EveImage";
import FaqAccordion from "@/components/FaqAccordion";
import PhoneFrame from "@/components/PhoneFrame";
import SpecimenForm from "@/components/SpecimenForm";
import StepTracker from "@/components/StepTracker";
import ServiceTabs from "@/components/ServiceTabs";
import { allAssets, assetEntry } from "@/lib/images";
import { heroCopy, whyCards } from "@/lib/specimen";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const swatches: [string, string, string, string][] = [
  ["#5C7450", "Primary · logo sage", "5.16:1 on white", "--primary"],
  ["#26382C", "Secondary · deep moss", "12.47:1", "--secondary"],
  ["#4F6445", "Sage text", "6.48:1 · links, eyebrows", "--primary-500"],
  ["#3E5236", "Sage pressed", "8.52:1", "--primary-700"],
  ["#E5ECDF", "Sage tint", "tabs, chips, tiles", "--primary-100"],
  ["#F4F7F1", "Sage wash", "section tints", "--primary-50"],
  ["#FCE4E8", "Blush · logo background", "washes, soft panels", "--blush-100"],
  ["#FFF6F8", "Blush wash", "hero and section tints", "--blush-50"],
  ["#A24560", "Rose · accent word", "5.90:1 · italic accent only", "--rose"],
  ["#1F2D26", "Ink", "text · 14.37:1", "--ink"],
  ["#55655B", "Ink soft", "captions · 6.18:1", "--ink-2"],
  ["#E3E8DF", "Line", "borders", "--line"],
  ["#A8C49A", "Sage light", "glow only", "--glow"],
  ["#F4B3C1", "Blush rose", "glow only", "--accent"],
  ["#C8302A", "Alert red", "emergency · 5.37:1", "--alert"],
  ["#2F7D5B", "Success", "4.99:1", "--success"],
  ["#F2B233", "Star", "rating icon only", "--star"],
];

const dot = (hex: string): React.CSSProperties => ({
  display: "inline-block",
  width: 14,
  height: 14,
  borderRadius: "50%",
  background: hex,
  border: "1px solid var(--line)",
  marginRight: 8,
  verticalAlign: -2,
});

const contrast: [React.ReactNode, string, string, boolean][] = [
  [<span className="pv" style={{ color: "#1F2D26" }}>Ink #1F2D26</span>, "White / sage wash / blush wash", "14.37 / 13.29 / 13.54", true],
  [<span className="pv" style={{ color: "#55655B" }}>Ink soft #55655B</span>, "White / sage tint / blush", "6.18 / 5.12 / 5.12", true],
  [<span className="pv" style={{ color: "#4F6445" }}>Sage text #4F6445</span>, "White / wash / tint", "6.48 / 5.99 / 5.37", true],
  [<span className="pv" style={{ color: "#5C7450" }}>Sage #5C7450</span>, "White / sage wash", "5.16 / 4.77", true],
  [<span className="pv" style={{ background: "#5C7450", color: "#fff" }}>White on sage</span>, "#5C7450", "5.16", true],
  [<span className="pv" style={{ background: "#26382C", color: "#fff" }}>White on deep moss</span>, "#26382C", "12.47", true],
  [<span className="pv" style={{ color: "#A24560" }}>Rose #A24560</span>, "White / blush wash / blush", "5.90 / 5.56 / 4.89", true],
  [<span className="pv" style={{ color: "#C8302A" }}>Alert #C8302A</span>, "White", "5.37", true],
  [<span className="pv" style={{ color: "var(--ink)" }}><i style={dot("#A8C49A")} />Sage light #A8C49A</span>, "White", "1.90", false],
  [<span className="pv" style={{ color: "var(--ink)" }}><i style={dot("#F4B3C1")} />Blush rose #F4B3C1</span>, "White", "1.74", false],
];

const faqs = [
  {
    q: "How do I book a consultation?",
    a: "Use the form, call 72049 21212 or 72049 21516. We confirm your slot as soon as we can.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring past reports, scans and prescriptions. If you are trying to conceive, note the dates of your last few periods. Partners are welcome.",
  },
  {
    q: "Who will I see at EVE?",
    a: "Dr. Swati listens first, asks about your history and examines you. There is time for every question.",
  },
];

const badgeSample = ["badge-fertility-evaluation.png", "badge-ivf.png", "badge-pcos.png"];
const spotIcons = allAssets.filter((f) => /^(glance|step|stage|faq|cat|why)-/.test(f));
const lucideIcons = [
  CalendarDays, Phone, MessageCircle, ArrowRight, ArrowLeft, Plus, Info,
  CircleAlert, Lightbulb, Clock, MapPin, Star, Menu, X, ChevronDown, Check,
  Pause, Play, Shield, Heart, Sparkles,
];

function Section({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="sec-h">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <main className="sg">
      <div className="container-eve" style={{ paddingBlock: "40px 120px" }}>
        <p style={{ fontSize: 14, color: "var(--ink-2)", maxWidth: 560 }}>
          Style guide for the EVE Women and Fertility Clinic website. Locked
          colours, type, buttons, glass cards, badges and motion, using real
          EVE content. Internal page, never indexed.
        </p>

        <Section
          eyebrow="Colour · locked"
          title={<>Sage, blush and deep <em className="acc">moss</em></>}
          intro="Every text colour has a tested contrast ratio. Decorative colours are never used for text."
        >
          <div className="gradbar">
            <span>Brand gradient</span>
            <span>#5C7450 to #26382C</span>
          </div>
          <div className="swatches">
            {swatches.map(([hex, name, meta, token]) => (
              <div className="sw" key={token}>
                <div style={{ background: hex, borderBottom: "1px solid var(--line)" }} />
                <p>
                  <b>{name}</b>
                  <span>
                    {hex} · {meta}
                  </span>
                  <code>{token}</code>
                </p>
              </div>
            ))}
          </div>
          <table className="ct">
            <thead>
              <tr>
                <th>Text / element</th>
                <th>On</th>
                <th>Ratio</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {contrast.map(([cell, on, ratio, ok], i) => (
                <tr key={i}>
                  <td>{cell}</td>
                  <td>{on}</td>
                  <td>{ratio}</td>
                  <td className={ok ? "ok" : "no"}>{ok ? "Pass" : "Never text"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section
          eyebrow="Logo"
          title={<>EVE logo in <em className="acc">use</em></>}
          intro="Full logo on white, white on gradient, the mark alone for favicon and app icon. PNGs stand in until the approved SVG set arrives."
        >
          <div className="logos">
            <figure>
              <img src="/images/brand/logo-full-transparent.png" alt="EVE full logo" />
              <figcaption>Full · on white</figcaption>
            </figure>
            <figure className="on-grad">
              <img src="/images/brand/logo-white-transparent.png" alt="EVE white logo" />
              <figcaption>White · on gradient or deep moss</figcaption>
            </figure>
            <figure>
              <img src="/images/brand/logo-mark-transparent.png" alt="EVE mother and child mark" style={{ maxHeight: 80 }} />
              <figcaption>Mark · favicon, app icon</figcaption>
            </figure>
          </div>
        </Section>

        <Section
          eyebrow="Typography · locked"
          title={<>Figtree, with one <em className="acc">serif accent</em></>}
          intro="Figtree for everything. Instrument Serif italic for a single accent word in a heading. Body text never drops below 17px."
        >
          <div className="type">
            <div className="row">
              <span className="lab">Display · 64/68 · 700</span>
              <span className="t-display">
                Fertility care built around <em className="acc">you</em>
              </span>
            </div>
            <div className="row">
              <span className="lab">H1 · 52/58 · 700</span>
              <span className="t-h1">
                PCOS and <em className="acc">fertility</em>
              </span>
            </div>
            <div className="row">
              <span className="lab">H2 · 40/48 · 650</span>
              <span className="t-h2">Your first visit, step by step</span>
            </div>
            <div className="row">
              <span className="lab">H3 · 22/30 · 600</span>
              <span className="t-h3">What happens at EVE</span>
            </div>
            <div className="row">
              <span className="lab">Body large · 19/30</span>
              <span className="t-lg">
                Every journey starts with a complete evaluation, so each option is explained before any decision is made.
              </span>
            </div>
            <div className="row">
              <span className="lab">Body · 17/28</span>
              <span>
                Bring past reports, scans and prescriptions. If you are trying to conceive, note the first day of your last few periods.
              </span>
            </div>
            <div className="row">
              <span className="lab">Small · 14/20 · 500</span>
              <span className="t-sm">Written by Dr. Swati Shree · 6 min read</span>
            </div>
            <div className="row">
              <span className="lab">Eyebrow · 13 · 600</span>
              <span className="eyebrow">03 / How we can help</span>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Buttons and links"
          title={<>Clear actions, gentle <em className="acc">motion</em></>}
          intro="The two-part Book button is the main action: sage icon block, deep moss label, single line. Hover each one."
        >
          <div className="btns">
            <BookButton />
            <button className="btn btn-p" type="button">
              Book with Dr. Swati
            </button>
            <button className="btn btn-s" type="button">
              Call 72049 21212
            </button>
            <button className="btn wa-btn" type="button">
              WhatsApp
            </button>
            <a className="link" href="#doctor">
              View profile <ArrowRight size={16} strokeWidth={1.75} />
            </a>
          </div>
          <div className="btns">
            <a className="gchip" href="#">
              <Star size={16} strokeWidth={1.75} aria-hidden />
              <b>
                <ConfirmChip note="rating" />
              </b>{" "}
              on Google · <ConfirmChip note="count" /> reviews
            </a>
            <span style={{ fontSize: 14, color: "var(--ink-2)" }}>
              Google rating chip: Visit band, Contact block and footer only. Never in the hero or next to Dr. Swati.
            </span>
          </div>
          <div className="btns">
            <button className="btn btn-p" type="button" disabled>
              Disabled
            </button>
            <button className="btn btn-p" type="button">
              <span className="spinner" aria-hidden /> Loading
            </button>
          </div>
        </Section>

        <Section
          eyebrow="Hero"
          title={<>One doctor, one <em className="acc">portrait</em></>}
          intro="The hero is a single large portrait card. No fan, no swap. The interim portrait is preloaded and never animated."
        >
          <div className="hero">
            <div>
              <span className="eyebrow">{heroCopy.eyebrow}</span>
              <h1>
                {heroCopy.h1Before}
                <em className="acc">{heroCopy.h1Accent}</em>
              </h1>
              <p className="sub">{heroCopy.sub}</p>
              <div className="btns">
                <BookButton />
                <a className="btn btn-s" href="#">
                  Call 72049 21212
                </a>
              </div>
              <div className="hchips">
                {heroCopy.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="chip-doc">
                <EveImage src="doctor/doctor-avatar-1x1.png" sizes="42px" />
                <span>
                  Doctor-led care
                  <small>Dr. Swati Shree, MRCOG (UK)</small>
                </span>
              </div>
            </div>
            <div className="portrait">
              <span className="tag">
                <Clock size={18} strokeWidth={1.8} aria-hidden />
                {heroCopy.tag}
              </span>
              <figure>
                <EveImage
                  src="doctor/doctor-hero-portrait-4x5-INTERIM.png"
                  sizes="(min-width: 900px) 400px, 100vw"
                  objectPosition="50% 12%"
                  priority
                />
                <figcaption>
                  Dr. Swati Shree
                  <small>MBBS · DNB (OBG) · MRCOG (UK)</small>
                </figcaption>
              </figure>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="01 / Why EVE"
          title={<>Time, honesty and <em className="acc">options</em></>}
          intro="Glass cards over a blush tint with a rose glow, so the blur reads. Facts only. They lift on hover."
        >
          <div className="bgsoft">
            <AutoScrollRow id="whycards" className="cards swipe" mobileOnly>
              {whyCards.map((c) => (
                <div className="gcard" key={c.title}>
                  <span className="i">
                    {(() => {
                      const a = assetEntry(c.icon);
                      return a ? (
                        <img src={a.src} alt="" width={28} height={28} style={{ objectFit: "contain" }} />
                      ) : (
                        <Info size={24} strokeWidth={1.75} />
                      );
                    })()}
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </AutoScrollRow>
          </div>
        </Section>

        <Section
          eyebrow="03 / How we can help"
          title={<>Care for every stage, every <em className="acc">question</em></>}
          intro="Each service is a glass arch card carrying its illustrated badge, with a slow living gradient behind it. Hover: the orbit ring spins once, the badge lifts and turns like a coin, and a sheen passes."
        >
          <ServiceTabs />
        </Section>

        <Section
          eyebrow="04 / Your first visit"
          title={<>Your first visit, step by <em className="acc">step</em></>}
          intro="On the site this follows your scroll. Click a step or scroll the page. Inactive steps stay readable."
        >
          <StepTracker />
        </Section>

        <Section
          eyebrow="Health Library and conditions"
          title={<>Centred <em className="acc">carousel</em></>}
          intro="Side cards fade and tilt; the active dot widens into a pill. Arrows, dots or swipe."
        >
          <CenteredCarousel />
        </Section>

        <Section
          eyebrow="05 / Meet your doctor"
          title={<>Meet <em className="acc">Dr. Swati Shree</em></>}
          intro="One doctor, so one wide feature card. Both card sizes shown. No star ratings."
        >
          <div id="doctor" style={{ display: "grid", gap: 24 }}>
            <DoctorCard />
            <div style={{ maxWidth: 560 }}>
              <DoctorCard compact />
            </div>
          </div>
        </Section>

        <Section eyebrow="Callouts" title={<>Medical page <em className="acc">notices</em></>}>
          <Callout variant="em">
            <b>When to get help straight away.</b> Call 108 or 112, or go to the
            nearest hospital emergency, if you have very heavy bleeding, sudden
            severe pelvic or abdominal pain, fainting, or any bleeding with pain
            during pregnancy.
          </Callout>
          <Callout variant="info">
            <b>Medically reviewed by</b> Dr. Swati Shree, MBBS, DNB (OBG), MRCOG
            (UK) · <ConfirmChip note="State Medical Council registration no." /> ·
            Last reviewed <ConfirmChip note="sign-off date" />
          </Callout>
          <Callout variant="warn">
            <b>Tip.</b> Many fertility checks are timed to your cycle. Note the
            first day of your last period before you call.
          </Callout>
          <p style={{ margin: 0, fontSize: 14, color: "var(--ink-2)" }}>
            The yellow chip shows in development only. It is hidden in
            production, and <code>npm run launch-check</code> fails while any
            remain.
          </p>
        </Section>

        <Section
          eyebrow="Service badges"
          title={<>Badges at every <em className="acc">size</em></>}
          intro="The generated badge set in sm, md and lg, plus the spot-icon grid and the Lucide grid. Alt text waits for asset-manifest.json."
        >
          <h3 style={{ fontSize: 17 }}>Badge sizes · sm 56, md 112, lg 200</h3>
          <div className="bgrid">
            {badgeSample.map((f) =>
              (["sz-sm", "sz-md", "sz-lg"] as const).map((sz) => {
                const a = assetEntry(f);
                if (!a) return null;
                return (
                  <figure key={sz} className={sz}>
                    <img src={a.src} alt="" />
                    <figcaption>
                      {f.replace("badge-", "").replace(".png", "")} · {sz.replace("sz-", "")}
                    </figcaption>
                  </figure>
                );
              }),
            )}
          </div>
          <h3 style={{ fontSize: 17 }}>Spot icons</h3>
          <div className="igrid">
            {spotIcons.map((f) => {
              const a = assetEntry(f);
              if (!a) return null;
              return (
                <figure key={f}>
                  <img src={a.src} alt="" />
                  <figcaption>{f.replace(".png", "")}</figcaption>
                </figure>
              );
            })}
          </div>
          <h3 style={{ fontSize: 17 }}>Lucide icons · stroke 1.75</h3>
          <div className="igrid">
            {lucideIcons.map((Icon, i) => (
              <figure key={i}>
                <Icon size={24} strokeWidth={1.75} />
                <figcaption>{Icon.displayName ?? `icon-${i}`}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Forms"
          title={<>Every state, one <em className="acc">form</em></>}
          intro="Labels above, helpers under, validation on blur, error summary on submit, unticked consent."
        >
          <SpecimenForm />
        </Section>

        <Section
          eyebrow="FAQs"
          title={<>Quick <em className="acc">answers</em></>}
          intro="Native details and summary, so it works without JavaScript. Specimen questions pending the content file."
        >
          <FaqAccordion items={faqs} />
        </Section>

        <Section
          eyebrow="Comparison"
          title={<>IUI or <em className="acc">IVF</em></>}
          intro="A real table on desktop, stacked key-value blocks on mobile. Never a sideways scroll."
        >
          <ComparisonTable />
        </Section>

        <Section
          eyebrow="Mobile"
          title={<>Fixed action bar, in EVE <em className="acc">sage</em></>}
          intro="Shown on every page below 1024px."
        >
          <PhoneFrame />
        </Section>
      </div>
    </main>
  );
}
