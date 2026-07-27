// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `aoc`) / export `Cp`.

export type BindDeferredUiCpPeers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  ioc: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiCpPeers | null = null;

/** Wire bindDeferredUiCp peers once companions land. */
export function setBindDeferredUiCpPeers(next: BindDeferredUiCpPeers): void {
  peers = next;
}

/**
 * Bundle export `Cp` / internal `aoc`.
 */
export function bindDeferredUiCp() {
  if (peers == null) {
    throw new Error("bindDeferredUiCp peers are not configured");
  }

  return peers.Ta(peers.Q, peers.ioc);
}
