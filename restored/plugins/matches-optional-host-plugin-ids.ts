// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `U3r` / export `JK`.

/** True when entry matches optional hostId/pluginId filters. */
export function matchesOptionalHostPluginIds(
  entry: { hostId?: string; pluginId?: string } | null | undefined,
  filter: { hostId?: string | null; pluginId?: string | null } = {},
): boolean {
  return (
    entry != null &&
    (filter.hostId == null || entry.hostId === filter.hostId) &&
    (filter.pluginId == null || entry.pluginId === filter.pluginId)
  );
}
