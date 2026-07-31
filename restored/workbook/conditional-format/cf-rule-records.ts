// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: CF rule record builders (legacy Jfe/Qfe…ope).

import { Zn as colorTypeEnum } from "../presentation-protobuf";
import {
  parseSheetRef,
  parseA1Range,
  formatA1,
} from "../../utils/spreadsheet-address-utils";
import { themeStyleMapsFromProto } from "../design-tokens";
import { WorkbookColor } from "../theme-color";
import { resolveColorProtoToRgbaString } from "../color-resolve";
import { buildConditionalFormatAddOp } from "../mutation-ops";
import { resolveIconCount, defaultIconThresholds } from "../icon-set";
import { ConditionalFormatRule } from "./conditional-format-rule";

import {
  resolveCfFormatColor,
  formulasFromInput,
  buildCfvos,
  buildIconSetCfvos,
  resolveSchemeColorToRgb,
} from "./cf-color-cfvo";
import {
  buildColorScaleRule,
  normalizeColorScaleConfig,
} from "./cf-color-scale";

export function buildCellIsRule(
  cfIn8676: unknown,
  cfIn8677: unknown,
  cfIn8678: unknown,
) {
  let cfBind19185 = formulasFromInput(cfIn8677.formula),
    cfBind19186 = resolveCfFormatColor(cfIn8676, cfIn8677.format);
  return {
    type: "cellIs",
    priority: cfIn8678,
    operator: cfIn8677.operator,
    formula: cfBind19185,
    dxfId: cfBind19186,
  };
}
export function buildExpressionRule(
  cfIn10115: unknown,
  cfIn10116: unknown,
  cfIn10117: unknown,
) {
  return {
    type: "expression",
    priority: cfIn10117,
    formula: formulasFromInput(cfIn10116.formula),
    dxfId: resolveCfFormatColor(cfIn10115, cfIn10116.format),
  };
}
export function buildTextRule(
  cfIn9389: unknown,
  cfIn9390: unknown,
  cfIn9391: unknown,
) {
  return {
    type: cfIn9390.type,
    priority: cfIn9391,
    dxfId: resolveCfFormatColor(cfIn9389, cfIn9390.format),
    operator: cfIn9390.type,
    text: cfIn9390.text,
    formula: [],
  };
}
export function buildSimpleRule(
  cfIn11269: unknown,
  cfIn11270: unknown,
  cfIn11271: unknown,
) {
  return {
    type: cfIn11270.type,
    priority: cfIn11271,
    dxfId: resolveCfFormatColor(cfIn11269, cfIn11270.format),
    formula: [],
  };
}
export function buildTimePeriodRule(
  cfIn9524: unknown,
  cfIn9525: unknown,
  cfIn9526: unknown,
) {
  return {
    type: "timePeriod",
    priority: cfIn9526,
    dxfId: resolveCfFormatColor(cfIn9524, cfIn9525.format),
    formula: [],
    timePeriod: cfIn9525.timePeriod,
  };
}
export function buildTop10Rule(
  cfIn8655: unknown,
  cfIn8656: unknown,
  cfIn8657: unknown,
) {
  return {
    type: "top10",
    priority: cfIn8657,
    dxfId: resolveCfFormatColor(cfIn8655, cfIn8656.format),
    formula: [],
    rank: cfIn8656.rank,
    percent: cfIn8656.percent,
    bottom: cfIn8656.bottom,
  };
}
export function buildAboveAverageRule(
  cfIn7699: unknown,
  cfIn7700: unknown,
  cfIn7701: unknown,
) {
  return {
    type: "aboveAverage",
    priority: cfIn7701,
    dxfId: resolveCfFormatColor(cfIn7699, cfIn7700.format),
    formula: [],
    aboveAverage: cfIn7700.aboveAverage,
    equalAverage: cfIn7700.equalAverage,
    stdDev: cfIn7700.stdDev,
  };
}
export function buildDataBarRule(
  cfIn5419: unknown,
  cfIn5420: unknown,
  cfIn5421: unknown,
) {
  let cfBind15172 = themeStyleMapsFromProto(cfIn5419.workbook.theme),
    cfBind15173 = resolveSchemeColorToRgb(
      new WorkbookColor(
        cfIn5420.color === undefined ? "accent1" : cfIn5420.color,
      ).toProto(),
      cfBind15172,
    );
  return {
    type: "dataBar",
    priority: cfIn5421,
    formula: [],
    dataBar: {
      cfvos: buildCfvos(cfIn5420.thresholds, 2, "percent"),
      color: cfBind15173 ?? new WorkbookColor("accent1").toProto(),
      gradient: cfIn5420.gradient,
    },
  };
}
export function buildIconSetRule(cfIn4970: unknown, cfIn4971: unknown) {
  let cfBind14389 = resolveIconCount({
    iconSetName: cfIn4970.iconSet,
    fallbackThresholdCount: cfIn4970.thresholds?.length,
  });
  return {
    type: "iconSet",
    priority: cfIn4971,
    formula: [],
    iconSet: {
      iconSet: cfIn4970.iconSet,
      showValue: cfIn4970.showValue,
      reverse: cfIn4970.reverse,
      custom: cfIn4970.custom,
      percent: cfIn4970.percent,
      cfvos: buildIconSetCfvos(cfIn4970.thresholds, cfBind14389),
    },
  };
}
export function buildCfRuleRecord(
  cfIn2437: unknown,
  cfIn2438: unknown,
  cfIn2439: unknown,
) {
  switch (cfIn2438.type) {
    case "aboveAverage":
      return buildAboveAverageRule(cfIn2437, cfIn2438, cfIn2439);
    case "beginsWith":
    case "containsText":
    case "endsWith":
    case "notContainsText":
      return buildTextRule(cfIn2437, cfIn2438, cfIn2439);
    case "cellIs":
      return buildCellIsRule(cfIn2437, cfIn2438, cfIn2439);
    case "expression":
      return buildExpressionRule(cfIn2437, cfIn2438, cfIn2439);
    case "colorScale":
      return buildColorScaleRule(cfIn2437, cfIn2438, cfIn2439);
    case "containsBlanks":
    case "containsErrors":
    case "duplicateValues":
    case "notContainsBlanks":
    case "notContainsErrors":
    case "uniqueValues":
      return buildSimpleRule(cfIn2437, cfIn2438, cfIn2439);
    case "timePeriod":
      return buildTimePeriodRule(cfIn2437, cfIn2438, cfIn2439);
    case "top10":
      return buildTop10Rule(cfIn2437, cfIn2438, cfIn2439);
    case "dataBar":
      return buildDataBarRule(cfIn2437, cfIn2438, cfIn2439);
    case "iconSet":
      return buildIconSetRule(cfIn2438, cfIn2439);
  }
}
export function normalizeCfRuleConfig(cfIn835: unknown, cfIn836: unknown) {
  if (!cfIn836 || typeof cfIn836 != "object")
    throw Error(
      `Conditional format "${cfIn835}" requires a config object. Example: range.conditionalFormats.add("${cfIn835}", { ... })`,
    );
  if (cfIn835 === "cellIs") {
    let cfBind14499 = cfIn836;
    if (cfBind14499.operator === undefined || cfBind14499.formula === undefined)
      throw Error(
        'cellIs rules require "operator" and "formula" fields.\nExample: range.conditionalFormats.add("CellValue", { operator: "lessThan", formula: 0, format: { fill: "#F8CBAD" } })\nOr: range.conditionalFormats.addCellIs({ operator: "lessThan", formula: 0, format: { fill: "#F8CBAD" } })',
      );
  }
  if (cfIn835 === "iconSet" && !cfIn836.iconSet)
    throw Error('iconSet rules require an "iconSet" value.');
  if (cfIn835 === "expression" && cfIn836.formula === undefined)
    throw Error('expression rules require a "formula" value.');
  if (
    cfIn835 === "containsText" ||
    cfIn835 === "notContainsText" ||
    cfIn835 === "beginsWith" ||
    cfIn835 === "endsWith"
  ) {
    let cfBind21127 = cfIn836;
    if (!cfBind21127.text || !cfBind21127.text.trim())
      throw Error(`${cfIn835} rules require a non-empty "text" value.`);
  }
  if (cfIn835 === "timePeriod" && !cfIn836.timePeriod)
    throw Error('timePeriod rules require a "timePeriod" value.');
  if (cfIn835 === "top10") {
    let cfBind19784 = cfIn836;
    if (
      cfBind19784.rank !== undefined &&
      (!Number.isFinite(cfBind19784.rank) || cfBind19784.rank <= 0)
    )
      throw Error('top10 rules require "rank" to be a positive number.');
  }
  if (cfIn835 === "aboveAverage") {
    let cfBind18597 = cfIn836;
    if (
      cfBind18597.stdDev !== undefined &&
      (!Number.isFinite(cfBind18597.stdDev) || cfBind18597.stdDev < 0)
    )
      throw Error(
        'aboveAverage rules require "stdDev" to be zero or a positive number.',
      );
  }
  return cfIn835 === "colorScale"
    ? normalizeColorScaleConfig(cfIn836)
    : cfIn836;
}
