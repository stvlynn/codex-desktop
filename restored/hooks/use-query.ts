// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jt`) / export `Tvt`.

export type UseQueryPeers = {
  Ot: (...args: unknown[]) => unknown;
  we: (...args: unknown[]) => unknown;
};

let peers: UseQueryPeers | null = null;

/** Wire useQuery peers once companions land. */
export function setUseQueryPeers(next: UseQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Tvt` / internal `jt`.
 */
export function useQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useQuery peers are not configured");
  }

  return peers.Ot(e, peers.we, t);
}
