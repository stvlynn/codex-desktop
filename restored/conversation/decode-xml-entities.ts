// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sxt` companion for realtime-delegation parsing.

/** Decode a minimal XML/HTML entity set. */
export function decodeXmlEntities(value: string): string {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
}
