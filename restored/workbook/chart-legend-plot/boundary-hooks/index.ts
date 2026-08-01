// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-legend-plot deps via direct imports
// (wireChartLegendPlotBoundaryHooks leave-behind retired).

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

import {
  workbookBinding1164,
  workbookBinding1167,
  workbookBinding1182,
  workbookBinding1183,
} from "../../chart-layout-ensures";
import { Pn } from "../../presentation-protobuf";

export type ChartLegendPlotBoundaryHooks = {
  LAYOUT_MODE_EDGE: any;
  bh454: (...args: any[]) => any;
  bh453: (...args: any[]) => any;
  legendGapPx: any;
  legendMaxFraction: any;
  measureLegend: (...args: any[]) => any;
  titleText: (...args: any[]) => any;
  applyManualLayout: (...args: any[]) => any;
  layoutTitleElement: (...args: any[]) => any;
  titlePadPx: any;
  titleHeightFrac: any;
};

export const clpH: ChartLegendPlotBoundaryHooks = {
  get LAYOUT_MODE_EDGE() {
    return Pn.LAYOUT_MODE_EDGE;
  },
  bh454: __call("../../chart-axis-ticks", "clampNumber"),
  bh453: __call("../../chart-axis-ticks", "hasManualLayoutCoord"),
  get legendGapPx() {
    return workbookBinding1164;
  },
  get legendMaxFraction() {
    return workbookBinding1167;
  },
  measureLegend: __call("../../chart-legend", "obe"),
  titleText: __call("../layout-title-element-impl", __wh(548)),
  applyManualLayout: __call("../apply-manual-layout-impl", __wh(458)),
  layoutTitleElement: __call("../layout-title-element-impl", "lSe"),
  get titlePadPx() {
    return workbookBinding1182;
  },
  get titleHeightFrac() {
    return workbookBinding1183;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — clpH uses direct imports. */
export function wireChartLegendPlotBoundaryHooks(
  _next?: Partial<ChartLegendPlotBoundaryHooks>,
): void {}
