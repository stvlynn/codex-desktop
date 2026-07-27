// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Gvu`) / export `rt`.

export type SetOverlayPresenceEntryPeers = {
  overlayPresenceAtom: unknown;
  setPresenceEntry: (current: unknown, key: unknown, value: unknown) => unknown;
};

let peers: SetOverlayPresenceEntryPeers | null = null;

/** Wire overlay presence entry peers once companions land. */
export function setSetOverlayPresenceEntryPeers(
  next: SetOverlayPresenceEntryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rt` / internal `Gvu`.
 * Set one overlay presence entry by key.
 */
export function setOverlayPresenceEntry(
  store: {
    get: (atom: unknown) => unknown;
    set: (atom: unknown, value: unknown) => void;
  },
  key: unknown,
  value: unknown,
): void {
  if (peers == null) {
    throw new Error("SetOverlayPresenceEntry peers are not configured");
  }
  store.set(
    peers.overlayPresenceAtom,
    peers.setPresenceEntry(store.get(peers.overlayPresenceAtom), key, value),
  );
}
