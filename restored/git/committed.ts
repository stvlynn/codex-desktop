// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ARr`) / export `DZ`.

export type BindCommittedPeers = {
  DRr: (...args: unknown[]) => unknown;
  ORr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kRr: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindCommittedPeers | null = null;

/** Wire bindCommitted peers once companions land. */
export function setBindCommittedPeers(next: BindCommittedPeers): void {
  peers = next;
}

/**
 * Bundle export `DZ` / internal `ARr`.
 */
export function bindCommitted() {
  if (peers == null) {
    throw new Error("bindCommitted peers are not configured");
  }

  return peers.e(() => {
    DRr = peers.r(peers.o(), 1), ORr = (0, peers.DRr.createContext)(null), kRr = (0, peers.DRr.createContext)(null);
  });
}
