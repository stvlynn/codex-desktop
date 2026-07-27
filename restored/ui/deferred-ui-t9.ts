// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ux`) / export `t9`.

export type BindDeferredUiT9Peers = {
  Vx: (...args: unknown[]) => unknown;
  _ln: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiT9Peers | null = null;

/** Wire bindDeferredUiT9 peers once companions land. */
export function setBindDeferredUiT9Peers(next: BindDeferredUiT9Peers): void {
  peers = next;
}

/**
 * Bundle export `t9` / internal `Ux`.
 */
export function bindDeferredUiT9() {
  if (peers == null) {
    throw new Error("bindDeferredUiT9 peers are not configured");
  }

  return new peers._ln((e, t, n) => peers.Vx.start(e, t, n));
}
