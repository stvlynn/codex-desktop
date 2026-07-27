// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `jt`) / export `Tvt`.

export type UseQueryPeers = {
  runQuery: (options: unknown, flag: unknown, extra?: unknown) => unknown;
  queryFlag: unknown;
};

let peers: UseQueryPeers | null = null;

/** Wire useQuery peers once companions land. */
export function setUseQueryPeers(next: UseQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Tvt` / internal `jt`.
 * Thin wrapper around the shared query helper.
 */
export function useQuery(options: unknown, extra?: unknown): unknown {
  if (peers == null) {
    throw new Error("UseQuery peers are not configured");
  }
  return peers.runQuery(options, peers.queryFlag, extra);
}
