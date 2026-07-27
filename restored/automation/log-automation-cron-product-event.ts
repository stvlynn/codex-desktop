// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `o3`) / export `Hu`.

export type AutomationCronLike = {
  kind?: string;
  pluginTemplateId?: string | null;
  [key: string]: unknown;
};

export type LogAutomationCronProductEventPeers = {
  eventType: unknown;
  logProductEvent: (
    store: { logProductEvent: (type: unknown, payload: unknown) => void },
    type: unknown,
    payload: Record<string, unknown>,
  ) => void;
  serializeAutomation: (
    automation: AutomationCronLike,
  ) => Record<string, unknown>;
  resolvePluginTemplateMeta: (
    pluginTemplateId: string | null | undefined,
    extra: unknown,
  ) => Promise<Record<string, unknown>>;
};

let peers: LogAutomationCronProductEventPeers | null = null;

/** Wire analytics peers once companions land. */
export function setLogAutomationCronProductEventPeers(
  next: LogAutomationCronProductEventPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Hu` / internal `o3`.
 * Log a cron automation product event with optional plugin template meta.
 */
export async function logAutomationCronProductEvent(
  store: { logProductEvent: (type: unknown, payload: unknown) => void },
  basePayload: Record<string, unknown>,
  automation?: AutomationCronLike | null,
  extra?: unknown,
  cronLike: AutomationCronLike | null = automation?.kind === "cron" &&
  automation != null &&
  "pluginTemplateId" in automation
    ? automation
    : null,
): Promise<void> {
  if (peers == null) {
    throw new Error("LogAutomationCronProductEvent peers are not configured");
  }
  const pluginTemplateId =
    cronLike?.kind === "cron" ? (cronLike.pluginTemplateId ?? null) : null;
  store.logProductEvent(peers.eventType, {
    ...basePayload,
    ...(automation == null ? {} : peers.serializeAutomation(automation)),
    ...(await peers.resolvePluginTemplateMeta(pluginTemplateId, extra)),
  });
}
