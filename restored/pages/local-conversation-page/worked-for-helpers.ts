// Restored from ref/webview/assets/local-conversation-page-Bf1KJPOR.js
// Collapse helpers for in-progress "worked-for" timeline items.

export type WorkedForTimelineItem = {
  type?: string;
  startedAtMs?: number | null;
  [key: string]: unknown;
};

export type CollapsedAgentTimelineEntry =
  | { kind: "standalone"; item: { item: WorkedForTimelineItem } }
  | { kind: "group"; items: unknown[] }
  | { kind: string; [key: string]: unknown };

/** First worked-for item in a turn timeline. */
export function findWorkedForItem(
  items: WorkedForTimelineItem[],
): WorkedForTimelineItem | null {
  for (const item of items) {
    if (item.type === "worked-for") return item;
  }
  return null;
}

/** Count visible collapsed messages, skipping standalone worked-for rows. */
export function countCollapsedAgentMessages(
  entries: CollapsedAgentTimelineEntry[],
): number {
  return entries.reduce((accumulator, current) => {
    if (
      current.kind === "standalone" &&
      current.item?.item?.type === "worked-for"
    ) {
      return accumulator;
    }
    return accumulator + (current.kind === "group" ? current.items.length : 1);
  }, 0);
}

export type WorkedForCollapseResult = {
  collapsedMessageCount: number;
  workedForItem: {
    type: "worked-for";
    status: "working";
    startedAtMs: number | null | undefined;
    completedAtMs: null;
  } | null;
};

/**
 * When a turn is in progress and has a worked-for marker, surface a live
 * working row; otherwise return collapsed count only.
 */
export function resolveWorkedForCollapse(args: {
  isInProgress: boolean;
  workedForItem: WorkedForTimelineItem | null;
  collapsedMessageCount: number;
}): WorkedForCollapseResult | null {
  if (args.isInProgress && args.workedForItem != null) {
    return {
      collapsedMessageCount: args.collapsedMessageCount,
      workedForItem: {
        type: "worked-for",
        status: "working",
        startedAtMs: args.workedForItem.startedAtMs,
        completedAtMs: null,
      },
    };
  }
  if (args.collapsedMessageCount === 0) return null;
  return {
    collapsedMessageCount: args.collapsedMessageCount,
    workedForItem: null,
  };
}
