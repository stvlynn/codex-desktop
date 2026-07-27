// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `SDa` / export `aF`.

export type ThreadListFilter = "all" | "chats" | "tasks";

/** Filter predicate for local thread list tabs (`tpp` = tasks). */
export function matchesThreadListFilter(
  threadKind: string,
  filter: ThreadListFilter,
): boolean {
  switch (filter) {
    case "all":
      return true;
    case "chats":
      return threadKind !== "tpp";
    case "tasks":
      return threadKind === "tpp";
  }
}
