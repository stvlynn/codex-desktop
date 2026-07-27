// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wZt` — quick-chat dock position analytics enum (used by `Jps`).

export const CodexQuickChatDockPosition = {
  CODEX_QUICK_CHAT_DOCK_POSITION_UNSPECIFIED:
    "CODEX_QUICK_CHAT_DOCK_POSITION_UNSPECIFIED",
  CODEX_QUICK_CHAT_DOCK_POSITION_CENTER:
    "CODEX_QUICK_CHAT_DOCK_POSITION_CENTER",
  CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_LEFT:
    "CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_LEFT",
  CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_RIGHT:
    "CODEX_QUICK_CHAT_DOCK_POSITION_BOTTOM_RIGHT",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexQuickChatDockPosition =
  (typeof CodexQuickChatDockPosition)[keyof typeof CodexQuickChatDockPosition];
