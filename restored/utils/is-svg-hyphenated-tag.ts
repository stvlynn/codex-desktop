// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Lt` / export `Svt`.

const SVG_EXCEPTIONS = new Set([
  "annotation-xml",
  "color-profile",
  "font-face",
  "font-face-src",
  "font-face-uri",
  "font-face-format",
  "font-face-name",
  "missing-glyph",
]);

/** True when a hyphenated tag name should be treated as SVG (not HTML). */
export function isSvgHyphenatedTag(tagName: string): boolean {
  if (tagName.indexOf("-") === -1) return false;
  return !SVG_EXCEPTIONS.has(tagName);
}
