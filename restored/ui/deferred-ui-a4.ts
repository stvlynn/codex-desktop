// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `H5n`) / export `A4`.

export type BindDeferredUiA4Peers = {
  Eh: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  PE: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ww: (...args: unknown[]) => unknown;
  allowAppshots: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiA4Peers | null = null;

/** Wire bindDeferredUiA4 peers once companions land. */
export function setBindDeferredUiA4Peers(next: BindDeferredUiA4Peers): void {
  peers = next;
}

/**
 * Bundle export `A4` / internal `H5n`.
 */
export function bindDeferredUiA4() {
  if (peers == null) {
    throw new Error("bindDeferredUiA4 peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) => {
    if (t(peers.Ww) !== `macOS` || !t(peers.Eh, `1304276663`)) return !1;
    let { data: n } = t(peers.PE, {
      hostId: e,
    });
    return n != null && n.requirements?.allowAppshots !== !1;
  });
}
