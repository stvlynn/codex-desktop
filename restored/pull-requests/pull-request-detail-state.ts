// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Dqo` / export `iD`.

export type PullRequestDetailState =
  | "merged"
  | "draft"
  | "failing"
  | "successful"
  | "ready"
  | "in_progress";

/** Derive detail-view PR state from merge/CI/conflict flags. */
export function pullRequestDetailState(input: {
  canMerge: boolean;
  ciStatus?: string | null;
  hasMergeConflicts?: boolean;
  status?: string | null;
}): PullRequestDetailState {
  const { canMerge, ciStatus, hasMergeConflicts = false, status } = input;
  if (status === "merged") return "merged";
  if (status === "draft") return "draft";
  if (hasMergeConflicts || ciStatus === "failing") return "failing";
  if (ciStatus === "passing" && !canMerge) return "successful";
  return canMerge ? "ready" : "in_progress";
}
