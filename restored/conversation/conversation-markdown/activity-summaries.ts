// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (tool / exploration activity labels).

import type { ToolActivityLike } from "./types";

export function formatCountNoun(
  count: number,
  singular: string,
  plural: string,
): string | null {
  if (count === 0) return null;
  return count === 1 ? `a ${singular}` : `${count} ${plural}`;
}

export function appendCountPhrase(
  phrases: string[],
  count: number,
  leadingCapitalized: string,
  leadingLower: string,
  singular: string,
  plural: string,
): void {
  const noun = formatCountNoun(count, singular, plural);
  if (noun != null) {
    phrases.push(
      `${phrases.length === 0 ? leadingCapitalized : leadingLower} ${noun}`,
    );
  }
}

export function appendTimedOutPhrase(
  phrases: string[],
  timedOutCount: number,
): void {
  const noun = formatCountNoun(timedOutCount, "request", "requests");
  if (noun != null) {
    phrases.push(`${noun} timed out`);
  }
}

export function formatToolCallCountLabel(toolCallCount: number): string {
  return toolCallCount === 1
    ? "Called a tool"
    : `Called ${toolCallCount} tools`;
}

export function formatToolActivitySummary(activity: ToolActivityLike): string {
  const phrases: string[] = [];
  appendCountPhrase(
    phrases,
    activity.createdFileCount,
    "Created",
    "created",
    "file",
    "files",
  );
  appendCountPhrase(
    phrases,
    activity.editedFileCount,
    "Edited",
    "edited",
    "file",
    "files",
  );
  appendCountPhrase(
    phrases,
    activity.deletedFileCount,
    "Deleted",
    "deleted",
    "file",
    "files",
  );
  const exploredParts = [
    formatCountNoun(activity.exploredFileCount, "file", "files"),
    formatCountNoun(activity.searchCount, "search", "searches"),
    formatCountNoun(activity.listCount, "list", "lists"),
  ].filter((part): part is string => part != null);
  if (exploredParts.length > 0) {
    phrases.push(
      `${phrases.length === 0 ? "Explored" : "explored"} ${exploredParts.join(", ")}`,
    );
  }
  appendCountPhrase(
    phrases,
    activity.deniedRequestCount,
    "Denied",
    "denied",
    "request",
    "requests",
  );
  appendTimedOutPhrase(phrases, activity.timedOutRequestCount);
  appendCountPhrase(
    phrases,
    activity.commandCount,
    "Ran",
    "ran",
    "command",
    "commands",
  );
  appendCountPhrase(
    phrases,
    activity.mcpToolCallCount,
    "Called",
    "called",
    "tool",
    "tools",
  );
  if (activity.webSearchCount > 0) {
    phrases.push(
      phrases.length === 0 ? "Searched the web" : "searched the web",
    );
  }
  return phrases.length === 0 ? "Tool activity" : phrases.join(", ");
}

type ExplorationExecItem = {
  type: string;
  parsedCmd?: { type?: string };
};

export function explorationGroupSummary(items: ExplorationExecItem[]): string {
  let readCount = 0;
  let searchCount = 0;
  let listCount = 0;
  for (const item of items) {
    if (item.type !== "exec") continue;
    switch (item.parsedCmd?.type) {
      case "read":
        readCount += 1;
        break;
      case "search":
        searchCount += 1;
        break;
      case "list_files":
        listCount += 1;
        break;
      default:
        break;
    }
  }
  const parts = [
    formatCountNoun(readCount, "file", "files"),
    formatCountNoun(searchCount, "search", "searches"),
    formatCountNoun(listCount, "list", "lists"),
  ].filter((part): part is string => part != null);
  return parts.length === 0 ? "Explored" : `Explored ${parts.join(", ")}`;
}
