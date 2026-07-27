// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Shared-object mode id for realtime voice conversations.

/** Shared-object / mode key for realtime voice chats (`tOt` / `Pot`). */
export const REALTIME_VOICE_MODE_ID = "realtime_voice";

/**
 * Detect realtime-voice conversation titles or mode ids (`eOt`, companion of
 * `tOt` — not exported in this packet but co-located).
 */
export function isRealtimeVoiceConversation(modeId: string | null | undefined, title: string | null | undefined): boolean {
  return (
    modeId === REALTIME_VOICE_MODE_ID ||
    title === "New voice chat" ||
    title === "New Realtime Voice Chat"
  );
}
