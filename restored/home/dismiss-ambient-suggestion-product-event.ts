// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `yti`) / export `mG`.

export type DismissAmbientSuggestionProductEventPeers = {
  $Zn: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  bP: (...args: unknown[]) => unknown;
};

let peers: DismissAmbientSuggestionProductEventPeers | null = null;

/** Wire dismissAmbientSuggestionProductEvent peers once companions land. */
export function setDismissAmbientSuggestionProductEventPeers(next: DismissAmbientSuggestionProductEventPeers): void {
  peers = next;
}

/**
 * Bundle export `mG` / internal `yti`.
 */
export function dismissAmbientSuggestionProductEvent(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("dismissAmbientSuggestionProductEvent peers are not configured");
  }

  let n = e.get(peers.bP);
  n != null && (peers.Ub(e, peers.$Zn, {
    ...n,
    dismissReason: t
  }), e.set(peers.bP, null));
}
