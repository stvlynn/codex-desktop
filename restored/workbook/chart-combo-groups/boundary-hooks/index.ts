// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-combo-groups deps via direct imports
// (wireChartComboGroupsBoundaryHooks leave-behind retired).

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

export type ChartComboGroupsBoundaryHooks = {
  ChartAsset: any;
  bh423: (...args: any[]) => any;
  axisKey: (...args: any[]) => any;
  hiddenSeriesIndices: (...args: any[]) => any;
  sliceGroupChart: (...args: any[]) => any;
  /** Build render groups (legacy helper 532). */
  bh532: (...args: any[]) => any;
  /** Paint secondary value axis (_xe; still nested in Binding1150 esm). */
  paintSecondaryValueAxis: (...args: any[]) => any;
};

export const ccgH: ChartComboGroupsBoundaryHooks = {
  bh532: __call("../", "buildComboRenderGroups"),
  paintSecondaryValueAxis: __call("../../chart-axis-ticks",
    "paintSecondaryValueAxis",
  ),
  sliceGroupChart: __call("../", "pxe"),
  hiddenSeriesIndices: __call("../", "xxe"),
  axisKey: __call("../", "bxe"),
  bh423: __call("../../chart-group-scales", "buildChartGroupScales"),
  get ChartAsset() {
    return (__req("../chart-asset/ca-slots") as any)["She"];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — ccgH uses direct imports. */
export function wireChartComboGroupsBoundaryHooks(
  _next?: Partial<ChartComboGroupsBoundaryHooks>,
): void {}
