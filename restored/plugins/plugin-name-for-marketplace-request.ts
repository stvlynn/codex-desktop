// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H8r` / export `wK`.

import { requireRemotePluginId } from "./require-remote-plugin-id";

/** Remote plugin id when marketplacePath is absent; else local plugin name. */
export function pluginNameForMarketplaceRequest(entry: {
  marketplacePath?: string | null;
  plugin: { id: string; name: string; remotePluginId?: string | null };
}): string {
  return entry.marketplacePath == null
    ? requireRemotePluginId(entry.plugin)
    : entry.plugin.name;
}
