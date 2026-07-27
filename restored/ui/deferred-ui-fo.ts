// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uHl`) / export `fo`.

export type BindDeferredUiFoPeers = {
  Bqs: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  cHl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lHl: (...args: unknown[]) => unknown;
  oHl: (...args: unknown[]) => unknown;
  sHl: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiFoPeers | null = null;

/** Wire bindDeferredUiFo peers once companions land. */
export function setBindDeferredUiFoPeers(next: BindDeferredUiFoPeers): void {
  peers = next;
}

/**
 * Bundle export `fo` / internal `uHl`.
 */
export function bindDeferredUiFo() {
  if (peers == null) {
    throw new Error("bindDeferredUiFo peers are not configured");
  }

  return peers.e(() => {
    peers.sd(), peers.Bqs(), oHl = peers.J(), sHl = 5.75, cHl = 2 * Math.PI * peers.sHl, lHl = 1.5;
  });
}
