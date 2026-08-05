// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: text-layout engine barrel (tokenize + line-box + j_/kce).

export {
  DEFAULT_FONT_HUNDREDTHS_POINT,
  DEFAULT_LINE_MULTIPLE,
  PRESENTATION_LINE_HEIGHT_FACTOR,
  COMPRESSED_LINE_CONTENT_FACTOR,
  UNLIMITED_BOX_WIDTH_PX,
  DEFAULT_TAB_STOP_EMU_FACTOR,
  DEFAULT_TAB_STOP_FALLBACK_FACTOR,
  WHITESPACE_RE,
  TOKENIZE_CACHE_LIMIT,
  DOCX_BREAK_RENDERED_MARKER,
  DEFAULT_HYPERLINK_COLOR,
  tokenizeCache,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  E_,
  D_,
  k_,
} from "./text-layout-constants";
export { tokenizeTextRuns } from "./tokenize-text-runs";
export {
  advanceAt,
  buildRelativeAdvances,
  findMaxAdvanceIndex,
} from "./advance-metrics";
export {
  presentationCompressedBaseline,
  officeBaselineFromInk,
  resolveLineBoxMetrics,
  spacerSegmentFromReference,
  resolveNextTabStop,
  tabAlignedWidth,
  resolveLayoutProfile,
  resolveParagraphSpacingUnit,
  accumulateLineInkBounds,
} from "./line-box-helpers";
export { TextLayoutEngine } from "./text-layout-engine";
export { ensureTextLayoutEngineInit, kce } from "./ensure-text-layout-init";
