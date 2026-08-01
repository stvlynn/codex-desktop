// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF cell match helpers (legacy tht..xht / fht / aht).
// Stage-3 wave-131 — unlock bag for kht.

import { isErrorValue } from "../formula-array";
import {
  coerceCfCellValue,
  coerceCfNumeric,
  parseExcelDate as sht,
  toExcelSerial as cht,
} from "../cf-range-stats";
import { matchesCfDatePeriod as oht } from "../conditional-format";
import { msPerDay } from "./cf-epoch";

export function tht(ceIn8048: any) {
  if (!ceIn8048 || ceIn8048.value == null) return null;
  let ceBind18551 = coerceCfCellValue(ceIn8048);
  return ceBind18551 == null
    ? null
    : ceBind18551 instanceof Date
      ? ceBind18551.toISOString()
      : isErrorValue(ceBind18551)
        ? ceBind18551.code
        : String(ceBind18551);
}
export function nht(ceIn8937: any) {
  let ceBind19492 = coerceCfCellValue(ceIn8937);
  return ceBind19492 instanceof Date
    ? Number.isNaN(ceBind19492.getTime())
      ? null
      : ceBind19492
    : ceIn8937?.value == null
      ? null
      : sht(ceIn8937.value);
}
export function rht(ceIn6402: any) {
  if (!ceIn6402) return false;
  let ceBind16576 =
      ceIn6402.value != null && String(ceIn6402.value).trim() !== "",
    ceBind16577 = !!ceIn6402.paragraphs?.some((ceIn13988) =>
      ceIn13988.runs?.some((ceIn15840) => (ceIn15840.text ?? "").length > 0),
    ),
    ceBind16578 =
      !!ceIn6402.formula || typeof ceIn6402.sharedFormulaSi == "number";
  return ceBind16576 || ceBind16577 || ceBind16578;
}
export function iht(ceIn9054: any) {
  let ceBind19624 = coerceCfCellValue(ceIn9054);
  if (isErrorValue(ceBind19624)) return true;
  if (typeof ceBind19624 == "string") {
    let ceBind22558 = ceBind19624.trim();
    return /^#[A-Z0-9\/!?:._-]+$/i.test(ceBind22558);
  }
  return false;
}
export function aht(ceIn4176: any) {
  let ceBind13199 = coerceCfCellValue(ceIn4176);
  if (ceBind13199 == null) return null;
  if (ceBind13199 instanceof Date) {
    let ceBind22656 = cht(ceBind13199);
    return ceBind22656 == null ? null : `d:${ceBind22656}`;
  }
  return isErrorValue(ceBind13199)
    ? `e:${ceBind13199.code.trim().toUpperCase()}`
    : typeof ceBind13199 == "string"
      ? `s:${ceBind13199.trim().toLocaleLowerCase()}`
      : typeof ceBind13199 == "number"
        ? `n:${lht(ceBind13199)}`
        : typeof ceBind13199 == "boolean"
          ? ceBind13199
            ? "b:true"
            : "b:false"
          : null;
}
export function lht(ceIn12585: any) {
  return Number.isInteger(ceIn12585)
    ? `${ceIn12585}`
    : ceIn12585.toPrecision(15);
}
export function workbookHelper1016(ceIn15480: any, ceIn15481: any) {
  return ceIn15480 + ceIn15481 * msPerDay;
}
export function workbookHelper1017(ceIn13901: any) {
  return workbookHelper1016(ceIn13901, -new Date(ceIn13901).getUTCDay());
}
export function workbookHelper1018(ceIn11392: any) {
  let ceBind21851 = new Date(ceIn11392);
  return Date.UTC(ceBind21851.getUTCFullYear(), ceBind21851.getUTCMonth(), 1);
}
export function workbookHelper1019(ceIn11220: any) {
  let ceBind21695 = new Date(ceIn11220);
  return Date.UTC(
    ceBind21695.getUTCFullYear(),
    ceBind21695.getUTCMonth() + 1,
    1,
  );
}
export function fht(ceIn6339: any) {
  let ceBind16484 = new Map();
  for (let ceBind17923 of ceIn6339.ranges)
    for (
      let ceBind18733 = ceBind17923.startRow;
      ceBind18733 <= ceBind17923.endRow;
      ceBind18733 += 1
    )
      for (
        let ceBind20377 = ceBind17923.startCol;
        ceBind20377 <= ceBind17923.endCol;
        ceBind20377 += 1
      ) {
        let ceBind21883 = aht(ceIn6339.getCell(ceBind18733, ceBind20377));
        ceBind21883 != null &&
          ceBind16484.set(ceBind21883, (ceBind16484.get(ceBind21883) ?? 0) + 1);
      }
  return ceBind16484;
}
export function hht(ceIn5028: any, ceIn5029: any, ceIn5030: any) {
  let ceBind14481 = ceIn5029.trim().toLocaleLowerCase();
  if (!ceBind14481) return false;
  let ceBind14482 = tht(ceIn5030)?.toLocaleLowerCase();
  if (!ceBind14482) return false;
  switch (ceIn5028) {
    case "containsText":
      return ceBind14482.includes(ceBind14481);
    case "notContainsText":
      return !ceBind14482.includes(ceBind14481);
    case "beginsWith":
      return ceBind14482.startsWith(ceBind14481);
    case "endsWith":
      return ceBind14482.endsWith(ceBind14481);
  }
}
export function ght(ceIn12335: any, ceIn12336: any) {
  let ceBind22389 = rht(ceIn12336);
  return ceIn12335 === "containsBlanks" ? !ceBind22389 : ceBind22389;
}
export function _ht(ceIn12337: any, ceIn12338: any) {
  let ceBind22390 = iht(ceIn12338);
  return ceIn12337 === "containsErrors" ? ceBind22390 : !ceBind22390;
}
export function vht(ceIn9807: any, ceIn9808: any, ceIn9809: any) {
  let ceBind20349 = aht(ceIn9809);
  if (ceBind20349 == null) return false;
  let ceBind20350 = ceIn9808.get(ceBind20349) ?? 0;
  return ceIn9807 === "duplicateValues" ? ceBind20350 > 1 : ceBind20350 === 1;
}
export function yht(ceIn10910: any, ceIn10911: any) {
  let ceBind21421 = coerceCfNumeric(ceIn10911);
  return ceBind21421 == null
    ? false
    : ceIn10910.bottom
      ? ceBind21421 <= ceIn10910.threshold
      : ceBind21421 >= ceIn10910.threshold;
}
export function bht(ceIn7217: any, ceIn7218: any) {
  let ceBind17577 = coerceCfNumeric(ceIn7218);
  return ceBind17577 == null
    ? false
    : ceIn7217.aboveAverage
      ? ceIn7217.equalAverage
        ? ceBind17577 >= ceIn7217.threshold
        : ceBind17577 > ceIn7217.threshold
      : ceIn7217.equalAverage
        ? ceBind17577 <= ceIn7217.threshold
        : ceBind17577 < ceIn7217.threshold;
}
export function xht(ceIn12782: any, ceIn12783: any, ceIn12784: any) {
  let ceBind22501 = nht(ceIn12783);
  return ceBind22501 ? oht(ceIn12782, ceBind22501, ceIn12784) : false;
}

export const cellTextKey = tht;
export const cellDateValue = nht;
export const cellHasContent = rht;
export const cellIsError = iht;
export const cellValueKey = aht;
export const preciseNumberKey = lht;
export const addUtcDays = workbookHelper1016;
export const weekStartUtc = workbookHelper1017;
export const monthStartUtc = workbookHelper1018;
export const monthEndUtc = workbookHelper1019;
export const countValueKeysInRanges = fht;
export const matchTextCf = hht;
export const matchBlankCf = ght;
export const matchErrorCf = _ht;
export const matchDuplicateCf = vht;
export const matchTopBottomCf = yht;
export const matchAverageCf = bht;
export const matchTimePeriodCf = xht;
