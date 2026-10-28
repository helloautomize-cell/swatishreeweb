import type { ReactNode } from "react";

/** "Get directions" link; the document-level listener in `AnalyticsEvents`
 * reports the click as `directions_click` (Part 12). */
export default function DirectionsLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return <a href={href}>{children}</a>;
}
