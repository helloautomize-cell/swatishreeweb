import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site-config";
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
  title: site.name,
  description: `${site.name}, Gunjur, Bangalore.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${figtree.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
