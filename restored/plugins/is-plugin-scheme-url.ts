// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lRn` / export `Y5`. Companion `dRn` = `"plugin://"`.

export const PLUGIN_SCHEME_PREFIX = "plugin://";

/** True when value starts with the `plugin://` scheme. */
export function isPluginSchemeUrl(value: string): boolean {
  return value.startsWith(PLUGIN_SCHEME_PREFIX);
}
