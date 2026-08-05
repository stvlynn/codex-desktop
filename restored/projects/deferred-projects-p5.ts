// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IWn`) / export `p5`.

export type BindDeferredProjectsP5Peers = {
  Bw: (...args: unknown[]) => unknown;
  DWn: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  fWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
  oWn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredProjectsP5Peers | null = null;

/** Wire bindDeferredProjectsP5 peers once companions land. */
export function setBindDeferredProjectsP5Peers(
  next: BindDeferredProjectsP5Peers,
): void {
  peers = next;
}

/**
 * Bundle export `p5` / internal `IWn`.
 */
export function bindDeferredProjectsP5() {
  if (peers == null) {
    throw new Error("bindDeferredProjectsP5 peers are not configured");
  }

  return peers.ja(peers.Q, (e) => ({
    mutationKey: [...peers.fWn, e, `add`],
    mutationFn: ({ hostname: t }) =>
      peers.Bw(
        `sites_add_custom_domain`,
        {
          hostname: t,
          project_id: e,
        },
        peers.DWn,
      ),
    onSuccess: (t, n, r, { client: i }) => {
      peers.oWn(i, e, t);
    },
  }));
}
