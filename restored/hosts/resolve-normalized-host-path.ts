// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `bM`) / export `zX`.

export type ResolveNormalizedHostPathPeers = {
  TGr: (...args: unknown[]) => unknown;
  oKr: (...args: unknown[]) => unknown;
};

let peers: ResolveNormalizedHostPathPeers | null = null;

/** Wire resolveNormalizedHostPath peers once companions land. */
export function setResolveNormalizedHostPathPeers(next: ResolveNormalizedHostPathPeers): void {
  peers = next;
}

/**
 * Bundle export `zX` / internal `bM`.
 */
export function resolveNormalizedHostPath(e: unknown) {
  if (peers == null) {
    throw new Error("resolveNormalizedHostPath peers are not configured");
  }

  return peers.oKr(peers.TGr(e));
}
