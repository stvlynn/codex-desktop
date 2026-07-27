// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Dnr`) / export `r4`.

export type BindBindDeferredUiR4Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiR4Peers | null = null;

/** Wire bindBindDeferredUiR4 peers once companions land. */
export function setBindBindDeferredUiR4Peers(next: BindBindDeferredUiR4Peers): void {
  peers = next;
}

/**
 * Bundle export `r4` / internal `Dnr`.
 */
export function bindBindDeferredUiR4() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiR4 peers are not configured");
  }

  return peers.JE(({
    unreadMessageCount: e
  }) => e ?? 0);
}
