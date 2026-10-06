"use client";

import { useState } from "react";
import Link from "next/link";
import AssetImage from "@/components/AssetImage";
import { WithConfirms } from "@/components/ConfirmChip";
import { badgeFor } from "@/lib/service-badges";
import { site } from "@/lib/site-config";

export type BlogCardPost = {
  url: string;
  name: string;
  category: string | null;
  badge: string | null;
  readingTime: number | null;
  datePublished: string | null;
};

/** Blog index cards with category filter chips (site-plan §13 blog index). */
export default function BlogCards({ posts, filters }: { posts: BlogCardPost[]; filters: string[] }) {
  const [active, setActive] = useState(0);
  const visible = active === 0 ? posts : posts.filter((p) => p.category === filters[active]);
  return (
    <>
      <div className="blog-filters" role="group" aria-label="Filter articles by topic">
        {filters.map((f, i) => (
          <button
            key={f}
            type="button"
            className="blog-chip"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="blog-grid" aria-live="polite">
        {visible.map((p) => (
          <Link className="hm-post" href={p.url} key={p.url}>
            <span className="hm-post-cover" aria-hidden>
              {p.badge && badgeFor(p.badge) && <AssetImage file={badgeFor(p.badge)!} size={112} />}
            </span>
            {p.category && <span className="hm-post-cat">{p.category}</span>}
            <span className="hm-post-t">{p.name}</span>
            <span className="hm-post-meta">
              Written by {site.doctor} · <WithConfirms text={p.datePublished ?? ""} />
              {p.readingTime ? ` · ${p.readingTime} min read` : ""}
            </span>
          </Link>
        ))}
        {visible.length === 0 && <p className="blog-empty">No articles in this topic yet.</p>}
      </div>
    </>
  );
}
