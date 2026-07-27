// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wza`) / export `QM`.

export type PullRequestsPageDetailCommentUnknownAuthorPeers = {
  Cza: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Sza: (...args: unknown[]) => unknown;
  V9r: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: PullRequestsPageDetailCommentUnknownAuthorPeers | null = null;

/** Wire pullRequestsPageDetailCommentUnknownAuthor peers once companions land. */
export function setPullRequestsPageDetailCommentUnknownAuthorPeers(next: PullRequestsPageDetailCommentUnknownAuthorPeers): void {
  peers = next;
}

/**
 * Bundle export `QM` / internal `wza`.
 */
export function pullRequestsPageDetailCommentUnknownAuthor() {
  if (peers == null) {
    throw new Error("pullRequestsPageDetailCommentUnknownAuthor peers are not configured");
  }

  return peers.e(() => {
    Sza = peers.c(), peers.V9r(), Cza = peers.J();
  });
}
