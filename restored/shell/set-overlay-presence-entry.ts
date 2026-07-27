// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gvu`) / export `setOverlayPresenceEntry`.

export type OverlayPresenceEntryPeers = {
  Jvu: (...args: unknown[]) => unknown;
  P9: (...args: unknown[]) => unknown;
};
let peers: OverlayPresenceEntryPeers | null = null;

/** Wire setOverlayPresenceEntry peers once companions land. */
export function setOverlayPresenceEntryPeers(next: OverlayPresenceEntryPeers): void {
  peers = next;
}

/**
 * Bundle export `setOverlayPresenceEntry` / internal `Gvu`.
 */
export function setOverlayPresenceEntry(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("setOverlayPresenceEntry peers are not configured");
  }
  e.set(peers.P9, peers.Jvu(e.get(peers.P9), t, n));
}
