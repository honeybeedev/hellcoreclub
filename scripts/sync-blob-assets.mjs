// Lista os arquivos já existentes no Vercel Blob store e grava as URLs públicas
// em lib/blob-assets.json (mescla com o que já estiver lá).
//
// Uso:
//   BLOB_READ_WRITE_TOKEN=xxx node scripts/sync-blob-assets.mjs
// (o token também é lido de .env.local automaticamente pelo `node --env-file`)

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { list } from "@vercel/blob";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT = join(ROOT, "lib", "blob-assets.json");

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "✖ BLOB_READ_WRITE_TOKEN não definido. Adicione ao .env.local e rode novamente."
    );
    process.exit(1);
  }

  const existing = JSON.parse(
    await readFile(OUTPUT, "utf8").catch(() => "{}")
  );

  const { blobs } = await list();
  if (blobs.length === 0) {
    console.warn("⚠ Nenhum arquivo encontrado no Blob store.");
  }

  for (const blob of blobs) {
    const name = basename(blob.pathname);
    existing[name] = blob.url;
    console.log(`✓ ${name} → ${blob.url}`);
  }

  await writeFile(OUTPUT, JSON.stringify(existing, null, 2) + "\n");
  console.log(`\n✓ ${blobs.length} asset(s) sincronizados em lib/blob-assets.json`);
}

main().catch((err) => {
  console.error("✖ Falha ao sincronizar:", err);
  process.exit(1);
});
