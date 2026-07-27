// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `xei` / export `NG`.

/** Lowercase slug: non-alnum runs become hyphens. */
export function slugifyLoose(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gu, "-");
}
