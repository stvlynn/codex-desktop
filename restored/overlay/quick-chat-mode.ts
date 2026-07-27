// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Quick-chat window mode ids + layout defaults (`Qhe` / `$he` / `ege` / `nge`).

/** Bundle `Qhe` (co-located with `rge` / packet-004). */
export const QuickChatModeId = {
  BATCH: "batch",
  QUICK: "quick",
} as const;

export type QuickChatModeId =
  (typeof QuickChatModeId)[keyof typeof QuickChatModeId];

export type QuickChatModeConfig = {
  defaultSubmitMode: "saved" | "direct";
  persistent: boolean;
};

/** Bundle `$he` (co-located). */
export const QUICK_CHAT_MODE_CONFIG: Record<
  QuickChatModeId,
  QuickChatModeConfig
> = {
  [QuickChatModeId.BATCH]: { defaultSubmitMode: "saved", persistent: true },
  [QuickChatModeId.QUICK]: { defaultSubmitMode: "direct", persistent: false },
};

/** Recent-thread list cap (`ege`). */
export const QUICK_CHAT_RECENT_LIMIT = 25;

/** Half of the recent list cap (`tge`). */
export const QUICK_CHAT_RECENT_HALF_LIMIT = QUICK_CHAT_RECENT_LIMIT / 2;

/** Default floating quick-chat window size (`nge`). */
export const QUICK_CHAT_WINDOW_SIZE = { width: 344, height: 344 } as const;
