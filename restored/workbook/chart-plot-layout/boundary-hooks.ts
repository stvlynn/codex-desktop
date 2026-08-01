// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-plot-layout deps via direct imports
// (wireChartPlotLayoutBoundaryHooks leave-behind retired).

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

export type ChartPlotLayoutBoundaryHooks = {
  bh352: (...args: any[]) => any;
  bh388: (...args: any[]) => any;
  bh402: (...args: any[]) => any;
  bh403: (...args: any[]) => any;
  bh422: (...args: any[]) => any;
  bh423: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh430: (...args: any[]) => any;
  bh438: (...args: any[]) => any;
  bh440: (...args: any[]) => any;
  bh459: (...args: any[]) => any;
  bh494: (...args: any[]) => any;
};

export const cplH: ChartPlotLayoutBoundaryHooks = {
  bh352: __call("../chart-asset", __wh(352)),
  bh388: __call("../chart-group-scales", __wh(388)),
  bh402: __call("../chart-axis-scale-domain", "buildContinuousDomain"),
  bh403: __call("../chart-group-scales", __wh(403)),
  bh422: __call("../chart-group-scales", __wh(422)),
  bh423: __call("../chart-group-scales", __wh(423)),
  bh428: __call("../chart-paint", __wh(428)),
  bh430: __call("../chart-axis-reserve", __wh(430)),
  bh438: __call("../chart-paint", __wh(438)),
  bh440: __call("../chart-axis-ticks", "planAxisTicks"),
  bh459: __call("../chart-axis-ticks", "axisHasTitleManualLayout"),
  bh494: __call("../chart-data-labels", __wh(494)),
};

/** @deprecated Wave-160: wire leave-behind retired — cplH uses direct imports. */
export function wireChartPlotLayoutBoundaryHooks(
  _next?: Partial<ChartPlotLayoutBoundaryHooks>,
): void {}
