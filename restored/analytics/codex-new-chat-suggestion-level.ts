// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `SZt` / export `ket` — protobuf analytics enum.

export const CodexNewChatSuggestionLevel = {
  CODEX_NEW_CHAT_SUGGESTION_LEVEL_UNSPECIFIED:
    "CODEX_NEW_CHAT_SUGGESTION_LEVEL_UNSPECIFIED",
  CODEX_NEW_CHAT_SUGGESTION_LEVEL_CATEGORY:
    "CODEX_NEW_CHAT_SUGGESTION_LEVEL_CATEGORY",
  CODEX_NEW_CHAT_SUGGESTION_LEVEL_TASK: "CODEX_NEW_CHAT_SUGGESTION_LEVEL_TASK",
  CODEX_NEW_CHAT_SUGGESTION_LEVEL_SOURCE:
    "CODEX_NEW_CHAT_SUGGESTION_LEVEL_SOURCE",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexNewChatSuggestionLevel =
  (typeof CodexNewChatSuggestionLevel)[keyof typeof CodexNewChatSuggestionLevel];
