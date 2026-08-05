// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jEo`) / export `mk`.

export type UseImportableBrowserProfilesQueryPeers = {
  Ft: (...args: unknown[]) => unknown;
  MEo: (...args: unknown[]) => unknown;
  Wf: (...args: unknown[]) => unknown;
};

let peers: UseImportableBrowserProfilesQueryPeers | null = null;

/** Wire useImportableBrowserProfilesQuery peers once companions land. */
export function setUseImportableBrowserProfilesQueryPeers(
  next: UseImportableBrowserProfilesQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mk` / internal `jEo`.
 */
export function useImportableBrowserProfilesQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error(
      "useImportableBrowserProfilesQuery peers are not configured",
    );
  }

  return peers.Ft({
    enabled: t,
    queryKey: [`browser-profile-import-profiles`],
    queryFn: async () => {
      if (e == null) throw Error(`Browser profile import is unavailable`);
      try {
        return await e.listImportableBrowserProfiles();
      } catch (e) {
        throw (
          peers.Wf.error(`Failed to list importable browser profiles`, {
            safe: {},
          }),
          e
        );
      }
    },
    retry: !1,
    staleTime: peers.MEo,
  });
}
