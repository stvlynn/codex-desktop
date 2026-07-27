// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Display helper: host + path + search + hash from a URL string
// (bundle `vUa` / export `DM`).

/** Format a URL for compact display (host/path/search/hash; no protocol). */
export function formatUrlHostPath(url: string | null | undefined): string | null {
  if (url == null) return null;
  const parsed = new URL(url);
  const path = parsed.pathname === "/" ? "" : parsed.pathname;
  return `${parsed.host}${path}${parsed.search}${parsed.hash}`;
}
