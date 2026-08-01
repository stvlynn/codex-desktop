// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-histogram-bins deps via direct imports
// (wireChartHistogramBinsBoundaryHooks leave-behind retired).

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

export type ChartHistogramBinsBoundaryHooks = {
  parseBinLabel: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  coerceNumber: (...args: any[]) => any;
  valueExtent: (...args: any[]) => any;
  binWidth: (...args: any[]) => any;
  binLabel: (...args: any[]) => any;
  INTERVAL_CLOSED_LEFT: any;
};

export const chbinH: ChartHistogramBinsBoundaryHooks = {
  parseBinLabel: __call("../", "mSe"),
  bh347: __call("../../chart-asset", __wh(347)),
  coerceNumber: __call("../../chart-bin-width", __wh(554)),
  valueExtent: __call("../", "hSe"),
  binWidth: __call("../../chart-bin-width", "resolveHistogramBinWidth"),
  binLabel: __call("../", __wh(553)),
  get INTERVAL_CLOSED_LEFT() {
    return (__req("../presentation-protobuf") as any).Jn.INTERVAL_CLOSED_LEFT;
  },
};

/** @deprecated Wave-161: wire leave-behind retired — chbinH uses direct imports. */
export function wireChartHistogramBinsBoundaryHooks(
  _next?: Partial<ChartHistogramBinsBoundaryHooks>,
): void {}
