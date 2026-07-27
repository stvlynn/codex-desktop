// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KT`) / export `e6`.

export type BindDeferrede6Peers = {
  e: (...args: unknown[]) => unknown;
  oKn: (...args: unknown[]) => unknown;
};

let peers: BindDeferrede6Peers | null = null;

/** Wire bindDeferrede6 peers once companions land. */
export function setBindDeferrede6Peers(next: BindDeferrede6Peers): void {
  peers = next;
}

/**
 * Bundle export `e6` / internal `KT`.
 */
export function bindDeferrede6() {
  if (peers == null) {
    throw new Error("bindDeferrede6 peers are not configured");
  }

  return peers.e(() => {
    peers.oKn();
  });
}
