// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: canvas save/translate/rotate/flip helpers (legacy Eue / h290).

import { resolveElementFramePx } from "./resolve-element-frame";
import { rotationEmuToRadians } from "./rotation-units";
import type {
  CanvasTransformTarget,
  ElementWithOptionalBbox,
  FrameCanvasFrame,
  SlideRenderHost,
} from "./types";

/** Legacy Eue — apply element bbox transform onto a canvas. */
export function applyElementCanvasTransform(
  canvas: CanvasTransformTarget,
  element: ElementWithOptionalBbox,
  presentation: unknown,
  slide: SlideRenderHost,
): void {
  let { x, y, width, height } = resolveElementFramePx(
      element,
      presentation,
      slide,
    ),
    horizontalFlip = !!element.bbox?.horizontalFlip,
    verticalFlip = !!element.bbox?.verticalFlip,
    radians = rotationEmuToRadians(element.bbox?.rotation ?? 0),
    halfW = width / 2,
    halfH = height / 2,
    scaleX = horizontalFlip ? -1 : 1,
    scaleY = verticalFlip ? -1 : 1;
  canvas.save();
  canvas.translate(x + halfW, y + halfH);
  radians !== 0 && canvas.rotate(radians);
  (scaleX === -1 || scaleY === -1) && canvas.scale(scaleX, scaleY);
  canvas.translate(-halfW, -halfH);
}

/** Legacy h290 — apply frame rect transform onto a canvas. */
export function applyFrameCanvasTransform(
  canvas: CanvasTransformTarget,
  frame: FrameCanvasFrame,
): void {
  let { left, top, width, height } = frame,
    horizontalFlip = frame.horizontalFlip === true,
    verticalFlip = frame.verticalFlip === true,
    radians = ((frame.rotation ?? 0) * Math.PI) / 180,
    halfW = width / 2,
    halfH = height / 2,
    scaleX = horizontalFlip ? -1 : 1,
    scaleY = verticalFlip ? -1 : 1;
  canvas.save();
  canvas.translate(left + halfW, top + halfH);
  radians !== 0 && canvas.rotate(radians);
  (scaleX === -1 || scaleY === -1) && canvas.scale(scaleX, scaleY);
  canvas.translate(-halfW, -halfH);
}
