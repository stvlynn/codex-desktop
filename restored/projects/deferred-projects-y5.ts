// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LWn`) / export `y5`.

export type BindDeferredProjectsY5Peers = {
  Bw: (...args: unknown[]) => unknown;
  DWn: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  fWn: (...args: unknown[]) => unknown;
  iWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
  oWn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredProjectsY5Peers | null = null;

/** Wire bindDeferredProjectsY5 peers once companions land. */
export function setBindDeferredProjectsY5Peers(next: BindDeferredProjectsY5Peers): void {
  peers = next;
}

/**
 * Bundle export `y5` / internal `LWn`.
 */
export function bindDeferredProjectsY5() {
  if (peers == null) {
    throw new Error("bindDeferredProjectsY5 peers are not configured");
  }

  return peers.ja(peers.Q, e => ({
    mutationKey: [...peers.fWn, e, `refresh`],
    mutationFn: t => peers.Bw(`sites_refresh_custom_domain_status`, {
      custom_domain_id: t,
      project_id: e
    }, peers.DWn),
    onSuccess: async (t, n, r, {
      client: i
    }) => {
      t.status === `active` && (await peers.iWn(i, [e])), peers.oWn(i, e, t);
    }
  }));
}
