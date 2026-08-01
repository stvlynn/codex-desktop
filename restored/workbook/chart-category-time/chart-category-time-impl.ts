// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: time-category chart ticks (legacy zye/Bye nest; dead @ wave-127).
// Stage-3 wave-127.

import { cctH } from "./boundary-hooks";
import {
  workbookHelper446,
  workbookHelper451,
  workbookHelper452,
} from "./category-label-serial-impl";

export function planCategoryTicks(cctIn6616: any, cctIn6617: any) {
  let cctBind16900 = cctIn6617.filter(Number.isFinite);
  if (cctBind16900.length === 0) return;
  let cctBind16901 = Math.min(...cctBind16900),
    cctBind16902 = Math.max(...cctBind16900),
    cctBind16903 = resolveTimeUnit(cctIn6616),
    cctBind16904 =
      cctIn6616.min ??
      (cctBind16903
        ? floorToTimeUnit(cctBind16901, cctBind16903)
        : cctBind16901),
    cctBind16905 =
      cctIn6616.max ??
      (cctBind16903
        ? categoryTickStep(cctBind16902, cctBind16903)
        : cctBind16902);
  return cctBind16904 === cctBind16905
    ? [cctBind16904, cctBind16904 + 1]
    : [cctBind16904, cctBind16905];
}
export function filterCategoryDomain(cctIn5422: any, cctIn5423: any) {
  let cctBind15174 = cctIn5423[0],
    cctBind15175 = cctIn5423[cctIn5423.length - 1];
  if (cctBind15174 === undefined || cctBind15175 === undefined) return;
  let cctBind15176 = resolveTimeUnit(cctIn5422);
  if (!cctBind15176) return;
  let cctBind15177 = Math.min(cctBind15174, cctBind15175),
    cctBind15178 = Math.max(cctBind15174, cctBind15175),
    cctBind15179 = categoryTickStep(cctBind15177, cctBind15176),
    cctBind15180 = [];
  for (
    let cctBind22532 = cctBind15179;
    cctBind22532 <= cctBind15178;
    cctBind22532 = buildTimeCategoryTicks(cctBind22532, cctBind15176)
  )
    cctBind15180.push(Number(cctBind22532.toPrecision(15)));
  return (
    cctBind15175 < cctBind15174 && cctBind15180.reverse(),
    cctBind15180.map(String)
  );
}
export function buildCategorySeries(cctIn3259: any, cctIn3260: any) {
  let cctBind11485 = planCategoryTicks(cctIn3259, cctIn3260.map(Number));
  if (!cctBind11485) return;
  let cctBind11486 = filterCategoryDomain(cctIn3259, cctBind11485);
  if (!cctBind11486) return;
  let cctBind11487 = cctIn3260
    .map((item) => ({
      category: item,
      value: Number(item),
    }))
    .filter(({ value }) => Number.isFinite(value));
  if (cctBind11487.length !== 0)
    return cctBind11486.map((item) => {
      let cctBind16125 = Number(item),
        cctBind16126 = cctBind11487[0];
      for (let cctBind21863 of cctBind11487.slice(1))
        (cctBind16126 &&
          Math.abs(cctBind21863.value - cctBind16125) >=
            Math.abs(cctBind16126.value - cctBind16125)) ||
          (cctBind16126 = cctBind21863);
      if (!cctBind16126) throw Error("Expected a date-axis category");
      return {
        positionCategory: cctBind16126.category,
        serial: cctBind16125,
        label: workbookHelper446(item, cctIn3259),
      };
    });
}
export function resolveTimeUnit(cctIn5295: any) {
  let cctBind14907 = cctIn5295.majorUnit,
    cctBind14908 = cctIn5295.majorTimeUnit ?? cctIn5295.baseTimeUnit;
  if (
    !(
      cctBind14907 === undefined ||
      !Number.isFinite(cctBind14907) ||
      cctBind14907 <= 0 ||
      cctBind14908 === undefined ||
      cctBind14908 === cctH.presentationN.TIME_UNIT_UNSPECIFIED ||
      cctBind14908 === cctH.presentationN.UNRECOGNIZED
    ) &&
    !(
      cctBind14908 !== cctH.presentationN.TIME_UNIT_DAYS &&
      !Number.isInteger(cctBind14907)
    )
  )
    return {
      count: cctBind14907,
      unit: cctBind14908,
    };
}
export function floorToTimeUnit(cctIn4347: any, cctIn4348: any) {
  if (cctIn4348.unit === cctH.presentationN.TIME_UNIT_DAYS)
    return Math.floor(cctIn4347 / cctIn4348.count) * cctIn4348.count;
  let cctBind13473 = workbookHelper451(cctIn4347);
  if (cctIn4348.unit === cctH.presentationN.TIME_UNIT_MONTHS) {
    let cctBind19646 =
        cctBind13473.getUTCFullYear() * 12 + cctBind13473.getUTCMonth(),
      cctBind19647 =
        Math.floor(cctBind19646 / cctIn4348.count) * cctIn4348.count;
    return workbookHelper452(
      new Date(Date.UTC(Math.floor(cctBind19647 / 12), cctBind19647 % 12, 1)),
    );
  }
  let cctBind13474 =
    Math.floor(cctBind13473.getUTCFullYear() / cctIn4348.count) *
    cctIn4348.count;
  return workbookHelper452(new Date(Date.UTC(cctBind13474, 0, 1)));
}
export function categoryTickStep(cctIn12876: any, cctIn12877: any) {
  let cctBind22520 = floorToTimeUnit(cctIn12876, cctIn12877);
  return cctBind22520 >= cctIn12876
    ? cctBind22520
    : buildTimeCategoryTicks(cctBind22520, cctIn12877);
}
export function buildTimeCategoryTicks(cctIn6407: any, cctIn6408: any) {
  if (cctIn6408.unit === cctH.presentationN.TIME_UNIT_DAYS)
    return cctIn6407 + cctIn6408.count;
  let cctBind16583 = workbookHelper451(cctIn6407);
  return cctIn6408.unit === cctH.presentationN.TIME_UNIT_MONTHS
    ? workbookHelper452(
        new Date(
          Date.UTC(
            cctBind16583.getUTCFullYear(),
            cctBind16583.getUTCMonth() + cctIn6408.count,
            1,
          ),
        ),
      )
    : workbookHelper452(
        new Date(
          Date.UTC(cctBind16583.getUTCFullYear() + cctIn6408.count, 0, 1),
        ),
      );
}

export const zye = filterCategoryDomain;
export const Bye = buildCategorySeries;
