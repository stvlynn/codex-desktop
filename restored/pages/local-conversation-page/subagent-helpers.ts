// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Pure subagent panel list helpers from the local conversation page chunk.

export type LocalSubagentListItem = {
  conversationId: string;
  displayName: string;
  status: string;
  objective?: string | null;
  lastAssistantMessage?: string | null;
  statusSummary?: string | null;
};

/** True when a subagent row has finished. */
export function isSubagentDone(item: { status: string }): boolean {
  return item.status === "done";
}

/** True when a subagent row is still running. */
export function isSubagentActive(item: { status: string }): boolean {
  return item.status !== "done";
}

/** True when a subagent row is waiting on the user. */
export function isSubagentWaiting(item: { status: string }): boolean {
  return item.status === "waiting";
}

/** Stable list key pair for React collections. */
export function subagentListEntryKey(
  item: LocalSubagentListItem,
): [string, LocalSubagentListItem] {
  return [item.conversationId, item];
}

/** Count waiting subagents for the overview header. */
export function countWaitingSubagents(
  subagents: Array<{ status: string }>,
): number {
  return subagents.filter(isSubagentWaiting).length;
}

/** Non-JSX list-row fields for the subagent panel (trailing node stays in UI). */
export function toSubagentPanelRowFields(item: LocalSubagentListItem): {
  avatarSeed: string;
  id: string;
  label: string;
  preview: string | null;
  previewLineCount: number;
  isWorkingFallback: boolean;
} {
  const preview =
    item.objective ??
    item.lastAssistantMessage ??
    item.statusSummary ??
    null;
  return {
    avatarSeed: item.conversationId,
    id: item.conversationId,
    label: item.displayName,
    preview,
    previewLineCount: 1,
    isWorkingFallback: preview == null && item.status !== "done",
  };
}
