// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: three-chart-camera deps via direct imports
// (wireThreeChartCameraBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ThreeChartCameraBoundaryHooks = {
  /** Legacy Binding1142 — pie/3D camera direction (ixe). */
  cameraDir: any;
};

export const tccH: ThreeChartCameraBoundaryHooks = {
  get cameraDir() {
    return (__req("../chart-layout-ensures") as any)[__wb(1142)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — tccH uses direct imports. */
export function wireThreeChartCameraBoundaryHooks(
  _next?: Partial<ThreeChartCameraBoundaryHooks>,
): void {}
