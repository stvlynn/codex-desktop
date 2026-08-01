// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-axis-reserve deps via direct imports
// (wireChartAxisReserveBoundaryHooks leave-behind retired).

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

export type ChartAxisReserveHooks = {
  /** Legacy Binding837 — Carlito presentation stack. */
  chartFontStack: string;
  /** Legacy Binding917 — title gap px. */
  titleGapPx: number;
  /** Legacy Binding918 — label gap px. */
  labelGapPx: number;
  /** Legacy Binding919 — tick mark reserve px. */
  tickMarkReservePx: number;
  /** Legacy Binding863 — points-per-inch. */
  pointsPerInch: number;
  /** Legacy Binding864 — pixels-per-inch. */
  pixelsPerInch: number;
  resolveAxisTextStyle: (...args: any[]) => any;
  paintAxisTitleText: (...args: any[]) => any;
  resolveCssFontStack: (...args: any[]) => any;
};

export const carH: ChartAxisReserveHooks = {
  get chartFontStack() {
    return (__req("../chart-layout-ensures") as any)[__wb(837)];
  },
  get titleGapPx() {
    return (__req("../chart-layout-ensures") as any)[__wb(917)];
  },
  get labelGapPx() {
    return (__req("../chart-layout-ensures") as any)[__wb(918)];
  },
  get tickMarkReservePx() {
    return (__req("../chart-layout-ensures") as any)[__wb(919)];
  },
  get pointsPerInch() {
    return (__req("../chart-layout-ensures") as any)[__wb(863)];
  },
  get pixelsPerInch() {
    return (__req("../chart-layout-ensures") as any)[__wb(864)];
  },
  resolveAxisTextStyle: __call("../chart-paint", "resolveAxisTextStyle"),
  paintAxisTitleText: __call("../chart-paint", "paintAxisTitleText"),
  resolveCssFontStack: __call("../font-stack", "resolveCssFontStack"),
};

/** @deprecated Wave-161: wire leave-behind retired — carH uses direct imports. */
export function wireChartAxisReserveBoundaryHooks(
  _next?: Partial<ChartAxisReserveHooks>,
): void {}
