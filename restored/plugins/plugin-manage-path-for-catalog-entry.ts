// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `_4i` / export `Rz`.

import { pluginManagePluginsPath } from "./plugin-manage-plugins-path";
import { pluginMarketplaceRequestFields } from "./plugin-marketplace-request-fields";

/** Build manage-plugins path for a catalog install entry. */
export function pluginManagePathForCatalogEntry(
  entry: {
    marketplacePath?: string | null;
    remoteMarketplaceName?: string | null;
    plugin: { id: string; name: string; remotePluginId?: string | null };
  },
  options?: { hostId?: string | null },
): string {
  return pluginManagePluginsPath({
    hostId: options?.hostId ?? undefined,
    pluginId: entry.plugin.id,
    ...pluginMarketplaceRequestFields(entry),
  });
}

// --- missing-relative-export aliases ---
export { pluginManagePathForCatalogEntry as PluginManagePathForCatalogEntry };
