// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-14: font-family normalize keys (legacy compare-key + quote strip).

/** Lowercase compare key for a CSS family token. */
export function normalizeFontFamilyKey(raw: string): string {
  return raw
    .replace(/^['"]|['"]$/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/** Strip wrapping quotes + unescape for display/warn paths. */
export function stripCssFontFamilyQuotes(raw: string): string {
  return raw
    .replace(/^['"]|['"]$/g, "")
    .replace(/\\'/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
