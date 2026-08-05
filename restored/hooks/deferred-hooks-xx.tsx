// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tqr`) / export `xX`.

export type BindBindDeferredHooksXXPeers = {
  H_: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  wqr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredHooksXXPeers | null = null;

/** Wire bindBindDeferredHooksXX peers once companions land. */
export function setBindBindDeferredHooksXXPeers(
  next: BindBindDeferredHooksXXPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xX` / internal `Tqr`.
 */
export function bindBindDeferredHooksXX() {
  if (peers == null) {
    throw new Error("bindBindDeferredHooksXX peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => e(peers.wqr, peers.H_));
}
