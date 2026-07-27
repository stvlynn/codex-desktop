// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Mot` (internal R_) — read shared-object snapshot via host store getter.
// The bundle closes over the snapshot atom; bind it before use.

type StoreGet = (atom: unknown, key: string) => unknown;

let sharedObjectSnapshotAtom: unknown = null;

/** Wire the snapshot atom closed over by bundle export `Mot`. */
export function bindSharedObjectSnapshotAtom(atom: unknown): void {
  sharedObjectSnapshotAtom = atom;
}

/**
 * Bundle export `Mot`.
 * `get(sharedObjectSnapshotAtom, key)` in the original chunk.
 */
export function readSharedObjectSnapshotValue(get: StoreGet, key: string): unknown {
  return get(sharedObjectSnapshotAtom, key);
}
