// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `e5s`) / export `Cm`.

export type BindDeferredUiCmPeers = {
  $8s: (...args: unknown[]) => unknown;
  GD: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  QWr: (...args: unknown[]) => unknown;
  Y8s: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  p1: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCmPeers | null = null;

/** Wire bindDeferredUiCm peers once companions land. */
export function setBindDeferredUiCmPeers(next: BindDeferredUiCmPeers): void {
  peers = next;
}

/**
 * Bundle export `Cm` / internal `e5s`.
 */
export function bindDeferredUiCm() {
  if (peers == null) {
    throw new Error("bindDeferredUiCm peers are not configured");
  }

  return peers.e(() => {
    $8s = peers.c(), peers.sd(), peers.af(), peers.QWr(), peers.GD(), peers.Y8s(), p1 = peers.J();
  });
}
