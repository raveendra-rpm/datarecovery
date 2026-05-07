/**
 * Smart Image Conversion Script (v2)
 * - Compares original vs WebP size
 * - Reconverts at lower quality if WebP is larger
 * - Only replaces original when WebP is definitively smaller
 * Run: node scripts/convert-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, unlink, rename } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Quality ladder — tries these in order until WebP < original
const PHOTO_QUALITIES = [80, 70, 60];
const LOGO_QUALITIES  = [88, 78];

const isLogo = (p) => p.includes('partner_companies') || basename(p).includes('logo');
const fmtKB  = (b) => (b / 1024).toFixed(1) + ' KB';

async function getSize(p) {
  return (await stat(p)).size;
}

async function getAllSourceImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...(await getAllSourceImages(full)));
    } else if (/\.(jpg|jpeg|png)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

async function smartConvert(srcPath) {
  const ext    = extname(srcPath);
  const stem   = basename(srcPath, ext);
  const dir    = dirname(srcPath);
  const outPath = join(dir, `${stem}.webp`);

  const srcSize    = await getSize(srcPath);
  const qualities  = isLogo(srcPath) ? LOGO_QUALITIES : PHOTO_QUALITIES;

  // Delete any stale WebP from a previous run
  if (existsSync(outPath)) await unlink(outPath);

  let bestSize = Infinity;
  let bestQ    = null;

  for (const q of qualities) {
    await sharp(srcPath).webp({ quality: q, effort: 6 }).toFile(outPath);
    const webpSize = await getSize(outPath);
    if (webpSize < srcSize) {
      bestSize = webpSize;
      bestQ    = q;
      break; // found a quality that beats original
    }
    bestSize = webpSize;
    bestQ    = q;
  }

  const webpSize = await getSize(outPath);
  const saved    = srcSize - webpSize;
  const pct      = ((saved / srcSize) * 100).toFixed(1);
  const better   = webpSize < srcSize;

  return { srcPath, outPath, srcSize, webpSize, saved, pct, better, bestQ };
}

async function main() {
  console.log('\n🔍 Scanning public/ for source images...\n');
  const sources = await getAllSourceImages(PUBLIC_DIR);
  console.log(`Found ${sources.length} image(s)\n`);
  console.log('─'.repeat(72));

  const kept    = [];
  const skipped = [];

  for (const src of sources) {
    const name = basename(src);
    process.stdout.write(`  ${name.padEnd(42)}`);

    const r = await smartConvert(src);

    if (r.better) {
      // WebP is smaller → delete original, keep WebP
      await unlink(r.srcPath);
      kept.push(r);
      console.log(`✅ ${fmtKB(r.srcSize)} → ${fmtKB(r.webpSize)}  (-${r.pct}%)  [q=${r.bestQ}]`);
    } else {
      // WebP is NOT smaller even at lowest quality → keep original, delete WebP
      await unlink(r.outPath);
      skipped.push(r);
      console.log(`⏭️  kept original  (${fmtKB(r.srcSize)} < webp ${fmtKB(r.webpSize)})`);
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────────
  const totalBefore = kept.reduce((s, r) => s + r.srcSize, 0);
  const totalAfter  = kept.reduce((s, r) => s + r.webpSize, 0);
  const totalSaved  = totalBefore - totalAfter;

  console.log('\n' + '─'.repeat(72));
  console.log(`Converted  : ${kept.length} files`);
  console.log(`Kept as-is : ${skipped.length} files`);
  console.log(`Space saved: ${fmtKB(totalSaved)} (${fmtKB(totalBefore)} → ${fmtKB(totalAfter)})`);
  console.log('─'.repeat(72));

  if (skipped.length) {
    console.log('\n⚠️  These files stay in original format (already well-compressed):');
    skipped.forEach((r) => console.log(`   ${basename(r.srcPath)}`));
  }

  console.log('\n✅ Done!\n');

  // ── Print code changes needed ─────────────────────────────────────────────
  if (kept.length) {
    console.log('📝 Update these src paths in your components:\n');
    kept.forEach((r) => {
      const from = basename(r.srcPath);
      const to   = basename(r.outPath);
      console.log(`   ${from}  →  ${to}`);
    });
    console.log('');
  }
}

main().catch(console.error);
