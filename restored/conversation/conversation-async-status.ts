// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Named conversation async_status codes used when merging ChatGPT completion
// transfers (bundle `E_a` / export `PI`). Zod accepts 1..7; these label 3/4.

export const ConversationAsyncStatus = {
  STREAMING: 3,
  UNREAD: 4,
} as const;

export type ConversationAsyncStatusCode =
  (typeof ConversationAsyncStatus)[keyof typeof ConversationAsyncStatus];
