// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `FM` / export `XY`.

/** Find the first list entry whose `model` matches. */
export function findEntryByModel<T extends { model: string }>(
  entries: T[] | null | undefined,
  model: string,
): T | undefined {
  return entries?.find((entry) => entry.model === model);
}
