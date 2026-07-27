// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `yti`) / export `mG`.

export type DismissAmbientSuggestionPeers = {
  ambientAtom: unknown;
  logProductEvent: (
    store: unknown,
    event: unknown,
    payload: Record<string, unknown>,
  ) => void;
  dismissEvent: unknown;
};

let peers: DismissAmbientSuggestionPeers | null = null;

/** Wire ambient suggestion atoms once companions land. */
export function setDismissAmbientSuggestionPeers(
  next: DismissAmbientSuggestionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `mG` / internal `yti`.
 * Log dismiss + clear ambient suggestion product-event atom.
 */
export function dismissAmbientSuggestionProductEvent(
  store: {
    get: (atom: unknown) => Record<string, unknown> | null | undefined;
    set: (atom: unknown, value: unknown) => void;
  },
  dismissReason: unknown,
): void {
  if (peers == null) {
    throw new Error("DismissAmbientSuggestion peers are not configured");
  }
  const current = store.get(peers.ambientAtom);
  if (current != null) {
    peers.logProductEvent(store, peers.dismissEvent, {
      ...current,
      dismissReason,
    });
    store.set(peers.ambientAtom, null);
  }
}
