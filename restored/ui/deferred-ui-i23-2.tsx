// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `irr`) / export `I2`.

export type BindBindDeferredUiI23Peers = {
  JE: (...args: unknown[]) => unknown;
  cg: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiI23Peers | null = null;

/** Wire bindBindDeferredUiI23 peers once companions land. */
export function setBindBindDeferredUiI23Peers(
  next: BindBindDeferredUiI23Peers,
): void {
  peers = next;
}

/**
 * Bundle export `I2` / internal `irr`.
 */
export function bindBindDeferredUiI23() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiI23 peers are not configured");
  }

  return peers.JE(peers.cg);
}
