"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

/** "Get directions" link with the `directions_click` event (Part 12). */
export default function DirectionsLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} onClick={() => track("directions_click")}>
      {children}
    </a>
  );
}
