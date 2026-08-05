// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$su`) / export `dn`.

export type SummarizeOnboardingSelectionCountsPeers = {
  acu: (...args: unknown[]) => unknown;
  ncu: (...args: unknown[]) => unknown;
  rcu: (...args: unknown[]) => unknown;
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
 */
export function summarizeOnboardingSelectionCounts(
  e: unknown,
  t: unknown,
  n: unknown = peers.acu(e),
) {
  if (peers == null) {
    throw new Error(
      "summarizeOnboardingSelectionCounts peers are not configured",
    );
  }

  let r = {
      agentsSelectedCount: 0,
      commandsSelectedCount: 0,
      hooksSelectedCount: 0,
      instructionsSelectedCount: 0,
      mcpServersSelectedCount: 0,
      pluginsSelectedCount: 0,
      settingsSelectedCount: 0,
      skillsSelectedCount: 0,
    },
    i = {
      AGENTS_MD: `instructionsSelectedCount`,
      COMMANDS: `commandsSelectedCount`,
      CONFIG: `settingsSelectedCount`,
      HOOKS: `hooksSelectedCount`,
      MCP_SERVER_CONFIG: `mcpServersSelectedCount`,
      PLUGINS: `pluginsSelectedCount`,
      SKILLS: `skillsSelectedCount`,
      SUBAGENTS: `agentsSelectedCount`,
    },
    a = 0,
    o = 0;
  e.customizeItems.forEach((e) => {
    let n = e.id.split(`:`)[0],
      s = i[n];
    ((a += 1), (t[e.id] ?? !1) && ((o += 1), s != null && (r[s] += 1)));
  });
  let s = e.chatChoiceKey == null ? !1 : (t[e.chatChoiceKey] ?? !1),
    c = e.projectChoiceKey == null ? !1 : (t[e.projectChoiceKey] ?? !1),
    l = peers.ncu(e, t, c, s),
    u = peers.rcu(`claude-code`, e, t, c, s),
    d = peers.rcu(`claude-cowork`, e, t, c, s);
  return {
    ...r,
    chatsCount: e.recentChatCount,
    chatsSelected: s,
    claudeCodeChatsCount: u.chatsCount,
    claudeCodeChatsSelected: u.chatsSelected,
    claudeCodeProjectsCount: u.projectsCount,
    claudeCodeProjectsSelected: u.projectsSelected,
    claudeCodeToolsAndSetupSelectedCount: u.toolsAndSetupSelectedCount,
    claudeCodeToolsAndSetupTotalCount: u.toolsAndSetupTotalCount,
    claudeCoworkChatsCount: d.chatsCount,
    claudeCoworkChatsSelected: d.chatsSelected,
    claudeCoworkProjectsCount: d.projectsCount,
    claudeCoworkProjectsSelected: d.projectsSelected,
    claudeCoworkToolsAndSetupSelectedCount: d.toolsAndSetupSelectedCount,
    claudeCoworkToolsAndSetupTotalCount: d.toolsAndSetupTotalCount,
    detectedProviderCount: n.length,
    detectedProviderIds: n.join(`,`),
    projectsCount: e.projectCount,
    projectsSelected: c,
    selectedProviderCount: l.length,
    selectedProviderIds: l.join(`,`),
    selectedItemsCount: o,
    totalItemsCount: a,
  };
}
