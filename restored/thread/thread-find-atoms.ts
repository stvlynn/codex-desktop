// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CVi`) / export `HH`.

export type BindThreadFindAtomsPeers = {
  EL: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  TL: (...args: unknown[]) => unknown;
  UBi: (...args: unknown[]) => unknown;
  contextId: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  wL: (...args: unknown[]) => unknown;
};

let peers: BindThreadFindAtomsPeers | null = null;

/** Wire bindThreadFindAtoms peers once companions land. */
export function setBindThreadFindAtomsPeers(next: BindThreadFindAtomsPeers): void {
  peers = next;
}

/**
 * Bundle export `HH` / internal `CVi`.
 */
export function bindThreadFindAtoms() {
  if (peers == null) {
    throw new Error("bindThreadFindAtoms peers are not configured");
  }

  return peers.Ma(peers.hT, ({
    get: e
  }) => peers.UBi({
    query: e(peers.TL).trim(),
    routeContextId: e(peers.EL)?.contextId ?? `unavailable`,
    stateDomain: e(peers.wL),
    result: e(peers.EL)
  }, `conversation`));
}
