// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u2r`) / export `Zq`.

export type ChatgptPeers = {
  GM: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  KM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  TN: (...args: unknown[]) => unknown;
  bXr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gXr: (...args: unknown[]) => unknown;
  kXr: (...args: unknown[]) => unknown;
  l2r: (...args: unknown[]) => unknown;
  qM: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
};

let peers: ChatgptPeers | null = null;

/** Wire chatgpt peers once companions land. */
export function setChatgptPeers(next: ChatgptPeers): void {
  peers = next;
}

/**
 * Bundle export `Zq` / internal `u2r`.
 */
export function chatgpt() {
  if (peers == null) {
    throw new Error("chatgpt peers are not configured");
  }
  return peers.e(() => {
    peers.Ho(), peers.TN(), peers.KM(), peers.bXr(), peers.kXr(), l2r = peers.Ma(peers.GM, ({
      get: e
    }) => peers.e(peers.qM) && peers.gXr(peers.e(peers.xN)) != null);
  });
}
