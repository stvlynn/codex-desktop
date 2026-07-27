// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zSs`) / export `nb`.

export type MarkAutoReviewApprovalNudgedPeers = {
  BSs: (...args: unknown[]) => unknown;
  Iw: (...args: unknown[]) => unknown;
  WSs: (...args: unknown[]) => unknown;
};

let peers: MarkAutoReviewApprovalNudgedPeers | null = null;

/** Wire markAutoReviewApprovalNudged peers once companions land. */
export function setMarkAutoReviewApprovalNudgedPeers(next: MarkAutoReviewApprovalNudgedPeers): void {
  peers = next;
}

/**
 * Bundle export `nb` / internal `zSs`.
 */
export function markAutoReviewApprovalNudged(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("markAutoReviewApprovalNudged peers are not configured");
  }

  e.set(peers.WSs, !0), peers.BSs(e, t);
  for (let t of e.get(peers.Iw)) peers.BSs(e, t);
}
