// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `srr`) / export `Q2`.

export type BindBindDeferredUiQ22Peers = {
  JE: (...args: unknown[]) => unknown;
  fot: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiQ22Peers | null = null;

/** Wire bindBindDeferredUiQ22 peers once companions land. */
export function setBindBindDeferredUiQ22Peers(next: BindBindDeferredUiQ22Peers): void {
  peers = next;
}

/**
 * Bundle export `Q2` / internal `srr`.
 */
export function bindBindDeferredUiQ22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiQ22 peers are not configured");
  }

  return peers.JE(e => e.turnHistory?.kind === `canonical` ? peers.fot(e.turnHistory.history) : null);
}
