import fs from "node:fs/promises";
import sharp from "sharp";

// Use only the owner-approved artwork; retain its proportions and transparency.
const source = "public/DIGITAL FACE favicon.png";
const png = (size) =>
  sharp(source)
    .resize(size, size, {
      fit: "contain",
      position: "centre",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "lanczos3",
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

for (const size of [48, 96, 180, 192])
  await fs.writeFile(`public/favicon-${size}x${size}.png`, await png(size));

// ICO directory with three PNG-encoded images, supported by modern ICO readers.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const directory = Buffer.alloc(6 + 16 * images.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(images.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + 16 * index;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await fs.writeFile("public/favicon.ico", Buffer.concat([directory, ...images]));
console.log(
  "Generated DigitalFace ICO (16/32/48), PNG (48/96/192), and Apple (180) icons.",
);
