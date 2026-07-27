// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `sg` / export `$st`.

type HistoryIsland = {
  entries: Array<{ value: string }>;
};

type CanonicalHistory = {
  islands: HistoryIsland[];
  entitiesByKey: Record<string, unknown>;
};

/** Prefer flattened canonical turn history; else raw turns. */
export function turnsFromConversation(conversation: {
  turnHistory?: { kind?: string; history?: CanonicalHistory };
  turns: unknown;
}): unknown {
  if (conversation.turnHistory?.kind === "canonical") {
    const history = conversation.turnHistory.history;
    if (history == null) return conversation.turns;
    return history.islands.flatMap((island) =>
      island.entries.map((entry) => history.entitiesByKey[entry.value]),
    );
  }
  return conversation.turns;
}
