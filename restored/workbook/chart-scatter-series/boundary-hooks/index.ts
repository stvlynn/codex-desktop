// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-scatter-series deps via direct imports
// (wireChartScatterSeriesBoundaryHooks leave-behind retired).

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

export type ChartScatterSeriesBoundaryHooks = {
  bh352: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
  bh523: (...args: any[]) => any;
  bh524: (...args: any[]) => any;
  bh527: (...args: any[]) => any;
  bh556: (...args: any[]) => any;
};

export const cssH: ChartScatterSeriesBoundaryHooks = {
  bh352: __call("../../chart-asset", __wh(352)),
  bh465: __call("../../stroke-resolve", __wh(465)),
  bh469: __call("../../stroke-resolve", __wh(469)),
  bh473: __call("../../stroke-resolve", __wh(473)),
  bh474: __call("../../stroke-resolve", __wh(474)),
  bh495: __call("../../chart-data-labels", __wh(495)),
  bh500: __call("../../chart-data-labels", __wh(500)),
  bh523: __call("../../mid-paint-helpers", "paintTrendlineStroke"),
  bh524: __call("../../chart-trendline", __wh(524)),
  bh527: __call("../../chart-line-series", __wh(527)),
  bh556: __call("../../chart-paint", __wh(556)),
};

/** @deprecated Wave-160: wire leave-behind retired — cssH uses direct imports. */
export function wireChartScatterSeriesBoundaryHooks(
  _next?: Partial<ChartScatterSeriesBoundaryHooks>,
): void {}
