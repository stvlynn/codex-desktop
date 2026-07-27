// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ISu` / export `w`. Calls `kh` / `rlt` (`useFeatureGateEnabled`).

import { useFeatureGateEnabled } from "./use-feature-gate-enabled";

export const DICTATION_HOTKEY_WINDOW_GATE_ID = "2574306096";

/** Whether the dictation hotkey-window feature gate is enabled. */
export function isDictationHotkeyWindowGateEnabled(): boolean {
  return useFeatureGateEnabled(DICTATION_HOTKEY_WINDOW_GATE_ID);
}
