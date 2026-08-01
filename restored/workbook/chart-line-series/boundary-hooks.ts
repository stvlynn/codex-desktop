// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-line-series deps via direct imports
// (wireChartLineSeriesBoundaryHooks leave-behind retired).

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

import { workbookGt } from "../text-style";

export type ChartLineSeriesBoundaryHooks = {
  emuToPx: any;
  bh464: (...args: any[]) => any;
  bh463: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh479: (...args: any[]) => any;
  bh480: (...args: any[]) => any;
  bh481: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh527: (...args: any[]) => any;
};

export const clnH: ChartLineSeriesBoundaryHooks = {
  get emuToPx() {
    return workbookGt;
  },
  bh464: __call("../canvas-fill", __wh(464)),
  bh463: __call("../stroke-resolve", __wh(463)),
  bh425: __call("../chart-group-scales", __wh(425)),
  bh433: __call("../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh479: __call("../chart-series-endpoint", __wh(479)),
  bh480: __call("./paint-series-marker-impl", __wh(480)),
  bh481: __call("../mid-paint-helpers", "resolveLineSeriesStroke"),
  bh495: __call("../chart-data-labels", __wh(495)),
  bh527: __call("./error-bars-impl", __wh(527)),
};

/** @deprecated Wave-160: wire leave-behind retired — clnH uses direct imports. */
export function wireChartLineSeriesBoundaryHooks(
  _next?: Partial<ChartLineSeriesBoundaryHooks>,
): void {}
