// One-shot favicon generation: EVE roundel mark on a cream disc.
// Outputs: src/app/icon.png (512), src/app/apple-icon.png (180, opaque),
// src/app/favicon.ico (16/32/48 PNG-compressed, hand-assembled container).
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "resources/images/brand/logo-mark-transparent.png";
const CREAM = "#F8F3EA";

async function makeTile(size, { opaqueSquare = false } = {}) {
  const discPad = 0; // disc is the full tile
  const markH = Math.round(size * 0.94); // mark nearly fills the disc
  const disc = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - discPad}" fill="${CREAM}"/></svg>`,
  );
  // A slightly blurred copy under the sharp artwork widens the alpha
  // footprint — strokes read ~1px thicker and survive 16-32px tab sizes.
  const resized = await sharp(SRC).resize({ height: markH }).png().toBuffer();
  const spread = await sharp(resized)
    .blur(Math.max(0.6, size / 256))
    .png()
    .toBuffer();
  const mark = await sharp(spread)
    .composite([{ input: resized, blend: "over" }])
    .png()
    .toBuffer();
  const base = opaqueSquare
    ? sharp({ create: { width: size, height: size, channels: 4, background: CREAM } })
    : sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } });
  const layers = opaqueSquare ? [{ input: mark }] : [{ input: disc }, { input: mark }];
  return base
    .composite(layers.map((l) => ({ ...l, gravity: "centre" })))
    .png()
    .toBuffer();
}

/** Minimal ICO container wrapping PNG buffers (Vista+ format, all modern browsers). */
function toIco(pngs, sizes) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);
  let offset = 6 + pngs.length * 16;
  const entries = pngs.map((png, i) => {
    const e = Buffer.alloc(16);
    e[0] = sizes[i] >= 256 ? 0 : sizes[i]; // width (0 = 256)
    e[1] = sizes[i] >= 256 ? 0 : sizes[i]; // height
    e[2] = 0; // palette
    e[4] = 1; // planes
    e[6] = 32; // bpp
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...pngs]);
}

const [icon, apple, ico16, ico32, ico48] = await Promise.all([
  makeTile(512),
  makeTile(180, { opaqueSquare: true }),
  makeTile(16),
  makeTile(32),
  makeTile(48),
]);

writeFileSync("src/app/icon.png", icon);
writeFileSync("src/app/apple-icon.png", apple);
writeFileSync("src/app/favicon.ico", toIco([ico16, ico32, ico48], [16, 32, 48]));
console.log("favicon set written: icon.png 512, apple-icon.png 180, favicon.ico 16/32/48");
