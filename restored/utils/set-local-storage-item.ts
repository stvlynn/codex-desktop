// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `rd`) / export `Mft`.

export type SetLocalStorageItemPeers = {
  getStorage: () => { setItem: (key: string, value: string) => void };
};

let peers: SetLocalStorageItemPeers | null = null;

/** Wire setLocalStorageItem peers once companions land. */
export function setSetLocalStorageItemPeers(
  next: SetLocalStorageItemPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Mft` / internal `rd`.
 * Set a key/value on the local storage adapter.
 */
export function setLocalStorageItem(key: string, value: string): void {
  if (peers == null) {
    throw new Error("SetLocalStorageItem peers are not configured");
  }
  peers.getStorage().setItem(key, value);
}
