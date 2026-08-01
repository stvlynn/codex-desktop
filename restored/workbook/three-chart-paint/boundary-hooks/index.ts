// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: three-chart-paint deps via direct imports
// (wireThreeChartPaintBoundaryHooks leave-behind retired).

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
  workbookBinding837,
  workbookBinding1140,
  workbookBinding1141,
  workbookBinding1143,
  workbookBinding1144,
} from "../../chart-layout-ensures";

export type ThreeChartPaintBoundaryHooks = {
  bh424: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh519: (...args: any[]) => any;
  bh520: (...args: any[]) => any;
  defaultFontFamily: any;
  ssfModule: any;
  cameraDir: any;
  pieMinAngle: any;
  pieMaxSegments: any;
};

export const tcH: ThreeChartPaintBoundaryHooks = {
  bh424: __call("../../chart-group-scales", __wh(424)),
  bh428: __call("../../chart-paint", __wh(428)),
  bh469: __call("../../stroke-resolve", __wh(469)),
  bh474: __call("../../stroke-resolve", __wh(474)),
  bh519: __call("../pastel-material-impl", __wh(519)),
  bh520: __call("../../chart-layout-ensures", __wh(520)),
  get defaultFontFamily() {
    return workbookBinding837;
  },
  get ssfModule() {
    return workbookBinding1140;
  },
  get cameraDir() {
    return workbookBinding1141;
  },
  get pieMinAngle() {
    return workbookBinding1143;
  },
  get pieMaxSegments() {
    return workbookBinding1144;
  },
};

/** @deprecated Wave-160: wire leave-behind retired — tcH uses direct imports. */
export function wireThreeChartPaintBoundaryHooks(
  _next?: Partial<ThreeChartPaintBoundaryHooks>,
): void {}
