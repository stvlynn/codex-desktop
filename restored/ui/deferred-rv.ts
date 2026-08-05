// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MDs`) / export `Rv`.

export type DeferredRvPeers = {
  ADs: (...args: unknown[]) => unknown;
  DDs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  af: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jDs: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: DeferredRvPeers | null = null;

/** Wire deferredRv peers once companions land. */
export function setDeferredRvPeers(next: DeferredRvPeers): void {
  peers = next;
}

/**
 * Bundle export `Rv` / internal `MDs`.
 */
export function deferredRv() {
  if (peers == null) {
    throw new Error("deferredRv peers are not configured");
  }

  return peers.e(() => {
    ((ADs = peers.c()), peers.sd(), peers.af(), peers.DDs(), (jDs = peers.J()));
  });
}
