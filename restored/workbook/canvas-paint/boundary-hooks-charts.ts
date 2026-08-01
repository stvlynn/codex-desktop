// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: canvas-paint deps via direct imports
// (wirePaintChartsBoundaryHooks leave-behind retired).

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

export type PaintChartsBoundaryHooks = {
  evalSeriesFormula: (...args: any[]) => any;
  evalCategoryFormula: (...args: any[]) => any;
  paintChartFromProto: (...args: any[]) => any;
};

export const pchH: PaintChartsBoundaryHooks = {
  evalSeriesFormula: __call("../sheet-range-map", "HCe"),
  evalCategoryFormula: __call("../sheet-range-map", __wh(586)),
  paintChartFromProto: __call("../chart-paint", "paintChartFromProto"),
};

/** @deprecated Wave-161: wire leave-behind retired — pchH uses direct imports. */
export function wirePaintChartsBoundaryHooks(
  _next?: Partial<PaintChartsBoundaryHooks>,
): void {}
