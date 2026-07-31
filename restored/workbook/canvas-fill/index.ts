// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-20: canvas line-dash + gradient + pattern + picture/fill-resolve barrel.

export {
  applyCanvasLineDash,
  ensureCanvasLineDashInit,
} from "./apply-line-dash";
export {
  normalizeGradientStopOffset,
  rgbaCssFromChannels,
  lerpNumber,
  colorsHaveTransparency,
  blendRgba,
  applyGradientColorStops,
  GRADIENT_BLEND_STEPS,
  ensureGradientBlendInit,
} from "./gradient-stops";
export {
  createLinearGradientFill,
  ensureLinearGradientFillInit,
} from "./linear-gradient-fill";
export {
  createRadialGradientFill,
  ensureRadialGradientFillInit,
} from "./radial-gradient-fill";
export {
  patternTilePainters,
  ensurePatternTilePaintersInit,
} from "./pattern-tile-painters";
export {
  resolvePatternFillStyle,
  ensurePatternFillResolveInit,
} from "./pattern-fill-resolve";
export {
  processPictureBitmapEffects,
  processPictureBitmapWithOpacity,
  ensurePictureEffectCachesInit,
} from "./picture-effects";
export {
  resolveFillStyle,
  ensureFillResolveInit,
} from "./fill-resolve";
export { ensureCanvasFillClusterInit } from "./ensure-canvas-fill-init";
