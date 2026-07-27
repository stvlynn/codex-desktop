// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `kQc` / export `Pu`. Companion `GQc` = `"local"`.

export const LOCAL_AUTOMATION_EXECUTION_ENVIRONMENT = "local" as const;

type AutomationDraft = {
  id: unknown;
  name: string;
  prompt: string;
  projectId: unknown;
  executionEnvironment: string;
  localEnvironmentConfigPath: unknown;
  pluginTemplateId: unknown;
  targetThreadId: unknown;
  model: unknown;
  reasoningEffort: unknown;
  notificationPolicy: unknown;
  rawRrule: unknown;
  scheduleDirty: boolean;
};

/** True when an automation editor draft is still at empty defaults. */
export function isBlankAutomationDraft(draft: AutomationDraft): boolean {
  return (
    draft.id == null &&
    draft.name === "" &&
    draft.prompt === "" &&
    draft.projectId == null &&
    draft.executionEnvironment === LOCAL_AUTOMATION_EXECUTION_ENVIRONMENT &&
    draft.localEnvironmentConfigPath == null &&
    draft.pluginTemplateId == null &&
    draft.targetThreadId == null &&
    draft.model == null &&
    draft.reasoningEffort == null &&
    draft.notificationPolicy == null &&
    draft.rawRrule == null &&
    draft.scheduleDirty === false
  );
}
