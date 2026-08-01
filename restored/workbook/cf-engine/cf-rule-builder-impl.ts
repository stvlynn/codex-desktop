// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: build CF runtime rules (legacy kht) + icon index (Lht) + truthy (zht).
// Stage-3 wave-131.

import { Aht, Mht, pht, mht, coerceCfNumeric } from "../cf-range-stats";
import { buildConditionalFormatDxfColorMaps as jht } from "../cf-dxf-color-maps";
import {
  buildColorScaleRuntime as Nht,
  buildDataBarRuntime as Pht,
} from "../conditional-format";
import { Fht } from "../cf-icon-color-scale";
import { Vht, Wht } from "./cf-fill-engine-impl";

export function kht(ceIn196: any) {
  let {
      sheetName,
      conditionalFormattings,
      dxfs,
      themeMap,
      getCell,
      evaluateExpression,
    } = ceIn196,
    { dxfFillById, dxfFontById } = jht(dxfs, themeMap),
    ceBind3070 = [],
    ceBind3071 = [],
    ceBind3072 = [],
    ceBind3073 = [];
  for (let ceBind3261 of conditionalFormattings) {
    let ceBind3274 = Aht(ceBind3261.ranges ?? [], sheetName);
    if (ceBind3274.length === 0) continue;
    let ceBind3275 = {
      row: ceBind3274[0]?.startRow ?? 0,
      col: ceBind3274[0]?.startCol ?? 0,
    };
    for (let ceBind3333 of ceBind3261.rules ?? []) {
      let ceBind3334 =
          typeof ceBind3333.priority == "number" ? ceBind3333.priority : 9999,
        ceBind3335 =
          dxfFillById.get(ceBind3333.dxfId ?? -1) ??
          (ceBind3333.type === "cellIs" && ceBind3333.dxfId === undefined
            ? Vht
            : null),
        ceBind3336 = dxfFontById.get(ceBind3333.dxfId ?? -1) ?? null;
      if (ceBind3333.type === "cellIs") {
        ceBind3070.push({
          type: "cellIs",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          operator: ceBind3333.operator ?? undefined,
          formula: ceBind3333.formula,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "expression") {
        let ceBind16105 = Mht(ceBind3333);
        if (!ceBind16105) continue;
        ceBind3070.push({
          type: "expression",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          expr: ceBind16105,
          matchCache: new Map(),
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (
        ceBind3333.type === "containsText" ||
        ceBind3333.type === "notContainsText" ||
        ceBind3333.type === "beginsWith" ||
        ceBind3333.type === "endsWith"
      ) {
        ceBind3070.push({
          type: ceBind3333.type,
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          text: ceBind3333.text ?? "",
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (
        ceBind3333.type === "containsBlanks" ||
        ceBind3333.type === "notContainsBlanks"
      ) {
        ceBind3070.push({
          type: ceBind3333.type,
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (
        ceBind3333.type === "containsErrors" ||
        ceBind3333.type === "notContainsErrors"
      ) {
        ceBind3070.push({
          type: ceBind3333.type,
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "timePeriod" && ceBind3333.formula.length > 0) {
        let ceBind16106 = Mht(ceBind3333);
        if (!ceBind16106) continue;
        ceBind3070.push({
          type: "expression",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          expr: ceBind16106,
          matchCache: new Map(),
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "timePeriod" && ceBind3333.timePeriod) {
        ceBind3070.push({
          type: "timePeriod",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          timePeriod: ceBind3333.timePeriod,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (
        ceBind3333.type === "duplicateValues" ||
        ceBind3333.type === "uniqueValues"
      ) {
        ceBind3070.push({
          type: ceBind3333.type,
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          valueCounts: fht({
            ranges: ceBind3274,
            getCell,
          }),
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "top10") {
        let ceBind14043 = pht({
          ranges: ceBind3274,
          getCell,
          rank: ceBind3333.rank,
          percent: ceBind3333.percent,
          bottom: ceBind3333.bottom,
        });
        if (!ceBind14043) continue;
        ceBind3070.push({
          type: "top10",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          threshold: ceBind14043,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "aboveAverage") {
        let ceBind13423 = mht({
          ranges: ceBind3274,
          getCell,
          aboveAverage: ceBind3333.aboveAverage,
          equalAverage: ceBind3333.equalAverage,
          stdDev: ceBind3333.stdDev,
        });
        if (!ceBind13423) continue;
        ceBind3070.push({
          type: "aboveAverage",
          ranges: ceBind3274,
          anchor: ceBind3275,
          priority: ceBind3334,
          threshold: ceBind13423,
          fillCss: ceBind3335,
          fontColor: ceBind3336,
        });
        continue;
      }
      if (ceBind3333.type === "colorScale" && ceBind3333.colorScale) {
        let ceBind22249 = Nht(
          ceBind3333,
          ceBind3274,
          ceBind3334,
          getCell,
          themeMap,
        );
        ceBind22249 && ceBind3071.push(ceBind22249);
        continue;
      }
      if (ceBind3333.type === "dataBar" && ceBind3333.dataBar) {
        let ceBind22250 = Pht(
          ceBind3333,
          ceBind3274,
          ceBind3334,
          getCell,
          themeMap,
        );
        ceBind22250 && ceBind3072.push(ceBind22250);
        continue;
      }
      if (ceBind3333.type === "iconSet" && ceBind3333.iconSet) {
        let ceBind22632 = Fht(ceBind3333, ceBind3274, ceBind3334, getCell);
        ceBind22632 && ceBind3073.push(ceBind22632);
      }
    }
  }
  return new Wht({
    sheetName,
    getCell,
    evaluateExpression,
    conditionalRules: ceBind3070,
    colorScaleRules: ceBind3071,
    dataBarRules: ceBind3072,
    iconSetRules: ceBind3073,
  });
}

export const buildConditionalFormatEngine = kht;
export {
  Lht,
  zht,
  iconSetIndexForValue,
  coerceCfTruthy,
} from "./cf-icon-index-impl";
