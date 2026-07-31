// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-39: unit clamp (legacy Binding658).

/** Legacy `workbookBinding658` — clamp finite number into [lo, hi]. */
export function clampUnit(
  value: number,
  lo: number,
  hi: number,
): number {
  return Number.isNaN(value) ? lo : Math.min(Math.max(value, lo), hi);
}
