// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helper: near-zero float epsilon (legacy workbookHelper669).
// Stage-3 wave-82 constraint-solver nearZero.

export function nearZero(csIn13255: any) {
  return csIn13255 < 0 ? -csIn13255 < 1e-8 : csIn13255 < 1e-8;
}
