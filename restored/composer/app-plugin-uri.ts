// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// App / plugin deep-link URI helpers (bundle `uRn`/`dRn`/`sRn`/`fw`/`cRn`/`lRn`/`pw`).
// Export aliases `G5`/`K5`/`J5`/`Y5` live in packets 000–005 — not claimed here.

export const APP_URI_SCHEME = "app://";
export const PLUGIN_URI_SCHEME = "plugin://";

/** Build an `app://{id}` URI (`sRn`). */
export function buildAppUri(appId: string): string {
  return `${APP_URI_SCHEME}${appId}`;
}

/** Build a `plugin://{id}` URI (`fw` / export `K5`). */
export function buildPluginUri(pluginId: string): string {
  return `${PLUGIN_URI_SCHEME}${pluginId.trim()}`;
}

/** Whether a path uses the `app://` scheme (`cRn`). */
export function isAppUri(path: string): boolean {
  return path.startsWith(APP_URI_SCHEME);
}

/** Whether a path uses the `plugin://` scheme (`lRn`). */
export function isPluginUri(path: string): boolean {
  return path.startsWith(PLUGIN_URI_SCHEME);
}

/**
 * Strip `plugin://` and optional query, returning the plugin id (`pw`).
 */
export function parsePluginIdFromUri(path: string): string | null {
  if (!isPluginUri(path)) return null;
  const rest = path.slice(PLUGIN_URI_SCHEME.length).trim();
  const queryIndex = rest.indexOf("?");
  const id = (queryIndex === -1 ? rest : rest.slice(0, queryIndex)).trim();
  return id.length === 0 ? null : id;
}
