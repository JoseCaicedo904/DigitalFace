// Deterministic derivatives for the existing 44–64px client tiles. Originals stay intact.
import fs from "node:fs/promises";
import sharp from "sharp";

const files = [
  "dr-diego-sinisterra.png",
  "saboreo.png",
  "igrafit.png",
  "traffic-publicidad.jpeg",
  "motos-y-partes-de-occidente.png",
  "magic-soul.png",
];
const images = {};
const measurements = [];
await fs.mkdir("public/media/clients/optimized", { recursive: true });
for (const file of files) {
  const source = "/media/clients/" + file;
  const src = "/media/clients/optimized/" + file.replace(/\.[^.]+$/, ".webp");
  const originalBytes = (await fs.stat("public" + source)).size;
  const {
    data,
    info: { width, height, size },
  } = await sharp("public" + source)
    .resize({
      width: 256,
      height: 256,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ lossless: true })
    .toBuffer({ resolveWithObject: true });
  if (size < originalBytes) {
    await fs.writeFile("public" + src, data);
    images[source] = { src, width, height };
  } else {
    const metadata = await sharp("public" + source).metadata();
    images[source] = {
      src: source,
      width: metadata.width,
      height: metadata.height,
    };
  }
  measurements.push({
    source,
    ...images[source],
    originalBytes,
    optimizedBytes: Math.min(size, originalBytes),
  });
}
await fs.writeFile(
  "client/data/optimizedClientLogos.json",
  JSON.stringify(images, null, 2) + "\n",
);
await fs.writeFile(
  "seo-audit/client-logo-optimization.json",
  JSON.stringify(measurements, null, 2) + "\n",
);
console.log(JSON.stringify(measurements, null, 2));
