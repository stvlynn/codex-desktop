// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-16: effects EffectList + document-style / theme-style maps barrel.

export { EffectList, ensureEffectListInit } from "./effect-list";
export type { EffectProto } from "./effect-list";
export {
  mergeDefinedProps,
  cloneOptional,
  mergeBorderBox,
  mergeParagraphStyle,
  mergeTextStyle,
} from "./merge-style-props";
export type { BorderBox, ParagraphStyleProto, TextStyleProto } from "./merge-style-props";
export {
  CONTEXTUAL_SPACING_TAG,
  CONTEXTUAL_SPACING_SCHEME_PREFIX,
  CONTEXTUAL_SPACING_SCHEME_TRUE,
  cssDeclarationPrefix,
  normalizeStyleToken,
  mergeSchemeCssDeclarations,
  readSchemeCssValue,
  ensureContextualSpacingSchemeInit,
  isContextualSpacingEnabled,
  ensureContextualSpacingScheme,
  hasContextualSpacingTag,
} from "./scheme-css";
export {
  pickDefaultStyleId,
  DocumentStyleResolver,
  ensureDocumentStylesInit,
} from "./document-style-resolver";
export type {
  DocumentStyleDef,
  ResolvedDocumentStyle,
} from "./document-style-resolver";
export {
  THEME_COLOR_SCHEME_ALIASES,
  normalizeColorMapAliases,
  buildThemeStyleMaps,
  isFiniteNumber,
  resolveListLevelStyle,
  resolveParagraphSpacingOverrides,
  ensureThemeStyleMapsInit,
} from "./theme-style-maps";
export type {
  ColorMapAliases,
  ThemeFormatScheme,
  ThemeStyleMaps,
  ListLevelStyle,
} from "./theme-style-maps";
export {
  spaceValueToCssPx,
  resolveParagraphSpacingWithDefaults,
  paragraphSpacingToCssPx,
  elementParagraphSpacingPx,
} from "./paragraph-spacing";
export { ensureDocumentStyleClusterInit } from "./ensure-document-style-init";
