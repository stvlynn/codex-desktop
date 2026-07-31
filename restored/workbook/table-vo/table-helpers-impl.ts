// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table header/totals helpers + default style/proto accessors (legacy ohe/she/che).
// Stage-3 wave-76 cohesive table-vo impl kept flat under maxFlatLines.

import { workbookBinding700, workbookBinding701 } from "./tv-slots";

export function tableHeaderRowCount(tvIn13935: any) {
  return tvIn13935.headerRowCount === 0 ? 0 : 1;
}
export function tableTotalsRowCount(tvIn10119: any) {
  return tvIn10119.totalsRowCount === 0
    ? 0
    : typeof tvIn10119.totalsRowCount == "number"
      ? 1
      : +!!tvIn10119.totalsRowShown;
}
export function ohe(tvIn9634: any = workbookBinding701) {
  return {
    name: tvIn9634,
    showFirstColumn: false,
    showLastColumn: false,
    showRowStripes: true,
    showColumnStripes: false,
  };
}
export function she(tvIn11357: any) {
  let tvBind21834 = workbookBinding700.get(tvIn11357);
  if (!tvBind21834) throw Error("Table proto not found");
  return tvBind21834;
}
export function che(tvIn12495: any) {
  return tvIn12495 instanceof Date
    ? tvIn12495.toISOString()
    : (tvIn12495 ?? null);
}
