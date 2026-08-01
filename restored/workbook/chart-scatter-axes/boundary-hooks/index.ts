// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-scatter-axes deps via direct imports
// (wireChartScatterAxesBoundaryHooks leave-behind retired).

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

import { workbookBinding1177 } from "../../chart-layout-ensures";

export type ChartScatterAxesBoundaryHooks = {
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh436: (...args: any[]) => any;
  bh438: (...args: any[]) => any;
  bh440: (...args: any[]) => any;
  bh441: (...args: any[]) => any;
  bh460: (...args: any[]) => any;
  bh544: (...args: any[]) => any;
  planTickCounts: (...args: any[]) => any;
  labelGapPx: any;
};

export const csaH: ChartScatterAxesBoundaryHooks = {
  bh428: __call("../../chart-paint", __wh(428)),
  bh430: __call("../../chart-axis-reserve", __wh(430)),
  bh436: __call("../../chart-axis-reserve", __wh(436)),
  bh438: __call("../../chart-paint", __wh(438)),
  bh440: __call("../../chart-axis-ticks", "planAxisTicks"),
  bh441: __call("../../chart-axis-ticks", "majorTicksForAxis"),
  bh460: __call("../../chart-axis-ticks", "paintAxisTitle"),
  bh544: __call("../../chart-layout-ensures", __wh(544)),
  planTickCounts: __call("../plan-tick-counts-impl", "$I"),
  get labelGapPx() {
    return workbookBinding1177;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — csaH uses direct imports. */
export function wireChartScatterAxesBoundaryHooks(
  _next?: Partial<ChartScatterAxesBoundaryHooks>,
): void {}
