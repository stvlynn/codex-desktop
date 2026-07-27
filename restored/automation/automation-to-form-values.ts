// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `DQc`) / export `Cu`.

export type AutomationLike = {
  id: string;
  kind: string;
  name: string;
  prompt: string;
  status: string;
  target?: { type?: string; projectId?: string } | null;
  cwds?: string[];
  executionEnvironment?: unknown;
  localEnvironmentConfigPath?: unknown;
  pluginTemplateId?: unknown;
  targetThreadId?: unknown;
  notificationPolicy?: unknown;
  rrule?: unknown;
  [key: string]: unknown;
};

export type AutomationToFormValuesPeers = {
  resolveModelSettings: (args: {
    automation: AutomationLike;
    models: unknown[];
  }) => { model: unknown; reasoningEffort: unknown };
  isThreadTarget: (automation: AutomationLike) => boolean;
  mapExecutionEnvironment: (value: unknown) => unknown;
  projectlessCwdSentinel: unknown;
  parseScheduleConfig: (rrule: unknown) => unknown;
  parseThreadScheduleConfig: (rrule: unknown) => unknown;
};

let peers: AutomationToFormValuesPeers | null = null;

/** Wire automation form mapping peers once companions land. */
export function setAutomationToFormValuesPeers(
  next: AutomationToFormValuesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cu` / internal `DQc`.
 * Map an automation record into editor form values.
 */
export function automationToFormValues(
  automation: AutomationLike,
  models?: unknown[],
): Record<string, unknown> {
  if (peers == null) {
    throw new Error("AutomationToFormValues peers are not configured");
  }
  const resolved = peers.resolveModelSettings({
    automation,
    models: models ?? [],
  });
  const threadTarget = peers.isThreadTarget(automation);
  return {
    id: automation.id,
    kind: automation.kind,
    name: automation.name,
    prompt: automation.prompt,
    status: automation.status,
    projectId: threadTarget
      ? null
      : automation.target?.type === "project"
        ? automation.target.projectId
        : automation.target?.type === "projectless" ||
            automation.cwds?.[0] === peers.projectlessCwdSentinel
          ? null
          : (automation.cwds?.[0] ?? null),
    cwds: threadTarget ? [] : (automation.cwds ?? []),
    executionEnvironment: threadTarget
      ? null
      : peers.mapExecutionEnvironment(automation.executionEnvironment),
    localEnvironmentConfigPath: threadTarget
      ? null
      : automation.localEnvironmentConfigPath,
    pluginTemplateId: threadTarget ? null : automation.pluginTemplateId,
    targetThreadId: threadTarget ? automation.targetThreadId : null,
    model: threadTarget ? null : resolved.model,
    reasoningEffort: threadTarget ? null : resolved.reasoningEffort,
    ...(automation.notificationPolicy == null
      ? {}
      : { notificationPolicy: automation.notificationPolicy }),
    rawRrule: automation.rrule,
    scheduleConfig: threadTarget
      ? peers.parseThreadScheduleConfig(automation.rrule)
      : peers.parseScheduleConfig(automation.rrule),
    scheduleDirty: false,
  };
}
