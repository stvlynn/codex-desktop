// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-26: measure default spreadsheet digit width (legacy Binding228 + Binding578–581).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  getFontMeasureContext,
  buildMeasureFontShorthand,
  ensureFontMetricsInit,
} from "../font-metrics";
import { resolveCssFontStack, ensureCssFontStackInit } from "../font-stack";
export function measureDefaultDigitWidthPx(xfIn4836: unknown) {
  let xfBind14211 = xfIn4836[0]?.font,
    xfBind14212 = {
      style: xfBind14211?.italic ? "italic" : "normal",
      weight: xfBind14211?.bold ? "700" : "normal",
      family: resolveCssFontStack(xfBind14211?.family, "spreadsheet"),
    },
    xfBind14213 = xfBind14211?.size ?? DEFAULT_DIGIT_FONT_SIZE_PX,
    xfBind14214;
  try {
    xfBind14214 = getFontMeasureContext();
  } catch {
    return FALLBACK_DIGIT_WIDTH_PX;
  }
  xfBind14214.font = buildMeasureFontShorthand(xfBind14212, xfBind14213);
  let xfBind14215 = 0;
  for (let xfBind22768 of DIGIT_MEASURE_CHARS)
    xfBind14215 = Math.max(
      xfBind14215,
      xfBind14214.measureText(xfBind22768).width,
    );
  return xfBind14215 > 0 ? xfBind14215 : FALLBACK_DIGIT_WIDTH_PX;
}
export var DEFAULT_DIGIT_FONT_SIZE_PX,
  FALLBACK_DIGIT_WIDTH_PX,
  DIGIT_MEASURE_CHARS,
  ensureDefaultDigitWidthInit = esmInit(() => {
    ensureFontMetricsInit();
    ensureCssFontStackInit();
    DEFAULT_DIGIT_FONT_SIZE_PX = 14.666666666666666;
    FALLBACK_DIGIT_WIDTH_PX = 7;
    DIGIT_MEASURE_CHARS = "0123456789";
  });
