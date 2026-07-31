// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (inline/fenced code helpers).

import { escapeHtml, normalizeNewlines } from "./escape-html";

export function maxBacktickRunLength(text: string): number {
  let longest = 0;
  for (const match of text.matchAll(/`+/g)) {
    longest = Math.max(longest, match[0].length);
  }
  return longest;
}

export function wrapInlineCode(text: string): string {
  const fence = "`".repeat(maxBacktickRunLength(text) + 1);
  return `${fence}${text}${fence}`;
}

export function wrapHtmlCode(text: string): string {
  return `<code>${escapeHtml(text)}</code>`;
}

export function wrapFencedCodeBlock(language: string, body: string): string {
  const normalized = normalizeNewlines(body).trimEnd();
  const fence = "`".repeat(Math.max(3, maxBacktickRunLength(normalized) + 1));
  return `${fence}${language}\n${normalized}\n${fence}`;
}

export function prettyJson(value: unknown): string {
  return JSON.stringify(value, null, 2) ?? "null";
}
