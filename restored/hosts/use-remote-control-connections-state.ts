// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `H1l`) / export `_i`.

export type UseRemoteControlConnectionsStatePeers = {
  usePersistedState: (key: "remote_control_connections_state") => [unknown];
  useSlingshotEnabled: () => boolean;
  deriveState: (args: {
    remoteControlConnectionsState: unknown;
    slingshotEnabled: boolean;
  }) => unknown;
};

let peers: UseRemoteControlConnectionsStatePeers | null = null;

/** Wire remote-control connections state peers once companions land. */
export function setUseRemoteControlConnectionsStatePeers(
  next: UseRemoteControlConnectionsStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `_i` / internal `H1l`.
 * Derived remote-control connections state.
 */
export function useRemoteControlConnectionsState(): unknown {
  if (peers == null) {
    throw new Error(
      "UseRemoteControlConnectionsState peers are not configured",
    );
  }
  const [remoteControlConnectionsState] = peers.usePersistedState(
    "remote_control_connections_state",
  );
  const slingshotEnabled = peers.useSlingshotEnabled();
  return peers.deriveState({
    remoteControlConnectionsState,
    slingshotEnabled,
  });
}
