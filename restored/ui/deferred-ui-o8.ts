// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lT`) / export `O8`.

export type BindDeferredUiO8Peers = {
  $Te: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  sT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiO8Peers | null = null;

/** Wire bindDeferredUiO8 peers once companions land. */
export function setBindDeferredUiO8Peers(next: BindDeferredUiO8Peers): void {
  peers = next;
}

/**
 * Bundle export `O8` / internal `lT`.
 */
export function bindDeferredUiO8() {
  if (peers == null) {
    throw new Error("bindDeferredUiO8 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.sT, peers.$Te).data === !0);
}
