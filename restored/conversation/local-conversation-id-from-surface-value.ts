// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `UM` / export `MY`.

/** Local conversation id from a surface value union; else null. */
export function localConversationIdFromSurfaceValue(value: {
  value: { kind: string; conversationId?: string | null };
}): string | null {
  return value.value.kind === "local"
    ? (value.value.conversationId ?? null)
    : null;
}
