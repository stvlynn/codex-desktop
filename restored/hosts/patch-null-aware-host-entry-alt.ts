// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `m0r`) / export `uJ`.

export type PatchNullAwareHostEntryAltPeers = {
  clearEntry: (store: unknown, value: unknown) => void;
  setEntry: (store: unknown, key: unknown, value: unknown) => void;
  notify: (store: unknown, value: unknown) => void;
};

let peers: PatchNullAwareHostEntryAltPeers | null = null;

/** Wire patchNullAwareHostEntryAlt peers once companions land. */
export function setPatchNullAwareHostEntryAltPeers(
  next: PatchNullAwareHostEntryAltPeers,
): void {
  peers = next;
}

/**
 * Bundle export `uJ` / internal `m0r`.
 * Alternate patch/clear host entry then notify.
 */
export function patchNullAwareHostEntryAlt(
  store: unknown,
  key: unknown,
  value: unknown,
): void {
  if (peers == null) {
    throw new Error("PatchNullAwareHostEntryAlt peers are not configured");
  }
  if (key == null) peers.clearEntry(store, value);
  else peers.setEntry(store, key, value);
  peers.notify(store, value);
}
