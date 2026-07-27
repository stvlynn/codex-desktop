// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `f3` / export `hu`; companions `d3` / `GQc`.

export type AutomationDraft = {
  id: null;
  kind: "cron" | "heartbeat";
  name: string;
  prompt: string;
  status: "ACTIVE";
  projectId: null;
  cwds: string[];
  executionEnvironment: "local";
  localEnvironmentConfigPath: null;
  pluginTemplateId: null;
  targetThreadId: null;
  model: null;
  reasoningEffort: null;
  notificationPolicy?: null;
  rrule?: null;
  scheduleConfig?: unknown;
};

/** Default cron automation draft shell. */
export const DEFAULT_AUTOMATION_DRAFT: AutomationDraft = {
  id: null,
  kind: "cron",
  name: "",
  prompt: "",
  status: "ACTIVE",
  projectId: null,
  cwds: ["~"],
  executionEnvironment: "local",
  localEnvironmentConfigPath: null,
  pluginTemplateId: null,
  targetThreadId: null,
  model: null,
  reasoningEffort: null,
};

/** Heartbeat variant of the default draft when `asHeartbeat` is true. Bundle `xQc` / `ju`. */
export function automationDraftWithHeartbeatKind(
  asHeartbeat: boolean,
): AutomationDraft {
  return asHeartbeat
    ? { ...DEFAULT_AUTOMATION_DRAFT, kind: "heartbeat" }
    : DEFAULT_AUTOMATION_DRAFT;
}
