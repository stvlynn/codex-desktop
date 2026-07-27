// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ahu`) / export `Nt`.

export type RoundPeers = {
  C9: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fh: (...args: unknown[]) => unknown;
  khu: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: RoundPeers | null = null;

/** Wire round peers once companions land. */
export function setRoundPeers(next: RoundPeers): void {
  peers = next;
}

/**
 * Bundle export `Nt` / internal `Ahu`.
 */
export function round() {
  if (peers == null) {
    throw new Error("round peers are not configured");
  }

  return peers.e(() => {
    khu = peers.c(), peers.sd(), peers.fh(), C9 = peers.J();
  });
}
