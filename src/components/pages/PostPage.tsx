import Link from "next/link";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { InlineText, Markdown } from "@/lib/content/render";
import { WithConfirms } from "@/components/ConfirmChip";
import EveImage from "@/components/EveImage";
import { pageLeadImage } from "@/lib/images";
import { formatReviewDate } from "@/lib/facts";
import type { PageDoc } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import SectionBlock from "./SectionBlock";
import { AuthorBox, CtaBand, RelatedLinks, ReviewerBox } from "./PageFoot";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}/;

/** Blog article template: byline, hero image, in-brief lead, sections, sources. */
export default function PostPage({ doc }: { doc: PageDoc }) {
  const heroFile = pageLeadImage(doc.url);
  const published = doc.meta.datePublished;
  const updated = doc.meta.dateModified;
  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog/" },
          ...(doc.meta.cluster ? [{ label: doc.meta.cluster }] : []),
          { label: doc.name },
        ]}
      />
      <article className="pg pg-post container-eve">
        <header className="pg-hero">
          {doc.meta.category && <span className="eyebrow">{doc.meta.category}</span>}
          <h1>
            <InlineText source={doc.h1} />
          </h1>
          <p className="pg-postmeta">
            Written by{" "}
            <Link className="link" href="/dr-swati-shree/">
              {site.doctor}
            </Link>
            , reproductive medicine specialist, Bangalore
            {published ? (
              <>
                {" · Published "}
                {ISO_DATE.test(published) ? (
                  <time dateTime={published.slice(0, 10)}>
                    {formatReviewDate(published)}
                  </time>
                ) : (
                  <WithConfirms text={published} />
                )}
              </>
            ) : null}
            {updated ? (
              <>
                {" · Updated "}
                {ISO_DATE.test(updated) ? (
                  <time dateTime={updated.slice(0, 10)}>
                    {formatReviewDate(updated)}
                  </time>
                ) : (
                  <WithConfirms text={updated} />
                )}
              </>
            ) : null}
            {doc.meta.readingTime ? ` · ${doc.meta.readingTime} min read` : ""}
          </p>
          <p className="pg-postmeta pg-postmeta--review">
            Medically reviewed by{" "}
            <Link className="link" href="/dr-swati-shree/">
              {site.doctor}
            </Link>
            , MBBS, DNB (OBG), MRCOG (UK)
          </p>
        </header>

        {heroFile && (
          <figure className="pg-post-hero">
            <EveImage
              src={heroFile}
              sizes="(max-width: 860px) 100vw, 720px"
              priority
              kind="photo"
            />
          </figure>
        )}

        {doc.lead.markdown && (
          <div className="pg-brief">
            <Markdown source={doc.lead.markdown} />
          </div>
        )}

        {doc.sections.map((s) => (
          <SectionBlock key={s.id} section={s} />
        ))}

        <AuthorBox />
        <ReviewerBox note={doc.reviewerNote} lastReviewed={doc.meta.lastReviewed} />
        <RelatedLinks doc={doc} />
      </article>
      <CtaBand />
    </main>
  );
}
