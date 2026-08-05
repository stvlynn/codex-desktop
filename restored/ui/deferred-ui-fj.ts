// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `h0r`) / export `fJ`.

export type DeferredUiFJPeers = {
  A$r: (...args: unknown[]) => unknown;
  O0r: (...args: unknown[]) => unknown;
};

let peers: DeferredUiFJPeers | null = null;

/** Wire deferredUiFJ peers once companions land. */
export function setDeferredUiFJPeers(next: DeferredUiFJPeers): void {
  peers = next;
}

/**
 * Bundle export `fJ` / internal `h0r`.
 */
export function deferredUiFJ(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("deferredUiFJ peers are not configured");
  }

  (peers.A$r(e), peers.O0r(e, t));
}
