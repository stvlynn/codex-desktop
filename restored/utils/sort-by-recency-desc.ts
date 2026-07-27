// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `tQs` / export `ag`.

/** Copy + sort by `recencyAtMs` descending. */
export function sortByRecencyDesc<T extends { recencyAtMs?: number | null }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => (b.recencyAtMs ?? 0) - (a.recencyAtMs ?? 0));
}
