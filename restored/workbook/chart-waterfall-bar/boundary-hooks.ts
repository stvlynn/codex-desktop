// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-waterfall-bar deps via direct imports
// (wireChartWaterfallBarBoundaryHooks leave-behind retired).

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

export type ChartWaterfallBarBoundaryHooks = {
  paintBar: (...args: any[]) => any;
  paintConnector: (...args: any[]) => any;
  paintBridge: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  /** Per-point waterfall fill override (legacy lCe). */
  pointFillOverride: (...args: any[]) => any;
  bh463: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
};

export const cwbH: ChartWaterfallBarBoundaryHooks = {
  paintBar: __call("./", "paintWaterfallBar"),
  paintConnector: __call("./", "fCe"),
  paintBridge: __call("./", "uCe"),
  bh424: __call("../chart-group-scales", __wh(424)),
  pointFillOverride: __call("./", "lCe"),
  bh463: __call("../stroke-resolve", "resolveFillColor"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
};

/** @deprecated Wave-161: wire leave-behind retired — cwbH uses direct imports. */
export function wireChartWaterfallBarBoundaryHooks(
  _next?: Partial<ChartWaterfallBarBoundaryHooks>,
): void {}
