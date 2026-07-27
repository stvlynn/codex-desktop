// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pJ`) / export `ND`.

export type BindGitActionIncludeUnstagedChanges2Peers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindGitActionIncludeUnstagedChanges2Peers | null = null;

/** Wire bindGitActionIncludeUnstagedChanges2 peers once companions land. */
export function setBindGitActionIncludeUnstagedChanges2Peers(next: BindGitActionIncludeUnstagedChanges2Peers): void {
  peers = next;
}

/**
 * Bundle export `ND` / internal `pJ`.
 */
export function bindGitActionIncludeUnstagedChanges2() {
  if (peers == null) {
    throw new Error("bindGitActionIncludeUnstagedChanges2 peers are not configured");
  }

  return peers.Da(peers.Q, e => null);
}
