import sharp from 'sharp';
import { readFile, writeFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const targets = [
  { file: 'public/images/hero_banner/hero_banner_one.webp',   q: 65, maxW: 1600 },
  { file: 'public/images/hero_banner/hero_banner_two.webp',   q: 65, maxW: 1600 },
  { file: 'public/images/hero_banner/hero_banner_three.webp', q: 65, maxW: 1600 },
  { file: 'public/images/all_device_cover_recovery.webp',     q: 70, maxW: 900  },
  { file: 'public/images/flexible_timing_recovery.webp',      q: 70, maxW: 900  },
  { file: 'public/images/safe_confidential_recovery.webp',    q: 70, maxW: 900  },
  { file: 'public/images/partner_companies/airtel-logo.webp', q: 80, maxW: 400  },
];

const fmtKB = (b) => (b / 1024).toFixed(0) + ' KB';

for (const t of targets) {
  const full   = join(ROOT, t.file);
  const before = (await stat(full)).size;

  // Read entire file into memory first — releases the file handle before we write
  const inputBuf = await readFile(full);

  const outputBuf = await sharp(inputBuf)
    .resize({ width: t.maxW, withoutEnlargement: true })
    .webp({ quality: t.q, effort: 6 })
    .toBuffer();

  // Now file handle is free — write the new content back
  await writeFile(full, outputBuf);
  const after = (await stat(full)).size;

  const name = t.file.split('/').pop().padEnd(42);
  const pct  = (((before - after) / before) * 100).toFixed(1);
  const arrow = after < before ? '✅' : '⚠️ ';
  console.log(`${arrow} ${name} ${fmtKB(before)} → ${fmtKB(after)}  (${after < before ? '-' : '+'}${Math.abs(pct)}%)`);
}

console.log('\n✅ Recompression complete.');
