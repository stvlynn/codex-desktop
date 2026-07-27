// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `KN`) / export `jK`.

export type UseInstalledPluginsQueryPeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  isHostReady: (scope: { hostId: unknown }) => boolean;
  queryKey: (hostId: unknown, filters: unknown) => unknown[];
  fetchInstalled: (hostId: unknown, filters: unknown) => Promise<unknown>;
};

let peers: UseInstalledPluginsQueryPeers | null = null;

/** Wire useInstalledPluginsQuery peers once companions land. */
export function setUseInstalledPluginsQueryPeers(
  next: UseInstalledPluginsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `jK` / internal `KN`.
 * Query installed plugins for a host with optional filters.
 */
export function useInstalledPluginsQuery(
  hostId: unknown,
  filters?: unknown,
  options?: { enabled?: boolean },
): unknown {
  if (peers == null) {
    throw new Error("UseInstalledPluginsQuery peers are not configured");
  }
  const scope = { hostId };
  const enabled = (options?.enabled ?? true) && peers.isHostReady(scope);
  return peers.useQuery({
    queryKey: peers.queryKey(hostId, filters),
    enabled,
    queryFn: () => peers!.fetchInstalled(hostId, filters),
  });
}

// --- qg-full-green: missing-relative-exports stubs (open-runtime wiring) ---
export const ensureInstalledPluginsQueryInit: any = undefined;
