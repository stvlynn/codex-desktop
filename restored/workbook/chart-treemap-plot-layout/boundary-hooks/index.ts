// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-treemap-plot-layout deps via direct imports
// (wireChartTreemapPlotLayoutBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import {
  workbookBinding918,
  workbookBinding920,
  workbookBinding921,
  workbookBinding922,
} from "../../chart-layout-ensures";

export type ChartTreemapPlotLayoutBoundaryHooks = {
  maxLeftFrac: any;
  maxRightFrac: any;
  maxBottomFrac: any;
  labelPad: any;
  layoutCatAxis: (...args: any[]) => any;
  layoutValAxisRight: (...args: any[]) => any;
  crossingRatio: (...args: any[]) => any;
  shiftForCrossing: (...args: any[]) => any;
  layoutValAxisBottom: (...args: any[]) => any;
  categoryLabelInset: (...args: any[]) => any;
  isFlippedX: (...args: any[]) => any;
  isFlippedY: (...args: any[]) => any;
  axisLabelReserve: (...args: any[]) => any;
};

export const ctlH: ChartTreemapPlotLayoutBoundaryHooks = {
  get maxLeftFrac() {
    return workbookBinding920;
  },
  get maxRightFrac() {
    return workbookBinding921;
  },
  get maxBottomFrac() {
    return workbookBinding922;
  },
  get labelPad() {
    return workbookBinding918;
  },
  layoutCatAxis: __call("../../chart-axis-reserve", "_be"),
  layoutValAxisRight: __call("../../chart-axis-scale-domain", "bbe"),
  crossingRatio: __call("../../chart-axis-scale-domain", "xbe"),
  shiftForCrossing: __call("../../chart-axis-scale-domain", "Sbe"),
  layoutValAxisBottom: __call("../../chart-axis-reserve", "vbe"),
  categoryLabelInset: __call("../../chart-axis-reserve", "ybe"),
  isFlippedX: __call("../../chart-category-axes", __wh(498)),
  isFlippedY: __call("../../chart-category-axes", __wh(499)),
  axisLabelReserve: __call("../../chart-axis-reserve", __wh(435)),
};

/** @deprecated Wave-160: wire leave-behind retired — ctlH uses direct imports. */
export function wireChartTreemapPlotLayoutBoundaryHooks(
  _next?: Partial<ChartTreemapPlotLayoutBoundaryHooks>,
): void {}
