// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `mJ`) / export `MD`.

export type BindBindGitActionIncludeUnstagedChangesPeers = {
  Da: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
};

let peers: BindBindGitActionIncludeUnstagedChangesPeers | null = null;

/** Wire bindBindGitActionIncludeUnstagedChanges peers once companions land. */
export function setBindBindGitActionIncludeUnstagedChangesPeers(
  next: BindBindGitActionIncludeUnstagedChangesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `MD` / internal `mJ`.
 */
export function bindBindGitActionIncludeUnstagedChanges() {
  if (peers == null) {
    throw new Error(
      "bindBindGitActionIncludeUnstagedChanges peers are not configured",
    );
  }

  return peers.Da(peers.Q, (e) => ``);
}
