// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ug` / export `Zst`.

import { lastExhaustedHistoryIsland } from "./last-exhausted-history-island";
import { turnsFromConversation } from "./turns-from-conversation";

type CanonicalHistory = {
  islands: Array<{
    newerBoundary?: { status?: string };
    entries: Array<{ value: string }>;
  }>;
  entitiesByKey: Record<string, unknown>;
};

/** Last turn entity from canonical island or raw turns. */
export function lastTurnFromConversation(conversation: {
  turnHistory?: { kind?: string; history?: CanonicalHistory };
  turns: unknown[];
}): unknown {
  if (conversation.turnHistory?.kind === "canonical") {
    const history = conversation.turnHistory.history;
    if (history != null) {
      const island = lastExhaustedHistoryIsland(history);
      if (island != null) {
        const key = island.entries.at(-1)?.value;
        return key == null ? null : (history.entitiesByKey[key] ?? null);
      }
    }
  }
  const turns = turnsFromConversation(conversation);
  return Array.isArray(turns) ? (turns.at(-1) ?? null) : null;
}
