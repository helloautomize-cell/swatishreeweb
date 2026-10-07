import Link from "next/link";
import { ArrowRight, GraduationCap, Phone } from "lucide-react";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import BookButton from "@/components/BookButton";
import EveImage from "@/components/EveImage";
import FaqAccordion from "@/components/FaqAccordion";
import { WithConfirms } from "@/components/ConfirmChip";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc, Section } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import ChipGroups from "./ChipGroups";
import { CtaBand, ReviewerBox } from "./PageFoot";

const fieldOf = (s: Section | undefined, re: RegExp) =>
  s?.fields.find((f) => re.test(f.label))?.value;

const bullets = (s: Section | undefined) =>
  (s?.markdown ?? "")
    .split("\n")
    .map((l) => l.replace(/^-\s+/, "").trim())
    .filter((l) => l && !l.startsWith("#"));

/** `- **Label:** a · b · c` chip groups. */
function chipGroups(s: Section | undefined) {
  return bullets(s)
    .map((b) => b.match(/^\*\*(.+?)\s*:\*\*\s*(.*)$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ label: m[1], items: m[2].split(/\s*·\s*/).filter(Boolean) }));
}

/** Numbered `**T.** "quote"` principle cards. */
function numbered(markdown: string) {
  const parts = markdown.split(/^(\d+)\.\s+\*\*/m);
  const out: { title: string; text: string }[] = [];
  for (let i = 1; i + 1 < parts.length; i += 2) {
    const chunk = parts[i + 1];
    const close = chunk.indexOf("**");
    if (close === -1) continue;
    out.push({ title: chunk.slice(0, close).trim().replace(/\.$/, ""), text: chunk.slice(close + 2).trim() });
  }
  return out;
}

/**
 * Doctor profile template (Part 7.2): split hero with key-facts glass card,
 * About, working principles, education timeline, experience, teaching and
 * award, non-clickable chip groups, FAQs, CTA.
 */
export default function DoctorPage({ doc }: { doc: PageDoc }) {
  const sec = (id: RegExp) => doc.sections.find((s) => id.test(s.id));
  const hero = sec(/^hero/);
  const how = sec(/how-dr-swati-works/);
  const education = sec(/education/);
  const work = sec(/work-experience/);
  const teaching = sec(/teaching/);
  const chips = sec(/chip-groups/);
  const faqs = sec(/^faqs?$/);

  const facts = bullets(hero)
    .map((b) => b.match(/^\*\*(.+?)\s*:\*\*\s*(.*)$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ label: m[1], value: m[2] }));

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve">
        <header className="pg-hero pg-split dr-hero">
          <div className="pg-split-media dr-portrait">
            <EveImage src="doctor-meet-saree-4x5.jpg" sizes="(max-width: 860px) 92vw, 380px" imgClassName="dr-portrait-img" />
          </div>
          <div className="pg-split-text">
            <h1><InlineText source={fieldOf(hero, /^H1/) ?? doc.h1} /></h1>
            <p className="pg-sub"><WithConfirms text={fieldOf(hero, /Title line/) ?? ""} /></p>
            <div className="btns">
              <BookButton label="Book with Dr. Swati" />
              <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
                <Phone size={18} strokeWidth={1.75} aria-hidden /> Call {site.phones[0].display}
              </a>
            </div>
            {facts.length > 0 && (
              <dl className="dr-facts">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd><WithConfirms text={f.value} /></dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </header>

        {sec(/^about$/i) && (
          <section className="pg-sec" id="about">
            <h2>About <em className="acc">Dr. Swati</em></h2>
            <Markdown source={sec(/^about$/i)!.markdown} />
          </section>
        )}

        {how && (
          <section className="pg-sec" id={how.id}>
            <h2><InlineText source={fieldOf(how, /^H2/) ?? how.heading ?? ""} /></h2>
            <div className="dr-quotes">
              {numbered(how.markdown).map((q) => (
                <blockquote className="dr-quote" key={q.title}>
                  <b>{q.title}</b>
                  <WithConfirms text={q.text} />
                </blockquote>
              ))}
            </div>
            {fieldOf(how, /Note for build/) && (
              <p className="dr-note"><WithConfirms text={fieldOf(how, /Note for build/)!} /></p>
            )}
          </section>
        )}

        {education && (
          <section className="pg-sec" id={education.id}>
            <h2><GraduationCap size={22} strokeWidth={1.75} aria-hidden className="sec-ic" /> Education and training</h2>
            <ol className="timeline">
              {bullets(education).map((item, i) => {
                const [when, ...rest] = item.split(/\s*·\s*/);
                const isMrcog = /MRCOG/i.test(item);
                return (
                  <li key={i} className={isMrcog ? "hi" : undefined}>
                    <span className="t-when"><WithConfirms text={when} /></span>
                    <span className="t-what"><WithConfirms text={rest.join(" · ")} /></span>
                    {isMrcog && <EveImage src="doctor-mrcog-ceremony-4x3.avif" sizes="220px" className="t-img" />}
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {work && (
          <section className="pg-sec" id={work.id}>
            <h2>Work <em className="acc">experience</em></h2>
            <ol className="timeline">
              {bullets(work).map((item, i) => {
                const [when, ...rest] = item.split(/\s*·\s*/);
                return (
                  <li key={i}>
                    <span className="t-when"><WithConfirms text={when} /></span>
                    <span className="t-what"><WithConfirms text={rest.join(" · ")} /></span>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {teaching && (
          <section className="pg-sec" id={teaching.id}>
            <h2>Teaching, talks and <em className="acc">award</em></h2>
            <div className="dr-teach">
              <ul className="dr-teach-list">
                {bullets(teaching).map((item, i) => (
                  <li key={i}><WithConfirms text={item} /></li>
                ))}
              </ul>
              <EveImage src="doctor-award-4x3.avif" sizes="(max-width: 760px) 100vw, 320px" className="dr-award-img" />
            </div>
            {fieldOf(teaching, /Publications/) && (
              <p className="dr-note"><WithConfirms text={fieldOf(teaching, /Publications/)!} /></p>
            )}
          </section>
        )}

        {chips && chipGroups(chips).length > 0 && (
          <section className="pg-sec" id={chips.id}>
            <h2>Conditions and <em className="acc">services</em></h2>
            <ChipGroups groups={chipGroups(chips)} />
          </section>
        )}

        {faqs?.faqs && (
          <section className="pg-sec" id={faqs.id}>
            <h2>Quick <em className="acc">answers</em></h2>
            <FaqAccordion items={faqs.faqs.map((f) => ({ q: f.q, a: <Markdown source={f.a} /> }))} />
          </section>
        )}

        <ReviewerBox note={doc.reviewerNote} />
        <p className="pg-more"><Link className="link" href="/contact/">Book a consultation <ArrowRight size={16} strokeWidth={1.75} aria-hidden /></Link></p>
      </article>
      <CtaBand />
    </main>
  );
}
