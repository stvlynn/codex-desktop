// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `SQr`) / export `iY`.

export type UseEnvironmentsSearchQueryPeers = {
  debounceSearch: (value: string, ms: number) => string;
  fetchEnvironments: () => Promise<unknown[]>;
  createFuzzyIndex: (
    items: unknown[],
    options: { threshold: number; keys: string[] },
  ) => { search: (query: string) => unknown[] } | null | undefined;
  mapHit: (hit: unknown) => {
    label: string;
    is_pinned?: boolean;
    repos?: unknown;
  };
  useQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseEnvironmentsSearchQueryPeers | null = null;

/** Wire environments search query peers once companions land. */
export function setUseEnvironmentsSearchQueryPeers(
  next: UseEnvironmentsSearchQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `iY` / internal `SQr`.
 * Debounced fuzzy search over workspace environments.
 */
export function useEnvironmentsSearchQuery(
  search: string,
  options: { enabled?: boolean },
): unknown {
  if (peers == null) {
    throw new Error("UseEnvironmentsSearchQuery peers are not configured");
  }
  const enabled = options.enabled === undefined ? true : options.enabled;
  const debounced = peers.debounceSearch(search, 200);
  const queryEnabled = enabled && debounced.trim().length > 0;
  return peers.useQuery({
    queryKey: ["workspace", "environments-search", debounced],
    enabled: queryEnabled,
    queryFn: async () => {
      const items = await peers!.fetchEnvironments();
      const needle = debounced.trim().toLowerCase();
      const index = peers!.createFuzzyIndex(items, {
        threshold: 0.4,
        keys: ["label", "repos"],
      });
      const hits = (index?.search(debounced).map(peers!.mapHit) ?? []).sort(
        (a, b) => {
          if (a.is_pinned !== b.is_pinned) return a.is_pinned ? -1 : 1;
          const rank = (label: string) => {
            const lower = label.toLowerCase();
            return lower === needle ? 0 : lower.startsWith(needle) ? 1 : 2;
          };
          const delta = rank(a.label) - rank(b.label);
          return delta === 0 ? a.label.localeCompare(b.label) : delta;
        },
      );
      return [index, hits];
    },
  });
}
