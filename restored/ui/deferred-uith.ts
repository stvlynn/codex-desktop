// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B3s`) / export `th`.

export type DeferredUithPeers = {
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  z3s: (...args: unknown[]) => unknown;
};

let peers: DeferredUithPeers | null = null;

/** Wire deferredUith peers once companions land. */
export function setDeferredUithPeers(next: DeferredUithPeers): void {
  peers = next;
}

/**
 * Bundle export `th` / internal `B3s`.
 */
export function deferredUith() {
  if (peers == null) {
    throw new Error("deferredUith peers are not configured");
  }

  return peers.e(() => {
    z3s = peers.r(peers.o(), 1);
  });
}
