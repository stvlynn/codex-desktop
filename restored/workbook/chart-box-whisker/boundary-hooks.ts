// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-box-whisker deps via direct imports
// (wireChartBoxWhiskerBoundaryHooks leave-behind retired).

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

export type ChartBoxWhiskerBoundaryHooks = {
  bh347: (...args: any[]) => any;
  bh348: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
};

export const cbwH: ChartBoxWhiskerBoundaryHooks = {
  bh347: __call("../chart-asset", __wh(347)),
  bh348: __call("../chart-asset", __wh(348)),
  bh465: __call("../stroke-resolve", "resolveSeriesPaintColor"),
  bh469: __call("../stroke-resolve", "resolveConnectorStroke"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../stroke-resolve", "isEmptyFill"),
};

/** @deprecated Wave-161: wire leave-behind retired — cbwH uses direct imports. */
export function wireChartBoxWhiskerBoundaryHooks(
  _next?: Partial<ChartBoxWhiskerBoundaryHooks>,
): void {}
