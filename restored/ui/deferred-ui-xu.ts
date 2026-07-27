// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yRi`) / export `xU`.

export type BindDeferredUiXUPeers = {
  e: (...args: unknown[]) => unknown;
  vRi: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiXUPeers | null = null;

/** Wire bindDeferredUiXU peers once companions land. */
export function setBindDeferredUiXUPeers(next: BindDeferredUiXUPeers): void {
  peers = next;
}

/**
 * Bundle export `xU` / internal `yRi`.
 */
export function bindDeferredUiXU() {
  if (peers == null) {
    throw new Error("bindDeferredUiXU peers are not configured");
  }

  return peers.e(() => {
    vRi = `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`;
  });
}
