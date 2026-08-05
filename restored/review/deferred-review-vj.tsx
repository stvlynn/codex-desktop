// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Hpo`) / export `vj`.

export type BindBindDeferredReviewVjPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  R_: (...args: unknown[]) => unknown;
  Vpo: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredReviewVjPeers | null = null;

/** Wire bindBindDeferredReviewVj peers once companions land. */
export function setBindBindDeferredReviewVjPeers(
  next: BindBindDeferredReviewVjPeers,
): void {
  peers = next;
}

/**
 * Bundle export `vj` / internal `Hpo`.
 */
export function bindBindDeferredReviewVj() {
  if (peers == null) {
    throw new Error("bindBindDeferredReviewVj peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) =>
    e == null ? peers.Vpo : (peers.R_(t, `diff_comments`)?.[e] ?? peers.Vpo),
  );
}
