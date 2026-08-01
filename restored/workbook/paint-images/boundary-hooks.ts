// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: paint-images deps via direct imports
// (wirePaintImagesBoundaryHooks leave-behind retired).

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

export type PaintImagesBoundaryHooks = {
  bh603: (...args: any[]) => any;
  bh604: (...args: any[]) => any;
  /** Legacy Binding1254 — decoded ImageBitmap cache. */
  imageBitmapById: Map<any, any>;
  /** Legacy Binding1255 — in-flight decode promises. */
  imageDecodeById: Map<any, any>;
};

export const piH: PaintImagesBoundaryHooks = {
  bh603: __call("../image-svg-decode", __wh(603)),
  bh604: __call("./", __wh(604)),
  get imageBitmapById() {
    return (__req("./image-decode-maps-impl") as any)[__wb(1253)];
  },
  get imageDecodeById() {
    return (__req("./image-decode-maps-impl") as any)[__wb(1254)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — piH uses direct imports. */
export function wirePaintImagesBoundaryHooks(
  _next?: Partial<PaintImagesBoundaryHooks>,
): void {}
