// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `$su`) / export `dn`.

export type SummarizeOnboardingSelectionCountsPeers = {
  defaultProviderIds: (migration: MigrationSummary) => string[];
  selectedProviders: (
    migration: MigrationSummary,
    selection: Record<string, boolean>,
    projectsSelected: boolean,
    chatsSelected: boolean,
  ) => string[];
  providerBreakdown: (
    providerId: string,
    migration: MigrationSummary,
    selection: Record<string, boolean>,
    projectsSelected: boolean,
    chatsSelected: boolean,
  ) => {
    chatsCount: number;
    chatsSelected: boolean;
    projectsCount: number;
    projectsSelected: boolean;
    toolsAndSetupSelectedCount: number;
    toolsAndSetupTotalCount: number;
  };
};

let peers: SummarizeOnboardingSelectionCountsPeers | null = null;

/** Wire summarizeOnboardingSelectionCounts peers once companions land. */
export function setSummarizeOnboardingSelectionCountsPeers(
  next: SummarizeOnboardingSelectionCountsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dn` / internal `$su`.
 * Summarize customize-dialog selection counts for analytics.
 */
export type MigrationSummary = {
  customizeItems: Array<{ id: string }>;
  chatChoiceKey?: string | null;
  projectChoiceKey?: string | null;
  recentChatCount: number;
  projectCount: number;
};

const KIND_TO_COUNT: Record<string, string> = {
  AGENTS_MD: "instructionsSelectedCount",
  COMMANDS: "commandsSelectedCount",
  CONFIG: "settingsSelectedCount",
  HOOKS: "hooksSelectedCount",
  MCP_SERVER_CONFIG: "mcpServersSelectedCount",
  PLUGINS: "pluginsSelectedCount",
  SKILLS: "skillsSelectedCount",
  SUBAGENTS: "agentsSelectedCount",
};

export function summarizeOnboardingSelectionCounts(
  migration: MigrationSummary,
  selection: Record<string, boolean>,
  providerIds: string[] = peers == null
    ? []
    : peers.defaultProviderIds(migration),
): Record<string, unknown> {
  if (peers == null) {
    throw new Error(
      "SummarizeOnboardingSelectionCounts peers are not configured",
    );
  }
  const counts: Record<string, number> = {
    agentsSelectedCount: 0,
    commandsSelectedCount: 0,
    hooksSelectedCount: 0,
    instructionsSelectedCount: 0,
    mcpServersSelectedCount: 0,
    pluginsSelectedCount: 0,
    settingsSelectedCount: 0,
    skillsSelectedCount: 0,
  };
  let totalItemsCount = 0;
  let selectedItemsCount = 0;
  for (const item of migration.customizeItems) {
    const kind = item.id.split(":")[0] ?? "";
    const key = KIND_TO_COUNT[kind];
    totalItemsCount += 1;
    if (selection[item.id] ?? false) {
      selectedItemsCount += 1;
      if (key != null) counts[key] = (counts[key] ?? 0) + 1;
    }
  }
  const chatsSelected =
    migration.chatChoiceKey == null
      ? false
      : (selection[migration.chatChoiceKey] ?? false);
  const projectsSelected =
    migration.projectChoiceKey == null
      ? false
      : (selection[migration.projectChoiceKey] ?? false);
  const selectedProviderIds = peers.selectedProviders(
    migration,
    selection,
    projectsSelected,
    chatsSelected,
  );
  const claudeCode = peers.providerBreakdown(
    "claude-code",
    migration,
    selection,
    projectsSelected,
    chatsSelected,
  );
  const claudeCowork = peers.providerBreakdown(
    "claude-cowork",
    migration,
    selection,
    projectsSelected,
    chatsSelected,
  );
  return {
    ...counts,
    chatsCount: migration.recentChatCount,
    chatsSelected,
    claudeCodeChatsCount: claudeCode.chatsCount,
    claudeCodeChatsSelected: claudeCode.chatsSelected,
    claudeCodeProjectsCount: claudeCode.projectsCount,
    claudeCodeProjectsSelected: claudeCode.projectsSelected,
    claudeCodeToolsAndSetupSelectedCount: claudeCode.toolsAndSetupSelectedCount,
    claudeCodeToolsAndSetupTotalCount: claudeCode.toolsAndSetupTotalCount,
    claudeCoworkChatsCount: claudeCowork.chatsCount,
    claudeCoworkChatsSelected: claudeCowork.chatsSelected,
    claudeCoworkProjectsCount: claudeCowork.projectsCount,
    claudeCoworkProjectsSelected: claudeCowork.projectsSelected,
    claudeCoworkToolsAndSetupSelectedCount:
      claudeCowork.toolsAndSetupSelectedCount,
    claudeCoworkToolsAndSetupTotalCount: claudeCowork.toolsAndSetupTotalCount,
    detectedProviderCount: providerIds.length,
    detectedProviderIds: providerIds.join(","),
    projectsCount: migration.projectCount,
    projectsSelected,
    selectedProviderCount: selectedProviderIds.length,
    selectedProviderIds: selectedProviderIds.join(","),
    selectedItemsCount,
    totalItemsCount,
  };
}
