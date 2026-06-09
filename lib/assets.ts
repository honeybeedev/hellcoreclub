import blobAssets from "./blob-assets.json";

/**
 * Maps an asset file name to its public Vercel Blob URL.
 *
 * URLs are populated by `npm run upload:assets` (see scripts/upload-assets.mjs),
 * which uploads everything in /assets to Vercel Blob and writes lib/blob-assets.json.
 *
 * Returns `null` when the asset hasn't been uploaded yet, so components can
 * fall back to an inline rendering.
 */
const assets = blobAssets as Record<string, string>;

export function asset(name: string): string | null {
  return assets[name] ?? null;
}
