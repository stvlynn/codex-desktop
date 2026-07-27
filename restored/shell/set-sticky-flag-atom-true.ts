// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `QYn`) / export `u8`.

export type SetStickyFlagAtomTruePeers = {
  validateFlag: (flag: unknown) => void;
  stickyFlagsAtom: unknown;
};

let peers: SetStickyFlagAtomTruePeers | null = null;

/** Wire sticky-flag peers once companions land. */
export function setSetStickyFlagAtomTruePeers(
  next: SetStickyFlagAtomTruePeers,
): void {
  peers = next;
}

/**
 * Bundle export `u8` / internal `QYn`.
 * Mark a sticky flag as true in the atom family.
 */
export function setStickyFlagAtomTrue(
  store: {
    set: (atom: unknown, flag: unknown, value: boolean) => void;
  },
  flag: unknown,
): void {
  if (peers == null) {
    throw new Error("SetStickyFlagAtomTrue peers are not configured");
  }
  peers.validateFlag(flag);
  store.set(peers.stickyFlagsAtom, flag, true);
}
