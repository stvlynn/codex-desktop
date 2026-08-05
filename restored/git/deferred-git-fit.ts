// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kLt`) / export `Fit`.

export type BindDeferredGitFitPeers = {
  OLt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitFitPeers | null = null;

/** Wire bindDeferredGitFit peers once companions land. */
export function setBindDeferredGitFitPeers(
  next: BindDeferredGitFitPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fit` / internal `kLt`.
 */
export function bindDeferredGitFit() {
  if (peers == null) {
    throw new Error("bindDeferredGitFit peers are not configured");
  }

  return peers.e(() => {
    peers.OLt();
  });
}
