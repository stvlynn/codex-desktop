// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `u7e`) / export `sut`.

export type BindDeferredUiSutPeers = {
  N5e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiSutPeers | null = null;

/** Wire bindDeferredUiSut peers once companions land. */
export function setBindDeferredUiSutPeers(next: BindDeferredUiSutPeers): void {
  peers = next;
}

/**
 * Bundle export `sut` / internal `u7e`.
 */
export function bindDeferredUiSut() {
  if (peers == null) {
    throw new Error("bindDeferredUiSut peers are not configured");
  }

  return peers.N5e;
}
