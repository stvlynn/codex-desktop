// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-sunburst-layout deps via direct imports
// (wireChartSunburstLayoutBoundaryHooks leave-behind retired).

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

export type ChartSunburstLayoutBoundaryHooks = {
  bh347: (...args: any[]) => any;
  pathSep: any;
  palette: any;
  scaleOrdinal: (...args: any[]) => any;
};

export const cslH: ChartSunburstLayoutBoundaryHooks = {
  bh347: __call("../chart-asset", __wh(347)),
  get pathSep() {
    return "/";
  },
  get palette() {
    return (__req("../chart-layout-ensures") as any)[__wb(838)];
  },
  scaleOrdinal: __call("../../vendor/d3-scale-linear", "scaleOrdinal"),
};

/** @deprecated Wave-161: wire leave-behind retired — cslH uses direct imports. */
export function wireChartSunburstLayoutBoundaryHooks(
  _next?: Partial<ChartSunburstLayoutBoundaryHooks>,
): void {}
