// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Work-surface conversation URL builder (bundle `dT` / export `x8`).

export const TEMPORARY_CHAT_QUERY_PARAM = "temporary-chat";

export type ConversationWorkPathOptions = {
  isTemporaryChat?: boolean;
};

/**
 * Bundle `dT` / export `x8`.
 */
export function conversationWorkPath(
  conversationId: string,
  options: ConversationWorkPathOptions = {},
): string {
  const base = `/work/conversation/${encodeURIComponent(conversationId)}`;
  return options.isTemporaryChat
    ? `${base}?${TEMPORARY_CHAT_QUERY_PARAM}=true`
    : base;
}
/** Bundle `DYn` — work-conversation route pattern (co-located with `fT` / `C8`). */
export const CONVERSATION_WORK_ROUTE_PATTERN =
  "/work/conversation/:conversationId";

/**
 * Bundle `fT` / export `C8` — original ESM init that assigned `DYn`/`OYn`.
 * Constants already exported; no-op for side-effect callers.
 */
export function ensureConversationWorkRouteInit(): void {}

/**
 * Bundle `EYn` / export `S8` — set or clear `temporary-chat` on a search string.
 */
export function setTemporaryChatSearchParam(search: string, isTemporaryChat: boolean): string {
  const params = new URLSearchParams(search);
  if (isTemporaryChat) params.set(TEMPORARY_CHAT_QUERY_PARAM, "true");
  else params.delete(TEMPORARY_CHAT_QUERY_PARAM);
  const next = params.toString();
  return next ? `?${next}` : "";
}

/**
 * Bundle `TYn` / export `w8` — true when search string has temporary-chat=true.
 */
export function isTemporaryChatSearchParam(search: string): boolean {
  return new URLSearchParams(search).get(TEMPORARY_CHAT_QUERY_PARAM) === "true";
}
