// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `Tz`) / export `yz`.

export type PluginLike = {
  id: string;
  [key: string]: unknown;
};

export type LogConnectorPluginActionPeers = {
  logProductEvent: (
    store: unknown,
    event: unknown,
    payload: Record<string, unknown>,
  ) => void;
  actionEvent: unknown;
  remotePluginId: (plugin: PluginLike) => unknown;
};

let peers: LogConnectorPluginActionPeers | null = null;

/** Wire connector-plugin analytics once companions land. */
export function setLogConnectorPluginActionPeers(
  next: LogConnectorPluginActionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `yz` / internal `Tz`.
 * Analytics for connector/plugin action.
 */
export function logConnectorPluginAction(
  store: unknown,
  args: {
    action: unknown;
    connectorId?: unknown;
    errorType?: unknown;
    plugin: PluginLike;
    result?: unknown;
    source?: unknown;
    surface?: unknown;
  },
): void {
  if (peers == null) {
    throw new Error("LogConnectorPluginAction peers are not configured");
  }
  peers.logProductEvent(store, peers.actionEvent, {
    action: args.action,
    connectorId: args.connectorId,
    errorType: args.errorType,
    pluginId: args.plugin.id,
    remotePluginId: peers.remotePluginId(args.plugin),
    result: args.result,
    source: args.source,
    surface: args.surface,
  });
}
