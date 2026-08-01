// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: truncate multi-line preview text (legacy workbookHelper684).
// Stage-3 wave-140.

export function workbookHelper684(cesIn9229: any, cesIn9230: any = 140) {
  if (!cesIn9229) return;
  let cesBind19797 = cesIn9229.replace(/\r?\n/g, " | ").trim();
  if (cesBind19797)
    return cesBind19797.length <= cesIn9230
      ? cesBind19797
      : `${cesBind19797.slice(0, Math.max(1, cesIn9230 - 3))}...`;
}
/** Compat alias for barrels. */
export const workbookFn684 = workbookHelper684;
