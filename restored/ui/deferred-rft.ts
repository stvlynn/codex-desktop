// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_Ye`) / export `rft`.

export type DeferredRftPeers = {
  Ud: (...args: unknown[]) => unknown;
  dYe: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gYe: (...args: unknown[]) => unknown;
  hYe: (...args: unknown[]) => unknown;
  pYe: (...args: unknown[]) => unknown;
  yd: (...args: unknown[]) => unknown;
};

let peers: DeferredRftPeers | null = null;

/** Wire deferredRft peers once companions land. */
export function setDeferredRftPeers(next: DeferredRftPeers): void {
  peers = next;
}

/**
 * Bundle export `rft` / internal `_Ye`.
 */
export function deferredRft() {
  if (peers == null) {
    throw new Error("deferredRft peers are not configured");
  }

  return peers.e(() => {
    peers.Ud(), peers.yd(), peers.pYe(), peers.dYe(), gYe = peers.hYe();
  });
}
