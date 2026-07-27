// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hk`) / export `e1`.

export type BindConversationPageDerivedAtomsPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  fEr: (...args: unknown[]) => unknown;
};

let peers: BindConversationPageDerivedAtomsPeers | null = null;

/** Wire bindConversationPageDerivedAtoms peers once companions land. */
export function setBindConversationPageDerivedAtomsPeers(next: BindConversationPageDerivedAtomsPeers): void {
  peers = next;
}

/**
 * Bundle export `e1` / internal `Hk`.
 */
export function bindConversationPageDerivedAtoms() {
  if (peers == null) {
    throw new Error("bindConversationPageDerivedAtoms peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => t(peers.fEr, e)[0] ?? null);
}
