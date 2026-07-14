// Copies the self-hosted TinyMCE distribution into public/ so it can be
// served as static assets (no cloud API key / account required, GPL).
// Runs automatically on `npm install` via the postinstall script.
import { cpSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '..', 'node_modules', 'tinymce');
const dest = path.join(__dirname, '..', 'public', 'tinymce');

if (existsSync(src)) {
  cpSync(src, dest, { recursive: true });
  console.log('[copy-tinymce] Copied TinyMCE assets to public/tinymce');
} else {
  console.warn('[copy-tinymce] tinymce package not found in node_modules; skipping');
}
