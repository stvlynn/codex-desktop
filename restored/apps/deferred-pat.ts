// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pv`) / export `pat`.

export type DeferredPatPeers = {
  dv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lv: (...args: unknown[]) => unknown;
  ov: (...args: unknown[]) => unknown;
  zNt: (...args: unknown[]) => unknown;
};

let peers: DeferredPatPeers | null = null;

/** Wire deferredPat peers once companions land. */
export function setDeferredPatPeers(next: DeferredPatPeers): void {
  peers = next;
}

/**
 * Bundle export `pat` / internal `pv`.
 */
export function deferredPat() {
  if (peers == null) {
    throw new Error("deferredPat peers are not configured");
  }

  return peers.e(() => {
    peers.ov(), peers.dv(), peers.lv(), peers.zNt();
  });
}
