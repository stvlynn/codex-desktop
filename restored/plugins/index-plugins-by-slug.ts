// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_ei` / export `PG`. Uses `slugifyLoose` (`xei` / `NG`).

import { slugifyLoose } from "../utils/slugify-loose";

type PluginLike = {
  id: string;
  name: string;
  pluginDisplayNames?: string[] | null;
};

/** Build a slug → plugin lookup (id/name/display + connector_ strip). */
export function indexPluginsBySlug<T extends PluginLike>(
  plugins: T[],
): Map<string, T> {
  const index = new Map<string, T>();
  for (const plugin of plugins) {
    const keys = [
      plugin.id,
      slugifyLoose(plugin.id),
      slugifyLoose(plugin.name),
      ...(plugin.pluginDisplayNames ?? []).map(slugifyLoose),
    ];
    if (plugin.id.startsWith("connector_")) {
      keys.push(slugifyLoose(plugin.id.slice(10)));
    }
    for (const key of keys) {
      if (key.length > 0 && !index.has(key)) index.set(key, plugin);
    }
  }
  return index;
}
