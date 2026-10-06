import Breadcrumbs from "@/components/shell/Breadcrumbs";
import BookButton from "@/components/BookButton";
import EveImage from "@/components/EveImage";
import ServiceCard from "@/components/ServiceCard";
import AutoScrollRow from "@/components/AutoScrollRow";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import { pageByUrl } from "@/lib/content/load";
import { pageLeadImage } from "@/lib/images";
import { site } from "@/lib/site-config";
import { Phone } from "lucide-react";
import SectionBlock from "./SectionBlock";
import PageToc from "./PageToc";
import BadgePanel from "./BadgePanel";
import { CtaBand, ReviewerBox } from "./PageFoot";

const HUB: Record<string, { name: string; url: string }> = {
  services: { name: "Services", url: "/services/" },
  treatments: { name: "Treatments", url: "/treatments/" },
  conditions: { name: "Conditions", url: "/conditions/" },
};

/** Related services carousel + related posts (Part 5.4b). */
function RelatedRail({ doc }: { doc: PageDoc }) {
  const related = (doc.meta.related ?? [])
    .map((u) => pageByUrl(u))
    .filter((p): p is PageDoc => !!p);
  const posts = (doc.meta.posts ?? [])
    .map((u) => pageByUrl(u))
    .filter((p): p is PageDoc => !!p);
  if (!related.length && !posts.length) return null;
  return (
    <div className="pg-related2">
      {related.length > 0 && (
        <>
          <h2>Related care</h2>
          <AutoScrollRow id={`rel-${doc.num}`} className="pg-cards" ariaLabel="Related services">
            {related.map((p) => (
              <ServiceCard
                key={p.url}
                slug={p.meta.badge ?? p.url.split("/").filter(Boolean).pop()!}
                title={p.name}
                line={p.meta.description ?? ""}
                href={p.url}
              />
            ))}
          </AutoScrollRow>
        </>
      )}
      {posts.length > 0 && (
        <>
          <h2>From the library</h2>
          <div className="pg-postlist">
            {posts.map((p) => (
              <a className="pg-postcard" href={p.url} key={p.url}>
                <b>{p.name}</b>
                <small>{p.meta.readingTime ? `${p.meta.readingTime} min read` : p.meta.category}</small>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** Service / treatment / condition detail template (Part 5.4b + 7.2). */
export default function DetailPage({ doc }: { doc: PageDoc }) {
  const seg = doc.url.replace(/^\//, "").split("/")[0];
  const hub = HUB[seg];
  const lead = pageLeadImage(doc.url);
  const intro = doc.sections.find((s) => s.id === "intro");
  const body = doc.sections.filter((s) => s.id !== "intro");
  const tocSections = body
    .filter((s) => s.kind !== "sources")
    .map((s) => ({ id: s.id, label: s.heading ?? s.id }));

  return (
    <main id="main">
      <Breadcrumbs
        items={[
          ...(hub ? [{ label: hub.name, href: hub.url }] : []),
          { label: doc.name },
        ]}
      />
      <article className="pg container-eve pg-layout">
        <div className="pg-main">
          <header className="pg-hero pg-split">
            <div className="pg-split-text">
              {hub && <span className="eyebrow">{hub.name}</span>}
              <h1>
                <InlineText source={doc.h1} />
              </h1>
              {(intro?.markdown || doc.lead.markdown) && (
                <div className="answer-first">
                  <Markdown source={intro?.markdown || doc.lead.markdown} />
                </div>
              )}
              <div className="btns">
                <BookButton />
                <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
                  <Phone size={18} strokeWidth={1.75} aria-hidden /> Call {site.phones[0].display}
                </a>
              </div>
            </div>
            <div className="pg-split-media">
              {lead ? (
                <EveImage src={lead} sizes="(max-width: 860px) 100vw, 460px" />
              ) : (
                <BadgePanel doc={doc} />
              )}
            </div>
          </header>

          {body.map((s) => (
            <SectionBlock key={s.id} section={s} />
          ))}

          {doc.reviewerNote !== null && doc.kind === "detail" && (
            <ReviewerBox note={doc.reviewerNote} />
          )}
        </div>

        <PageToc sections={tocSections} />
      </article>

      <div className="container-eve">
        <RelatedRail doc={doc} />
      </div>
      <CtaBand />
    </main>
  );
}
