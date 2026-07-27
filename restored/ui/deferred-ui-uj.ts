// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `m0r`) / export `uJ`.

export type DeferredUiUJPeers = {
  P$r: (...args: unknown[]) => unknown;
  h0r: (...args: unknown[]) => unknown;
  k$r: (...args: unknown[]) => unknown;
};

let peers: DeferredUiUJPeers | null = null;

/** Wire deferredUiUJ peers once companions land. */
export function setDeferredUiUJPeers(next: DeferredUiUJPeers): void {
  peers = next;
}

/**
 * Bundle export `uJ` / internal `m0r`.
 */
export function deferredUiUJ(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("deferredUiUJ peers are not configured");
  }

  t == null ? peers.k$r(e, n) : peers.P$r(e, t, n), peers.h0r(e, n);
}
