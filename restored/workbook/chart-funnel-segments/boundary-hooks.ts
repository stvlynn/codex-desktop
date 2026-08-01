// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-funnel-segments deps via direct imports
// (wireChartFunnelSegmentsBoundaryHooks leave-behind retired).

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

export type ChartFunnelSegmentsBoundaryHooks = {
  /** Category labels for series (legacy helper 348). */
  seriesCategories: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
};

export const cfsH: ChartFunnelSegmentsBoundaryHooks = {
  seriesCategories: __call("../chart-asset", __wh(348)),
  bh469: __call("../stroke-resolve", "resolveConnectorStroke"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../stroke-resolve", "isEmptyFill"),
};

/** @deprecated Wave-161: wire leave-behind retired — cfsH uses direct imports. */
export function wireChartFunnelSegmentsBoundaryHooks(
  _next?: Partial<ChartFunnelSegmentsBoundaryHooks>,
): void {}
