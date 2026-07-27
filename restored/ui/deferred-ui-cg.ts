// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `oti`) / export `CG`.

export type BindDeferredUiCGPeers = {
  ati: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCGPeers | null = null;

/** Wire bindDeferredUiCG peers once companions land. */
export function setBindDeferredUiCGPeers(next: BindDeferredUiCGPeers): void {
  peers = next;
}

/**
 * Bundle export `CG` / internal `oti`.
 */
export function bindDeferredUiCG() {
  if (peers == null) {
    throw new Error("bindDeferredUiCG peers are not configured");
  }

  return (0, peers.ati.createContext)(null);
}
