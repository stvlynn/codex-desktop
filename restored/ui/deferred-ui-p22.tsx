// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Xnr`) / export `P2`.

export type BindBindDeferredUiP22Peers = {
  JE: (...args: unknown[]) => unknown;
  turnId: (...args: unknown[]) => unknown;
  ug: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiP22Peers | null = null;

/** Wire bindBindDeferredUiP22 peers once companions land. */
export function setBindBindDeferredUiP22Peers(next: BindBindDeferredUiP22Peers): void {
  peers = next;
}

/**
 * Bundle export `P2` / internal `Xnr`.
 */
export function bindBindDeferredUiP22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiP22 peers are not configured");
  }

  return peers.JE(e => peers.ug(e)?.turnId ?? null);
}
