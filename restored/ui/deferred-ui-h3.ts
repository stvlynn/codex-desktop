// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `s8n`) / export `h3`.

export type BindDeferredUiH3Peers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gE: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiH3Peers | null = null;

/** Wire bindDeferredUiH3 peers once companions land. */
export function setBindDeferredUiH3Peers(next: BindDeferredUiH3Peers): void {
  peers = next;
}

/**
 * Bundle export `h3` / internal `s8n`.
 */
export function bindDeferredUiH3() {
  if (peers == null) {
    throw new Error("bindDeferredUiH3 peers are not configured");
  }

  return peers.Ma(peers.Q, ({ get: e }) => e(peers.gE) === `full`);
}
