// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `lcl`) / export `Wc`.

export type TurnActivityItem = {
  agentThreadId: unknown;
  displayName?: unknown;
  displayStatus?: string;
};

export type BackgroundAgentLike = {
  conversationId: string;
  parentTurnKey?: unknown;
  status?: string;
  statusSummary?: unknown;
  showInlineActivity?: boolean;
};

export type BuildTurnActivityItemsSummaryPeers = {
  normalizeAgentThreadId: (value: unknown) => string;
  formatDisplayName: (intl: unknown, displayName: unknown) => unknown;
  fallbackStatusSummary: (
    intl: unknown,
    displayName: unknown,
    displayStatus: unknown,
  ) => unknown;
};

let peers: BuildTurnActivityItemsSummaryPeers | null = null;

/** Wire turn activity summary peers once companions land. */
export function setBuildTurnActivityItemsSummaryPeers(
  next: BuildTurnActivityItemsSummaryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Wc` / internal `lcl`.
 * Build per-agent activity summary rows for a turn.
 */
export function buildTurnActivityItemsSummary(args: {
  activityItems: TurnActivityItem[];
  backgroundAgents: BackgroundAgentLike[];
  laterActivityItems: TurnActivityItem[];
  turnKey: unknown;
  intl: unknown;
}): Array<{
  activityStatus: unknown;
  conversationId: string;
  displayName: unknown;
  showInlineActivity: boolean;
  status: unknown;
  statusSummary: unknown;
}> {
  if (peers == null) {
    throw new Error("BuildTurnActivityItemsSummary peers are not configured");
  }
  const { activityItems, backgroundAgents, laterActivityItems, turnKey, intl } =
    args;
  const agentsById = new Map(
    backgroundAgents.map((agent) => [agent.conversationId, agent]),
  );
  const itemsById = new Map<string, TurnActivityItem>();
  for (const item of activityItems) {
    itemsById.set(peers.normalizeAgentThreadId(item.agentThreadId), item);
  }
  return Array.from(itemsById, ([conversationId, item]) => {
    const agent = agentsById.get(conversationId);
    const appearsLater = laterActivityItems.some(
      (later) => later.agentThreadId === item.agentThreadId,
    );
    const isParentTurn = agent?.parentTurnKey === turnKey;
    const doneInline = isParentTurn && !appearsLater;
    const displayName = peers!.formatDisplayName(intl, item.displayName);
    const status =
      agent == null
        ? item.displayStatus === "interrupted"
          ? "done"
          : "active"
        : isParentTurn
          ? agent.status
          : "done";
    return {
      activityStatus:
        status === "done" && doneInline ? "done" : item.displayStatus,
      conversationId,
      displayName,
      showInlineActivity: agent?.showInlineActivity ?? true,
      status,
      statusSummary:
        (isParentTurn ? agent?.statusSummary : null) ??
        peers!.fallbackStatusSummary(intl, displayName, item.displayStatus),
    };
  });
}
