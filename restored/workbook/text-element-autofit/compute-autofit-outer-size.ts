// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: autofit outer width/height (legacy Bue / Vue).

import { measureTextElementMetrics } from "./measure-text-element-metrics";
import type {
  AutoFitOuterSize,
  TextElementAutofitProps,
} from "./types";

/** Legacy `Bue` — outer size needed to fit text at textScale=1. */
export function computeAutoFitOuterSize(props: TextElementAutofitProps, ): AutoFitOuterSize {
  let metrics = measureTextElementMetrics({
      element: props.element,
      presentation: props.presentation,
      slide: props.slide,
      wrap: props.wrap,
      textScale: 1,
      resolvedStyle: props.resolvedStyle,
    }),
    widthRatio = metrics.textFrameWidthPx / metrics.outerWidthPx,
    heightRatio = metrics.textFrameHeightPx / metrics.outerHeightPx,
    contentPlusPadWidth =
      metrics.maxLineWidthPx +
      metrics.paddingPx.left +
      metrics.paddingPx.right,
    contentPlusPadHeight =
      metrics.textHeightPx +
      metrics.paddingPx.top +
      metrics.paddingPx.bottom;
  return {
    width:
      widthRatio > 0
        ? contentPlusPadWidth / widthRatio
        : contentPlusPadWidth,
    height:
      heightRatio > 0
        ? contentPlusPadHeight / heightRatio
        : contentPlusPadHeight,
  };
}

/** Legacy `Vue` — outer height only. */
export function computeAutoFitOuterHeight(props: TextElementAutofitProps, ): number {
  return computeAutoFitOuterSize(props).height;
}
