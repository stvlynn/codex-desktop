// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `C3` (internal k6n) — set per-host suppress-error flag on a store atom.
// The bundle closes over the atom family; bind it before use.

type StoreSet = (atom: unknown, hostId: unknown, value: unknown) => void;

let suppressRemoteControlErrorAtom: unknown = null;

/** Wire the atom closed over by bundle export `C3`. */
export function bindSuppressRemoteControlErrorAtom(atom: unknown): void {
  suppressRemoteControlErrorAtom = atom;
}

/**
 * Bundle export `C3`.
 * `store.set(suppressAtom, hostId, value)` in the original chunk.
 */
export function setSuppressRemoteControlError(
  store: { set: StoreSet },
  hostId: unknown,
  value: unknown,
): void {
  store.set(suppressRemoteControlErrorAtom, hostId, value);
}
