// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-36: positive numeric id guard (legacy ade).

/** Legacy `ade` — trim → finite number > 0. */
export function isPositiveNumericId(raw: any): boolean {
  let trimmed = raw.trim();
  if (!trimmed) return false;
  let value = Number(trimmed);
  return Number.isFinite(value) && value > 0;
}
