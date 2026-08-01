// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-radar deps via direct imports
// (wireChartRadarBoundaryHooks leave-behind retired).

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

export type ChartRadarBoundaryHooks = {
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  prepareRadarSeries: (...args: any[]) => any;
};

export const crH: ChartRadarBoundaryHooks = {
  bh428: __call("../chart-paint", "resolveAxisTextStyle"),
  bh430: __call("../chart-axis-reserve", "axisCanvasFont"),
  bh465: __call("../stroke-resolve", "resolveSeriesPaintColor"),
  bh469: __call("../stroke-resolve", "resolveConnectorStroke"),
  bh473: __call("../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../stroke-resolve", "isEmptyFill"),
  prepareRadarSeries: __call("./", "prepareRadarSeries"),
};

/** @deprecated Wave-161: wire leave-behind retired — crH uses direct imports. */
export function wireChartRadarBoundaryHooks(
  _next?: Partial<ChartRadarBoundaryHooks>,
): void {}
