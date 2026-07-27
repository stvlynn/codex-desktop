// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `hN`) / export `pJ`.

export type SetAtomValueFunctionalPeers = {
  valueAtom: unknown;
  writeValue: (store: unknown, next: unknown) => void;
};

let peers: SetAtomValueFunctionalPeers | null = null;

/** Wire setAtomValueFunctional peers once companions land. */
export function setSetAtomValueFunctionalPeers(
  next: SetAtomValueFunctionalPeers,
): void {
  peers = next;
}

/**
 * Bundle export `pJ` / internal `hN`.
 * Set an atom value, accepting a value or updater function.
 */
export function setAtomValueFunctional(
  store: { get: (atom: unknown) => unknown },
  next: unknown | ((prev: unknown) => unknown),
): void {
  if (peers == null) {
    throw new Error("SetAtomValueFunctional peers are not configured");
  }
  const prev = store.get(peers.valueAtom);
  const value =
    typeof next === "function" ? (next as (p: unknown) => unknown)(prev) : next;
  if (!Object.is(prev, value)) peers.writeValue(store, value);
}
