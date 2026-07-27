// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H1l`) / export `_i`.

export type UseRemoteControlConnectionsStatePeers = {
  B_: (...args: unknown[]) => unknown;
  G1l: (...args: unknown[]) => unknown;
  U1l: (...args: unknown[]) => unknown;
  uGr: (...args: unknown[]) => unknown;
};

let peers: UseRemoteControlConnectionsStatePeers | null = null;

/** Wire useRemoteControlConnectionsState peers once companions land. */
export function setUseRemoteControlConnectionsStatePeers(next: UseRemoteControlConnectionsStatePeers): void {
  peers = next;
}

/**
 * Bundle export `_i` / internal `H1l`.
 */
export function useRemoteControlConnectionsState() {
  if (peers == null) {
    throw new Error(
      "useRemoteControlConnectionsState peers are not configured",
    );
  }

  let e = (0, peers.G1l.c)(3),
    [t] = peers.B_(`remote_control_connections_state`),
    n = peers.uGr(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = peers.U1l({
          remoteControlConnectionsState: t,
          slingshotEnabled: n,
        })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
