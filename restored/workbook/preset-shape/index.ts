// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-34: preset-shape barrel (kue–h297 / Binding633–644).

export type {
  FormulaEnv,
  PresetShapeRect,
  PresetShapeDefinition,
  PresetShapeRegistry,
  BboxPx,
  AdjustmentEntry,
  ShapeTextFrameSource,
  ShapeTextFrameElement,
} from "./types";
export {
  workbookHelpPlugin,
  workbookExportPlugin,
  presentationHelpPlugin,
  googleSheetsPlugin,
  presetShapeDefinitions,
  presetShapeMissingWarned,
  requireWorkbookHelp,
  requireWorkbookExport,
  requirePresentationHelp,
  requireGoogleSheetsPlugin,
  installPresetShapeDefinitions,
  lookupPresetShapeDefinition,
  ensurePluginSlotsInit,
} from "./plugin-slots";
export {
  SHAPE_ROTATION_EMU_PER_DEGREE,
  shapeAngleConstants,
  shapeFormulaOps,
  degreesToRadians,
  rotationEmuToRadians,
  resolveFormulaToken,
  evalShapeFormulaCall,
  evalShapeFormula,
  ensureShapeFormulaOpsInit,
} from "./shape-formula";
export { buildGuideVariables } from "./guide-variables";
export {
  adjNameAliases,
  ensureAdjAliasInit,
  evalPresetGuides,
} from "./evaluate-guides";
export type { ResolveShapeTextFrameRectArgs } from "./text-frame-rect";
export {
  adjustmentListToMap,
  evalGuideOrDefault,
  resolveShapeTextFrameRect,
} from "./text-frame-rect";
export { ensurePresetShapeClusterInit } from "./ensure-preset-shape-init";
