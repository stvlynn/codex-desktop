// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zQc` / export `Eu`.

import { isHeartbeatItem } from "../conversation/is-heartbeat-item";

type AutomationStatus = string;

type AutomationLike = {
  id: unknown;
  kind?: string | null;
  name: string;
  prompt: string;
  targetThreadId?: unknown;
  notificationPolicy?: unknown;
  rrule?: unknown;
  model?: unknown;
  reasoningEffort?: unknown;
  executionEnvironment?: unknown;
  localEnvironmentConfigPath?: unknown;
  projectId?: unknown;
  status?: unknown;
};

/** Clone an automation row with a replacement status. */
export function automationWithStatus(
  automation: AutomationLike,
  status: AutomationStatus,
): AutomationLike {
  if (isHeartbeatItem(automation)) {
    return {
      id: automation.id,
      kind: "heartbeat",
      name: automation.name,
      prompt: automation.prompt,
      status,
      targetThreadId: automation.targetThreadId,
      model: null,
      reasoningEffort: null,
      notificationPolicy: automation.notificationPolicy ?? null,
      rrule: automation.rrule,
    };
  }
  return {
    id: automation.id,
    kind: "cron",
    name: automation.name,
    prompt: automation.prompt,
    status,
    projectId: automation.projectId ?? null,
    executionEnvironment: automation.executionEnvironment,
    localEnvironmentConfigPath: automation.localEnvironmentConfigPath ?? null,
    model: automation.model ?? null,
    reasoningEffort: automation.reasoningEffort ?? null,
    notificationPolicy: automation.notificationPolicy ?? null,
    rrule: automation.rrule,
  };
}
