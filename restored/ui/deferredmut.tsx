// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pm`) / export `mut`.

export type BindDeferredmutPeers = {
  v2e: (...args: unknown[]) => unknown;
};
let peers: BindDeferredmutPeers | null = null;

/** Wire bindDeferredmut peers once companions land. */
export function setBindDeferredmutPeers(next: BindDeferredmutPeers): void {
  peers = next;
}

/**
 * Bundle export `mut` / internal `pm`.
 */
export const bindDeferredmut = (e: unknown, t: unknown) => {
  if (peers == null) {
    throw new Error("bindDeferredmut peers are not configured");
  }
  return {
    ...peers.v2e(e),
    options: [e, t],
  };
};
