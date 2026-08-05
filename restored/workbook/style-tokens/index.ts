// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-30: CSS utility style-tokens + style-config barrel.

export {
  FONT_WEIGHT_BOLD_UTILITIES,
  FONT_WEIGHT_NON_BOLD_UTILITIES,
  resolveFontWeightUtilityBold,
  ensureFontWeightTokensInit,
} from "./font-weight-tokens";
export {
  LINE_HEIGHT_RATIO_UTILITIES,
  LINE_HEIGHT_PX_UTILITIES,
  parseLeadingBracketRatio,
  parseLeadingBracketPx,
  resolveLineHeightUtility,
  ensureLineHeightTokensInit,
} from "./line-height-tokens";
export type { LineHeightResolveOptions } from "./line-height-tokens";
export {
  FONT_SIZE_UTILITIES,
  resolveFontSizeUtility,
  ensureFontSizeTokensInit,
} from "./font-size-tokens";
export { parseUtilityClassStyles } from "./parse-utility-class-styles";
export type { UtilityClassStyle } from "./parse-utility-class-styles";
export { ensureStyleTokensInit } from "./ensure-style-tokens-init";
export { trimNonEmptyString } from "./trim-non-empty-string";
export {
  colorConfigFromValue,
  fillConfigFromValue,
  outlineConfigFromValue,
  textBoxStyleConfigFromPartial,
  textRunStyleConfigFromPartial,
  applyStyleConfigToParagraph,
  normalizeStyleId,
  classNameAndStyleConfigFromPartial,
  colorFromPartialOrFill,
  classNameFromPartial,
  alignmentNameFromValue,
} from "./style-config";
export { ensureStyleConfigInit } from "./ensure-style-config-init";
