// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ynr`) / export `D2`.

export type BindBindDeferredUiD2Peers = {
  JE: (...args: unknown[]) => unknown;
  Utr: (...args: unknown[]) => unknown;
  sg: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiD2Peers | null = null;

/** Wire bindBindDeferredUiD2 peers once companions land. */
export function setBindBindDeferredUiD2Peers(
  next: BindBindDeferredUiD2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `D2` / internal `Ynr`.
 */
export function bindBindDeferredUiD2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiD2 peers are not configured");
  }

  return peers.JE((e) => peers.Utr(peers.sg(e)).cwd);
}
