// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B9o`) / export `Lw`.

export type BindBindDeferredUiLwPeers = {
  Ma: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gX: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiLwPeers | null = null;

/** Wire bindBindDeferredUiLw peers once companions land. */
export function setBindBindDeferredUiLwPeers(next: BindBindDeferredUiLwPeers): void {
  peers = next;
}

/**
 * Bundle export `Lw` / internal `B9o`.
 */
export function bindBindDeferredUiLw() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiLw peers are not configured");
  }

  return peers.Ma(peers.Q, ({
    get: e
  }) => e(peers.gX).joystick);
}
