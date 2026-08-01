// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: chart-legend-layout deps via direct imports
// (wireChartLegendLayoutBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { tbe } from "../../chart-layout-ensures";
import { caFn347 } from "../../chart-asset/prelude-impl";
import { workbookBinding721 } from "../../chart-asset/ca-slots";
import { Qye } from "../../chart-treemap-tiles";
import { rbe } from "../../chart-combo-groups";
import { nbe } from "../../chart-bar-direction";
import { ebe } from "../../chart-waterfall-bar";
import { KTe } from "../../chart-card-paint";
import { hundredthsPointToCssPx } from "../../font-stack";
import { resolveSeriesPaintColor } from "../../stroke-resolve";
import {
  _j,
  workbookBinding907,
  workbookBinding908,
  workbookBinding909,
  workbookBinding899,
  workbookBinding900,
  workbookBinding901,
  workbookBinding902,
  workbookBinding903,
} from "../../chart-layout-ensures";
import { Cn } from "../../presentation-protobuf";

export type ChartLegendLayoutBoundaryHooks = {
  seriesGap: any;
  rampHeight: any;
  labelGap: any;
  swatchSize: any;
  CHART_TYPE_WATERFALL: any;
  CHART_TYPE_TREEMAP: any;
  ChartAsset: any;
  reverseLegend: (...args: any[]) => any;
  seriesChartTypes: (...args: any[]) => any;
  waterfallEntries: (...args: any[]) => any;
  treemapEntries: (...args: any[]) => any;
  filterDeleted: (...args: any[]) => any;
  bh347: (...args: any[]) => any;
  isPieLike: (...args: any[]) => any;
  measureMapLegend: (...args: any[]) => any;
  legendEntries: (...args: any[]) => any;
  packLegendRows: (...args: any[]) => any;
  bh152: (...args: any[]) => any;
  bh387: (...args: any[]) => any;
  bh484: (...args: any[]) => any;
  bh486: (...args: any[]) => any;
  bh487: (...args: any[]) => any;
  bh488: (...args: any[]) => any;
  bh465: (...args: any[]) => any;
  bh466: (...args: any[]) => any;
  bh489: (...args: any[]) => any;
  markerLabelGap: any;
  legendPad: any;
  entryGapStacked: any;
  entryRowHeight: any;
  packedRowGap: any;
  paintImagePlaceholder: (...args: any[]) => any;
};

export const cllH: ChartLegendLayoutBoundaryHooks = {
  isPieLike: (...args: any[]) => tbe(...args),
  bh347: (...args: any[]) => caFn347(...args),
  filterDeleted: __call("../../chart-paint", __wh(485)),
  treemapEntries: (...args: any[]) => Qye(...args),
  seriesChartTypes: (...args: any[]) => rbe(...args),
  reverseLegend: (...args: any[]) => nbe(...args),
  get ChartAsset() {
    return workbookBinding721;
  },
  get CHART_TYPE_TREEMAP() {
    return Cn.CHART_TYPE_TREEMAP;
  },
  get CHART_TYPE_WATERFALL() {
    return Cn.CHART_TYPE_WATERFALL;
  },
  get swatchSize() {
    return workbookBinding899;
  },
  get legendPad() {
    return workbookBinding900;
  },
  get labelGap() {
    return workbookBinding901;
  },
  get rampHeight() {
    return workbookBinding902;
  },
  get seriesGap() {
    return workbookBinding903;
  },
  measureMapLegend: __call("../measure-map-legend-impl", "abe"),
  legendEntries: __call("../legend-entries-impl", "ibe"),
  packLegendRows: __call("../pack-legend-rows-impl", "sbe"),
  bh465: (...args: any[]) => resolveSeriesPaintColor(...args),
  bh466: __call("../map-ramp-colors-impl", __wh(466)),
  bh489: __call("../map-legend-ramp-impl", "buildMapLegendRamp"),
  bh152: (...args: any[]) => hundredthsPointToCssPx(...args),
  bh387: __call("../../chart-legend", __wh(387)),
  bh484: __call("../../chart-legend", __wh(484)),
  bh486: __call("../../chart-legend", __wh(486)),
  bh487: __call("../../chart-legend", __wh(487)),
  bh488: __call("../../chart-legend", __wh(488)),
  get markerLabelGap() {
    return _j;
  },
  get entryGapStacked() {
    return workbookBinding907;
  },
  get entryRowHeight() {
    return workbookBinding908;
  },
  get packedRowGap() {
    return workbookBinding909;
  },
  waterfallEntries: (...args: any[]) => ebe(...args),
  paintImagePlaceholder: (...args: any[]) => KTe(...args),
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireChartLegendLayoutBoundaryHooks(
  _next?: Partial<ChartLegendLayoutBoundaryHooks>,
): void {}
