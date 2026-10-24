import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: `${site.name}, Gunjur, Bangalore. Fertility and women's health care with ${site.doctor}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F3EA",
    theme_color: "#F8F3EA",
    lang: "en-IN",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
