// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: plain-object predicate (legacy Binding437).

/** Legacy `workbookBinding437` — non-null plain object (not array). */
export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value == "object" && !!value && !Array.isArray(value);
}
