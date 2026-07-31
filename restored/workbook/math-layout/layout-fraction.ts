// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout math fraction (legacy Cse).

import { MathFractionKind } from "../math-plain-text/math-proto-enums";
import { getMathLayoutConstants, scaleMathConstantToPx } from "../font-stack";
import { layoutMathNode } from "./layout-math-node";
import { MATH_BAR_CLEARANCE_FACTOR, MATH_RADICAL_DEGREE_SIZE_FACTOR } from "./layout-tuning";
import { emptyMathBox, layoutMathNodeChild } from "./math-box-ops";
import { effectiveInkAscentPx, effectiveInkDescentPx, mathAxisHeightPx } from "./resolve-math-style";
export function layoutMathFraction(mathIn372: unknown, mathIn373: unknown, mathIn374: unknown) {
  let workbookBinding3779 = layoutMathNodeChild(mathIn373, MATH_RADICAL_DEGREE_SIZE_FACTOR),
    workbookBinding3780 = mathIn372.numerator ? layoutMathNode(mathIn372.numerator, workbookBinding3779, mathIn374) : emptyMathBox(workbookBinding3779),
    workbookBinding3781 = mathIn372.denominator ? layoutMathNode(mathIn372.denominator, workbookBinding3779, mathIn374) : emptyMathBox(workbookBinding3779),
    workbookBinding3782 = getMathLayoutConstants(mathIn373.typeface),
    workbookBinding3783 = mathIn372.kind === undefined || mathIn372.kind === MathFractionKind.MATH_FRACTION_KIND_UNSPECIFIED || mathIn372.kind === MathFractionKind.MATH_FRACTION_KIND_BAR,
    workbookBinding3784 = workbookBinding3783 ? Math.max(mathIn373.fontPx * MATH_BAR_CLEARANCE_FACTOR, scaleMathConstantToPx(workbookBinding3782.minConnectorOverlap, mathIn373.fontPx, workbookBinding3782) * 0.25) : 0,
    workbookBinding3785 = Math.max(workbookBinding3780.widthPx, workbookBinding3781.widthPx) + workbookBinding3784 * 2,
    workbookBinding3786 = 0,
    workbookBinding3787 = 0,
    workbookBinding3788,
    workbookBinding3789 = 0;
  if (workbookBinding3783) {
    workbookBinding3789 = Math.max(1, scaleMathConstantToPx(workbookBinding3782.fractionRuleThickness, mathIn373.fontPx, workbookBinding3782));
    let workbookBinding7923 = mathAxisHeightPx(mathIn373),
      workbookBinding7924 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.fractionNumeratorDisplayStyleShiftUp : workbookBinding3782.fractionNumeratorShiftUp, mathIn373.fontPx, workbookBinding3782),
      workbookBinding7925 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.fractionDenominatorDisplayStyleShiftDown : workbookBinding3782.fractionDenominatorShiftDown, mathIn373.fontPx, workbookBinding3782),
      workbookBinding7926 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.fractionNumeratorDisplayStyleGapMin : workbookBinding3782.fractionNumeratorGapMin, mathIn373.fontPx, workbookBinding3782),
      workbookBinding7927 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.fractionDenominatorDisplayStyleGapMin : workbookBinding3782.fractionDenominatorGapMin, mathIn373.fontPx, workbookBinding3782),
      workbookBinding7928 = -workbookBinding7923 - workbookBinding3789 / 2,
      workbookBinding7929 = -workbookBinding7923 + workbookBinding3789 / 2;
    workbookBinding3786 = -workbookBinding7924;
    workbookBinding3787 = workbookBinding7925;
    let workbookBinding7930 = workbookBinding7928 - (workbookBinding3786 + effectiveInkDescentPx(workbookBinding3780));
    workbookBinding7930 < workbookBinding7926 && (workbookBinding3786 -= workbookBinding7926 - workbookBinding7930);
    let workbookBinding7931 = workbookBinding3787 - effectiveInkAscentPx(workbookBinding3781) - workbookBinding7929;
    workbookBinding7931 < workbookBinding7927 && (workbookBinding3787 += workbookBinding7927 - workbookBinding7931);
    workbookBinding3788 = -workbookBinding7923;
  } else {
    let workbookBinding11029 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.stackTopDisplayStyleShiftUp : workbookBinding3782.stackTopShiftUp, mathIn373.fontPx, workbookBinding3782),
      workbookBinding11030 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.stackBottomDisplayStyleShiftDown : workbookBinding3782.stackBottomShiftDown, mathIn373.fontPx, workbookBinding3782),
      workbookBinding11031 = scaleMathConstantToPx(mathIn374.displayStyle === "block" ? workbookBinding3782.stackDisplayStyleGapMin : workbookBinding3782.stackGapMin, mathIn373.fontPx, workbookBinding3782);
    workbookBinding3786 = -workbookBinding11029;
    workbookBinding3787 = workbookBinding11030;
    let workbookBinding11032 = workbookBinding3787 - effectiveInkAscentPx(workbookBinding3781) - (workbookBinding3786 + effectiveInkDescentPx(workbookBinding3780));
    if (workbookBinding11032 < workbookBinding11031) {
      let workbookBinding22666 = workbookBinding11031 - workbookBinding11032;
      workbookBinding3786 -= workbookBinding22666 / 2;
      workbookBinding3787 += workbookBinding22666 / 2;
    }
  }
  let workbookBinding3790 = Math.min(workbookBinding3786 - workbookBinding3780.ascentPx, workbookBinding3783 && workbookBinding3788 !== undefined ? workbookBinding3788 - workbookBinding3789 / 2 : 1 / 0),
    workbookBinding3791 = Math.max(workbookBinding3787 + workbookBinding3781.descentPx, workbookBinding3783 && workbookBinding3788 !== undefined ? workbookBinding3788 + workbookBinding3789 / 2 : -1 / 0),
    workbookBinding3792 = Math.max(0, -workbookBinding3790),
    workbookBinding3793 = Math.max(0, workbookBinding3791);
  return {
    widthPx: workbookBinding3785,
    ascentPx: workbookBinding3792,
    descentPx: workbookBinding3793,
    primaryFont: workbookBinding3780.primaryFont || workbookBinding3781.primaryFont,
    primaryFontKey: workbookBinding3780.primaryFontKey || workbookBinding3781.primaryFontKey,
    fontPx: mathIn373.fontPx,
    fill: mathIn373.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding3785,
    inkAscentPx: workbookBinding3792,
    inkDescentPx: workbookBinding3793,
    draw: (mathIn4135, mathIn4136, mathIn4137) => {
      let workbookBinding13124 = mathIn4136 + (workbookBinding3785 - workbookBinding3780.widthPx) / 2,
        workbookBinding13125 = mathIn4136 + (workbookBinding3785 - workbookBinding3781.widthPx) / 2,
        workbookBinding13126 = mathIn4137 + workbookBinding3786,
        workbookBinding13127 = mathIn4137 + workbookBinding3787;
      if (workbookBinding3780.draw(mathIn4135, workbookBinding13124, workbookBinding13126), workbookBinding3783 && workbookBinding3788 !== undefined) {
        let workbookBinding17500 = mathIn4137 + workbookBinding3788;
        mathIn4135.save();
        mathIn4135.strokeStyle = mathIn373.fill;
        mathIn4135.lineWidth = workbookBinding3789;
        mathIn4135.beginPath();
        mathIn4135.moveTo(mathIn4136, workbookBinding17500);
        mathIn4135.lineTo(mathIn4136 + workbookBinding3785, workbookBinding17500);
        mathIn4135.stroke();
        mathIn4135.restore();
      }
      workbookBinding3781.draw(mathIn4135, workbookBinding13125, workbookBinding13127);
    }
  };
}
