// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m5r` companion for openai curated checks (`h5r`/`AK`).

/** Lowercase kebab token for marketplace id comparisons. */
export function normalizeMarketplaceToken(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
