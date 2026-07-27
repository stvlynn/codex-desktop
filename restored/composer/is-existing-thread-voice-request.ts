// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `cts` / export `nw`.

/** True when a voice request targets an existing composer thread. */
export function isExistingThreadVoiceRequest(
  request:
    | {
        request?: {
          source?: string;
          locator?: { conversationId?: string; hostId?: string };
        };
      }
    | null
    | undefined,
  conversationId: string,
  hostId: string,
): boolean {
  return (
    request?.request?.source === "composer_button_existing_thread" &&
    request.request.locator?.conversationId === conversationId &&
    request.request.locator?.hostId === hostId
  );
}
