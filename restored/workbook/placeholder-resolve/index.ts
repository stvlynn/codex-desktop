// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-17: placeholder-resolve / theme-typeface / docx-scheme layout helpers barrel.

export {
  TWIP_TO_CSS_PX,
  DOCX_HIGHLIGHT_PREFIX,
  DOCX_ALIGN_PREFIX,
  DOCX_CAPS_PREFIX,
  DOCX_PARAGRAPH_RIGHT_INDENT_PREFIX,
  DOCX_COMPLEX_SCRIPT_FONT_SIZE_PREFIX,
  DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX,
  DOCX_EAST_ASIA_TYPEFACE_PREFIX,
  DEFAULT_HYPERLINK_UNDERLINE,
  DOCX_HIGHLIGHT_NAMED_COLORS,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  O_,
  A_,
} from "./docx-scheme-constants";
export { mergeParagraphStyleWithBulletExclusivity } from "./merge-bullet-paragraph-style";
export type { BulletParagraphStyle } from "./merge-bullet-paragraph-style";
export {
  placeholderTypeToLevelStyleKey,
  masterLevelStylesForPlaceholder,
  firstDefined,
  mergeLevelStyleLayers,
  paragraphOutlineLevel,
  levelStyleAtOutline,
  resolvePlaceholderLevelStyles,
} from "./resolve-placeholder-level-styles";
export type {
  LevelStyleKey,
  LevelStyleLayer,
  PlaceholderHost,
  LayoutWithPlaceholders,
  SlideWithRenderContext,
} from "./resolve-placeholder-level-styles";
export {
  nonEmptyTypeface,
  expandThemeTypefaceAlias,
  resolveThemeTypefaceToken,
} from "./resolve-theme-typeface";
export type { ThemeFontScheme } from "./resolve-theme-typeface";
export { emuToCssPxOrZero, twipToCssPxOrZero } from "./layout-unit-helpers";
export { tabStopAlignmentName, tabStopsFromParagraphStyle } from "./tab-stops";
export type { TabStopAlignmentName, TabStopPx } from "./tab-stops";
export {
  styleIdsEqual,
  paragraphsShareContextualSpacing,
} from "./contextual-paragraph-match";
export {
  sce,
  t_,
  e_,
  normalizeColorTokenKey,
  schemeFlagEnabled,
  highlightColorFromScheme,
  alignmentFromScheme,
  applySchemeCaps,
  applyTextCapitalization,
  applyTextCaseTransforms,
  complexScriptFontSizeFromScheme,
  intFromSchemeProperty,
  typefaceFromScheme,
  fontSizeFromStyleOrScheme,
  typefaceFromStyleOrScheme,
  underlineWithHyperlinkDefault,
} from "./docx-scheme-style";
export {
  toAlphaListLabel,
  toRomanListLabel,
  formatAutoNumberLabel,
} from "./list-number-format";
export {
  ensurePlaceholderResolveThemeInit,
  ensurePlaceholderResolveDepsInit,
  ensureThemeTypefaceInit,
  ensurePlaceholderResolveClusterInit,
} from "./ensure-placeholder-resolve-init";

export { workbookHelper667 } from "./clone-level-style-impl";
