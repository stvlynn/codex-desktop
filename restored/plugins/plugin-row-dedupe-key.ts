// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ces` companion for plugin row merge/filter helpers.

import { marketplacePathOrRemote } from "./marketplace-path-or-remote";

/** Stable dedupe key for a catalog/installed plugin row. */
export function pluginRowDedupeKey(entry: {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
  plugin: {
    id: string;
    remotePluginId?: string | null;
    shareContext?: { remotePluginId?: string | null } | null;
  };
}): string {
  const remote =
    entry.plugin.remotePluginId ?? entry.plugin.shareContext?.remotePluginId;
  return remote == null
    ? `plugin:${marketplacePathOrRemote(entry)}:${entry.plugin.id}`
    : `remote:${remote}`;
}
