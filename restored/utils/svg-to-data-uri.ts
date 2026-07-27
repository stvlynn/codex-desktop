// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$rr` / export `N0` — encode an SVG markup string as a data URI.

/**
 * Convert raw SVG markup into a `data:image/svg+xml;utf8,…` URI.
 */
export function svgToDataUri(svgMarkup: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}`;
}

/** No-op Rolldown ESM init that registered `$rr` (export `P0` / bundle `eir`). */
export function ensureSvgToDataUriInit(): void {}
