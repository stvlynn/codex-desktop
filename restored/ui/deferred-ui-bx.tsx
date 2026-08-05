// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bqr`) / export `bX`.

export type BindBindDeferredUiBXPeers = {
  Eh: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  yqr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiBXPeers | null = null;

/** Wire bindBindDeferredUiBX peers once companions land. */
export function setBindBindDeferredUiBXPeers(
  next: BindBindDeferredUiBXPeers,
): void {
  peers = next;
}

/**
 * Bundle export `bX` / internal `bqr`.
 */
export function bindBindDeferredUiBX() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiBX peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) =>
    e(peers.Eh, `3669474837`) ? (e(peers.yqr, `local`).data ?? []) : [],
  );
}
