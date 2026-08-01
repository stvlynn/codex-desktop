// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: band-scale center lookup (legacy 424/425).
// Stage-3 wave-139.

export function workbookHelper424(cgsIn13728: any) {
  return typeof cgsIn13728.bandwidth == "function";
}
export function workbookHelper425(cgsIn9192: any, cgsIn9193: any) {
  if (cgsIn9193 !== undefined) {
    if (workbookHelper424(cgsIn9192)) {
      let cgsBind22230 = cgsIn9192(cgsIn9193);
      return cgsBind22230 === undefined
        ? undefined
        : cgsBind22230 + cgsIn9192.bandwidth() / 2;
    }
    return cgsIn9192(cgsIn9193);
  }
}
