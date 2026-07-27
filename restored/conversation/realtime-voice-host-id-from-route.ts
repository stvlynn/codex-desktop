// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wbu` / export `q`.

export const REALTIME_VOICE_HOST_ID_PARAM = "realtimeVoiceHostId";

/** Read realtime-voice host id from route search params when conversation matches. */
export function realtimeVoiceHostIdFromRoute(input: {
  conversationId?: string | null;
  routeConversationId?: string | null;
  searchParams: { get: (key: string) => string | null };
}): string | null {
  return input.conversationId != null &&
    input.conversationId === input.routeConversationId
    ? input.searchParams.get(REALTIME_VOICE_HOST_ID_PARAM)
    : null;
}
