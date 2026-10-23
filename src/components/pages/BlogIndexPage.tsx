import Link from "next/link";
import { InlineText } from "@/lib/content/render";
import { childrenOf, type PageDoc } from "@/lib/content/load";
import { pageLeadImage } from "@/lib/images";
import { CtaBand } from "./PageFoot";
import BlogCards from "./BlogCards";

/** Blog index: intro, topic filters, article cards, editorial footer line. */
export default function BlogIndexPage({ doc }: { doc: PageDoc }) {
  const field = (label: string) => doc.lead.fields.find((f) => f.label === label)?.value ?? "";
  const intro = field("Intro") || doc.lead.markdown;
  const filters = (field("Filters") || "All")
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
  const footer = field("Footer line");
  const posts = childrenOf("/blog/")
    .map((p) => ({
      url: p.url,
      name: p.h1.replace(/\*/g, ""),
      category: p.meta.category ?? null,
      cover: pageLeadImage(p.url),
      readingTime: p.meta.readingTime ?? null,
      datePublished: p.meta.datePublished ?? null,
      num: p.num,
      pillar: p.meta.pillar === true,
    }))
    .sort((a, b) => a.num - b.num);
  return (
    <main id="main">
      <div className="pg pg-hub container-eve">
        <header className="pg-hero">
          <span className="eyebrow">Blog</span>
          <h1>
            <InlineText source={doc.h1} />
          </h1>
          {intro && (
            <p className="pg-sub">
              <InlineText source={intro} />
            </p>
          )}
        </header>
        <BlogCards posts={posts} filters={filters} />
        {footer && (
          <p className="blog-footer">
            {footer.split(/(Read our editorial policy\.?)/i).map((part, i) =>
              /read our editorial policy/i.test(part) ? (
                <Link className="link" href="/editorial-policy/" key={i}>
                  {part}
                </Link>
              ) : (
                <InlineText key={i} source={part} />
              ),
            )}
          </p>
        )}
      </div>
      <CtaBand />
    </main>
  );
}
