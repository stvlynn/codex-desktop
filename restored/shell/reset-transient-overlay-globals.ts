// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Oi`) / export `ovt`.

export type ResetTransientOverlayGlobalsPeers = {
  clearTransientOverlayState: () => void;
};

let peers: ResetTransientOverlayGlobalsPeers | null = null;

/** Wire transient overlay reset peers once companions land. */
export function setResetTransientOverlayGlobalsPeers(
  next: ResetTransientOverlayGlobalsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ovt` / internal `Oi`.
 * Clear transient overlay globals (pointer + drag flag).
 */
export function resetTransientOverlayGlobals(): void {
  if (peers == null) {
    throw new Error("ResetTransientOverlayGlobals peers are not configured");
  }
  peers.clearTransientOverlayState();
}
