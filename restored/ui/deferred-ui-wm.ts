// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hWa`) / export `wM`.

export type BindDeferredUiWMPeers = {
  J: (...args: unknown[]) => unknown;
  aWa: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  dWa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  eU: (...args: unknown[]) => unknown;
  mWa: (...args: unknown[]) => unknown;
  pWa: (...args: unknown[]) => unknown;
  sd: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiWMPeers | null = null;

/** Wire bindDeferredUiWM peers once companions land. */
export function setBindDeferredUiWMPeers(next: BindDeferredUiWMPeers): void {
  peers = next;
}

/**
 * Bundle export `wM` / internal `hWa`.
 */
export function bindDeferredUiWM() {
  if (peers == null) {
    throw new Error("bindDeferredUiWM peers are not configured");
  }

  return peers.e(() => {
    pWa = peers.c(), peers.sd(), peers.aWa(), peers.dWa(), mWa = peers.J(), eU = 4;
  });
}
