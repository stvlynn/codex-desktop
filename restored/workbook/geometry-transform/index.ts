// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-33: geometry-transform barrel (h286–290 / Class11).

export type {
  FrameRectPx,
  FrameBboxFields,
  FrameBboxProto,
  FrameCanvasFrame,
  CanvasTransformTarget,
  ElementWithOptionalBbox,
  SlideRenderHost,
} from "./types";
export {
  emuToFrameUnit,
  emuToFrameUnitOrUndefined,
  frameUnitToEmu,
} from "./emu-bridge";
export {
  EMU_PER_DEGREE,
  coerceFiniteNumber,
  rotationEmuToDegrees,
  degreesToRotationEmu,
  rotationEmuToRadians,
} from "./rotation-units";
export { resolveElementFramePx } from "./resolve-element-frame";
export {
  applyElementCanvasTransform,
  applyFrameCanvasTransform,
} from "./canvas-transform";
export { FrameBbox } from "./frame-bbox";
export { ensureGeometryTransformDepsInit } from "./ensure-geometry-transform-deps-init";
export {
  ensureRotationScaleInit,
  rotationEmuScale,
} from "./ensure-rotation-scale-init";
export { ensureFrameBboxInit } from "./ensure-frame-bbox-init";
