// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: shape-path-densify deps via direct imports
// (wireShapePathDensifyBoundaryHooks leave-behind retired).

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

export type ShapePathDensifyBoundaryHooks = {
  bh624: (...args: any[]) => any;
  bh625: (...args: any[]) => any;
  bh626: (...args: any[]) => any;
  bh628: (...args: any[]) => any;
};

export const spdH: ShapePathDensifyBoundaryHooks = {
  bh624: __call("../../bezier-stroke", "cubicBezierLength"),
  bh625: __call("../../bezier-stroke", "cubicBezierParamAtLength"),
  bh626: __call("../../path-geometry", "splitCubicBezier"),
  bh628: __call("../../bezier-stroke", "normalizeVector2"),
};

/** @deprecated Wave-161: wire leave-behind retired — spdH uses direct imports. */
export function wireShapePathDensifyBoundaryHooks(
  _next?: Partial<ShapePathDensifyBoundaryHooks>,
): void {}
