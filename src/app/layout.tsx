import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { site, siteUrl } from "@/lib/site-config";
import UtilityBar from "@/components/shell/UtilityBar";
import SiteHeader from "@/components/shell/SiteHeader";
import SiteFooter from "@/components/shell/SiteFooter";
import MobileActionBar from "@/components/shell/MobileActionBar";
import WhatsAppFab from "@/components/shell/WhatsAppFab";
import CookieBanner from "@/components/shell/CookieBanner";
import Analytics from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.name,
  description: `${site.name}, Gunjur, Bangalore.`,
  openGraph: {
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: process.env.SITE_INDEXABLE === "1" ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F3EA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${figtree.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <a className="skip" href="#main">
          Skip to content
        </a>
        <UtilityBar />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
        <WhatsAppFab />
        <CookieBanner />
        <Analytics />
        {process.env.VERCEL ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
