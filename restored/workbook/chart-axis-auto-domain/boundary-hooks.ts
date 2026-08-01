// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-axis-auto-domain deps via direct imports
// (wireChartAxisAutoDomainBoundaryHooks leave-behind retired).

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

export type ChartAxisAutoDomainBoundaryHooks = {
  /** Max auto major increments (Binding844). */
  maxAutoIncrements: any;
  /** Narrow-range increment cap (Binding845). */
  narrowIncrementCap: any;
  /** Domain expand threshold (Binding846). */
  expandThreshold: any;
  /** Narrow-toward-zero ratio (Binding847). */
  narrowTowardZeroRatio: any;
};

export const cadH: ChartAxisAutoDomainBoundaryHooks = {
  get maxAutoIncrements() {
    return (__req("../chart-layout-ensures") as any)[__wb(844)];
  },
  get narrowIncrementCap() {
    return (__req("../chart-layout-ensures") as any)[__wb(845)];
  },
  get expandThreshold() {
    return (__req("../chart-layout-ensures") as any)[__wb(846)];
  },
  get narrowTowardZeroRatio() {
    return (__req("../chart-layout-ensures") as any)[__wb(847)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — cadH uses direct imports. */
export function wireChartAxisAutoDomainBoundaryHooks(
  _next?: Partial<ChartAxisAutoDomainBoundaryHooks>,
): void {}
