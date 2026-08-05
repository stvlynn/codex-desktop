// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sx`) / export `L9`.

export type BindBindDesktopWorkspaceDiscoveryPeers = {
  Au: (...args: unknown[]) => unknown;
  C5t: (...args: unknown[]) => unknown;
  F7t: (...args: unknown[]) => unknown;
  I7t: (...args: unknown[]) => unknown;
  L5t: (...args: unknown[]) => unknown;
  L7t: (...args: unknown[]) => unknown;
  N7t: (...args: unknown[]) => unknown;
  P7t: (...args: unknown[]) => unknown;
  X5t: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ex: (...args: unknown[]) => unknown;
  ix: (...args: unknown[]) => unknown;
  m8t: (...args: unknown[]) => unknown;
  nx: (...args: unknown[]) => unknown;
  ox: (...args: unknown[]) => unknown;
  w7t: (...args: unknown[]) => unknown;
};

let peers: BindBindDesktopWorkspaceDiscoveryPeers | null = null;

/** Wire bindBindDesktopWorkspaceDiscovery peers once companions land. */
export function setBindBindDesktopWorkspaceDiscoveryPeers(
  next: BindBindDesktopWorkspaceDiscoveryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `L9` / internal `sx`.
 */
export function bindBindDesktopWorkspaceDiscovery() {
  if (peers == null) {
    throw new Error(
      "bindBindDesktopWorkspaceDiscovery peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.ex(),
      peers.nx(),
      peers.L5t(),
      peers.C5t(),
      peers.w7t(),
      peers.Au(),
      peers.ix(),
      peers._p(),
      (N7t = new peers.m8t()),
      (P7t = 4),
      (ox = null),
      (F7t = new peers.X5t(0)),
      (I7t = []),
      (L7t = {
        shouldSample: (e, t) => peers.F7t.shouldSample(peers.e, t),
        toString: () => peers.F7t.toString(),
      }));
  });
}
