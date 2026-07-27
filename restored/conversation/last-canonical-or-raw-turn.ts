// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `ug` — pure helper.

import { lastExhaustedHistoryIsland } from "./last-exhausted-history-island";
import { turnsFromHistoryOrRaw } from "./turns-from-history-or-raw";

/** Last exhausted-island entity, else last raw/canonical turn. */
export function lastCanonicalOrRawTurn(conversation: {
  turnHistory?: {
    kind?: string;
    history?: {
      islands: Array<{
        newerBoundary?: { status?: string };
        entries: Array<{ value: string }>;
      }>;
      entitiesByKey: Record<string, unknown>;
    };
  };
  turns: unknown;
}): unknown | null {
  if (conversation.turnHistory?.kind === "canonical") {
    const { history } = conversation.turnHistory;
    if (history) {
      const island = lastExhaustedHistoryIsland(history);
      if (island != null) {
        const key = island.entries.at(-1)?.value;
        return key == null ? null : (history.entitiesByKey[key] ?? null);
      }
    }
  }
  const turns = turnsFromHistoryOrRaw(conversation);
  return Array.isArray(turns) ? (turns.at(-1) ?? null) : null;
}
