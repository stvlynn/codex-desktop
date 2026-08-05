// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `NWi` / export `aH` — extractFn(NWi/MWi); companion jWi→tH buildOpenFileCacheKey.

import {
  buildOpenFileCacheKey,
  type OpenFileCacheKeyArgs,
} from "./open-file-cache-key";

type StoreSet = {
  set: (atom: unknown, key: string, value: boolean) => void;
};

let openFileCacheAtom: unknown = null;

/** Wire the open-file cache atom closed over by bundle `NWi` / `MWi`. */
export function bindOpenFileCacheAtom(atom: unknown): void {
  openFileCacheAtom = atom;
}

/** Bundle `NWi` / export `aH` — mark open-file cache entry inactive. */
export function setOpenFileCacheEntryInactive(
  store: StoreSet,
  args: OpenFileCacheKeyArgs,
): void {
  store.set(openFileCacheAtom, buildOpenFileCacheKey(args), false);
}

/** Bundle `MWi` / export `iH` — mark open-file cache entry active. */
export function setOpenFileCacheEntryActive(
  store: StoreSet,
  args: OpenFileCacheKeyArgs,
): void {
  store.set(openFileCacheAtom, buildOpenFileCacheKey(args), true);
}
