// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tzl` / export `Bo`.

import { isHeartbeatItem } from "../conversation/is-heartbeat-item";

type AutomationLike = {
  kind?: string | null;
  status?: string | null;
  targetThreadId?: string | null;
};

/** Find the heartbeat automation targeting a conversation. */
export function findAutomationForConversation(args: {
  automations: readonly AutomationLike[];
  conversationId: string | null | undefined;
  includePausedAutomations?: boolean;
}): AutomationLike | null {
  const {
    automations,
    conversationId,
    includePausedAutomations = false,
  } = args;
  if (conversationId == null) return null;
  return (
    automations.find(
      (automation) =>
        isHeartbeatItem(automation) &&
        (automation.status === "ACTIVE" ||
          (includePausedAutomations && automation.status === "PAUSED")) &&
        automation.targetThreadId === conversationId,
    ) ?? null
  );
}
