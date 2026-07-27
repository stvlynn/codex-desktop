// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NXc` / export `Gu`.

/** Flatten marketplace plugin row for catalog UI. */
export function toPluginCatalogEntry(args: {
  marketplaceName: string | null | undefined;
  marketplacePath: string | null | undefined;
  plugin: {
    id: string;
    installed: boolean;
    enabled: boolean;
    name: string;
    remotePluginId?: string | null;
    source: { type: string; [key: string]: unknown };
  };
}): {
  id: string;
  isAvailable: boolean;
  isRemoteCatalogEntry: boolean;
  marketplaceName: string | null | undefined;
  name: string;
  remotePluginId: string | null | undefined;
} {
  const { marketplaceName, marketplacePath, plugin } = args;
  return {
    id: plugin.id,
    isAvailable: plugin.installed && plugin.enabled,
    isRemoteCatalogEntry:
      marketplacePath == null && plugin.source.type === "remote",
    marketplaceName,
    name: plugin.name,
    remotePluginId: plugin.remotePluginId,
  };
}
