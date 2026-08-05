// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout matrix / equation-array (legacy Rse/Vse).

import { MathMatrixColumnJustification } from "../math-plain-text/math-proto-enums";
import { layoutMathNode } from "./layout-math-node";
import {
  MATH_FRACTION_RULE_OVERLAP_FACTOR,
  MATH_MATRIX_CELL_PAD_FACTOR,
} from "./layout-tuning";
import { emptyMathBox } from "./math-box-ops";
import { mathAxisHeightPx } from "./resolve-math-style";
export function layoutMathMatrix(
  mathIn818: unknown,
  mathIn819: unknown,
  mathIn820: unknown,
) {
  let workbookBinding5458 = mathIn818.rows,
    workbookBinding5459 = Math.max(
      mathIn818.columnCount ?? 0,
      mathIn818.columns.length,
      workbookBinding5458.reduce(
        (accumulator, current) =>
          Math.max(accumulator, current.cells?.length ?? 0),
        0,
      ),
    ),
    workbookBinding5460 = workbookBinding5458.map((item) =>
      Array.from(
        {
          length: workbookBinding5459,
        },
        (mathIn11894, mathIn11895) => {
          let workbookBinding22170 = item.cells?.[mathIn11895];
          return workbookBinding22170
            ? layoutMathNode(workbookBinding22170, mathIn819, mathIn820)
            : emptyMathBox(mathIn819);
        },
      ),
    ),
    workbookBinding5461 = Array.from(
      {
        length: workbookBinding5459,
      },
      (mathIn13035, mathIn13036) =>
        workbookBinding5460.reduce(
          (accumulator, current) =>
            Math.max(accumulator, current[mathIn13036]?.widthPx ?? 0),
          0,
        ),
    ),
    workbookBinding5462 = workbookBinding5460.map((item) => ({
      ascentPx: item.reduce(
        (accumulator, current) => Math.max(accumulator, current.ascentPx),
        0,
      ),
      descentPx: item.reduce(
        (accumulator, current) => Math.max(accumulator, current.descentPx),
        0,
      ),
    })),
    workbookBinding5463 = mathIn819.fontPx * MATH_FRACTION_RULE_OVERLAP_FACTOR,
    workbookBinding5464 = mathIn819.fontPx * MATH_MATRIX_CELL_PAD_FACTOR,
    workbookBinding5465 =
      workbookBinding5461.reduce(
        (accumulator, current) => accumulator + current,
        0,
      ) +
      Math.max(0, workbookBinding5459 - 1) * workbookBinding5463,
    workbookBinding5466 =
      workbookBinding5462.reduce(
        (accumulator, current) =>
          accumulator + current.ascentPx + current.descentPx,
        0,
      ) +
      Math.max(0, workbookBinding5458.length - 1) * workbookBinding5464,
    workbookBinding5467 = mathAxisHeightPx(mathIn819),
    workbookBinding5468 = workbookBinding5466 / 2 + workbookBinding5467,
    workbookBinding5469 = Math.max(
      0,
      workbookBinding5466 - workbookBinding5468,
    ),
    workbookBinding5470 =
      workbookBinding5460[0]?.[0] ?? emptyMathBox(mathIn819);
  return {
    widthPx: workbookBinding5465,
    ascentPx: workbookBinding5468,
    descentPx: workbookBinding5469,
    primaryFont: workbookBinding5470.primaryFont,
    primaryFontKey: workbookBinding5470.primaryFontKey,
    fontPx: mathIn819.fontPx,
    fill: mathIn819.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding5465,
    inkAscentPx: workbookBinding5468,
    inkDescentPx: workbookBinding5469,
    draw: (mathIn3996, mathIn3997, mathIn3998) => {
      let workbookBinding12906 = mathIn3998 - workbookBinding5468;
      for (
        let workbookBinding13759 = 0;
        workbookBinding13759 < workbookBinding5460.length;
        workbookBinding13759 += 1
      ) {
        let workbookBinding14438 = workbookBinding5460[workbookBinding13759],
          workbookBinding14439 = workbookBinding5462[workbookBinding13759];
        if (!workbookBinding14438 || !workbookBinding14439) continue;
        let workbookBinding14440 =
            workbookBinding12906 + workbookBinding14439.ascentPx,
          workbookBinding14441 = mathIn3997;
        for (
          let workbookBinding18911 = 0;
          workbookBinding18911 < workbookBinding5459;
          workbookBinding18911 += 1
        ) {
          let workbookBinding19869 = workbookBinding14438[workbookBinding18911],
            workbookBinding19870 =
              workbookBinding5461[workbookBinding18911] ?? 0;
          workbookBinding19869 &&
            workbookBinding19869.draw(
              mathIn3996,
              workbookBinding14441 +
                matrixCellGapPx(
                  workbookBinding19869,
                  workbookBinding19870,
                  mathIn818.columns[workbookBinding18911]?.justification,
                ),
              workbookBinding14440,
            );
          workbookBinding14441 += workbookBinding19870 + workbookBinding5463;
        }
        workbookBinding12906 +=
          workbookBinding14439.ascentPx +
          workbookBinding14439.descentPx +
          workbookBinding5464;
      }
    },
  };
}
export function matrixCellGapPx(
  mathIn8407: unknown,
  mathIn8408: unknown,
  mathIn8409: unknown,
) {
  return mathIn8409 ===
    MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT
    ? 0
    : mathIn8409 ===
        MathMatrixColumnJustification.MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT
      ? mathIn8408 - mathIn8407.widthPx
      : (mathIn8408 - mathIn8407.widthPx) / 2;
}
export function layoutMatrixRow(
  mathIn11223: unknown,
  mathIn11224: unknown,
  mathIn11225: unknown,
) {
  return layoutEquationArray(
    mathIn11223.map((item) => layoutMathNode(item, mathIn11224, mathIn11225)),
    mathIn11224,
    mathIn11224.fontPx * 0.18,
  );
}
export function layoutEquationArray(
  mathIn2738: unknown,
  mathIn2739: unknown,
  mathIn2740: unknown,
) {
  let workbookBinding10352 = mathIn2738.reduce(
      (accumulator, current) => Math.max(accumulator, current.widthPx),
      0,
    ),
    workbookBinding10353 =
      mathIn2738.reduce(
        (accumulator, current) =>
          accumulator + current.ascentPx + current.descentPx,
        0,
      ) +
      Math.max(0, mathIn2738.length - 1) * mathIn2740,
    workbookBinding10354 = mathIn2738[0] ?? emptyMathBox(mathIn2739);
  return {
    widthPx: workbookBinding10352,
    ascentPx: workbookBinding10353,
    descentPx: 0,
    primaryFont: workbookBinding10354.primaryFont,
    primaryFontKey: workbookBinding10354.primaryFontKey,
    fontPx: mathIn2739.fontPx,
    fill: mathIn2739.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding10352,
    inkAscentPx: workbookBinding10353,
    inkDescentPx: 0,
    draw: (mathIn8167, mathIn8168, mathIn8169) => {
      let workbookBinding18679 = mathIn8169 - workbookBinding10353;
      for (let workbookBinding20136 of mathIn2738) {
        let workbookBinding20640 =
          workbookBinding18679 + workbookBinding20136.ascentPx;
        workbookBinding20136.draw(
          mathIn8167,
          mathIn8168 +
            (workbookBinding10352 - workbookBinding20136.widthPx) / 2,
          workbookBinding20640,
        );
        workbookBinding18679 +=
          workbookBinding20136.ascentPx +
          workbookBinding20136.descentPx +
          mathIn2740;
      }
    },
  };
}
