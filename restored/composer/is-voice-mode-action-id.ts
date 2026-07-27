// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `MTr` / export `v1`.

/** True for composer / realtime voice action ids. */
export function isVoiceModeActionId(actionId: string): boolean {
  return (
    actionId === "composer.startVoiceMode" ||
    actionId === "realtimeVoice" ||
    actionId.startsWith("realtimeVoice.")
  );
}
