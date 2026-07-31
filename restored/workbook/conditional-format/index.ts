// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: conditional-format barrel.

export {
  SPREADSHEETML_COLOR_SPACE,
  resolveCfFormatColor,
  formulasFromInput,
  normalizeFormulaString,
  buildCfvos,
  buildIconSetCfvos,
  defaultCfvoPair,
  normalizeCfvo,
  resolveSchemeColorToRgb,
  parseRgbaCss,
  coerceCfFormatBag,
} from "./cf-color-cfvo";
export {
  buildCellIsRule,
  buildExpressionRule,
  buildTextRule,
  buildSimpleRule,
  buildTimePeriodRule,
  buildTop10Rule,
  buildAboveAverageRule,
  buildDataBarRule,
  buildIconSetRule,
  buildCfRuleRecord,
  normalizeCfRuleConfig,
} from "./cf-rule-records";
export {
  buildColorScaleRule,
  normalizeColorScaleConfig,
  colorScaleCriteriaList,
  normalizeColorScaleThreshold,
} from "./cf-color-scale";
export {
  resolveCfRangeTarget,
  findCfGroupForTarget,
  cfGroupMatchesTarget,
  createCfGroup,
  listCfRulesForTarget,
  recordCfAddOp,
  formatCfTargetRange,
} from "./cf-range-ops";
export { ConditionalFormatRule } from "./conditional-format-rule";
export { ConditionalFormattings } from "./conditional-formattings";
export {
  RangeConditionalFormats,
  normalizeCfTypeName,
} from "./range-conditional-formats";
export { ensureConditionalFormatInit } from "./ensure-conditional-format-init";
