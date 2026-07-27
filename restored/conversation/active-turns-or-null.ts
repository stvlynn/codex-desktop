// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle export `Sot` — pure helper.

import { activeTurnsFromConversation } from "./active-turns-from-conversation";

/** Null-safe wrapper around `activeTurnsFromConversation`. */
export function activeTurnsOrNull(
  conversation:
    | Parameters<typeof activeTurnsFromConversation>[0]
    | null
    | undefined,
): ReturnType<typeof activeTurnsFromConversation> | null {
  return conversation == null
    ? null
    : activeTurnsFromConversation(conversation);
}
