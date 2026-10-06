import type { MetadataRoute } from "next";
import { loadPages } from "@/lib/content/load";
import { abs } from "@/lib/site-config";

const FREQ: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  home: "weekly",
  hub: "monthly",
  detail: "monthly",
  blogIndex: "weekly",
  post: "monthly",
  legal: "yearly",
  core: "monthly",
};
const PRIORITY: Record<string, number> = {
  home: 1,
  hub: 0.8,
  detail: 0.7,
  blogIndex: 0.6,
  post: 0.6,
  legal: 0.3,
  core: 0.6,
};

/** All indexable content routes. Utility pages (thank-you, 404) are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return loadPages()
    .filter((p) => p.kind !== "utility")
    .map((p) => ({
      url: abs(p.url),
      changeFrequency: FREQ[p.kind] ?? "monthly",
      priority: PRIORITY[p.kind] ?? 0.5,
    }));
}
