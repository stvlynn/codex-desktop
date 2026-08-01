// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series overlap offset (legacy helper392–394).
// Stage-3 wave-134.

export function workbookHelper392(cgsIn10752: any) {
  return cgsIn10752 === undefined || !Number.isFinite(cgsIn10752)
    ? 0
    : -Math.max(-100, Math.min(100, cgsIn10752)) / 100;
}
export function workbookHelper393(cgsIn11593: any, cgsIn11594: any) {
  let cgsBind21998 = Math.max(1, Math.floor(cgsIn11593));
  return (
    1 / (cgsBind21998 + workbookHelper392(cgsIn11594) * (cgsBind21998 - 1))
  );
}
export function workbookHelper394(cgsIn7924: any) {
  let cgsBind18400 = Math.max(1, Math.floor(cgsIn7924.seriesCount)),
    cgsBind18401 = Math.max(
      0,
      Math.min(cgsBind18400 - 1, Math.floor(cgsIn7924.orderIndex)),
    );
  return (
    (cgsIn7924.reverse ? cgsBind18400 - 1 - cgsBind18401 : cgsBind18401) *
    (1 + workbookHelper392(cgsIn7924.overlap)) *
    workbookHelper393(cgsBind18400, cgsIn7924.overlap)
  );
}
