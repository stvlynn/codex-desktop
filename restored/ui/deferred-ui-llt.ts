// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eh`) / export `llt`.

export type BindDeferredUiLltPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Th: (...args: unknown[]) => unknown;
  bnt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiLltPeers | null = null;

/** Wire bindDeferredUiLlt peers once companions land. */
export function setBindDeferredUiLltPeers(next: BindDeferredUiLltPeers): void {
  peers = next;
}

/**
 * Bundle export `llt` / internal `Eh`.
 */
export function bindDeferredUiLlt() {
  if (peers == null) {
    throw new Error("bindDeferredUiLlt peers are not configured");
  }

  return peers.Da(peers.Q, (e) => !1, {
    onMount: (e, t) => {
      let { key: n } = t,
        r = t.get(peers.Th);
      return (
        r != null && e(r.checkGate(n)),
        t.set(peers.bnt, (e) => (e.includes(n) ? e : [...e, n])),
        () => {
          t.set(peers.bnt, (e) => e.filter((e) => e !== n));
        }
      );
    },
  });
}
