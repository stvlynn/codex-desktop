// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MAr` / export `l$` — extractFn(MAr); companion PAr atom.

type StoreSet = {
  set: (
    atom: unknown,
    key: unknown,
    updater: (prev: unknown[]) => unknown[],
  ) => void;
};

let keyedListAtom: unknown = null;

/** Wire the keyed-list atom closed over by bundle `MAr`. */
export function bindKeyedStoreListAtom(atom: unknown): void {
  keyedListAtom = atom;
}

/** Bundle `MAr` / export `l$` — append an item to a keyed list. */
export function appendToKeyedStoreList(store: StoreSet, key: unknown, item: unknown): void {
  store.set(keyedListAtom, key, (prev) => [...prev, item]);
}
