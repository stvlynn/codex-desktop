// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dNa`) / export `NN`.

export type BindDeferredConversationNN3Peers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  flatMap: (...args: unknown[]) => unknown;
  pages: (...args: unknown[]) => unknown;
  uNa: (...args: unknown[]) => unknown;
};

let peers: BindDeferredConversationNN3Peers | null = null;

/** Wire bindDeferredConversationNN3 peers once companions land. */
export function setBindDeferredConversationNN3Peers(next: BindDeferredConversationNN3Peers): void {
  peers = next;
}

/**
 * Bundle export `NN` / internal `dNa`.
 */
export function bindDeferredConversationNN3() {
  if (peers == null) {
    throw new Error("bindDeferredConversationNN3 peers are not configured");
  }

  return peers.Oa(peers.Q, ({
    projectIds: e,
    query: t
  }, {
    get: n
  }) => {
    let r = n(peers.uNa, t),
      i = r.data?.pages.flatMap(e => e.items),
      a = new Map();
    for (let e of i ?? []) {
      if (e.gizmo_id == null) continue;
      let t = a.get(e.gizmo_id) ?? [];
      t.push(e), a.set(e.gizmo_id, t);
    }
    return {
      hasError: r.isError,
      isFetching: r.isFetching,
      projectResults: i == null ? [] : e.map(e => ({
        conversations: a.get(e) ?? [],
        projectId: e
      }))
    };
  });
}
