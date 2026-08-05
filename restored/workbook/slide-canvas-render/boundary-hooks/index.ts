// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: slide-canvas-render deps via direct imports
// (wireSlideCanvasRenderBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { BTe } from "../../text-frame-embeds";
import { loadSlideGroupBitmaps } from "../../mid-paint-helpers";
import { hEe, $Te } from "../../slide-image-paint";
import { pEe } from "../../guide-layout-consts";
import { paintElementGeometry } from "../../picture-fill-paint";
import { applyShapeGeometryPaint } from "../../shape-geometry-apply";
import { resolvePlaceholderTextStyle } from "../../text-style";
import {
  resolveMasterParagraphDefaults,
  paintTextElement,
} from "../../text-box";
import { j, tt } from "../../presentation-protobuf";

export type SlideCanvasRenderBoundaryHooks = {
  guideEnum: any;
  paintSlideShape: (...args: any[]) => any;
  paintSlideGroup: (...args: any[]) => any;
  paintSlideImage: (...args: any[]) => any;
  isHiddenElement: (...args: any[]) => any;
  warmSlideImages: (...args: any[]) => any;
  bh615: (...args: any[]) => any;
  bh654: (...args: any[]) => any;
  applyFrameTransform: (...args: any[]) => any;
  renderDrawingShape: (...args: any[]) => any;
  layoutPaintedText: (...args: any[]) => any;
  masterDefaults: (...args: any[]) => any;
  emuRotation: (...args: any[]) => any;
  paintTextElement: (...args: any[]) => any;
  elementTypes: any;
};

export const scrH: SlideCanvasRenderBoundaryHooks = {
  paintSlideShape: (...args: any[]) => BTe(...args),
  paintSlideGroup: (...args: any[]) => loadSlideGroupBitmaps(...args),
  paintSlideImage: (...args: any[]) => hEe(...args),
  isHiddenElement: (...args: any[]) => pEe(...args),
  warmSlideImages: (...args: any[]) => $Te(...args),
  bh615: (...args: any[]) => paintElementGeometry(...args),
  bh654: __call("../picture-fill-bitmap-impl", __wh(654)),
  applyFrameTransform: __call(
    "../../geometry-transform",
    "applyFrameCanvasTransform",
  ),
  renderDrawingShape: (...args: any[]) => applyShapeGeometryPaint(...args),
  layoutPaintedText: (...args: any[]) => resolvePlaceholderTextStyle(...args),
  masterDefaults: (...args: any[]) => resolveMasterParagraphDefaults(...args),
  emuRotation: __call("../../geometry-transform", "rotationEmuToDegrees"),
  paintTextElement: (...args: any[]) => paintTextElement(...args),
  get elementTypes() {
    return j;
  },
  get guideEnum() {
    return tt;
  },
};

/** @deprecated Wave-159: wire leave-behind retired. */
export function wireSlideCanvasRenderBoundaryHooks(
  _next?: Partial<SlideCanvasRenderBoundaryHooks>,
): void {}
