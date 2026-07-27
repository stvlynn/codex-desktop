// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `b_` / export `rst` and `DSt` / export `nst`.

import {
  conversationTitleFromFields,
  conversationTitleMaybeTruncated,
  conversationTitleSource,
  type TitleConversationLike,
} from "./conversation-title-from-fields";

/** Resolve + optionally truncate a conversation title (`rst`). */
export function resolveConversationTitle(conversation: TitleConversationLike | null | undefined, collabItems?: unknown): string | null {
  return conversationTitleMaybeTruncated(
    conversationTitleSource(conversation),
    collabItems,
  );
}

/** Resolve conversation title without forced truncation (`nst`). */
export function resolveConversationTitleRaw(conversation: TitleConversationLike | null | undefined, collabItems?: unknown): string | null {
  return conversationTitleFromFields(
    conversationTitleSource(conversation),
    collabItems,
  );
}
