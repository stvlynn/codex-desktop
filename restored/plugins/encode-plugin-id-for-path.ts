// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Wwe` companion for `emt`.

/** encodeURIComponent but keep `@` literal. */
export function encodePluginIdForPath(pluginId: string): string {
  return encodeURIComponent(pluginId).replaceAll("%40", "@");
}
