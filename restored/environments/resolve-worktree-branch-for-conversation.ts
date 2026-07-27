// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `GJs` / export `Eg`.

/** Pick the branch label relevant to a conversation in a worktree handoff. */
export function resolveWorktreeBranchForConversation(
  handoff:
    | {
        sourceConversationId?: string | null;
        targetConversationId?: string | null;
        sourceBranch?: string | null;
        worktreeBranch?: string | null;
        localBranch?: string | null;
        direction?: string | null;
      }
    | null
    | undefined,
  conversationId: string | null | undefined,
): string | null {
  if (handoff == null || conversationId == null) return null;
  if (handoff.sourceConversationId === conversationId) {
    return handoff.sourceBranch ?? null;
  }
  if (handoff.targetConversationId === conversationId) {
    return handoff.direction === "to-worktree"
      ? (handoff.worktreeBranch ?? handoff.sourceBranch ?? null)
      : (handoff.localBranch ?? handoff.sourceBranch ?? null);
  }
  return null;
}
