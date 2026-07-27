// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ma`) / export `X_t`.

export type DeferredUtilsXtPeers = {
  Na: (...args: unknown[]) => unknown;
};

let peers: DeferredUtilsXtPeers | null = null;

/** Wire deferredUtilsXt peers once companions land. */
export function setDeferredUtilsXtPeers(next: DeferredUtilsXtPeers): void {
  peers = next;
}

/**
 * Bundle export `X_t` / internal `Ma`.
 */
export function deferredUtilsXt(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("deferredUtilsXt peers are not configured");
  }

  return peers.Na(e, t, void 0, n);
}
