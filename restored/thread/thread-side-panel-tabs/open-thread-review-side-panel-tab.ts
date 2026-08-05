// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `a1o`) / export `_E`.

export type OpenThreadReviewSidePanelTabPeers = {
  J$o: (...args: unknown[]) => unknown;
  RVi: (...args: unknown[]) => unknown;
  Uri: (...args: unknown[]) => unknown;
};

let peers: OpenThreadReviewSidePanelTabPeers | null = null;

/** Wire openThreadReviewSidePanelTab peers once companions land. */
export function setOpenThreadReviewSidePanelTabPeers(
  next: OpenThreadReviewSidePanelTabPeers,
): void {
  peers = next;
}

/**
 * Bundle export `_E` / internal `a1o`.
 */
export function openThreadReviewSidePanelTab(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("openThreadReviewSidePanelTab peers are not configured");
  }
  peers.Uri(e, t.conversationId ?? null);
  let n = peers.J$o(e);
  return (t.path != null && peers.RVi(e, t.path), n);
}
