// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bH` / export `qN` — extractFn(bH/war/oas/AMl/TMl/NPc) atom writers.

type StoreSet1 = { set: (atom: unknown, value: unknown) => void };

let qNAtom: unknown = null;
let x0Atom: unknown = null;
let rCAtom: unknown = null;
let fsAtom: unknown = null;
let vsAtom: unknown = null;
let sfAtom: unknown = null;
let sfResetValue: unknown = null;

/** Wire atoms for simple one-arg store writers. */
export function bindSimpleStoreWriterAtoms(args: {
  qNAtom: unknown;
  x0Atom: unknown;
  rCAtom: unknown;
  fsAtom: unknown;
  vsAtom: unknown;
  sfAtom: unknown;
  sfResetValue: unknown;
}): void {
  qNAtom = args.qNAtom;
  x0Atom = args.x0Atom;
  rCAtom = args.rCAtom;
  fsAtom = args.fsAtom;
  vsAtom = args.vsAtom;
  sfAtom = args.sfAtom;
  sfResetValue = args.sfResetValue;
}

/** Bundle `bH` / export `qN`. */
export function setStoreAtomValueQN(store: StoreSet1, value: unknown): void {
  store.set(qNAtom, value);
}

/** Bundle `war` / export `x0`. */
export function setStoreAtomValueX0(store: StoreSet1, value: unknown): void {
  store.set(x0Atom, value);
}

/** Bundle `oas` / export `rC`. */
export function clearStoreAtomFlagRC(store: StoreSet1): void {
  store.set(rCAtom, false);
}

/** Bundle `AMl` / export `Fs`. */
export function clearStoreAtomValueFs(store: StoreSet1): void {
  store.set(fsAtom, null);
}

/** Bundle `TMl` / export `Vs`. */
export function resetStoreAtomListVs(store: StoreSet1): void {
  store.set(vsAtom, []);
}

/** Bundle `NPc` / export `Sf` — reset to companion constant `IPc`. */
export function resetStoreAtomValueSf(store: StoreSet1): void {
  store.set(sfAtom, sfResetValue);
}
