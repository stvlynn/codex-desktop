// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `FSs`) / export `rb`.

export type ApplyAutoReviewApprovalNudgePeers = {
  BSs: (...args: unknown[]) => unknown;
  Bf: (...args: unknown[]) => unknown;
  E$t: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
};
let peers: ApplyAutoReviewApprovalNudgePeers | null = null;

/** Wire applyAutoReviewApprovalNudge peers once companions land. */
export function setApplyAutoReviewApprovalNudgePeers(
  next: ApplyAutoReviewApprovalNudgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rb` / internal `FSs`.
 */
export async function applyAutoReviewApprovalNudge(
  e: unknown,
  {
    conversationId,
    setAgentMode,
    setPreferredNonFullAccessMode,
    startAgentMode,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("applyAutoReviewApprovalNudge peers are not configured");
  }
  await peers.Bf("update-thread-settings-for-next-turn", {
    conversationId,
    threadSettings: {
      approvalsReviewer: "guardian_subagent",
    },
  });
  setPreferredNonFullAccessMode("guardian-approvals");
  setAgentMode("guardian-approvals");
  peers.Ub(e, peers.E$t, {
    startAgentMode,
    endAgentMode: "guardian-approvals",
  });
  peers.BSs(e, conversationId);
}
