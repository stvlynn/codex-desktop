// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `UM` — pure helper.

/** Local conversation id from a discriminated `value` envelope. */
export function localConversationIdFromValue(entry: {
  value: { kind: string; conversationId?: string };
}): string | null {
  return entry.value.kind === "local"
    ? (entry.value.conversationId ?? null)
    : null;
}
