// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `C_u` / export `ft`.

/** Phase for the matching host/plugin install row, else null. */
export function matchingPluginInstallPhase(
  row: { hostId: string; pluginId: string; phase: unknown } | null | undefined,
  hostId: string,
  pluginId: string,
): unknown {
  return row != null && row.hostId === hostId && row.pluginId === pluginId
    ? row.phase
    : null;
}
