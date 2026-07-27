// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `OQc`) / export `wu`.

export type BuildAutomationDraftFromSeedPeers = {
  Dme: (...args: unknown[]) => unknown;
  Tl: (...args: unknown[]) => unknown;
  d3: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  f3: (...args: unknown[]) => unknown;
  id: (...args: unknown[]) => unknown;
  jme: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  mZc: (...args: unknown[]) => unknown;
  model: (...args: unknown[]) => unknown;
  name: (...args: unknown[]) => unknown;
  notificationPolicy: (...args: unknown[]) => unknown;
  pZc: (...args: unknown[]) => unknown;
  prompt: (...args: unknown[]) => unknown;
  reasoningEffort: (...args: unknown[]) => unknown;
  rrule: (...args: unknown[]) => unknown;
  status: (...args: unknown[]) => unknown;
  type: (...args: unknown[]) => unknown;
};
let peers: BuildAutomationDraftFromSeedPeers | null = null;

/** Wire BuildAutomationDraftFromSeed peers once companions land. */
export function setBuildAutomationDraftFromSeedPeers(
  next: BuildAutomationDraftFromSeedPeers,
): void {
  peers = next;
}

/**
 * Bundle export `wu` / internal `OQc`.
 */
export function BuildAutomationDraftFromSeed({
  seed,
  targetAutomation,
  models,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("BuildAutomationDraftFromSeed peers are not configured");
  }
  let r = seed.mode === "view" ? targetAutomation : null,
    i = r?.rrule ?? seed.rrule,
    a =
      targetAutomation == null
        ? null
        : peers.jme({
            automation: targetAutomation,
            models: models ?? [],
          }),
    o =
      seed.id != null && targetAutomation == null
        ? null
        : targetAutomation != null && !peers.Tl(targetAutomation)
          ? peers.Dme(targetAutomation.executionEnvironment)
          : peers.f3.executionEnvironment,
    s =
      targetAutomation?.kind ??
      seed.kind ??
      (seed.id != null && targetAutomation == null ? peers.f3.kind : "cron"),
    c =
      s === "heartbeat"
        ? (seed.targetThreadId ??
          (targetAutomation != null && peers.Tl(targetAutomation)
            ? targetAutomation.targetThreadId
            : null))
        : null,
    l =
      seed.notificationPolicy === undefined
        ? (r?.notificationPolicy ?? targetAutomation?.notificationPolicy)
        : seed.notificationPolicy;
  return {
    id: seed.id ?? targetAutomation?.id ?? null,
    kind: s,
    name: r?.name ?? seed.name,
    prompt: r?.prompt ?? seed.prompt,
    status: r?.status ?? seed.status ?? targetAutomation?.status ?? "ACTIVE",
    projectId:
      s === "heartbeat"
        ? null
        : targetAutomation != null && !peers.Tl(targetAutomation)
          ? targetAutomation.target?.type === "project"
            ? targetAutomation.target.projectId
            : targetAutomation.target?.type === "projectless" ||
                targetAutomation.cwds[0] === peers.d3
              ? null
              : (targetAutomation.cwds[0] ?? null)
          : seed.projectId === undefined
            ? seed.cwds[0] === "~"
              ? null
              : (seed.cwds[0] ?? null)
            : seed.projectId,
    cwds:
      targetAutomation != null && !peers.Tl(targetAutomation)
        ? targetAutomation.cwds
        : seed.cwds.map(peers.eu),
    executionEnvironment:
      s === "heartbeat" ? null : (seed.executionEnvironment ?? o),
    localEnvironmentConfigPath:
      s === "heartbeat"
        ? null
        : (seed.localEnvironmentConfigPath ??
          (targetAutomation != null && !peers.Tl(targetAutomation)
            ? targetAutomation.localEnvironmentConfigPath
            : peers.f3.localEnvironmentConfigPath)),
    pluginTemplateId:
      targetAutomation != null && !peers.Tl(targetAutomation)
        ? targetAutomation.pluginTemplateId
        : null,
    targetThreadId: c,
    model:
      s === "heartbeat" ? null : (seed.model ?? a?.model ?? peers.f3.model),
    reasoningEffort:
      s === "heartbeat"
        ? null
        : (seed.reasoningEffort ??
          a?.reasoningEffort ??
          peers.f3.reasoningEffort),
    ...(l == null
      ? {}
      : {
          notificationPolicy: l,
        }),
    rawRrule: i,
    scheduleConfig: s === "heartbeat" ? peers.mZc(i) : peers.pZc(i),
    scheduleDirty: false,
  };
}
