// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plugin display-name helper (exports $K / eq).

export type PluginDisplayNameInput = {
  displayName?: string | null;
  plugin: { name: string };
};

/** Title-case fallback when displayName is absent (local `GT` in this scope). */
export function titleCasePluginName(name: string): string {
  if (name.length === 0) return name;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/** Bundle `LN` / export `$K`. */
export function pluginDisplayName(plugin: PluginDisplayNameInput): string {
  return plugin.displayName ?? titleCasePluginName(plugin.plugin.name);
}

/** Bundle `RN` / export `eq` — ESM init retained as no-op. */
export function ensurePluginDisplayNameHelperInit(): void {}
