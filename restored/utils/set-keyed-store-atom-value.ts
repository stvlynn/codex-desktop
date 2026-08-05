// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `$Li` / export `PU` — extractFn($Li/DIi/ztr) keyed atom writers.

type StoreSetKeyed = {
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

let puAtom: unknown = null;
let xuAtom: unknown = null;
let q2Atom: unknown = null;

/** Wire keyed atoms for PU/XU/q2. */
export function bindKeyedStoreWriterAtoms(args: {
  puAtom: unknown;
  xuAtom: unknown;
  q2Atom: unknown;
}): void {
  puAtom = args.puAtom;
  xuAtom = args.xuAtom;
  q2Atom = args.q2Atom;
}

/** Bundle `$Li` / export `PU`. */
export function setKeyedStoreAtomValuePU(
  store: StoreSetKeyed,
  key: unknown,
  value: unknown,
): void {
  store.set(puAtom, key, value);
}

/** Bundle `DIi` / export `XU`. */
export function setKeyedStoreAtomValueXU(
  store: StoreSetKeyed,
  key: unknown,
  value: unknown,
): void {
  store.set(xuAtom, key, value);
}

/** Bundle `ztr` / export `q2`. */
export function setKeyedStoreAtomValueQ2(
  store: StoreSetKeyed,
  key: unknown,
  value: unknown,
): void {
  store.set(q2Atom, key, value);
}
