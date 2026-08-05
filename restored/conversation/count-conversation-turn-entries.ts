// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Cot` / export `Qst`.

type ConversationTurnCountLike = {
  turns: unknown[];
  turnHistory?: {
    kind?: string;
    history?: { islands?: Array<{ entries?: unknown[] }> };
  };
};

/** Count turns, preferring canonical island entries when present. */
export function countConversationTurnEntries(
  conversation: ConversationTurnCountLike,
): number {
  return conversation.turnHistory?.kind === "canonical"
    ? (conversation.turnHistory.history?.islands ?? []).reduce(
        (sum, island) => sum + (island.entries?.length ?? 0),
        0,
      )
    : conversation.turns.length;
}
