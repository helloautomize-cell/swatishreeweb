import type { MetadataRoute } from "next";
import { abs } from "@/lib/site-config";

/*
 * SITE_INDEXABLE gates crawling on every host (site-plan §14). Until it is
 * set to "1" robots.txt disallows everything; the layout also emits a
 * noindex meta. At launch the listed AI crawlers are explicitly allowed
 * (site-plan §10) in addition to the catch-all.
 */
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  const indexable = process.env.SITE_INDEXABLE === "1";
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" }, sitemap: abs("/sitemap.xml") };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Googlebot", "Bingbot", ...AI_BOTS], allow: "/" },
    ],
    sitemap: abs("/sitemap.xml"),
  };
}
