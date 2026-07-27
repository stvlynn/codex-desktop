// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SD`) / export `f2`.

export type BindBindDeferredUiF2Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  anr: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiF2Peers | null = null;

/** Wire bindBindDeferredUiF2 peers once companions land. */
export function setBindBindDeferredUiF2Peers(next: BindBindDeferredUiF2Peers): void {
  peers = next;
}

/**
 * Bundle export `f2` / internal `SD`.
 */
export function bindBindDeferredUiF2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiF2 peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.anr).getHostId());
}
