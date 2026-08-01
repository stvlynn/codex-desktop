// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: plan axis tick counts from plot size (legacy $I).
// Stage-3 wave-141.

export function $I(csaIn9885: any) {
  return {
    xTickCount: Math.max(2, Math.floor(csaIn9885.width / 80)),
    yTickCount: Math.max(2, Math.floor(csaIn9885.height / 60)),
  };
}
