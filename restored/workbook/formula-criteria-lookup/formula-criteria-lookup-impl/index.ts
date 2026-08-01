// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet criteria / SUMPRODUCT / SUMIF / RANDARRAY
// / SEQUENCE / BASE cluster (legacy bh976..Rut incl. Llt/Lut/iut/Out/rlt/tlt/Gct).
// Stage-3 wave-119. ERR_* inlined from Binding1942–1944; thin math wrappers via fclH.math.

import { esmInit } from "../../../runtime/rolldown-runtime";
import {
  createArrayValue,
  isArrayValue,
  getRangeMetadata,
  ensureFormulaArrayInit,
} from "../../formula-array";
import { invertMatrix, computeDeterminant } from "../../formula-matrix-inverse";
import { fclH } from "../boundary-hooks";

/** #VALUE! sentinel (legacy Binding1942). */
export const ERR_VALUE = { kind: "Error", code: "#VALUE!" } as const;
/** #DIV/0! sentinel (legacy Binding1943). */
export const ERR_DIV0 = { kind: "Error", code: "#DIV/0!" } as const;
/** #NUM! sentinel (legacy Binding1944). */
export const ERR_NUM = { kind: "Error", code: "#NUM!" } as const;
/** toPrecision digits (legacy But). */
export const NUMBER_PRECISION = 15;

export function filterNestedAggregateCells(
  fclIn10702: any,
  fclIn10703: any,
  fclIn10704: any,
) {
  return !fclIn10704.ignoreNestedAggregates && !fclIn10704.ignoreErrors
    ? fclIn10702
    : fclIn10702.map((item) => Wct(item, fclIn10703, fclIn10704));
}
export function Wct(fclIn8807: any, fclIn8808: any, fclIn8809: any) {
  return Array.isArray(fclIn8807)
    ? Gct(fclIn8807, fclIn8808, fclIn8809)
    : isArrayValue(fclIn8807)
      ? Gct(
          fclIn8807.values.map((item) => [...item]),
          fclIn8808,
          fclIn8809,
        )
      : fclIn8807;
}
export function Gct(fclIn2794: any, fclIn2795: any, fclIn2796: any) {
  let fclBind10486 = fclIn2795 ? getRangeMetadata(fclIn2794) : null,
    fclBind10487 = false,
    fclBind10488 = fclIn2794.map((item, index) => {
      if (!item) return item;
      let fclBind11526 = fclBind10486?.[index],
        fclBind11527;
      for (
        let fclBind12921 = 0;
        fclBind12921 < item.length;
        fclBind12921 += 1
      ) {
        let fclBind13594 = item[fclBind12921];
        if (
          fclIn2796.ignoreErrors &&
          (Kct(fclBind13594) || fclBind13594 instanceof Error)
        ) {
          fclBind11527 ||= [...item];
          fclBind11527[fclBind12921] = null;
          fclBind10487 = true;
          continue;
        }
        if (
          fclIn2796.ignoreNestedAggregates &&
          fclIn2795?.getCellFormulaType &&
          fclBind11526
        ) {
          let fclBind19443 = fclBind11526[fclBind12921];
          if (!fclBind19443) continue;
          let fclBind19444 = fclIn2795.getCellFormulaType(fclBind19443);
          fclBind19444 &&
            qct.has(fclBind19444) &&
            ((fclBind11527 ||= [...item]),
            (fclBind11527[fclBind12921] = null),
            (fclBind10487 = true));
        }
      }
      return fclBind11527 ?? item;
    });
  return fclBind10487 ? fclBind10488 : fclIn2794;
}
export function Kct(props: any) {
  return typeof props == "object" && !!props && props.kind === "Error";
}
export var qct,
  Jct = esmInit(() => {
    ensureFormulaArrayInit();
    qct = new Set(["SUBTOTAL", "AGGREGATE"]);
  });
export function isErrorKind(props: any) {
  return typeof props == "object" && !!props && props.kind === "Error";
}
export function errorFromThrown(props: any) {
  let fclBind21389 = props.message?.trim();
  return fclBind21389 && fclBind21389.startsWith("#")
    ? {
        kind: "Error",
        code: fclBind21389,
      }
    : fclBind1942;
}
export function Yct(fclIn4290: any, fclIn4291: any) {
  if (fclIn4291 === undefined) return;
  let fclBind13359 = coerceToMatrix(fclIn4290),
    fclBind13360 = coerceToMatrix(fclIn4291);
  if (!fclBind13359 || !fclBind13360) return fclIn4291;
  let fclBind13361 = fclBind13359.length;
  if (fclBind13361 === 0) return fclIn4291;
  let fclBind13362 = fclBind13359.reduce(
    (accumulator, current) => Math.max(accumulator, current?.length ?? 0),
    0,
  );
  if (fclBind13362 === 0) return fclIn4291;
  let fclBind13363 = [];
  for (let fclBind19753 = 0; fclBind19753 < fclBind13361; fclBind19753 += 1) {
    let fclBind20655 = fclBind13360[fclBind19753] ?? [],
      fclBind20656 = [];
    for (let fclBind22499 = 0; fclBind22499 < fclBind13362; fclBind22499 += 1)
      fclBind20656[fclBind22499] =
        fclBind22499 < fclBind20655.length
          ? (fclBind20655[fclBind22499] ?? null)
          : null;
    fclBind13363[fclBind19753] = fclBind20656;
  }
  return fclBind13363;
}
export function coerceToMatrix(props: any) {
  if (Array.isArray(props)) return props.map((item) => (item ? [...item] : []));
  if (props === undefined) return null;
  let fclBind19322 = props;
  return isArrayValue(fclBind19322)
    ? fclBind19322.values.map((item) => [...item])
    : [[fclBind19322]];
}
export function Xct(fclIn6414: any) {
  let fclBind16593 = 0;
  for (let fclBind17847 of fclIn6414)
    if (fclBind17847)
      for (let fclBind18816 of fclBind17847) {
        let fclBind19361 = Zct(fclBind18816);
        if (fclBind19361 !== null) {
          if (typeof fclBind19361 == "number") {
            fclBind16593 += fclBind19361;
            continue;
          }
          return fclBind19361;
        }
      }
  return fclBind16593;
}
export function Zct(fclIn5634: any) {
  return isErrorKind(fclIn5634)
    ? fclIn5634
    : fclIn5634 instanceof Error
      ? errorFromThrown(fclIn5634)
      : fclIn5634 === null
        ? 0
        : typeof fclIn5634 == "number"
          ? fclIn5634
          : typeof fclIn5634 == "string"
            ? fclIn5634 === ""
              ? 0
              : null
            : typeof fclIn5634 == "boolean"
              ? null
              : fclBind1942;
}
export function Qct(fclIn5689: any) {
  if (isErrorKind(fclIn5689)) return fclIn5689;
  if (fclIn5689 instanceof Error) return errorFromThrown(fclIn5689);
  if (fclIn5689 === null) return 0;
  if (typeof fclIn5689 == "number") return fclIn5689;
  if (typeof fclIn5689 == "boolean") return +!!fclIn5689;
  if (typeof fclIn5689 == "string") {
    if (fclIn5689 === "") return 0;
    let fclBind22066 = Number(fclIn5689);
    return Number.isNaN(fclBind22066) ? fclBind1942 : fclBind22066;
  }
  return fclBind1942;
}
export function $ct(fclIn3481: any) {
  let fclBind11923 = 0;
  for (let fclBind12646 of fclIn3481) {
    if (fclBind12646 === undefined) continue;
    if (Array.isArray(fclBind12646)) {
      let fclBind21180 = Xct(fclBind12646);
      if (typeof fclBind21180 == "number") {
        fclBind11923 += fclBind21180;
        continue;
      }
      return fclBind21180;
    }
    if (isArrayValue(fclBind12646)) {
      let fclBind20939 = Xct(fclBind12646.values);
      if (typeof fclBind20939 == "number") {
        fclBind11923 += fclBind20939;
        continue;
      }
      return fclBind20939;
    }
    let fclBind12847 = Qct(fclBind12646);
    if (fclBind12847 !== null) {
      if (typeof fclBind12847 == "number") {
        fclBind11923 += fclBind12847;
        continue;
      }
      return fclBind12847;
    }
  }
  return fclBind11923;
}
export function numberToPrecision(fclIn10474: any) {
  if (!Number.isFinite(fclIn10474)) return fclIn10474;
  let fclBind20940 = Number(fclIn10474.toPrecision(NUMBER_PRECISION));
  return Object.is(fclBind20940, 0) ? 0 : fclBind20940;
}
export function coerceFirstCell(props: any) {
  if (props !== undefined) {
    if (Array.isArray(props)) {
      let fclBind22607 = props[0];
      return fclBind22607 ? (fclBind22607[0] ?? null) : null;
    }
    return props;
  }
}
export function coerceToNumber(fclIn3706: any, fclIn3707: any = true) {
  if (fclIn3706 === undefined) return fclBind1942;
  if (isErrorKind(fclIn3706)) return fclIn3706;
  if (fclIn3706 instanceof Error) return errorFromThrown(fclIn3706);
  if (fclIn3706 === null) return fclIn3707 ? 0 : fclBind1942;
  if (typeof fclIn3706 == "number")
    return Number.isFinite(fclIn3706) ? fclIn3706 : fclBind1944;
  if (typeof fclIn3706 == "boolean") return +!!fclIn3706;
  if (typeof fclIn3706 == "string") {
    let fclBind20970 = fclIn3706.trim();
    if (fclBind20970 === "") return fclIn3707 ? 0 : fclBind1942;
    let fclBind20971 = Number(fclBind20970);
    return Number.isFinite(fclBind20971) ? fclBind20971 : fclBind1942;
  }
  if (isArrayValue(fclIn3706)) {
    let fclBind22817 = fclIn3706.values[0]?.[0];
    return coerceToNumber(fclBind22817, fclIn3707);
  }
  return fclBind1942;
}
export function coerceIntDefault(fclIn8163: any, fclIn8164: any) {
  if (fclIn8163 === undefined) return fclIn8164;
  let fclBind18670 = coerceFirstCell(fclIn8163);
  if (fclBind18670 === undefined) return fclIn8164;
  let fclBind18671 = coerceToNumber(fclBind18670);
  if (typeof fclBind18671 != "number") return fclBind18671;
  let fclBind18672 = Math.trunc(fclBind18671);
  return fclBind18672 < 1 ? fclBind1942 : fclBind18672;
}
export function coerceNonNegDefault(fclIn11260: any, fclIn11261: any) {
  if (fclIn11260 === undefined) return fclIn11261;
  let fclBind21726 = coerceFirstCell(fclIn11260);
  return fclBind21726 === undefined ? fclIn11261 : coerceToNumber(fclBind21726);
}
export function elt(fclIn3382: any, fclIn3383: any) {
  if (fclIn3382 === undefined) return fclIn3383;
  let fclBind11732 = coerceFirstCell(fclIn3382);
  if (fclBind11732 === undefined) return fclIn3383;
  if (isErrorKind(fclBind11732)) return fclBind11732;
  if (fclBind11732 instanceof Error) return errorFromThrown(fclBind11732);
  if (fclBind11732 === null) return false;
  if (typeof fclBind11732 == "boolean") return fclBind11732;
  if (typeof fclBind11732 == "number")
    return Number.isFinite(fclBind11732) ? fclBind11732 !== 0 : fclBind1944;
  if (typeof fclBind11732 == "string") {
    let fclBind18584 = fclBind11732.trim().toLowerCase();
    if (fclBind18584 === "") return false;
    if (fclBind18584 === "true") return true;
    if (fclBind18584 === "false") return false;
    let fclBind18585 = Number(fclBind18584);
    return Number.isFinite(fclBind18585) ? fclBind18585 !== 0 : fclBind1942;
  }
  return fclBind1942;
}
export function tlt(fclIn2715: any) {
  let fclBind10316 = coerceFirstCell(fclIn2715);
  if (fclBind10316 === undefined) return () => false;
  if (isErrorKind(fclBind10316)) return fclBind10316;
  if (fclBind10316 instanceof Error) return errorFromThrown(fclBind10316);
  if (typeof fclBind10316 == "string") {
    let fclBind20833 = fclBind10316.trim(),
      fclBind20834 = rlt(fclBind20833);
    if (fclBind20834) return criteriaFromMatch(fclBind20834);
    let fclBind20835 = fclBind20833.toUpperCase();
    return (fclIn16369) => ilt(fclIn16369) === fclBind20835;
  }
  if (typeof fclBind10316 == "number")
    return criteriaFromMatch({
      operator: "=",
      operand: {
        kind: "number",
        value: fclBind10316,
      },
    });
  if (typeof fclBind10316 == "boolean")
    return criteriaFromMatch({
      operator: "=",
      operand: {
        kind: "number",
        value: +!!fclBind10316,
      },
    });
  if (fclBind10316 === null)
    return criteriaFromMatch({
      operator: "=",
      operand: {
        kind: "blank",
      },
    });
  if (isArrayValue(fclBind10316)) {
    let fclBind22628 = fclBind10316.values[0]?.[0];
    return tlt([[fclBind22628 ?? null]]);
  }
  return (fclIn16588) => fclIn16588 === fclBind10316;
}
export function criteriaFromMatch(props: any) {
  return (fclIn3106) => {
    switch (props.operand.kind) {
      case "number": {
        let fclBind21446 = coerceToNumber(fclIn3106);
        return typeof fclBind21446 == "number"
          ? nlt(fclBind21446, props.operand.value, props.operator)
          : false;
      }
      case "string": {
        let fclBind17809 = ilt(fclIn3106);
        return fclBind17809 === null
          ? false
          : props.operator === "="
            ? fclBind17809 === props.operand.value
            : props.operator === "<>"
              ? fclBind17809 !== props.operand.value
              : false;
      }
      case "blank": {
        let fclBind21691 = alt(fclIn3106);
        return props.operator === "="
          ? fclBind21691
          : props.operator === "<>"
            ? !fclBind21691
            : false;
      }
      default:
        return false;
    }
  };
}
export function nlt(fclIn6293: any, fclIn6294: any, fclIn6295: any) {
  switch (fclIn6295) {
    case "=":
      return fclIn6293 === fclIn6294;
    case "<>":
      return fclIn6293 !== fclIn6294;
    case ">":
      return fclIn6293 > fclIn6294;
    case "<":
      return fclIn6293 < fclIn6294;
    case ">=":
      return fclIn6293 >= fclIn6294;
    case "<=":
      return fclIn6293 <= fclIn6294;
    default:
      return false;
  }
}
export function rlt(fclIn2683: any) {
  if (!fclIn2683)
    return {
      operator: "=",
      operand: {
        kind: "blank",
      },
    };
  let fclBind10238 = fclIn2683.match(/^(<=|>=|<>|=|<|>)(.*)$/);
  if (fclBind10238) {
    let fclBind15367 = fclBind10238[1],
      fclBind15368 = fclBind10238[2] ?? "";
    if (!fclBind15368)
      return {
        operator: fclBind15367,
        operand: {
          kind: "blank",
        },
      };
    let fclBind15369 = Number(fclBind15368);
    return Number.isNaN(fclBind15369)
      ? {
          operator: fclBind15367,
          operand: {
            kind: "string",
            value: fclBind15368.trim().toUpperCase(),
          },
        }
      : {
          operator: fclBind15367,
          operand: {
            kind: "number",
            value: fclBind15369,
          },
        };
  }
  let fclBind10239 = Number(fclIn2683);
  return Number.isNaN(fclBind10239)
    ? {
        operator: "=",
        operand: {
          kind: "string",
          value: fclIn2683.trim().toUpperCase(),
        },
      }
    : {
        operator: "=",
        operand: {
          kind: "number",
          value: fclBind10239,
        },
      };
}
export function ilt(fclIn4591: any) {
  return fclIn4591 == null
    ? ""
    : isErrorKind(fclIn4591) || fclIn4591 instanceof Error
      ? null
      : typeof fclIn4591 == "string"
        ? fclIn4591.trim().toUpperCase()
        : typeof fclIn4591 == "number"
          ? Number.isFinite(fclIn4591)
            ? String(fclIn4591).toUpperCase()
            : null
          : typeof fclIn4591 == "boolean"
            ? fclIn4591
              ? "TRUE"
              : "FALSE"
            : String(fclIn4591).toUpperCase();
}
export function alt(fclIn11882: any) {
  return fclIn11882 == null
    ? true
    : typeof fclIn11882 == "string"
      ? fclIn11882.trim() === ""
      : false;
}
export function olt(fclIn14277: any, fclIn14278: any, ...fclIn14279: any[]) {
  return $ct([fclIn14277, fclIn14278, ...fclIn14279]);
}
export function slt(fclIn15702: any) {
  return fclH.math["F$e"](fclIn15702);
}
export function clt(fclIn15703: any) {
  return fclH.math["t$e"](fclIn15703);
}
export function llt(fclIn15704: any) {
  return fclH.math["W$e"](fclIn15704);
}
export function ult(fclIn15705: any) {
  return fclH.math["ZQe"](fclIn15705);
}
export function dlt() {
  return fclH.math["C$e"]();
}
export function flt(fclIn15706: any) {
  return fclH.math["L$e"](fclIn15706);
}
export function plt(fclIn15707: any) {
  return fclH.math["u$e"](fclIn15707);
}
export function mlt(fclIn15708: any) {
  return fclH.math["m$e"](fclIn15708);
}
export function hlt(fclIn12468: any) {
  let fclBind22417 = fclH.math["g$e"](fclIn12468);
  return typeof fclBind22417 == "number"
    ? numberToPrecision(fclBind22417)
    : fclBind22417;
}
export function glt(fclIn15709: any) {
  return fclH.math["HQe"](fclIn15709);
}
export function _lt(fclIn15710: any) {
  return fclH.math["f$e"](fclIn15710);
}
export function vlt(fclIn15711: any) {
  return fclH.math["P$e"](fclIn15711);
}
export function ylt(fclIn15440: any, fclIn15441: any) {
  return fclH.math["O$e"](fclIn15440, fclIn15441);
}
export function blt(fclIn15442: any, fclIn15443: any) {
  return fclH.math["v$e"](fclIn15442, fclIn15443);
}
export function xlt() {
  return fclH.math["E$e"]();
}
export function Slt(fclIn10603: any, fclIn10604: any) {
  return typeof fclIn10603 == "number" &&
    typeof fclIn10604 == "number" &&
    fclIn10603 === 0 &&
    fclIn10604 === 0
    ? fclBind1943
    : fclH.math["QQe"](fclIn10603, fclIn10604);
}
export function Clt(fclIn15712: any) {
  return fclH.math["YQe"](fclIn15712);
}
export function wlt(fclIn15713: any) {
  return fclH.math["UQe"](fclIn15713);
}
export function Tlt(fclIn15444: any, fclIn15445: any) {
  return fclH.math["h$e"](fclIn15444, fclIn15445);
}
export function Elt(fclIn7689: any) {
  let fclBind18187 = coerceToMatrix(fclIn7689);
  if (!fclBind18187 || fclBind18187.length === 0) return fclBind1942;
  let fclBind18188 = fclBind18187.length,
    fclBind18189 = fclBind18187[0]?.length ?? 0;
  if (fclBind18188 === 0 || fclBind18189 === 0 || fclBind18188 !== fclBind18189)
    return fclBind1942;
  let fclBind18190 = Olt(fclBind18187, fclBind18188);
  return isErrorKind(fclBind18190)
    ? fclBind18190
    : computeDeterminant(fclBind18190);
}
export function Dlt(fclIn6202: any) {
  let fclBind16278 = coerceToMatrix(fclIn6202);
  if (!fclBind16278 || fclBind16278.length === 0) return fclBind1942;
  let fclBind16279 = fclBind16278.length,
    fclBind16280 = fclBind16278[0]?.length ?? 0;
  if (fclBind16279 === 0 || fclBind16280 === 0 || fclBind16279 !== fclBind16280)
    return fclBind1942;
  let fclBind16281 = Olt(fclBind16278, fclBind16279);
  if (isErrorKind(fclBind16281)) return fclBind16281;
  let fclBind16282 = invertMatrix(fclBind16281);
  return isErrorKind(fclBind16282)
    ? fclBind16282
    : createArrayValue(
        fclBind16282.map((item) =>
          item.map((_item) => numberToPrecision(_item)),
        ),
      );
}
export function Olt(fclIn5880: any, fclIn5881: any) {
  let fclBind15858 = [];
  for (let fclBind17091 = 0; fclBind17091 < fclIn5881; fclBind17091 += 1) {
    let fclBind17919 = fclIn5880[fclBind17091];
    if (!fclBind17919 || fclBind17919.length !== fclIn5881) return fclBind1942;
    let fclBind17920 = [];
    for (let fclBind20912 = 0; fclBind20912 < fclIn5881; fclBind20912 += 1) {
      let fclBind21913 = coerceToNumber(fclBind17919[fclBind20912] ?? null);
      if (typeof fclBind21913 != "number") return fclBind21913;
      fclBind17920.push(fclBind21913);
    }
    fclBind15858.push(fclBind17920);
  }
  return fclBind15858;
}
export function jlt(fclIn12333: any, fclIn12334: any) {
  let fclBind22388 = fclH.math["_$e"](fclIn12333, fclIn12334);
  return Array.isArray(fclBind22388)
    ? createArrayValue(fclBind22388)
    : fclBind22388;
}
export function Mlt(fclIn14578: any, fclIn14579: any, ...fclIn14580: any[]) {
  return fclH.multiGcd(fclIn14578, fclIn14579, ...fclIn14580);
}
export function Nlt(fclIn12960: any) {
  return typeof fclIn12960 == "number" && fclIn12960 < 0
    ? fclBind1944
    : fclH.absNumber(fclIn12960);
}
export function Plt(fclIn15446: any, fclIn15447: any) {
  return fclH.math["K$e"](fclIn15446, fclIn15447);
}
export function Flt(fclIn15448: any, fclIn15449: any) {
  return fclH.math["A$e"](fclIn15448, fclIn15449);
}
export function Ilt(fclIn15450: any, fclIn15451: any) {
  return fclH.math["k$e"](fclIn15450, fclIn15451);
}
export function Llt(fclIn1960: any, ...fclIn1961: any[]) {
  let fclBind8702 = [fclIn1960, ...fclIn1961].filter(
    (item) => item !== undefined,
  );
  if (fclBind8702.length === 0) return 0;
  let fclBind8703 = fclBind8702.map((item) => coerceToMatrix(item) ?? []),
    fclBind8704 = fclBind8703.map(Rlt);
  for (let fclBind23012 of fclBind8704)
    if (!fclBind23012.valid) return fclBind1942;
  let fclBind8705 = 1,
    fclBind8706 = 1,
    fclBind8707 = false;
  for (let fclBind17608 of fclBind8704) {
    if (fclBind17608.rows === 0 || fclBind17608.cols === 0) return 0;
    if (!fclBind17608.isScalar) {
      if (!fclBind8707) {
        fclBind8705 = fclBind17608.rows;
        fclBind8706 = fclBind17608.cols;
        fclBind8707 = true;
        continue;
      }
      if (
        fclBind17608.rows !== fclBind8705 ||
        fclBind17608.cols !== fclBind8706
      )
        return fclBind1942;
    }
  }
  fclBind8707 || ((fclBind8705 = 1), (fclBind8706 = 1));
  let fclBind8708 = 0;
  for (let fclBind15448 = 0; fclBind15448 < fclBind8705; fclBind15448 += 1)
    for (let fclBind16197 = 0; fclBind16197 < fclBind8706; fclBind16197 += 1) {
      let fclBind16956 = 1;
      for (
        let fclBind18191 = 0;
        fclBind18191 < fclBind8704.length;
        fclBind18191 += 1
      ) {
        let fclBind19323 = fclBind8704[fclBind18191],
          fclBind19324 = fclBind8703[fclBind18191],
          fclBind19325 = zlt(
            fclBind19323.isScalar && fclBind19324[0]
              ? fclBind19324[0][0]
              : (fclBind19324[fclBind15448]?.[fclBind16197] ?? null),
          );
        if (typeof fclBind19325 != "number") return fclBind19325;
        fclBind16956 *= fclBind19325;
      }
      fclBind8708 += fclBind16956;
    }
  return fclBind8708;
}
export function Rlt(props: any) {
  let fclBind14664 = props.length;
  if (fclBind14664 === 0)
    return {
      rows: 0,
      cols: 0,
      isScalar: false,
      valid: true,
    };
  let fclBind14665 = props[0]?.length ?? 0;
  for (let fclBind20071 = 1; fclBind20071 < fclBind14664; fclBind20071 += 1) {
    let fclBind21006 = props[fclBind20071]?.length ?? 0;
    if (fclBind21006 !== fclBind14665)
      return {
        rows: fclBind14664,
        cols: Math.max(fclBind14665, fclBind21006),
        isScalar: false,
        valid: false,
      };
  }
  return {
    rows: fclBind14664,
    cols: fclBind14665,
    isScalar: fclBind14664 === 1 && fclBind14665 === 1,
    valid: true,
  };
}
export function zlt(fclIn4550: any) {
  if (fclIn4550 === undefined) return 0;
  if (isErrorKind(fclIn4550)) return fclIn4550;
  if (fclIn4550 instanceof Error) return errorFromThrown(fclIn4550);
  if (fclIn4550 === null) return 0;
  if (typeof fclIn4550 == "number")
    return Number.isFinite(fclIn4550) ? fclIn4550 : fclBind1944;
  if (typeof fclIn4550 == "boolean") return +!!fclIn4550;
  if (typeof fclIn4550 == "string") {
    let fclBind21317 = fclIn4550.trim();
    if (fclBind21317 === "") return 0;
    let fclBind21318 = Number(fclBind21317);
    return Number.isFinite(fclBind21318) ? fclBind21318 : 0;
  }
  return (isArrayValue(fclIn4550), fclBind1942);
}
export function Blt(fclIn15714: any) {
  return fclH.math["I$e"](fclIn15714);
}
export function Vlt(fclIn15715: any) {
  return fclH.math["n$e"](fclIn15715);
}
export function Hlt(fclIn15716: any) {
  return fclH.math["G$e"](fclIn15716);
}
export function Ult(fclIn15717: any) {
  return fclH.math["XQe"](fclIn15717);
}
export function Wlt(fclIn15718: any) {
  return fclH.math["WQe"](fclIn15718);
}
export function Glt(fclIn15719: any) {
  return fclH.math["$Qe"](fclIn15719);
}
export function Klt(fclIn15525: any, fclIn15526: any) {
  return fclH.sqrtFloor(fclIn15525, fclIn15526);
}
export function qlt(fclIn15720: any) {
  return fclH.math["l$e"](fclIn15720);
}
export function Jlt(fclIn15721: any) {
  return fclH.math["S$e"](fclIn15721);
}
export function Ylt(fclIn15452: any, fclIn15453: any) {
  return fclH.math["U$e"](fclIn15452, fclIn15453);
}
export function Xlt(fclIn15454: any, fclIn15455: any) {
  return fclH.math["V$e"](fclIn15454, fclIn15455);
}
export function Zlt(fclIn15456: any, fclIn15457: any) {
  return fclH.math["H$e"](fclIn15456, fclIn15457);
}
export function Qlt(fclIn3256: any, fclIn3257: any, ...fclIn3258: any[]) {
  let fclBind11479 = [fclIn3256, fclIn3257, ...fclIn3258],
    fclBind11480 = 0;
  for (let fclBind12580 of fclBind11479) {
    if (fclBind12580 === undefined) continue;
    if (Array.isArray(fclBind12580)) {
      let fclBind21181 = $lt(fclBind12580);
      if (typeof fclBind21181 == "number") {
        fclBind11480 += fclBind21181;
        continue;
      }
      return fclBind21181;
    }
    if (isArrayValue(fclBind12580)) {
      let fclBind20941 = $lt(fclBind12580.values);
      if (typeof fclBind20941 == "number") {
        fclBind11480 += fclBind20941;
        continue;
      }
      return fclBind20941;
    }
    let fclBind12806 = Qct(fclBind12580);
    if (fclBind12806 !== null) {
      if (typeof fclBind12806 == "number") {
        fclBind11480 += fclBind12806 * fclBind12806;
        continue;
      }
      return fclBind12806;
    }
  }
  return fclBind11480;
}
export function $lt(fclIn6352: any) {
  let fclBind16500 = 0;
  for (let fclBind17716 of fclIn6352)
    if (fclBind17716)
      for (let fclBind18710 of fclBind17716) {
        let fclBind19212 = Zct(fclBind18710);
        if (fclBind19212 !== null) {
          if (typeof fclBind19212 == "number") {
            fclBind16500 += fclBind19212 * fclBind19212;
            continue;
          }
          return fclBind19212;
        }
      }
  return fclBind16500;
}
export function eut(fclIn15458: any, fclIn15459: any) {
  return fclH.math["w$e"](fclIn15458, fclIn15459);
}
export function tut(fclIn15722: any) {
  return fclH.math["T$e"](fclIn15722);
}
export function nut(fclIn15723: any) {
  return fclH.math["c$e"](fclIn15723);
}
export function rut(fclIn9296: any, fclIn9297: any, ...fclIn9298: any[]) {
  let fclBind19858 = fclH.getEvalContext(),
    fclBind19859 = [fclIn9297, ...fclIn9298],
    [fclBind19860, ...fclBind19861] =
      fclBind19858 === null
        ? fclBind19859
        : filterNestedAggregateCells(fclBind19859, fclBind19858, {
            ignoreNestedAggregates: true,
          });
  return fclH.math["z$e"](fclIn9296, fclBind19860, ...fclBind19861);
}
export function iut(fclIn3253: any, fclIn3254: any, fclIn3255: any) {
  let fclBind11471 = coerceToMatrix(fclIn3253),
    fclBind11472 = tlt(fclIn3254);
  if (isErrorKind(fclBind11472)) return fclBind11472;
  let fclBind11473 = fclBind11472;
  if (!fclBind11471) {
    let fclBind22490 = coerceFirstCell(fclIn3253);
    return fclBind11473(fclBind22490)
      ? coerceToNumber(
          fclIn3255 === undefined ? fclBind22490 : coerceFirstCell(fclIn3255),
        )
      : 0;
  }
  let fclBind11474 =
    fclIn3255 === undefined
      ? fclBind11471
      : coerceToMatrix(Yct(fclIn3253, fclIn3255) ?? fclIn3255);
  if (!fclBind11474) return fclBind1942;
  let fclBind11475 = 0;
  for (
    let fclBind16331 = 0;
    fclBind16331 < fclBind11471.length;
    fclBind16331 += 1
  ) {
    let fclBind17300 = fclBind11471[fclBind16331] ?? [],
      fclBind17301 = fclBind11474[fclBind16331] ?? [];
    for (
      let fclBind18881 = 0;
      fclBind18881 < fclBind17300.length;
      fclBind18881 += 1
    ) {
      let fclBind20024 = fclBind17300[fclBind18881];
      if (!fclBind11473(fclBind20024)) continue;
      let fclBind20025 = coerceToNumber(fclBind17301[fclBind18881] ?? null);
      if (typeof fclBind20025 == "number") fclBind11475 += fclBind20025;
      else if (isErrorKind(fclBind20025)) return fclBind20025;
    }
  }
  return fclBind11475;
}
export function aut(fclIn9728: any, fclIn9729: any) {
  let fclBind20246 = coerceToNumber(coerceFirstCell(fclIn9728));
  if (typeof fclBind20246 != "number") return fclBind20246;
  let fclBind20247 = Math.trunc(fclBind20246);
  return fclBind20247 < 1 || fclBind20247 > 3999
    ? fclBind1942
    : fclH.math["D$e"](fclBind20247, fclIn9729);
}
export function out(
  fclIn14485: any,
  fclIn14486: any,
  fclIn14487: any,
  fclIn14488: any,
) {
  return fclH.math["N$e"](fclIn14485, fclIn14486, fclIn14487, fclIn14488);
}
export function sut(fclIn7385: any) {
  let fclBind17810 = coerceToNumber(coerceFirstCell(fclIn7385));
  if (typeof fclBind17810 != "number") return fclBind17810;
  let fclBind17811 = Math.trunc(fclBind17810);
  if (fclBind17811 < 0) return fclBind1944;
  let fclBind17812 = 1;
  for (let fclBind22445 = fclBind17811; fclBind22445 > 1; fclBind22445 -= 2)
    if (((fclBind17812 *= fclBind22445), !Number.isFinite(fclBind17812)))
      return fclBind1944;
  return fclBind17812;
}
export function cut(fclIn15724: any) {
  return fclH.math["R$e"](fclIn15724);
}
export function lut(fclIn7386: any, fclIn7387: any) {
  let fclBind17813 = coerceToNumber(coerceFirstCell(fclIn7386));
  if (typeof fclBind17813 != "number") return fclBind17813;
  let fclBind17814 = coerceToNumber(coerceFirstCell(fclIn7387));
  if (typeof fclBind17814 != "number") return fclBind17814;
  if (fclBind17814 === 0) return fclBind1943;
  let fclBind17815 = Math.trunc(fclBind17813 / fclBind17814);
  return Number.isFinite(fclBind17815) ? fclBind17815 : fclBind1944;
}
export function uut(fclIn15460: any, fclIn15461: any) {
  return fclH.math["y$e"](fclIn15460, fclIn15461);
}
export function dut(fclIn5351: any, fclIn5352: any) {
  let fclBind15051 = coerceToNumber(coerceFirstCell(fclIn5351));
  if (typeof fclBind15051 != "number") return fclBind15051;
  let fclBind15052 = coerceToNumber(coerceFirstCell(fclIn5352));
  if (typeof fclBind15052 != "number") return fclBind15052;
  if (!Number.isFinite(fclBind15051) || !Number.isFinite(fclBind15052))
    return fclBind1942;
  let fclBind15053 = Math.ceil(fclBind15051),
    fclBind15054 = Math.floor(fclBind15052);
  if (fclBind15053 > fclBind15054) return fclBind1944;
  let fclBind15055 = fclBind15054 - fclBind15053 + 1;
  return fclBind15055 <= 0
    ? fclBind1944
    : Math.floor(Math.random() * fclBind15055) + fclBind15053;
}
export function fut(fclIn14489: any, fclIn14490: any, ...fclIn14491: any[]) {
  return fclH.math["d$e"](fclIn14489, fclIn14490, ...fclIn14491);
}
export function put(fclIn6574: any, fclIn6575: any, ...fclIn6576: any[]) {
  let fclBind16834 = [fclIn6574];
  fclIn6575 !== undefined && fclBind16834.push(fclIn6575);
  for (let fclBind22988 of fclIn6576)
    fclBind22988 !== undefined && fclBind16834.push(fclBind22988);
  for (let fclBind21115 of fclBind16834) {
    let fclBind21632 = coerceToNumber(coerceFirstCell(fclBind21115));
    if (typeof fclBind21632 != "number") return fclBind21632;
    if (Math.trunc(fclBind21632) < 0) return fclBind1944;
  }
  return fclH.math["b$e"](fclIn6574, fclIn6575, ...fclIn6576);
}
export function mut(fclIn14492: any, fclIn14493: any, ...fclIn14494: any[]) {
  return fclH.math["p$e"](fclIn14492, fclIn14493, ...fclIn14494);
}
export function hut(
  fclIn4620: any,
  fclIn4621: any,
  fclIn4622: any,
  ...fclIn4623: any[]
) {
  let fclBind13894 = aggregateWithIgnoreFlags(fclIn4620);
  if (isErrorKind(fclBind13894)) return fclBind13894;
  let fclBind13895 = aggregateWithIgnoreFlags(fclIn4621);
  if (isErrorKind(fclBind13895)) return fclBind13895;
  if (
    fclBind13894.rows !== fclBind13895.rows ||
    fclBind13894.cols !== fclBind13895.cols
  )
    return fclBind1942;
  for (
    let fclBind18441 = 0;
    fclBind18441 < fclIn4623.length;
    fclBind18441 += 1
  ) {
    let fclBind19621 = fclIn4623[fclBind18441];
    if (fclBind19621 === undefined || fclBind18441 % 2 != 0) continue;
    let fclBind19622 = aggregateWithIgnoreFlags(fclBind19621);
    if (isErrorKind(fclBind19622)) return fclBind19622;
    if (
      fclBind19622.rows !== fclBind13894.rows ||
      fclBind19622.cols !== fclBind13894.cols
    )
      return fclBind1942;
  }
  return fclH.math["B$e"](fclIn4620, fclIn4621, fclIn4622, ...fclIn4623);
}
export function aggregateWithIgnoreFlags(props: any) {
  if (Array.isArray(props)) {
    let fclBind18158 = props.length,
      fclBind18159 = props.reduce(
        (accumulator, current) => Math.max(accumulator, current?.length ?? 0),
        0,
      );
    if (fclBind18158 === 0 || fclBind18159 === 0) return fclBind1942;
    for (let fclBind22832 of props)
      if ((fclBind22832?.length ?? 0) !== fclBind18159) return fclBind1942;
    return {
      rows: fclBind18158,
      cols: fclBind18159,
    };
  }
  if (props === undefined) return fclBind1942;
  let fclBind13454 = props;
  return isArrayValue(fclBind13454)
    ? fclBind13454.rows < 1 || fclBind13454.cols < 1
      ? fclBind1942
      : {
          rows: fclBind13454.rows,
          cols: fclBind13454.cols,
        }
    : {
        rows: 1,
        cols: 1,
      };
}
export function gut(
  fclIn4654: any,
  fclIn4655: any,
  fclIn4656: any,
  ...fclIn4657: any[]
) {
  let fclBind13915 = _ut(fclIn4655);
  if (typeof fclBind13915 != "number") return fclBind13915;
  let fclBind13916 = [fclIn4656, ...fclIn4657],
    fclBind13917 = Vut.has(Math.trunc(fclBind13915)),
    fclBind13918 = Hut.has(Math.trunc(fclBind13915)),
    fclBind13919 = fclBind13917 || fclBind13918 ? fclH.getEvalContext() : null,
    [fclBind13920, ...fclBind13921] =
      fclBind13919 && (fclBind13917 || fclBind13918)
        ? filterNestedAggregateCells(fclBind13916, fclBind13919, {
            ignoreNestedAggregates: fclBind13917,
            ignoreErrors: fclBind13918,
          })
        : fclBind13918
          ? filterNestedAggregateCells(fclBind13916, null, {
              ignoreErrors: true,
            })
          : fclBind13916;
  return fclH.math["qQe"](fclIn4654, fclIn4655, fclBind13920, ...fclBind13921);
}
export function _ut(fclIn5187: any) {
  let fclBind14699 = vut(fclIn5187);
  if (isErrorKind(fclBind14699)) return fclBind14699;
  if (fclBind14699 instanceof Error) return errorFromThrown(fclBind14699);
  if (fclBind14699 == null) return 0;
  if (typeof fclBind14699 == "number") return fclBind14699;
  if (typeof fclBind14699 == "boolean") return +!!fclBind14699;
  if (typeof fclBind14699 == "string") {
    let fclBind21285 = fclBind14699.trim();
    if (fclBind21285 === "") return 0;
    let fclBind21286 = Number(fclBind21285);
    return Number.isFinite(fclBind21286) ? fclBind21286 : fclBind1942;
  }
  return fclBind1942;
}
export function vut(fclIn8834: any) {
  if (Array.isArray(fclIn8834)) {
    let fclBind22472 = fclIn8834[0];
    return fclBind22472 && fclBind22472.length > 0
      ? (fclBind22472[0] ?? null)
      : null;
  }
  return isArrayValue(fclIn8834)
    ? (fclIn8834.values[0]?.[0] ?? null)
    : (fclIn8834 ?? null);
}
export function yut(fclIn11583: any) {
  let fclBind21980 = fclH.math["GQe"](fclIn11583);
  return typeof fclBind21980 == "number" && fclBind21980 <= 0
    ? fclBind21980 + Math.PI
    : fclBind21980;
}
export function but(fclIn15725: any) {
  return fclH.math["KQe"](fclIn15725);
}
export function xut(fclIn15726: any) {
  return fclH.math["r$e"](fclIn15726);
}
export function Sut(fclIn15727: any) {
  return fclH.math["i$e"](fclIn15727);
}
export function Cut(fclIn15728: any) {
  return fclH.math["a$e"](fclIn15728);
}
export function wut(fclIn15729: any) {
  return fclH.math["o$e"](fclIn15729);
}
export function Tut(fclIn15730: any) {
  return fclH.math["j$e"](fclIn15730);
}
export function Eut(fclIn15731: any) {
  return fclH.math["M$e"](fclIn15731);
}
export function Dut(fclIn15462: any, fclIn15463: any) {
  return fclH.math["e$e"](fclIn15462, fclIn15463);
}
export function Out(fclIn3752: any, fclIn3753: any, fclIn3754: any) {
  let fclBind12474 = coerceToNumber(coerceFirstCell(fclIn3752));
  if (typeof fclBind12474 != "number") return fclBind12474;
  let fclBind12475 = coerceToNumber(coerceFirstCell(fclIn3753));
  if (typeof fclBind12475 != "number") return fclBind12475;
  let fclBind12476 = Math.trunc(fclBind12474),
    fclBind12477 = Math.trunc(fclBind12475);
  if (fclBind12476 < 0 || fclBind12477 < 2 || fclBind12477 > 36)
    return fclBind1944;
  let fclBind12478 =
    fclIn3754 === undefined
      ? undefined
      : coerceToNumber(coerceFirstCell(fclIn3754));
  if (fclBind12478 !== undefined && typeof fclBind12478 != "number")
    return fclBind12478;
  let fclBind12479 = fclBind12478 === undefined ? 0 : Math.trunc(fclBind12478);
  if (fclBind12479 < 0) return fclBind1944;
  let fclBind12480 = fclBind12476.toString(fclBind12477).toUpperCase();
  return (
    fclBind12479 > fclBind12480.length &&
      (fclBind12480 = fclBind12480.padStart(fclBind12479, "0")),
    fclBind12480
  );
}
export function kut(fclIn15464: any, fclIn15465: any) {
  return fclH.math["s$e"](fclIn15464, fclIn15465);
}
export function Aut(fclIn15732: any) {
  return fclH.math["x$e"](fclIn15732);
}
export function jut(fclIn15733: any) {
  return fclH.math["JQe"](fclIn15733);
}
export function Mut(fclIn14654: any, fclIn14655: any, fclIn14656: any) {
  return fclH.roman.MATH(fclIn14654, fclIn14655, fclIn14656);
}
export function Nut(fclIn14928: any, fclIn14929: any) {
  return fclH.roman.PRECISE(fclIn14928, fclIn14929);
}
export function Put(fclIn14657: any, fclIn14658: any, fclIn14659: any) {
  return fclH.arabic.MATH(fclIn14657, fclIn14658, fclIn14659);
}
export function Fut(fclIn14930: any, fclIn14931: any) {
  return fclH.arabic.PRECISE(fclIn14930, fclIn14931);
}
export function Iut(fclIn6400: any, fclIn6401: any) {
  let fclBind16571 = coerceToNumber(coerceFirstCell(fclIn6400));
  if (typeof fclBind16571 != "number") return fclBind16571;
  let fclBind16572 =
    fclIn6401 === undefined ? 1 : coerceToNumber(coerceFirstCell(fclIn6401));
  if (typeof fclBind16572 != "number") return fclBind16572;
  if (fclBind16572 === 0) return 0;
  let fclBind16573 = Math.abs(fclBind16572);
  if (fclBind16573 === 0) return 0;
  let fclBind16574 = fclBind16571 / fclBind16573;
  return numberToPrecision(Math.ceil(fclBind16574) * fclBind16573);
}
export function Lut(
  fclIn1875: any,
  fclIn1876: any,
  fclIn1877: any,
  fclIn1878: any,
  fclIn1879: any,
) {
  let fclBind8512 = coerceIntDefault(fclIn1875, 1);
  if (typeof fclBind8512 != "number") return fclBind8512;
  let fclBind8513 = coerceIntDefault(fclIn1876, 1);
  if (typeof fclBind8513 != "number") return fclBind8513;
  let fclBind8514 = coerceNonNegDefault(fclIn1877, 0);
  if (typeof fclBind8514 != "number") return fclBind8514;
  let fclBind8515 = coerceNonNegDefault(fclIn1878, 1);
  if (typeof fclBind8515 != "number") return fclBind8515;
  let fclBind8516 = elt(fclIn1879, false);
  if (typeof fclBind8516 != "boolean") return fclBind8516;
  if (
    fclBind8512 < 1 ||
    fclBind8513 < 1 ||
    !Number.isFinite(fclBind8514) ||
    !Number.isFinite(fclBind8515)
  )
    return fclBind1942;
  if (fclBind8514 > fclBind8515) return fclBind1944;
  let fclBind8517 = [],
    fclBind8518 = fclBind8516 === true,
    fclBind8519 = Math.ceil(fclBind8514),
    fclBind8520 = Math.floor(fclBind8515);
  if (fclBind8518 && fclBind8519 > fclBind8520) return fclBind1944;
  for (let fclBind15029 = 0; fclBind15029 < fclBind8512; fclBind15029 += 1) {
    let fclBind15645 = [];
    for (let fclBind16575 = 0; fclBind16575 < fclBind8513; fclBind16575 += 1) {
      if (fclBind8518) {
        let fclBind21155 = fclBind8520 - fclBind8519 + 1,
          fclBind21156 = Math.floor(Math.random() * fclBind21155) + fclBind8519;
        fclBind15645.push(fclBind21156);
        continue;
      }
      let fclBind17353 = Math.random(),
        fclBind17354 = fclBind8515 - fclBind8514,
        fclBind17355 =
          fclBind17354 === 0
            ? fclBind8514
            : fclBind17353 * fclBind17354 + fclBind8514;
      fclBind15645.push(numberToPrecision(fclBind17355));
    }
    fclBind8517.push(fclBind15645);
  }
  return createArrayValue(fclBind8517);
}
export function Rut(
  fclIn3494: any,
  fclIn3495: any,
  fclIn3496: any,
  fclIn3497: any,
) {
  if (fclIn3494 === undefined) return fclBind1942;
  let fclBind11932 = coerceIntDefault(fclIn3494, 1);
  if (typeof fclBind11932 != "number") return fclBind11932;
  let fclBind11933 = coerceIntDefault(fclIn3495, 1);
  if (typeof fclBind11933 != "number") return fclBind11933;
  let fclBind11934 = coerceNonNegDefault(fclIn3496, 1);
  if (typeof fclBind11934 != "number") return fclBind11934;
  let fclBind11935 = coerceNonNegDefault(fclIn3497, 1);
  if (typeof fclBind11935 != "number") return fclBind11935;
  let fclBind11936 = [];
  for (let fclBind18507 = 0; fclBind18507 < fclBind11932; fclBind18507 += 1) {
    let fclBind19467 = [];
    for (let fclBind20688 = 0; fclBind20688 < fclBind11933; fclBind20688 += 1) {
      let fclBind21661 =
        fclBind11934 +
        fclBind11935 * (fclBind18507 * fclBind11933 + fclBind20688);
      if (!Number.isFinite(fclBind21661)) return fclBind1944;
      fclBind19467.push(numberToPrecision(fclBind21661));
    }
    fclBind11936.push(fclBind19467);
  }
  return createArrayValue(fclBind11936);
}
