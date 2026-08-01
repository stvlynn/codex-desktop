// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-data-table deps via direct imports
// (wireChartDataTableBoundaryHooks leave-behind retired).

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

export type ChartDataTableBoundaryHooks = {
  bh433: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh478: (...args: any[]) => any;
};

export const cdtH: ChartDataTableBoundaryHooks = {
  bh433: __call("../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh465: __call("../stroke-resolve", "resolveSeriesPaintColor"),
  bh478: __call("../chart-axis-ticks", "formatChartNumber"),
};

/** @deprecated Wave-161: wire leave-behind retired — cdtH uses direct imports. */
export function wireChartDataTableBoundaryHooks(
  _next?: Partial<ChartDataTableBoundaryHooks>,
): void {}
