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
  num?: number;
  pillar?: boolean;
};

function card(p: BlogCardPost) {
  return (
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
  );
}

/** Blog index cards with category filter chips (site-plan §13 blog index). */
export default function BlogCards({ posts, filters }: { posts: BlogCardPost[]; filters: string[] }) {
  const [active, setActive] = useState(0);
  const visible = active === 0 ? posts : posts.filter((p) => p.category === filters[active]);
  const groups: { name: string; posts: BlogCardPost[] }[] = [];
  for (const p of visible) {
    const g = p.category ?? "Articles";
    const last = groups[groups.length - 1];
    if (last && last.name === g) last.posts.push(p);
    else groups.push({ name: g, posts: [p] });
  }
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
      {groups.map((g) => (
        <section key={g.name} aria-label={g.name}>
          <h2 className="blog-group">{g.name}</h2>
          <div className="blog-grid" aria-live="polite">
            {g.posts.map(card)}
          </div>
        </section>
      ))}
      {visible.length === 0 && <p className="blog-empty">No articles in this topic yet.</p>}
    </>
  );
}
