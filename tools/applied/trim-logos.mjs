// The supplied logo files carry a large empty border, which made the mark render
// tiny wherever it was placed. Trim the border and keep the untouched originals.
import sharp from "sharp";
import { mkdirSync, copyFileSync, existsSync } from "node:fs";

const DIR = "assets/images/logo";
const BACKUP = `${DIR}/_original`;
const FILES = [
  "logo-blue-mark.png",
  "logo-white-mark.png",
  "logo-blue-with-name.png",
  "logo-white-with-name.png",
];

mkdirSync(BACKUP, { recursive: true });

for (const file of FILES) {
  const src = `${DIR}/${file}`;
  const backup = `${BACKUP}/${file}`;
  if (!existsSync(backup)) copyFileSync(src, backup);

  const before = await sharp(backup).metadata();
  const buf = await sharp(backup)
    .ensureAlpha()
    .trim({ threshold: 12 })
    .png()
    .toBuffer();
  const after = await sharp(buf).metadata();

  await sharp(buf).toFile(src);
  console.log(
    `${file}: ${before.width}x${before.height} -> ${after.width}x${after.height}`
  );
}
