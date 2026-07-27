// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FQc` / export `gu`.

export type AutomationModelSettings = {
  isLoading: boolean;
  model: string | null;
  reasoningEffort: string | null;
};

export type AutomationDraftWithModel = {
  kind: string;
  model?: string | null;
  reasoningEffort?: string | null;
};

/** Apply resolved model settings onto a cron draft when unset. */
export function applyModelSettingsToAutomationDraft<
  T extends AutomationDraftWithModel,
>(input: { draft: T; modelSettings: AutomationModelSettings }): T {
  const { draft, modelSettings } = input;
  return draft.kind === "heartbeat" ||
    modelSettings.isLoading ||
    draft.model != null
    ? draft
    : {
        ...draft,
        model: modelSettings.model,
        reasoningEffort: modelSettings.reasoningEffort,
      };
}
