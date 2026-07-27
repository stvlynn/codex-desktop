// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `qvu`) / export `et`.

export type ToggleOverlayPresenceAtomPeers = {
  P9: (...args: unknown[]) => unknown;
  Xvu: (...args: unknown[]) => unknown;
};

let peers: ToggleOverlayPresenceAtomPeers | null = null;

/** Wire toggleOverlayPresenceAtom peers once companions land. */
export function setToggleOverlayPresenceAtomPeers(next: ToggleOverlayPresenceAtomPeers): void {
  peers = next;
}

/**
 * Bundle export `et` / internal `qvu`.
 */
export function toggleOverlayPresenceAtom(e: unknown) {
  if (peers == null) {
    throw new Error("toggleOverlayPresenceAtom peers are not configured");
  }

  e.set(peers.P9, peers.Xvu(e.get(peers.P9)));
}
