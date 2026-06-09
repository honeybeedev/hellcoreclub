// Uploads the site's own assets (logo + material) to Vercel Blob.
//
// Usage:
//   BLOB_READ_WRITE_TOKEN=xxx node scripts/upload-assets.mjs
//
// Reads every file inside ./assets, uploads each via `put` (public access)
// and writes the resulting public URLs to lib/blob-assets.json so the site
// can reference them. Re-running overwrites the same paths (no random suffix).

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { put } from "@vercel/blob";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS_DIR = join(ROOT, "assets");
const OUTPUT = join(ROOT, "lib", "blob-assets.json");

const MIME = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

function contentType(name) {
  const ext = name.slice(name.lastIndexOf(".")).toLowerCase();
  return MIME[ext] ?? "application/octet-stream";
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "✖ BLOB_READ_WRITE_TOKEN não definido.\n" +
        "  Pegue o token em Vercel → Storage → seu Blob store → .env, ou rode `vercel env pull`."
    );
    process.exit(1);
  }

  let entries;
  try {
    entries = await readdir(ASSETS_DIR);
  } catch {
    console.error(`✖ Pasta de assets não encontrada: ${ASSETS_DIR}`);
    process.exit(1);
  }

  const manifest = {};
  for (const name of entries) {
    const full = join(ASSETS_DIR, name);
    if (!(await stat(full)).isFile()) continue;

    const data = await readFile(full);
    const { url } = await put(`site/${name}`, data, {
      access: "public",
      addRandomSuffix: false,
      contentType: contentType(name),
      allowOverwrite: true,
    });
    manifest[name] = url;
    console.log(`✓ ${name} → ${url}`);
  }

  await writeFile(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\n✓ ${Object.keys(manifest).length} asset(s) salvos em lib/blob-assets.json`);
}

main().catch((err) => {
  console.error("✖ Falha no upload:", err);
  process.exit(1);
});
