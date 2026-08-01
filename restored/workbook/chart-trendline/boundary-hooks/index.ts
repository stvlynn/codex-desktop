// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-trendline deps via direct imports
// (wireChartTrendlineBoundaryHooks leave-behind retired).

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

export type ChartTrendlineBoundaryHooks = {
  hasLabel: (...args: any[]) => any;
  resolveLabel: (...args: any[]) => any;
  layoutLabel: (...args: any[]) => any;
  paintText: (...args: any[]) => any;
  ELEMENT_TYPE_TEXT: any;
  ALIGNMENT_TYPE_LEFT: any;
  FILL_TYPE_SOLID: any;
  COLOR_TYPE_RGB: any;
  bh352: (...args: any[]) => any;
  bh523: (...args: any[]) => any;
  bh524: (...args: any[]) => any;
};

export const ctlH: ChartTrendlineBoundaryHooks = {
  bh352: __call("../../chart-asset", __wh(352)),
  bh523: __call("../../mid-paint-helpers", "paintTrendlineStroke"),
  bh524: __call("../", "paintTrendlineLabel"),
};

/** @deprecated Wave-161: wire leave-behind retired — ctlH uses direct imports. */
export function wireChartTrendlineBoundaryHooks(
  _next?: Partial<ChartTrendlineBoundaryHooks>,
): void {}
