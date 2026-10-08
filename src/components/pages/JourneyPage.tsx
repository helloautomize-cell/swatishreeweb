import Breadcrumbs from "@/components/shell/Breadcrumbs";
import BookButton from "@/components/BookButton";
import EveImage from "@/components/EveImage";
import FaqAccordion from "@/components/FaqAccordion";
import AssetImage from "@/components/AssetImage";
import { assetEntry, pageLeadImage } from "@/lib/images";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import { Phone } from "lucide-react";
import SectionBlock from "./SectionBlock";
import BadgePanel from "./BadgePanel";
import { CtaBand, ReviewerBox } from "./PageFoot";

const STAGE_ICONS = [
  "stage-understand.png",
  "stage-treat.png",
  "stage-treatment.png",
  "stage-after.png",
];

/**
 * Journey template (Part 7.2): four stages on a rail with stage-* icons, the
 * decision table, the ART eligibility panel, FAQs.
 */
export default function JourneyPage({ doc }: { doc: PageDoc }) {
  const lead = pageLeadImage(doc.url);
  const intro = doc.sections.find((s) => s.id === "intro");
  const stages = doc.sections.filter((s) => /^stage-\d/.test(s.id));
  const rest = doc.sections.filter(
    (s) => s.id !== "intro" && !/^stage-\d/.test(s.id),
  );

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve">
        <header className="pg-hero pg-split">
          <div className="pg-split-text">
            <h1><InlineText source={doc.h1} /></h1>
            {(intro?.markdown || doc.lead.markdown) && (
              <div className="answer-first">
                <Markdown source={intro?.markdown || doc.lead.markdown} />
              </div>
            )}
            {doc.lead.fields
              .filter((f) => /intro/i.test(f.label))
              .map((f) => (
                <p className="pg-sub" key={f.label}><InlineText source={f.value} /></p>
              ))}
            <div className="btns">
              <BookButton />
              <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
                <Phone size={18} strokeWidth={1.75} aria-hidden /> Call {site.phones[0].display}
              </a>
            </div>
          </div>
          <div className="pg-split-media">
            {lead ? (
              <EveImage src={lead} sizes="(max-width: 860px) 100vw, 460px" caption="" />
            ) : (
              <BadgePanel doc={doc} />
            )}
          </div>
        </header>

        <div className="journey-rail">
          {stages.map((s, i) => (
            <section className="pg-sec j-stage" id={s.id} key={s.id}>
              <span className="j-ic" aria-hidden>
                {assetEntry(STAGE_ICONS[i] ?? "") && (
                  <AssetImage file={STAGE_ICONS[i]} size={72} />
                )}
              </span>
              <div className="j-body">
                <h2><InlineText source={s.heading ?? ""} /></h2>
                <Markdown source={s.markdown} />
              </div>
            </section>
          ))}
        </div>

        {rest.map((s) => {
          if (/who-can-have-art/.test(s.id)) {
            return (
              <section className="pg-sec art-panel" id={s.id} key={s.id}>
                <h2><InlineText source={s.heading ?? ""} /></h2>
                <Markdown source={s.markdown} />
              </section>
            );
          }
          if (s.kind === "faqs" && s.faqs) {
            return (
              <section className="pg-sec" id={s.id} key={s.id}>
                <h2><InlineText source={s.heading ?? ""} /></h2>
                <FaqAccordion items={s.faqs.map((f) => ({ q: f.q, a: <Markdown source={f.a} /> }))} />
              </section>
            );
          }
          return <SectionBlock key={s.id} section={s} />;
        })}

        <ReviewerBox note={doc.reviewerNote} lastReviewed={doc.meta.lastReviewed} />
      </article>
      <CtaBand />
    </main>
  );
}
