// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `a0o` companion for export `WT`.

export const ATTENTION_STATE_ORDER = {
  waiting: 0,
  unread: 1,
  active: 2,
  idle: 3,
} as const;

export type AttentionState = keyof typeof ATTENTION_STATE_ORDER;
