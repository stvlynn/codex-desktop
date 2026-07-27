// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xD`) / export `a4`.

export type BindBindDeferredUiA4Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiA4Peers | null = null;

/** Wire bindBindDeferredUiA4 peers once companions land. */
export function setBindBindDeferredUiA4Peers(next: BindBindDeferredUiA4Peers): void {
  peers = next;
}

/**
 * Bundle export `a4` / internal `xD`.
 */
export function bindBindDeferredUiA4() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiA4 peers are not configured");
  }

  return peers.JE(({
    workspaceKind: e
  }) => e);
}
