// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `g0r`) / export `cJ`.

export type PatchNullAwareHostEntryPeers = {
  clearEntry: (store: unknown) => void;
  setEntry: (store: unknown, key: unknown, value: unknown) => void;
  notify: (store: unknown, value: unknown) => void;
};

let peers: PatchNullAwareHostEntryPeers | null = null;

/** Wire patchNullAwareHostEntry peers once companions land. */
export function setPatchNullAwareHostEntryPeers(
  next: PatchNullAwareHostEntryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cJ` / internal `g0r`.
 * Patch or clear a host entry, then notify listeners.
 */
export function patchNullAwareHostEntry(
  store: unknown,
  key: unknown,
  value: unknown,
): void {
  if (peers == null) {
    throw new Error("PatchNullAwareHostEntry peers are not configured");
  }
  if (key == null) peers.clearEntry(store);
  else peers.setEntry(store, key, value);
  peers.notify(store, value);
}
