// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: pie-type / series-data helpers (legacy workbookHelper426/552/556).
// Stage-3 wave-142.

import { Cn } from "../presentation-protobuf";
import { extractChartSeriesValues as workbookHelper551 } from "../chart-series-values";

export function workbookHelper426(whIn10428: any) {
  return (
    whIn10428 === Cn.CHART_TYPE_PIE ||
    whIn10428 === Cn.CHART_TYPE_PIE_3D ||
    whIn10428 === Cn.CHART_TYPE_DOUGHNUT
  );
}
export function workbookHelper552(whIn11974: any, whIn11975: any) {
  return workbookHelper551(whIn11974, {
    hiddenSeriesIndices: whIn11975,
    includeBubbleSize: true,
  });
}
export function workbookHelper556(whIn13405: any, whIn13406: any) {
  return workbookHelper551(whIn13405, {
    hiddenSeriesIndices: whIn13406,
  });
}
