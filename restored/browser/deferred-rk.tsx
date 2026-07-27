// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dwo`) / export `Rk`.

export type BindBindDeferredRkPeers = {
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  iwo: (...args: unknown[]) => unknown;
  lwo: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
  swo: (...args: unknown[]) => unknown;
  uwo: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredRkPeers | null = null;

/** Wire bindBindDeferredRk peers once companions land. */
export function setBindBindDeferredRkPeers(next: BindBindDeferredRkPeers): void {
  peers = next;
}

/**
 * Bundle export `Rk` / internal `dwo`.
 */
export function bindBindDeferredRk() {
  if (peers == null) {
    throw new Error("bindBindDeferredRk peers are not configured");
  }

  return peers.e(() => {
    lwo = peers.c(), peers.sd(), peers.iwo(), peers.swo(), uwo = peers.J();
  });
}
