// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RWn`) / export `S5`.

export type BindDeferredProjectsS5Peers = {
  Bw: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  TWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
  uWn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredProjectsS5Peers | null = null;

/** Wire bindDeferredProjectsS5 peers once companions land. */
export function setBindDeferredProjectsS5Peers(
  next: BindDeferredProjectsS5Peers,
): void {
  peers = next;
}

/**
 * Bundle export `S5` / internal `RWn`.
 */
export function bindDeferredProjectsS5() {
  if (peers == null) {
    throw new Error("bindDeferredProjectsS5 peers are not configured");
  }

  return peers.ja(peers.Q, (e) => ({
    mutationKey: [...peers.uWn, e, `update`],
    mutationFn: (t) =>
      peers.Bw(
        `sites_update_environment_variables`,
        {
          project_id: e,
          ...t,
        },
        peers.TWn,
      ),
    onSuccess: (t, n, r, { client: i }) => {
      i.setQueryData([...peers.uWn, e], t);
    },
  }));
}
