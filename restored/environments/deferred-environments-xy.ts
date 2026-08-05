// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `MXr`) / export `xY`.

export type BindDeferredEnvironmentsXYPeers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: BindDeferredEnvironmentsXYPeers | null = null;

/** Wire bindDeferredEnvironmentsXY peers once companions land. */
export function setBindDeferredEnvironmentsXYPeers(
  next: BindDeferredEnvironmentsXYPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xY` / internal `MXr`.
 */
export function bindDeferredEnvironmentsXY() {
  if (peers == null) {
    throw new Error("bindDeferredEnvironmentsXY peers are not configured");
  }

  return peers.kp(`environment`, null);
}
