// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `mAl` / export `sc`.

export type TurnListItem = { type: string };

/**
 * Drop leading user-message / worked-for framing items from a turn list.
 */
export function sliceAfterWorkedFor<T extends TurnListItem>(items: T[]): T[] {
  const workedFor = items.findIndex((item) => item.type === "worked-for");
  if (workedFor >= 0) return items.slice(workedFor + 1);
  const firstNonUser = items.findIndex((item) => item.type !== "user-message");
  return firstNonUser < 0
    ? []
    : firstNonUser === 0
      ? items
      : items.slice(firstNonUser);
}
