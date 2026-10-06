import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { InlineText, Markdown } from "@/lib/content/render";
import { WithConfirms } from "@/components/ConfirmChip";
import type { PageDoc } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import SectionBlock from "./SectionBlock";
import { CtaBand, RelatedLinks, ReviewerBox } from "./PageFoot";

/** Blog article template: meta line, in-brief lead, sections, sources. */
export default function PostPage({ doc }: { doc: PageDoc }) {
  return (
    <main id="main">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog/" },
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
            {site.doctor}
            {doc.meta.datePublished ? (
              <>
                {" · "}
                <WithConfirms text={doc.meta.datePublished} />
              </>
            ) : null}
            {doc.meta.readingTime ? ` · ${doc.meta.readingTime} min read` : ""}
          </p>
        </header>

        {doc.lead.markdown && (
          <div className="pg-brief">
            <Markdown source={doc.lead.markdown} />
          </div>
        )}

        {doc.sections.map((s) => (
          <SectionBlock key={s.id} section={s} />
        ))}

        <ReviewerBox note={doc.reviewerNote} />
        <RelatedLinks doc={doc} />
      </article>
      <CtaBand />
    </main>
  );
}
