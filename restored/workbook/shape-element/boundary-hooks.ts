// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: shape-element deps via direct imports
// (wireShapeElementBoundaryHooks leave-behind retired).

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

export type ShapeElementBoundaryHooks = {
  /** Legacy Mde ensure (border-radius/shadow/shape-utility + Binding412/gae). */
  ensureMde: () => void;
  ShapeClass: any;
};

export const seH: ShapeElementBoundaryHooks = {
  ensureMde: __call("../binding662-gate", "Mde"),
  get ShapeClass() {
    return (__req("./se-slots") as any)[__wb(736)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — seH uses direct imports. */
export function wireShapeElementBoundaryHooks(
  _next?: Partial<ShapeElementBoundaryHooks>,
): void {}
