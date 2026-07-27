// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cqr`) / export `CX`.

export type BindBindDeferredUiCXPeers = {
  H_: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sqr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiCXPeers | null = null;

/** Wire bindBindDeferredUiCX peers once companions land. */
export function setBindBindDeferredUiCXPeers(next: BindBindDeferredUiCXPeers): void {
  peers = next;
}

/**
 * Bundle export `CX` / internal `Cqr`.
 */
export function bindBindDeferredUiCX() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiCX peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.Sqr, peers.H_));
}
