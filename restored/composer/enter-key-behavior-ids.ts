// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Composer Enter-key behavior preference ids (bundle `Cpe` / `Xgt`).

export const ENTER_KEY_BEHAVIOR_IDS = [
  "enter",
  "cmdIfMultiline",
  "cmdAlways",
] as const;

export type EnterKeyBehaviorId = (typeof ENTER_KEY_BEHAVIOR_IDS)[number];
