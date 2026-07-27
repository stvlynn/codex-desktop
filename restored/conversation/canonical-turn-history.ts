// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `yx` — pure helper.

/** Return canonical turn-history payload when present. */
export function canonicalTurnHistory(conversation: {
  turnHistory?: { kind?: string; history?: unknown } | null;
}): unknown | null {
  return conversation.turnHistory?.kind === "canonical"
    ? (conversation.turnHistory.history ?? null)
    : null;
}
