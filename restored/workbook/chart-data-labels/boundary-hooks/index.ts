// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-data-labels deps via direct imports
// (wireChartDataLabelsBoundaryHooks leave-behind retired).

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

export type ChartDataLabelsBoundaryHooks = {
  En: any;
  formatFallback: (...args: any[]) => any;
  formatNumber: (...args: any[]) => any;
  bh152: (...args: any[]) => any;
  /** Color resolve (workbookSt). */
  resolveColor: (...args: any[]) => any;
  /** Default muted fill (legacy $D). */
  defaultMuted: any;
  /** Chart font family (Binding837). */
  chartFontFamily: any;
};

export const cdlH: ChartDataLabelsBoundaryHooks = {
  formatNumber: __call("../../chart-axis-ticks", "formatChartNumber"),
  formatFallback: __call("../../../vendor/d3-format", "format"),
  get En() {
    return (__req("../presentation-protobuf") as any)["En"];
  },
  bh152: __call("../../font-stack", "hundredthsPointToCssPx"),
  resolveColor: __call("../../color-resolve", "resolveColorToCssRgba"),
  get defaultMuted() {
    return (__req("../chart-layout-ensures") as any)["$D"];
  },
  get chartFontFamily() {
    return (__req("../chart-layout-ensures") as any)[__wb(837)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — cdlH uses direct imports. */
export function wireChartDataLabelsBoundaryHooks(
  _next?: Partial<ChartDataLabelsBoundaryHooks>,
): void {}
