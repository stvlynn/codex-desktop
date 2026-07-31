// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-35: binary-search autofit text scale (legacy zue).

import { measureTextElementMetrics } from "./measure-text-element-metrics";
import type { AutoFitScaleProps } from "./types";

/** Legacy `zue` — binary-search the largest textScale that fits the frame. */
export function computeAutoFitScale(props: AutoFitScaleProps): number {
  let { element, presentation, slide, wrap } = props,
    minScale = props.minScale ?? 0.1,
    maxIterations = props.maxIterations ?? 20,
    lo = minScale,
    hi = 1,
    best = minScale;
  for (let i = 0; i < maxIterations; i += 1) {
    let mid = (lo + hi) / 2,
      metrics = measureTextElementMetrics({
        element,
        presentation,
        slide,
        wrap,
        textScale: mid,
      });
    metrics.maxLineWidthPx <= metrics.contentWidthPx &&
    metrics.textHeightPx <= metrics.contentHeightPx
      ? ((best = mid), (lo = mid))
      : (hi = mid);
  }
  return best;
}
