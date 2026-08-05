// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `j1`) / export `nm`.

export type ResolveBranchOrFallbackPathPeers = {
  BA: (...args: unknown[]) => unknown;
  bMr: (...args: unknown[]) => unknown;
  lnc: (...args: unknown[]) => unknown;
};

let peers: ResolveBranchOrFallbackPathPeers | null = null;

/** Wire resolveBranchOrFallbackPath peers once companions land. */
export function setResolveBranchOrFallbackPathPeers(
  next: ResolveBranchOrFallbackPathPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nm` / internal `j1`.
 */
export function resolveBranchOrFallbackPath(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
) {
  if (peers == null) {
    throw new Error("resolveBranchOrFallbackPath peers are not configured");
  }

  peers.lnc(e, t);
  let i = peers.BA(t);
  if (i != null) {
    n(i);
    return;
  }
  r(peers.bMr(t));
}
