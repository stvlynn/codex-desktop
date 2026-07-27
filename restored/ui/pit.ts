// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BLt`) / export `Pit`.

export type PitPeers = {
  Pv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jLt: (...args: unknown[]) => unknown;
  mLt: (...args: unknown[]) => unknown;
};

let peers: PitPeers | null = null;

/** Wire pit peers once companions land. */
export function setPitPeers(next: PitPeers): void {
  peers = next;
}

/**
 * Bundle export `Pit` / internal `BLt`.
 */
export function pit() {
  if (peers == null) {
    throw new Error("pit peers are not configured");
  }

  return peers.e(() => {
    peers.mLt(), peers.Pv(), peers.jLt();
  });
}
