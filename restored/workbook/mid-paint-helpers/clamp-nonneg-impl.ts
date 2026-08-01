// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helper: clamp non-negative min of two values (legacy _workbookEt).
// Stage-3 wave-144.

export function _workbookEt(a: any, b: any): number {
  return Math.min(Math.max(0, a), Math.max(0, b));
}

export const clampNonNegativeMin = _workbookEt;
