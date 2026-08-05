// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Resolve/scale math run style + font metrics helpers (legacy hse/gse cluster).

import { MathTokenKind } from "../math-plain-text/math-proto-enums";
import {
  resolveCssFontStack,
  getMathLayoutConstants,
  scaleMathConstantToPx,
  hundredthsPointToCssPx,
  GRANOLA_MATH_FONT,
  MATH_FONT_STACK,
} from "../font-stack";
import { quoteCssFontFamily } from "../text-style";
import { buildMeasureFontShorthand } from "../font-metrics";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  isMathVariantGlyphText,
  isNamedMathOperatorToken,
  isOperatorLikeToken,
} from "./math-atom-spacing";
export function resolveMathNodeStyle(
  mathIn5644: unknown,
  mathIn5645: unknown,
  mathIn5646: unknown,
) {
  return {
    fontPx:
      mathIn5644?.fontSize === undefined
        ? mathIn5645.fontPx
        : hundredthsPointToCssPx(mathIn5644.fontSize, mathIn5646.textScale),
    typeface: quoteCssFontFamily(mathIn5644?.typeface) ?? mathIn5645.typeface,
    italic:
      mathIn5644?.italic === undefined ? mathIn5645.italic : mathIn5644.italic,
    bold: mathIn5644?.bold === undefined ? mathIn5645.bold : mathIn5644.bold,
    fill:
      resolveColorToCssRgba(
        mathIn5644?.fill?.color,
        mathIn5646.themeMap,
        mathIn5645.fill,
      ) ?? mathIn5645.fill,
  };
}
export function scaleMathRunStyle(mathIn5188: unknown, mathIn5189: unknown) {
  let workbookBinding14702 = mathIn5188.token;
  if (!workbookBinding14702) return mathIn5189;
  if (
    isOperatorLikeToken(workbookBinding14702) ||
    isMathVariantGlyphText(workbookBinding14702.text)
  )
    return {
      ...mathIn5189,
      italic: false,
    };
  let workbookBinding14703 =
    workbookBinding14702.kind === undefined ||
    workbookBinding14702.kind === MathTokenKind.MATH_TOKEN_KIND_UNSPECIFIED ||
    workbookBinding14702.kind === MathTokenKind.MATH_TOKEN_KIND_SYMBOL ||
    (workbookBinding14702.kind === MathTokenKind.MATH_TOKEN_KIND_IDENTIFIER &&
      !isNamedMathOperatorToken(workbookBinding14702));
  return mathIn5188.style?.italic === undefined
    ? {
        ...mathIn5189,
        italic: workbookBinding14703,
      }
    : mathIn5189;
}
export function measureMathGlyphBox(
  mathIn2327: unknown,
  mathIn2328: unknown,
  mathIn2329: unknown,
) {
  let workbookBinding9457 = mathRunFontDescriptor(mathIn2328),
    workbookBinding9458 = buildMeasureFontShorthand(
      workbookBinding9457,
      mathIn2328.fontPx,
    ),
    workbookBinding9459 =
      mathIn2329.fontMetrics.getFontKey(workbookBinding9457),
    workbookBinding9460 = mathIn2329.fontMetrics.getMetricsForSize(
      workbookBinding9457,
      mathIn2328.fontPx,
    ),
    workbookBinding9461 = mathIn2329.measureCache.measureTokenWidth(
      workbookBinding9458,
      mathIn2327,
    ),
    workbookBinding9462 = mathIn2329.measureCache.measureInkBounds(
      workbookBinding9458,
      mathIn2327,
    );
  return {
    widthPx: workbookBinding9461,
    ascentPx:
      workbookBinding9462.ascentPx > 0
        ? workbookBinding9462.ascentPx
        : workbookBinding9460.ascentPx,
    descentPx:
      workbookBinding9462.descentPx > 0
        ? workbookBinding9462.descentPx
        : workbookBinding9460.descentPx,
    primaryFont: workbookBinding9458,
    primaryFontKey: workbookBinding9459,
    fontPx: mathIn2328.fontPx,
    fill: mathIn2328.fill,
    inkLeftPx: workbookBinding9462.leftPx,
    inkRightPx: workbookBinding9462.rightPx,
    inkAscentPx: workbookBinding9462.ascentPx,
    inkDescentPx: workbookBinding9462.descentPx,
    draw: (mathIn8917, mathIn8918, mathIn8919) => {
      mathIn8917.font = workbookBinding9458;
      mathIn8917.fillStyle = mathIn2328.fill;
      mathIn8917.textAlign = "left";
      mathIn8917.textBaseline = "alphabetic";
      mathIn8917.fillText(mathIn2327, mathIn8918, mathIn8919);
    },
  };
}
export function mathRunFontDescriptor(mathIn9878: unknown) {
  return {
    style: mathIn9878.italic ? "italic" : "normal",
    weight: mathIn9878.bold ? "700" : "normal",
    family: resolveMathFontFamilyStack(mathIn9878.typeface),
  };
}
export function resolveMathFontFamilyStack(mathIn7006: unknown) {
  let workbookBinding17361 = mathIn7006.trim();
  if (!workbookBinding17361) return MATH_FONT_STACK;
  let workbookBinding17362 = workbookBinding17361
    .replace(/^['"]|['"]$/g, "")
    .toLowerCase();
  return workbookBinding17362 === "cambria math" ||
    workbookBinding17362 === "stix two math" ||
    workbookBinding17362 === "granola math"
    ? MATH_FONT_STACK
    : `${resolveCssFontStack(quoteCssFontFamily(workbookBinding17361), "presentation")}, ${MATH_FONT_STACK}`;
}
export function resolveMathTypeface(mathIn13462: unknown) {
  return (
    quoteCssFontFamily(mathIn13462.typeface) ||
    quoteCssFontFamily(mathIn13462.name) ||
    GRANOLA_MATH_FONT
  );
}
export function mathAxisHeightPx(mathIn12166: unknown) {
  let workbookBinding22310 = getMathLayoutConstants(mathIn12166.typeface);
  return scaleMathConstantToPx(
    workbookBinding22310.axisHeight,
    mathIn12166.fontPx,
    workbookBinding22310,
  );
}
export function effectiveInkAscentPx(mathIn12708: unknown) {
  return mathIn12708.inkAscentPx > 0
    ? mathIn12708.inkAscentPx
    : mathIn12708.ascentPx;
}
export function effectiveInkDescentPx(mathIn12533: unknown) {
  return mathIn12533.inkDescentPx > 0
    ? mathIn12533.inkDescentPx
    : mathIn12533.descentPx;
}
