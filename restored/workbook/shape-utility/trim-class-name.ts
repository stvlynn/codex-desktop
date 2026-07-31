// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-38: trim non-empty className (legacy vde).

/** Legacy `vde` — return trimmed non-empty className, else undefined. */
export function trimClassName(
  value: string | null | undefined,
): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}
