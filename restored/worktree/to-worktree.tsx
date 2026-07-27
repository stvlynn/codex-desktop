// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `dJs`) / export `Bg`.

export type ToWorktreePeers = {
  toMessageComponent: (messages: unknown) => unknown;
  toWorktreeMessages: unknown;
};

let peers: ToWorktreePeers | null = null;

/** Wire ToWorktree message peers once companions land. */
export function setToWorktreePeers(next: ToWorktreePeers): void {
  peers = next;
}

/**
 * Bundle export `Bg` / internal `dJs`.
 * Thin message-component wrapper for to-worktree copy.
 */
export function ToWorktree(): unknown {
  if (peers == null) {
    throw new Error("ToWorktree peers are not configured");
  }
  return peers.toMessageComponent(peers.toWorktreeMessages);
}
