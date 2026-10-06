import AssetImage from "@/components/AssetImage";
import { badgeFor } from "@/lib/service-badges";
import type { PageDoc } from "@/lib/content/load";

/*
 * Badge panel (Part 5.5): shown in place of a lead photo when the page has
 * none — a blush-to-white panel with the large badge, sparkles and a ring.
 */
export default function BadgePanel({ doc }: { doc: PageDoc }) {
  const file =
    (doc.meta.badge ? badgeFor(doc.meta.badge) : null) ?? "badge-doctor.png";
  return (
    <div className="badge-panel" aria-hidden={!file}>
      <span className="bp-ring" aria-hidden />
      <span className="bp-spark s1" aria-hidden />
      <span className="bp-spark s2" aria-hidden />
      {file ? <AssetImage file={file} size={200} /> : null}
    </div>
  );
}
