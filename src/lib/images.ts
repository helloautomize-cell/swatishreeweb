import imagesMap from "../../public/images/images-map.json";
import assetsMap from "../../public/images/assets-map.json";

/*
 * Reads the generated maps from scripts/process-images.mjs.
 * Every image slot resolves through here: srcset, alt text, blur
 * placeholder and restriction flags all come from the manifest.
 */

export type ImageSlot = {
  page: string;
  section: string;
  crop: string;
  object_position?: string;
  priority?: boolean;
};

export type ImageEntry = {
  widths: number[];
  source: { w: number; h: number };
  alt: string;
  treatment?: string;
  slots?: ImageSlot[];
  id?: string;
  caption?: string | null;
  illustrative?: boolean;
  objectPosition?: string;
  withheld?: boolean;
  altApproved?: boolean;
  blur: { color: string; dataUrl: string };
  restricted?: boolean;
  devOnly?: boolean;
  missing?: boolean;
};

const images = imagesMap as unknown as Record<string, ImageEntry>;
const assets = assetsMap as unknown as Record<
  string,
  { widths: number[]; source: { w: number; h: number } }
>;

const toSrcSet = (rel: string, widths: number[], ext: "avif" | "webp") => {
  const base = rel.replace(/\.[^.]+$/, "");
  const dir = rel.includes("/") ? rel.slice(0, rel.lastIndexOf("/") + 1) : "";
  return widths
    .map((w) => `/images/${dir}${base.split("/").pop()}-w${w}.${ext} ${w}w`)
    .join(", ");
};

/** Resolve a manifest image ("doctor/foo.png") to render data. */
export function imageEntry(rel: string) {
  const key = images[rel] ? rel : Object.keys(images).find((file) => images[file].id === rel);
  const e = key ? images[key] : null;
  if (!e || !key || e.missing || e.withheld) return null;
  rel = key;
  const widest = Math.max(...e.widths);
  return {
    ...e,
    srcSetAvif: toSrcSet(rel, e.widths, "avif"),
    srcSetWebp: toSrcSet(rel, e.widths, "webp"),
    src: `/images/${rel.replace(/\.[^.]+$/, "")}-w${widest}.webp`,
    width: Math.round((e.source.w * widest) / e.source.w),
    height: Math.round((e.source.h * widest) / e.source.w),
  };
}

/** Resolve a generated asset file name ("badge-pcos.png") to render data. */
export function assetEntry(file: string, requestedWidth = 224) {
  const a = assets[file];
  if (!a) return null;
  const widest = a.widths.find((width) => width >= requestedWidth) ?? Math.max(...a.widths);
  const base = file.replace(/\.[^.]+$/, "");
  return {
    ...a,
    srcSetAvif: a.widths.map((w) => `/images/assets/${base}-w${w}.avif ${w}w`).join(", "),
    srcSetWebp: a.widths.map((w) => `/images/assets/${base}-w${w}.webp ${w}w`).join(", "),
    src: `/images/assets/${base}-w${widest}.webp`,
  };
}

export const allAssets = Object.keys(assets);

/*
 * Page URL -> manifest image file for the detail-page split hero.
 * Derived from the manifest slot `page` field at module scope.
 */
const PAGE_IMAGE: Record<string, string> = Object.fromEntries(
  Object.entries(images)
    .flatMap(([file, e]) =>
      (e.slots ?? []).flatMap((s) =>
        (s.page.match(/\/[\w-]+(?:\/[\w-]+)*\//g) ?? []).map((url) => [url, file]),
      ),
    ),
);

/** Lead image file for a page URL, if the manifest assigns one. */
export function pageLeadImage(url: string): string | null {
  const file = PAGE_IMAGE[url];
  return file && imageEntry(file) ? file : null;
}
