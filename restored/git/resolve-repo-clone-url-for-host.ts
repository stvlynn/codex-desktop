// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `KAs`) / export `Sv`.

export type ResolveRepoCloneUrlForHostPeers = {
  AXr: (...args: unknown[]) => unknown;
  NXr: (...args: unknown[]) => unknown;
  clone_url: (...args: unknown[]) => unknown;
  qAs: (...args: unknown[]) => unknown;
  repo_map: (...args: unknown[]) => unknown;
};

let peers: ResolveRepoCloneUrlForHostPeers | null = null;

/** Wire resolveRepoCloneUrlForHost peers once companions land. */
export function setResolveRepoCloneUrlForHostPeers(next: ResolveRepoCloneUrlForHostPeers): void {
  peers = next;
}

/**
 * Bundle export `Sv` / internal `KAs`.
 */
export function resolveRepoCloneUrlForHost(e: unknown) {
  if (peers == null) {
    throw new Error("resolveRepoCloneUrlForHost peers are not configured");
  }

  let t = peers.NXr(),
    n = peers.AXr(t);
  return peers.qAs(n == null ? void 0 : t?.repo_map?.[n]?.clone_url, e);
}
