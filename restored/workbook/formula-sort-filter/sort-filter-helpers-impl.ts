// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet SORT/FILTER/TAKE/DROP cluster
// (legacy bh967..Ict helpers supporting Tct/Pct/wct). Stage-3 wave-118.
// ERR_VALUE/NA/CALC + FLOAT_EPS inlined from Uct (Binding1939–1941/Hct).

import {
  createArrayValue,
  isArrayValue,
  getRangeMetadata,
  copyRangeMetadata,
  isErrorValue,
} from "../formula-array";
import { fsfH } from "./boundary-hooks";

/** #VALUE! sentinel (legacy Binding1939). */
export const ERR_VALUE = { kind: "Error", code: "#VALUE!" } as const;
/** #N/A sentinel (legacy Binding1940). */
export const ERR_NA = { kind: "Error", code: "#N/A" } as const;
/** #CALC! sentinel (legacy Binding1941). */
export const ERR_CALC = { kind: "Error", code: "#CALC!" } as const;
/** Near-zero float epsilon (legacy Hct). */
export const FLOAT_EPS = 1e-9;

export function coerceMatrixRows(fsfIn11502: any) {
  return fsfIn11502 === undefined
    ? []
    : isArrayValue(fsfIn11502)
      ? yct(fsfIn11502)
      : Array.isArray(fsfIn11502)
        ? fsfIn11502
        : [[unwrapCellOrError(fsfIn11502)]];
}
export function coerceNumberVector(props: any) {
  if (props === undefined) return [];
  if (isArrayValue(props)) {
    let fsfBind22008 = [];
    for (let fsfBind22831 of props.values)
      for (let fsfBind23076 of fsfBind22831)
        fsfBind22008.push(unwrapCellOrError(fsfBind23076));
    return fsfBind22008;
  }
  if (Array.isArray(props)) {
    let fsfBind20284 = [];
    for (let fsfBind21528 of props)
      if (Array.isArray(fsfBind21528))
        for (let fsfBind23060 of fsfBind21528)
          fsfBind20284.push(fsfBind23060 ?? null);
      else fsfBind20284.push(fsfBind21528 ?? null);
    return fsfBind20284;
  }
  return [props ?? null];
}
export function Rst(props: any) {
  if (isErrorValue(props)) return props;
  if (props === null) return false;
  if (typeof props == "boolean") return props;
  if (typeof props == "number") return props !== 0 && !Number.isNaN(props);
  if (typeof props == "string") {
    let fsfBind21151 = props.trim();
    if (fsfBind21151 === "") return false;
    let fsfBind21152 = Number(fsfBind21151);
    return Number.isNaN(fsfBind21152) ? true : fsfBind21152 !== 0;
  }
  return props instanceof Error
    ? {
        kind: "Error",
        code: props.message ?? "#VALUE!",
      }
    : false;
}
export function fallbackIfEmpty(props: any) {
  return Array.isArray(props) ? (props[0]?.[0] ?? null) : (props ?? null);
}
export function zst(fsfIn5836: any, fsfIn5837: any) {
  if (isErrorValue(fsfIn5836)) return isErrorValue(fsfIn5837) ? 0 : -1;
  if (isErrorValue(fsfIn5837)) return 1;
  let fsfBind15781 = Hst(fsfIn5836),
    fsfBind15782 = Hst(fsfIn5837);
  if (fsfBind15781 || fsfBind15782)
    return fsfBind15781 && fsfBind15782 ? 0 : fsfBind15781 ? 1 : -1;
  let fsfBind15783 = Vst(fsfIn5836),
    fsfBind15784 = Vst(fsfIn5837);
  if (fsfBind15783 !== null && fsfBind15784 !== null)
    return fsfBind15783 < fsfBind15784 ? -1 : +(fsfBind15783 > fsfBind15784);
  let fsfBind15785 = compareSortKeys(fsfIn5836),
    fsfBind15786 = compareSortKeys(fsfIn5837);
  return fsfBind15785.localeCompare(fsfBind15786);
}
export function Bst(fsfIn8106: any) {
  let fsfBind18610 = coerceMatrixRows(fsfIn8106);
  return fsfBind18610.length === 0
    ? []
    : fsfBind18610.length === 1
      ? (fsfBind18610[0]?.map(unwrapCellOrError) ?? [])
      : fsfBind18610.every((item) => item.length <= 1)
        ? fsfBind18610.map((item) => unwrapCellOrError(item[0]))
        : ERR_VALUE;
}
export function Vst(props: any) {
  if (props == null) return null;
  if (typeof props == "number") return props;
  if (typeof props == "boolean") return +!!props;
  if (typeof props == "string") {
    let fsfBind21202 = props.trim();
    if (fsfBind21202 === "") return null;
    let fsfBind21203 = Number(fsfBind21202);
    return Number.isNaN(fsfBind21203) ? null : fsfBind21203;
  }
  return null;
}
export function Hst(props: any) {
  return props == null
    ? true
    : typeof props == "string"
      ? props.trim() === ""
      : false;
}
export function compareSortKeys(event: any) {
  return event == null
    ? ""
    : typeof event == "string"
      ? event
      : typeof event == "boolean"
        ? event
          ? "TRUE"
          : "FALSE"
        : typeof event == "number"
          ? String(event)
          : isErrorValue(event)
            ? event.code
            : String(event);
}
export function Ust(fsfIn10675: any, fsfIn10676: any) {
  let fsfBind21178 = compareSortKeys(fsfIn10675).toUpperCase(),
    fsfBind21179 = compareSortKeys(fsfIn10676).toUpperCase();
  return fsfBind21178 === fsfBind21179
    ? 0
    : fsfBind21178 < fsfBind21179
      ? -1
      : 1;
}
export function Wst(fsfIn6093: any) {
  let fsfBind16139 = coerceMatrixRows(fsfIn6093);
  if (fsfBind16139.length === 0) return ERR_VALUE;
  if (fsfBind16139.length === 1) {
    let [fsfBind22096 = []] = fsfBind16139;
    return {
      orientation: "row",
      values: fsfBind22096.map((item) => bct(item)),
    };
  }
  return fsfBind16139.every((item) => item.length <= 1)
    ? {
        orientation: "column",
        values: fsfBind16139.map((item) => bct(item[0])),
      }
    : ERR_VALUE;
}
export function Gst(
  fsfIn4726: any,
  fsfIn4727: any,
  fsfIn4728: any,
  fsfIn4729: any,
  fsfIn4730: any,
) {
  let fsfBind14040 = [],
    fsfBind14041 = Kst(fsfIn4728, fsfIn4729, fsfIn4726, fsfIn4727);
  if (isErrorValue(fsfBind14041)) return fsfBind14041;
  fsfBind14040.push(fsfBind14041);
  let fsfBind14042 = fsfBind14041.orientation;
  for (
    let fsfBind18123 = 0;
    fsfBind18123 < fsfIn4730.length;
    fsfBind18123 += 2
  ) {
    let fsfBind19238 = fsfIn4730[fsfBind18123];
    if (fsfBind19238 === undefined) return ERR_VALUE;
    let fsfBind19239 = fsfIn4730[fsfBind18123 + 1],
      fsfBind19240 = Kst(fsfBind19238, fsfBind19239, fsfIn4726, fsfIn4727);
    if (isErrorValue(fsfBind19240)) return fsfBind19240;
    if (fsfBind19240.orientation !== fsfBind14042) return ERR_VALUE;
    fsfBind14040.push(fsfBind19240);
  }
  return {
    orientation: fsfBind14042,
    instructions: fsfBind14040,
  };
}
export function Kst(
  fsfIn6000: any,
  fsfIn6001: any,
  fsfIn6002: any,
  fsfIn6003: any,
) {
  let fsfBind16028 = Wst(fsfIn6000);
  if (isErrorValue(fsfBind16028)) return fsfBind16028;
  if (fsfBind16028.orientation === "column") {
    if (fsfBind16028.values.length !== fsfIn6002) return ERR_VALUE;
  } else if (fsfBind16028.values.length !== fsfIn6003) return ERR_VALUE;
  let fsfBind16029 = qst(fsfIn6001);
  return isErrorValue(fsfBind16029)
    ? fsfBind16029
    : {
        orientation: fsfBind16028.orientation,
        values: fsfBind16028.values,
        direction: fsfBind16029,
      };
}
export function qst(fsfIn9449: any) {
  if (fsfIn9449 === undefined) return 1;
  let fsfBind19964 = unwrapCellOrError(coerceLookupScalar(fsfIn9449));
  if (isErrorValue(fsfBind19964)) return fsfBind19964;
  let fsfBind19965 = Number(fsfBind19964);
  return Number.isNaN(fsfBind19965) ? 1 : fsfBind19965 < 0 ? -1 : 1;
}
export function matrixColumnCount(props: any) {
  return props.reduce(
    (accumulator, current) => Math.max(accumulator, current.length),
    0,
  );
}
export function Jst(fsfIn7269: any, fsfIn7270: any) {
  if (fsfIn7269 === undefined) return 0;
  if (fsfIn7270 <= 0) return ERR_VALUE;
  let fsfBind17641 = unwrapCellOrError(coerceLookupScalar(fsfIn7269));
  if (isErrorValue(fsfBind17641)) return fsfBind17641;
  let fsfBind17642 = Number(fsfBind17641);
  if (!Number.isFinite(fsfBind17642)) return ERR_VALUE;
  let fsfBind17643 = Math.trunc(fsfBind17642);
  return Math.abs(fsfBind17643) > fsfIn7270 ? ERR_VALUE : fsfBind17643;
}
export function Yst(fsfIn7687: any, fsfIn7688: any) {
  if (fsfIn7688 <= 0) return ERR_VALUE;
  let fsfBind18184 = unwrapCellOrError(coerceLookupScalar(fsfIn7687));
  if (isErrorValue(fsfBind18184)) return fsfBind18184;
  let fsfBind18185 = Number(fsfBind18184);
  if (!Number.isFinite(fsfBind18185)) return ERR_VALUE;
  let fsfBind18186 = Math.trunc(fsfBind18185);
  return fsfBind18186 === 0 || Math.abs(fsfBind18186) > fsfIn7688
    ? ERR_VALUE
    : fsfBind18186;
}
export function Xst(fsfIn7063: any, fsfIn7064: any) {
  if (fsfIn7064 <= 0) return ERR_VALUE;
  let fsfBind17397 = Math.abs(fsfIn7063);
  if (fsfBind17397 > fsfIn7064) return ERR_VALUE;
  let fsfBind17398 = [];
  if (fsfIn7063 > 0) {
    for (let fsfBind23010 = 0; fsfBind23010 < fsfBind17397; fsfBind23010 += 1)
      fsfBind17398.push(fsfBind23010);
    return fsfBind17398;
  }
  for (
    let fsfBind22970 = fsfIn7064 - fsfBind17397;
    fsfBind22970 < fsfIn7064;
    fsfBind22970 += 1
  )
    fsfBind17398.push(fsfBind22970);
  return fsfBind17398;
}
export function Zst(fsfIn7358: any, fsfIn7359: any) {
  if (fsfIn7359 <= 0) return ERR_VALUE;
  let fsfBind17755 = Math.abs(fsfIn7358);
  if (fsfBind17755 >= fsfIn7359)
    return fsfIn7358 === 0 ? ascendingIndices(fsfIn7359) : ERR_CALC;
  let fsfBind17756 = fsfIn7358 >= 0 ? fsfBind17755 : 0,
    fsfBind17757 = fsfIn7358 >= 0 ? fsfIn7359 : fsfIn7359 - fsfBind17755,
    fsfBind17758 = [];
  for (
    let fsfBind23011 = fsfBind17756;
    fsfBind23011 < fsfBind17757;
    fsfBind23011 += 1
  )
    fsfBind17758.push(fsfBind23011);
  return fsfBind17758;
}
export function Qst(fsfIn7169: any, fsfIn7170: any) {
  let fsfBind17517 = unwrapCellOrError(coerceLookupScalar(fsfIn7169));
  if (isErrorValue(fsfBind17517)) return fsfBind17517;
  let fsfBind17518 = Number(fsfBind17517);
  if (!Number.isFinite(fsfBind17518)) return ERR_VALUE;
  let fsfBind17519 = Math.trunc(fsfBind17518);
  if (fsfBind17519 === 0) return ERR_VALUE;
  let fsfBind17520 =
    fsfBind17519 > 0 ? fsfBind17519 - 1 : fsfIn7170 + fsfBind17519;
  return fsfBind17520 < 0 || fsfBind17520 >= fsfIn7170
    ? ERR_VALUE
    : fsfBind17520;
}
export function $st(fsfIn7214: any, fsfIn7215: any) {
  if (fsfIn7214 === undefined) return fsfIn7215;
  let fsfBind17570 = unwrapCellOrError(coerceLookupScalar(fsfIn7214));
  if (isErrorValue(fsfBind17570)) return fsfBind17570;
  if (fsfBind17570 === null) return fsfIn7215;
  let fsfBind17571 = Number(fsfBind17570);
  if (!Number.isFinite(fsfBind17571)) return ERR_VALUE;
  let fsfBind17572 = Math.trunc(fsfBind17571);
  return fsfBind17572 < fsfIn7215 || fsfBind17572 < 0
    ? ERR_VALUE
    : fsfBind17572;
}
export function ect(fsfIn9053: any) {
  let fsfBind19618 = unwrapCellOrError(coerceLookupScalar(fsfIn9053));
  if (isErrorValue(fsfBind19618)) return fsfBind19618;
  let fsfBind19619 = Number(fsfBind19618);
  if (!Number.isFinite(fsfBind19619)) return ERR_VALUE;
  let fsfBind19620 = Math.trunc(fsfBind19619);
  return fsfBind19620 <= 0 ? ERR_VALUE : fsfBind19620;
}
export function tct(fsfIn2975: any) {
  if (fsfIn2975 === undefined) return () => false;
  let fsfBind10926 = unwrapCellOrError(coerceLookupScalar(fsfIn2975));
  if (isErrorValue(fsfBind10926)) return fsfBind10926;
  if (typeof fsfBind10926 == "string")
    switch (fsfBind10926.trim().toUpperCase()) {
      case "NUMBERS":
        return (fsfIn16104) => typeof fsfIn16104 == "number";
      case "TEXT":
        return (fsfIn16105) => typeof fsfIn16105 == "string";
      case "LOGICAL":
        return (fsfIn16038) => typeof fsfIn16038 == "boolean";
      case "BLANKS":
        return (fsfIn15927) => fsfIn15927 === null || fsfIn15927 === "";
      case "ERRORS":
        return (fsfIn16634) => isErrorValue(fsfIn16634);
      default:
        break;
    }
  return typeof fsfBind10926 == "number"
    ? () => fsfBind10926 === 0
    : typeof fsfBind10926 == "boolean"
      ? () => fsfBind10926
      : () => false;
}
export function buildSortIndex(fsfIn4818: any) {
  if (fsfIn4818 === undefined) return false;
  let fsfBind14190 = unwrapCellOrError(coerceLookupScalar(fsfIn4818));
  if (isErrorValue(fsfBind14190) || typeof fsfBind14190 == "boolean")
    return fsfBind14190;
  if (typeof fsfBind14190 == "number") return fsfBind14190 !== 0;
  if (typeof fsfBind14190 == "string") {
    let fsfBind19573 = fsfBind14190.trim().toUpperCase();
    if (fsfBind19573 === "TRUE") return true;
    if (fsfBind19573 === "FALSE") return false;
    let fsfBind19574 = Number(fsfBind14190);
    if (!Number.isNaN(fsfBind19574)) return fsfBind19574 !== 0;
  }
  return fsfBind14190 === null ? false : ERR_VALUE;
}
export function nct(fsfIn4916: any) {
  let fsfBind14323 = unwrapCellOrError(coerceLookupScalar(fsfIn4916));
  if (isErrorValue(fsfBind14323)) return fsfBind14323;
  if (fsfBind14323 === null) return ERR_VALUE;
  let fsfBind14324;
  if (typeof fsfBind14323 == "number") fsfBind14324 = fsfBind14323;
  else if (typeof fsfBind14323 == "string") {
    let fsfBind22580 = fsfBind14323.trim();
    if (!fsfBind22580) return ERR_VALUE;
    fsfBind14324 = Number(fsfBind22580);
  } else if (typeof fsfBind14323 == "boolean") fsfBind14324 = +!!fsfBind14323;
  else return ERR_VALUE;
  if (!Number.isFinite(fsfBind14324)) return ERR_VALUE;
  let fsfBind14325 = Math.trunc(fsfBind14324);
  return fsfBind14325 < 1 ? ERR_VALUE : fsfBind14325;
}
export function rct(fsfIn4401: any) {
  if (fsfIn4401 === undefined) return 1;
  let fsfBind13591 = unwrapCellOrError(coerceLookupScalar(fsfIn4401));
  if (isErrorValue(fsfBind13591)) return fsfBind13591;
  if (fsfBind13591 === null) return ERR_VALUE;
  let fsfBind13592;
  if (typeof fsfBind13591 == "number") fsfBind13592 = fsfBind13591;
  else if (typeof fsfBind13591 == "string") {
    let fsfBind22581 = fsfBind13591.trim();
    if (!fsfBind22581) return ERR_VALUE;
    fsfBind13592 = Number(fsfBind22581);
  } else if (typeof fsfBind13591 == "boolean") fsfBind13592 = +!!fsfBind13591;
  else return ERR_VALUE;
  if (!Number.isFinite(fsfBind13592)) return ERR_VALUE;
  let fsfBind13593 = Math.trunc(fsfBind13592);
  return fsfBind13593 < 1 || fsfBind13593 > 4 ? ERR_VALUE : fsfBind13593;
}
export function ict(fsfIn6926: any) {
  if (fsfIn6926 === undefined) return "";
  let fsfBind17274 = unwrapCellOrError(coerceLookupScalar(fsfIn6926));
  if (isErrorValue(fsfBind17274)) return fsfBind17274;
  if (fsfBind17274 === null) return "";
  let fsfBind17275 = String(fsfBind17274);
  if (!fsfBind17275) return "";
  let fsfBind17276 = fsfBind17275.replace(/'/g, "''");
  return /[^A-Za-z0-9_]/.test(fsfBind17275)
    ? `'${fsfBind17276}'!`
    : `${fsfBind17276}!`;
}
export function act(fsfIn5299: any, fsfIn5300: any) {
  let fsfBind14922 = () => {
    let fsfBind22487 = fsfH.getEvalContext()?.activeCellAddress;
    return fsfBind22487 ? fsfIn5300(fsfBind22487) : null;
  };
  if (fsfIn5299 === undefined) return fsfBind14922();
  let fsfBind14923 = oct(fsfIn5299);
  if (!fsfBind14923) return fsfBind14922();
  let fsfBind14924 = getRangeMetadata(fsfBind14923);
  if (!fsfBind14924) return fsfBind14922();
  let fsfBind14925 = fsfBind14924.map((item) =>
    (item ?? []).map((_item) => (_item ? fsfIn5300(_item) : ERR_VALUE)),
  );
  return fsfBind14925.length === 1 && fsfBind14925[0]?.length === 1
    ? (fsfBind14925[0][0] ?? ERR_VALUE)
    : createArrayValue(fsfBind14925);
}
export function oct(fsfIn7554: any) {
  if (Array.isArray(fsfIn7554)) return fsfIn7554;
  if (fsfIn7554 === undefined) return null;
  let fsfBind18035 = fsfIn7554;
  if (isArrayValue(fsfBind18035)) {
    let fsfBind21974 = fsfBind18035.values,
      fsfBind21975 = fsfBind21974.map((item) => (item ? [...item] : []));
    return (copyRangeMetadata(fsfBind21974, fsfBind21975), fsfBind21975);
  }
  return [[fsfBind18035]];
}
export function sct(fsfIn9364: any, fsfIn9365: any, fsfIn9366: any) {
  for (let fsfBind21153 of fsfIn9366) {
    let fsfBind21659 = zst(
      fsfBind21153.values[fsfIn9364] ?? null,
      fsfBind21153.values[fsfIn9365] ?? null,
    );
    if (fsfBind21659 !== 0) return fsfBind21659 * fsfBind21153.direction;
  }
  return 0;
}
export function cct(fsfIn6544: any) {
  if (fsfIn6544 === undefined) return 0;
  let fsfBind16785 = unwrapCellOrError(coerceLookupScalar(fsfIn6544));
  if (
    isErrorValue(fsfBind16785) ||
    (typeof fsfBind16785 == "number" &&
      (fsfBind16785 === 0 || fsfBind16785 === 2))
  )
    return fsfBind16785;
  if (typeof fsfBind16785 == "string") {
    let fsfBind22219 = Number(fsfBind16785);
    if (
      !Number.isNaN(fsfBind22219) &&
      (fsfBind22219 === 0 || fsfBind22219 === 2)
    )
      return fsfBind22219;
  }
  return ERR_VALUE;
}
export function lct(fsfIn6517: any) {
  if (fsfIn6517 === undefined) return 1;
  let fsfBind16733 = unwrapCellOrError(coerceLookupScalar(fsfIn6517));
  if (
    isErrorValue(fsfBind16733) ||
    (typeof fsfBind16733 == "number" &&
      (fsfBind16733 === 1 || fsfBind16733 === -1))
  )
    return fsfBind16733;
  if (typeof fsfBind16733 == "string") {
    let fsfBind22196 = Number(fsfBind16733);
    if (
      !Number.isNaN(fsfBind22196) &&
      (fsfBind22196 === 1 || fsfBind22196 === -1)
    )
      return fsfBind22196;
  }
  return ERR_VALUE;
}
export function ascendingIndices(fsfIn13279: any) {
  return Array.from(
    {
      length: fsfIn13279,
    },
    (fsfIn16635, fsfIn16636) => fsfIn16636,
  );
}
export function uct(fsfIn11816: any) {
  let fsfBind22123 = [];
  for (let fsfBind22987 = fsfIn11816 - 1; fsfBind22987 >= 0; --fsfBind22987)
    fsfBind22123.push(fsfBind22987);
  return fsfBind22123;
}
export function dct(fsfIn8077: any, fsfIn8078: any, fsfIn8079: any) {
  if (isErrorValue(fsfIn8077)) return fsfIn8077;
  if (isErrorValue(fsfIn8078)) return false;
  if (fsfIn8079 === 2) {
    let fsfBind22911 = compareSortKeys(fsfIn8077);
    return mct(compareSortKeys(fsfIn8078), fsfBind22911);
  }
  let fsfBind18583 = fct(fsfIn8077, fsfIn8078);
  return fsfBind18583 === null
    ? Ust(fsfIn8077, fsfIn8078) === 0
    : fsfBind18583 === 0;
}
export function fct(fsfIn9183: any, fsfIn9184: any) {
  let fsfBind19750 = pct(fsfIn9183),
    fsfBind19751 = pct(fsfIn9184);
  if (fsfBind19750 === null || fsfBind19751 === null) return null;
  let fsfBind19752 = fsfBind19750 - fsfBind19751;
  return Math.abs(fsfBind19752) <= FLOAT_EPS ? 0 : fsfBind19752 < 0 ? -1 : 1;
}
export function pct(fsfIn6487: any) {
  if (typeof fsfIn6487 == "number") return fsfIn6487;
  if (typeof fsfIn6487 == "boolean") return +!!fsfIn6487;
  if (typeof fsfIn6487 == "string") {
    let fsfBind21313 = fsfIn6487.trim();
    if (fsfBind21313 === "") return 0;
    let fsfBind21314 = Number(fsfBind21313);
    return Number.isNaN(fsfBind21314) ? null : fsfBind21314;
  }
  return fsfIn6487 == null ? 0 : null;
}
export function mct(fsfIn15168: any, fsfIn15169: any) {
  return hct(fsfIn15169).test(fsfIn15168);
}
export function hct(fsfIn5178: any) {
  let fsfBind14681 = "";
  for (
    let fsfBind16086 = 0;
    fsfBind16086 < fsfIn5178.length;
    fsfBind16086 += 1
  ) {
    let fsfBind17034 = fsfIn5178[fsfBind16086];
    if (fsfBind17034 === "~" && fsfBind16086 + 1 < fsfIn5178.length) {
      fsfBind14681 += gct(fsfIn5178[fsfBind16086 + 1]);
      fsfBind16086 += 1;
      continue;
    }
    if (fsfBind17034 === "*") {
      fsfBind14681 += ".*";
      continue;
    }
    if (fsfBind17034 === "?") {
      fsfBind14681 += ".";
      continue;
    }
    fsfBind14681 += gct(fsfBind17034);
  }
  return RegExp(`^${fsfBind14681}$`, "i");
}
export function gct(fsfIn13088: any) {
  return fsfIn13088.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function _ct(fsfIn6378: any, fsfIn6379: any, fsfIn6380: any) {
  if (fsfIn6379 === "column") {
    let fsfBind21770 = (fsfIn6378[fsfIn6380] ?? []).map((item) =>
      unwrapCellOrError(item),
    );
    return fsfBind21770.length <= 1
      ? (fsfBind21770[0] ?? null)
      : createArrayValue([fsfBind21770]);
  }
  let fsfBind16537 = fsfIn6378.map((item) =>
    item.length > fsfIn6380 ? unwrapCellOrError(item[fsfIn6380]) : null,
  );
  return fsfBind16537.length <= 1
    ? (fsfBind16537[0] ?? null)
    : createArrayValue(fsfBind16537.map((item) => [item ?? null]));
}
export function vct(fsfIn8914: any) {
  return fsfIn8914 === undefined
    ? ERR_NA
    : isArrayValue(fsfIn8914)
      ? createArrayValue(yct(fsfIn8914))
      : Array.isArray(fsfIn8914)
        ? createArrayValue(
            fsfIn8914.map((item) =>
              item.map((_item) => unwrapCellOrError(_item)),
            ),
          )
        : (fsfIn8914 ?? null);
}
export function yct(fsfIn13089: any) {
  return fsfIn13089.values.map((item) =>
    item.map((_item) => unwrapCellOrError(_item)),
  );
}
export function coerceLookupScalar(props: any) {
  if (Array.isArray(props)) {
    let fsfBind22469 = props[0];
    return unwrapCellOrError(
      Array.isArray(fsfBind22469) ? fsfBind22469[0] : (fsfBind22469 ?? null),
    );
  }
  return isArrayValue(props)
    ? unwrapCellOrError(props.values[0]?.[0])
    : unwrapCellOrError(props);
}
export function unwrapCellOrError(fsfIn8494: any) {
  return fsfIn8494 === undefined
    ? null
    : fsfIn8494 instanceof Error
      ? {
          kind: "Error",
          code: fsfIn8494.message ?? "#VALUE!",
        }
      : isArrayValue(fsfIn8494) || xct(fsfIn8494)
        ? ERR_VALUE
        : (fsfIn8494 ?? null);
}
export function bct(fsfIn5739: any) {
  let fsfBind15663 = unwrapCellOrError(fsfIn5739);
  if (typeof fsfBind15663 != "string") return fsfBind15663;
  let fsfBind15664 = fsfBind15663.replace(/\u00A0/g, " ").trim();
  if (fsfBind15664 === "") return "";
  if (fsfBind15664.endsWith("%")) {
    let fsfBind21976 = fsfBind15664.slice(0, -1),
      fsfBind21977 = Number(fsfBind21976);
    if (!Number.isNaN(fsfBind21977)) return fsfBind21977 / 100;
  }
  let fsfBind15665 = Number(fsfBind15664);
  return Number.isNaN(fsfBind15665) ? fsfBind15663 : fsfBind15665;
}
export function xct(fsfIn12467: any) {
  return (
    typeof fsfIn12467 == "object" &&
    !!fsfIn12467 &&
    fsfIn12467.kind === "Lambda"
  );
}
export function Sct(
  fsfIn5436: any,
  fsfIn5437: any,
  fsfIn5438: any,
  fsfIn5439: any,
) {
  let fsfBind15199 = coerceMatrixRows(fsfIn5436);
  if (fsfBind15199.length === 0) return createArrayValue([]);
  let fsfBind15200 = fsfIn5437 ? Number(fallbackIfEmpty(fsfIn5437)) : 1,
    fsfBind15201 = Number.isFinite(fsfBind15200)
      ? Math.max(1, fsfBind15200) - 1
      : 0,
    fsfBind15202 =
      (fsfIn5438 ? Number(fallbackIfEmpty(fsfIn5438)) : 1) < 0 ? -1 : 1;
  return fsfIn5439 && fallbackIfEmpty(fsfIn5439)
    ? {
        kind: "Error",
        code: "#VALUE!",
      }
    : createArrayValue(
        [...fsfBind15199].sort(
          (fsfIn15239, fsfIn15240) =>
            zst(
              fsfIn15239[fsfBind15201] ?? null,
              fsfIn15240[fsfBind15201] ?? null,
            ) * fsfBind15202,
        ),
      );
}
export function Cct(
  fsfIn5113: any,
  fsfIn5114: any,
  fsfIn5115: any,
  fsfIn5116: any,
) {
  let fsfBind14605 = Bst(fsfIn5114);
  if (isErrorValue(fsfBind14605)) return fsfBind14605;
  let fsfBind14606 = unwrapCellOrError(coerceLookupScalar(fsfIn5113));
  if (isErrorValue(fsfBind14606)) return fsfBind14606;
  let fsfBind14607 = cct(fsfIn5115);
  if (isErrorValue(fsfBind14607)) return fsfBind14607;
  let fsfBind14608 = lct(fsfIn5116);
  if (isErrorValue(fsfBind14608)) return fsfBind14608;
  let fsfBind14609 =
    fsfBind14608 === -1
      ? uct(fsfBind14605.length)
      : ascendingIndices(fsfBind14605.length);
  for (let fsfBind21419 of fsfBind14609) {
    let fsfBind21978 = fsfBind14605[fsfBind21419],
      fsfBind21979 = dct(fsfBind14606, fsfBind21978, fsfBind14607);
    if (isErrorValue(fsfBind21979)) return fsfBind21979;
    if (fsfBind21979) return fsfBind21419 + 1;
  }
  return ERR_NA;
}
