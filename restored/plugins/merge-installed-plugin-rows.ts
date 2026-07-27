// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zes` / export `hw`.

import { pluginRowDedupeKey } from "./plugin-row-dedupe-key";

type PluginRow = {
  plugin: { id: string; installed?: boolean };
};

/** Union installed rows with created/shared/workspace rows (deduped). */
export function mergeInstalledPluginRows(args: {
  createdByMePlugins: readonly PluginRow[];
  installedPlugins: readonly PluginRow[];
  sharedWithYouPlugins: readonly PluginRow[];
  workspacePlugins: readonly PluginRow[];
}): PluginRow[] {
  const {
    createdByMePlugins,
    installedPlugins,
    sharedWithYouPlugins,
    workspacePlugins,
  } = args;
  const byId = new Map(installedPlugins.map((row) => [row.plugin.id, row]));
  const seenKeys = new Set(installedPlugins.map(pluginRowDedupeKey));
  for (const row of [
    ...createdByMePlugins,
    ...sharedWithYouPlugins,
    ...workspacePlugins,
  ]) {
    if (!row.plugin.installed) continue;
    const key = pluginRowDedupeKey(row);
    if (byId.has(row.plugin.id) || seenKeys.has(key)) continue;
    seenKeys.add(key);
    byId.set(row.plugin.id, row);
  }
  return Array.from(byId.values());
}
