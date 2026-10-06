import Image from "next/image";
import { imageEntry } from "@/lib/images";
import ConfirmChip from "./ConfirmChip";

type Props = {
  /** Manifest-relative path, e.g. "doctor/doctor-hero-portrait-4x5-INTERIM.png" */
  src: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  caption?: string;
  priority?: boolean;
};

/**
 * Renders a manifest image: AVIF + WebP srcsets at generated widths, blur
 * placeholder, alt from the manifest, never upscaled. Restricted slots are
 * hidden in production and marked in development.
 */
export default function EveImage({
  src,
  sizes = "100vw",
  className,
  imgClassName,
  objectPosition,
  caption,
  priority,
}: Props) {
  const e = imageEntry(src);
  if (!e) return null;

  if (e.restricted && process.env.NODE_ENV === "production") return null;

  const img = (
    <span className={className}>
      <Image
        src={e.src}
        sizes={sizes}
        alt={e.alt}
        width={e.source.w}
        height={e.source.h}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        quality={80}
        placeholder="blur"
        blurDataURL={e.blur.dataUrl}
        className={imgClassName}
        style={{ objectPosition: objectPosition ?? e.objectPosition, maxWidth: e.source.w }}
      />
    </span>
  );

  caption ??= e.illustrative ? "Illustrative image" : e.caption ?? undefined;

  const flag =
    e.restricted || e.devOnly ? (
      <ConfirmChip
        note={e.devOnly ? "interim file, replace before launch" : "use after permission or approval"}
      />
    ) : null;

  if (caption || flag) {
    return (
      <figure style={{ margin: 0 }}>
        {img}
        <figcaption style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 6 }}>
          {caption}
          {flag ? <> {flag}</> : null}
        </figcaption>
      </figure>
    );
  }
  return img;
}
