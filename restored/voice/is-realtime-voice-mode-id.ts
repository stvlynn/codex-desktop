// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Realtime-voice shared-object key predicate (`Ser` / export `h4`).

import { REALTIME_VOICE_MODE_ID } from "./realtime-voice-mode-id";

/**
 * Bundle `Ser` / export `h4`.
 * True when a shared-object / mode key is the realtime voice id.
 */
export function isRealtimeVoiceModeId(
  modeId: string | null | undefined,
): boolean {
  return modeId === REALTIME_VOICE_MODE_ID;
}
