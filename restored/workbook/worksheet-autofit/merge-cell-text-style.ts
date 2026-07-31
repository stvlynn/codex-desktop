// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: solid fill + merge cell text-style overrides (legacy Tle / Binding232 / Binding587).

import { esmInit } from "../../runtime/rolldown-runtime";
import { tr, wr } from "../presentation-protobuf";
export function solidFillFromColor(afIn10557: unknown) {
  return {
    color: afIn10557,
    type: tr.FILL_TYPE_SOLID,
    gradientStops: [],
    pictureEffects: []
  };
}
export function mergeCellTextStyleOverrides({
  currentTextStyle,
  baseStyle,
  baseStyleFontColor,
  tableCellStyle,
  pivotFontColor,
  pivotBold,
  conditionalFormattingTextColor,
  numberFormatColorOverride
}: unknown) {
  let afBind10562 = {},
    afBind10563 = baseStyle.fontSources?.color === "cell" ? baseStyleFontColor : null,
    afBind10564 = baseStyle.fontSources?.color === "cell" ? null : baseStyleFontColor;
  pivotBold || tableCellStyle?.font?.bold === true ? afBind10562.bold = true : currentTextStyle.bold == null ? tableCellStyle?.font?.bold == null ? baseStyle.font?.bold != null && (afBind10562.bold = !!baseStyle.font.bold) : afBind10562.bold = tableCellStyle.font.bold : afBind10562.bold = currentTextStyle.bold;
  let afBind10565 = conditionalFormattingTextColor ?? numberFormatColorOverride ?? pivotFontColor ?? afBind10563 ?? tableCellStyle?.font?.color ?? currentTextStyle.fill?.color ?? afBind10564 ?? null;
  return afBind10565 && (afBind10562.fill = solidFillFromColor(afBind10565)), afBind10562;
}
export var ensureMergeCellTextStyleInit = esmInit(() => {
  wr();
});
