// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `VFi`) / export `rW`.

export type BindCurrentBranchPeers = {
  zFi: (...args: unknown[]) => unknown;
};

let peers: BindCurrentBranchPeers | null = null;

/** Wire bindCurrentBranch peers once companions land. */
export function setBindCurrentBranchPeers(next: BindCurrentBranchPeers): void {
  peers = next;
}

/**
 * Bundle export `rW` / internal `VFi`.
 */
export function bindCurrentBranch() {
  if (peers == null) {
    throw new Error("bindCurrentBranch peers are not configured");
  }

  return peers.zFi.fromTarget$;
}
