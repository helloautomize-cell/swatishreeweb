import Image from "next/image";
import { assetEntry } from "@/lib/images";

export default function AssetImage({ file, size, className }: { file: string; size: number; className?: string }) {
  const image = assetEntry(file, size * 2);
  if (!image) return null;
  return <Image src={image.src} alt="" width={size} height={Math.round(size * image.source.h / image.source.w)} sizes={`${size}px`} loading="lazy" unoptimized className={className} />;
}
