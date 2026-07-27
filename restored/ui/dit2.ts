// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nRt`) / export `Dit`.

export type Dit2Peers = {
  HLt: (...args: unknown[]) => unknown;
  Pv: (...args: unknown[]) => unknown;
  QLt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eRt: (...args: unknown[]) => unknown;
  mLt: (...args: unknown[]) => unknown;
};

let peers: Dit2Peers | null = null;

/** Wire dit2 peers once companions land. */
export function setDit2Peers(next: Dit2Peers): void {
  peers = next;
}

/**
 * Bundle export `Dit` / internal `nRt`.
 */
export function dit2() {
  if (peers == null) {
    throw new Error("dit2 peers are not configured");
  }

  return peers.e(() => {
    peers.HLt(), peers.mLt(), peers.QLt(), peers.eRt(), peers.Pv();
  });
}
