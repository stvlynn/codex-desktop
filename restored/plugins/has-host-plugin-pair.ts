// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `H3r` / export `YK`.

/** True when `items` already contains the hostId/pluginId pair. */
export function hasHostPluginPair(
  items: Array<{ hostId: string; pluginId: string }>,
  target: { hostId: string; pluginId: string },
): boolean {
  return items.some(
    ({ hostId, pluginId }) =>
      hostId === target.hostId && pluginId === target.pluginId,
  );
}
