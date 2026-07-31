// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (details / titled block helpers).

import {
  escapeDetailsInNormalizedText,
  normalizeNewlines,
} from "./escape-html";

export function pushNonEmptyMarkdown(
  parts: string[],
  chunk: string | null | undefined,
): void {
  if (chunk != null && chunk.trim().length > 0) {
    parts.push(chunk);
  }
}

export function todoStatusCheckboxMark(
  status: "completed" | "in_progress" | "pending" | string,
): string {
  switch (status) {
    case "completed":
      return "x";
    case "in_progress":
    case "pending":
      return " ";
    default:
      return " ";
  }
}

export function sanitizeConversationTitle(title: string): string {
  const cleaned = title.replaceAll(/\s+/g, " ").trim();
  return cleaned.length === 0
    ? "Codex conversation"
    : cleaned.replaceAll("#", "\\#");
}

export function formatAsBlockquote(text: string): string {
  return normalizeNewlines(text)
    .trim()
    .split("\n")
    .map((line) => (line.length === 0 ? ">" : `> ${line}`))
    .join("\n");
}

export function wrapDetailsBlock(summary: string, body: string): string {
  return `<details><summary>${summary}</summary>\n\n${normalizeNewlines(body).trim()}\n\n</details>`;
}

export function wrapQuotedDetailsBlock(summary: string, body: string): string {
  return `<details><summary>${summary}</summary>\n\n${formatAsBlockquote(body)}\n</details>`;
}

export function formatTitledContentBlock(
  title: string,
  content: string,
): string | null {
  const escaped = escapeDetailsInNormalizedText(content).trim();
  return escaped.length === 0 ? null : `${title}\n\n${escaped}`;
}

export function formatTitledLinesBlock(
  title: string,
  lines: Array<string | null | undefined>,
): string {
  const escapedLines = lines.flatMap((line) => {
    if (line == null) return [];
    const escaped = escapeDetailsInNormalizedText(line);
    return escaped.trim().length === 0 ? [] : [escaped];
  });
  return escapedLines.length === 0
    ? title
    : `${title}\n\n${escapedLines.join("\n")}`;
}

export function previousMessagesSummary(count: number): string {
  return `${count} previous ${count === 1 ? "message" : "messages"}`;
}
