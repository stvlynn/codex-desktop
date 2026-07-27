// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `Z$s`) / export `Zh`.

export type SetKeyedAtomValueWithCleanupPeers = {
  familyAtom: unknown;
};

let peers: SetKeyedAtomValueWithCleanupPeers | null = null;

/** Wire setKeyedAtomValueWithCleanup peers once companions land. */
export function setSetKeyedAtomValueWithCleanupPeers(
  next: SetKeyedAtomValueWithCleanupPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Zh` / internal `Z$s`.
 * Set a keyed atom value and return a cleanup that clears it.
 */
export function setKeyedAtomValueWithCleanup(
  store: {
    get: (atom: unknown, key: unknown) => unknown;
    set: (atom: unknown, key: unknown, value: unknown) => void;
  },
  key: unknown,
  value: unknown,
): () => void {
  if (peers == null) {
    throw new Error("SetKeyedAtomValueWithCleanup peers are not configured");
  }
  store.set(peers.familyAtom, key, value);
  return () => {
    if (store.get(peers.familyAtom, key) === value) {
      store.set(peers.familyAtom, key, null);
    }
  };
}
