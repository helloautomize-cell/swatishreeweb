import type { Metadata } from "next";
import Image from "next/image";
import AssetImage from "@/components/AssetImage";
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
import { HeroB, ConcernRows, WhyBento } from "@/components/SignatureSpecimens";
import EveImage from "@/components/EveImage";
import InView from "@/components/InView";
import LineAccent from "@/components/LineAccent";
import Reveal from "@/components/Reveal";
import BookButton from "@/components/BookButton";
import Callout from "@/components/Callout";
import CenteredCarousel from "@/components/CenteredCarousel";
import ComparisonTable from "@/components/ComparisonTable";
import ConfirmChip from "@/components/ConfirmChip";
import DoctorCard from "@/components/DoctorCard";
import FaqAccordion from "@/components/FaqAccordion";
import PhoneFrame from "@/components/PhoneFrame";
import SpecimenForm from "@/components/SpecimenForm";
import StepTracker from "@/components/StepTracker";
import ServiceTabs from "@/components/ServiceTabs";
import { allAssets, assetEntry } from "@/lib/images";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const swatches: [string, string, string, string][] = [
  ["#F8F3EA", "Cream · page background", "~55-60% of surfaces · bg only", "--cream"],
  ["#FFFFFF", "White · cards, photo frames", "~20% · bg only", "--white"],
  ["#EFE6D6", "Sand · footer, warm panels", "~10% · bg only", "--sand"],
  ["#E9EEE3", "Sage tint · feature bands", "~8% · bg only", "--sage-tint"],
  ["#9CAF88", "Sage · brand, line art, icons", "decoration · never text", "--sage"],
  ["#5F7350", "Sage deep · buttons, links", "white text 5.18:1", "--sage-deep"],
  ["#4E6142", "Sage deep 2 · button icon block", "white icon 6.75:1", "--sage-deep-2"],
  ["#6B4F3A", "Brown · headings and body", "text · 6.77:1 on cream", "--brown"],
  ["#7A5A3E", "Brown soft · muted text", "text · 5.66:1 on cream", "--ink-2"],
  ["#C17F5A", "Terracotta · heart, line accents", "decoration · never text", "--terracotta"],
  ["#9A5534", "Terracotta deep · accent word, focus ring", "text · 5.10:1 on cream", "--terracotta-deep"],
  ["#B79A62", "Gold · credential seal rings", "decoration · never text", "--gold"],
  ["#E4D9C4", "Line · borders", "structure only", "--line"],
  ["#C8302A", "Alert red · medical emergency", "text · 4.86:1 on cream", "--alert"],
  ["#1F8F55", "WhatsApp green · WA button only", "brand exception", "--wa"],
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
  [<span key="contrast" className="pv" style={{ color: "#6B4F3A" }}>Brown #6B4F3A</span>, "Cream / white / sand / sage tint", "6.77 / 7.49 / 6.05 / 6.35", true],
  [<span key="contrast" className="pv" style={{ color: "#7A5A3E" }}>Brown soft #7A5A3E</span>, "Cream / white / sand / sage tint", "5.66 / 6.25 / 5.05 / 5.30", true],
  [<span key="contrast" className="pv" style={{ color: "#5F7350" }}>Sage deep #5F7350</span>, "Cream / white", "4.69 / 5.18", true],
  [<span key="contrast" className="pv" style={{ background: "#5F7350", color: "#fff" }}>White on sage deep</span>, "#5F7350 / #4E6142", "5.18 / 6.75", true],
  [<span key="contrast" className="pv" style={{ color: "#9A5534" }}>Terracotta deep #9A5534</span>, "Cream / white / sage tint", "5.10 / 5.64 / 4.78", true],
  [<span key="contrast" className="pv" style={{ color: "#C8302A" }}>Alert #C8302A</span>, "Cream / white", "4.86 / 5.37", true],
  [<span key="contrast" className="pv" style={{ color: "var(--ink)" }}><i style={dot("#9CAF88")} />Sage #9CAF88</span>, "Cream", "2.13", false],
  [<span key="contrast" className="pv" style={{ color: "var(--ink)" }}><i style={dot("#C17F5A")} />Terracotta #C17F5A</span>, "Cream", "2.95", false],
  [<span key="contrast" className="pv" style={{ color: "var(--ink)" }}><i style={dot("#B79A62")} />Gold #B79A62</span>, "Cream", "2.43", false],
];

const faqs = [
  { q: "When should I see a fertility specialist?", a: "See a specialist if you have not conceived after 12 months of trying, or after 6 months if the woman is 35 or older. See one sooner if periods are very irregular or absent, you have known endometriosis, fibroids or tubal problems, you have had two or more miscarriages, or the male partner has a known semen problem." },
  { q: "Do I need IVF to get pregnant?", a: "Not necessarily. Many couples conceive with ovulation tracking, treatment of a hormone problem, or IUI. IVF is usually advised when the tubes are blocked, sperm counts are very low, other treatments have not worked, or age and ovarian reserve leave little time. Dr. Swati recommends the starting point after your evaluation." },
  { q: "Does EVE offer IVF?", a: "Dr. Swati plans and guides IVF with you at EVE. The laboratory procedures, such as egg collection, embryo culture and embryo transfer, are carried out at associated ART centres that are registered under Indian law. [CONFIRM: exact arrangement and wording]" },
  { q: "Can my partner come to the visit?", a: "Yes, and we encourage it. Fertility involves both partners, and the male partner's semen analysis is one of the first tests. Partners are welcome in the consultation room, and you can also come alone if you prefer." },
  { q: "Do you tell the sex of the baby on a scan?", a: "No. Disclosing or testing for the sex of the baby is prohibited by Indian law, and we never do it. A scan at EVE is for checking location, growth and the heartbeat." },
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
    <main className="sg" id="main">
      <div className="container-eve" style={{ paddingBlock: "40px 120px" }}>
        <p style={{ fontSize: 14, color: "var(--ink-2)", maxWidth: 560 }}>
          Style guide for the EVE Women and Fertility Clinic website. Locked
          colours, type, buttons, glass cards, badges and motion, using real
          EVE content. Internal page, never indexed.
        </p>

        <Section eyebrow="Hero B" title={<>Portrait on the left, words on the <em className="acc">right</em></>} intro="The photo stays still. The sage line draws once, the heart beats twice, and background shapes move gently.">
          <HeroB />
        </Section>
        <Section eyebrow="Find care by concern" title={<>What brings you <em className="acc">here</em> today</>}>
          <ConcernRows />
        </Section>

        <Section
          eyebrow="Colour · locked"
          title={<>Cream, brown, sage and <em className="acc">terracotta</em></>}
          intro="Every text colour has a tested contrast ratio. Decorative colours are never used for text."
        >
          <div className="gradbar">
            <span>Brand gradient</span>
            <span>#9CAF88 to #5F7350</span>
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
              <Image src="/images/brand/logo-full-transparent.png" alt="EVE full logo" width={280} height={86} loading="lazy" unoptimized style={{ width: "auto", height: "auto" }} />
              <figcaption>Full · on white</figcaption>
            </figure>
            <figure className="on-grad">
              <Image src="/images/brand/logo-white-transparent.png" alt="EVE white logo" width={280} height={86} loading="lazy" unoptimized style={{ width: "auto", height: "auto" }} />
              <figcaption>White · on sage-deep gradient</figcaption>
            </figure>
            <figure>
              <Image src="/images/brand/logo-mark-transparent.png" alt="EVE mother and child mark" width={253} height={338} loading="lazy" unoptimized style={{ objectFit: "contain", width: "auto", height: 80 }} />
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
          intro="The two-part Book button is the main action: darker sage icon block, sage-deep label, single line. Hover each one."
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
            <button className="btn btn-p" type="button" disabled>
              Disabled
            </button>
            <button className="btn btn-p" type="button">
              <span className="spinner" aria-hidden /> Loading
            </button>
          </div>
        </Section>

        <Section eyebrow="Doctor chip" title={<>Doctor-led <em className="acc">care</em></>}>
          <div className="doctor-chip-panel"><div className="chip-doc"><span className="avatar-placeholder" aria-hidden><Shield size={24} strokeWidth={1.75} /></span><span>Doctor-led care<small>Dr. Swati Shree, MRCOG (UK)</small></span></div></div>
        </Section>

        <Section
          eyebrow="01 / Why EVE"
          title={<>Time, honesty and <em className="acc">options</em></>}
          intro="A bento layout over sage-tint, with one doctor throughout as the sage-deep feature tile. Mobile cards can be swiped or paused."
        >
          <WhyBento />
        </Section>

        <Section
          eyebrow="03 / How we can help"
          title={<>Care for every stage, every <em className="acc">question</em></>}
          intro="Plain white service cards, with an illustrated badge at the top-left and a View service link at the bottom. No arches, glass or moving backgrounds."
        >
          <ServiceTabs />
        </Section>

        <Section
          eyebrow="04 / Your first visit"
          title={<>Your first visit, step by <em className="acc">step</em></>}
          intro="Steps on the left and a sticky guide card on the right. Click a step or scroll. Inactive steps stay readable."
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
          intro="Editorial doctor profile, with double frames, qualification seals and a training path. Both sizes shown. No ratings."
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
            severe pain in the lower abdomen or shoulder, fainting or dizziness,
            or any bleeding with pain in early pregnancy. Do not wait for a clinic appointment.
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
                  <figure key={`${f}-${sz}`} className={sz}>
                    <AssetImage file={f} size={sz === "sz-sm" ? 56 : sz === "sz-md" ? 112 : 200} />
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
                  <AssetImage file={f} size={48} />
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
          <div id="styleguide-form"><SpecimenForm /></div>
        </Section>

        <Section
          eyebrow="FAQs"
          title={<>Quick <em className="acc">answers</em></>}
          intro="Native details and summary, so the supplied answers work without JavaScript."
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
          eyebrow="Polish pass"
          title={<>Depth, rhythm and <em className="acc">motion</em></>}
          intro="Tokens and shared components added in the final polish pass. Brown-tinted shadows, alternating section bands, the arch photo frame, photo-versus-illustration image rules, one LineAccent and one Reveal, the pill cloud and the header offset."
        >
          <h3 style={{ fontSize: 17 }}>Shadow tokens · brown-tinted, never grey</h3>
          <div className="btns" style={{ gap: 20 }}>
            {(["--shadow-sm", "--shadow-md", "--shadow-lg"] as const).map((t) => (
              <div key={t} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", boxShadow: `var(${t})` }}>
                <code>{t}</code>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 17 }}>Section rhythm · cream, white, cream, one sage-tint band</h3>
          <div style={{ display: "grid", gap: 10, maxWidth: 560 }}>
            <div style={{ padding: "16px 20px", borderRadius: 14, background: "var(--cream)", border: "1px solid var(--line)" }}>Cream section · --cream</div>
            <div style={{ padding: "16px 20px", borderRadius: 14, border: "1px solid var(--line)" }}>White section · --white</div>
            <div style={{ padding: "16px 20px", borderRadius: 14, background: "var(--sage-tint)" }}>Sage-tint band · --sage-tint</div>
          </div>
          <p style={{ fontSize: 14, color: "var(--ink-2)", margin: "10px 0 0" }}>
            Section padding clamp(72px, 10vw, 140px). Content max-width 1200px; the hero runs wider at 1320px.
          </p>

          <h3 style={{ fontSize: 17 }}>Arch photo frame</h3>
          <div className="btns" style={{ alignItems: "flex-start" }}>
            <div style={{ width: 200, aspectRatio: "4/5" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "999px 999px 28px 28px", overflow: "hidden", border: "6px solid #fff", boxShadow: "var(--shadow-lg)" }}>
                <EveImage src="doctor-meet-saree-4x5.jpg" sizes="200px" />
              </div>
            </div>
            <p style={{ maxWidth: 340, fontSize: 14, color: "var(--ink-2)", margin: 0 }}>
              Top radius equals half the width; bottom corners 28px. The 6px white inner border and --shadow-lg give every photo the printed-photo feel.
            </p>
          </div>

          <h3 style={{ fontSize: 17 }}>Image rules · photo versus illustration</h3>
          <div className="btns" style={{ alignItems: "flex-start" }}>
            <figure style={{ margin: 0, width: 200 }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 16, overflow: "hidden" }}><EveImage src="clinic-reception-4x3.jpg" sizes="200px" caption="" /></div>
              <figcaption style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8 }}>photo · object-fit: cover in a fixed-ratio frame</figcaption>
            </figure>
            <figure style={{ margin: 0, width: 200 }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 16, overflow: "hidden" }}><EveImage src="clinic-consultation-room-4x3.png" sizes="200px" caption="" /></div>
              <figcaption style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8 }}>illustration · contain, 8% padding, soft tint, never cropped</figcaption>
            </figure>
          </div>

          <h3 style={{ fontSize: 17 }}>LineAccent · draws once on scroll-in</h3>
          <div className="btns" style={{ alignItems: "flex-start" }}>
            <InView className="sg-la-demo">
              <div style={{ position: "relative", width: 160, aspectRatio: "4/5" }}>
                <LineAccent d="M36 110C14 210 16 330 62 420C150 480 310 470 375 415" />
                <div style={{ position: "absolute", inset: "2% 4% 4%", borderRadius: "999px 999px 28px 28px", overflow: "hidden", border: "6px solid #fff", boxShadow: "var(--shadow-lg)" }}>
                  <EveImage src="doctor-hero-whitecoat-4x5.jpg" sizes="160px" />
                </div>
              </div>
            </InView>
            <p style={{ maxWidth: 340, fontSize: 14, color: "var(--ink-2)", margin: 0 }}>
              One shared component: a 2px sage line with round caps that strokes itself once when its InView ancestor enters the viewport. The hero variant ends in the terracotta heart; section variants run without it.
            </p>
          </div>

          <h3 style={{ fontSize: 17 }}>Reveal · fade plus 16px rise, once, 70ms stagger</h3>
          <Reveal className="sg-reveal-demo">
            <div style={{ padding: "16px 20px", borderRadius: 14, border: "1px solid var(--line)" }}>
              Content starts visible with no JavaScript. With JS it rises once when scrolled into view; children stagger 70ms apart.
            </div>
          </Reveal>

          <h3 style={{ fontSize: 17 }}>Pill cloud · conditions, centred at 1024px and up</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", maxWidth: 620 }}>
            {["PCOS", "Endometriosis", "Fibroids", "Adenomyosis", "Menopause", "Thyroid and fertility"].map((n) => (
              <span className="hm-pill" key={n}>{n}</span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "var(--ink-2)", margin: "10px 0 0" }}>
            Below 1024px the same pills scroll sideways with a 48px fade mask and scroll-snap; hover changes colour and shadow only.
          </p>

          <h3 style={{ fontSize: 17 }}>Sticky header offset</h3>
          <p style={{ fontSize: 14, color: "var(--ink-2)", margin: 0 }}>
            <code>--header-h: 75px</code> feeds <code>{"html { scroll-padding-top: calc(var(--header-h) + 16px) }"}</code>,
            so anchor and TOC jumps land with the heading fully visible. Every page template keeps 24px of air under the header.
          </p>
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
