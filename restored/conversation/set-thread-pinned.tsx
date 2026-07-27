// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TSo`) / export `rA`.

export type BindBindSetThreadPinnedPeers = {
  CSo: (...args: unknown[]) => unknown;
  DD: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  z_: (...args: unknown[]) => unknown;
};

let peers: BindBindSetThreadPinnedPeers | null = null;

/** Wire bindBindSetThreadPinned peers once companions land. */
export function setBindBindSetThreadPinnedPeers(next: BindBindSetThreadPinnedPeers): void {
  peers = next;
}

/**
 * Bundle export `rA` / internal `TSo`.
 */
export function bindBindSetThreadPinned() {
  if (peers == null) {
    throw new Error("bindBindSetThreadPinned peers are not configured");
  }

  return peers.e(() => {
    peers.DD(), peers.z_(), peers.CSo();
  });
}
