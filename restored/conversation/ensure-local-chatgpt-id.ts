// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m_a` / export `zI` — `xV(e) ? e : bV(e)` with `h_a = "local-chatgpt:"`.
// Bundle `bV` is identity in this build, so the export is a documented no-op
// that still exposes the local-chatgpt prefix predicate.

export const LOCAL_CHATGPT_ID_PREFIX = "local-chatgpt:";

export function isLocalChatgptId(id: string): boolean {
  return id.startsWith(LOCAL_CHATGPT_ID_PREFIX);
}

/** Bundle `bV` — identity fallback. */
export function identityConversationId(id: string): string {
  return id;
}

/** Bundle `m_a` / export `zI`. */
export function ensureLocalChatgptId(id: string): string {
  return isLocalChatgptId(id) ? id : identityConversationId(id);
}
