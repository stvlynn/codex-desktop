// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-19: canvas radial/path gradient fill painter (legacy Ice/Lce).

import { esmInit } from "../../runtime/rolldown-runtime";
import { wr, rr as gradientPathTypeEnum } from "../presentation-protobuf";
import { ensureCssNamedColorsInit } from "../presentation-theme";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  applyGradientColorStops,
  ensureGradientBlendInit,
} from "./gradient-stops";
export function createRadialGradientFill(
  radIn924: unknown,
  radIn925: unknown,
  radIn926: unknown,
  radIn927: unknown,
  radIn928: unknown,
) {
  let { x: __x, y: __y, width, height } = radIn925,
    fillBind5895 = (radIn16305) => (radIn16305 ?? 0) / 1e5,
    fillBind5896 = radIn926.fillRect,
    fillBind5897 = fillBind5895(fillBind5896?.l),
    fillBind5898 = fillBind5895(fillBind5896?.t),
    fillBind5899 = fillBind5895(fillBind5896?.r),
    fillBind5900 = fillBind5895(fillBind5896?.b),
    fillBind5901 = (fillBind5897 + (1 - fillBind5899)) / 2,
    fillBind5902 = (fillBind5898 + (1 - fillBind5900)) / 2,
    fillBind5903 = __x + fillBind5901 * width,
    fillBind5904 = __y + fillBind5902 * height,
    fillBind5905 = __x + fillBind5897 * width,
    fillBind5906 = __y + fillBind5898 * height,
    fillBind5907 = __x + (1 - fillBind5899) * width,
    fillBind5908 = __y + (1 - fillBind5900) * height,
    fillBind5909 = fillBind5903 - fillBind5905,
    fillBind5910 = fillBind5907 - fillBind5903,
    fillBind5911 = fillBind5904 - fillBind5906,
    fillBind5912 = fillBind5908 - fillBind5904,
    fillBind5913 = (radIn15788, radIn15789) =>
      Math.hypot(radIn15788 - fillBind5903, radIn15789 - fillBind5904),
    fillBind5914 = Math.max(
      fillBind5913(__x, __y),
      fillBind5913(__x + width, __y),
      fillBind5913(__x, __y + height),
      fillBind5913(__x + width, __y + height),
    ),
    fillBind5915 = Math.max(
      Math.abs(fillBind5909),
      Math.abs(fillBind5910),
      Math.abs(fillBind5911),
      Math.abs(fillBind5912),
    ),
    fillBind5916 =
      Math.abs(fillBind5907 - fillBind5905) < 1e-6 ||
      Math.abs(fillBind5908 - fillBind5906) < 1e-6,
    fillBind5917 =
      fillBind5903 < __x ||
      fillBind5903 > __x + width ||
      fillBind5904 < __y ||
      fillBind5904 > __y + height,
    fillBind5918 = fillBind5916 || fillBind5917,
    fillBind5919;
  switch (radIn926.pathType) {
    case gradientPathTypeEnum.GRADIENT_PATH_TYPE_CIRCLE:
      fillBind5919 = fillBind5918
        ? Math.max(1e-6, fillBind5914)
        : Math.max(
            1e-6,
            Math.min(fillBind5909, fillBind5910, fillBind5911, fillBind5912),
          );
      break;
    case gradientPathTypeEnum.GRADIENT_PATH_TYPE_RECT:
      fillBind5919 = fillBind5918
        ? Math.max(1e-6, fillBind5914)
        : Math.max(1e-6, fillBind5915);
      break;
    case gradientPathTypeEnum.GRADIENT_PATH_TYPE_SHAPE:
    case gradientPathTypeEnum.GRADIENT_PATH_TYPE_UNSPECIFIED:
    case gradientPathTypeEnum.UNRECOGNIZED:
    default:
      fillBind5919 = Math.max(1e-6, fillBind5914);
      break;
  }
  let fillBind5920 = radIn924.createRadialGradient(
      fillBind5903,
      fillBind5904,
      0,
      fillBind5903,
      fillBind5904,
      fillBind5919,
    ),
    fillBind5921 = radIn926.gradientStops ?? [];
  if (fillBind5921.length === 0) {
    let fillBind19582 = resolveColorToCssRgba(radIn926.color, radIn927, {
      colorSpace: radIn928?.colorSpace,
      defaultFill: "transparent",
    });
    return (
      fillBind5920.addColorStop(0, fillBind19582),
      fillBind5920.addColorStop(1, fillBind19582),
      fillBind5920
    );
  }
  return (
    applyGradientColorStops(fillBind5920, fillBind5921, radIn927, radIn928),
    fillBind5920
  );
}
export const ensureRadialGradientFillInit = esmInit(() => {
  wr();
  ensureCssNamedColorsInit();
  ensureGradientBlendInit();
});
