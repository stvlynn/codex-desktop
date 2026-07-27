// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `qvu`) / export `et`.

export type ToggleOverlayPresenceAtomPeers = {
  overlayPresenceAtom: unknown;
  togglePresence: (current: unknown) => unknown;
};

let peers: ToggleOverlayPresenceAtomPeers | null = null;

/** Wire overlay presence toggle peers once companions land. */
export function setToggleOverlayPresenceAtomPeers(
  next: ToggleOverlayPresenceAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `et` / internal `qvu`.
 * Toggle the overlay presence atom value.
 */
export function toggleOverlayPresenceAtom(store: {
  get: (atom: unknown) => unknown;
  set: (atom: unknown, value: unknown) => void;
}): void {
  if (peers == null) {
    throw new Error("ToggleOverlayPresenceAtom peers are not configured");
  }
  store.set(
    peers.overlayPresenceAtom,
    peers.togglePresence(store.get(peers.overlayPresenceAtom)),
  );
}
