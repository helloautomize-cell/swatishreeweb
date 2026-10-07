/*
 * Shared sage line-embrace accent. Renders a decorative SVG line (2px sage,
 * round caps) that wraps a photo frame; optionally ends in the rose heart.
 * The draw animation is driven by the nearest ancestor with the `in` class
 * (added by <InView>), so each host controls when the line draws.
 */
export default function LineAccent({
  d,
  viewBox = "0 0 400 500",
  heart = false,
  heartD,
  className = "",
}: {
  d: string;
  viewBox?: string;
  heart?: boolean;
  heartD?: string;
  className?: string;
}) {
  return (
    <svg className={`line-accent${className ? " " + className : ""}`} viewBox={viewBox} aria-hidden>
      <path className="l" pathLength="1" d={d} />
      {heart && heartD ? <path className="heart" d={heartD} /> : null}
    </svg>
  );
}
