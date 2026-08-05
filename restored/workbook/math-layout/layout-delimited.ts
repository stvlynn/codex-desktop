// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout delimited / fence expressions (legacy Ese).

import { MathTokenKind } from "../math-plain-text/math-proto-enums";
import { getMathLayoutConstants, scaleMathConstantToPx } from "../font-stack";
import { layoutMathFunction } from "./layout-function";
import { layoutMathNode } from "./layout-math-node";
import {
  MATH_DELIMITER_GAP_FACTOR,
  MATH_EQARRAY_LINE_GAP_FACTOR,
  MATH_SCRIPT_MIN_GAP_PX,
} from "./layout-tuning";
import {
  atomClassPair,
  leftmostMathAtomNode,
  measureStyledGlyphBox,
  rightmostMathAtomNode,
} from "./math-atom-classes";
import {
  atomSpacingForClasses,
  italicCorrectionGapPx,
} from "./math-atom-spacing";
import { hboxMathBoxes, layoutMathNodeChild } from "./math-box-ops";
import { measureMathGlyphBox } from "./resolve-math-style";
export function layoutMathDelimited(
  mathIn519: unknown,
  mathIn520: unknown,
  mathIn521: unknown,
) {
  let workbookBinding4316 = getMathLayoutConstants(mathIn520.typeface),
    workbookBinding4317 = mathIn519.items.map((item) =>
      layoutMathNode(item, mathIn520, mathIn521),
    ),
    workbookBinding4318 =
      mathIn519.separatorDelimiter && mathIn519.separatorDelimiter.length > 0
        ? measureMathGlyphBox(
            mathIn519.separatorDelimiter,
            mathIn520,
            mathIn521,
          )
        : undefined,
    workbookBinding4319 = [];
  workbookBinding4317.forEach((item, index) => {
    index > 0 &&
      workbookBinding4318 &&
      workbookBinding4319.push(workbookBinding4318);
    workbookBinding4319.push(item);
  });
  let workbookBinding4320 = hboxMathBoxes(
      workbookBinding4319,
      mathIn520,
      mathIn520.fontPx * 0.04,
    ),
    workbookBinding4321 =
      (!mathIn519.beginDelimiter || mathIn519.beginDelimiter.length === 0) &&
      (!mathIn519.endDelimiter || mathIn519.endDelimiter.length === 0),
    workbookBinding4322 = workbookBinding4321
      ? "("
      : (mathIn519.beginDelimiter ?? ""),
    workbookBinding4323 = workbookBinding4321
      ? ")"
      : (mathIn519.endDelimiter ?? ""),
    workbookBinding4324 = mathIn520.fontPx,
    workbookBinding4325 =
      workbookBinding4320.ascentPx + workbookBinding4320.descentPx,
    workbookBinding4326 =
      workbookBinding4325 >
      scaleMathConstantToPx(
        workbookBinding4316.delimitedSubFormulaMinHeight,
        mathIn520.fontPx,
        workbookBinding4316,
      )
        ? Math.min(
            MATH_SCRIPT_MIN_GAP_PX,
            workbookBinding4325 / Math.max(workbookBinding4324, 1),
          )
        : 1,
    workbookBinding4327 = workbookBinding4322
      ? delimiterGapParams(
          workbookBinding4322,
          mathIn520,
          mathIn521,
          workbookBinding4326,
          workbookBinding4325,
        )
      : undefined,
    workbookBinding4328 = workbookBinding4323
      ? delimiterGapParams(
          workbookBinding4323,
          mathIn520,
          mathIn521,
          workbookBinding4326,
          workbookBinding4325,
        )
      : undefined,
    workbookBinding4329 = leftmostMathAtomNode(mathIn519.items[0]),
    workbookBinding4330 = rightmostMathAtomNode(
      mathIn519.items[mathIn519.items.length - 1],
    ),
    workbookBinding4331 =
      workbookBinding4327 && workbookBinding4329
        ? Math.max(
            mathIn520.fontPx * MATH_DELIMITER_GAP_FACTOR,
            atomSpacingForClasses(
              "open",
              measureStyledGlyphBox(workbookBinding4329),
              mathIn520,
            ),
          )
        : 0,
    workbookBinding4332 =
      workbookBinding4328 && workbookBinding4330
        ? Math.max(
            mathIn520.fontPx * MATH_DELIMITER_GAP_FACTOR,
            italicCorrectionGapPx(
              workbookBinding4330,
              atomClassPair(
                workbookBinding4323,
                MathTokenKind.MATH_TOKEN_KIND_OPERATOR,
              ),
              workbookBinding4317[workbookBinding4317.length - 1] ??
                workbookBinding4320,
              measureStyledGlyphBox(workbookBinding4330),
              "close",
              mathIn520,
            ),
          )
        : 0,
    workbookBinding4333 =
      workbookBinding4327 && workbookBinding4328
        ? [workbookBinding4331, workbookBinding4332]
        : workbookBinding4327
          ? [workbookBinding4331]
          : workbookBinding4328
            ? [workbookBinding4332]
            : [],
    workbookBinding4334 =
      (workbookBinding4320.descentPx - workbookBinding4320.ascentPx) / 2,
    workbookBinding4335 = workbookBinding4327
      ? workbookBinding4334 -
        (workbookBinding4327.descentPx - workbookBinding4327.ascentPx) / 2
      : 0,
    workbookBinding4336 = workbookBinding4328
      ? workbookBinding4334 -
        (workbookBinding4328.descentPx - workbookBinding4328.ascentPx) / 2
      : 0,
    workbookBinding4337 = workbookBinding4327
      ? workbookBinding4327.widthPx + (workbookBinding4333[0] ?? 0)
      : 0,
    workbookBinding4338 =
      workbookBinding4337 +
      workbookBinding4320.widthPx +
      (workbookBinding4327 && workbookBinding4328
        ? (workbookBinding4333[1] ?? 0)
        : workbookBinding4327
          ? 0
          : (workbookBinding4333[0] ?? 0)),
    workbookBinding4339 =
      (workbookBinding4327?.widthPx ?? 0) +
      workbookBinding4320.widthPx +
      (workbookBinding4328?.widthPx ?? 0) +
      workbookBinding4333.reduce(
        (accumulator, current) => accumulator + current,
        0,
      ),
    workbookBinding4340 = Math.min(
      -workbookBinding4320.ascentPx,
      workbookBinding4327
        ? workbookBinding4335 - workbookBinding4327.ascentPx
        : 1 / 0,
      workbookBinding4328
        ? workbookBinding4336 - workbookBinding4328.ascentPx
        : 1 / 0,
    ),
    workbookBinding4341 = Math.max(
      workbookBinding4320.descentPx,
      workbookBinding4327
        ? workbookBinding4335 + workbookBinding4327.descentPx
        : -1 / 0,
      workbookBinding4328
        ? workbookBinding4336 + workbookBinding4328.descentPx
        : -1 / 0,
    ),
    workbookBinding4342 = Math.max(0, -workbookBinding4340),
    workbookBinding4343 = Math.max(0, workbookBinding4341),
    workbookBinding4344 = workbookBinding4327 ?? workbookBinding4320;
  return {
    widthPx: workbookBinding4339,
    ascentPx: workbookBinding4342,
    descentPx: workbookBinding4343,
    primaryFont: workbookBinding4344.primaryFont,
    primaryFontKey: workbookBinding4344.primaryFontKey,
    fontPx: workbookBinding4344.fontPx,
    fill: workbookBinding4344.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding4339,
    inkAscentPx: workbookBinding4342,
    inkDescentPx: workbookBinding4343,
    draw: (mathIn10553, mathIn10554, mathIn10555) => {
      workbookBinding4327 &&
        workbookBinding4327.draw(
          mathIn10553,
          mathIn10554,
          mathIn10555 + workbookBinding4335,
        );
      workbookBinding4320.draw(
        mathIn10553,
        mathIn10554 + workbookBinding4337,
        mathIn10555,
      );
      workbookBinding4328 &&
        workbookBinding4328.draw(
          mathIn10553,
          mathIn10554 + workbookBinding4338,
          mathIn10555 + workbookBinding4336,
        );
    },
  };
}
export function delimiterGapParams(
  mathIn10369: unknown,
  mathIn10370: unknown,
  mathIn10371: unknown,
  mathIn10372: unknown,
  mathIn10373: unknown,
) {
  return (mathIn10369 === "[" || mathIn10369 === "]") &&
    mathIn10373 > mathIn10370.fontPx * MATH_EQARRAY_LINE_GAP_FACTOR
    ? layoutMathFunction(mathIn10369, mathIn10370, mathIn10373)
    : measureMathGlyphBox(
        mathIn10369,
        layoutMathNodeChild(mathIn10370, mathIn10372),
        mathIn10371,
      );
}
