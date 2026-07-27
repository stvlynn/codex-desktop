// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `VV` / export `FF` — flatten message.content to plain text.

import { asRecord } from "../utils/as-record";

export type MessageContentCarrier = {
  content?: unknown;
};

export function messageContentToPlainText(message: MessageContentCarrier): string {
  const content = asRecord(message.content);
  if (content == null) return "";
  if (typeof content.text === "string") return content.text;
  if (Array.isArray(content.parts)) {
    return content.parts
      .map((part) => (typeof part === "string" ? part : ""))
      .join("");
  }
  return "";
}
