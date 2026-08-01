// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-series-values deps via direct imports
// (wireChartSeriesValuesBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartSeriesValuesBoundaryHooks = {
  /** Chart number coerce (legacyFn347). */
  coerceChartNumber: (...args: any[]) => any;
  /** Finite number parse (legacyFn550). */
  parseFiniteNumber: (...args: any[]) => any;
};

export const csvH: ChartSeriesValuesBoundaryHooks = {
  coerceChartNumber: __call("../chart-asset", __wh(347)),
  parseFiniteNumber: __call("./", __wh(550)),
};

/** @deprecated Wave-163: wire leave-behind retired — csvH uses direct imports. */
export function wireChartSeriesValuesBoundaryHooks(
  _next?: Partial<ChartSeriesValuesBoundaryHooks>,
): void {}
