// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Ixu` / export `A`.

/** Add/remove `id` from a sorted unique list; `remove` forces deletion. */
export function toggleSortedIdList(
  ids: string[] | null | undefined,
  id: string | null | undefined,
  remove?: boolean,
): string[] {
  const list = ids ?? [];
  if (id == null) return list;
  if (remove) return list.filter((item) => item !== id);
  return list.includes(id) ? list : [...list, id].sort();
}

// --- split/export lane aliases ---
export { toggleSortedIdList as ToggleSortedIdList };
