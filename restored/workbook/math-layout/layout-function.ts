// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout math function name+argument (legacy Dse/Ose).

import { getMathLayoutConstants, scaleMathConstantToPx } from "../font-stack";
import { buildMeasureFontShorthand } from "../font-metrics";
import { layoutMathNode } from "./layout-math-node";
import { MATH_NARY_LIMIT_GAP_FACTOR, MATH_PHANTOM_MIN_SIZE_FACTOR } from "./layout-tuning";
import { emptyMathBox, hboxMathBoxes } from "./math-box-ops";
import { mathAxisHeightPx, mathRunFontDescriptor } from "./resolve-math-style";
export function layoutMathFunction(mathIn1557: unknown, mathIn1558: unknown, mathIn1559: unknown) {
  let workbookBinding7647 = getMathLayoutConstants(mathIn1558.typeface),
    workbookBinding7648 = Math.max(1, scaleMathConstantToPx(workbookBinding7647.radicalRuleThickness, mathIn1558.fontPx, workbookBinding7647)),
    workbookBinding7649 = mathIn1559 + workbookBinding7648 * 2,
    workbookBinding7650 = mathAxisHeightPx(mathIn1558),
    workbookBinding7651 = workbookBinding7649 / 2 + workbookBinding7650,
    workbookBinding7652 = Math.max(0, workbookBinding7649 - workbookBinding7651),
    workbookBinding7653 = Math.max(mathIn1558.fontPx * MATH_PHANTOM_MIN_SIZE_FACTOR, workbookBinding7648 * 4),
    workbookBinding7654 = mathRunFontDescriptor(mathIn1558);
  return {
    widthPx: workbookBinding7653,
    ascentPx: workbookBinding7651,
    descentPx: workbookBinding7652,
    primaryFont: buildMeasureFontShorthand(workbookBinding7654, mathIn1558.fontPx),
    primaryFontKey: `${workbookBinding7654.family}|${workbookBinding7654.style}|${workbookBinding7654.weight}`,
    fontPx: mathIn1558.fontPx,
    fill: mathIn1558.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding7653,
    inkAscentPx: workbookBinding7651,
    inkDescentPx: workbookBinding7652,
    draw: (mathIn3638, mathIn3639, mathIn3640) => {
      let workbookBinding12195 = workbookBinding7648 / 2,
        workbookBinding12196 = mathIn3640 - workbookBinding7651 + workbookBinding12195,
        workbookBinding12197 = mathIn3640 + workbookBinding7652 - workbookBinding12195,
        workbookBinding12198 = mathIn1557 === "[" ? mathIn3639 + workbookBinding12195 : mathIn3639 + workbookBinding7653 - workbookBinding12195,
        workbookBinding12199 = mathIn1557 === "[" ? mathIn3639 + workbookBinding7653 : mathIn3639;
      mathIn3638.save();
      mathIn3638.strokeStyle = mathIn1558.fill;
      mathIn3638.lineWidth = workbookBinding7648;
      mathIn3638.lineCap = "butt";
      mathIn3638.lineJoin = "miter";
      mathIn3638.beginPath();
      mathIn3638.moveTo(workbookBinding12198, workbookBinding12196);
      mathIn3638.lineTo(workbookBinding12198, workbookBinding12197);
      mathIn3638.moveTo(workbookBinding12198, workbookBinding12196);
      mathIn3638.lineTo(workbookBinding12199, workbookBinding12196);
      mathIn3638.moveTo(workbookBinding12198, workbookBinding12197);
      mathIn3638.lineTo(workbookBinding12199, workbookBinding12197);
      mathIn3638.stroke();
      mathIn3638.restore();
    }
  };
}
export function layoutMathFunctionParts(mathIn9022: unknown, mathIn9023: unknown, mathIn9024: unknown) {
  return hboxMathBoxes([mathIn9022.name ? layoutMathNode(mathIn9022.name, mathIn9023, mathIn9024) : emptyMathBox(mathIn9023), mathIn9022.argument ? layoutMathNode(mathIn9022.argument, mathIn9023, mathIn9024) : emptyMathBox(mathIn9023)], mathIn9023, mathIn9023.fontPx * MATH_NARY_LIMIT_GAP_FACTOR);
}
