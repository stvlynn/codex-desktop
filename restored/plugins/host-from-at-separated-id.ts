// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uu` / export `imt`.

/** Host/marketplace suffix after the last `@` in a plugin id. */
export function hostFromAtSeparatedId(pluginId: string): string | null {
  const at = pluginId.lastIndexOf("@");
  return at <= 0 || at === pluginId.length - 1 ? null : pluginId.slice(at + 1);
}
