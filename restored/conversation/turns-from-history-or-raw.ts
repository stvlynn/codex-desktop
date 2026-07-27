// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `sg` — pure helper.

import { flattenHistoryIslandEntities } from "./flatten-history-island-entities";

/** Canonical history → flattened entities; otherwise raw `turns`. */
export function turnsFromHistoryOrRaw(conversation: {
  turnHistory?: {
    kind?: string;
    history?: Parameters<typeof flattenHistoryIslandEntities>[0];
  };
  turns: unknown;
}): unknown {
  return conversation.turnHistory?.kind === "canonical" &&
    conversation.turnHistory.history
    ? flattenHistoryIslandEntities(conversation.turnHistory.history)
    : conversation.turns;
}
