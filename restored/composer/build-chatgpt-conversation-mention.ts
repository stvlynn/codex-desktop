// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// ChatGPT conversation mention markdown (bundle `g1r` / export `hJ`).

import { toMarkdownLink } from "../markdown/to-markdown-link";
import { CHATGPT_CONVERSATION_URI_SCHEME } from "./mention-uri-schemes";

export type BuildChatgptConversationMentionArgs = {
  conversationId: string;
  title: string;
};

/** `chatgpt-conversation://` URI for a conversation id (`h1r`). */
export function buildChatgptConversationUri(conversationId: string): string {
  return `${CHATGPT_CONVERSATION_URI_SCHEME}${encodeURIComponent(conversationId)}`;
}

/** Markdown link mention for a ChatGPT conversation (`g1r` / `hJ`). */
export function buildChatgptConversationMention({
  conversationId,
  title,
}: BuildChatgptConversationMentionArgs): string {
  return toMarkdownLink(title, buildChatgptConversationUri(conversationId));
}
