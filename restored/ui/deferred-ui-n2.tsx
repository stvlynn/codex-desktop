// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yD`) / export `N2`.

export type BindBindDeferredUiN2Peers = {
  JE: (...args: unknown[]) => unknown;
  ug: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiN2Peers | null = null;

/** Wire bindBindDeferredUiN2 peers once companions land. */
export function setBindBindDeferredUiN2Peers(
  next: BindBindDeferredUiN2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `N2` / internal `yD`.
 */
export function bindBindDeferredUiN2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiN2 peers are not configured");
  }

  return peers.JE(peers.ug);
}
