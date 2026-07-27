// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `jEo`) / export `mk`.

export type ImportableBrowserProfilesApi = {
  listImportableBrowserProfiles: () => Promise<unknown>;
};

export type UseImportableBrowserProfilesQueryPeers = {
  useQuery: (options: {
    enabled?: boolean;
    queryKey: unknown[];
    queryFn: () => Promise<unknown>;
    retry: boolean;
    staleTime: unknown;
  }) => unknown;
  staleTime: unknown;
  logError: (message: string, context: unknown) => void;
};

let peers: UseImportableBrowserProfilesQueryPeers | null = null;

/** Wire react-query peers once companions land. */
export function setUseImportableBrowserProfilesQueryPeers(
  next: UseImportableBrowserProfilesQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mk` / internal `jEo`.
 * Query importable browser profiles for profile-import flows.
 */
export function useImportableBrowserProfilesQuery(
  api: ImportableBrowserProfilesApi | null | undefined,
  enabled?: boolean,
): unknown {
  if (peers == null) {
    throw new Error(
      "UseImportableBrowserProfilesQuery peers are not configured",
    );
  }
  return peers.useQuery({
    enabled,
    queryKey: ["browser-profile-import-profiles"],
    queryFn: async () => {
      if (api == null) throw new Error("Browser profile import is unavailable");
      try {
        return await api.listImportableBrowserProfiles();
      } catch (error) {
        peers!.logError("Failed to list importable browser profiles", {
          safe: {},
        });
        throw error;
      }
    },
    retry: false,
    staleTime: peers.staleTime,
  });
}
