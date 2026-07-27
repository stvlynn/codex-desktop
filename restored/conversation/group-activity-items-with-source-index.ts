// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oKc` / export `Sd` — wrap items then group (`cKc`).

import { activityItemStableId } from "./activity-item-stable-id";

export type ActivityItemLike = {
  grouping?: string;
  item?: Record<string, unknown>;
  [key: string]: unknown;
};

export type GroupedActivityEntry =
  | {
      kind: "group";
      key: string;
      items: ActivityItemLike[];
    }
  | {
      kind: "standalone";
      key: string;
      item: ActivityItemLike;
    };

function activityKey(entry: ActivityItemLike, sourceIndex: number): string {
  return (
    activityItemStableId({
      item: (entry.item ?? entry) as Record<string, unknown>,
    }) ?? String(sourceIndex)
  );
}

export function groupActivityItems(
  entries: Array<{ activityItem: ActivityItemLike; sourceIndex: number }>,
): GroupedActivityEntry[] {
  const out: GroupedActivityEntry[] = [];
  let pending: ActivityItemLike[] = [];
  let pendingStart = 0;
  const flush = () => {
    const first = pending[0];
    if (first == null) return;
    out.push({
      kind: "group",
      key: `agent-activity-group:${activityKey(first, pendingStart)}`,
      items: [first, ...pending.slice(1)],
    });
    pending = [];
  };
  for (const { activityItem, sourceIndex } of entries) {
    if (activityItem.grouping === "groupable") {
      if (pending.length === 0) pendingStart = sourceIndex;
      pending.push(activityItem);
      continue;
    }
    flush();
    out.push({
      kind: "standalone",
      key: `agent-activity-standalone:${activityKey(activityItem, sourceIndex)}`,
      item: activityItem,
    });
  }
  flush();
  return out;
}

export function groupActivityItemsWithSourceIndex(
  items: ActivityItemLike[],
): GroupedActivityEntry[] {
  return groupActivityItems(
    items.map((activityItem, sourceIndex) => ({ activityItem, sourceIndex })),
  );
}
