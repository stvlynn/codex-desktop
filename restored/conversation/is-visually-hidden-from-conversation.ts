// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `awa` / export `VF`.

import { asRecord } from "../utils/as-record";

export type MessageLike = {
  metadata?: unknown;
};

export function isVisuallyHiddenFromConversation(
  message: MessageLike,
): boolean {
  return (
    asRecord(message.metadata)?.is_visually_hidden_from_conversation === true
  );
}
