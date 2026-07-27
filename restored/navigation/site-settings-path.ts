// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H3o` / export `DT`.

/** Build the in-app settings path for a Sites plugin id. */
export function buildSiteSettingsPath(siteId: string): string {
  return `/sites/${encodeURIComponent(siteId)}/settings`;
}
