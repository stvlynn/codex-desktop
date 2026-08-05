// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: paragraph/run text layout engine (legacy j_).

import { hundredthsPointToCssPx } from "../font-stack";
import {
  DEFAULT_FONT_HUNDREDTHS_POINT,
  UNLIMITED_BOX_WIDTH_PX,
} from "./text-layout-constants";
import {
  resolveLayoutProfile,
  accumulateLineInkBounds,
} from "./line-box-helpers";
import { layoutParagraph } from "./paragraph-layout";
export class TextLayoutEngine {
  fontMetrics;
  measureCache;
  constructor(textIn11827, textIn11828) {
    this.fontMetrics = textIn11827;
    this.measureCache = textIn11828;
  }
  layout(textIn1498) {
    let { element } = textIn1498;
    if (!element.paragraphs || element.paragraphs.length === 0)
      return {
        lines: [],
        contentHeightPx: 0,
      };
    let workbookBinding7489 = [],
      workbookBinding7490 = textIn1498.textScale ?? 1,
      workbookBinding7491 = textIn1498.wrap
        ? textIn1498.boxWidthPx
        : UNLIMITED_BOX_WIDTH_PX,
      workbookBinding7492 = hundredthsPointToCssPx(
        DEFAULT_FONT_HUNDREDTHS_POINT,
        workbookBinding7490,
      ),
      workbookBinding7493 = resolveLayoutProfile(textIn1498),
      workbookBinding7494 = {},
      workbookBinding7495 = 0;
    for (
      let workbookBinding12380 = 0;
      workbookBinding12380 < element.paragraphs.length;
      workbookBinding12380++
    ) {
      let workbookBinding13023 = element.paragraphs[workbookBinding12380];
      workbookBinding13023 &&
        (workbookBinding7495 = this.layoutParagraph({
          element,
          paragraph: workbookBinding13023,
          paraIndex: workbookBinding12380,
          request: textIn1498,
          layoutProfile: workbookBinding7493,
          defaultFontPx: workbookBinding7492,
          effectiveBoxW: workbookBinding7491,
          listCounters: workbookBinding7494,
          lines: workbookBinding7489,
          previousParagraphSpaceAfterPx: workbookBinding7495,
        }));
    }
    return (
      textIn1498.wrap ||
        workbookBinding7489.forEach((item) => {
          accumulateLineInkBounds(item);
        }),
      {
        lines: workbookBinding7489,
        contentHeightPx: workbookBinding7489.reduce(
          (accumulator, current) => accumulator + current.heightPx,
          0,
        ),
      }
    );
  }
  layoutParagraph(params) {
    return layoutParagraph(this.fontMetrics, this.measureCache, params);
  }
}
