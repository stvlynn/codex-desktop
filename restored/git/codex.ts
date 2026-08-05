// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `zEe`) / export `Ept`.

export type BindCodexPeers = {
  Sl: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  wu: (...args: unknown[]) => unknown;
  xEe: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: BindCodexPeers | null = null;

/** Wire bindCodex peers once companions land. */
export function setBindCodexPeers(next: BindCodexPeers): void {
  peers = next;
}

/**
 * Bundle export `Ept` / internal `zEe`.
 */
export function bindCodex() {
  if (peers == null) {
    throw new Error("bindCodex peers are not configured");
  }

  return peers.e(() => {
    (peers.Sl(),
      peers._u(),
      peers.xu(),
      (wu = {
        branchPrefix: peers.yu({
          agentAccess: `read-write`,
          default: `codex/`,
          description: `Prefix for branches Codex creates`,
          key: `git-branch-prefix`,
          schema: peers.xEe,
        }),
        alwaysForcePush: peers.yu({
          agentAccess: `read-write`,
          default: !1,
          description: `Whether Codex always force-pushes branches`,
          key: `git-always-force-push`,
          schema: peers.hu,
        }),
        createPullRequestAsDraft: peers.yu({
          agentAccess: `read-write`,
          default: !0,
          description: `Whether Codex creates pull requests as drafts`,
          key: `git-create-pull-request-as-draft`,
          schema: peers.hu,
        }),
        pullRequestMergeMethod: peers.yu({
          agentAccess: `read-write`,
          default: `merge`,
          description: `Preferred pull request merge method`,
          key: `git-pull-request-merge-method`,
          schema: peers.pl([`merge`, `squash`]),
        }),
        reviewMode: peers.yu({
          agentAccess: `read-write`,
          default: `full`,
          description: `Whether Git Review uses all sources or only recorded Last Turn changes`,
          key: `git-review-mode`,
          schema: peers.pl([`full`, `last-turn-only`]),
        }),
        showSidebarPrIcons: peers.yu({
          agentAccess: `read-write`,
          default: void 0,
          description: `Whether sidebar pull request icons are shown`,
          key: `git-show-sidebar-pr-icons`,
          schema: peers.hu,
        }),
        worktreeRoot: peers.yu({
          agentAccess: `read-write`,
          default: ``,
          description: `Directory where Codex creates managed git worktrees`,
          key: `git-worktree-root`,
          schema: peers.xEe,
        }),
        commitInstructions: peers.yu({
          agentAccess: `read-only`,
          default: ``,
          description: `Custom git commit instructions`,
          key: `git-commit-instructions`,
          schema: peers.xEe,
        }),
        pullRequestInstructions: peers.yu({
          agentAccess: `read-only`,
          default: ``,
          description: `Custom pull request instructions`,
          key: `git-pr-instructions`,
          schema: peers.xEe,
        }),
      }));
  });
}
