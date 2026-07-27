// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `IQc` / export `Du`.

import type { AutomationCreateDraft } from "./automation-create-payload-from-draft";

export type AutomationUpdateDraft = AutomationCreateDraft & {
  id?: string | null;
};

/** Build update-automation payload from a validated draft. */
export function automationUpdatePayloadFromDraft(input: {
  draft: AutomationUpdateDraft;
  name: string;
  prompt: string;
  status: string;
  rrule: string;
}): Record<string, unknown> {
  const { draft, name, prompt, status, rrule } = input;
  if (draft.id == null) throw new Error("Automation draft is incomplete");
  if (draft.kind === "heartbeat") {
    if (draft.targetThreadId == null) {
      throw new Error("Heartbeat automation draft is incomplete");
    }
    return {
      id: draft.id,
      kind: "heartbeat",
      name,
      prompt,
      status,
      targetThreadId: draft.targetThreadId,
      model: null,
      reasoningEffort: null,
      notificationPolicy: draft.notificationPolicy ?? null,
      rrule,
    };
  }
  if (draft.executionEnvironment == null || draft.model == null) {
    throw new Error("Cron automation draft is incomplete");
  }
  return {
    id: draft.id,
    kind: "cron",
    name,
    prompt,
    status,
    projectId: draft.projectId,
    executionEnvironment: draft.executionEnvironment,
    localEnvironmentConfigPath: draft.localEnvironmentConfigPath ?? null,
    model: draft.model,
    reasoningEffort: draft.reasoningEffort,
    notificationPolicy: draft.notificationPolicy ?? null,
    rrule,
  };
}
