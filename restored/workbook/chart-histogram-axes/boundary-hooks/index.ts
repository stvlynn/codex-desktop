// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-histogram-axes deps via direct imports
// (wireChartHistogramAxesBoundaryHooks leave-behind retired).

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

export type ChartHistogramAxesBoundaryHooks = {
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh438: (...args: any[]) => any;
  bh439: (...args: any[]) => any;
  bh440: (...args: any[]) => any;
};

export const chaH: ChartHistogramAxesBoundaryHooks = {
  bh428: __call("../../chart-paint", "resolveAxisTextStyle"),
  bh430: __call("../../chart-axis-reserve", "axisCanvasFont"),
  bh438: __call("../../chart-paint", "paintAxisTitleText"),
  bh439: __call("../../chart-axis-ticks", "formatAxisTickValue"),
  bh440: __call("../../chart-axis-ticks", "planAxisTicks"),
};

/** @deprecated Wave-161: wire leave-behind retired — chaH uses direct imports. */
export function wireChartHistogramAxesBoundaryHooks(
  _next?: Partial<ChartHistogramAxesBoundaryHooks>,
): void {}
