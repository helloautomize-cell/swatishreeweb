import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { assetEntry } from "@/lib/images";
import { badgeFor } from "@/lib/service-badges";

/**
 * Signature arch-topped glass card (master prompt Part 4.7).
 * Living gradient blobs, illustrated badge with orbit ring, coin turn and
 * sheen on hover; gradient arrow overlaps the arch bottom by half.
 */
export default function ServiceGlassCard({
  slug,
  title,
  line,
  group = 0,
  href = "#",
}: {
  slug: string;
  title: string;
  line: string;
  group?: number;
  href?: string;
}) {
  const badgeFile = badgeFor(slug);
  const badge = badgeFile ? assetEntry(badgeFile) : null;

  return (
    <a className={`sgc g${group % 5}`} href={href}>
      <div className="arch2">
        <span className="blob a" aria-hidden />
        <span className="blob b" aria-hidden />
        <span className="badge">
          <span className="coin">
            {badge ? (
              <Image
                src={badge.src}
                unoptimized
                sizes="112px"
                alt=""
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
              />
            ) : null}
          </span>
        </span>
        <span className="go2" aria-hidden>
          <ArrowRight size={18} strokeWidth={1.75} />
        </span>
      </div>
      <b>{title}</b>
      <span className="d">{line}</span>
    </a>
  );
}
