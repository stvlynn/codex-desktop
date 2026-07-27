// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LWi`) / export `setOpenReviewFileSourceTabs`.

export type OpenReviewFileSourceTabsPeers = {
  Bf: (...args: unknown[]) => unknown;
  Mor: (...args: unknown[]) => unknown;
  OWi: (...args: unknown[]) => unknown;
};
let peers: OpenReviewFileSourceTabsPeers | null = null;

/** Wire setOpenReviewFileSourceTabs peers once companions land. */
export function setOpenReviewFileSourceTabsPeers(next: OpenReviewFileSourceTabsPeers): void {
  peers = next;
}

/**
 * Bundle export `setOpenReviewFileSourceTabs` / internal `LWi`.
 */
export function setOpenReviewFileSourceTabs(e: unknown, t: unknown = {}) {
  if (peers == null) {
    throw new Error("setOpenReviewFileSourceTabs peers are not configured");
  }
  e.value.routeKind === "local-thread" &&
    peers.Bf("set-open-review-file-source-tabs", {
      conversationId: e.value.conversationId,
      openFiles: peers.OWi(peers.Mor(e, t)),
    });
}
