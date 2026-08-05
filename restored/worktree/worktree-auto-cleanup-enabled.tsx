// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `eDe`) / export `hpt`.

export type BindBindWorktreeAutoCleanupEnabledPeers = {
  $Ee: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  _u: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  hu: (...args: unknown[]) => unknown;
  rl: (...args: unknown[]) => unknown;
  xu: (...args: unknown[]) => unknown;
  yu: (...args: unknown[]) => unknown;
};

let peers: BindBindWorktreeAutoCleanupEnabledPeers | null = null;

/** Wire bindBindWorktreeAutoCleanupEnabled peers once companions land. */
export function setBindBindWorktreeAutoCleanupEnabledPeers(
  next: BindBindWorktreeAutoCleanupEnabledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hpt` / internal `eDe`.
 */
export function bindBindWorktreeAutoCleanupEnabled() {
  if (peers == null) {
    throw new Error(
      "bindBindWorktreeAutoCleanupEnabled peers are not configured",
    );
  }

  return peers.e(() => {
    (peers.Sl(),
      peers._u(),
      peers.xu(),
      ($Ee = {
        autoCleanupEnabled: peers.yu({
          agentAccess: `read-write`,
          default: !0,
          description: `Whether Codex automatically cleans up old worktrees`,
          key: `worktree-auto-cleanup-enabled`,
          schema: peers.hu,
        }),
        keepCount: peers.yu({
          agentAccess: `read-write`,
          default: 15,
          description: `How many recent worktrees Codex keeps`,
          key: `worktree-keep-count`,
          schema: peers.rl().int().min(1),
        }),
      }));
  });
}
