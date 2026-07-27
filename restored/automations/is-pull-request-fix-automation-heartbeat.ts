// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Detect PR-fix automation heartbeat prompts (`YAr` / export `e$`).

import { isHeartbeatItem } from "../conversation/is-heartbeat-item";

export type PromptHeartbeatLike = {
  kind?: string | null;
  prompt?: string | null;
};

/**
 * Bundle `YAr` / export `e$`.
 * Heartbeat items whose prompt includes the PR-fix automation header.
 */
export function isPullRequestFixAutomationHeartbeat(item: PromptHeartbeatLike | null | undefined): boolean {
  return (
    isHeartbeatItem(item) &&
    (item?.prompt ?? "").split("\n").includes("## Pull request fix automation:")
  );
}
