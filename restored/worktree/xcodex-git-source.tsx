// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `axe`) / export `Umt`.

export type BindBindXCodexGitSourcePeers = {
  e: (...args: unknown[]) => unknown;
  ixe: (...args: unknown[]) => unknown;
  rxe: (...args: unknown[]) => unknown;
};

let peers: BindBindXCodexGitSourcePeers | null = null;

/** Wire bindBindXCodexGitSource peers once companions land. */
export function setBindBindXCodexGitSourcePeers(
  next: BindBindXCodexGitSourcePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Umt` / internal `axe`.
 */
export function bindBindXCodexGitSource() {
  if (peers == null) {
    throw new Error("bindBindXCodexGitSource peers are not configured");
  }

  return peers.e(() => {
    ((rxe = `x-codex-git-source`),
      (ixe = [
        `apply-patch`,
        `git-checkout-branch`,
        `git-create-branch`,
        `git-merge-base`,
        `git-origins`,
        `git-push`,
        `prepare-worktree-snapshot`,
        `upload-worktree-snapshot`,
      ]),
      new Set(peers.ixe));
  });
}
