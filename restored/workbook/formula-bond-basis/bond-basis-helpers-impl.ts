// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bond settlement/basis coerce helpers (Kat, parseSettlementMaturity…isBondError). Stage-3 wave-121.

import { fbbH } from "./boundary-hooks";

export function parseSettlementMaturity(
  fbbIn7355: any,
  fbbIn7356: any,
  fbbIn7357: any,
) {
  let fbbBind17752 = coerceBondDate(fbbIn7355);
  if (isBondError(fbbBind17752)) return fbbBind17752;
  let fbbBind17753 = coerceBondDate(fbbIn7356);
  if (isBondError(fbbBind17753)) return fbbBind17753;
  if (fbbBind17752.getTime() >= fbbBind17753.getTime()) return fbbH.NUM_ERROR;
  let fbbBind17754 = qat(fbbIn7357);
  return isBondError(fbbBind17754)
    ? fbbBind17754
    : {
        settlement: fbbBind17752,
        maturity: fbbBind17753,
        convention: fbbBind17754,
      };
}
export function Gat(
  fbbIn10198: any,
  fbbIn10199: any,
  fbbIn10200: any,
  fbbIn10201: any,
) {
  let fbbBind20653 = parseSettlementMaturity(
    fbbIn10198,
    fbbIn10199,
    fbbIn10201,
  );
  if (isBondError(fbbBind20653)) return fbbBind20653;
  let fbbBind20654 = Jat(fbbIn10200);
  return isBondError(fbbBind20654)
    ? fbbBind20654
    : {
        ...fbbBind20653,
        frequency: fbbBind20654,
      };
}
export function $8(
  fbbIn4943: any,
  fbbIn4944: any,
  fbbIn4945: any,
  fbbIn4946: any,
) {
  let fbbBind14341 = Gat(fbbIn4943, fbbIn4944, fbbIn4945, fbbIn4946);
  if (isBondError(fbbBind14341)) return fbbBind14341;
  let fbbBind14342 = fbbBind1898(
      fbbBind14341.settlement,
      fbbBind14341.maturity,
      fbbBind14341.frequency,
    ),
    fbbBind14343 = fbbBind1899(
      fbbBind14341.settlement,
      fbbBind14341.maturity,
      fbbBind14341.frequency,
    ),
    fbbBind14344 = fbbBind1895(
      fbbBind14342,
      fbbBind14343,
      fbbBind14341.frequency,
      fbbBind14341.convention,
    ),
    fbbBind14345 = fbbH.dayCount(
      fbbBind14342,
      fbbBind14341.settlement,
      fbbBind14341.convention,
    );
  return fbbBind14344 <= 0 || fbbBind14345 < 0
    ? fbbH.NUM_ERROR
    : {
        ...fbbBind14341,
        previousCoupon: fbbBind14342,
        nextCoupon: fbbBind14343,
        periodDays: fbbBind14344,
        accruedDays: fbbBind14345,
      };
}
export function Kat(
  fbbIn8349: any,
  fbbIn8350: any,
  fbbIn8351: any,
  fbbIn8352: any,
) {
  let fbbBind18847 = parseSettlementMaturity(fbbIn8349, fbbIn8350, fbbIn8352);
  if (isBondError(fbbBind18847)) return fbbBind18847;
  let fbbBind18848 = coerceBondDate(fbbIn8351);
  return isBondError(fbbBind18848)
    ? fbbBind18848
    : fbbBind18848.getTime() >= fbbBind18847.settlement.getTime()
      ? fbbH.NUM_ERROR
      : {
          ...fbbBind18847,
          issue: fbbBind18848,
        };
}
export function coerceBondNumber(fbbIn13573: any) {
  let fbbBind22680 = unwrapBondArg(fbbIn13573);
  return isBondError(fbbBind22680) ? fbbBind22680 : Xat(fbbBind22680);
}
export function coerceBondDate(fbbIn7525: any) {
  let fbbBind18006 = unwrapBondArg(fbbIn7525);
  return isBondError(fbbBind18006)
    ? fbbBind18006
    : fbbBind18006 === "" || fbbBind18006 === null
      ? fbbH.VALUE_ERROR
      : typeof fbbBind18006 == "number"
        ? (Qat(fbbBind18006) ?? fbbH.VALUE_ERROR)
        : typeof fbbBind18006 == "string"
          ? ($at(fbbBind18006) ?? fbbH.VALUE_ERROR)
          : fbbH.VALUE_ERROR;
}
export function qat(fbbIn4936: any) {
  if (fbbIn4936 === undefined) return fbbH.DEFAULT_BASIS;
  let fbbBind14331 = unwrapBondArg(fbbIn4936);
  if (isBondError(fbbBind14331)) return fbbBind14331;
  if (fbbBind14331 === "" || fbbBind14331 === null) return fbbH.DEFAULT_BASIS;
  if (typeof fbbBind14331 == "boolean")
    return fbbBind14331
      ? (fbbH.BASIS_MAP[1] ?? fbbH.NUM_ERROR)
      : fbbH.DEFAULT_BASIS;
  if (typeof fbbBind14331 == "number")
    return fbbH.BASIS_MAP[Math.trunc(fbbBind14331)] ?? fbbH.NUM_ERROR;
  if (typeof fbbBind14331 == "string") {
    let fbbBind22095 = Number(fbbBind14331);
    return Number.isFinite(fbbBind22095)
      ? (fbbH.BASIS_MAP[Math.trunc(fbbBind22095)] ?? fbbH.NUM_ERROR)
      : fbbH.VALUE_ERROR;
  }
  return fbbH.VALUE_ERROR;
}
export function Jat(fbbIn9783: any) {
  let fbbBind20323 = coerceBondNumber(fbbIn9783);
  return typeof fbbBind20323 == "number" &&
    (!Number.isInteger(fbbBind20323) ||
      (fbbBind20323 !== 1 && fbbBind20323 !== 2 && fbbBind20323 !== 4))
    ? fbbH.NUM_ERROR
    : fbbBind20323;
}
export function bondDayCount(
  fbbIn15208: any,
  fbbIn15209: any,
  fbbIn15210: any,
) {
  return fbbH.dayCount(fbbIn15208, fbbIn15209, fbbIn15210);
}
export function bondDaysInYear(fbbIn8618: any, fbbIn8619: any) {
  switch (fbbIn8618) {
    case "ACTUAL/ACTUAL":
      return eot(fbbIn8619.getUTCFullYear()) ? 366 : 365;
    case "ACTUAL/365":
      return 365;
    default:
      return 360;
  }
}
export function unwrapBondArg(fbbIn7728: any) {
  if (fbbIn7728 === undefined) return fbbH.VALUE_ERROR;
  if (Array.isArray(fbbIn7728)) {
    for (let fbbBind21725 of fbbIn7728)
      if (fbbBind21725) {
        for (let fbbBind22829 of fbbBind21725)
          if (fbbBind22829 !== undefined) return Yat(fbbBind22829 ?? "");
      }
    return "";
  }
  return Yat(fbbIn7728);
}
export function Yat(fbbIn12525: any) {
  return isBondError(fbbIn12525)
    ? fbbIn12525
    : fbbIn12525 instanceof Error || isFormulaLambda(fbbIn12525)
      ? fbbH.VALUE_ERROR
      : fbbIn12525;
}
export function Xat(fbbIn6486: any) {
  if (fbbIn6486 === "" || fbbIn6486 === null) return fbbH.VALUE_ERROR;
  if (typeof fbbIn6486 == "number")
    return Number.isFinite(fbbIn6486) ? fbbIn6486 : fbbH.VALUE_ERROR;
  if (typeof fbbIn6486 == "boolean") return +!!fbbIn6486;
  if (typeof fbbIn6486 == "string") {
    let fbbBind22592 = Number(fbbIn6486);
    return Number.isFinite(fbbBind22592) ? fbbBind22592 : fbbH.VALUE_ERROR;
  }
  return fbbH.VALUE_ERROR;
}
export function Zat(props: any) {
  return (props.getTime() - fbbH.EPOCH_UTC_MS) / fbbH.DAY_MS;
}
export function Qat(fbbIn11218: any) {
  if (!Number.isFinite(fbbIn11218)) return null;
  let fbbBind21690 = fbbH.EPOCH_UTC_MS + fbbIn11218 * fbbH.DAY_MS;
  return new Date(fbbBind21690);
}
export function $at(fbbIn10280: any) {
  let fbbBind20748 = fbbIn10280.trim();
  if (!fbbBind20748) return null;
  let fbbBind20749 = Date.parse(fbbBind20748);
  return Number.isNaN(fbbBind20749) ? null : new Date(fbbBind20749);
}
export function eot(fbbIn12330: any) {
  return fbbIn12330 % 4 == 0
    ? fbbIn12330 % 100 == 0
      ? fbbIn12330 % 400 == 0
      : true
    : false;
}
export function tot(fbbIn15839: any) {
  return fbbH.NUM_ERROR;
}
export function isBondError(fbbIn12582: any) {
  return (
    typeof fbbIn12582 == "object" && !!fbbIn12582 && fbbIn12582.kind === "Error"
  );
}
export function isFormulaLambda(fbbIn12465: any) {
  return (
    typeof fbbIn12465 == "object" &&
    !!fbbIn12465 &&
    fbbIn12465.kind === "Lambda"
  );
}
