// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BQc` / export `vu`.

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

/** Shallow equality for automation drafts / rows. */
export function automationsShallowEqual(a: AutomationLike | null | undefined, b: AutomationLike | null | undefined): boolean {
  return a == null || b == null
    ? a === b
    : a.id === b.id &&
        a.kind === b.kind &&
        a.name === b.name &&
        a.prompt === b.prompt &&
        a.status === b.status &&
        a.rrule === b.rrule &&
        a.notificationPolicy === b.notificationPolicy &&
        (a.kind === "heartbeat"
          ? b.kind === "heartbeat" && a.targetThreadId === b.targetThreadId
          : a.model === b.model &&
            a.reasoningEffort === b.reasoningEffort &&
            b.kind === "cron" &&
            a.executionEnvironment === b.executionEnvironment &&
            a.localEnvironmentConfigPath === b.localEnvironmentConfigPath &&
            a.projectId === b.projectId);
}
