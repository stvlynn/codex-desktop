// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `E_a` — sidebar/conversation badge sort priorities.

export const CONVERSATION_BADGE_PRIORITY = {
  STREAMING: 3,
  UNREAD: 4,
} as const;

export type ConversationBadgePriority =
  (typeof CONVERSATION_BADGE_PRIORITY)[keyof typeof CONVERSATION_BADGE_PRIORITY];
