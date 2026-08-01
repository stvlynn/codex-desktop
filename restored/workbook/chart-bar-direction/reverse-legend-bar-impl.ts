// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: horizontal bar chart reverse-legend predicate (legacy nbe).
// Stage-3 wave-137.

import { Cn, Vn, Yn, Mn } from "../presentation-protobuf";

export function nbe(cbdIn5637: any) {
  let cbdBind15501 = cbdIn5637.barOptions?.direction ?? cbdIn5637.barDirection,
    cbdBind15502 = cbdIn5637.barOptions?.grouping;
  return (
    cbdIn5637.type === Cn.CHART_TYPE_BAR &&
    cbdBind15501 === Vn.BAR_DIRECTION_BAR &&
    cbdBind15502 !== Yn.BAR_GROUPING_STACKED &&
    cbdBind15502 !== Yn.BAR_GROUPING_PERCENT_STACKED &&
    cbdIn5637.xAxis?.orientation === Mn.AXIS_ORIENTATION_MIN_MAX
  );
}
