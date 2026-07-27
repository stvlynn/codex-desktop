// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Pts` / export `GC` (analytics/source tables keep opaque values).

/** Index into a string-keyed record. */
export function lookupRecordValue<T>(
  table: Record<string, T>,
  key: string,
): T | undefined {
  return table[key];
}
