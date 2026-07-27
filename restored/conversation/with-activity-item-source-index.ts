// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `oKc` / export `Sd` — attach sourceIndex before activity ordering.
// Downstream `cKc` sort left for a later restore; this preserves the map shape
// composers pass into the sorter.

export type ActivityItemWithSourceIndex<T> = {
  activityItem: T;
  sourceIndex: number;
};

export function withActivityItemSourceIndex<T>(
  items: T[],
): ActivityItemWithSourceIndex<T>[] {
  return items.map((activityItem, sourceIndex) => ({
    activityItem,
    sourceIndex,
  }));
}
