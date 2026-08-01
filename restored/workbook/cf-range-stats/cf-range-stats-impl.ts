// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF range numeric stats (legacy mht/Sht/rangeStats nest).
// Stage-3 wave-125. Unlocks kht leave-behind mid-helpers.

import { isErrorValue } from "../formula-array";
import { crsH } from "./boundary-hooks";

export function coerceCfCellValue(crsIn3913: any) {
  if (!crsIn3913 || crsIn3913.value == null) return null;
  switch (crsIn3913.dataType) {
    case crsH.CellDataType.CELL_DATA_TYPE_NUMBER: {
      let crsBind22431 = Number(crsIn3913.value);
      return Number.isNaN(crsBind22431) ? null : crsBind22431;
    }
    case crsH.CellDataType.CELL_DATA_TYPE_BOOLEAN:
      return crsIn3913.value === "TRUE" || crsIn3913.value === "1";
    case crsH.CellDataType.CELL_DATA_TYPE_DATE:
      return parseExcelDate(crsIn3913.value);
    case crsH.CellDataType.CELL_DATA_TYPE_ERROR:
      return {
        kind: "Error",
        code: String(crsIn3913.value),
      };
    default:
      return crsIn3913.value;
  }
}
export function coerceCfNumeric(crsIn5767: any) {
  let crsBind15694 = coerceCfCellValue(crsIn5767);
  if (crsBind15694 == null) return null;
  if (typeof crsBind15694 == "number")
    return Number.isNaN(crsBind15694) ? null : crsBind15694;
  if (typeof crsBind15694 == "boolean") return +!!crsBind15694;
  if (typeof crsBind15694 == "string") {
    let crsBind22608 = Number(crsBind15694);
    return Number.isNaN(crsBind22608) ? null : crsBind22608;
  }
  return crsBind15694 instanceof Date
    ? toExcelSerial(crsBind15694)
    : (isErrorValue(crsBind15694), null);
}
export function parseExcelDate(crsIn4714: any) {
  if (crsIn4714 instanceof Date)
    return Number.isNaN(crsIn4714.getTime()) ? null : crsIn4714;
  if (typeof crsIn4714 == "number")
    return Number.isFinite(crsIn4714)
      ? new Date(crsH.excelEpochUtc + crsIn4714 * crsH.msPerDay)
      : null;
  if (typeof crsIn4714 != "string") return null;
  let crsBind14000 = Number(crsIn4714);
  if (Number.isFinite(crsBind14000))
    return new Date(crsH.excelEpochUtc + crsBind14000 * crsH.msPerDay);
  if (!crsH.isoDateRe.test(crsIn4714)) return null;
  let crsBind14001 = Date.parse(crsIn4714);
  return Number.isNaN(crsBind14001) ? null : new Date(crsBind14001);
}
export function toExcelSerial(crsIn11818: any) {
  let crsBind22126 = crsIn11818.getTime();
  return Number.isNaN(crsBind22126)
    ? null
    : (crsBind22126 - crsH.excelEpochUtc) / crsH.msPerDay;
}
export function collectRangeNumerics(crsIn7145: any, crsIn7146: any) {
  let crsBind17493 = [];
  for (let crsBind18977 of crsIn7145)
    for (
      let crsBind19625 = crsBind18977.startRow;
      crsBind19625 <= crsBind18977.endRow;
      crsBind19625 += 1
    )
      for (
        let crsBind21287 = crsBind18977.startCol;
        crsBind21287 <= crsBind18977.endCol;
        crsBind21287 += 1
      ) {
        let crsBind22566 = coerceCfNumeric(
          crsIn7146(crsBind19625, crsBind21287),
        );
        crsBind22566 != null && crsBind17493.push(crsBind22566);
      }
  return crsBind17493;
}
export function percentileThreshold(crsIn4185: any) {
  let crsBind13214 = collectRangeNumerics(crsIn4185.ranges, crsIn4185.getCell);
  if (crsBind13214.length === 0) return null;
  let crsBind13215 =
      typeof crsIn4185.rank == "number" && Number.isFinite(crsIn4185.rank)
        ? crsIn4185.rank
        : 10,
    crsBind13216 = crsIn4185.percent
      ? Math.ceil((crsBind13214.length * crsBind13215) / 100)
      : Math.floor(crsBind13215),
    crsBind13217 = Math.max(1, Math.min(crsBind13214.length, crsBind13216)),
    crsBind13218 = crsIn4185.bottom ?? false,
    crsBind13219 = crsBind13214
      .slice()
      .sort((crsIn15928, crsIn15929) =>
        crsBind13218 ? crsIn15928 - crsIn15929 : crsIn15929 - crsIn15928,
      )[crsBind13217 - 1];
  return crsBind13219 === undefined || Number.isNaN(crsBind13219)
    ? null
    : {
        bottom: crsBind13218,
        threshold: crsBind13219,
      };
}
export function aboveAverageThreshold(crsIn3574: any) {
  let crsBind12063 = collectRangeNumerics(crsIn3574.ranges, crsIn3574.getCell);
  if (crsBind12063.length === 0) return null;
  let crsBind12064 =
      crsBind12063.reduce((accumulator, current) => accumulator + current, 0) /
      crsBind12063.length,
    crsBind12065 = crsIn3574.aboveAverage ?? true,
    crsBind12066 = crsIn3574.equalAverage ?? false,
    crsBind12067 = crsBind12064,
    crsBind12068 =
      typeof crsIn3574.stdDev == "number" && Number.isFinite(crsIn3574.stdDev)
        ? Math.abs(crsIn3574.stdDev)
        : 0;
  if (crsBind12068 > 0) {
    let crsBind21117 =
        crsBind12063.reduce(
          (accumulator, current) => accumulator + (current - crsBind12064) ** 2,
          0,
        ) / crsBind12063.length,
      crsBind21118 = Math.sqrt(crsBind21117);
    crsBind12067 =
      crsBind12064 +
      (crsBind12065 ? crsBind21118 : -crsBind21118) * crsBind12068;
  }
  return {
    aboveAverage: crsBind12065,
    equalAverage: crsBind12066,
    threshold: crsBind12067,
  };
}
export function rangeStats(props: any) {
  let crsBind13767 = [];
  for (let crsBind18509 of props.ranges)
    for (
      let crsBind19382 = crsBind18509.startRow;
      crsBind19382 <= crsBind18509.endRow;
      crsBind19382 += 1
    )
      for (
        let crsBind21007 = crsBind18509.startCol;
        crsBind21007 <= crsBind18509.endCol;
        crsBind21007 += 1
      ) {
        let crsBind22447 = coerceCfNumeric(
          props.getCell(crsBind19382, crsBind21007),
        );
        crsBind22447 != null && crsBind13767.push(crsBind22447);
      }
  if (crsBind13767.length === 0) return null;
  let crsBind13768 = crsBind13767
      .slice()
      .sort((crsIn16575, crsIn16576) => crsIn16575 - crsIn16576),
    crsBind13769 = crsBind13768[0] ?? 0;
  return {
    values: crsBind13767,
    sortedValues: crsBind13768,
    min: crsBind13769,
    max: crsBind13768[crsBind13768.length - 1] ?? crsBind13769,
  };
}

/** Legacy aliases (wave-125). */
export const sht = parseExcelDate;
export const cht = toExcelSerial;
export const Sht = collectRangeNumerics;
export const pht = percentileThreshold;
export const mht = aboveAverageThreshold;
export const buildIconStats = rangeStats;
