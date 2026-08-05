// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout math radical (legacy wse).

import { getMathLayoutConstants, scaleMathConstantToPx } from "../font-stack";
import { layoutMathNode } from "./layout-math-node";
import { MATH_SCRIPT_SCRIPT_SIZE_FACTOR } from "./layout-tuning";
import { emptyMathBox, layoutMathNodeChild } from "./math-box-ops";
import {
  effectiveInkAscentPx,
  effectiveInkDescentPx,
  measureMathGlyphBox,
} from "./resolve-math-style";
export function layoutMathRadical(
  mathIn719: unknown,
  mathIn720: unknown,
  mathIn721: unknown,
) {
  let workbookBinding5105 = getMathLayoutConstants(mathIn720.typeface),
    workbookBinding5106 = mathIn719.radicand
      ? layoutMathNode(mathIn719.radicand, mathIn720, mathIn721)
      : emptyMathBox(mathIn720),
    workbookBinding5107 =
      !mathIn719.hideDegree && mathIn719.degree
        ? layoutMathNode(
            mathIn719.degree,
            layoutMathNodeChild(mathIn720, MATH_SCRIPT_SCRIPT_SIZE_FACTOR),
            mathIn721,
          )
        : undefined,
    workbookBinding5108 = Math.max(
      1,
      scaleMathConstantToPx(
        workbookBinding5105.radicalRuleThickness,
        mathIn720.fontPx,
        workbookBinding5105,
      ),
    ),
    workbookBinding5109 = scaleMathConstantToPx(
      mathIn721.displayStyle === "block"
        ? workbookBinding5105.radicalDisplayStyleVerticalGap
        : workbookBinding5105.radicalVerticalGap,
      mathIn720.fontPx,
      workbookBinding5105,
    ),
    workbookBinding5110 = scaleMathConstantToPx(
      workbookBinding5105.radicalExtraAscender,
      mathIn720.fontPx,
      workbookBinding5105,
    ),
    workbookBinding5111 = scaleMathConstantToPx(
      workbookBinding5105.minConnectorOverlap,
      mathIn720.fontPx,
      workbookBinding5105,
    ),
    workbookBinding5112 = measureMathGlyphBox("√", mathIn720, mathIn721),
    workbookBinding5113 =
      effectiveInkAscentPx(workbookBinding5106) +
      effectiveInkDescentPx(workbookBinding5106) +
      workbookBinding5109 +
      workbookBinding5108 +
      workbookBinding5110,
    workbookBinding5114 =
      effectiveInkAscentPx(workbookBinding5112) +
      effectiveInkDescentPx(workbookBinding5112),
    workbookBinding5115 = Math.max(
      1,
      workbookBinding5113 / Math.max(workbookBinding5114, 1),
    ),
    workbookBinding5116 =
      workbookBinding5115 > 1.01
        ? measureMathGlyphBox(
            "√",
            layoutMathNodeChild(mathIn720, workbookBinding5115),
            mathIn721,
          )
        : workbookBinding5112,
    workbookBinding5117 = Math.max(
      workbookBinding5108,
      workbookBinding5111 * 0.35,
    ),
    workbookBinding5118 = Math.max(
      workbookBinding5116.inkRightPx,
      workbookBinding5116.widthPx - workbookBinding5108 * 0.5,
    ),
    workbookBinding5119 = workbookBinding5107
      ? workbookBinding5107.widthPx * 0.55
      : 0,
    workbookBinding5120 = Math.max(
      workbookBinding5111 * 0.45,
      workbookBinding5108,
    ),
    workbookBinding5121 =
      workbookBinding5119 +
      Math.max(0, workbookBinding5118 - workbookBinding5120),
    workbookBinding5122 =
      workbookBinding5119 + workbookBinding5118 + workbookBinding5117,
    workbookBinding5123 = Math.max(
      workbookBinding5119 + workbookBinding5116.widthPx,
      workbookBinding5107?.widthPx ?? 0,
      workbookBinding5122 + workbookBinding5106.widthPx,
    ),
    workbookBinding5124 =
      -effectiveInkAscentPx(workbookBinding5106) -
      workbookBinding5109 -
      workbookBinding5108 / 2,
    workbookBinding5125 = workbookBinding5124 - workbookBinding5108 / 2,
    workbookBinding5126 =
      workbookBinding5125 -
      workbookBinding5110 +
      effectiveInkAscentPx(workbookBinding5116),
    workbookBinding5127 = workbookBinding5107
      ? workbookBinding5126 - workbookBinding5116.ascentPx * 0.42
      : 0,
    workbookBinding5128 = Math.max(
      -Math.min(
        workbookBinding5126 - workbookBinding5116.ascentPx,
        workbookBinding5125 - workbookBinding5110,
        workbookBinding5107
          ? workbookBinding5127 - workbookBinding5107.ascentPx
          : 1 / 0,
      ),
      workbookBinding5106.ascentPx,
    ),
    workbookBinding5129 = Math.max(
      workbookBinding5126 + workbookBinding5116.descentPx,
      workbookBinding5106.descentPx,
      workbookBinding5107
        ? workbookBinding5127 + workbookBinding5107.descentPx
        : -1 / 0,
    );
  return {
    widthPx: workbookBinding5123,
    ascentPx: workbookBinding5128,
    descentPx: workbookBinding5129,
    primaryFont: workbookBinding5116.primaryFont,
    primaryFontKey: workbookBinding5116.primaryFontKey,
    fontPx: mathIn720.fontPx,
    fill: mathIn720.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding5123,
    inkAscentPx: workbookBinding5128,
    inkDescentPx: workbookBinding5129,
    draw: (mathIn4966, mathIn4967, mathIn4968) => {
      workbookBinding5107 &&
        workbookBinding5107.draw(
          mathIn4966,
          mathIn4967,
          mathIn4968 + workbookBinding5127,
        );
      workbookBinding5116.draw(
        mathIn4966,
        mathIn4967 + workbookBinding5119,
        mathIn4968 + workbookBinding5126,
      );
      let workbookBinding14384 = mathIn4967 + workbookBinding5122;
      workbookBinding5106.draw(mathIn4966, workbookBinding14384, mathIn4968);
      let workbookBinding14385 = mathIn4968 + workbookBinding5124;
      mathIn4966.save();
      mathIn4966.strokeStyle = mathIn720.fill;
      mathIn4966.lineWidth = workbookBinding5108;
      mathIn4966.lineCap = "butt";
      mathIn4966.beginPath();
      mathIn4966.moveTo(mathIn4967 + workbookBinding5121, workbookBinding14385);
      mathIn4966.lineTo(
        workbookBinding14384 + workbookBinding5106.widthPx,
        workbookBinding14385,
      );
      mathIn4966.stroke();
      mathIn4966.restore();
    },
  };
}
