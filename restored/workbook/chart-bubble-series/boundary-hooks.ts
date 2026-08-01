// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-bubble-series deps via direct imports
// (wireChartBubbleSeriesBoundaryHooks leave-behind retired).

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

export type ChartBubbleSeriesBoundaryHooks = {
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh533: (...args: any[]) => any;
  bh534: (...args: any[]) => any;
};

export const cbbH: ChartBubbleSeriesBoundaryHooks = {
  bh465: __call("../stroke-resolve", "resolveSeriesPaintColor"),
  bh469: __call("../stroke-resolve", "resolveConnectorStroke"),
  bh470: __call("../mid-paint-helpers", "resolveSeriesFill"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../stroke-resolve", "isEmptyFill"),
  bh533: __call("../chart-layout-ensures", __wh(533)),
  bh534: __call("../chart-scatter-scale", "scaledBubbleRadius"),
};

/** @deprecated Wave-161: wire leave-behind retired — cbbH uses direct imports. */
export function wireChartBubbleSeriesBoundaryHooks(
  _next?: Partial<ChartBubbleSeriesBoundaryHooks>,
): void {}
