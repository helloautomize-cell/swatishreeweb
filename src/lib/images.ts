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
  const e = images[rel];
  if (!e || e.missing) return null;
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
export function assetEntry(file: string) {
  const a = assets[file];
  if (!a) return null;
  const widest = Math.max(...a.widths);
  const base = file.replace(/\.[^.]+$/, "");
  return {
    ...a,
    srcSetAvif: a.widths.map((w) => `/images/assets/${base}-w${w}.avif ${w}w`).join(", "),
    srcSetWebp: a.widths.map((w) => `/images/assets/${base}-w${w}.webp ${w}w`).join(", "),
    src: `/images/assets/${base}-w${widest}.webp`,
  };
}

export const allAssets = Object.keys(assets);
