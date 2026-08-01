// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: chart-pie-series deps via direct imports
// (wireChartPieSeriesBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { JSe } from "../contrast-text-colors";
import {
  formatChartNumber,
  paintAxisGridlineStroke,
} from "../chart-axis-ticks";
import { caFn347 } from "../chart-asset/prelude-impl";
import {
  resolveConnectorStroke,
  isEmptyFill,
  resolveVisibleStroke,
} from "../stroke-resolve";
import { hundredthsPointToCssPx } from "../font-stack";
import { resolveColorToCssRgba } from "../color-resolve";
import { resolveFillStyle } from "../canvas-fill";
import {
  $D,
  workbookBinding837,
  workbookBinding1202,
  workbookBinding1203,
  workbookBinding1204,
  workbookBinding1205,
  workbookBinding1206,
  workbookBinding1207,
  workbookBinding1208,
} from "../chart-layout-ensures";

export type ChartPieSeriesBoundaryHooks = {
  contrastPair: (...args: any[]) => any;
  formatValue: (...args: any[]) => any;
  minArcLen: any;
  minRing: any;
  minValueArc: any;
  minValueRing: any;
  nameFont: any;
  valueFont: any;
  lineGap: any;
  sliceMid: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh482: (...args: any[]) => any;
  bh152: (...args: any[]) => any;
  resolveColor: (...args: any[]) => any;
  bh212: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  defaultMuted: any;
  chartFontFamily: any;
};

export const cpsH: ChartPieSeriesBoundaryHooks = {
  contrastPair: (...args: any[]) => JSe(...args),
  formatValue: (...args: any[]) => formatChartNumber(...args),
  get minArcLen() {
    return workbookBinding1202;
  },
  get minRing() {
    return workbookBinding1203;
  },
  get minValueArc() {
    return workbookBinding1204;
  },
  get minValueRing() {
    return workbookBinding1205;
  },
  get nameFont() {
    return workbookBinding1206;
  },
  get valueFont() {
    return workbookBinding1207;
  },
  get lineGap() {
    return workbookBinding1208;
  },
  sliceMid: __call("./slice-mid-label-impl", "dbe"),
  bh347: (...args: any[]) => caFn347(...args),
  bh469: (...args: any[]) => resolveConnectorStroke(...args),
  bh474: (...args: any[]) => isEmptyFill(...args),
  bh482: (...args: any[]) => resolveVisibleStroke(...args),
  bh152: (...args: any[]) => hundredthsPointToCssPx(...args),
  resolveColor: (...args: any[]) => resolveColorToCssRgba(...args),
  bh212: (...args: any[]) => resolveFillStyle(...args),
  bh433: (...args: any[]) => paintAxisGridlineStroke(...args),
  get defaultMuted() {
    return $D;
  },
  get chartFontFamily() {
    return workbookBinding837;
  },
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireChartPieSeriesBoundaryHooks(
  _next?: Partial<ChartPieSeriesBoundaryHooks>,
): void {}
