// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: measure text-element layout metrics (legacy Rue).

import { getFontMeasureContext } from "../font-metrics";
import { resolveElementFramePx } from "../geometry-transform";
import { resolveShapeTextFrameRect } from "../preset-shape";
import { resolvePlaceholderTextStyle } from "../text-style";
import {
  paintTextElement,
  resolveMasterParagraphDefaults,
  resolveTextBoxPaddingPx,
} from "../text-box";
import type {
  TextElementAutofitProps,
  TextElementLayoutMetrics,
} from "./types";

/** Legacy `Rue` — outer / text-frame / content metrics for one text element. */
export function measureTextElementMetrics(props: TextElementAutofitProps, ): TextElementLayoutMetrics {
  let { element, presentation, slide, wrap, textScale } = props,
    { themeMap } = slide.resolveRenderContext(),
    fontMeasure = getFontMeasureContext(),
    outerBboxPx = resolveElementFramePx(element, presentation, slide),
    textFrameBboxPx = resolveShapeTextFrameRect({
      element,
      bboxPx: outerBboxPx,
    }),
    resolvedStyle =
      props.resolvedStyle ??
      resolvePlaceholderTextStyle(element, presentation, slide),
    paddingPx = resolveTextBoxPaddingPx(resolvedStyle),
    layout = paintTextElement(
      element,
      fontMeasure,
      themeMap,
      undefined,
      {
        mode: "layout",
        resolvedStyle,
        masterDefaults: resolveMasterParagraphDefaults(
          element,
          presentation,
          slide,
        ),
        bboxPx: textFrameBboxPx,
        paddingPx,
        textScale,
        wrap,
      },
    ),
    contentWidthPx = Math.max(
      0,
      textFrameBboxPx.width - (paddingPx.left + paddingPx.right),
    ),
    contentHeightPx = Math.max(
      0,
      textFrameBboxPx.height - (paddingPx.top + paddingPx.bottom),
    ),
    maxLineWidthPx = (layout?.lines ?? []).reduce(
      (accumulator: number, current: { widthPx?: number }) =>
        Math.max(accumulator, current.widthPx ?? 0),
      0,
    ),
    textHeightPx = layout?.unrotatedHeight ?? layout?.height ?? 0;
  return {
    outerWidthPx: outerBboxPx.width,
    outerHeightPx: outerBboxPx.height,
    textFrameWidthPx: textFrameBboxPx.width,
    textFrameHeightPx: textFrameBboxPx.height,
    contentWidthPx,
    contentHeightPx,
    maxLineWidthPx,
    textHeightPx,
    paddingPx,
  };
}
