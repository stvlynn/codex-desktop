// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-164: public editor-facing legacy aliases (workbookA…workbookZ).
// Semantic bodies live under workbook/* (+ vendor/yjs for workbookAt).
// Editors should import from this barrel (or domain barrels) — not the mega.

export { mergeUpdates as workbookAt } from "../vendor/yjs";

export { workbookC, workbookS } from "./charts-collection";

export { resolveColorToCssRgba as workbookSt } from "./color-resolve";

export { _workbookU, WorkbookD } from "./comments";

export {
  WorkbookTheme as workbookJ,
  ensureWorkbookThemeInit as workbookY,
} from "./design-tokens";

export {
  isDetachedTextPayload as _workbookQ,
  normalizeParagraphInputs as workbookG,
  ensureDetachedTextHelpersInit as workbookK,
} from "./detached-text";

export {
  mergeTextStyle as _workbookCt,
  isContextualSpacingEnabled as _workbookOt,
  ensureDocumentStylesInit as _workbookSt,
  ensureContextualSpacingScheme as WorkbookAt,
  elementParagraphSpacingPx as workbookDollar,
  DocumentStyleResolver as workbookIt,
  mergeParagraphStyle as workbookLt,
  buildThemeStyleMaps as workbookNt,
  ensureThemeStyleMapsInit as workbookRt,
} from "./document-style";

export { workbookEt, workbookTt } from "./emu-units";

export { Fill as workbookCt, ensureFillInit as workbookWt } from "./fill";

export {
  ensureTextSegmenterInit as workbookFt,
  workbookHt,
  ensureFontMetricsInit as workbookMt,
  segmentGraphemes as workbookPt,
} from "./font-metrics";

export {
  _workbookC,
  twipToCssPx as _workbookDt,
  _workbookL,
  ensureTypographyUnitsInit as workbookUt,
} from "./font-stack";

export {
  ensureFormulaInit as workbookF,
  parseA1CellRef as WorkbookI,
  parseWholeColumnRef as workbookL,
  columnNumberToLetters as workbookP,
  tokenizeFormula as WorkbookR,
} from "./formula";

export { workbookO } from "./guide-layout-consts";

export { _workbookEt } from "./mid-paint-helpers/clamp-nonneg-impl";

export { ensurePlaceholderResolveThemeInit as _workbookTt } from "./placeholder-resolve";

export {
  _workbookT,
  workbookD,
  workbookE,
  workbookW,
} from "./presentation-assets";

export { _workbookO, _workbookS } from "./presentation-doc";

export { ensureCssNamedColorsInit as workbookXt } from "./presentation-theme";

export {
  ensurePluginSlotsInit as workbookU,
  installPresetShapeDefinitions as WorkbookW,
} from "./preset-shape";

export {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "./shape-geometry";

export { workbookM } from "./shell-mid-ensures";

export {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "./slide-element";

export { _workbookB, _workbookF, _workbookP, _workbookX } from "./slide-layout";

export { _workbookV, _workbookY } from "./slides-collection";

export {
  ensureStableIdConstantsInit as workbookH,
  bracedUuidUpper as workbookV,
} from "./stable-id";

export { _workbookH, _workbookM } from "./table-element";

export { layoutTableFrame as workbookA } from "./table-frame-layout";

export { _workbookG, workbookUnderscore } from "./table-row-range";

export {
  layoutTextElement as workbookQ,
  paintTextElement as workbookX,
  ensureTextBoxClusterInit as workbookZ,
} from "./text-box";

export { workbookN } from "./text-frame-embeds";

export { _workbookJ } from "./text-frame-insets";

export {
  ensureStyleResolveInit as _t,
  ensureTextStyleInit as workbookBt,
  workbookGt,
  TextStyle as workbookVt,
  applyTextStylePatch as workbookYt,
} from "./text-style";

export { __workbookT, workbookKt, WorkbookN } from "./workbook-core";

export { _workbookA, _WorkbookI, workbookR } from "./xlsx-workbook-validate";
