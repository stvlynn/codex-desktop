// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FGt` / export `rrt`.

/**
 * Set the hash on an absolute URL. When `allowRelative` is true, also rewrite
 * relative strings that parse against a dummy base.
 */
export function setUrlHash(href: string, hash: string, allowRelative?: boolean): string {
  const parsed = URL.parse(href);
  if (parsed) {
    parsed.hash = hash;
    return parsed.href;
  }
  if (allowRelative === true) {
    try {
      // Validate relative href against a dummy base (bundle `PGt` behavior).
      new URL(href, "http://example.com");
      return href.split("#", 1)[0] + (hash ? `#${hash}` : "");
    } catch {
      return "";
    }
  }
  return "";
}
