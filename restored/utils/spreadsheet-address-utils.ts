// Restored from ref/webview/assets/address-utils-xK0e4BjB.js
// Spreadsheet address helpers: A1 refs, bounds, Excel palette, and pt/px sizing.

import { esmInit } from "../runtime/rolldown-runtime";

/** Inclusive cell-range bounds in 0-based row/col indices. */
export type CellBounds = {
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
};
export type CellPadding = {
  padLr: number;
  padTb: number;
};
export type ParsedSheetRef = {
  sheetName?: string;
  ref: string;
};
let defaultCharWidth = 8.43;
let defaultFontSizePx = 7;
let horizontalPadRatio = 0.1;
let verticalPadRatio = 0;
let minHorizontalPad = 2;
let minVerticalPad = 4 / 3;
const EXCEL_INDEXED_COLORS =
  "#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#000000.#FFFFFF.#FF0000.#00FF00.#0000FF.#FFFF00.#FF00FF.#00FFFF.#800000.#008000.#000080.#808000.#800080.#008080.#C0C0C0.#808080.#9999FF.#993366.#FFFFCC.#CCFFFF.#660066.#FF8080.#0066CC.#CCCCFF.#000080.#FF00FF.#FFFF00.#00FFFF.#800080.#800000.#008080.#0000FF.#00CCFF.#CCFFFF.#CCFFCC.#FFFF99.#99CCFF.#FF99CC.#CC99FF.#FFCC99.#3366FF.#33CCCC.#99CC00.#FFCC00.#FF9900.#FF6600.#666699.#969696.#003366.#339966.#003300.#333300.#993300.#993366.#333399.#333333".split(
    ".",
  );
function effectiveFontSize(fontSize: number | null | undefined): number {
  return fontSize && fontSize > 0 ? fontSize : defaultFontSizePx;
}
function ceilFontSize(fontSize: number | null | undefined): number {
  return Math.ceil(effectiveFontSize(fontSize));
}
function columnWidthPx(
  charCount: number | null | undefined,
  fontSize?: number | null,
): number {
  return charCount == null || charCount <= 0
    ? 64
    : charCount * ceilFontSize(fontSize);
}
function pxToCharCount(widthPx: number, fontSize?: number | null): number {
  if (!Number.isFinite(widthPx) || widthPx <= 0) return 0;
  const chars = widthPx / ceilFontSize(fontSize);
  return Math.round(chars * 100) / 100;
}
function pointsToPixels(points: number | null | undefined): number {
  return ((points == null || points === 0 ? 15 : points) * 96) / 72;
}
function pixelsToPoints(pixels: number | null | undefined): number {
  return Number.isFinite(pixels ?? 0) ? ((pixels ?? 0) * 72) / 96 : 15;
}
function cellPaddingForFontSize(fontSize: number): CellPadding {
  const size = fontSize > 0 ? fontSize : 11;
  return {
    padLr: Math.max(minHorizontalPad, Math.floor(size * horizontalPadRatio)),
    padTb: Math.max(minVerticalPad, Math.floor(size * verticalPadRatio)),
  };
}
function colIndexToLetters(colIndex: number): string {
  let n = colIndex + 1;
  let letters = "";
  while (n) {
    const rem = (n - 1) % 26;
    letters = String.fromCharCode(65 + rem) + letters;
    n = Math.floor((n - rem) / 26);
  }
  return letters;
}
function lettersToColIndex(ref: string): number {
  const match = ref.match(/[A-Z]+/);
  if (!match) return 0;
  let value = 0;
  for (const ch of match[0]) {
    value = value * 26 + (ch.charCodeAt(0) - 64);
  }
  return value - 1;
}
function rowTokenToIndex(ref: string): number {
  const match = ref.match(/\d+/);
  return match ? parseInt(match[0], 10) - 1 : 0;
}
function oleColorToCss(ole: string): string {
  const hex = ole.replace(/^0x/i, "");
  if (hex.length === 8) {
    return `rgba(${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4, 6), 16)}, ${parseInt(hex.slice(6, 8), 16)}, ${(1).toFixed(3)})`;
  }
  if (hex.length === 6) return `#${hex}`;
  return "#ffffff";
}
function indexedExcelColor(
  index: number | null | undefined,
): string | undefined {
  if (index == null) return undefined;
  if (index === 64) return "#000000";
  return EXCEL_INDEXED_COLORS[index];
}
const initAddressMetrics = esmInit(() => {
  defaultCharWidth = 8.43;
  defaultFontSizePx = 7;
  horizontalPadRatio = 0.1;
  verticalPadRatio = 0;
  minHorizontalPad = 2;
  minVerticalPad = 4 / 3;
});
function normalizeA1Token(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const withoutSheet = trimmed.includes("!")
    ? trimmed.slice(trimmed.indexOf("!") + 1)
    : trimmed;
  return withoutSheet.replace(/\$/g, "").toUpperCase();
}
function formatA1(row: number, col: number): string {
  return `${colIndexToLetters(col)}${row + 1}`;
}
function formatA1Range(bounds: CellBounds): string {
  const start = formatA1(bounds.startRow, bounds.startCol);
  const end = formatA1(bounds.endRow, bounds.endCol);
  return start === end ? start : `${start}:${end}`;
}
function parseA1Range(input: string): {
  ref: string;
  bounds: CellBounds;
} | null {
  const token = normalizeA1Token(input);
  if (!token) return null;
  const parts = token.split(":");
  const startToken = parts[0];
  if (!startToken) return null;
  const endToken = parts[1] ?? startToken;
  const startRow = rowTokenToIndex(startToken);
  const startCol = lettersToColIndex(startToken);
  const endRow = rowTokenToIndex(endToken);
  const endCol = lettersToColIndex(endToken);
  const bounds: CellBounds = {
    startRow: Math.min(startRow, endRow),
    startCol: Math.min(startCol, endCol),
    endRow: Math.max(startRow, endRow),
    endCol: Math.max(startCol, endCol),
  };
  return {
    ref: formatA1Range(bounds),
    bounds,
  };
}
function boundsSize(bounds: CellBounds): {
  rows: number;
  cols: number;
} {
  return {
    rows: bounds.endRow - bounds.startRow + 1,
    cols: bounds.endCol - bounds.startCol + 1,
  };
}
function boundsIntersect(a: CellBounds, b: CellBounds): boolean {
  return (
    a.startRow <= b.endRow &&
    a.endRow >= b.startRow &&
    a.startCol <= b.endCol &&
    a.endCol >= b.startCol
  );
}
function unquoteSheetName(name: string): string {
  return name.startsWith("'") && name.endsWith("'") && name.length >= 2
    ? name.slice(1, -1).replace(/''/g, "'")
    : name;
}
function parseSheetRef(input: string): ParsedSheetRef {
  const body = input.startsWith("=") ? input.slice(1) : input;
  const bang = body.indexOf("!");
  if (bang === -1) {
    return {
      ref: parseA1Range(body)?.ref ?? body,
    };
  }
  const sheetName = unquoteSheetName(body.slice(0, bang));
  const rangePart = body.slice(bang + 1);
  const parsed = parseA1Range(rangePart);
  return {
    sheetName,
    ref: parsed?.ref ?? rangePart,
  };
}
const initAddressUtils = esmInit(() => {
  initAddressMetrics();
});

// Export order matches chunk letters: _ a b c d f g h i l m n o p r s t u v y
export {
  pxToCharCount,
  normalizeA1Token,
  rowTokenToIndex,
  parseSheetRef,
  columnWidthPx,
  lettersToColIndex,
  pointsToPixels,
  initAddressMetrics,
  formatA1,
  defaultCharWidth,
  indexedExcelColor,
  formatA1Range,
  parseA1Range,
  colIndexToLetters,
  initAddressUtils,
  boundsIntersect,
  boundsSize,
  oleColorToCss,
  pixelsToPoints,
  cellPaddingForFontSize,
};
