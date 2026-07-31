// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-43: CF colorScale normalize + builder (legacy spe/cpe/lpe/ape).

import { WorkbookColor } from "../theme-color";
import { themeStyleMapsFromProto } from "../design-tokens";
import {
  resolveCfFormatColor,
  buildCfvos,
  resolveSchemeColorToRgb,
} from "./cf-color-cfvo";

export function normalizeColorScaleThreshold(cfIn2517: unknown) {
  let cfBind9880 = (cfIn2517.type ?? "").toLowerCase(),
    cfBind9881 =
      cfIn2517.value !== undefined && cfIn2517.value !== null
        ? cfIn2517.value
        : cfIn2517.formula,
    cfBind9882 =
      typeof cfBind9881 == "string"
        ? cfBind9881.trim().replace(/^=/, "")
        : (cfBind9881 ?? undefined);
  switch (cfBind9880) {
    case "lowestvalue":
    case "min":
      return "min";
    case "highestvalue":
    case "max":
      return "max";
    case "percent":
      return {
        type: "percent",
        value: cfBind9882,
      };
    case "percentile":
      return {
        type: "percentile",
        value: cfBind9882,
      };
    case "num":
    case "number":
      return {
        type: "num",
        value: cfBind9882,
      };
    default:
      if (cfBind9882 !== undefined)
        return {
          type: "num",
          value: cfBind9882,
        };
      throw Error(
        'colorScale criteria entries require a "type" or a numeric "value".',
      );
  }
}
export function colorScaleCriteriaList(cfIn8255: unknown) {
  if (Array.isArray(cfIn8255)) return cfIn8255;
  let cfBind18770 = [];
  return (
    cfIn8255.minimum && cfBind18770.push(cfIn8255.minimum),
    cfIn8255.midpoint && cfBind18770.push(cfIn8255.midpoint),
    cfIn8255.maximum && cfBind18770.push(cfIn8255.maximum),
    cfBind18770
  );
}
export function normalizeColorScaleConfig(cfIn4497: unknown) {
  if (cfIn4497.colors && cfIn4497.colors.length >= 2) return cfIn4497;
  let cfBind13739 = cfIn4497.criteria;
  if (!cfBind13739)
    throw Error(
      'colorScale rules require "colors" (2-3 entries) or "criteria".',
    );
  let cfBind13740 = colorScaleCriteriaList(cfBind13739),
    cfBind13741 = cfBind13740
      .map((item) => item.color)
      .filter((item) => !!item);
  if (cfBind13741.length < 2)
    throw Error("colorScale criteria require at least 2 color entries.");
  return {
    colors: cfBind13741,
    thresholds: cfBind13740.map((item) => normalizeColorScaleThreshold(item)),
  };
}
export function buildColorScaleRule(
  cfIn5885: unknown,
  cfIn5886: unknown,
  cfIn5887: unknown,
) {
  let cfBind15863 = themeStyleMapsFromProto(cfIn5885.workbook.theme),
    cfBind15864 = (cfIn5886.colors ?? [])
      .map((item) =>
        resolveSchemeColorToRgb(new WorkbookColor(item).toProto(), cfBind15863),
      )
      .filter((item) => !!item);
  return {
    type: "colorScale",
    priority: cfIn5887,
    formula: [],
    colorScale: {
      cfvos: buildCfvos(cfIn5886.thresholds, cfBind15864.length, "percentile"),
      colors: cfBind15864,
    },
  };
}
