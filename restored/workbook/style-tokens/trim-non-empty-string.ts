// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: trim helper shared by style-config + boundary (_x).

/** Legacy _x — return trimmed non-empty string, else undefined. */
export function trimNonEmptyString(
  value: string | null | undefined,
): string | undefined {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}
