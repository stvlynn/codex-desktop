// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `KAs`) / export `Sv`.

export type ResolveRepoCloneUrlForHostPeers = {
  getHostRepoState: () =>
    | { repo_map?: Record<string, { clone_url?: unknown }> }
    | null
    | undefined;
  resolveActiveRepoKey: (state: unknown) => string | null | undefined;
  normalizeCloneUrl: (cloneUrl: unknown, host: unknown) => unknown;
};

let peers: ResolveRepoCloneUrlForHostPeers | null = null;

/** Wire repo clone URL peers once companions land. */
export function setResolveRepoCloneUrlForHostPeers(
  next: ResolveRepoCloneUrlForHostPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Sv` / internal `KAs`.
 * Resolve the active repo clone URL for a host.
 */
export function resolveRepoCloneUrlForHost(host: unknown): unknown {
  if (peers == null) {
    throw new Error("ResolveRepoCloneUrlForHost peers are not configured");
  }
  const state = peers.getHostRepoState();
  const key = peers.resolveActiveRepoKey(state);
  const cloneUrl = key == null ? undefined : state?.repo_map?.[key]?.clone_url;
  return peers.normalizeCloneUrl(cloneUrl, host);
}
