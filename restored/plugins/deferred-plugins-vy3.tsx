// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qYr`) / export `VY`.

export type BindBinddeferredPluginsVY3Peers = {
  Pn: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredPluginsVY3Peers | null = null;

/** Wire bindBinddeferredPluginsVY3 peers once companions land. */
export function setBindBinddeferredPluginsVY3Peers(
  next: BindBinddeferredPluginsVY3Peers,
): void {
  peers = next;
}

/**
 * Bundle export `VY` / internal `qYr`.
 */
export function bindBinddeferredPluginsVY3() {
  if (peers == null) {
    throw new Error("bindBinddeferredPluginsVY3 peers are not configured");
  }

  return peers.Pn(!1);
}
