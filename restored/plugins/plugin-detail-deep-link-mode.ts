// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S4i` / export `zz`.

export type PluginDetailDeepLinkMode = "share" | "view";

/** Read `pluginDetailDeepLinkMode` when it is share|view. */
export function pluginDetailDeepLinkMode(
  value: unknown,
): PluginDetailDeepLinkMode | null {
  if (typeof value !== "object" || !value) return null;
  const mode = Reflect.get(value, "pluginDetailDeepLinkMode");
  return mode === "share" || mode === "view" ? mode : null;
}
