// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g0r`) / export `cJ`.

export type DeferredUicJPeers = {
  A$r: (...args: unknown[]) => unknown;
  N$r: (...args: unknown[]) => unknown;
  O0r: (...args: unknown[]) => unknown;
};

let peers: DeferredUicJPeers | null = null;

/** Wire deferredUicJ peers once companions land. */
export function setDeferredUicJPeers(next: DeferredUicJPeers): void {
  peers = next;
}

/**
 * Bundle export `cJ` / internal `g0r`.
 */
export function deferredUicJ(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("deferredUicJ peers are not configured");
  }

  (t == null ? peers.A$r(e) : peers.N$r(e, t, n), peers.O0r(e, n));
}
