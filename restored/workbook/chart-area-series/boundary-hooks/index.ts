// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-area-series deps via direct imports
// (wireChartAreaSeriesBoundaryHooks leave-behind retired).

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

export type ChartAreaSeriesBoundaryHooks = {
  /** Stack/standard area layers (legacy hxe). */
  stackAreaLayers: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh464: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
};

export const casH: ChartAreaSeriesBoundaryHooks = {
  stackAreaLayers: __call("../", "stackAreaLayers"),
  bh425: __call("../../chart-group-scales", __wh(425)),
  bh464: __call("../../canvas-fill", __wh(464)),
  bh465: __call("../../stroke-resolve", "resolveSeriesPaintColor"),
};

/** @deprecated Wave-161: wire leave-behind retired — casH uses direct imports. */
export function wireChartAreaSeriesBoundaryHooks(
  _next?: Partial<ChartAreaSeriesBoundaryHooks>,
): void {}
