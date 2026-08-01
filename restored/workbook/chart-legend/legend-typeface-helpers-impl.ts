// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: legend typeface + top/bottom position helpers (legacy workbookHelper387/487).
// Stage-3 wave-142.

export function workbookHelper387(whIn10864: any) {
  return (
    whIn10864?.typeface ??
    whIn10864?.name ??
    "Carlito, Segoe UI, Helvetica, Arial, sans-serif"
  );
}
export function workbookHelper487(whIn11731: any) {
  return (
    whIn11731 === Mn.LEGEND_POSITION_TOP ||
    whIn11731 === Mn.LEGEND_POSITION_BOTTOM
  );
}
