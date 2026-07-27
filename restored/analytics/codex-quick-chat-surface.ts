// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Mb` — quick-chat surface kind analytics enum (used by `qps` / `Gx`).

export const CodexQuickChatSurface = {
  CODEX_QUICK_CHAT_SURFACE_UNSPECIFIED: "CODEX_QUICK_CHAT_SURFACE_UNSPECIFIED",
  CODEX_QUICK_CHAT_SURFACE_POPOVER: "CODEX_QUICK_CHAT_SURFACE_POPOVER",
  CODEX_QUICK_CHAT_SURFACE_WINDOW: "CODEX_QUICK_CHAT_SURFACE_WINDOW",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexQuickChatSurface =
  (typeof CodexQuickChatSurface)[keyof typeof CodexQuickChatSurface];
