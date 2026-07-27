// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `OSt` / `ESt` / `TSt` / `jSt` simplified for exports `rst` / `nst`.

import { markdownToPlainText } from "../markdown/markdown-to-plain-text";
import { truncateWithEllipsis } from "../utils/truncate-with-ellipsis";

export type TitleConversationLike = {
  id: string;
  title?: string | null;
  turns?: Array<{
    params?: {
      input?: unknown;
      commentAttachments?: unknown[];
    };
  }> | null;
};

function plain(value: string): string {
  const text = markdownToPlainText(value);
  return text.length > 0 ? text : value;
}

/**
 * Resolve a display title from explicit title text.
 * First-turn body extraction deferred (needs composer payload parser).
 */
export function conversationTitleFromFields(
  conversation: TitleConversationLike | null | undefined,
  _collabItems?: unknown,
): string | null {
  if (conversation == null) return null;
  const titled = conversation.title?.trim() ?? "";
  if (titled.length > 0) {
    const cleaned = plain(titled);
    return cleaned.length > 0 ? cleaned : titled;
  }
  return null;
}

/** Title with ellipsis when derived (not when explicit title present). */
export function conversationTitleMaybeTruncated(
  conversation: TitleConversationLike | null | undefined,
  collabItems?: unknown,
): string | null {
  const title = conversationTitleFromFields(conversation, collabItems);
  if (title == null || conversation?.title?.trim()) return title;
  return truncateWithEllipsis(title, 60) ?? "";
}

/** Bundle `jSt` — slim conversation fields for title helpers. */
export function conversationTitleSource(
  conversation: TitleConversationLike | null | undefined,
): TitleConversationLike | null {
  return conversation == null
    ? null
    : {
        id: conversation.id,
        title: conversation.title,
        turns: conversation.turns,
      };
}
