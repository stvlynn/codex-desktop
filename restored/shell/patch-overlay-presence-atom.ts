// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Kvu`) / export `$`.

export type PatchOverlayPresenceAtomPeers = {
  overlayPresenceAtom: unknown;
  mergePresence: (current: unknown, patch: unknown) => unknown;
};

let peers: PatchOverlayPresenceAtomPeers | null = null;

/** Wire overlay presence patch peers once companions land. */
export function setPatchOverlayPresenceAtomPeers(
  next: PatchOverlayPresenceAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$` / internal `Kvu`.
 * Patch the overlay presence atom with a merge helper.
 */
export function patchOverlayPresenceAtom(
  store: {
    get: (atom: unknown) => unknown;
    set: (atom: unknown, value: unknown) => void;
  },
  patch: unknown,
): void {
  if (peers == null) {
    throw new Error("PatchOverlayPresenceAtom peers are not configured");
  }
  store.set(
    peers.overlayPresenceAtom,
    peers.mergePresence(store.get(peers.overlayPresenceAtom), patch),
  );
}
