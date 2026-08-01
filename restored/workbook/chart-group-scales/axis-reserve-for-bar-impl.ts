// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bar-chart axis reserve when Y deleted+grid (legacy workbookHelper422).
// Stage-3 wave-140.

import { Cn, Vn as _presentationVn } from "../presentation-protobuf";

/** Legacy Binding857 */
export const AXIS_RESERVE_DEFAULT = 5;
/** Legacy Binding858 */
export const AXIS_RESERVE_WHEN_HIDDEN_GRID = 4;

export function workbookHelper422(cgsIn8176: any) {
  return cgsIn8176.type === Cn.CHART_TYPE_BAR &&
    cgsIn8176.barOptions?.direction !== _presentationVn.BAR_DIRECTION_BAR &&
    cgsIn8176.yAxis?.deleted === true &&
    cgsIn8176.yAxis.majorGridlines !== undefined
    ? AXIS_RESERVE_WHEN_HIDDEN_GRID
    : AXIS_RESERVE_DEFAULT;
}
/** Compat alias for barrels. */
export const workbookFn422 = workbookHelper422;
