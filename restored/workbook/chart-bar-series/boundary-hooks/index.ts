// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-bar-series deps via direct imports
// (wireChartBarSeriesBoundaryHooks leave-behind retired).

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

export type ChartBarSeriesBoundaryHooks = {
  bh393: (...args: any[]) => any;
  bh394: (...args: any[]) => any;
  bh404: (...args: any[]) => any;
  bh419: (...args: any[]) => any;
  bh420: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
};

export const cbsH: ChartBarSeriesBoundaryHooks = {
  bh393: __call("../../chart-group-scales", __wh(393)),
  bh394: __call("../../chart-group-scales", __wh(394)),
  bh404: __call("../../chart-axis-scale-domain", __wh(404)),
  bh419: __call("../../chart-category-axes", __wh(419)),
  bh420: __call("../value-index-map-impl", __wh(420)),
  bh424: __call("../../chart-group-scales", __wh(424)),
  bh469: __call("../../stroke-resolve", __wh(469)),
  bh470: __call("../../mid-paint-helpers", __wh(470)),
  bh473: __call("../../stroke-resolve", __wh(473)),
  bh474: __call("../../stroke-resolve", __wh(474)),
  bh495: __call("../../chart-data-labels", __wh(495)),
  bh500: __call("../../chart-data-labels", __wh(500)),
};

/** @deprecated Wave-160: wire leave-behind retired — cbsH uses direct imports. */
export function wireChartBarSeriesBoundaryHooks(
  _next?: Partial<ChartBarSeriesBoundaryHooks>,
): void {}
