// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: DOCX scheme CSS prefixes + highlight named colors (lifted from kce).

/** Legacy `v_` — twips → CSS px factor (1/15). Prefer `twipToCssPx` for calls. */
export const TWIP_TO_CSS_PX = 0.06666666666666667;

/** Legacy `y_`. */
export const DOCX_HIGHLIGHT_PREFIX = "__docxHighlight:";
/** Legacy `b_`. */
export const DOCX_ALIGN_PREFIX = "__docxAlign:";
/** Legacy `x_`. */
export const DOCX_CAPS_PREFIX = "__docxCaps:";
/** Legacy `S_`. */
export const DOCX_PARAGRAPH_RIGHT_INDENT_PREFIX = "__docxParagraphRightIndent:";
/** Legacy `C_`. */
export const DOCX_COMPLEX_SCRIPT_FONT_SIZE_PREFIX =
  "__docxComplexScriptFontSize:";
/** Legacy `w_`. */
export const DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX =
  "__docxComplexScriptTypeface:";
/** Legacy `T_`. */
export const DOCX_EAST_ASIA_TYPEFACE_PREFIX = "__docxEastAsiaTypeface:";
/** Legacy `O_` — default underline when hyperlink forces one. */
export const DEFAULT_HYPERLINK_UNDERLINE = "single";

/** Legacy `A_` — named DOCX highlight colors. */
export const DOCX_HIGHLIGHT_NAMED_COLORS: Record<string, string> = {
  yellow: "#fff200",
  darkyellow: "#c9a000",
  green: "#00b050",
  darkgreen: "#006100",
  cyan: "#00b0f0",
  magenta: "#c000c0",
  blue: "#4472c4",
  darkblue: "#1f3864",
  red: "#ff0000",
  darkred: "#9c0006",
  gray: "#808080",
  darkgray: "#404040",
  lightgray: "#d9d9d9",
  black: "#111111",
};

// Legacy short aliases kept for boundary re-wiring.
export const v_ = TWIP_TO_CSS_PX;
export const y_ = DOCX_HIGHLIGHT_PREFIX;
export const b_ = DOCX_ALIGN_PREFIX;
export const x_ = DOCX_CAPS_PREFIX;
export const S_ = DOCX_PARAGRAPH_RIGHT_INDENT_PREFIX;
export const C_ = DOCX_COMPLEX_SCRIPT_FONT_SIZE_PREFIX;
export const w_ = DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX;
export const T_ = DOCX_EAST_ASIA_TYPEFACE_PREFIX;
export const O_ = DEFAULT_HYPERLINK_UNDERLINE;
export const A_ = DOCX_HIGHLIGHT_NAMED_COLORS;
