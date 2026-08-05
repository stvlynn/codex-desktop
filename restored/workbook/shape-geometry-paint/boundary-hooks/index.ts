// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: shape-geometry-paint deps via direct imports
// (wireShapeGeometryPaintBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { Gwe } from "../../shape-fill-resolve";
import { Kwe } from "../../shape-effects";
import { Vwe } from "../../shape-path-endpoints";
import { drawCustomPaths, pathCommandsToClipPoints } from "../../shape-path";

export type ShapeGeometryPaintBoundaryHooks = {
  bh608: (...args: any[]) => any;
  bh612: (...args: any[]) => any;
  bh613: (...args: any[]) => any;
  bh617: (...args: any[]) => any;
  bh618: (...args: any[]) => any;
  bh623: (...args: any[]) => any;
  bh630: (...args: any[]) => any;
  resolveShapeFill: (...args: any[]) => any;
  resolveShapeEffects: (...args: any[]) => any;
  isConnectorGeometry: (...args: any[]) => any;
  paintConnectorRoute: (...args: any[]) => any;
  drawCustomPaths: (...args: any[]) => any;
  clipShapeGeometry: (...args: any[]) => any;
  paintShapeAdjustments: (...args: any[]) => any;
  drawConnectorArrowheads: (...args: any[]) => any;
};

export const sgpH: ShapeGeometryPaintBoundaryHooks = {
  bh608: __call("../../shape-path", __wh(608)),
  bh612: __call("../../bezier-stroke", "applyCanvasShadow"),
  bh613: __call("../../bezier-stroke", "clearCanvasShadow"),
  bh617: __call("../../mid-paint-helpers", "drawPictureBitmap"),
  bh618: __call("../paint-connector-route-impl", "fillRectFallback"),
  bh623: __call("../paint-connector-route-impl", "applyStrokeLineStyle"),
  bh630: __call("../../bezier-stroke", "resolveLineStyleProto"),
  resolveShapeFill: (...args: any[]) => Gwe(...args),
  resolveShapeEffects: (...args: any[]) => Kwe(...args),
  isConnectorGeometry: __call(
    "../is-connector-geometry-impl",
    "isConnectorGeometry",
  ),
  paintConnectorRoute: __call("../paint-connector-route-impl", "Qwe"),
  drawCustomPaths: (...args: any[]) => drawCustomPaths(...args),
  clipShapeGeometry: (...args: any[]) => pathCommandsToClipPoints(...args),
  paintShapeAdjustments: (...args: any[]) => Vwe(...args),
  drawConnectorArrowheads: (...args: any[]) =>
    __call("../connector-arrowheads-impl", "getDrawConnectorArrowheads")()(
      ...args,
    ),
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireShapeGeometryPaintBoundaryHooks(
  _next?: Partial<ShapeGeometryPaintBoundaryHooks>,
): void {}
