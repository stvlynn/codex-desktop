// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xt`) / export `hvt`.

export type HvtBindableHelperPeers = {
  Me: (...args: unknown[]) => unknown;
  Ot: (...args: unknown[]) => unknown;
};

let peers: HvtBindableHelperPeers | null = null;

/** Wire hvtBindableHelper peers once companions land. */
export function setHvtBindableHelperPeers(next: HvtBindableHelperPeers): void {
  peers = next;
}

/**
 * Bundle export `hvt` / internal `Xt`.
 */
export function hvtBindableHelper(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("hvtBindableHelper peers are not configured");
  }

  return peers.Ot(e, peers.Me, t);
}
