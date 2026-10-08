import Breadcrumbs from "@/components/shell/Breadcrumbs";
import BookButton from "@/components/BookButton";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import { Phone } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { CtaBand, RelatedLinks, ReviewerBox } from "./PageFoot";

/**
 * Generic template for core and legal pages: hero (H1 + lead), labeled
 * spec fields, then every section in order. Signature pages get their own
 * polished templates in Phase 4; this keeps all 49 routes rendering now.
 */
export default function StandardPage({ doc }: { doc: PageDoc }) {
  const eyebrow = doc.lead.fields.find((f) => f.label === "Eyebrow")?.value;
  const sub = doc.lead.fields.find((f) => f.label === "Sub")?.value;
  const lastUpdated = doc.lead.fields.find((f) => f.label === "Last updated")?.value;

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve">
        <header className="pg-hero">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>
            <InlineText source={doc.h1} />
          </h1>
          {sub && (
            <p className="pg-sub">
              <InlineText source={sub} />
            </p>
          )}
          {lastUpdated && (
            <p className="pg-updated">
              <InlineText source={`Last updated: ${lastUpdated}`} />
            </p>
          )}
          <div className="btns">
            <BookButton />
            <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
              <Phone size={18} strokeWidth={1.75} aria-hidden /> Call {site.phones[0].display}
            </a>
          </div>
        </header>

        {doc.lead.markdown && <Markdown source={doc.lead.markdown} />}

        {doc.sections.map((s) => (
          <SectionBlock key={s.id} section={s} />
        ))}

        <ReviewerBox note={doc.reviewerNote} lastReviewed={doc.meta.lastReviewed} />
        <RelatedLinks doc={doc} />
      </article>
      <CtaBand />
    </main>
  );
}
