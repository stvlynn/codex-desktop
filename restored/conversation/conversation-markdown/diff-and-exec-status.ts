// Restored from ref/webview/assets/conversation-markdown-BZ6lv6DG.js
// Conversation → markdown exporter (diff / exec status helpers).

import { normalizeNewlines } from "./escape-html";
import type { DiffLineCounts, PatchChangeType } from "./types";

export function countDiffLineChanges(diffText: string): DiffLineCounts {
  let additions = 0;
  let deletions = 0;
  for (const line of normalizeNewlines(diffText).split("\n")) {
    if (line.startsWith("+") && !line.startsWith("+++")) {
      additions += 1;
      continue;
    }
    if (line.startsWith("-") && !line.startsWith("---")) {
      deletions += 1;
    }
  }
  return { additions, deletions };
}

export function patchChangeVerb(
  changeType: PatchChangeType | string,
): string | undefined {
  switch (changeType) {
    case "add":
      return "Created";
    case "delete":
      return "Deleted";
    case "update":
      return "Edited";
    default:
      return undefined;
  }
}

export type ExecStatusItem = {
  executionStatus?: string;
  output?: { exitCode?: number | null } | null;
};

export function formatExecStatusLine(item: ExecStatusItem): string {
  if (item.executionStatus === "interrupted") return "Stopped";
  if (item.output?.exitCode == null) {
    return item.executionStatus === "completed" ? "Success" : "Running";
  }
  return item.output.exitCode === 0
    ? "Success"
    : `Failed with exit code ${item.output.exitCode}`;
}
