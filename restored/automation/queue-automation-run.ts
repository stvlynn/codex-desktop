// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uJs` / export `Lg`.

import { pendingStepsFromIds } from "./pending-steps-from-ids";

/** Reset an automation run into the queued state. */
export function queueAutomationRun<T extends { stepIds: string[] }>(
  run: T,
): T & {
  status: "queued";
  targetConversationId: null;
  steps: Array<{ id: string; status: "pending" }>;
  errorMessage: null;
  warningMessage: null;
  execOutput: null;
  hasUnseenTerminalState: false;
} {
  return {
    ...run,
    status: "queued",
    targetConversationId: null,
    steps: pendingStepsFromIds(run.stepIds),
    errorMessage: null,
    warningMessage: null,
    execOutput: null,
    hasUnseenTerminalState: false,
  };
}

// --- split/export lane aliases ---
export { queueAutomationRun as QueueAutomationRun };
