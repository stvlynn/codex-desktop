// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `W8r` / export `DK`.

/** Return `remotePluginId` or throw when missing. */
export function requireRemotePluginId(plugin: {
  id: string;
  remotePluginId?: string | null;
}): string {
  if (plugin.remotePluginId == null) {
    throw new Error(`remote plugin ${plugin.id} is missing remotePluginId`);
  }
  return plugin.remotePluginId;
}
