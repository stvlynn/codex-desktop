// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `sti`) / export `wG`.

export type DeferredWGPeers = {
  ati: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  oti: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: DeferredWGPeers | null = null;

/** Wire deferredWG peers once companions land. */
export function setDeferredWGPeers(next: DeferredWGPeers): void {
  peers = next;
}

/**
 * Bundle export `wG` / internal `sti`.
 */
export function deferredWG() {
  if (peers == null) {
    throw new Error("deferredWG peers are not configured");
  }

  return peers.e(() => {
    ((ati = peers.r(peers.o(), 1)), (oti = (0, peers.ati.createContext)(null)));
  });
}
