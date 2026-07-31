// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8/9: TextStyle VO + alignment/autofit + CSS declaration/shadow parsers.

export {
  alignmentNameToProto,
  alignmentProtoToName,
  verticalAlignmentNameToAnchor,
  parseAlignment,
  normalizeAlignment,
} from "./alignment";
export type { AlignmentName, VerticalAlignmentName } from "./alignment";
export {
  FONT_SCALE_FIXED_POINT,
  fontScaleFromProto,
  fontScaleToProto,
  autofitFromProto,
  autofitToProto,
} from "./autofit";
export type { AutofitType, AutofitVo, AutofitProto } from "./autofit";
export {
  capitalizationFromTextTransform,
  textTransformFromCapitalization,
} from "./capitalization";
export type { TextTransformName } from "./capitalization";
export { isPlainObject } from "./is-plain-object";
export {
  normalizeTextShadow,
  wireNormalizeTextShadow,
} from "./text-shadow-wire";
export type { TextShadowNormalizer } from "./text-shadow-wire";
export { TextStyle, MIN_FONT_SIZE_CENTIPOINTS } from "./text-style";
export type { TextStyleProto, TextStyleInsets } from "./text-style";
export { ensureTextStyleInit } from "./ensure-text-style-init";
export {
  OUTLINE_DASH_ALIASES,
  parseOutlineCss,
  ensureOutlineDashMapInit,
} from "./outline-css";
export type { OutlineCss } from "./outline-css";
export {
  parseTextAnchorCss,
  parseFontSizeCssToken,
  parseSizedFontToken,
  isFontWeightToken,
  parseFontWeightBold,
  parseBooleanLikeCss,
  parseTextWrapCss,
  parseUnderlineCss,
  parseInsetsCss,
  parseAutofitCss,
} from "./css-value-parsers";
export {
  isCssDeclarationText,
  parseTextStyleCssDeclarations,
  coerceTextStyleCssOrValue,
  applyFontShorthand,
} from "./css-declaration-parse";
export type { TextStyleCssBag } from "./css-declaration-parse";
export {
  matchShadowPresetName,
  shadowPresetToCss,
  parseTextShadowCss,
  normalizeTextShadowFromCss,
  ensureShadowCssParseInit,
} from "./shadow-css-parse";
export type {
  ShadowPresetName,
  ParsedShadowCss,
  TextShadowFields,
} from "./shadow-css-parse";
export {
  parseFontSizePx,
  applyTextStylePatch,
  parseTextStyleInput,
} from "./apply-text-style-patch";
export type { TextStylePatch } from "./apply-text-style-patch";
