// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OXr`) / export `DY`.

export type DeferredEnvironmentsDYPeers = {
  GM: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
};

let peers: DeferredEnvironmentsDYPeers | null = null;

/** Wire deferredEnvironmentsDY peers once companions land. */
export function setDeferredEnvironmentsDYPeers(
  next: DeferredEnvironmentsDYPeers,
): void {
  peers = next;
}

/**
 * Bundle export `DY` / internal `OXr`.
 */
export function deferredEnvironmentsDY() {
  if (peers == null) {
    throw new Error("deferredEnvironmentsDY peers are not configured");
  }

  return peers.Ta(peers.GM, null);
}
