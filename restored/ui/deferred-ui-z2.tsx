// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aD`) / export `z2`.

export type BindDeferredUiZ2Peers = {
  Da: (...args: unknown[]) => unknown;
  Otr: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
  getRecentConversations: (...args: unknown[]) => unknown;
  map: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiZ2Peers | null = null;

/** Wire bindDeferredUiZ2 peers once companions land. */
export function setBindDeferredUiZ2Peers(next: BindDeferredUiZ2Peers): void {
  peers = next;
}

/**
 * Bundle export `z2` / internal `aD`.
 */
export function bindDeferredUiZ2() {
  if (peers == null) {
    throw new Error("bindDeferredUiZ2 peers are not configured");
  }

  return peers.Da(peers.Q, (e) => [], {
    onMount: (e, t) => {
      let { key: n } = t,
        r = [],
        i = t.watch(({ get: i }) => {
          let a = i(peers.eD, n),
            o = (i) => {
              (e(i), peers.Otr(t, n, r, i), (r = i));
            };
          if (
            (o(a?.getRecentConversations().map(({ id: e }) => e) ?? []),
            a != null)
          )
            return a.addAnyConversationMetaCallback((e) => {
              o(e.map(({ id: e }) => e));
            });
        });
      return () => {
        (i(), peers.Otr(t, n, r, []));
      };
    },
  });
}
