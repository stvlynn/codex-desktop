// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `j1`) / export `nm`.

export type ResolveBranchOrFallbackPathPeers = {
  prepareResolve: (store: unknown, branchOrPath: unknown) => void;
  resolveBranch: (branchOrPath: unknown) => unknown | null | undefined;
  toFallbackPath: (branchOrPath: unknown) => unknown;
};

let peers: ResolveBranchOrFallbackPathPeers | null = null;

/** Wire branch/path resolve peers once companions land. */
export function setResolveBranchOrFallbackPathPeers(
  next: ResolveBranchOrFallbackPathPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nm` / internal `j1`.
 * Resolve a branch name, else invoke the fallback-path callback.
 */
export function resolveBranchOrFallbackPath(
  store: unknown,
  branchOrPath: unknown,
  onBranch: (branch: unknown) => void,
  onFallbackPath: (path: unknown) => void,
): void {
  if (peers == null) {
    throw new Error("ResolveBranchOrFallbackPath peers are not configured");
  }
  peers.prepareResolve(store, branchOrPath);
  const branch = peers.resolveBranch(branchOrPath);
  if (branch != null) {
    onBranch(branch);
    return;
  }
  onFallbackPath(peers.toFallbackPath(branchOrPath));
}
