// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vV`) / export `HI`.

export type BindBindDeferredUiHI2Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  _V: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiHI2Peers | null = null;

/** Wire bindBindDeferredUiHI2 peers once companions land. */
export function setBindBindDeferredUiHI2Peers(next: BindBindDeferredUiHI2Peers): void {
  peers = next;
}

/**
 * Bundle export `HI` / internal `vV`.
 */
export function bindBindDeferredUiHI2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiHI2 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers._V).status === `allowed`);
}
