// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `nOt` / `L_` companions for export `bj` (Mot/R_ is the reader).
// extractFn(internal); snapshot atom bound like Mot.

import { hostMessageBus } from "../navigation/host-message-bus";

type StoreGetSet = {
  get: (atom: unknown, key: string) => unknown;
  set: (atom: unknown, key: string, value: unknown) => void;
};

let sharedObjectSnapshotAtom: unknown = null;

/** Wire the snapshot atom closed over by bundle `nOt` / `L_`. */
export function bindSharedObjectMutationAtom(atom: unknown): void {
  sharedObjectSnapshotAtom = atom;
}

/** Bundle `nOt` — host shared-object-set + local snapshot write. */
export function writeSharedObjectValue(store: StoreGetSet, key: string, value: unknown): void {
  hostMessageBus.dispatchMessage("shared-object-set", { key, value });
  store.set(sharedObjectSnapshotAtom, key, value);
}

/** Bundle `L_` — read-modify-write shared object value. */
export function updateSharedObjectValue(store: StoreGetSet, key: string, next: unknown | ((prev: unknown) => unknown),
): void {
  const prev = store.get(sharedObjectSnapshotAtom, key);
  writeSharedObjectValue(
    store,
    key,
    typeof next === "function"
      ? (next as (prev: unknown) => unknown)(prev)
      : next,
  );
}
