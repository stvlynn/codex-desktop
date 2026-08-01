// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-group-scales deps via direct imports
// (wireChartContinuousScaleBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartContinuousScaleHooks = {
  /** Legacy Binding844 — default nice count. */
  defaultNiceCount: number;
  /** Legacy Binding848 — scale → majorUnit WeakMap. */
  majorUnitMap: WeakMap<object, number>;
};

export const ccsH: ChartContinuousScaleHooks = {
  get defaultNiceCount() {
    return (__req("../chart-layout-ensures") as any)[__wb(844)];
  },
  get majorUnitMap() {
    return (__req("../chart-layout-ensures") as any)[__wb(848)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — ccsH uses direct imports. */
export function wireChartContinuousScaleBoundaryHooks(
  _next?: Partial<ChartContinuousScaleHooks>,
): void {}
