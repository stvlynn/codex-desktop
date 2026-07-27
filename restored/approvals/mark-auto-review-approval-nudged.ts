// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `zSs`) / export `nb`.

export type MarkAutoReviewApprovalNudgedPeers = {
  nudgedAtom: unknown;
  persistNudge: (store: AtomStore, conversationId: unknown) => void;
  conversationIdsAtom: unknown;
};

export type AtomStore = {
  set: (atom: unknown, value: unknown) => void;
  get: (atom: unknown) => Iterable<unknown>;
};

let peers: MarkAutoReviewApprovalNudgedPeers | null = null;

/** Wire auto-review nudge peers once companions land. */
export function setMarkAutoReviewApprovalNudgedPeers(
  next: MarkAutoReviewApprovalNudgedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nb` / internal `zSs`.
 * Mark the auto-review approval nudge as shown and persist for all ids.
 */
export function markAutoReviewApprovalNudged(
  store: AtomStore,
  conversationId: unknown,
): void {
  if (peers == null) {
    throw new Error("MarkAutoReviewApprovalNudged peers are not configured");
  }
  store.set(peers.nudgedAtom, true);
  peers.persistNudge(store, conversationId);
  for (const id of store.get(peers.conversationIdsAtom)) {
    peers.persistNudge(store, id);
  }
}
