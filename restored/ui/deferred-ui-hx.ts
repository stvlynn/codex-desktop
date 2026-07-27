// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RGr`) / export `HX`.

export type BindDeferredUiHXPeers = {
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ep: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHXPeers | null = null;

/** Wire bindDeferredUiHX peers once companions land. */
export function setBindDeferredUiHXPeers(next: BindDeferredUiHXPeers): void {
  peers = next;
}

/**
 * Bundle export `HX` / internal `RGr`.
 */
export function bindDeferredUiHX() {
  if (peers == null) {
    throw new Error("bindDeferredUiHX peers are not configured");
  }

  return peers.ep(peers.Q, `is-copilot-api-available`, {
    staleTime: peers.Hf.INFINITE,
  });
}
