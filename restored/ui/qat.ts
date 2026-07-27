// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `CAt`) / export `Qat`.

export type QatPeers = {
  SAt: (...args: unknown[]) => unknown;
  Xkt: (...args: unknown[]) => unknown;
  bAt: (...args: unknown[]) => unknown;
  dAt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gAt: (...args: unknown[]) => unknown;
  vAt: (...args: unknown[]) => unknown;
};

let peers: QatPeers | null = null;

/** Wire qat peers once companions land. */
export function setQatPeers(next: QatPeers): void {
  peers = next;
}

/**
 * Bundle export `Qat` / internal `CAt`.
 */
export function qat() {
  if (peers == null) {
    throw new Error("qat peers are not configured");
  }

  return peers.e(() => {
    peers.gAt(), peers.dAt(), peers.Xkt(), peers.vAt(), peers.bAt(), peers.SAt();
  });
}
