// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-5: Stylesheet + font/border/xf tables barrel.

export {
  spreadsheetMlColorSpace,
  wireResolveColorProtoToRgbaString,
  resolveColorProtoToRgbaString,
} from "./color-rgba-wire";
export type { ColorProtoToRgbaString } from "./color-rgba-wire";
export {
  colorsEqual,
  deepCloneArray,
  deepCloneValue,
  stableJsonStringify,
} from "./style-value-utils";
export {
  borderFromConfig,
  borderSideFromConfig,
  cloneFill,
  coerceSolidFillToPattern,
  applyThemeColorsToDxf,
  applyThemeColorToBorderSide,
  resolveSchemeColorToRgbProto,
  parseRgbaCss,
} from "./stylesheet-helpers";
export { SpreadsheetFont } from "./spreadsheet-font";
export { BorderSide } from "./border-side";
export { Borders } from "./borders";
export { CellXf } from "./cell-xf";
export { NumberFormat } from "./number-format";
export { Stylesheet } from "./stylesheet";
export type { FontRegistry } from "./stylesheet";
export { ensureStylesheetInit } from "./ensure-stylesheet-init";
