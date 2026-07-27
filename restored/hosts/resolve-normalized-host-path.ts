// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `bM`) / export `zX`.

export type ResolveNormalizedHostPathPeers = {
  normalize: (path: unknown) => unknown;
  resolve: (normalized: unknown) => unknown;
};

let peers: ResolveNormalizedHostPathPeers | null = null;

/** Wire resolveNormalizedHostPath peers once companions land. */
export function setResolveNormalizedHostPathPeers(
  next: ResolveNormalizedHostPathPeers,
): void {
  peers = next;
}

/**
 * Bundle export `zX` / internal `bM`.
 * Normalize then resolve a host path.
 */
export function resolveNormalizedHostPath(pathValue: unknown): unknown {
  if (peers == null) {
    throw new Error("ResolveNormalizedHostPath peers are not configured");
  }
  return peers.resolve(peers.normalize(pathValue));
}
