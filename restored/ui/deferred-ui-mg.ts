// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mXs`) / export `mg`.

export type BindDeferredUiMgPeers = {
  cXs: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiMgPeers | null = null;

/** Wire bindDeferredUiMg peers once companions land. */
export function setBindDeferredUiMgPeers(next: BindDeferredUiMgPeers): void {
  peers = next;
}

/**
 * Bundle export `mg` / internal `mXs`.
 */
export function bindDeferredUiMg() {
  if (peers == null) {
    throw new Error("bindDeferredUiMg peers are not configured");
  }

  return `url("${peers.cXs}") 13 12, crosshair`;
}
