// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ynr`) / export `o2`.

export type BindBindDeferredUiO2Peers = {
  Atr: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  eD: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiO2Peers | null = null;

/** Wire bindBindDeferredUiO2 peers once companions land. */
export function setBindBindDeferredUiO2Peers(
  next: BindBindDeferredUiO2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `o2` / internal `ynr`.
 */
export function bindBindDeferredUiO2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiO2 peers are not configured");
  }

  return peers.Da(peers.Q, (e) => [], {
    onMount: (e, t) => {
      let { key: n } = t;
      return t.watch(({ get: t }) => {
        let r = t(peers.eD, n),
          i = () => {
            e(peers.Atr(r));
          };
        if ((i(), r == null)) return;
        let a = r.addAnyConversationCallback(i),
          o = r.addAnyConversationMetaCallback(i);
        return () => {
          (a(), o());
        };
      });
    },
  });
}
