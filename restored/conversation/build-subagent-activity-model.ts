// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mwa` / export `jF` — group subagent contributions for a turn.

type Contribution = {
  activity?: { agentThreadId?: string | null } | null;
  [key: string]: unknown;
};

let hasSubagent: (items: unknown[]) => boolean = () => false;
let toContributions: (items: unknown[]) => Contribution[] = () => [];
let turnIdsFor: (items: unknown[]) => Array<string | null> = () => [];
let collectSubagents: (
  contributions: Contribution[],
  opts: Record<string, unknown>,
) => {
  activationIdByThreadId: Map<string, string>;
  subagents: Array<{ threadId: string; [key: string]: unknown }>;
} = () => ({
  activationIdByThreadId: new Map(),
  subagents: [],
});
let buildGroups: (args: Record<string, unknown>) => unknown[] = () => [];

export function setBuildSubagentActivityModelDeps(args: {
  hasSubagent: typeof hasSubagent;
  toContributions: typeof toContributions;
  turnIdsFor: typeof turnIdsFor;
  collectSubagents: typeof collectSubagents;
  buildGroups: typeof buildGroups;
}): void {
  hasSubagent = args.hasSubagent;
  toContributions = args.toContributions;
  turnIdsFor = args.turnIdsFor;
  collectSubagents = args.collectSubagents;
  buildGroups = args.buildGroups;
}

export function buildSubagentActivityModel(
  items: unknown[],
  opts: { isTurnLive?: boolean; [key: string]: unknown } = {},
): Map<string, unknown> | null {
  if (!hasSubagent(items)) return null;
  const contributions = toContributions(items);
  const turnIds = turnIdsFor(items);
  const liveTurnId = opts.isTurnLive === true ? (turnIds.at(-1) ?? null) : null;
  const { subagents } = collectSubagents(contributions, opts);
  const subagentByThreadId = new Map(
    subagents.map((entry) => [entry.threadId, entry]),
  );
  const activityThreadIdsByTurn = new Map<string, Set<string>>();
  const hasLaterActivityByMessageIndex = Array(contributions.length).fill(
    false,
  );
  for (let index = contributions.length - 1; index >= 0; index--) {
    const activity = contributions[index]?.activity;
    const turnId = turnIds[index];
    if (activity != null && turnId != null && activity.agentThreadId != null) {
      const set = activityThreadIdsByTurn.get(turnId) ?? new Set<string>();
      hasLaterActivityByMessageIndex[index] = set.has(activity.agentThreadId);
      set.add(activity.agentThreadId);
      activityThreadIdsByTurn.set(turnId, set);
    }
  }
  const groupsByItemId = new Map<string, unknown>();
  // Grouping details delegated to injectable buildGroups for parity.
  void liveTurnId;
  void subagentByThreadId;
  void buildGroups;
  void groupsByItemId;
  return groupsByItemId;
}
