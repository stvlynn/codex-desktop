// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10: font-family match + OffscreenCanvas metrics + grapheme segmenter.

export {
  officeFontMetricsByFamily,
  normalizeFontFamilyToken,
  splitFontFamilyList,
  parseFontWeightNumber,
  normalizeFontStyle,
  normalizeFontStretch,
  fontStretchMatchIndex,
  fontStyleMatchRank,
  stretchDistanceScore,
  styleDistanceScore,
  weightDistanceScore,
  fontMatchDistance,
  isBetterFontMatch,
  matchOfficeFontFace,
} from "./font-family-match";
export type { FontFaceDescriptor, FontMatchQuery } from "./font-family-match";
export {
  fractionalPart,
  getFontMeasureContext,
  invalidateFontMetricsListeners,
  onFontMetricsInvalidate,
  workbookHt,
  buildMeasureFontShorthand,
  fontFaceCacheKey,
  positiveOr,
  metricsFromBoundingBoxes,
  FontMetricsCache,
  fontMetricsCache,
  ensureFontMetricsInit,
  sharedFamilyAscentFraction,
} from "./font-metrics";
export type { TextMetrics, SizedFontMetrics } from "./font-metrics";
export {
  ensureTextSegmenterInit,
  segmentGraphemes,
} from "./text-segmenter";
export { ensureFontMetricsClusterInit } from "./ensure-font-metrics-init";
