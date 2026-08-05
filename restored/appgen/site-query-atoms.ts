// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jWn`) / export `v5`.

export type BindSitesGetSiteQueryAtomPeers = {
  Bw: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vw: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  wWn: (...args: unknown[]) => unknown;
};

let peers: BindSitesGetSiteQueryAtomPeers | null = null;

/** Wire bindSitesGetSiteQueryAtom peers once companions land. */
export function setBindSitesGetSiteQueryAtomPeers(
  next: BindSitesGetSiteQueryAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `v5` / internal `jWn`.
 */
export function bindSitesGetSiteQueryAtom() {
  if (peers == null) {
    throw new Error("bindSitesGetSiteQueryAtom peers are not configured");
  }

  return peers.ka(peers.Q, (e) => ({
    queryKey: [...peers.Vw, e],
    queryFn: () =>
      peers.Bw(
        `sites_get_site`,
        {
          project_id: e,
        },
        peers.wWn,
      ),
    retry: !1,
    staleTime: peers.Hf.FIVE_MINUTES,
  }));
}
