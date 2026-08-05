// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DQc`) / export `Cu`.

export type AutomationToFormValuesPeers = {
  Dme: (...args: unknown[]) => unknown;
  Tl: (...args: unknown[]) => unknown;
  d3: (...args: unknown[]) => unknown;
  jme: (...args: unknown[]) => unknown;
  mZc: (...args: unknown[]) => unknown;
  pZc: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};

let peers: AutomationToFormValuesPeers | null = null;

/** Wire automationToFormValues peers once companions land. */
export function setAutomationToFormValuesPeers(
  next: AutomationToFormValuesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cu` / internal `DQc`.
 */
export function automationToFormValues(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("automationToFormValues peers are not configured");
  }

  let n = peers.jme({
    automation: e,
    models: t ?? [],
  });
  return {
    id: e.id,
    kind: e.kind,
    name: e.name,
    prompt: e.prompt,
    status: e.status,
    projectId: peers.Tl(e)
      ? null
      : e.target?.type === `project`
        ? e.target.projectId
        : e.target?.type === `projectless` || e.cwds[0] === peers.d3
          ? null
          : (e.cwds[0] ?? null),
    cwds: peers.Tl(e) ? [] : e.cwds,
    executionEnvironment: peers.Tl(e)
      ? null
      : peers.Dme(e.executionEnvironment),
    localEnvironmentConfigPath: peers.Tl(e)
      ? null
      : e.localEnvironmentConfigPath,
    pluginTemplateId: peers.Tl(e) ? null : e.pluginTemplateId,
    targetThreadId: peers.Tl(e) ? e.targetThreadId : null,
    model: peers.Tl(e) ? null : n.model,
    reasoningEffort: peers.Tl(e) ? null : n.reasoningEffort,
    ...(e.notificationPolicy == null
      ? {}
      : {
          notificationPolicy: e.notificationPolicy,
        }),
    rawRrule: e.rrule,
    scheduleConfig: peers.Tl(e) ? peers.mZc(e.rrule) : peers.pZc(e.rrule),
    scheduleDirty: !1,
  };
}
