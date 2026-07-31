// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-7: text-style color-resolve helpers barrel.

export {
  clampRange,
  normalizeRgbHex,
  isWorkbookColorInstance,
  colorTransformOf,
  colorValueOf,
  colorLastColorOf,
  isSystemColor,
} from "./color-proto-accessors";
export type { RgbaColor } from "./color-proto-accessors";
export {
  resolveColorToRgba,
  resolveColorProtoToRgbaString,
  resolveColorToRgbaOrUndefined,
  resolveColorToCssRgba,
} from "./resolve-color-to-rgba";
export type {
  ThemeColorMap,
  ResolveColorOptions,
} from "./resolve-color-to-rgba";
export { ensureColorResolveInit } from "./ensure-color-resolve-init";
