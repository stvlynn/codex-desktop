// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gHl`) / export `co`.

export type DraftPeers = {
  $u: (...args: unknown[]) => unknown;
  FK: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Zh: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jz: (...args: unknown[]) => unknown;
  p5: (...args: unknown[]) => unknown;
  pHl: (...args: unknown[]) => unknown;
  uHl: (...args: unknown[]) => unknown;
};

let peers: DraftPeers | null = null;

/** Wire draft peers once companions land. */
export function setDraftPeers(next: DraftPeers): void {
  peers = next;
}

/**
 * Bundle export `co` / internal `gHl`.
 */
export function draft() {
  if (peers == null) {
    throw new Error("draft peers are not configured");
  }

  return peers.e(() => {
    (peers.$u(),
      peers.jz(),
      peers.pHl(),
      peers.Zh(),
      peers.FK(),
      peers.uHl(),
      (p5 = peers.J()));
  });
}
