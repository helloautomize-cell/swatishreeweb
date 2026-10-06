import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadPages, pageByUrl, type PageDoc } from "@/lib/content/load";
import { ogImage } from "@/lib/site-config";
import { buildGraph } from "@/lib/schema/graph";
import DetailPage from "@/components/pages/DetailPage";
import DoctorPage from "@/components/pages/DoctorPage";
import HomePage from "@/components/home/HomePage";
import BlogIndexPage from "@/components/pages/BlogIndexPage";
import HubPage from "@/components/pages/HubPage";
import JourneyPage from "@/components/pages/JourneyPage";
import LegalPage from "@/components/pages/LegalPage";
import PostPage from "@/components/pages/PostPage";
import StandardPage from "@/components/pages/StandardPage";

/*
 * Content catch-all (Part 9.1): every URL in resources/content/**.md renders
 * here through its template. Explicit routes (/styleguide, /thank-you) win
 * over the catch-all; anything else falls through to not-found.
 */

const toPath = (slug?: string[]) =>
  "/" + (slug ?? []).join("/") + (slug?.length ? "/" : "");

export function generateStaticParams() {
  return loadPages()
    .filter((p) => p.url !== "/404" && p.url !== "/thank-you/")
    .map((p) => ({
      slug: p.url === "/" ? [] : p.url.replace(/^\//, "").replace(/\/$/, "").split("/"),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = pageByUrl(toPath(slug));
  if (!doc) return {};
  return {
    title: doc.meta.title,
    description: doc.meta.description,
    alternates: { canonical: doc.url },
    openGraph: {
      title: doc.meta.title,
      description: doc.meta.description,
      url: doc.url,
      images: [{ url: ogImage(doc.url), width: 1200, height: 630, alt: doc.meta.title }],
    },
  };
}

function Template({ doc }: { doc: PageDoc }) {
  switch (doc.kind) {
    case "home":
      return <HomePage doc={doc} />;
    case "detail":
      return <DetailPage doc={doc} />;
    case "hub":
      return <HubPage doc={doc} />;
    case "post":
      return <PostPage doc={doc} />;
    case "blogIndex":
      return <BlogIndexPage doc={doc} />;
    case "legal":
      return <LegalPage doc={doc} />;
    default:
      if (doc.url === "/dr-swati-shree/") return <DoctorPage doc={doc} />;
      if (doc.url === "/your-fertility-journey/") return <JourneyPage doc={doc} />;
      return <StandardPage doc={doc} />;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const doc = pageByUrl(toPath(slug));
  if (!doc) notFound();
  const graph = buildGraph(doc);
  return (
    <>
      {graph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      )}
      <Template doc={doc} />
    </>
  );
}
