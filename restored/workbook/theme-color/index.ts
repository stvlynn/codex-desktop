// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-2: theme color + pattern fill barrel.

export { namedCssColors } from "./named-css-colors";
export {
  themeSchemeColorNames,
  themeSchemeColorAliases,
} from "./theme-scheme-color-names";
export {
  isThemeSchemeColorName,
  ensureThemeSchemeColorNamesInit,
} from "./is-theme-scheme-color-name";
export {
  colorTypeProtoToName,
  ensureColorTypeProtoToNameInit,
} from "./color-type-proto-to-name";
export {
  colorChannelMax,
  colorGamma,
  colorInvGamma,
  ensureColorTransformConstantsInit,
} from "./color-transform-constants";
export { clampNumber, hexToRgb, rgbToHex } from "./rgb-hex";
export type { RgbColor } from "./rgb-hex";
export { applyColorTransform } from "./color-transform-ops";
export {
  clampUnitInterval,
  normalizeUnitOrPercent,
} from "./color-unit-helpers";
export {
  normalizeColorTransformConfig,
  colorTransformToConfig,
  normalizeProtoTint,
} from "./color-transform-config";
export {
  resolveNamedCssColor,
  parseLightenDarkenSuffix,
  parseColorString,
  normalizeHexColor,
  applyTransformToHex,
} from "./color-string-parse";
export { WorkbookColor, ensureWorkbookColorInit } from "./workbook-color";
export {
  PatternFill,
  patternTypeProtoToName,
  ensurePatternFillInit,
} from "./pattern-fill";
export {
  ensureThemeColorInit,
  ensureColorTransformConstantsClusterInit,
} from "./ensure-theme-color-init";
