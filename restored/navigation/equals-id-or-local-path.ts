// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `dts` / export `rw`.

import { localConversationPath } from "./local-conversation-path";

/** True when ids match, or left equals the local path for `conversationId`. */
export function equalsIdOrLocalPath(
  left: string,
  right: string,
  conversationId?: string | null,
): boolean {
  return (
    left === right ||
    (conversationId != null && left === localConversationPath(conversationId))
  );
}
