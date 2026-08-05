// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wzl`) / export `Fo`.

export type BindBranchPeers = {
  Au: (...args: unknown[]) => unknown;
  Czl: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jf: (...args: unknown[]) => unknown;
};

let peers: BindBranchPeers | null = null;

/** Wire bindBranch peers once companions land. */
export function setBindBranchPeers(next: BindBranchPeers): void {
  peers = next;
}

/**
 * Bundle export `Fo` / internal `wzl`.
 */
export function bindBranch() {
  if (peers == null) {
    throw new Error("bindBranch peers are not configured");
  }

  return peers.e(() => {
    (peers.Au(), peers.jf(), (Czl = `.codex/worktrees/`));
  });
}
