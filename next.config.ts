import type { NextConfig } from "next";

/*
 * Security headers and CSP (master prompt Part 9.1/11, Phase 6). The CSP
 * allows only what the site actually loads: gtag.js after consent, the
 * Turnstile widget, Vercel Speed Insights, the Maps iframe (after a click)
 * and YouTube-nocookie if a page ever embeds one. There is no nonce
 * plumbing in this codebase, so inline `style` attributes and Next's own
 * inert JSON data/JSON-LD scripts need 'unsafe-inline'; tightening that to
 * a per-request nonce is a follow-up, not a Phase 6 blocker.
 */
// React dev mode and Turbopack HMR require eval; production never does.
const DEV_EVAL = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${DEV_EVAL} https://www.googletagmanager.com https://challenges.cloudflare.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com https://vitals.vercel-insights.com",
  "frame-src https://www.google.com https://www.youtube-nocookie.com https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

// Every host, including the Vercel preview domain, stays noindex until the
// client approves launch (master prompt Part 11 "SITE_INDEXABLE switch").
const ROBOTS_HEADER =
  process.env.SITE_INDEXABLE === "1"
    ? []
    : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [80],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...SECURITY_HEADERS, ...ROBOTS_HEADER],
      },
    ];
  },
};

export default nextConfig;
