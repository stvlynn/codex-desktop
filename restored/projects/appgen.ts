// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MWn`) / export `_5`.

export type BindAppgenPeers = {
  Bw: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TWn: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  uWn: (...args: unknown[]) => unknown;
};

let peers: BindAppgenPeers | null = null;

/** Wire bindAppgen peers once companions land. */
export function setBindAppgenPeers(next: BindAppgenPeers): void {
  peers = next;
}

/**
 * Bundle export `_5` / internal `MWn`.
 */
export function bindAppgen() {
  if (peers == null) {
    throw new Error("bindAppgen peers are not configured");
  }

  return peers.ka(peers.Q, (e) => ({
    queryKey: [...peers.uWn, e],
    queryFn: () =>
      peers.Bw(
        `sites_get_environment_variables`,
        {
          project_id: e,
        },
        peers.TWn,
      ),
    retry: !1,
    staleTime: peers.Hf.FIVE_MINUTES,
  }));
}
