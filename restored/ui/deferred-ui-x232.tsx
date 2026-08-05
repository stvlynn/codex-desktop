// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TD`) / export `X2`.

export type BindBindDeferredUiX232Peers = {
  CD: (...args: unknown[]) => unknown;
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  getStreamRole: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiX232Peers | null = null;

/** Wire bindBindDeferredUiX232 peers once companions land. */
export function setBindBindDeferredUiX232Peers(
  next: BindBindDeferredUiX232Peers,
): void {
  peers = next;
}

/**
 * Bundle export `X2` / internal `TD`.
 */
export function bindBindDeferredUiX232() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiX232 peers are not configured");
  }

  return peers.Da(peers.Q, (e) => null, {
    onMount: (e, t) => {
      let { key: n } = t;
      if (n != null)
        return t.watch(({ get: t }) => {
          let r = t(peers.CD, n);
          if ((e(r?.getStreamRole(n) ?? null), r != null))
            return r.addStreamRoleCallback(n, e);
        });
    },
  });
}
