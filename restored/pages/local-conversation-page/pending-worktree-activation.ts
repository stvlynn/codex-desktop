// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Decide + execute pending-worktree activation on the local page.

import { conversationWorkPath } from "../../conversation/conversation-work-path";

export type PendingWorktreeActivationDecision =
  | "navigate-to-work"
  | "activate"
  | "deny";

/**
 * Bundle LocalConversationPage activator branch:
 * - allowed + already a pending-worktree conversation → navigate to /work
 * - allowed otherwise → call activate peer (`Fx`)
 * - otherwise deny
 *
 * Staging: `WI().status === "allowed"` + `P7(route.get)` → `navigate(x8(id))`,
 * else `Fx(route, id, options, { enabled })`.
 */
export function decidePendingWorktreeActivation(args: {
  policyStatus: string;
  isPendingWorktreeConversation: boolean;
}): PendingWorktreeActivationDecision {
  const allowed = args.policyStatus === "allowed";
  if (!allowed) return "deny";
  if (args.isPendingWorktreeConversation) return "navigate-to-work";
  return "activate";
}

export type ExecutePendingWorktreeActivationArgs = {
  decision: PendingWorktreeActivationDecision;
  conversationId: string;
  navigate: (path: string) => void;
  /** Bundle `Fx` — soft callers must catch peer-gated throws. */
  tryActivate?: (conversationId: string, options?: unknown) => boolean;
  options?: unknown;
};

/**
 * Run a pending-worktree activation decision.
 * `navigate-to-work` uses IMPORT_MAP `x8` → `conversationWorkPath`.
 */
export function executePendingWorktreeActivation(
  args: ExecutePendingWorktreeActivationArgs,
): boolean {
  switch (args.decision) {
    case "deny":
      return false;
    case "navigate-to-work":
      args.navigate(conversationWorkPath(args.conversationId));
      return true;
    case "activate":
      return args.tryActivate?.(args.conversationId, args.options) ?? false;
  }
}
