// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout n-ary operators with limits (legacy Pse).

import { MathLimitPlacement } from "../math-plain-text/math-proto-enums";
import { layoutMathNode } from "./layout-math-node";
import { placeMathScripts } from "./layout-scripts";
import {
  MATH_ACCENT_CLEARANCE_FACTOR,
  MATH_LIMIT_SIZE_FACTOR,
} from "./layout-tuning";
import {
  emptyMathBox,
  hboxMathBoxes,
  layoutMathNodeChild,
} from "./math-box-ops";
import { measureMathGlyphBox } from "./resolve-math-style";
export function layoutMathNary(
  mathIn905: unknown,
  mathIn906: unknown,
  mathIn907: unknown,
) {
  let workbookBinding5740 = mathIn905.operator === "∫" ? 1.35 : 1.58,
    workbookBinding5741 = measureMathGlyphBox(
      mathIn905.operator,
      layoutMathNodeChild(mathIn906, workbookBinding5740),
      mathIn907,
    ),
    workbookBinding5742 = mathIn905.body
      ? layoutMathNode(mathIn905.body, mathIn906, mathIn907)
      : emptyMathBox(mathIn906),
    workbookBinding5743 = layoutMathNodeChild(
      mathIn906,
      MATH_LIMIT_SIZE_FACTOR,
    ),
    workbookBinding5744 =
      !mathIn905.hideSubscript && mathIn905.lowerLimit
        ? layoutMathNode(mathIn905.lowerLimit, workbookBinding5743, mathIn907)
        : undefined,
    workbookBinding5745 =
      !mathIn905.hideSuperscript && mathIn905.upperLimit
        ? layoutMathNode(mathIn905.upperLimit, workbookBinding5743, mathIn907)
        : undefined;
  if (
    !(
      mathIn907.displayStyle === "block" &&
      mathIn905.limitPlacement !==
        MathLimitPlacement.MATH_LIMIT_PLACEMENT_SUB_SUP
    )
  )
    return hboxMathBoxes(
      [
        placeMathScripts(
          workbookBinding5741,
          workbookBinding5744,
          workbookBinding5745,
          undefined,
          undefined,
          mathIn906,
        ),
        workbookBinding5742,
      ],
      mathIn906,
      mathIn906.fontPx * MATH_ACCENT_CLEARANCE_FACTOR,
    );
  let workbookBinding5746 = mathIn906.fontPx * 0.08,
    workbookBinding5747 = Math.max(
      workbookBinding5741.widthPx,
      workbookBinding5745?.widthPx ?? 0,
      workbookBinding5744?.widthPx ?? 0,
    ),
    workbookBinding5748 = mathIn906.fontPx * MATH_ACCENT_CLEARANCE_FACTOR,
    workbookBinding5749 =
      workbookBinding5747 + workbookBinding5748 + workbookBinding5742.widthPx,
    workbookBinding5750 = Math.max(
      workbookBinding5742.ascentPx,
      workbookBinding5741.ascentPx +
        (workbookBinding5745
          ? workbookBinding5746 +
            workbookBinding5745.ascentPx +
            workbookBinding5745.descentPx
          : 0),
    ),
    workbookBinding5751 = Math.max(
      workbookBinding5742.descentPx,
      workbookBinding5741.descentPx +
        (workbookBinding5744
          ? workbookBinding5746 +
            workbookBinding5744.ascentPx +
            workbookBinding5744.descentPx
          : 0),
    );
  return {
    widthPx: workbookBinding5749,
    ascentPx: workbookBinding5750,
    descentPx: workbookBinding5751,
    primaryFont: workbookBinding5741.primaryFont,
    primaryFontKey: workbookBinding5741.primaryFontKey,
    fontPx: mathIn906.fontPx,
    fill: mathIn906.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding5749,
    inkAscentPx: workbookBinding5750,
    inkDescentPx: workbookBinding5751,
    draw: (mathIn4771, mathIn4772, mathIn4773) => {
      let workbookBinding14119 = mathIn4772,
        workbookBinding14120 =
          workbookBinding14119 +
          (workbookBinding5747 - workbookBinding5741.widthPx) / 2;
      if (
        (workbookBinding5741.draw(mathIn4771, workbookBinding14120, mathIn4773),
        workbookBinding5745)
      ) {
        let workbookBinding21093 =
            workbookBinding14119 +
            (workbookBinding5747 - workbookBinding5745.widthPx) / 2,
          workbookBinding21094 =
            mathIn4773 -
            workbookBinding5741.ascentPx -
            workbookBinding5746 -
            workbookBinding5745.descentPx;
        workbookBinding5745.draw(
          mathIn4771,
          workbookBinding21093,
          workbookBinding21094,
        );
      }
      if (workbookBinding5744) {
        let workbookBinding21095 =
            workbookBinding14119 +
            (workbookBinding5747 - workbookBinding5744.widthPx) / 2,
          workbookBinding21096 =
            mathIn4773 +
            workbookBinding5741.descentPx +
            workbookBinding5746 +
            workbookBinding5744.ascentPx;
        workbookBinding5744.draw(
          mathIn4771,
          workbookBinding21095,
          workbookBinding21096,
        );
      }
      workbookBinding5742.draw(
        mathIn4771,
        mathIn4772 + workbookBinding5747 + workbookBinding5748,
        mathIn4773,
      );
    },
  };
}
