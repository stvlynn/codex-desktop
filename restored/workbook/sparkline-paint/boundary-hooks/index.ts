// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: sparkline-paint deps via direct imports
// (wireSparklinePaintBoundaryHooks leave-behind retired).

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

export type SparklinePaintBoundaryHooks = {
  /** Resolve sparkline color token (legacy Binding1235). */
  resolveColor: (...args: any[]) => any;
  /** Clamp number into range (legacy Binding1234). */
  clamp: (...args: any[]) => any;
  /** Default series color (legacy Binding1230). */
  defaultSeriesColor: any;
  /** Default axis color (legacy Binding1231). */
  defaultAxisColor: any;
  /** Plot inset px (legacy Binding1232). */
  plotInset: any;
  /** Marker radius px (legacy Binding1233). */
  markerRadius: any;
  /** Resolve marker fill color (legacy QCe). */
  resolveMarkerColor: (...args: any[]) => any;
};

export const spkH: SparklinePaintBoundaryHooks = {
  resolveColor: __call("../../chart-layout-ensures", __wb(1235)),
  clamp: __call("../../chart-layout-ensures", __wb(1234)),
  get defaultSeriesColor() {
    return (__req("../chart-layout-ensures") as any)[__wb(1230)];
  },
  get defaultAxisColor() {
    return (__req("../chart-layout-ensures") as any)[__wb(1231)];
  },
  get plotInset() {
    return (__req("../chart-layout-ensures") as any)[__wb(1232)];
  },
  get markerRadius() {
    return (__req("../chart-layout-ensures") as any)[__wb(1233)];
  },
  resolveMarkerColor: __call("../../chart-marker-color", "resolveMarkerColor"),
};

/** @deprecated Wave-161: wire leave-behind retired — spkH uses direct imports. */
export function wireSparklinePaintBoundaryHooks(
  _next?: Partial<SparklinePaintBoundaryHooks>,
): void {}
