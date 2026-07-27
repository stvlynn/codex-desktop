// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `FSs`) / export `rb`.

export type ApplyAutoReviewApprovalNudgeArgs = {
  conversationId: string;
  setAgentMode: (mode: string) => void;
  setPreferredNonFullAccessMode: (mode: string) => void;
  startAgentMode: unknown;
};

export type ApplyAutoReviewApprovalNudgePeers = {
  updateThreadSettings: (args: {
    conversationId: string;
    threadSettings: { approvalsReviewer: string };
  }) => Promise<unknown>;
  logModeChange: (
    store: unknown,
    event: unknown,
    payload: { startAgentMode: unknown; endAgentMode: string },
  ) => void;
  modeChangeEvent: unknown;
  persistNudge: (store: unknown, conversationId: string) => void;
};

let peers: ApplyAutoReviewApprovalNudgePeers | null = null;

/** Wire apply-nudge peers once companions land. */
export function setApplyAutoReviewApprovalNudgePeers(
  next: ApplyAutoReviewApprovalNudgePeers,
): void {
  peers = next;
}

/**
 * Bundle export `rb` / internal `FSs`.
 * Switch the thread to guardian-approvals and persist the nudge.
 */
export async function applyAutoReviewApprovalNudge(
  store: unknown,
  args: ApplyAutoReviewApprovalNudgeArgs,
): Promise<void> {
  if (peers == null) {
    throw new Error("ApplyAutoReviewApprovalNudge peers are not configured");
  }
  const {
    conversationId,
    setAgentMode,
    setPreferredNonFullAccessMode,
    startAgentMode,
  } = args;
  await peers.updateThreadSettings({
    conversationId,
    threadSettings: { approvalsReviewer: "guardian_subagent" },
  });
  setPreferredNonFullAccessMode("guardian-approvals");
  setAgentMode("guardian-approvals");
  peers.logModeChange(store, peers.modeChangeEvent, {
    startAgentMode,
    endAgentMode: "guardian-approvals",
  });
  peers.persistNudge(store, conversationId);
}
