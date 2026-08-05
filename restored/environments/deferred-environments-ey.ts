// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qM`) / export `EY`.

export type DeferredEnvironmentsEYPeers = {
  GM: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredEnvironmentsEYPeers | null = null;

/** Wire deferredEnvironmentsEY peers once companions land. */
export function setDeferredEnvironmentsEYPeers(
  next: DeferredEnvironmentsEYPeers,
): void {
  peers = next;
}

/**
 * Bundle export `EY` / internal `qM`.
 */
export function deferredEnvironmentsEY() {
  if (peers == null) {
    throw new Error("deferredEnvironmentsEY peers are not configured");
  }

  return peers.Ta(peers.GM, !1);
}
