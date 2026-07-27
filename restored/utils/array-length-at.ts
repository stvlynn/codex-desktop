// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lFr` / export `qZ`.

/** Length of `array[key]`, or 0 when missing. */
export function arrayLengthAt(
  record: Record<string, unknown[] | undefined> | null | undefined,
  key: string,
): number {
  return record?.[key]?.length ?? 0;
}
