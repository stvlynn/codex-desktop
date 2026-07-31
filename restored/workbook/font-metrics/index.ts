// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-10/11: font-family match + metrics + segmenter + glyph-advance cache.

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
export {
  GLYPH_TOKEN_CACHE_LIMIT,
  KERNING_EPSILON_PX,
  SIZE_BUCKET_SCALE,
  GLYPH_ADVANCE_RESERVED_SIXTH,
  SNAP_ADVANCE_SCRIPT_RE,
  GlyphAdvanceCache,
  ensureGlyphAdvanceCacheInit,
} from "./glyph-advance-cache";
export type { InkBounds } from "./glyph-advance-cache";
export { ensureFontMetricsClusterInit } from "./ensure-font-metrics-init";
