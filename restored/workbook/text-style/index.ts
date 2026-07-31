// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-8: TextStyle VO + alignment/autofit/capitalization barrel.

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
