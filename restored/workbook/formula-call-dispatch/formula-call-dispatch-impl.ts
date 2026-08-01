// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel formula call dispatch / arg-compat (eft/Tft)
// + Nft ESM (SSF format bridge, error code maps, formula name sets).
// Stage-3 wave-120. Legacy requiredArg-cluster..Hft/Nft.

import { esmInit, toEsm } from "../../runtime/rolldown-runtime";
import workbookSsf from "../../vendor/ssf";
import {
  createArrayValue,
  isArrayValue,
  copyRangeMetadata,
  ensureFormulaArrayInit,
} from "../formula-array";
import { $dt, Xdt, Zdt } from "../formula-registry";

const getWorkbookSsf = (): typeof workbookSsf => workbookSsf;

export function requiredArg(fcdIn9957: any, fcdIn9958: any) {
  let fcdBind20475 = fcdIn9957[fcdIn9958];
  return fcdBind20475 === undefined
    ? {
        __requiredArgError: true,
        error: {
          kind: "Error",
          code: "#VALUE!",
        },
      }
    : fcdBind20475;
}
export function isRequiredArgError(fcdIn12038: any) {
  return (
    typeof fcdIn12038 == "object" &&
    !!fcdIn12038 &&
    fcdIn12038.__requiredArgError === true
  );
}
export function mapArgOrDefault(
  fcdIn12642: any,
  fcdIn12643: any,
  fcdIn12644: any,
  fcdIn12645: any,
) {
  let fcdBind22473 = fcdIn12642[fcdIn12643];
  return fcdBind22473 === undefined ? fcdIn12645 : fcdIn12644(fcdBind22473);
}
export function eft(fcdIn2318: any, fcdIn2319: any) {
  let fcdBind9437 = Aft(fcdIn2318.toUpperCase()),
    fcdBind9438 = zft[fcdBind9437],
    fcdBind9439 = fcdBind9438 ? Cft(fcdIn2319, fcdBind9438) : fcdIn2319;
  if (
    (fcdBind9437 === "AVERAGE" && (fcdBind9439 = yft(fcdBind9439)),
    fcdBind9437 === "AVERAGEIF" && (fcdBind9439 = bft(fcdBind9439)),
    fcdBind9437 === "AVERAGEIFS" && (fcdBind9439 = xft(fcdBind9439)),
    fcdBind9437 === "MEDIAN" && (fcdBind9439 = pft(fcdBind9439)),
    fcdBind9437 === "SUMIF" && (fcdBind9439 = mft(fcdBind9439)),
    fcdBind9437 === "SUMIFS" && (fcdBind9439 = hft(fcdBind9439)),
    fcdBind9437 === "NORMSDIST")
  )
    return lft(fcdBind9439, false);
  if (fcdBind9437 === "NORM.S.DIST") return lft(fcdBind9439, true);
  if (fcdBind9437 === "TEXT") return oft(fcdBind9439);
  if (fcdBind9437 === "ROUND") return sft(fcdBind9439);
  if (fcdBind9437 === "RATE") {
    let fcdBind22848 = Mft(fcdBind9439);
    if (fcdBind22848 != null) return fcdBind22848;
  }
  let fcdBind9440 = tft(fcdBind9437);
  if (!fcdBind9440) return Ift;
  try {
    let fcdBind20752 = Bft.has(fcdBind9437),
      fcdBind20753 = Vft.has(fcdBind9437),
      fcdBind20754 = fcdBind9440(
        ...(fcdBind20752
          ? fcdBind9439
          : fcdBind9439.map((item) => nft(item, fcdBind20753))),
      );
    return Dft(fcdBind20754) ? fcdBind20754 : ift(fcdBind20754);
  } catch (fcdBind23068) {
    return uft(fcdBind23068);
  }
}
export function tft(fcdIn15744: any) {
  return Zdt(fcdIn15744);
}
export function nft(fcdIn5671: any, fcdIn5672: any) {
  if (fcdIn5671 !== undefined) {
    if (kft(fcdIn5671))
      return fcdIn5671.values.map((item) =>
        item.map((_item) => coerceInboundCellValue(_item, fcdIn5672)),
      );
    if (Array.isArray(fcdIn5671)) {
      let fcdBind20285 = rft(fcdIn5671);
      if (fcdBind20285 !== undefined)
        return coerceInboundCellValue(fcdBind20285, fcdIn5672);
      let fcdBind20286 = fcdIn5671.map((item) =>
        item.map((_item) => coerceInboundCellValue(_item, fcdIn5672)),
      );
      return (copyRangeMetadata(fcdIn5671, fcdBind20286), fcdBind20286);
    }
    if (Oft(fcdIn5671)) return coerceInboundCellValue(fcdIn5671, fcdIn5672);
  }
}
export function coerceInboundCellValue(event: any, fcdIn5766: any) {
  if (isFormulaErrorValue(event))
    return workbookBinding1949.get(event.code) ?? Error(event.code);
  if (dft(event)) return Error("#VALUE!");
  if (typeof event == "string" && !fcdIn5766) {
    let fcdBind20026 = event.trim();
    if (fcdBind20026 === "" && event !== "") return event;
    if (fcdBind20026 !== "") {
      let fcdBind22537 = Number(fcdBind20026);
      if (Number.isFinite(fcdBind22537)) return fcdBind22537;
    }
  }
  return event;
}
export function rft(fcdIn10820: any) {
  if (fcdIn10820.length !== 1) return;
  let [fcdBind21342] = fcdIn10820;
  if (!(!fcdBind21342 || fcdBind21342.length !== 1))
    return fcdBind21342[0] ?? null;
}
export function ift(fcdIn10635: any) {
  return Array.isArray(fcdIn10635)
    ? createArrayValue(
        fcdIn10635.map((item) =>
          Array.isArray(item)
            ? item.map(normalizeOutboundCellValue)
            : [normalizeOutboundCellValue(item)],
        ),
      )
    : normalizeOutboundCellValue(fcdIn10635);
}
export function normalizeOutboundCellValue(fcdIn5164: any) {
  if (isFormulaErrorValue(fcdIn5164)) return fcdIn5164;
  if (fft(fcdIn5164))
    return {
      kind: "Error",
      code:
        workbookBinding1950.get(fcdIn5164) ??
        fcdIn5164.message ??
        workbookBinding1951.code,
    };
  if (fcdIn5164 instanceof Date) return aft(fcdIn5164);
  let fcdBind14666 = fcdIn5164;
  return fcdBind14666 == null
    ? ""
    : typeof fcdBind14666 == "number" ||
        typeof fcdBind14666 == "string" ||
        typeof fcdBind14666 == "boolean"
      ? typeof fcdBind14666 == "number" && !Number.isFinite(fcdBind14666)
        ? Fft
        : fcdBind14666
      : workbookBinding1951;
}
export function aft(fcdIn10364: any) {
  let fcdBind20837 = fcdIn10364.getFullYear(),
    fcdBind20838 = fcdIn10364.getMonth(),
    fcdBind20839 = fcdIn10364.getDate();
  return (Date.UTC(fcdBind20837, fcdBind20838, fcdBind20839) - Lft) / Rft;
}
export function oft(fcdIn3154: any) {
  if (fcdIn3154.length < 2)
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind11287 = requiredArg(fcdIn3154, 0);
  if (isRequiredArgError(fcdBind11287)) return fcdBind11287.error;
  let fcdBind11288 = requiredArg(fcdIn3154, 1);
  if (isRequiredArgError(fcdBind11288)) return fcdBind11288.error;
  let fcdBind11289 = unwrapFirstCell(fcdBind11287);
  if (isFormulaErrorValue(fcdBind11289)) return fcdBind11289;
  let fcdBind11290 = unwrapFirstCell(fcdBind11288);
  if (isFormulaErrorValue(fcdBind11290)) return fcdBind11290;
  if (typeof fcdBind11290 != "string")
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind11291;
  if (fcdBind11289 instanceof Date) fcdBind11291 = aft(fcdBind11289);
  else if (typeof fcdBind11289 == "string") {
    let fcdBind22683 = Number(fcdBind11289);
    fcdBind11291 = Number.isFinite(fcdBind22683) ? fcdBind22683 : fcdBind11289;
  } else fcdBind11291 = fcdBind11289;
  try {
    return Nft.format(fcdBind11290, fcdBind11291);
  } catch {
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  }
}
export function sft(fcdIn4023: any) {
  if (fcdIn4023.length === 0)
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind12956 = requiredArg(fcdIn4023, 0);
  if (isRequiredArgError(fcdBind12956)) return fcdBind12956.error;
  let fcdBind12957 = coerceToFiniteNumber(fcdBind12956);
  if (!Number.isFinite(fcdBind12957))
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind12958 = mapArgOrDefault(fcdIn4023, 1, coerceToFiniteNumber, 0);
  if (!Number.isFinite(fcdBind12958))
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind12959 = cft(fcdBind12957, Math.trunc(fcdBind12958));
  return Number.isFinite(fcdBind12959)
    ? Object.is(fcdBind12959, 0)
      ? 0
      : fcdBind12959
    : {
        kind: "Error",
        code: "#NUM!",
      };
}
export function cft(fcdIn6234: any, fcdIn6235: any) {
  if (!Number.isFinite(fcdIn6234) || !Number.isFinite(fcdIn6235)) return NaN;
  if (fcdIn6235 === 0) return Math.round(fcdIn6234);
  let fcdBind16349 = 10 ** Math.min(Math.abs(fcdIn6235), 15);
  if (!Number.isFinite(fcdBind16349)) return fcdIn6234;
  if (fcdIn6235 > 0) return Math.round(fcdIn6234 * fcdBind16349) / fcdBind16349;
  let fcdBind16350 = fcdBind16349;
  return Math.round(fcdIn6234 / fcdBind16350) * fcdBind16350;
}
export function unwrapFirstCell(fcdIn8353: any) {
  if (fcdIn8353 === undefined) return "";
  if (Array.isArray(fcdIn8353)) {
    let fcdBind22655 = fcdIn8353[0];
    return fcdBind22655 && fcdBind22655.length > 0 ? fcdBind22655[0] : "";
  }
  return dft(fcdIn8353)
    ? {
        kind: "Error",
        code: "#VALUE!",
      }
    : fcdIn8353;
}
export function lft(fcdIn6127: any, fcdIn6128: any) {
  let fcdBind16202 = requiredArg(fcdIn6127, 0);
  if (isRequiredArgError(fcdBind16202)) return fcdBind16202.error;
  let fcdBind16203 = coerceToFiniteNumber(fcdBind16202);
  if (!Number.isFinite(fcdBind16203))
    return {
      kind: "Error",
      code: "#VALUE!",
    };
  let fcdBind16204 = fcdIn6128
      ? mapArgOrDefault(
          fcdIn6127,
          1,
          (fcdIn16590) => !!unwrapFirstCell(fcdIn16590),
          true,
        )
      : true,
    fcdBind16205 = tft("NORMDIST");
  return fcdBind16205
    ? fcdBind16205(fcdBind16203, 0, 1, fcdBind16204)
    : {
        kind: "Error",
        code: "#NAME?",
      };
}
export function coerceToFiniteNumber(fcdIn7812: any) {
  let fcdBind18297 = unwrapFirstCell(fcdIn7812);
  if (typeof fcdBind18297 == "number") return fcdBind18297;
  if (typeof fcdBind18297 == "string") {
    let fcdBind22582 = Number(fcdBind18297);
    return Number.isFinite(fcdBind22582) ? fcdBind22582 : NaN;
  }
  return typeof fcdBind18297 == "boolean" ? +!!fcdBind18297 : NaN;
}
export function uft(fcdIn8464: any) {
  return fft(fcdIn8464)
    ? {
        kind: "Error",
        code:
          workbookBinding1950.get(fcdIn8464) ??
          fcdIn8464.message ??
          workbookBinding1951.code,
      }
    : fcdIn8464 instanceof Error && fcdIn8464.message
      ? {
          kind: "Error",
          code: fcdIn8464.message,
        }
      : workbookBinding1951;
}
export function isFormulaErrorValue(fcdIn11715: any) {
  return (
    typeof fcdIn11715 == "object" &&
    !!fcdIn11715 &&
    "kind" in fcdIn11715 &&
    fcdIn11715.kind === "Error"
  );
}
export function dft(fcdIn11612: any) {
  return (
    typeof fcdIn11612 == "object" &&
    !!fcdIn11612 &&
    "kind" in fcdIn11612 &&
    fcdIn11612.kind === "Lambda"
  );
}
export function fft(fcdIn13454: any) {
  return fcdIn13454 instanceof Error
    ? workbookBinding1950.has(fcdIn13454)
    : false;
}
export function pft(fcdIn4511: any) {
  let fcdBind13751 = [];
  for (let fcdBind14667 of fcdIn4511) {
    if (Array.isArray(fcdBind14667)) {
      let fcdBind17356 = fcdBind14667
        .map((item) =>
          item
            .map((_item) =>
              typeof _item == "string" ? parseNumberish(_item) : _item,
            )
            .filter((_item) => !Sft(_item)),
        )
        .filter((item) => item.length > 0);
      fcdBind17356.length > 0 && fcdBind13751.push(fcdBind17356);
      continue;
    }
    let fcdBind15030 =
      typeof fcdBind14667 == "string"
        ? parseNumberish(fcdBind14667)
        : fcdBind14667;
    Sft(fcdBind15030) || fcdBind13751.push(fcdBind15030);
  }
  return fcdBind13751;
}
export function mft(fcdIn6742: any) {
  if (fcdIn6742.length === 0) return fcdIn6742;
  if (fcdIn6742.length === 1) {
    let fcdBind22710 = fcdIn6742[0];
    return fcdBind22710 === undefined
      ? fcdIn6742
      : [mapMatrixParseNumber(fcdBind22710)];
  }
  let fcdBind17035 = fcdIn6742[0],
    fcdBind17036 = fcdIn6742[1];
  if (fcdBind17035 === undefined || fcdBind17036 === undefined)
    return fcdIn6742;
  let fcdBind17037 = fcdIn6742[2] ?? fcdBind17035;
  return [mapMatrixParseNumber(fcdBind17035), fcdBind17036, _ft(fcdBind17037)];
}
export function hft(fcdIn5363: any) {
  if (fcdIn5363.length < 3) return fcdIn5363;
  let fcdBind15072 = fcdIn5363[0],
    fcdBind15073 = fcdIn5363[1],
    fcdBind15074 = fcdIn5363[2];
  if (
    fcdBind15072 === undefined ||
    fcdBind15073 === undefined ||
    fcdBind15074 === undefined
  )
    return fcdIn5363;
  let fcdBind15075 = [
    _ft(fcdBind15072),
    mapMatrixParseNumber(fcdBind15073),
    fcdBind15074,
  ];
  for (
    let fcdBind20287 = 3;
    fcdBind20287 < fcdIn5363.length;
    fcdBind20287 += 1
  ) {
    let fcdBind21447 = fcdIn5363[fcdBind20287];
    if (fcdBind21447 === undefined) continue;
    let fcdBind21448 = (fcdBind20287 - 3) % 2 == 0;
    fcdBind15075.push(
      fcdBind21448 ? mapMatrixParseNumber(fcdBind21447) : fcdBind21447,
    );
  }
  return fcdBind15075;
}
export function mapMatrixParseNumber(fcdIn11004: any) {
  if (Array.isArray(fcdIn11004)) return fcdIn11004.map((item) => item.map(gft));
  if (fcdIn11004 !== undefined) return gft(fcdIn11004);
}
export function gft(fcdIn9089: any) {
  if (typeof fcdIn9089 == "string") {
    let fcdBind21488 = fcdIn9089.trim();
    if (fcdBind21488) {
      let fcdBind22538 = Number(fcdBind21488);
      if (Number.isFinite(fcdBind22538)) return fcdBind22538;
    }
  }
  return fcdIn9089;
}
export function _ft(fcdIn10971: any) {
  if (Array.isArray(fcdIn10971)) return fcdIn10971.map((item) => item.map(vft));
  if (fcdIn10971 !== undefined) return vft(fcdIn10971);
}
export function vft(fcdIn6236: any) {
  if (
    (fcdIn6236 != null && isFormulaErrorValue(fcdIn6236)) ||
    fcdIn6236 instanceof Error
  )
    return fcdIn6236;
  if (fcdIn6236 == null) return 0;
  if (typeof fcdIn6236 == "string") {
    let fcdBind21489 = fcdIn6236.trim();
    if (!fcdBind21489) return 0;
    let fcdBind21490 = Number(fcdBind21489);
    return Number.isFinite(fcdBind21490) ? fcdBind21490 : 0;
  }
  return typeof fcdIn6236 == "boolean" ? +!!fcdIn6236 : fcdIn6236;
}
export function yft(fcdIn14932: any) {
  return fcdIn14932.map((item) => mapDeepParseNumber(item));
}
export function bft(fcdIn8895: any) {
  if (fcdIn8895.length === 0) return fcdIn8895;
  let fcdBind19445 = fcdIn8895[2] === undefined ? 0 : 2,
    fcdBind19446 = fcdIn8895[fcdBind19445];
  if (fcdBind19446 === undefined) return fcdIn8895;
  let fcdBind19447 = [...fcdIn8895];
  return (
    (fcdBind19447[fcdBind19445] = mapDeepParseNumber(fcdBind19446)),
    fcdBind19447
  );
}
export function xft(fcdIn10677: any) {
  if (fcdIn10677.length === 0 || fcdIn10677[0] === undefined) return fcdIn10677;
  let fcdBind21182 = [...fcdIn10677];
  return ((fcdBind21182[0] = mapDeepParseNumber(fcdIn10677[0])), fcdBind21182);
}
export function mapDeepParseNumber(fcdIn11068: any) {
  if (Array.isArray(fcdIn11068))
    return fcdIn11068.map((item) => item.map(parseNumberish));
  if (fcdIn11068 !== undefined) return parseNumberish(fcdIn11068);
}
export function parseNumberish(fcdIn7472: any) {
  if (fcdIn7472 === null) return "";
  if (typeof fcdIn7472 != "string") return fcdIn7472;
  if (fcdIn7472.includes("\xA0")) return "";
  let fcdBind17946 = fcdIn7472.trim();
  if (fcdBind17946 === "") return "";
  let fcdBind17947 = Number(fcdBind17946);
  return Number.isFinite(fcdBind17947) ? fcdBind17947 : "";
}
export function Sft(props: any) {
  return Array.isArray(props)
    ? props.length === 0
    : props == null
      ? true
      : typeof props == "string" && props.trim() === "";
}
export function Cft(fcdIn3314: any, fcdIn3315: any) {
  if (
    fcdIn3314.length <= fcdIn3315.dependentIndex ||
    fcdIn3314.length <= fcdIn3315.independentIndex
  )
    return fcdIn3314;
  let fcdBind11600 = fcdIn3314[fcdIn3315.dependentIndex],
    fcdBind11601 = fcdIn3314[fcdIn3315.independentIndex];
  if (
    fcdBind11600 === undefined ||
    fcdBind11601 === undefined ||
    wft(fcdBind11600) ||
    wft(fcdBind11601)
  )
    return fcdIn3314;
  let fcdBind11602 = Tft(fcdBind11600, fcdBind11601);
  if (
    fcdBind11602.pairedLength !== fcdBind11602.dependentInputLength ||
    fcdBind11602.pairedLength !== fcdBind11602.independentInputLength ||
    (fcdBind11602.dependent.length === fcdBind11602.pairedLength &&
      !fcdBind11602.mutated)
  )
    return fcdIn3314;
  let fcdBind11603 = [...fcdIn3314];
  return (
    (fcdBind11603[fcdIn3315.dependentIndex] = fcdBind11602.dependent),
    (fcdBind11603[fcdIn3315.independentIndex] = fcdBind11602.independent),
    fcdBind11603
  );
}
export function wft(fcdIn9450: any) {
  if (Array.isArray(fcdIn9450)) {
    for (let fcdBind22833 of fcdIn9450)
      for (let fcdBind23040 of fcdBind22833)
        if (isFormulaErrorValue(fcdBind23040)) return true;
    return false;
  }
  return fcdIn9450 === undefined ? false : isFormulaErrorValue(fcdIn9450);
}
export function Tft(fcdIn2605: any, fcdIn2606: any) {
  let fcdBind10037 = Eft(fcdIn2605),
    fcdBind10038 = Eft(fcdIn2606),
    fcdBind10039 = Math.min(fcdBind10037.length, fcdBind10038.length),
    fcdBind10040 = [],
    fcdBind10041 = [],
    fcdBind10042 = false;
  for (let fcdBind13823 = 0; fcdBind13823 < fcdBind10039; fcdBind13823 += 1) {
    let fcdBind14365 = fcdBind10037[fcdBind13823],
      fcdBind14366 = fcdBind10038[fcdBind13823];
    if (fcdBind14365 === undefined || fcdBind14366 === undefined) {
      fcdBind10042 = true;
      continue;
    }
    if (!jft(fcdBind14365) || !jft(fcdBind14366)) {
      fcdBind10042 = true;
      continue;
    }
    let fcdBind14367 =
        typeof fcdBind14365 == "number" ? fcdBind14365 : Number(fcdBind14365),
      fcdBind14368 =
        typeof fcdBind14366 == "number" ? fcdBind14366 : Number(fcdBind14366);
    (typeof fcdBind14365 != "number" || typeof fcdBind14366 != "number") &&
      (fcdBind10042 = true);
    fcdBind10040.push([fcdBind14367]);
    fcdBind10041.push([fcdBind14368]);
  }
  return {
    dependent: fcdBind10040,
    independent: fcdBind10041,
    pairedLength: fcdBind10039,
    dependentInputLength: fcdBind10037.length,
    independentInputLength: fcdBind10038.length,
    mutated: fcdBind10042,
  };
}
export function Eft(fcdIn9367: any) {
  if (Array.isArray(fcdIn9367)) {
    let fcdBind22332 = [];
    for (let fcdBind22981 of fcdIn9367)
      for (let fcdBind23096 of fcdBind22981) fcdBind22332.push(fcdBind23096);
    return fcdBind22332;
  }
  return fcdIn9367 === undefined ? [] : [fcdIn9367];
}
export function Dft(fcdIn15775: any) {
  return isArrayValue(fcdIn15775);
}
export function Oft(fcdIn13646: any) {
  return fcdIn13646 !== undefined && !Array.isArray(fcdIn13646);
}
export function kft(fcdIn15241: any) {
  return Oft(fcdIn15241) && isArrayValue(fcdIn15241);
}
export function Aft(props: any) {
  return props
    .replace(/^_XLFN\._XLWS\./i, "")
    .replace(/^_XLFN\./i, "")
    .replace(/^_XLWS\./i, "")
    .replace(/^_XLPM\./i, "");
}
export function jft(fcdIn7934: any) {
  if (typeof fcdIn7934 == "number") return Number.isFinite(fcdIn7934);
  if (typeof fcdIn7934 == "string") {
    if (fcdIn7934.trim() === "") return false;
    let fcdBind22011 = Number(fcdIn7934);
    return Number.isFinite(fcdBind22011);
  }
  return false;
}
export function Mft(props: any) {
  if (props.length < 3) return null;
  let fcdBind11499 = requiredArg(props, 0),
    fcdBind11500 = requiredArg(props, 1),
    fcdBind11501 = requiredArg(props, 2);
  if (
    isRequiredArgError(fcdBind11499) ||
    isRequiredArgError(fcdBind11500) ||
    isRequiredArgError(fcdBind11501)
  )
    return null;
  let fcdBind11502 = coerceToFiniteNumber(fcdBind11499),
    fcdBind11503 = coerceToFiniteNumber(fcdBind11500),
    fcdBind11504 = coerceToFiniteNumber(fcdBind11501),
    fcdBind11505 = mapArgOrDefault(props, 3, coerceToFiniteNumber, 0);
  if (
    !Number.isFinite(fcdBind11502) ||
    !Number.isFinite(fcdBind11503) ||
    !Number.isFinite(fcdBind11504) ||
    !Number.isFinite(fcdBind11505) ||
    fcdBind11502 <= 0 ||
    fcdBind11503 !== 0 ||
    fcdBind11504 === 0
  )
    return null;
  let fcdBind11506 = -fcdBind11505 / fcdBind11504;
  if (fcdBind11506 < 0) return null;
  let fcdBind11507 = fcdBind11506 ** (1 / fcdBind11502);
  if (!Number.isFinite(fcdBind11507)) return null;
  let fcdBind11508 = fcdBind11507 - 1;
  return Number.isFinite(fcdBind11508) ? fcdBind11508 : null;
}
export var Nft,
  workbookBinding1948,
  workbookBinding1949,
  workbookBinding1950,
  Pft,
  workbookBinding1951,
  Fft,
  Ift,
  Lft,
  Rft,
  zft,
  Bft,
  Vft,
  Hft = esmInit(() => {
    Nft = toEsm(fcdBind571());
    ensureFormulaArrayInit();
    $dt();
    workbookBinding1948 = Xdt();
    workbookBinding1949 = new Map();
    workbookBinding1950 = new Map();
    Pft = [
      ["#NULL!", workbookBinding1948.nil],
      ["#DIV/0!", workbookBinding1948.div0],
      ["#VALUE!", workbookBinding1948.value],
      ["#REF!", workbookBinding1948.ref],
      ["#NAME?", workbookBinding1948.name],
      ["#NUM!", workbookBinding1948.num],
      ["#N/A", workbookBinding1948.na],
      ["#ERROR!", workbookBinding1948.error],
      ["#GETTING_DATA", workbookBinding1948.data],
    ];
    for (let [fcdBind22782, fcdBind22783] of Pft)
      fcdBind22783 &&
        (workbookBinding1949.set(fcdBind22782, fcdBind22783),
        workbookBinding1950.set(fcdBind22783, fcdBind22782));
    workbookBinding1951 = {
      kind: "Error",
      code: "#VALUE!",
    };
    Fft = {
      kind: "Error",
      code: "#NUM!",
    };
    Ift = {
      kind: "Error",
      code: "#NAME?",
    };
    Lft = Date.UTC(1899, 11, 30);
    Rft = 86400000;
    zft = {
      SLOPE: {
        dependentIndex: 0,
        independentIndex: 1,
      },
      INTERCEPT: {
        dependentIndex: 0,
        independentIndex: 1,
      },
      CORREL: {
        dependentIndex: 0,
        independentIndex: 1,
      },
      PEARSON: {
        dependentIndex: 0,
        independentIndex: 1,
      },
      RSQ: {
        dependentIndex: 0,
        independentIndex: 1,
      },
      STEYX: {
        dependentIndex: 0,
        independentIndex: 1,
      },
    };
    Bft = new Set([
      "COUNTA",
      "ISBLANK",
      "TYPE",
      "SUM",
      "UNIQUE",
      "BYROW",
      "_XLFN.BYROW",
      "BYCOL",
      "_XLFN.BYCOL",
      "COLUMN",
      "_XLFN.COLUMN",
      "ROW",
      "_XLFN.ROW",
      "COLUMNS",
      "_XLFN.COLUMNS",
      "ROWS",
      "_XLFN.ROWS",
      "AREAS",
      "_XLFN.AREAS",
    ]);
    Vft = new Set(
      "ISTEXT,_XLFN.ISTEXT,ISNONTEXT,_XLFN.ISNONTEXT,ISNUMBER,_XLFN.ISNUMBER,ISLOGICAL,_XLFN.ISLOGICAL,ISERR,_XLFN.ISERR,ISERROR,_XLFN.ISERROR,ISNA,_XLFN.ISNA,DAVERAGE,DCOUNT,DCOUNTA,DGET,DMAX,DMIN,DPRODUCT,DSTDEV,DSTDEVP,DSUM,DVAR,DVARP".split(
        ",",
      ),
    );
  });
