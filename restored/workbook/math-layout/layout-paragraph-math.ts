// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-15: Entry: layout a pure-math paragraph into text lines (legacy use entry).

import { MathDisplayMode } from "../math-plain-text/math-proto-enums";
import { mathAstToPlainText } from "../math-plain-text";
import { normalizeMathDocumentViaMathMl } from "../math-ml";
import { mergeStyleLayers } from "../text-style";
import { resolveColorToCssRgba } from "../color-resolve";
import {
  extractSoleMathParagraph,
  firstMathTokenAsTextRun,
  mathAstHasExplicitFontSize,
  mergeInlineMathDocuments,
  resolveMathParagraphAlign,
  textStyleFontSizePx,
} from "./detect-paragraph-math";
import { layoutMathNode } from "./layout-math-node";
import {
  MATH_AUTOFIT_MAX_SCALE,
  MATH_LAYOUT_MAX_FONT_PX,
  MATH_LAYOUT_MIN_FONT_PX,
} from "./layout-tuning";
import { scaleMathBox } from "./math-box-ops";
import { resolveMathTypeface } from "./resolve-math-style";
export function layoutParagraphMath(mathIn540: unknown) {
  let workbookBinding4435 = extractSoleMathParagraph(
    mathIn540.element.paragraphs?.[0],
  );
  if (!workbookBinding4435) return;
  let workbookBinding4436 = normalizeMathDocumentViaMathMl(
    mergeInlineMathDocuments(workbookBinding4435),
  );
  if (!workbookBinding4436?.root) return;
  let workbookBinding4437 = mergeStyleLayers(
      {},
      workbookBinding4435.textStyle,
      mathIn540.elementStyle,
    ),
    workbookBinding4438 = textStyleFontSizePx(
      workbookBinding4437,
      mathIn540.textScale,
    ),
    workbookBinding4439 = resolveColorToCssRgba(
      workbookBinding4437.fill?.color,
      mathIn540.themeMap,
      mathIn540.defaultTextFill,
    ),
    workbookBinding4440 = {
      fontPx:
        workbookBinding4438 ??
        Math.max(
          MATH_LAYOUT_MIN_FONT_PX,
          Math.min(MATH_LAYOUT_MAX_FONT_PX, mathIn540.boxHeightPx * 0.58),
        ),
      typeface: resolveMathTypeface(workbookBinding4437),
      italic: !!workbookBinding4437.italic,
      bold: !!workbookBinding4437.bold,
      fill: workbookBinding4439,
    },
    workbookBinding4441 = {
      themeMap: mathIn540.themeMap,
      defaultTextFill: mathIn540.defaultTextFill,
      textScale: mathIn540.textScale,
      fontMetrics: mathIn540.fontMetrics,
      measureCache: mathIn540.measureCache,
      displayStyle:
        workbookBinding4436.displayMode === undefined ||
        workbookBinding4436.displayMode ===
          MathDisplayMode.MATH_DISPLAY_MODE_BLOCK
          ? "block"
          : "inline",
    },
    workbookBinding4442 = layoutMathNode(
      workbookBinding4436.root,
      workbookBinding4440,
      workbookBinding4441,
    ),
    workbookBinding4443 = mathAstHasExplicitFontSize(workbookBinding4436.root),
    workbookBinding4444 = Math.min(
      mathIn540.boxWidthPx / Math.max(workbookBinding4442.widthPx, 1),
      mathIn540.boxHeightPx /
        Math.max(
          workbookBinding4442.ascentPx + workbookBinding4442.descentPx,
          1,
        ),
    ),
    workbookBinding4445 =
      workbookBinding4438 === undefined && !workbookBinding4443,
    workbookBinding4446 = Number.isFinite(workbookBinding4444)
      ? workbookBinding4445
        ? Math.min(MATH_AUTOFIT_MAX_SCALE, workbookBinding4444 * 0.94)
        : Math.min(1, workbookBinding4444 * 0.96)
      : 1;
  workbookBinding4446 > 0 &&
    Math.abs(workbookBinding4446 - 1) > 0.01 &&
    (workbookBinding4442 = scaleMathBox(
      workbookBinding4442,
      workbookBinding4446,
    ));
  let workbookBinding4447 = resolveMathParagraphAlign(
      workbookBinding4436,
      workbookBinding4437,
    ),
    workbookBinding4448 =
      workbookBinding4435.runs?.[0] ??
      firstMathTokenAsTextRun(workbookBinding4436),
    workbookBinding4449 = mathAstToPlainText(workbookBinding4436),
    workbookBinding4450 = {
      text: workbookBinding4449,
      widthPx: workbookBinding4442.widthPx,
      font: workbookBinding4442.primaryFont,
      fontKey: workbookBinding4442.primaryFontKey,
      fill: workbookBinding4442.fill,
      px: workbookBinding4442.fontPx,
      ascentPx: workbookBinding4442.ascentPx,
      descentPx: workbookBinding4442.descentPx,
      run: workbookBinding4448,
      paraIndex: 0,
      runIndex: 0,
      charStart: 0,
      charEnd: workbookBinding4449.length,
      advance: new Float32Array([0, workbookBinding4442.widthPx]),
      inkLeftPx: workbookBinding4442.inkLeftPx,
      inkRightPx: workbookBinding4442.inkRightPx,
      inkAscentPx: workbookBinding4442.inkAscentPx,
      inkDescentPx: workbookBinding4442.inkDescentPx,
      mathLayout: workbookBinding4442,
    },
    workbookBinding4451 =
      workbookBinding4442.ascentPx + workbookBinding4442.descentPx;
  return [
    {
      segments: [workbookBinding4450],
      widthPx: workbookBinding4442.widthPx,
      heightPx: workbookBinding4451,
      contentHeightPx: workbookBinding4451,
      naturalHeightPx: workbookBinding4451,
      leadingBeforePx: 0,
      leadingAfterPx: 0,
      align: workbookBinding4447,
      offsetPx: 0,
      availableWidthPx: mathIn540.boxWidthPx,
      baselineOffsetPx: workbookBinding4442.ascentPx,
      maxAscentPx: workbookBinding4442.ascentPx,
      maxDescentPx: workbookBinding4442.descentPx,
      maxPx: workbookBinding4451,
      inkLeftPx: workbookBinding4442.inkLeftPx,
      inkRightPx: workbookBinding4442.inkRightPx,
      inkAscentPx: workbookBinding4442.inkAscentPx,
      inkDescentPx: workbookBinding4442.inkDescentPx,
    },
  ];
}
