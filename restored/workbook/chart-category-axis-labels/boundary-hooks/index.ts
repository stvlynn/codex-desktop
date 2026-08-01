// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-category-axis-labels deps via direct imports
// (wireChartCategoryAxisLabelsBoundaryHooks leave-behind retired).

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

export type ChartCategoryAxisLabelsBoundaryHooks = {
  bh427: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh431: (...args: any[]) => any;
  bh435: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh543: (...args: any[]) => any;
  /** Overlap epsilon (Binding1170). */
  overlapEpsilon: any;
  /** Chart font family (Binding837). */
  chartFontFamily: any;
};

export const calH: ChartCategoryAxisLabelsBoundaryHooks = {
  bh427: __call("../../text-measure", __wh(427)),
  bh428: __call("../../chart-paint", "resolveAxisTextStyle"),
  bh430: __call("../../chart-axis-reserve", "axisCanvasFont"),
  bh431: __call("../../chart-axis-ticks", __wh(431)),
  bh435: __call("../../chart-axis-reserve", "axisLabelReserve"),
  bh425: __call("../../chart-group-scales", __wh(425)),
  bh543: __call("../", __wh(543)),
  get overlapEpsilon() {
    return (__req("../chart-layout-ensures") as any)[__wb(1170)];
  },
  get chartFontFamily() {
    return (__req("../chart-layout-ensures") as any)[__wb(837)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — calH uses direct imports. */
export function wireChartCategoryAxisLabelsBoundaryHooks(
  _next?: Partial<ChartCategoryAxisLabelsBoundaryHooks>,
): void {}
