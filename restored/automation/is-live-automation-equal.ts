// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VQc` / export `ku`.

import { automationsShallowEqual } from "./automations-shallow-equal";
import { automationWithStatus } from "./automation-with-status";

type AutomationLike = {
  id: unknown;
  kind: string;
  name: string;
  prompt: string;
  status: unknown;
  rrule: unknown;
  notificationPolicy: unknown;
  targetThreadId?: unknown;
  model?: unknown;
  reasoningEffort?: unknown;
  executionEnvironment?: unknown;
  localEnvironmentConfigPath?: unknown;
  projectId?: unknown;
};

/** False when live row is DELETED; else shallow-equal against draft at live status. */
export function isLiveAutomationEqual(
  draft: AutomationLike,
  live: AutomationLike,
): boolean {
  if (live.status === "DELETED") return false;
  return automationsShallowEqual(
    automationWithStatus(draft, live.status as string),
    live,
  );
}
