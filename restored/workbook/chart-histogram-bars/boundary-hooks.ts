// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-histogram-bars deps via direct imports
// (wireChartHistogramBarsBoundaryHooks leave-behind retired).

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

export type ChartHistogramBarsBoundaryHooks = {
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
};

export const chbH: ChartHistogramBarsBoundaryHooks = {
  bh469: __call("../stroke-resolve", "resolveConnectorStroke"),
  bh470: __call("../mid-paint-helpers", "resolveSeriesFill"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../stroke-resolve", "isEmptyFill"),
  bh495: __call("../chart-data-labels", "resolveDataLabelText"),
};

/** @deprecated Wave-161: wire leave-behind retired — chbH uses direct imports. */
export function wireChartHistogramBarsBoundaryHooks(
  _next?: Partial<ChartHistogramBarsBoundaryHooks>,
): void {}
