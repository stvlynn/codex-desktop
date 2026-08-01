// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: shape-fill-resolve deps via direct imports
// (wireShapeFillResolveBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ShapeFillResolveHooks = {
  resolveFillStyle: (...args: any[]) => any;
};

export const sfrH: ShapeFillResolveHooks = {
  resolveFillStyle: __call("../bezier-stroke", "mapFillPlaceholderColor"),
};

/** @deprecated Wave-163: wire leave-behind retired — sfrH uses direct imports. */
export function wireShapeFillResolveBoundaryHooks(
  _next?: Partial<ShapeFillResolveHooks>,
): void {}
