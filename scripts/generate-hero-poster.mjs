// Extract the first frame of the approved local hero video; no new marketing artwork.
// Requires ffmpeg on PATH or FFMPEG_PATH pointing at its executable.
import { execFileSync } from "node:child_process";
import sharp from "sharp";
import fs from "node:fs/promises";

const frame = execFileSync(
  process.env.FFMPEG_PATH || "ffmpeg",
  [
    "-hide_banner",
    "-loglevel",
    "error",
    "-i",
    "public/videos/digitalface-hero.mp4",
    "-frames:v",
    "1",
    "-f",
    "image2pipe",
    "-vcodec",
    "png",
    "pipe:1",
  ],
  { maxBuffer: 20 * 1024 * 1024 },
);
await fs.mkdir("public/images", { recursive: true });
const result = await sharp(frame)
  .resize({ width: 1280, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile("public/images/hero-poster.webp");
console.log(
  JSON.stringify({
    source: "public/videos/digitalface-hero.mp4",
    frame: 0,
    poster: "public/images/hero-poster.webp",
    ...result,
  }),
);
