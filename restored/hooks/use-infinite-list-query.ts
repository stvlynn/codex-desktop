// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qja`) / export `LN`.

export type UseInfiniteListQueryPeers = {
  Gja: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Lt: (...args: unknown[]) => unknown;
  XMa: (...args: unknown[]) => unknown;
  YMa: (...args: unknown[]) => unknown;
  Yja: (...args: unknown[]) => unknown;
};

let peers: UseInfiniteListQueryPeers | null = null;

/** Wire useInfiniteListQuery peers once companions land. */
export function setUseInfiniteListQueryPeers(next: UseInfiniteListQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `LN` / internal `qja`.
 */
export function useInfiniteListQuery(e: unknown, t: unknown, n: unknown = !0, r: unknown = `all`) {
  if (peers == null) {
    throw new Error("useInfiniteListQuery peers are not configured");
  }

  let i = r === `all` ? peers.YMa : peers.XMa;
  return peers.Lt({
    enabled: n,
    getNextPageParam: peers.Yja,
    initialPageParam: null,
    queryFn: ({ pageParam: n }) =>
      e.listProjectConversations({
        cursor: n,
        limit: i,
        ownedOnly: !1,
        projectId: t,
      }),
    queryKey: peers.Gja(t, i),
    staleTime: peers.Hf.ONE_MINUTE,
  });
}

// --- missing-relative-export aliases ---
export { useInfiniteListQuery as UseInfiniteListQuery };
