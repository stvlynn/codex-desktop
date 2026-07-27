// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ooc`) / export `wp`.

export type BindDeferredUiWpPeers = {
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  aoc: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  ioc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWpPeers | null = null;

/** Wire bindDeferredUiWp peers once companions land. */
export function setBindDeferredUiWpPeers(next: BindDeferredUiWpPeers): void {
  peers = next;
}

/**
 * Bundle export `wp` / internal `ooc`.
 */
export function bindDeferredUiWp() {
  if (peers == null) {
    throw new Error("bindDeferredUiWp peers are not configured");
  }

  return peers.e(() => {
    peers.Ho(), peers.ed(), ioc = {
      status: `idle`
    }, aoc = peers.Ta(peers.Q, peers.ioc);
  });
}
