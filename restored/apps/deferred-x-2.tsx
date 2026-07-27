// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lqr`) / export `_X`.

export type BindDeferredXPeers = {
  Fqr: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Iqr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ra: (...args: unknown[]) => unknown;
  _p: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  yKr: (...args: unknown[]) => unknown;
};

let peers: BindDeferredXPeers | null = null;

/** Wire bindDeferredX peers once companions land. */
export function setBindDeferredXPeers(next: BindDeferredXPeers): void {
  peers = next;
}

/**
 * Bundle export `_X` / internal `Lqr`.
 */
export function bindDeferredX() {
  if (peers == null) {
    throw new Error("bindDeferredX peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers._p(), peers.yKr(), peers.ed(), Iqr = peers.Ra(peers.Q, () => ({
      mutationFn: peers.Fqr,
      networkMode: `always`
    }));
  });
}
