// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VWn`) / export `b5`.

export type BindAppgen2Peers = {
  Bw: (...args: unknown[]) => unknown;
  DWn: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  fWn: (...args: unknown[]) => unknown;
  iWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
};

let peers: BindAppgen2Peers | null = null;

/** Wire bindAppgen2 peers once companions land. */
export function setBindAppgen2Peers(next: BindAppgen2Peers): void {
  peers = next;
}

/**
 * Bundle export `b5` / internal `VWn`.
 */
export function bindAppgen2() {
  if (peers == null) {
    throw new Error("bindAppgen2 peers are not configured");
  }

  return peers.ja(peers.Q, e => ({
    mutationKey: [...peers.fWn, e, `remove`],
    mutationFn: t => peers.Bw(`sites_remove_custom_domain`, {
      custom_domain_id: t,
      project_id: e
    }, peers.DWn),
    onSuccess: async (t, n, r, {
      client: i
    }) => {
      t.status === `active` && (await peers.iWn(i, [e])), i.setQueryData([...peers.fWn, e], e => e == null ? e : {
        items: e.items.filter(e => e.id !== t.id)
      });
    }
  }));
}
