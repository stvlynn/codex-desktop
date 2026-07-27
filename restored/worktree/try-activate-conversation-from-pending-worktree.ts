// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `nms`) / export `Fx`.

export type TryActivateConversationFromPendingWorktreePeers = {
  bV: (...args: unknown[]) => unknown;
  gV: (...args: unknown[]) => unknown;
  jb: (...args: unknown[]) => unknown;
  tms: (...args: unknown[]) => unknown;
};
let peers: TryActivateConversationFromPendingWorktreePeers | null = null;

/** Wire tryActivateConversationFromPendingWorktree peers once companions land. */
export function setTryActivateConversationFromPendingWorktreePeers(
  next: TryActivateConversationFromPendingWorktreePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Fx` / internal `nms`.
 */
export function tryActivateConversationFromPendingWorktree(
  e: unknown,
  t: unknown,
  n: unknown,
  { enabled }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error(
      "tryActivateConversationFromPendingWorktree peers are not configured",
    );
  }
  return !enabled || !peers.gV(e)
    ? false
    : (peers.tms(e, peers.bV(t), n, {
        source: peers.jb.CODEX_QUICK_CHAT_SOURCE_CONVERSATION_REFERENCE,
      }),
      true);
}
