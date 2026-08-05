// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Layout math scripts / place sub/superscripts (legacy Tse).

import { getMathLayoutConstants, scaleMathConstantToPx } from "../font-stack";
import { layoutMathNode } from "./layout-math-node";
import { MATH_SCRIPT_SIZE_FACTOR } from "./layout-tuning";
import { emptyMathBox, layoutMathNodeChild } from "./math-box-ops";
import {
  effectiveInkAscentPx,
  effectiveInkDescentPx,
} from "./resolve-math-style";
export function layoutMathScripts(
  mathIn5462: unknown,
  mathIn5463: unknown,
  mathIn5464: unknown,
) {
  let workbookBinding15264 = mathIn5462.base
      ? layoutMathNode(mathIn5462.base, mathIn5463, mathIn5464)
      : emptyMathBox(mathIn5463),
    workbookBinding15265 = layoutMathNodeChild(
      mathIn5463,
      MATH_SCRIPT_SIZE_FACTOR,
    );
  return placeMathScripts(
    workbookBinding15264,
    mathIn5462.subscript
      ? layoutMathNode(mathIn5462.subscript, workbookBinding15265, mathIn5464)
      : undefined,
    mathIn5462.superscript
      ? layoutMathNode(mathIn5462.superscript, workbookBinding15265, mathIn5464)
      : undefined,
    mathIn5462.presubscript
      ? layoutMathNode(
          mathIn5462.presubscript,
          workbookBinding15265,
          mathIn5464,
        )
      : undefined,
    mathIn5462.presuperscript
      ? layoutMathNode(
          mathIn5462.presuperscript,
          workbookBinding15265,
          mathIn5464,
        )
      : undefined,
    mathIn5463,
  );
}
export function placeMathScripts(
  mathIn673: unknown,
  mathIn674: unknown,
  mathIn675: unknown,
  mathIn676: unknown,
  mathIn677: unknown,
  mathIn678: unknown,
) {
  let workbookBinding4915 = getMathLayoutConstants(mathIn678.typeface),
    workbookBinding4916 = Math.max(
      scaleMathConstantToPx(
        workbookBinding4915.spaceAfterScript,
        mathIn678.fontPx,
        workbookBinding4915,
      ) * 0.75,
      mathIn678.fontPx * 0.04,
    ),
    workbookBinding4917 =
      mathIn674 || mathIn675
        ? scaleMathConstantToPx(
            workbookBinding4915.spaceAfterScript,
            mathIn678.fontPx,
            workbookBinding4915,
          )
        : 0,
    workbookBinding4918 = Math.max(
      mathIn675?.widthPx ?? 0,
      mathIn674?.widthPx ?? 0,
    ),
    workbookBinding4919 = Math.max(
      mathIn677?.widthPx ?? 0,
      mathIn676?.widthPx ?? 0,
    ),
    workbookBinding4920 =
      mathIn675 || mathIn677
        ? scaleMathConstantToPx(
            workbookBinding4915.superscriptShiftUp,
            mathIn678.fontPx,
            workbookBinding4915,
          )
        : 0,
    workbookBinding4921 =
      mathIn674 || mathIn676
        ? scaleMathConstantToPx(
            workbookBinding4915.subscriptShiftDown,
            mathIn678.fontPx,
            workbookBinding4915,
          )
        : 0,
    workbookBinding4922 = mathIn675 ?? mathIn677;
  workbookBinding4922 &&
    (workbookBinding4920 = Math.max(
      workbookBinding4920,
      effectiveInkAscentPx(mathIn673) -
        scaleMathConstantToPx(
          workbookBinding4915.superscriptBaselineDropMax,
          mathIn678.fontPx,
          workbookBinding4915,
        ),
      scaleMathConstantToPx(
        workbookBinding4915.superscriptBottomMin,
        mathIn678.fontPx,
        workbookBinding4915,
      ) + effectiveInkDescentPx(workbookBinding4922),
    ));
  let workbookBinding4923 = mathIn674 ?? mathIn676;
  if (
    (workbookBinding4923 &&
      (workbookBinding4921 = Math.max(
        workbookBinding4921,
        effectiveInkDescentPx(mathIn673) +
          scaleMathConstantToPx(
            workbookBinding4915.subscriptBaselineDropMin,
            mathIn678.fontPx,
            workbookBinding4915,
          ),
        effectiveInkAscentPx(workbookBinding4923) -
          scaleMathConstantToPx(
            workbookBinding4915.subscriptTopMax,
            mathIn678.fontPx,
            workbookBinding4915,
          ),
      )),
    mathIn675 && mathIn674)
  ) {
    let workbookBinding15415 =
        workbookBinding4921 +
        workbookBinding4920 -
        effectiveInkAscentPx(mathIn674) -
        effectiveInkDescentPx(mathIn675),
      workbookBinding15416 = scaleMathConstantToPx(
        workbookBinding4915.subSuperscriptGapMin,
        mathIn678.fontPx,
        workbookBinding4915,
      );
    if (workbookBinding15415 < workbookBinding15416) {
      let workbookBinding18012 = workbookBinding15416 - workbookBinding15415,
        workbookBinding18013 =
          workbookBinding4920 - effectiveInkDescentPx(mathIn675),
        workbookBinding18014 = Math.max(
          0,
          scaleMathConstantToPx(
            workbookBinding4915.superscriptBottomMaxWithSubscript,
            mathIn678.fontPx,
            workbookBinding4915,
          ) - workbookBinding18013,
        ),
        workbookBinding18015 = Math.min(
          workbookBinding18012,
          workbookBinding18014,
        );
      workbookBinding4920 += workbookBinding18015;
      workbookBinding4921 += workbookBinding18012 - workbookBinding18015;
    }
  }
  let workbookBinding4924 = Math.max(
      mathIn673.ascentPx,
      mathIn675 ? workbookBinding4920 + mathIn675.ascentPx : 0,
      mathIn677 ? workbookBinding4920 + mathIn677.ascentPx : 0,
    ),
    workbookBinding4925 = Math.max(
      mathIn673.descentPx,
      mathIn674 ? workbookBinding4921 + mathIn674.descentPx : 0,
      mathIn676 ? workbookBinding4921 + mathIn676.descentPx : 0,
    ),
    workbookBinding4926 =
      workbookBinding4919 +
      (workbookBinding4919 > 0 ? workbookBinding4916 : 0) +
      mathIn673.widthPx +
      (workbookBinding4918 > 0 ? workbookBinding4916 : 0) +
      workbookBinding4918 +
      workbookBinding4917,
    workbookBinding4927 =
      workbookBinding4919 + (workbookBinding4919 > 0 ? workbookBinding4916 : 0),
    workbookBinding4928 =
      workbookBinding4927 +
      mathIn673.widthPx +
      (workbookBinding4918 > 0 ? workbookBinding4916 : 0);
  return {
    widthPx: workbookBinding4926,
    ascentPx: workbookBinding4924,
    descentPx: workbookBinding4925,
    primaryFont: mathIn673.primaryFont,
    primaryFontKey: mathIn673.primaryFontKey,
    fontPx: mathIn678.fontPx,
    fill: mathIn678.fill,
    inkLeftPx: 0,
    inkRightPx: workbookBinding4926,
    inkAscentPx: workbookBinding4924,
    inkDescentPx: workbookBinding4925,
    draw: (mathIn7174, mathIn7175, mathIn7176) => {
      let workbookBinding17526 = mathIn7175;
      mathIn677 &&
        mathIn677.draw(
          mathIn7174,
          workbookBinding17526 + workbookBinding4919 - mathIn677.widthPx,
          mathIn7176 - workbookBinding4920,
        );
      mathIn676 &&
        mathIn676.draw(
          mathIn7174,
          workbookBinding17526 + workbookBinding4919 - mathIn676.widthPx,
          mathIn7176 + workbookBinding4921,
        );
      mathIn673.draw(mathIn7174, mathIn7175 + workbookBinding4927, mathIn7176);
      mathIn675 &&
        mathIn675.draw(
          mathIn7174,
          mathIn7175 + workbookBinding4928,
          mathIn7176 - workbookBinding4920,
        );
      mathIn674 &&
        mathIn674.draw(
          mathIn7174,
          mathIn7175 + workbookBinding4928,
          mathIn7176 + workbookBinding4921,
        );
    },
  };
}
