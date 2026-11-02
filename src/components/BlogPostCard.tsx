import Link from "next/link";
import EveImage from "@/components/EveImage";
import { WithConfirms } from "@/components/ConfirmChip";
import { site } from "@/lib/site-config";

export type BlogCardPost = {
  url: string;
  name: string;
  category: string | null;
  cover: string | null;
  readingTime: number | null;
  datePublished: string | null;
  num?: number;
  pillar?: boolean;
};

/** Blog card shared by the /blog/ index and the homepage "From our blog" row. */
export default function BlogPostCard({ post: p }: { post: BlogCardPost }) {
  return (
    <Link className="hm-post" href={p.url}>
      {p.cover ? (
        <EveImage
          src={p.cover}
          kind="photo"
          decorative
          className="hm-post-cover"
          sizes="(max-width: 860px) 100vw, (max-width: 1200px) 33vw, 380px"
        />
      ) : (
        <span className="hm-post-cover hm-post-cover--empty" aria-hidden />
      )}
      {p.category && <span className="hm-post-cat">{p.category}</span>}
      <span className="hm-post-t">{p.name}</span>
      <span className="hm-post-meta">
        Written by {site.doctor}
        {p.datePublished ? (
          <>
            {" "}
            · <WithConfirms text={p.datePublished} />
          </>
        ) : null}
        {p.readingTime ? ` · ${p.readingTime} min read` : ""}
      </span>
    </Link>
  );
}
