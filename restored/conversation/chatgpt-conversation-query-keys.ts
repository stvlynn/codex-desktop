// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Query-key constants from the chatgpt-conversations list cluster
// (bundle near `LMa` / export `MN` — atom itself stays AppScope/jotai).

export const CHATGPT_CONVERSATIONS_QUERY_KEY = "chatgpt-conversations";
export const CHATGPT_PROJECT_CONVERSATIONS_QUERY_KEY =
  "chatgpt-project-conversations";
export const CHATGPT_PROJECT_CONVERSATION_SEARCH_QUERY_KEY =
  "chatgpt-project-conversation-search";
export const CHATGPT_PROJECT_CONVERSATION_QUERY_ROOTS = [
  CHATGPT_PROJECT_CONVERSATIONS_QUERY_KEY,
  CHATGPT_PROJECT_CONVERSATION_SEARCH_QUERY_KEY,
] as const;

export const CODEX_CHATGPT_CONVERSATIONS_STORAGE_KEY =
  "codex.chatgpt-conversations";
export const CODEX_CHATGPT_PINNED_CONVERSATIONS_STORAGE_KEY =
  "codex.chatgpt-pinned-conversations";

/** Bundle `Wja` / export `RN`. */
export function chatgptProjectQueryKey(
  projectId: string,
): readonly [string, string] {
  return [CHATGPT_PROJECT_CONVERSATIONS_QUERY_KEY, projectId];
}

/** Bundle `Gja` (co-located). */
export function chatgptProjectConversationSearchQueryKey(
  projectId: string,
  query: string,
): readonly [string, string, string] {
  return [CHATGPT_PROJECT_CONVERSATION_SEARCH_QUERY_KEY, projectId, query];
}
