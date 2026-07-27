// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `f7e`) / export `out`.

export type BindDeferredUiOutPeers = {
  L5e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiOutPeers | null = null;

/** Wire bindDeferredUiOut peers once companions land. */
export function setBindDeferredUiOutPeers(next: BindDeferredUiOutPeers): void {
  peers = next;
}

/**
 * Bundle export `out` / internal `f7e`.
 */
export function bindDeferredUiOut() {
  if (peers == null) {
    throw new Error("bindDeferredUiOut peers are not configured");
  }

  return peers.L5e;
}
