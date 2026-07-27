// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Dsc`) / export `tp`.

export type BuildMailPlanTaskItemsPeers = {
  resolveMailPlanContext: (mailProvider: unknown, plan: unknown) => unknown;
  claudeImportDefaults: { message: unknown; [key: string]: unknown };
  enableNotificationsDefaults: { message: unknown; [key: string]: unknown };
  resolveReviewLatestPlansId: (representativeRole: unknown) => string;
  localizeDefinition: (
    definition: unknown,
    field: "label" | "prompt",
    locale: unknown,
  ) => unknown;
  buildTaskItem: (input: {
    id: string;
    label: unknown;
    pluginSlots: unknown;
    prependPluginMentions: boolean;
    prompt: unknown;
    mailPlanContext: unknown;
    snapshot: unknown;
  }) => unknown;
};

let peers: BuildMailPlanTaskItemsPeers | null = null;

/** Wire mail-plan task item peers once companions land. */
export function setBuildMailPlanTaskItemsPeers(
  next: BuildMailPlanTaskItemsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `tp` / internal `Dsc`.
 * Build sidebar task items for mail-plan onboarding / checklist rows.
 */
export function buildMailPlanTaskItems(input: {
  items: Array<{
    id: string;
    snapshot?: {
      type?: string;
      label?: unknown;
      pluginSlots?: unknown;
      prependPluginMentions?: boolean;
      prompt?: unknown;
    };
  }>;
  locale: unknown;
  mailProvider: unknown;
  plan?: unknown;
  representativeRole?: unknown;
  taskDefinitions: Record<string, unknown>;
}): unknown[] {
  if (peers == null) {
    throw new Error("BuildMailPlanTaskItems peers are not configured");
  }
  const out: unknown[] = [];
  const mailPlanContext = peers.resolveMailPlanContext(
    input.mailProvider,
    input.plan ?? null,
  );
  for (const item of input.items) {
    const { id } = item;
    if (id === "claude_import") {
      out.push({
        ...peers.claudeImportDefaults,
        message:
          item.snapshot?.type === "sidebar_claude_import"
            ? item.snapshot.label
            : peers.claudeImportDefaults.message,
      });
      continue;
    }
    if (id === "enable_notifications") {
      out.push({
        ...peers.enableNotificationsDefaults,
        message:
          item.snapshot?.type === "sidebar_notification"
            ? item.snapshot.label
            : peers.enableNotificationsDefaults.message,
      });
      continue;
    }
    const snapshot =
      id === "review_latest_plans" || item.snapshot?.type !== "sidebar"
        ? null
        : item.snapshot;
    let label: unknown;
    let pluginSlots: unknown;
    let prependPluginMentions = false;
    let prompt: unknown;
    if (snapshot != null) {
      label = snapshot.label;
      pluginSlots = snapshot.pluginSlots;
      prependPluginMentions = snapshot.prependPluginMentions === true;
      prompt = snapshot.prompt;
    } else {
      const definitionKey =
        id === "review_latest_plans"
          ? peers.resolveReviewLatestPlansId(input.representativeRole ?? null)
          : id;
      const definition = input.taskDefinitions[definitionKey];
      if (definition == null) continue;
      label = peers.localizeDefinition(definition, "label", input.locale);
      pluginSlots = (definition as { pluginSlots?: unknown }).pluginSlots;
      prependPluginMentions =
        (definition as { origin?: string; prependPluginMentions?: boolean })
          .origin === "checked_in" &&
        (definition as { prependPluginMentions?: boolean })
          .prependPluginMentions === true;
      prompt = peers.localizeDefinition(definition, "prompt", input.locale);
    }
    out.push(
      peers.buildTaskItem({
        id,
        label,
        pluginSlots,
        prependPluginMentions,
        prompt,
        mailPlanContext,
        snapshot: item.snapshot,
      }),
    );
  }
  return out;
}
