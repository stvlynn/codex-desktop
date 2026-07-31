// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: canvas linear-gradient fill painter (legacy Pce/Fce).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToCssRgba } from "../color-resolve";
import { applyGradientColorStops, ensureGradientBlendInit } from "./gradient-stops";
export function createLinearGradientFill(linIn2277: unknown, linIn2278: unknown, linIn2279: unknown, linIn2280: unknown, linIn2281: unknown) {
  let fillBind9338 = (linIn2279.angleDeg ?? 0) * (Math.PI / 180),
    {
      x: __x,
      y: __y,
      width,
      height
    } = linIn2278,
    fillBind9339 = __x + width / 2,
    fillBind9340 = __y + height / 2,
    fillBind9341 = Math.cos(fillBind9338) * (linIn2279.isScaled === true ? width : 1),
    fillBind9342 = Math.sin(fillBind9338) * (linIn2279.isScaled === true ? height : 1),
    fillBind9343 = Math.hypot(fillBind9341, fillBind9342) || 1,
    fillBind9344 = fillBind9341 / fillBind9343,
    fillBind9345 = fillBind9342 / fillBind9343,
    fillBind9346 = linIn2279.isScaled === undefined ? Math.sqrt(width * width + height * height) / 2 : (Math.abs(width * fillBind9344) + Math.abs(height * fillBind9345)) / 2,
    fillBind9347 = fillBind9344 * fillBind9346,
    fillBind9348 = fillBind9345 * fillBind9346,
    fillBind9349 = linIn2277.createLinearGradient(fillBind9339 - fillBind9347, fillBind9340 - fillBind9348, fillBind9339 + fillBind9347, fillBind9340 + fillBind9348),
    fillBind9350 = linIn2279.gradientStops ?? [];
  if (fillBind9350.length === 0) {
    let fillBind19698 = resolveColorToCssRgba(linIn2279.color, linIn2280, {
      colorSpace: linIn2281?.colorSpace,
      defaultFill: "transparent"
    });
    return fillBind9349.addColorStop(0, fillBind19698), fillBind9349.addColorStop(1, fillBind19698), fillBind9349;
  }
  return applyGradientColorStops(fillBind9349, fillBind9350, linIn2280, linIn2281), fillBind9349;
}
export const ensureLinearGradientFillInit = esmInit(() => {
  ensureCssNamedColorsInit();
  ensureGradientBlendInit();
});
