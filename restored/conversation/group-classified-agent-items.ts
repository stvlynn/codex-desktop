// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `aKc` / export `xd`.
// Uses `classifyActivityItemGrouping` + `groupActivityItems`; skip filter injectable.

import {
  classifyActivityItemGrouping,
  type ActivityItemLike,
} from "./classify-activity-item-grouping";
import {
  groupActivityItems,
  type GroupedActivityEntry,
} from "./group-activity-items-with-source-index";

type SkipPairFn = (
  item: ActivityItemLike,
  next: ActivityItemLike | undefined,
) => boolean;

let shouldSkipAgentItemPair: SkipPairFn | null = null;

/** Wire exec→patch visualization skip (`PGc` in the bundle). */
export function setAgentItemPairSkipper(fn: SkipPairFn): void {
  shouldSkipAgentItemPair = fn;
}

/** Classify then group agent activity items (with source index). */
export function groupClassifiedAgentItems(
  items: ActivityItemLike[],
  options: { mcpServerStatuses?: unknown } = {},
): GroupedActivityEntry[] {
  return groupActivityItems(
    items.flatMap((item, index) => {
      if (shouldSkipAgentItemPair?.(item, items[index + 1])) return [];
      const classified = classifyActivityItemGrouping(item, {
        mcpServerStatuses: options.mcpServerStatuses,
      });
      if (classified == null) return [];
      return [
        {
          activityItem: classified as ActivityItemLike,
          sourceIndex: index,
        },
      ];
    }),
  );
}
