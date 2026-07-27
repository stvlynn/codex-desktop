// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zWn`) / export `C5`.

export type BindAppgen3Peers = {
  Bw: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Vw: (...args: unknown[]) => unknown;
  iWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
  yWn: (...args: unknown[]) => unknown;
};

let peers: BindAppgen3Peers | null = null;

/** Wire bindAppgen3 peers once companions land. */
export function setBindAppgen3Peers(next: BindAppgen3Peers): void {
  peers = next;
}

/**
 * Bundle export `C5` / internal `zWn`.
 */
export function bindAppgen3() {
  if (peers == null) {
    throw new Error("bindAppgen3 peers are not configured");
  }

  return peers.ja(peers.Q, e => ({
    mutationKey: [...peers.Vw, e, `title`, `update`],
    mutationFn: t => peers.Bw(`sites_update_site_metadata`, {
      project_id: e,
      ...t
    }, peers.yWn),
    onSettled: (t, n, r, i, {
      client: a
    }) => peers.iWn(a, [e])
  }));
}
