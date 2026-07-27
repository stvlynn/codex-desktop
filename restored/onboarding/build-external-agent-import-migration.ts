// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Qsu`) / export `ln`.

export type BuildExternalAgentImportMigrationPeers = {
  collectProjectLabels: (items: unknown[]) => unknown[];
  buildProviderBreakdowns: (
    chats: unknown,
    projects: unknown,
    migrationItems: unknown[],
  ) => unknown;
  recentChatTooltip: (intl: IntlLike, chats: unknown) => unknown;
  mapMigrationItem: (intl: IntlLike, item: unknown) => CustomizeItem;
  projectTooltipText: (intl: IntlLike, labels: unknown[]) => string;
  toolsTooltip: (intl: IntlLike, items: unknown[]) => unknown;
};

let peers: BuildExternalAgentImportMigrationPeers | null = null;

/** Wire buildExternalAgentImportMigration peers once companions land. */
export function setBuildExternalAgentImportMigrationPeers(
  next: BuildExternalAgentImportMigrationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ln` / internal `Qsu`.
 * Build customize-dialog migration summary from detected import items.
 */
export type IntlLike = {
  formatMessage: (
    desc: { id: string; defaultMessage: string; description: string },
    values?: Record<string, unknown>,
  ) => string;
};

export type DetectedItem = {
  kind: string;
  key?: string;
  count?: number;
  items?: unknown[];
};

export type CustomizeItem = {
  id: string;
  title: string;
  description: string;
  group: string;
  icon: string;
  tooltip?: unknown;
};

export function buildExternalAgentImportMigration(
  intl: IntlLike,
  detected: DetectedItem[],
): Record<string, unknown> {
  if (peers == null) {
    throw new Error(
      "BuildExternalAgentImportMigration peers are not configured",
    );
  }
  const migrationItems = detected.filter(
    (item) => item.kind === "migrationItem",
  );
  const projects = detected.find((item) => item.kind === "projects");
  const chats = detected.find((item) => item.kind === "chats");
  const projectLabels = peers.collectProjectLabels([
    ...(projects?.items ?? []),
    ...(chats?.items ?? []),
  ]);
  const providerBreakdowns = peers.buildProviderBreakdowns(
    chats,
    projects,
    migrationItems,
  );
  const recentChatTooltip =
    chats == null ? undefined : peers.recentChatTooltip(intl, chats);
  const customizeItems = migrationItems.map((item) =>
    peers!.mapMigrationItem(intl, item),
  );
  if (projects != null && (projects.count ?? 0) > 0) {
    customizeItems.push({
      id: projects.key as string,
      title: intl.formatMessage(
        {
          id: "electron.onboarding.welcomeV2.externalAgentImport.customize.projects",
          defaultMessage: "Projects ({count})",
          description:
            "Customize dialog item title for external agent project imports",
        },
        { count: projects.count },
      ),
      description: intl.formatMessage({
        id: "electron.onboarding.welcomeV2.externalAgentImport.customize.projectsDescription",
        defaultMessage: "Work inside your existing projects",
        description:
          "Customize dialog item description for external agent project imports",
      }),
      group: "projects",
      icon: "projects",
      ...(projectLabels.length === 0
        ? {}
        : { tooltip: { text: peers.projectTooltipText(intl, projectLabels) } }),
    });
  }
  if (chats != null && (chats.count ?? 0) > 0) {
    customizeItems.push({
      id: chats.key as string,
      title: intl.formatMessage(
        {
          id: "electron.onboarding.welcomeV2.externalAgentImport.customize.chats",
          defaultMessage: "Chat sessions ({count})",
          description:
            "Customize dialog item title for external agent chat session imports",
        },
        { count: chats.count },
      ),
      description: intl.formatMessage({
        id: "electron.onboarding.welcomeV2.externalAgentImport.customize.chatsDescription",
        defaultMessage: "Recent chats",
        description:
          "Customize dialog item description for external agent chat session imports",
      }),
      group: "chats",
      icon: "chats",
      tooltip: recentChatTooltip,
    });
  }
  return {
    chatChoiceKey: chats?.key ?? null,
    ...(projectLabels.length === 0
      ? {}
      : {
          projectTooltip: {
            text: peers.projectTooltipText(intl, projectLabels),
          },
        }),
    projectChoiceKey: projects?.key ?? null,
    providerBreakdowns,
    recentChatTooltip,
    toolsAndSetupCount: migrationItems.length,
    ...(migrationItems.length === 0
      ? {}
      : { toolsAndSetupTooltip: peers.toolsTooltip(intl, migrationItems) }),
    projectCount: projects?.count ?? 0,
    recentChatCount: chats?.count ?? 0,
    customizeItems,
  };
}
