// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize legend position (legacy workbookHelper486).
// Stage-3 wave-143.

import { Mn } from "../presentation-protobuf";

export function workbookHelper486(clIn10324: any) {
  return clIn10324 === Mn.LEGEND_POSITION_TOP_RIGHT
    ? Mn.LEGEND_POSITION_RIGHT
    : (clIn10324 ?? Mn.LEGEND_POSITION_RIGHT);
}
