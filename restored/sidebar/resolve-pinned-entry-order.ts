// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `uic` / export `qp`.

export type PinnedEntry = { key: string };

function manualPinnedOrder<T extends PinnedEntry>(
  entries: readonly T[],
  pinnedOrder: readonly string[],
  trailing: "start" | "end",
): string[] {
  const keys = new Set(entries.map((entry) => entry.key));
  const pinned = new Set(pinnedOrder);
  const unpinned = entries
    .filter((entry) => !pinned.has(entry.key))
    .map((entry) => entry.key);
  const orderedPinned = pinnedOrder.filter((key) => keys.has(key));
  return trailing === "start"
    ? [...unpinned, ...orderedPinned]
    : [...orderedPinned, ...unpinned];
}

/** Resolve pinned entry order for manual vs automatic sort modes. */
export function resolvePinnedEntryOrder<T extends PinnedEntry>(input: {
  entries: readonly T[];
  pinnedOrder: readonly string[];
  pinnedSortMode: string;
}): string[] {
  return input.pinnedSortMode === "manual"
    ? manualPinnedOrder(input.entries, input.pinnedOrder, "end")
    : input.entries.map((entry) => entry.key);
}
