// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `S_u` / export `pt`.

/** Progress for the matching host/plugin install row, else null. */
export function matchingPluginInstallProgress(
  row:
    | { hostId: string; pluginId: string; progress: unknown }
    | null
    | undefined,
  hostId: string,
  pluginId: string,
): unknown {
  return row != null && row.hostId === hostId && row.pluginId === pluginId
    ? row.progress
    : null;
}
