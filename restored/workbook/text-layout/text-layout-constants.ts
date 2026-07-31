// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: text-layout engine constants lifted from kce (l_/u_/d_/…/k_).

/** Legacy `l_` — default run font size in hundredths of a point (14pt). */
export const DEFAULT_FONT_HUNDREDTHS_POINT = 1400;
/** Legacy `u_`. */
export const DEFAULT_LINE_MULTIPLE = 1;
/** Legacy `d_` — presentation natural line height as a factor of font px. */
export const PRESENTATION_LINE_HEIGHT_FACTOR = 1.2;
/** Legacy `f_` — compressed (lineMultiple < 1) content-height factor. */
export const COMPRESSED_LINE_CONTENT_FACTOR = 0.8;
/** Legacy `p_` — sentinel width when wrapping is disabled. */
export const UNLIMITED_BOX_WIDTH_PX = 1e9;
/** Legacy `m_`. */
export const DEFAULT_TAB_STOP_EMU_FACTOR = 0.8;
/** Legacy `h_`. */
export const DEFAULT_TAB_STOP_FALLBACK_FACTOR = 0.2;
/** Legacy `g_`. */
export const WHITESPACE_RE = /\s/;
/** Legacy `__` — tokenize-cache eviction threshold. */
export const TOKENIZE_CACHE_LIMIT = 1024;
/** Legacy `E_` — embedded DOCX break marker split out of runs. */
export const DOCX_BREAK_RENDERED_MARKER = "__docxBreak:rendered__";
/** Legacy `D_` — default hyperlink fill. */
export const DEFAULT_HYPERLINK_COLOR = "#0563c1";
/** Legacy `k_` — memoized tokenizeTextRuns results. */
export const tokenizeCache: Map<string, unknown[]> = new Map();

// Legacy short aliases for boundary re-wiring if needed.
export const l_ = DEFAULT_FONT_HUNDREDTHS_POINT;
export const u_ = DEFAULT_LINE_MULTIPLE;
export const d_ = PRESENTATION_LINE_HEIGHT_FACTOR;
export const f_ = COMPRESSED_LINE_CONTENT_FACTOR;
export const p_ = UNLIMITED_BOX_WIDTH_PX;
export const m_ = DEFAULT_TAB_STOP_EMU_FACTOR;
export const h_ = DEFAULT_TAB_STOP_FALLBACK_FACTOR;
export const g_ = WHITESPACE_RE;
export const __ = TOKENIZE_CACHE_LIMIT;
export const E_ = DOCX_BREAK_RENDERED_MARKER;
export const D_ = DEFAULT_HYPERLINK_COLOR;
export const k_ = tokenizeCache;
