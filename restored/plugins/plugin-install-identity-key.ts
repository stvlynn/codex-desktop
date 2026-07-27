// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `B8r` / export `SK`.

import { marketplacePathOrRemote } from "./marketplace-path-or-remote";

/** Stable key: marketplace:pluginId:remotePluginId. */
export function pluginInstallIdentityKey(entry: {
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
  return `${marketplacePathOrRemote(entry)}:${entry.plugin.id}:${remote ?? ""}`;
}
