// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF rule range/formula helpers (legacy Aht/Mht).
// Stage-3 wave-130 unlock pieces for kht.

import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import { parseFormula } from "../formula";

export function collectCfRuleRanges(crsIn8108: any, crsIn8109: any) {
  let crsBind18612 = [];
  for (let crsBind20157 of crsIn8108) {
    if (crsBind20157.sheetName && crsBind20157.sheetName !== crsIn8109)
      continue;
    let crsBind20658 = parseA1Range(
      `${crsBind20157.startAddress}:${crsBind20157.endAddress}`,
    );
    crsBind20658 && crsBind18612.push(crsBind20658.bounds);
  }
  return crsBind18612;
}
export function pointInCfRanges(
  crsIn9731: any,
  crsIn9732: any,
  crsIn9733: any,
) {
  for (let crsBind21491 of crsIn9733)
    if (
      crsIn9731 >= crsBind21491.startRow &&
      crsIn9731 <= crsBind21491.endRow &&
      crsIn9732 >= crsBind21491.startCol &&
      crsIn9732 <= crsBind21491.endCol
    )
      return true;
  return false;
}
export function parseCfFormulaExpr(props: any) {
  let crsBind17578 = Array.isArray(props.formula)
      ? props.formula[0]
      : props.formula,
    crsBind17579 = crsBind17578 == null ? "" : String(crsBind17578).trim();
  if (!crsBind17579) return null;
  let crsBind17580 = parseFormula(
    crsBind17579.startsWith("=") ? crsBind17579 : `=${crsBind17579}`,
  );
  return crsBind17580.errors.length > 0 ? null : crsBind17580.expr;
}

export const Aht = collectCfRuleRanges;
export const workbookHelper1021 = pointInCfRanges;
export const Mht = parseCfFormulaExpr;
