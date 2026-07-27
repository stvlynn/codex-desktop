// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Plugin short-description resolver (bundle `c1r` / export `SJ`).

export type PluginShortDescriptionSource = {
  description?: string | null;
  short_description?: string | null;
  shortDescription?: string | null;
  interface?: { shortDescription?: string | null } | null;
};

/** Prefer `interface.shortDescription`, then snake/camel short fields, then `description`. */
export function getPluginShortDescription(plugin: PluginShortDescriptionSource): string | null | undefined {
  const fromInterface = plugin.interface?.shortDescription;
  if (fromInterface != null && fromInterface.trim().length > 0) {
    return fromInterface;
  }
  const { short_description: snake, shortDescription: camel } = plugin;
  return snake ?? camel ?? plugin.description;
}
