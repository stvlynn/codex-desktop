// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `o8n`) / export `d3`.

export type BindDeferredUiD3Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  wu: (...args: unknown[]) => unknown;
  xp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiD3Peers | null = null;

/** Wire bindDeferredUiD3 peers once companions land. */
export function setBindDeferredUiD3Peers(next: BindDeferredUiD3Peers): void {
  peers = next;
}

/**
 * Bundle export `d3` / internal `o8n`.
 */
export function bindDeferredUiD3() {
  if (peers == null) {
    throw new Error("bindDeferredUiD3 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => peers.xp(e, peers.wu.reviewMode));
}
