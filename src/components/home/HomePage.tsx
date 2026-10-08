import Link from "next/link";
import { ArrowRight, Award, Check, Clock, MapPin, MessageCircle, Phone, Stethoscope, User } from "lucide-react";
import BookButton from "@/components/BookButton";
import EveImage from "@/components/EveImage";
import FaqAccordion from "@/components/FaqAccordion";
import MapCard from "@/components/MapCard";
import InView from "@/components/InView";
import Reveal from "@/components/Reveal";
import LineAccent from "@/components/LineAccent";
import ServiceTabs from "@/components/ServiceTabs";
import StepTracker from "@/components/StepTracker";
import { ConcernRows, WhyBento } from "@/components/SignatureSpecimens";
import AutoScrollRow from "@/components/AutoScrollRow";
import ConfirmChip, { MaybeConfirm, WithConfirms } from "@/components/ConfirmChip";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import { loadPages } from "@/lib/content/load";
import { homeData } from "@/lib/home";
import { resolveConfirm } from "@/lib/confirm";
import { clinicOpenedShort, kmcRegLine } from "@/lib/facts";
import { badgeFor } from "@/lib/service-badges";
import { imageEntry } from "@/lib/images";
import AssetImage from "@/components/AssetImage";
import { site } from "@/lib/site-config";
import { CtaBand } from "@/components/pages/PageFoot";

/*
 * Home template (Part 7.1). Every string comes from resources/content/
 * index.md via homeData(); the section order below follows the spec table.
 * The Meet-your-doctor card uses the full styleguide layout (seals, path)
 * with named hospitals, per the approved v2 design.
 */

const CONDITION_LINKS: Record<string, string> = {
  PCOS: "/conditions/pcos/",
  Endometriosis: "/conditions/endometriosis/",
  "Irregular periods": "/conditions/menstrual-disorders/",
  "Heavy periods": "/conditions/menstrual-disorders/",
  "Recurrent miscarriage": "/conditions/recurrent-pregnancy-loss/",
  "Low AMH": "/conditions/thin-endometrium-and-low-ovarian-reserve/",
  "Thin endometrium": "/conditions/thin-endometrium-and-low-ovarian-reserve/",
  Fibroids: "/conditions/fibroids/",
  Adenomyosis: "/conditions/adenomyosis/",
  "Thyroid and fertility": "/conditions/thyroid-and-fertility/",
  "Male factor infertility": "/services/male-fertility-evaluation/",
  Perimenopause: "/conditions/menopause-and-perimenopause/",
  Menopause: "/conditions/menopause-and-perimenopause/",
};

function Hero({ d }: { d: ReturnType<typeof homeData> }) {
  return (
    <InView className="hero2 hb hm-hero">
      <div className="media">
        <div className="hb-stage">
          <div className="hb-blob2" />
          <div className="hb-blob" />
          <LineAccent
            className="hb-line"
            heart
            d="M22 150C2 230 4 350 46 435C140 478 300 472 372 436C398 416 404 352 398 306"
            heartD="M398 294c-4-6-13-4-13 3 0 6 13 13 13 13s13-7 13-13c0-7-9-9-13-3z"
          />
          <div className="hb-fig">
            <EveImage src="doctor-hero-whitecoat-4x5.jpg" priority sizes="(max-width: 860px) 78vw, 480px" imgClassName="hb-photo" />
          </div>
        </div>
        <div className="hb-chips">
          <div className="glasschip name">
            <span className="seal-mini">MRCOG</span>
            <span>
              <b>{site.doctor}</b>
              <small>{d.hero.namePill.split("·").slice(1).join("·").trim() || "MBBS, DNB (OBG), MRCOG (UK)"}</small>
            </span>
          </div>
          <div className="glasschip c2">
            <span className="gi"><Clock size={18} strokeWidth={1.75} aria-hidden /></span>
            <span>Unhurried visits<small>Time for every question</small></span>
          </div>
        </div>
      </div>
      <div className="head">
        <span className="eyebrow"><WithConfirms text={d.hero.eyebrow} /></span>
        <h1><InlineText source={d.hero.h1} /></h1>
      </div>
      <div className="body">
        <p className="sub"><WithConfirms text={d.hero.sub} /></p>
        <p className="mline"><WithConfirms text={d.hero.mobileLine} /></p>
        <div className="btns">
          <BookButton />
          <a className="btn btn-s hero-call" href={`tel:${site.phones[0].e164}`} aria-label={`Call ${site.phones[0].display}`}>
            <Phone size={20} strokeWidth={1.75} aria-hidden />
            <span>Call {site.phones[0].display}</span>
          </a>
        </div>
        <div className="creds">
          {["A full evaluation first", "Every option explained", "One doctor throughout"].map((text) => (
            <span key={text}><Check size={16} strokeWidth={1.75} aria-hidden /><b>{text}</b></span>
          ))}
        </div>
        {d.hero.chips.length > 0 && (
          <div className="hm-chips" aria-label="Services">
            {d.hero.chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        )}
        {d.hero.doctorChip && (
          <div className="hm-chips hm-dchip">
            <span>
              <span className="hm-dchip-av" aria-hidden>
                {imageEntry("doctor-avatar-1x1.png") ? (
                  <EveImage src="doctor-avatar-1x1.png" sizes="28px" />
                ) : (
                  <User size={15} strokeWidth={1.75} aria-hidden />
                )}
              </span>
              <WithConfirms text={d.hero.doctorChip.replace(/^\(avatar\)\s*/i, "")} />
            </span>
          </div>
        )}
      </div>
    </InView>
  );
}

function AboutStrip({ d }: { d: ReturnType<typeof homeData> }) {
  return (
    <section className="hm-sec hm-about hm-sec--wash">
      <Reveal className="sec-h">
        <span className="eyebrow">02 / About EVE</span>
        <h2><InlineText source={d.about.h2} /></h2>
      </Reveal>
      <div className="hm-about-grid">
        <div className="hm-about-media">
          <div className="hm-about-photo">
            <EveImage src="clinic-reception-4x3.jpg" sizes="(max-width: 900px) 100vw, 560px" />
          </div>
          {!d.about.labels.length ? null : (
            <div className="hm-labels">
              {d.about.labels.map((l) => (
                <span className="glasschip" key={l}><WithConfirms text={l} /></span>
              ))}
            </div>
          )}
        </div>
        <div className="hm-about-body">
          <p><WithConfirms text={d.about.paragraph} /></p>
          {d.about.rows.map((r) => {
            const badge = badgeFor(r.badge === "ivf badge" ? "ivf" : "doctor");
            return (
              <div className="hm-row" key={r.title}>
                {badge ? (
                  <span className="hm-row-badge" aria-hidden>
                    <AssetImage file={badge} size={56} />
                  </span>
                ) : (
                  <span className="hm-row-badge hm-row-icon" aria-hidden>
                    <Stethoscope size={26} strokeWidth={1.6} />
                  </span>
                )}
                <p><b>{r.title}</b> · <WithConfirms text={r.text} /></p>
              </div>
            );
          })}
          <Link className="link" href="/about/">{d.about.link || "Read about EVE"} <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}

function VisitBand({ d }: { d: ReturnType<typeof homeData> }) {
  const maps = resolveConfirm<string>(site.mapsUrl);
  return (
    <section className="hm-band" aria-label="Visit us in Gunjur">
      <div className="hm-band-media">
        <EveImage src="clinic-visit-band-16x9.jpg" sizes="(max-width: 860px) 100vw, 58vw" className="hm-band-img" />
      </div>
      <div className="hm-band-card">
        <h2><InlineText source={d.visitBand.h2} /></h2>
        <p><WithConfirms text={d.visitBand.text} /></p>
        <p className="hm-band-hours"><WithConfirms text={d.visitBand.hours} /></p>
        <div className="btns">
          {maps ? (
            <a className="btn btn-s" href={maps} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} strokeWidth={1.75} aria-hidden /> Get directions
            </a>
          ) : (
            <ConfirmChip note="Google Maps link" />
          )}
          <Link className="btn btn-s" href="/plan-your-visit/">Plan your visit</Link>
        </div>
      </div>
    </section>
  );
}

function DoctorHome({ d }: { d: ReturnType<typeof homeData> }) {
  return (
    <section className="hm-sec">
      <Reveal className="sec-h">
        <span className="eyebrow">05 / Meet your doctor</span>
        <h2><InlineText source={d.doctor.h2} /></h2>
      </Reveal>
      <InView className="da hm-doctor" replay>
        <div className="da-media">
          <LineAccent
            className="da-line"
            d="M42 132C18 250 20 376 72 452C150 516 352 502 398 430C416 404 414 336 396 296"
          />
          <div className="da-fig"><EveImage src="doctor-meet-saree-4x5.jpg" sizes="(max-width: 860px) 92vw, 420px" imgClassName="da-photo" /></div>
          <div className="glasschip award">
            <span className="gi"><Award size={18} strokeWidth={1.8} aria-hidden /></span>
            <span>16th GCU International<small>Women&rsquo;s Day Award</small></span>
          </div>
        </div>
        <div className="da-body">
          <span className="eyebrow">Your doctor</span>
          <h3 className="nm">{site.doctor}</h3>
          <p className="role"><WithConfirms text={d.doctor.text} /></p>
          <div className="seals">
            <div className="seal"><span className="s"><svg className="seal-ring" viewBox="0 0 84 84" aria-hidden><circle cx="42" cy="42" r="38" pathLength="1" /></svg>MBBS</span>Bachelor of Medicine</div>
            <div className="seal"><span className="s"><svg className="seal-ring" viewBox="0 0 84 84" aria-hidden><circle cx="42" cy="42" r="38" pathLength="1" /></svg>DNB</span>Obstetrics and Gynaecology</div>
            <div className="seal"><span className="s"><svg className="seal-ring" viewBox="0 0 84 84" aria-hidden><circle cx="42" cy="42" r="38" pathLength="1" /></svg>Fellow</span>Reproductive Medicine, KJK Hospital</div>
            <div className="seal hi"><span className="s"><svg className="seal-ring" viewBox="0 0 84 84" aria-hidden><circle cx="42" cy="42" r="38" pathLength="1" /></svg>MRCOG<br />UK</span>Royal College of Obstetricians and Gynaecologists</div>
          </div>
          <p className="hm-reg">{kmcRegLine}</p>
          <p className="hm-exp"><WithConfirms text={d.doctor.experience} /></p>
          <div className="path">
            <div><b>AIIMS</b>Training</div>
            <div><b>Sakra World Hospital</b>Bangalore</div>
            <div><b>KJK Hospital</b>Fellowship, Trivandrum</div>
            <div><b>EVE, Gunjur</b>Founded {clinicOpenedShort}</div>
          </div>
          <div className="chips">
            {d.doctor.chips.map((c, i) =>
              /CONFIRM|\[date\]/i.test(c) ? (
                <ConfirmChip key={i} note={c.replace(/\[|\]|CONFIRM:?|date/gi, "").trim() || c} />
              ) : (
                <span className="chip" key={i}>{c}</span>
              ),
            )}
          </div>
          <div className="btns">
            <BookButton label="Book with Dr. Swati" />
            <Link className="link" href="/dr-swati-shree/">Read her profile <ArrowRight size={18} strokeWidth={1.75} aria-hidden /></Link>
          </div>
        </div>
      </InView>
    </section>
  );
}

function BlogStrip({ d }: { d: ReturnType<typeof homeData> }) {
  const posts = loadPages()
    .filter((p) => p.kind === "post")
    .sort((a, b) => a.num - b.num);
  return (
    <section className="hm-sec">
      <Reveal className="sec-h">
        <span className="eyebrow">08 / From our blog</span>
        <h2>Written for <em className="acc">you</em></h2>
      </Reveal>
      <AutoScrollRow id="home-blog" className="hm-blog" mobileOnly ariaLabel="From our blog">
        {posts.map((p) => (
          <Link className="hm-post" href={p.url} key={p.url}>
            <span className="hm-post-cover" aria-hidden>
              {p.meta.badge && badgeFor(p.meta.badge) && (
                <AssetImage file={badgeFor(p.meta.badge)!} size={112} />
              )}
            </span>
            {p.meta.category && <span className="hm-post-cat">{p.meta.category}</span>}
            <span className="hm-post-t">{p.name}</span>
            <span className="hm-post-meta">
              Written by {site.doctor} · <WithConfirms text={p.meta.datePublished ?? ""} />
              {p.meta.readingTime ? ` · ${p.meta.readingTime} min read` : ""}
            </span>
          </Link>
        ))}
      </AutoScrollRow>
      <p className="hm-more"><Link className="link" href="/blog/">{d.blogLink || "Read the blog"} <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link></p>
    </section>
  );
}

function ContactBlock({ d }: { d: ReturnType<typeof homeData> }) {
  const whatsapp = resolveConfirm<string>(site.whatsapp);
  const maps = resolveConfirm<string>(site.mapsUrl);
  return (
    <section className="hm-sec hm-contact hm-sec--wash">
      <Reveal className="sec-h">
        <span className="eyebrow">Contact</span>
        <h2>{d.contact.title}</h2>
      </Reveal>
      <div className="hm-contact-grid">
        <div className="hm-contact-rows">
          <div className="hm-crow"><Phone size={20} strokeWidth={1.75} aria-hidden /><div><b>Call</b><p><a href={`tel:${site.phones[0].e164}`}>{site.phones[0].display}</a> · <a href={`tel:${site.phones[1].e164}`}>{site.phones[1].display}</a></p></div></div>
          <div className="hm-crow"><MessageCircle size={20} strokeWidth={1.75} aria-hidden /><div><b>WhatsApp</b><p>{whatsapp ? <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>{whatsapp}</a> : <ConfirmChip note="WhatsApp number" />}</p></div></div>
          <div className="hm-crow"><User size={20} strokeWidth={1.75} aria-hidden /><div><b>Email</b><p><MaybeConfirm value={site.email} /></p></div></div>
          <div className="hm-crow"><MapPin size={20} strokeWidth={1.75} aria-hidden /><div><b>Address</b><p>{site.name}, {site.address.line1}, {site.address.line2}, {site.address.city} {site.address.postalCode}{" "}
            {maps ? <a className="link" href={maps} target="_blank" rel="noopener noreferrer">Get directions</a> : <ConfirmChip note="Google Maps link" />}</p></div></div>
          <div className="hm-crow"><Clock size={20} strokeWidth={1.75} aria-hidden /><div><b>Hours</b><p><MaybeConfirm value={site.hours} /></p></div></div>
          <p className="hm-emergency">Medical emergency? Call <a href="tel:108">108</a> or <a href="tel:112">112</a>.</p>
        </div>
        <MapCard src="clinic-consultation-room-4x3.png" />
      </div>
    </section>
  );
}

export default function HomePage({ doc }: { doc: PageDoc }) {
  const d = homeData(doc);
  const serviceGroups = d.help.groups.map((g) => ({
    label: g.label,
    intro: g.intro,
    cards: g.cards.map((c) => {
      const match = loadPages().find((p) => p.name === c.title || p.url.includes(c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")));
      return {
        slug: match?.meta.badge ?? c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: c.title,
        line: c.line,
        href: match?.url ?? "/services/",
      };
    }),
  }));
  return (
    <main id="main" className="hm">
      <div className="container-eve">
        <Hero d={d} />
        <p className="hm-answer answer-first"><WithConfirms text={d.answerFirst.trim()} /></p>

        <section className="hm-sec">
          <ConcernRows label={d.concernLabel} items={d.concerns} labelAs="h2" />
        </section>

        <section className="hm-sec hm-sec--moss">
          <Reveal className="sec-h">
            <span className="eyebrow">01 / Why EVE</span>
            <h2><InlineText source={d.why.h2} /></h2>
            <p><WithConfirms text={d.why.intro} /></p>
          </Reveal>
          <WhyBento cards={d.why.cards} />
        </section>

        <AboutStrip d={d} />

        <section className="hm-sec">
          <Reveal className="sec-h">
            <span className="eyebrow">03 / How we can help</span>
            <h2><InlineText source={d.help.h2} /></h2>
          </Reveal>
          <ServiceTabs groups={serviceGroups} />
          <p className="hm-more"><Link className="link" href="/services/">View all services <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link></p>
        </section>

        <section className="hm-sec hm-sec--wash">
          <Reveal className="sec-h">
            <span className="eyebrow">04 / Your first visit</span>
            <h2>Your first visit, step by <em className="acc">step</em></h2>
          </Reveal>
          <StepTracker steps={d.visit.steps} bookHref="/contact/#book" />
        </section>
      </div>

      <VisitBand d={d} />

      <div className="container-eve">
        <DoctorHome d={d} />

        <section className="hm-sec hm-plan">
          <Reveal className="sec-h">
            <span className="eyebrow">06 / Why a full evaluation comes first</span>
            <h2><InlineText source={d.plan.h2} /></h2>
          </Reveal>
          <div className="hm-plan-panel">
            <p><WithConfirms text={d.plan.text} /></p>
            <Link className="link" href="/your-fertility-journey/">{d.plan.link || "Read how a fertility journey works"} <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link>
          </div>
        </section>

        <section className="hm-sec hm-sec--wash hm-cond" aria-label="Conditions we look after">
          <Reveal className="sec-h">
            <span className="eyebrow">07 / Conditions we look after</span>
            <h2>Care across the <em className="acc">span</em></h2>
          </Reveal>
          <AutoScrollRow id="cond-marquee" className="hm-marquee" ariaLabel="Conditions we look after">
            {d.marquee.map((name) => (
              <Link className="hm-pill" href={CONDITION_LINKS[name] ?? "/conditions/"} key={name}>{name}</Link>
            ))}
          </AutoScrollRow>
        </section>

        <BlogStrip d={d} />

        <section className="hm-sec">
          <Reveal className="sec-h">
            <span className="eyebrow">09 / Quick answers</span>
            <h2>Quick <em className="acc">answers</em></h2>
          </Reveal>
          <FaqAccordion items={d.faqs.map((f) => ({ q: f.q, a: <Markdown source={f.a} /> }))} />
          <p className="hm-more"><Link className="link" href="/faqs/">See all FAQs <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link></p>
        </section>

        <ContactBlock d={d} />
      </div>

      <CtaBand />
    </main>
  );
}
