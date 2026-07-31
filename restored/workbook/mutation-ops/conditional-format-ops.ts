// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: conditionalformat.add builders (legacy pfe/mfe + threshold/format serializers).

import type { ConditionalFormatAddProps, LooseBag } from "./types";
import {
  serializeCfFill,
  serializeColorValue,
} from "./fill-color-serialize";

export function cloneThresholdValue(opIn11959: unknown): unknown {
  return typeof opIn11959 == "number" ||
    typeof opIn11959 == "string"
    ? opIn11959
    : {
        ...opIn11959,
      };
}
export function serializeConditionalFormatRule(opIn681: LooseBag): LooseBag | null {
  switch (opIn681.type) {
    case "aboveAverage":
      return {
        type: "aboveAverage",
        aboveAverage: opIn681.aboveAverage,
        equalAverage: opIn681.equalAverage,
        stdDev: opIn681.stdDev,
        format: serializeCfFormat(opIn681.format),
      };
    case "beginsWith":
    case "cellIs":
    case "containsText":
    case "endsWith":
    case "notContainsText":
      return opIn681.type === "cellIs"
        ? {
            type: "cellIs",
            operator: opIn681.operator,
            formula: opIn681.formula,
            format: serializeCfFormat(opIn681.format),
          }
        : {
            type: opIn681.type,
            text: opIn681.text,
            format: serializeCfFormat(opIn681.format),
          };
    case "colorScale":
      return {
        type: "colorScale",
        colors: (opIn681.colors ?? [])
          .map((item) => serializeColorValue(item))
          .filter((item) => item !== undefined),
        thresholds: opIn681.thresholds?.map((opIn16617) =>
          cloneThresholdValue(opIn16617),
        ),
      };
    case "dataBar":
      return {
        type: "dataBar",
        color: serializeColorValue(opIn681.color),
        thresholds: opIn681.thresholds?.map((opIn16618) =>
          cloneThresholdValue(opIn16618),
        ),
        gradient: opIn681.gradient,
      };
    case "containsBlanks":
    case "containsErrors":
    case "duplicateValues":
    case "notContainsBlanks":
    case "notContainsErrors":
    case "uniqueValues":
      return {
        type: opIn681.type,
        format: serializeCfFormat(opIn681.format),
      };
    case "iconSet":
      return {
        type: "iconSet",
        iconSet: opIn681.iconSet,
        showValue: opIn681.showValue,
        reverse: opIn681.reverse,
        custom: opIn681.custom,
        percent: opIn681.percent,
        thresholds: opIn681.thresholds?.map((opIn16619) =>
          cloneThresholdValue(opIn16619),
        ),
      };
    case "expression":
      return {
        type: "expression",
        formula: opIn681.formula,
        format: serializeCfFormat(opIn681.format),
      };
    case "timePeriod":
      return {
        type: "timePeriod",
        timePeriod: opIn681.timePeriod,
        format: serializeCfFormat(opIn681.format),
      };
    case "top10":
      return {
        type: "top10",
        rank: opIn681.rank,
        percent: opIn681.percent,
        bottom: opIn681.bottom,
        format: serializeCfFormat(opIn681.format),
      };
    default:
      return null;
  }
}
export function buildConditionalFormatAddOp(opIn6674: ConditionalFormatAddProps): LooseBag | null {
  let { sheet, target, rule } = opIn6674,
    opBind16963 = serializeConditionalFormatRule(rule);
  if (!opBind16963) return null;
  let opBind16964 = formatCfRangeAddress(target);
  return opBind16964
    ? {
        op: "conditionalformat.add",
        target: {
          sheet,
          range: opBind16964,
        },
        props: {
          rule: opBind16963,
        },
      }
    : null;
}
export function formatCfRangeAddress(opIn10290: LooseBag): string | null {
  let opBind20769 = opIn10290.startAddress;
  if (!opBind20769) return null;
  let opBind20770 = opIn10290.endAddress;
  return opBind20770 && opBind20770 !== opBind20769
    ? `${opBind20769}:${opBind20770}`
    : opBind20769;
}
export function serializeCfFormat(opIn5404: LooseBag | null | undefined): LooseBag | undefined {
  if (!opIn5404) return;
  let opBind15151 = serializeCfFill(opIn5404.fill),
    opBind15152 = serializeCfFont(opIn5404.font),
    opBind15153 = serializeCfBorder(opIn5404.border),
    opBind15154 = {};
  return (
    opBind15151 !== undefined &&
      (opBind15154.fill = opBind15151),
    opBind15152 !== undefined &&
      (opBind15154.font = opBind15152),
    opBind15153 !== undefined &&
      (opBind15154.border = opBind15153),
    opIn5404.numberFormat !== undefined &&
      (opBind15154.numberFormat = opIn5404.numberFormat),
    Object.keys(opBind15154).length > 0
      ? opBind15154
      : undefined
  );
}
export function serializeCfFont(opIn5379: LooseBag | null | undefined): LooseBag | undefined {
  if (!opIn5379) return;
  let opBind15112 = serializeColorValue(opIn5379.color),
    opBind15113 = {};
  return (
    opIn5379.bold !== undefined &&
      (opBind15113.bold = opIn5379.bold),
    opIn5379.italic !== undefined &&
      (opBind15113.italic = opIn5379.italic),
    opIn5379.size !== undefined &&
      (opBind15113.size = opIn5379.size),
    opIn5379.name !== undefined &&
      (opBind15113.name = opIn5379.name),
    opBind15112 !== undefined &&
      (opBind15113.color = opBind15112),
    Object.keys(opBind15113).length > 0
      ? opBind15113
      : undefined
  );
}
export function serializeCfBorder(opIn3575: LooseBag | null | undefined): LooseBag | undefined {
  if (!opIn3575) return;
  let opBind12071 = {},
    opBind12072 = serializeCfBorderEdge(opIn3575.top),
    opBind12073 = serializeCfBorderEdge(opIn3575.bottom),
    opBind12074 = serializeCfBorderEdge(opIn3575.left),
    opBind12075 = serializeCfBorderEdge(opIn3575.right),
    opBind12076 = serializeCfBorderEdge(opIn3575.diagonal);
  return (
    opBind12072 !== undefined &&
      (opBind12071.top = opBind12072),
    opBind12073 !== undefined &&
      (opBind12071.bottom = opBind12073),
    opBind12074 !== undefined &&
      (opBind12071.left = opBind12074),
    opBind12075 !== undefined &&
      (opBind12071.right = opBind12075),
    opBind12076 !== undefined &&
      (opBind12071.diagonal = opBind12076),
    opIn3575.diagonalUp !== undefined &&
      (opBind12071.diagonalUp = opIn3575.diagonalUp),
    opIn3575.diagonalDown !== undefined &&
      (opBind12071.diagonalDown = opIn3575.diagonalDown),
    Object.keys(opBind12071).length > 0
      ? opBind12071
      : undefined
  );
}
export function serializeCfBorderEdge(opIn6723: LooseBag | null | undefined): LooseBag | undefined {
  if (!opIn6723) return;
  let opBind17017 = serializeColorValue(opIn6723.color),
    opBind17018 = {};
  return (
    opIn6723.style !== undefined &&
      (opBind17018.style = opIn6723.style),
    opIn6723.weight !== undefined &&
      (opBind17018.weight = opIn6723.weight),
    opBind17017 !== undefined &&
      (opBind17018.color = opBind17017),
    Object.keys(opBind17018).length > 0
      ? opBind17018
      : undefined
  );
}
