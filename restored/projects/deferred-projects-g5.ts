// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `HWn`) / export `g5`.

export type BindDeferredProjectsG5Peers = {
  Bw: (...args: unknown[]) => unknown;
  CWn: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  SWn: (...args: unknown[]) => unknown;
  Vw: (...args: unknown[]) => unknown;
  cWn: (...args: unknown[]) => unknown;
  ja: (...args: unknown[]) => unknown;
  uWn: (...args: unknown[]) => unknown;
};

let peers: BindDeferredProjectsG5Peers | null = null;

/** Wire bindDeferredProjectsG5 peers once companions land. */
export function setBindDeferredProjectsG5Peers(next: BindDeferredProjectsG5Peers): void {
  peers = next;
}

/**
 * Bundle export `g5` / internal `HWn`.
 */
export function bindDeferredProjectsG5() {
  if (peers == null) {
    throw new Error("bindDeferredProjectsG5 peers are not configured");
  }

  return peers.ja(peers.Q, e => ({
    mutationKey: [...peers.Vw, e, `delete`],
    mutationFn: async () => {
      let t = peers.SWn.parse(await peers.Bw(`sites_delete_site`, {
        project_id: e
      }, peers.SWn, peers.CWn));
      if (!t.was_deleted || t.project_id !== e) throw Error(`Site was not deleted`);
      return t;
    },
    onSuccess: async (t, n, r, {
      client: i
    }) => {
      i.setQueryData(peers.cWn, t => t == null ? t : {
        ...t,
        pages: t.pages.map(t => ({
          ...t,
          items: t.items.filter(t => t.id !== e)
        }))
      }), await Promise.all([i.invalidateQueries({
        queryKey: [...peers.Vw, e],
        refetchType: `none`
      }), i.invalidateQueries({
        queryKey: [...peers.uWn, e],
        refetchType: `none`
      })]);
    }
  }));
}
