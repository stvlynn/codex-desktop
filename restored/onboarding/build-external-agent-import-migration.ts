// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Qsu`) / export `ln`.

export type BuildExternalAgentImportMigrationPeers = {
  ccu: (...args: unknown[]) => unknown;
  count: (...args: unknown[]) => unknown;
  dcu: (...args: unknown[]) => unknown;
  items: (...args: unknown[]) => unknown;
  key: (...args: unknown[]) => unknown;
  ocu: (...args: unknown[]) => unknown;
  tcu: (...args: unknown[]) => unknown;
  ucu: (...args: unknown[]) => unknown;
  vcu: (...args: unknown[]) => unknown;
};

let peers: BuildExternalAgentImportMigrationPeers | null = null;

/** Wire buildExternalAgentImportMigration peers once companions land. */
export function setBuildExternalAgentImportMigrationPeers(next: BuildExternalAgentImportMigrationPeers): void {
  peers = next;
}

/**
 * Bundle export `ln` / internal `Qsu`.
 */
export function buildExternalAgentImportMigration(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("buildExternalAgentImportMigration peers are not configured");
  }

  let n = t.filter(e => e.kind === `migrationItem`),
    r = t.find(e => e.kind === `projects`),
    i = t.find(e => e.kind === `chats`),
    a = peers.ucu([...(r?.items ?? []), ...(i?.items ?? [])]),
    o = peers.tcu(i, r, n),
    s = i == null ? void 0 : peers.ccu(e, i),
    c = n.map(t => peers.dcu(e, t));
  return r != null && r.count > 0 && c.push({
    id: r.key,
    title: e.formatMessage({
      id: `electron.onboarding.welcomeV2.externalAgentImport.customize.projects`,
      defaultMessage: `Projects ({count})`,
      description: `Customize dialog item title for external agent project imports`
    }, {
      count: r.count
    }),
    description: e.formatMessage({
      id: `electron.onboarding.welcomeV2.externalAgentImport.customize.projectsDescription`,
      defaultMessage: `Work inside your existing projects`,
      description: `Customize dialog item description for external agent project imports`
    }),
    group: `projects`,
    icon: `projects`,
    ...(a.length === 0 ? {} : {
      tooltip: {
        text: peers.vcu(e, a)
      }
    })
  }), i != null && i.count > 0 && c.push({
    id: i.key,
    title: e.formatMessage({
      id: `electron.onboarding.welcomeV2.externalAgentImport.customize.chats`,
      defaultMessage: `Chat sessions ({count})`,
      description: `Customize dialog item title for external agent chat session imports`
    }, {
      count: i.count
    }),
    description: e.formatMessage({
      id: `electron.onboarding.welcomeV2.externalAgentImport.customize.chatsDescription`,
      defaultMessage: `Recent chats`,
      description: `Customize dialog item description for external agent chat session imports`
    }),
    group: `chats`,
    icon: `chats`,
    tooltip: s
  }), {
    chatChoiceKey: i?.key ?? null,
    ...(a.length === 0 ? {} : {
      projectTooltip: {
        text: peers.vcu(e, a)
      }
    }),
    projectChoiceKey: r?.key ?? null,
    providerBreakdowns: o,
    recentChatTooltip: s,
    toolsAndSetupCount: n.length,
    ...(n.length === 0 ? {} : {
      toolsAndSetupTooltip: peers.ocu(e, n)
    }),
    projectCount: r?.count ?? 0,
    recentChatCount: i?.count ?? 0,
    customizeItems: c
  };
}
