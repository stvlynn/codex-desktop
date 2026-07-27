// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ig` / export `tct`.

/** Drop nullish entries from an array. */
export function filterNonNull<T>(items: Array<T | null | undefined>): T[] {
  return items.filter((item): item is T => item != null);
}
