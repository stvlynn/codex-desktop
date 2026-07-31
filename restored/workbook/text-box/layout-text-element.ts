// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-22: layout text element via math or TextLayoutEngine (legacy workbookQ).

import { paragraphIsPureMath, layoutParagraphMath } from "../math-layout";
import { resolveTextElementLayoutBox } from "./text-element-layout-box";
import {
  textBoxFontMetrics,
  textBoxMeasureCache,
  textBoxLayoutEngine,
} from "./ensure-text-box-cluster-init";
export function layoutTextElement(
  tbIn1737: unknown,
  tbIn1738: unknown,
  tbIn1739: unknown,
) {
  if (!tbIn1737.paragraphs || tbIn1737.paragraphs.length === 0) return;
  let { elementStyle, box } = resolveTextElementLayoutBox(tbIn1737, tbIn1739),
    tbBind8139 = tbIn1738.colorMap?.tx1 ?? "#000000";
  if (paragraphIsPureMath(tbIn1737)) {
    let tbBind16035 = layoutParagraphMath({
      element: tbIn1737,
      elementStyle,
      themeMap: tbIn1738,
      defaultTextFill: tbBind8139,
      textScale: tbIn1739?.textScale ?? 1,
      boxWidthPx: box.width,
      boxHeightPx: box.height,
      fontMetrics: textBoxFontMetrics,
      measureCache: textBoxMeasureCache,
    });
    return tbBind16035?.length
      ? {
          lines: tbBind16035,
        }
      : undefined;
  }
  let tbBind8140 = textBoxLayoutEngine.layout({
    element: tbIn1737,
    elementStyle,
    themeMap: tbIn1738,
    defaultTextFill: tbBind8139,
    textScale: tbIn1739?.textScale ?? 1,
    wrap: tbIn1739?.wrap ?? true,
    boxWidthPx: box.width,
    defaultTabStopTwips: tbIn1739?.defaultTabStopTwips,
    masterDefaults: tbIn1739?.masterDefaults,
    paragraphSpacingUnit: tbIn1739?.paragraphSpacingUnit,
    layoutProfile: tbIn1739?.layoutProfile,
    documentGridLinePitchTwips: tbIn1739?.documentGridLinePitchTwips,
  });
  if (tbBind8140.lines.length)
    return {
      lines: tbBind8140.lines,
    };
}
