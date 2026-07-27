// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `LQc` / export `xu`.

export type AutomationCreateDraft = {
  kind: "cron" | "heartbeat" | string;
  targetThreadId?: string | null;
  executionEnvironment?: string | null;
  model?: string | null;
  projectId?: string | null;
  pluginTemplateId?: string | null;
  reasoningEffort?: string | null;
  notificationPolicy?: unknown;
};

/** Build create-automation payload from a validated draft. */
export function automationCreatePayloadFromDraft(input: {
  draft: AutomationCreateDraft;
  name: string;
  prompt: string;
  rrule: string;
}): Record<string, unknown> {
  const { draft, name, prompt, rrule } = input;
  if (draft.kind === "heartbeat") {
    if (draft.targetThreadId == null) {
      throw new Error("Heartbeat automation draft is incomplete");
    }
    return {
      kind: "heartbeat",
      name,
      prompt,
      targetThreadId: draft.targetThreadId,
      model: null,
      reasoningEffort: null,
      ...(draft.notificationPolicy == null
        ? {}
        : { notificationPolicy: draft.notificationPolicy }),
      rrule,
    };
  }
  if (draft.executionEnvironment == null || draft.model == null) {
    throw new Error("Cron automation draft is incomplete");
  }
  return {
    kind: "cron",
    name,
    prompt,
    projectId: draft.projectId,
    executionEnvironment: "local",
    localEnvironmentConfigPath: null,
    model: draft.model,
    pluginTemplateId: draft.pluginTemplateId,
    reasoningEffort: draft.reasoningEffort,
    ...(draft.notificationPolicy == null
      ? {}
      : { notificationPolicy: draft.notificationPolicy }),
    rrule,
  };
}
