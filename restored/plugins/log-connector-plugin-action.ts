// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tz`) / export `yz`.

export type LogConnectorPluginActionPeers = {
  U$n: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  h3i: (...args: unknown[]) => unknown;
};
let peers: LogConnectorPluginActionPeers | null = null;

/** Wire logConnectorPluginAction peers once companions land. */
export function setLogConnectorPluginActionPeers(
  next: LogConnectorPluginActionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yz` / internal `Tz`.
 */
export function logConnectorPluginAction(
  e: unknown,
  {
    action,
    connectorId,
    errorType,
    plugin,
    result,
    source,
    surface,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("logConnectorPluginAction peers are not configured");
  }
  peers.Ub(e, peers.U$n, {
    action,
    connectorId,
    errorType,
    pluginId: plugin.id,
    remotePluginId: peers.h3i(plugin),
    result,
    source,
    surface,
  });
}
