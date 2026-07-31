// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout limit / accent / bar constructs (legacy Fse/Ise/Lse).

import { MathAccentPosition, MathBarPosition, MathLimitKind } from "../math-plain-text/math-proto-enums";
import { layoutMathNode } from "./layout-math-node";
import { placeMathScripts } from "./layout-scripts";
import { MATH_SCRIPT_SIZE_FACTOR } from "./layout-tuning";
import { emptyMathBox, layoutMathNodeChild } from "./math-box-ops";
import { measureMathGlyphBox } from "./resolve-math-style";
export function layoutMathLimit(mathIn6244: unknown, mathIn6245: unknown, mathIn6246: unknown) {
  let workbookBinding16356 = mathIn6244.base ? layoutMathNode(mathIn6244.base, mathIn6245, mathIn6246) : emptyMathBox(mathIn6245),
    workbookBinding16357 = mathIn6244.limit ? layoutMathNode(mathIn6244.limit, layoutMathNodeChild(mathIn6245, MATH_SCRIPT_SIZE_FACTOR), mathIn6246) : undefined;
  return placeMathScripts(workbookBinding16356, mathIn6244.kind === MathLimitKind.MATH_LIMIT_KIND_LOWER ? workbookBinding16357 : undefined, mathIn6244.kind === MathLimitKind.MATH_LIMIT_KIND_UPPER ? workbookBinding16357 : undefined, undefined, undefined, mathIn6245);
}
export function layoutMathAccent(mathIn1482: unknown, mathIn1483: unknown, mathIn1484: unknown) {
  let workbookBinding7426 = mathIn1482.base ? layoutMathNode(mathIn1482.base, mathIn1483, mathIn1484) : emptyMathBox(mathIn1483),
    workbookBinding7427 = measureMathGlyphBox(mathIn1482.character || "¯", layoutMathNodeChild(mathIn1483, 0.82), mathIn1484),
    workbookBinding7428 = mathIn1483.fontPx * 0.04,
    workbookBinding7429 = mathIn1482.position === MathAccentPosition.MATH_ACCENT_POSITION_BOTTOM ? workbookBinding7426.ascentPx : workbookBinding7426.ascentPx + workbookBinding7427.ascentPx + workbookBinding7427.descentPx + workbookBinding7428,
    workbookBinding7430 = mathIn1482.position === MathAccentPosition.MATH_ACCENT_POSITION_BOTTOM ? workbookBinding7426.descentPx + workbookBinding7427.ascentPx + workbookBinding7427.descentPx + workbookBinding7428 : workbookBinding7426.descentPx;
  return {
    widthPx: Math.max(workbookBinding7426.widthPx, workbookBinding7427.widthPx),
    ascentPx: workbookBinding7429,
    descentPx: workbookBinding7430,
    primaryFont: workbookBinding7426.primaryFont,
    primaryFontKey: workbookBinding7426.primaryFontKey,
    fontPx: mathIn1483.fontPx,
    fill: mathIn1483.fill,
    inkLeftPx: 0,
    inkRightPx: Math.max(workbookBinding7426.widthPx, workbookBinding7427.widthPx),
    inkAscentPx: workbookBinding7429,
    inkDescentPx: workbookBinding7430,
    draw: (mathIn5330, mathIn5331, mathIn5332) => {
      let workbookBinding15010 = mathIn5331 + (Math.max(workbookBinding7426.widthPx, workbookBinding7427.widthPx) - workbookBinding7427.widthPx) / 2,
        workbookBinding15011 = mathIn5331 + (Math.max(workbookBinding7426.widthPx, workbookBinding7427.widthPx) - workbookBinding7426.widthPx) / 2;
      workbookBinding7426.draw(mathIn5330, workbookBinding15011, mathIn5332);
      mathIn1482.position === MathAccentPosition.MATH_ACCENT_POSITION_BOTTOM ? workbookBinding7427.draw(mathIn5330, workbookBinding15010, mathIn5332 + workbookBinding7426.descentPx + workbookBinding7428 + workbookBinding7427.ascentPx) : workbookBinding7427.draw(mathIn5330, workbookBinding15010, mathIn5332 - workbookBinding7426.ascentPx - workbookBinding7428 - workbookBinding7427.descentPx);
    }
  };
}
export function layoutMathBar(mathIn1646: unknown, mathIn1647: unknown, mathIn1648: unknown) {
  let workbookBinding7877 = mathIn1646.base ? layoutMathNode(mathIn1646.base, mathIn1647, mathIn1648) : emptyMathBox(mathIn1647),
    workbookBinding7878 = mathIn1647.fontPx * 0.05,
    workbookBinding7879 = Math.max(1, mathIn1647.fontPx * 0.04),
    workbookBinding7880 = mathIn1646.position === MathBarPosition.MATH_BAR_POSITION_BOTTOM ? workbookBinding7877.ascentPx : workbookBinding7877.ascentPx + workbookBinding7878 + workbookBinding7879,
    workbookBinding7881 = mathIn1646.position === MathBarPosition.MATH_BAR_POSITION_BOTTOM ? workbookBinding7877.descentPx + workbookBinding7878 + workbookBinding7879 : workbookBinding7877.descentPx;
  return {
    widthPx: workbookBinding7877.widthPx,
    ascentPx: workbookBinding7880,
    descentPx: workbookBinding7881,
    primaryFont: workbookBinding7877.primaryFont,
    primaryFontKey: workbookBinding7877.primaryFontKey,
    fontPx: mathIn1647.fontPx,
    fill: mathIn1647.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding7877.widthPx,
    inkAscentPx: workbookBinding7880,
    inkDescentPx: workbookBinding7881,
    draw: (mathIn5047, mathIn5048, mathIn5049) => {
      workbookBinding7877.draw(mathIn5047, mathIn5048, mathIn5049);
      let workbookBinding14498 = mathIn1646.position === MathBarPosition.MATH_BAR_POSITION_BOTTOM ? mathIn5049 + workbookBinding7877.descentPx + workbookBinding7878 : mathIn5049 - workbookBinding7877.ascentPx - workbookBinding7878;
      mathIn5047.save();
      mathIn5047.strokeStyle = mathIn1647.fill;
      mathIn5047.lineWidth = workbookBinding7879;
      mathIn5047.beginPath();
      mathIn5047.moveTo(mathIn5048, workbookBinding14498);
      mathIn5047.lineTo(mathIn5048 + workbookBinding7877.widthPx, workbookBinding14498);
      mathIn5047.stroke();
      mathIn5047.restore();
    }
  };
}
