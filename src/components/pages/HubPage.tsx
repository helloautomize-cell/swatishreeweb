import Breadcrumbs from "@/components/shell/Breadcrumbs";
import BookButton from "@/components/BookButton";
import EveImage from "@/components/EveImage";
import ServiceCard from "@/components/ServiceCard";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc, Section } from "@/lib/content/load";
import { pageByUrl } from "@/lib/content/load";
import { pageLeadImage } from "@/lib/images";
import { site } from "@/lib/site-config";
import { Phone } from "lucide-react";
import SectionBlock from "./SectionBlock";
import BadgePanel from "./BadgePanel";
import { CtaBand, ReviewerBox } from "./PageFoot";

/* `**Name** · line -> /url/` card rows; the one-line description is optional. */
const CARD_ROW = /^-\s+\*\*(.+?)\*\*\s*(?:·\s*(.*?))?\s*→\s*(\/\S+)\s*$/;

const isChoosePanel = (id: string) =>
  /^how-to-choose|when-you-are-unsure/.test(id);
const isArtPanel = (id: string) => /rules-every-patient/.test(id);

/** Hub template (Part 7.2): hero, grouped cards, choose/ART panels, FAQs, CTA. */
export default function HubPage({ doc }: { doc: PageDoc }) {
  const lead = pageLeadImage(doc.url);
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve">
        <header className="pg-hero pg-split">
          <div className="pg-split-text">
            <h1>
              <InlineText source={doc.h1} />
            </h1>
            <div className="answer-first">
              {doc.lead.markdown && <Markdown source={doc.lead.markdown} />}
              {doc.lead.fields
                .filter((f) => /^intro$/i.test(f.label))
                .map((f) => (
                  <p key={f.label}><InlineText source={f.value} /></p>
                ))}
            </div>
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

        {doc.sections.map((s) => (
          <HubSection key={s.id} section={s} />
        ))}

        <ReviewerBox note={doc.reviewerNote} />
      </article>
      <CtaBand />
    </main>
  );
}

function HubSection({ section }: { section: Section }) {
  // Card-group sections are bullet lists of `**Name** · line -> /url/`.
  const rows = section.markdown
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const cards = rows.map((r) => r.match(CARD_ROW)).filter((m): m is RegExpMatchArray => !!m);

  if (rows.length && cards.length === rows.length) {
    return (
      <section className="pg-sec pg-sec-wide" id={section.id}>
        <h2>
          {section.numeral && <span className="num">{section.numeral}</span>}
          <InlineText source={section.heading ?? ""} />
        </h2>
        <div className="pg-cards">
          {cards.map((m) => {
            const target = pageByUrl(m[3]);
            return (
              <ServiceCard
                key={m[3]}
                slug={target?.meta.badge ?? m[3].split("/").filter(Boolean).pop()!}
                title={m[1]}
                line={m[2] ?? target?.meta.description ?? ""}
                href={m[3]}
              />
            );
          })}
        </div>
      </section>
    );
  }

  // "How to choose" / "unsure" guidance panel.
  if (isChoosePanel(section.id)) {
    return (
      <section className="pg-sec choose-panel" id={section.id}>
        <h2>
          {section.numeral && <span className="num">{section.numeral}</span>}
          <InlineText source={section.heading ?? ""} />
        </h2>
        <Markdown source={section.markdown} />
      </section>
    );
  }

  // ART rules panel on /treatments/.
  if (isArtPanel(section.id)) {
    return (
      <section className="pg-sec art-panel" id={section.id}>
        <h2>
          {section.numeral && <span className="num">{section.numeral}</span>}
          <InlineText source={section.heading ?? ""} />
        </h2>
        <Markdown source={section.markdown} />
      </section>
    );
  }

  return <SectionBlock section={section} />;
}
