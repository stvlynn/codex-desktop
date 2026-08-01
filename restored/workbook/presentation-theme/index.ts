// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-3/10: presentation theme barrel (Mae / Sle / placeholders + style helpers).

export { cssNamedColors } from "./css-named-colors";
export { defaultFont } from "./default-font";
export { defaultPatternFills } from "./default-pattern-fills";
export { defaultCellXf } from "./default-cell-xf";
export { defaultBorderSide } from "./default-border-side";
export { defaultBorders } from "./default-borders";
export { normalCellStyle } from "./normal-cell-style";
export { defaultCellStyleXf } from "./default-cell-style-xf";
export { chatgptTheme } from "./chatgpt-theme";
export { slidePlaceholderRoles } from "./slide-placeholder-roles";
export { slidePlaceholderRoleAliases } from "./slide-placeholder-role-aliases";
export { outerShadowEffect } from "./outer-shadow-effect";
export { chatgptThemeWarm } from "./chatgpt-theme-warm";
export {
  placeholderTypeToStyleKey,
  isFurniturePlaceholderType,
  placeholderRoleToShortName,
  normalizePlaceholderType,
  expandPlaceholderTypeCandidates,
  isPlaceholderVisibleForLayout,
  placeholdersMatch,
  normalizePlaceholderLabel,
  resolvePlaceholderLabel,
} from "./placeholder-style";
export type {
  PlaceholderStyleKey,
  FurniturePlaceholderType,
  FurnitureVisibility,
  PlaceholderTypeCandidates,
  ExpandPlaceholderTypesOptions,
  PlaceholderNameHint,
} from "./placeholder-style";
export {
  ensureCssNamedColorsInit,
  ensureChatgptThemeInit,
  ensureSlidePlaceholderRolesInit,
  ensureChatgptThemeWarmInit,
  ensurePlaceholderStyleInit,
  ensurePresentationThemeInit,
} from "./ensure-presentation-theme-init";

export {
  wireThemeFontsBoundaryHooks,
  ptfH,
} from "./boundary-hooks-theme-fonts";
export {
  collectSlideThemeFonts,
  normalizeFontScheme,
  addTypeface,
  VDe,
  HDe,
  workbookHelper679,
} from "./collect-slide-theme-fonts-impl";

export { AXe, jXe } from "./color-scheme-clone-impl";

export { $2 } from "./clone-style-list-impl";
