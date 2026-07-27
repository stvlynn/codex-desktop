// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OMl` / export `zs`.

/** True when value is a non-null object carrying `pluginName`. */
export function hasPluginNameField(
  value: unknown,
): value is { pluginName: unknown } {
  return value != null && typeof value === "object" && "pluginName" in value;
}
