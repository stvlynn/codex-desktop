// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel scalar / statistical formula helpers (isNonNullArg..uQe).
// Stage-3 wave-121. Preferred peels qQe/z$e/days360 with owned average nest.

import {
  excelDaysSinceEpoch,
  makeFormulaToken,
  parseCriteriaTokens,
  collectFormulaArgs,
  eachFormulaArg,
  coerceArgNumbers,
  flattenFormulaArgs,
  flattenFormulaArgsDeep,
  chooseFormulaValue,
  anyFormulaError,
  hasFormulaError,
  filterNumericArgs,
  coerceFormulaBoolean,
  coerceFormulaDate,
  flattenMatrixArgs,
  ensureFlatArgs,
  isBlankLike,
  isAnyStringArg,
  matchCriteriaPairs,
} from "../formula-token-utils";
import {
  workbookBinding1831,
  workbookBinding1832,
  workbookBinding1833,
  workbookBinding1834,
  workbookBinding1835,
  workbookBinding1836,
  workbookBinding1837,
  workbookBinding1838,
  workbookBinding1839,
  workbookBinding1840,
  workbookBinding1842,
} from "../formula-stats";

export function isNonNullArg(fsfAIn15617: any) {
  return fsfAIn15617 != null;
}
export function dZe(fsfAIn10167: any) {
  return (
    [
      workbookBinding1835,
      workbookBinding1836,
      workbookBinding1834,
      workbookBinding1838,
      workbookBinding1837,
      workbookBinding1833,
    ].indexOf(fsfAIn10167) >= 0 ||
    (typeof fsfAIn10167 == "number" &&
      (isNaN(fsfAIn10167) || !isFinite(fsfAIn10167)))
  );
}
export function isErrorOrBlank(fsfAIn15135: any) {
  return dZe(fsfAIn15135) || fsfAIn15135 === workbookBinding1839;
}
export function fZe(fsfAIn13850: any) {
  return !(Math.floor(Math.abs(fsfAIn13850)) & 1);
}
export function pZe(fsfAIn14834: any) {
  return fsfAIn14834 === true || fsfAIn14834 === false;
}
export function mZe(fsfAIn15618: any) {
  return fsfAIn15618 === workbookBinding1839;
}
export function hZe(fsfAIn14835: any) {
  return typeof fsfAIn14835 != "string";
}
export function isFiniteNumber(fsfAIn12638: any) {
  return (
    typeof fsfAIn12638 == "number" &&
    !isNaN(fsfAIn12638) &&
    isFinite(fsfAIn12638)
  );
}
export function gZe(fsfAIn13751: any) {
  return !!(Math.floor(Math.abs(fsfAIn13751)) & 1);
}
export function _Ze(fsfAIn14836: any) {
  return typeof fsfAIn14836 == "string";
}
export function vZe(fsfAIn8267: any) {
  return isFiniteNumber(fsfAIn8267)
    ? fsfAIn8267
    : fsfAIn8267 instanceof Date
      ? fsfAIn8267.getTime()
      : fsfAIn8267 === true
        ? 1
        : fsfAIn8267 === false
          ? 0
          : isErrorOrBlank(fsfAIn8267)
            ? fsfAIn8267
            : 0;
}
export function yZe() {
  return workbookBinding1839;
}
export function bZe(fsfAIn9781: any) {
  if (isFiniteNumber(fsfAIn9781)) return 1;
  if (_Ze(fsfAIn9781)) return 2;
  if (pZe(fsfAIn9781)) return 4;
  if (isErrorOrBlank(fsfAIn9781)) return 16;
  if (Array.isArray(fsfAIn9781)) return 64;
}
export function xZe() {
  if (arguments.length < 2) return workbookBinding1839;
  let fsfABind20128 = arguments[0];
  return fsfABind20128 < 1 ||
    fsfABind20128 > 254 ||
    arguments.length < fsfABind20128 + 1
    ? workbookBinding1835
    : arguments[fsfABind20128];
}
export function SZe(fsfAIn8268: any, fsfAIn8269: any) {
  if (arguments.length !== 2) return workbookBinding1839;
  if (fsfAIn8269 < 0) return workbookBinding1838;
  if (!(fsfAIn8268 instanceof Array) || typeof fsfAIn8269 != "number")
    return workbookBinding1835;
  if (fsfAIn8268.length !== 0)
    return workbookBinding1831.default.col(fsfAIn8268, fsfAIn8269);
}
export function CZe(props: any) {
  return arguments.length === 1
    ? props instanceof Array
      ? props.length === 0
        ? 0
        : workbookBinding1831.default.cols(props)
      : workbookBinding1835
    : workbookBinding1839;
}
export function wZe(
  fsfAIn13959: any,
  fsfAIn13960: any,
  fsfAIn13961: any,
  fsfAIn13962: any,
) {
  return jZe(fsfAIn13959, sZe(fsfAIn13960), fsfAIn13961, fsfAIn13962);
}
export function TZe(fsfAIn4711: any, fsfAIn4712: any, fsfAIn4713: any) {
  let fsfABind13998 = anyFormulaError(fsfAIn4711, fsfAIn4712, fsfAIn4713);
  if (fsfABind13998) return fsfABind13998;
  if (!Array.isArray(fsfAIn4711)) return workbookBinding1835;
  let fsfABind13999 = fsfAIn4711.length > 0 && !Array.isArray(fsfAIn4711[0]);
  return (
    fsfABind13999 && !fsfAIn4713
      ? ((fsfAIn4713 = fsfAIn4712), (fsfAIn4712 = 1))
      : ((fsfAIn4713 ||= 1), (fsfAIn4712 ||= 1)),
    fsfAIn4713 < 0 || fsfAIn4712 < 0
      ? workbookBinding1835
      : fsfABind13999 && fsfAIn4712 === 1 && fsfAIn4713 <= fsfAIn4711.length
        ? fsfAIn4711[fsfAIn4713 - 1]
        : fsfAIn4712 <= fsfAIn4711.length &&
            fsfAIn4713 <= fsfAIn4711[fsfAIn4712 - 1].length
          ? fsfAIn4711[fsfAIn4712 - 1][fsfAIn4713 - 1]
          : workbookBinding1836
  );
}
export function EZe(fsfAIn5389: any, fsfAIn5390: any, fsfAIn5391: any) {
  fsfAIn5390 = flattenFormulaArgs(fsfAIn5390);
  fsfAIn5391 = fsfAIn5391 ? flattenFormulaArgs(fsfAIn5391) : fsfAIn5390;
  let fsfABind15130 = typeof fsfAIn5389 == "number",
    fsfABind15131 = workbookBinding1839;
  for (
    let fsfABind17945 = 0;
    fsfABind17945 < fsfAIn5390.length;
    fsfABind17945++
  )
    if (fsfAIn5390[fsfABind17945] === fsfAIn5389)
      return fsfAIn5391[fsfABind17945];
    else if (
      (fsfABind15130 && fsfAIn5390[fsfABind17945] <= fsfAIn5389) ||
      (typeof fsfAIn5390[fsfABind17945] == "string" &&
        fsfAIn5390[fsfABind17945].localeCompare(fsfAIn5389) < 0)
    )
      fsfABind15131 = fsfAIn5391[fsfABind17945];
    else if (fsfABind15130 && fsfAIn5390[fsfABind17945] > fsfAIn5389)
      return fsfABind15131;
  return fsfABind15131;
}
export function OZe(props: any) {
  return arguments.length === 1
    ? props instanceof Array
      ? props.length === 0
        ? 0
        : workbookBinding1831.default.rows(props)
      : workbookBinding1835
    : workbookBinding1839;
}
export function kZe(fsfAIn14837: any) {
  return fsfAIn14837 ? sZe(rZe(fsfAIn14837)) : workbookBinding1839;
}
export function AZe() {
  let fsfABind18155 = [];
  for (
    let fsfABind19540 = 0;
    fsfABind19540 < arguments.length;
    ++fsfABind19540
  ) {
    let fsfABind20828 = false,
      fsfABind20829 = arguments[fsfABind19540];
    for (
      let fsfABind22729 = 0;
      fsfABind22729 < fsfABind18155.length &&
      ((fsfABind20828 = fsfABind18155[fsfABind22729] === fsfABind20829),
      !fsfABind20828);
      ++fsfABind22729
    );
    fsfABind20828 || fsfABind18155.push(fsfABind20829);
  }
  return fsfABind18155;
}
export function jZe(
  fsfAIn3063: any,
  fsfAIn3064: any,
  fsfAIn3065: any,
  fsfAIn3066: any,
) {
  if (!fsfAIn3064 || !fsfAIn3065) return workbookBinding1839;
  fsfAIn3066 = !(fsfAIn3066 === 0 || fsfAIn3066 === false);
  let fsfABind11141 = workbookBinding1839,
    fsfABind11142 = false,
    fsfABind11143 = typeof fsfAIn3063 == "number",
    fsfABind11144 =
      typeof fsfAIn3063 == "string" ? fsfAIn3063.toLowerCase() : fsfAIn3063;
  for (
    let fsfABind14182 = 0;
    fsfABind14182 < fsfAIn3064.length;
    fsfABind14182++
  ) {
    let fsfABind14841 = fsfAIn3064[fsfABind14182],
      fsfABind14842 =
        typeof fsfABind14841[0] == "string"
          ? fsfABind14841[0].toLowerCase()
          : fsfABind14841[0];
    if (fsfABind14842 === fsfABind11144) {
      fsfABind11141 =
        fsfAIn3065 < fsfABind14841.length + 1
          ? fsfABind14841[fsfAIn3065 - 1]
          : workbookBinding1836;
      break;
    } else
      !fsfABind11142 &&
        ((fsfABind11143 && fsfAIn3066 && fsfABind14842 <= fsfAIn3063) ||
          (fsfAIn3066 &&
            typeof fsfABind14842 == "string" &&
            fsfABind14842.localeCompare(fsfAIn3063) < 0)) &&
        (fsfABind11141 =
          fsfAIn3065 < fsfABind14841.length + 1
            ? fsfABind14841[fsfAIn3065 - 1]
            : workbookBinding1836);
    fsfABind11143 && fsfABind14842 > fsfAIn3063 && (fsfABind11142 = true);
  }
  return fsfABind11141;
}
export function MZe(fsfAIn10785: any) {
  return (
    (fsfAIn10785 = flattenMatrixArgs(fsfAIn10785)),
    fsfAIn10785 === 0
      ? workbookBinding1835
      : fsfAIn10785 instanceof Error
        ? fsfAIn10785
        : String.fromCharCode(fsfAIn10785)
  );
}
export function NZe(props: any) {
  return hasFormulaError(props)
    ? props
    : ((props ||= ""), props.replace(/[\0-\x1F]/g, ""));
}
export function PZe(props: any) {
  if (hasFormulaError(props)) return props;
  props ||= "";
  let fsfABind21363 = props.charCodeAt(0);
  return (
    isNaN(fsfABind21363) && (fsfABind21363 = workbookBinding1835),
    fsfABind21363
  );
}
export function FZe() {
  let fsfABind17547 = flattenFormulaArgs(arguments),
    fsfABind17548 = anyFormulaError.apply(undefined, fsfABind17547);
  if (fsfABind17548) return fsfABind17548;
  let fsfABind17549 = 0;
  for (; (fsfABind17549 = fsfABind17547.indexOf(true)) > -1; )
    fsfABind17547[fsfABind17549] = "TRUE";
  let fsfABind17550 = 0;
  for (; (fsfABind17550 = fsfABind17547.indexOf(false)) > -1; )
    fsfABind17547[fsfABind17550] = "FALSE";
  return fsfABind17547.join("");
}
export function IZe(fsfAIn5693: any, fsfAIn5694: any = 2) {
  if (((fsfAIn5693 = flattenMatrixArgs(fsfAIn5693)), isNaN(fsfAIn5693)))
    return workbookBinding1835;
  fsfAIn5693 = O$e(fsfAIn5693, fsfAIn5694);
  let fsfABind15592 = {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fsfAIn5694 >= 0 ? fsfAIn5694 : 0,
      maximumFractionDigits: fsfAIn5694 >= 0 ? fsfAIn5694 : 0,
    },
    r = fsfAIn5693.toLocaleString("en-US", fsfABind15592);
  return fsfAIn5693 < 0 ? "$(" + r.slice(2) + ")" : r;
}
export function LZe(fsfAIn10764: any, fsfAIn10765: any) {
  return arguments.length === 2
    ? anyFormulaError(fsfAIn10764, fsfAIn10765) ||
        ((fsfAIn10764 = isBlankLike(fsfAIn10764)),
        (fsfAIn10765 = isBlankLike(fsfAIn10765)),
        fsfAIn10764 === fsfAIn10765)
    : workbookBinding1839;
}
export function RZe(fsfAIn8723: any, fsfAIn8724: any, fsfAIn8725: any) {
  if (arguments.length < 2) return workbookBinding1839;
  fsfAIn8723 = isBlankLike(fsfAIn8723);
  fsfAIn8724 = isBlankLike(fsfAIn8724);
  fsfAIn8725 = fsfAIn8725 === undefined ? 0 : fsfAIn8725;
  let fsfABind19231 = fsfAIn8724.indexOf(fsfAIn8723, fsfAIn8725 - 1);
  return fsfABind19231 === -1 ? workbookBinding1835 : fsfABind19231 + 1;
}
export function zZe(
  fsfAIn5067: any,
  fsfAIn5068: any = 2,
  fsfAIn5069: any = false,
) {
  if (
    ((fsfAIn5067 = flattenMatrixArgs(fsfAIn5067)),
    isNaN(fsfAIn5067) ||
      ((fsfAIn5068 = flattenMatrixArgs(fsfAIn5068)), isNaN(fsfAIn5068)))
  )
    return workbookBinding1835;
  if (fsfAIn5068 < 0) {
    let fsfABind22780 = 10 ** -fsfAIn5068;
    fsfAIn5067 = Math.round(fsfAIn5067 / fsfABind22780) * fsfABind22780;
  } else fsfAIn5067 = fsfAIn5067.toFixed(fsfAIn5068);
  if (fsfAIn5069) fsfAIn5067 = fsfAIn5067.toString().replace(/,/g, "");
  else {
    let fsfABind21364 = fsfAIn5067.toString().split(".");
    fsfABind21364[0] = fsfABind21364[0].replace(/\B(?=(\d{3})+$)/g, ",");
    fsfAIn5067 = fsfABind21364.join(".");
  }
  return fsfAIn5067;
}
export function BZe(fsfAIn8490: any, fsfAIn8491: any) {
  return (
    anyFormulaError(fsfAIn8490, fsfAIn8491) ||
    ((fsfAIn8490 = isBlankLike(fsfAIn8490)),
    (fsfAIn8491 = fsfAIn8491 === undefined ? 1 : fsfAIn8491),
    (fsfAIn8491 = flattenMatrixArgs(fsfAIn8491)),
    fsfAIn8491 instanceof Error || typeof fsfAIn8490 != "string"
      ? workbookBinding1835
      : fsfAIn8490.substring(0, fsfAIn8491))
  );
}
export function VZe(fsfAIn9570: any) {
  return arguments.length === 0
    ? workbookBinding1840
    : fsfAIn9570 instanceof Error
      ? fsfAIn9570
      : Array.isArray(fsfAIn9570)
        ? workbookBinding1835
        : isBlankLike(fsfAIn9570).length;
}
export function HZe(props: any) {
  return arguments.length === 1
    ? ((props = isBlankLike(props)),
      hasFormulaError(props) ? props : props.toLowerCase())
    : workbookBinding1835;
}
export function UZe(fsfAIn8644: any, fsfAIn8645: any, fsfAIn8646: any) {
  if (fsfAIn8645 == null) return workbookBinding1835;
  if (
    ((fsfAIn8645 = flattenMatrixArgs(fsfAIn8645)),
    (fsfAIn8646 = flattenMatrixArgs(fsfAIn8646)),
    hasFormulaError(fsfAIn8645, fsfAIn8646) || typeof fsfAIn8644 != "string")
  )
    return fsfAIn8646;
  let fsfABind19145 = fsfAIn8645 - 1,
    fsfABind19146 = fsfABind19145 + fsfAIn8646;
  return fsfAIn8644.substring(fsfABind19145, fsfABind19146);
}
export function WZe(fsfAIn6451: any, fsfAIn6452: any, fsfAIn6453: any) {
  return (
    (fsfAIn6451 = isNonNullArg(fsfAIn6451) ? fsfAIn6451 : ""),
    typeof fsfAIn6451 == "number"
      ? fsfAIn6451
      : typeof fsfAIn6451 == "string"
        ? ((fsfAIn6452 = fsfAIn6452 === undefined ? "." : fsfAIn6452),
          (fsfAIn6453 = fsfAIn6453 === undefined ? "," : fsfAIn6453),
          Number(fsfAIn6451.replace(fsfAIn6452, ".").replace(fsfAIn6453, "")))
        : workbookBinding1839
  );
}
export function GZe(props: any) {
  return hasFormulaError(props)
    ? props
    : isNaN(props) && typeof props == "number"
      ? workbookBinding1835
      : ((props = isBlankLike(props)),
        props.replace(
          /\w\S*/g,
          (fsfAIn13851) =>
            fsfAIn13851.charAt(0).toUpperCase() +
            fsfAIn13851.substr(1).toLowerCase(),
        ));
}
export function KZe(
  fsfAIn8270: any,
  fsfAIn8271: any,
  fsfAIn8272: any,
  fsfAIn8273: any,
) {
  return (
    (fsfAIn8271 = flattenMatrixArgs(fsfAIn8271)),
    (fsfAIn8272 = flattenMatrixArgs(fsfAIn8272)),
    hasFormulaError(fsfAIn8271, fsfAIn8272) ||
    typeof fsfAIn8270 != "string" ||
    typeof fsfAIn8273 != "string"
      ? workbookBinding1835
      : fsfAIn8270.substr(0, fsfAIn8271 - 1) +
        fsfAIn8273 +
        fsfAIn8270.substr(fsfAIn8271 - 1 + fsfAIn8272)
  );
}
export function padStartRepeat(fsfAIn10402: any, fsfAIn10403: any) {
  return (
    anyFormulaError(fsfAIn10402, fsfAIn10403) ||
    ((fsfAIn10402 = isBlankLike(fsfAIn10402)),
    (fsfAIn10403 = flattenMatrixArgs(fsfAIn10403)),
    fsfAIn10403 instanceof Error
      ? fsfAIn10403
      : Array(fsfAIn10403 + 1).join(fsfAIn10402))
  );
}
export function qZe(fsfAIn8934: any, fsfAIn8935: any) {
  return (
    anyFormulaError(fsfAIn8934, fsfAIn8935) ||
    ((fsfAIn8934 = isBlankLike(fsfAIn8934)),
    (fsfAIn8935 = fsfAIn8935 === undefined ? 1 : fsfAIn8935),
    (fsfAIn8935 = flattenMatrixArgs(fsfAIn8935)),
    fsfAIn8935 instanceof Error
      ? fsfAIn8935
      : fsfAIn8934.substring(fsfAIn8934.length - fsfAIn8935))
  );
}
export function JZe(fsfAIn7674: any, fsfAIn7675: any, fsfAIn7676: any) {
  let fsfABind18183;
  return typeof fsfAIn7674 != "string" || typeof fsfAIn7675 != "string"
    ? workbookBinding1835
    : ((fsfAIn7676 = fsfAIn7676 === undefined ? 0 : fsfAIn7676),
      (fsfABind18183 =
        fsfAIn7675
          .toLowerCase()
          .indexOf(fsfAIn7674.toLowerCase(), fsfAIn7676 - 1) + 1),
      fsfABind18183 === 0 ? workbookBinding1835 : fsfABind18183);
}
export function YZe(
  fsfAIn4235: any,
  fsfAIn4236: any,
  fsfAIn4237: any,
  fsfAIn4238: any,
) {
  if (arguments.length < 3) return workbookBinding1839;
  if (!fsfAIn4235 || !fsfAIn4236) return fsfAIn4235;
  if (fsfAIn4238 === undefined)
    return fsfAIn4235.split(fsfAIn4236).join(fsfAIn4237);
  {
    if (
      ((fsfAIn4238 = Math.floor(Number(fsfAIn4238))),
      Number.isNaN(fsfAIn4238) || fsfAIn4238 <= 0)
    )
      return workbookBinding1835;
    let fsfABind16162 = 0,
      fsfABind16163 = 0;
    for (
      ;
      fsfABind16162 > -1 && fsfAIn4235.indexOf(fsfAIn4236, fsfABind16162) > -1;
    )
      if (
        ((fsfABind16162 = fsfAIn4235.indexOf(fsfAIn4236, fsfABind16162 + 1)),
        fsfABind16163++,
        fsfABind16162 > -1 && fsfABind16163 === fsfAIn4238)
      )
        return (
          fsfAIn4235.substring(0, fsfABind16162) +
          fsfAIn4237 +
          fsfAIn4235.substring(fsfABind16162 + fsfAIn4236.length)
        );
    return fsfAIn4235;
  }
}
export function averageArgs(fsfAIn12453: any) {
  return fsfAIn12453 instanceof Error || typeof fsfAIn12453 == "string"
    ? fsfAIn12453
    : "";
}
export function XZe(fsfAIn2823: any, fsfAIn2824: any) {
  if (
    fsfAIn2823 === undefined ||
    fsfAIn2823 instanceof Error ||
    fsfAIn2824 instanceof Error
  )
    return workbookBinding1839;
  if (fsfAIn2823 instanceof Date) return fsfAIn2823.toISOString().slice(0, 10);
  if (fsfAIn2824 == null) return "";
  if (typeof fsfAIn2824 == "number") return String(fsfAIn2824);
  if (typeof fsfAIn2824 != "string") return workbookBinding1835;
  let fsfABind10577 = fsfAIn2824.startsWith("$") ? "$" : "",
    fsfABind10578 = fsfAIn2824.endsWith("%");
  fsfAIn2824 = fsfAIn2824.replace(/%/g, "").replace(/\$/g, "");
  let fsfABind10579 = fsfAIn2824.includes(".")
      ? fsfAIn2824.split(".")[1].match(/0/g).length
      : 0,
    fsfABind10580 = !fsfAIn2824.includes(",");
  return (
    fsfABind10578 && (fsfAIn2823 *= 100),
    (fsfAIn2823 = zZe(fsfAIn2823, fsfABind10579, fsfABind10580)),
    fsfAIn2823.startsWith("-")
      ? ((fsfAIn2823 = fsfAIn2823.replace("-", "")),
        (fsfAIn2823 = "-" + fsfABind10577 + fsfAIn2823))
      : (fsfAIn2823 = fsfABind10577 + fsfAIn2823),
    fsfABind10578 && (fsfAIn2823 += "%"),
    fsfAIn2823
  );
}
export function ZZe(fsfAIn4506: any, fsfAIn4507: any, ...fsfAIn4508: any[]) {
  if (
    (typeof fsfAIn4507 != "boolean" &&
      (fsfAIn4507 = coerceFormulaBoolean(fsfAIn4507)),
    arguments.length < 3)
  )
    return workbookBinding1839;
  fsfAIn4506 ??= "";
  let fsfABind13748 = flattenFormulaArgs(fsfAIn4508),
    fsfABind13749 = fsfAIn4507
      ? fsfABind13748.filter((item) => item)
      : fsfABind13748;
  if (Array.isArray(fsfAIn4506)) {
    fsfAIn4506 = flattenFormulaArgs(fsfAIn4506);
    let fsfABind18755 = fsfABind13749.map((item) => [item]),
      fsfABind18756 = 0;
    for (
      let fsfABind22005 = 0;
      fsfABind22005 < fsfABind18755.length - 1;
      fsfABind22005++
    ) {
      fsfABind18755[fsfABind22005].push(fsfAIn4506[fsfABind18756]);
      fsfABind18756++;
      fsfABind18756 === fsfAIn4506.length && (fsfABind18756 = 0);
    }
    return (
      (fsfABind13749 = flattenFormulaArgs(fsfABind18755)),
      fsfABind13749.join("")
    );
  }
  return fsfABind13749.join(fsfAIn4506);
}
export function QZe(props: any) {
  return (
    (props = isBlankLike(props)),
    props instanceof Error ? props : props.replace(/\s+/g, " ").trim()
  );
}
export function $Ze(fsfAIn12150: any) {
  return (
    (fsfAIn12150 = isBlankLike(fsfAIn12150)),
    fsfAIn12150 instanceof Error ? fsfAIn12150 : fsfAIn12150.toUpperCase()
  );
}
export function eQe(fsfAIn4329: any) {
  let fsfABind13450 = anyFormulaError(fsfAIn4329);
  if (fsfABind13450) return fsfABind13450;
  if (typeof fsfAIn4329 == "number") return fsfAIn4329;
  if (
    (isNonNullArg(fsfAIn4329) || (fsfAIn4329 = ""),
    typeof fsfAIn4329 != "string")
  )
    return workbookBinding1835;
  let fsfABind13451 = /(%)$/.test(fsfAIn4329) || /^(%)/.test(fsfAIn4329);
  if (
    ((fsfAIn4329 = fsfAIn4329.replace(/^[^0-9-]{0,3}/, "")),
    (fsfAIn4329 = fsfAIn4329.replace(/[^0-9]{0,3}$/, "")),
    (fsfAIn4329 = fsfAIn4329.replace(/[ ,]/g, "")),
    fsfAIn4329 === "")
  )
    return 0;
  let fsfABind13452 = Number(fsfAIn4329);
  return isNaN(fsfABind13452)
    ? workbookBinding1835
    : ((fsfABind13452 ||= 0),
      fsfABind13451 && (fsfABind13452 *= 0.01),
      fsfABind13452);
}
export function tQe() {
  let fsfABind17807 = flattenFormulaArgs(arguments).filter(isNonNullArg);
  if (fsfABind17807.length === 0) return workbookBinding1838;
  let fsfABind17808 = ensureFlatArgs(fsfABind17807);
  return fsfABind17808 instanceof Error
    ? fsfABind17808
    : workbookBinding1831.default.sum(
        workbookBinding1831
          .default(fsfABind17808)
          .subtract(workbookBinding1831.default.mean(fsfABind17808))
          .abs()[0],
      ) / fsfABind17808.length;
}
export function averageNumericArgs() {
  let fsfABind16045 = flattenFormulaArgs(arguments).filter(isNonNullArg);
  if (fsfABind16045.length === 0) return workbookBinding1834;
  let fsfABind16046 = anyFormulaError.apply(undefined, fsfABind16045);
  if (fsfABind16046) return fsfABind16046;
  let fsfABind16047 = filterNumericArgs(fsfABind16045),
    fsfABind16048 = fsfABind16047.length,
    fsfABind16049 = 0,
    fsfABind16050 = 0,
    fsfABind16051;
  for (let fsfABind22876 = 0; fsfABind22876 < fsfABind16048; fsfABind22876++) {
    fsfABind16049 += fsfABind16047[fsfABind22876];
    fsfABind16050 += 1;
  }
  return (
    (fsfABind16051 = fsfABind16049 / fsfABind16050),
    isNaN(fsfABind16051) && (fsfABind16051 = workbookBinding1838),
    fsfABind16051
  );
}
export function averageAArgs() {
  let fsfABind14563 = flattenFormulaArgs(arguments).filter(isNonNullArg);
  if (fsfABind14563.length === 0) return workbookBinding1834;
  let fsfABind14564 = anyFormulaError.apply(undefined, fsfABind14563);
  if (fsfABind14564) return fsfABind14564;
  let fsfABind14565 = fsfABind14563,
    fsfABind14566 = fsfABind14565.length,
    fsfABind14567 = 0,
    fsfABind14568 = 0,
    fsfABind14569;
  for (let fsfABind20969 = 0; fsfABind20969 < fsfABind14566; fsfABind20969++) {
    let fsfABind21874 = fsfABind14565[fsfABind20969];
    typeof fsfABind21874 == "number" && (fsfABind14567 += fsfABind21874);
    fsfABind21874 === true && fsfABind14567++;
    fsfABind21874 !== null && fsfABind14568++;
  }
  return (
    (fsfABind14569 = fsfABind14567 / fsfABind14568),
    isNaN(fsfABind14569) && (fsfABind14569 = workbookBinding1838),
    fsfABind14569
  );
}
export function nQe() {
  let fsfABind21147 = matchCriteriaPairs(...arguments),
    fsfABind21148 =
      fsfABind21147.reduce((accumulator, current) => accumulator + current, 0) /
      fsfABind21147.length;
  return isNaN(fsfABind21148) ? 0 : fsfABind21148;
}
export function rQe(fsfAIn10700: any, fsfAIn10701: any) {
  return (
    (fsfAIn10700 = ensureFlatArgs(flattenFormulaArgs(fsfAIn10700))),
    (fsfAIn10701 = ensureFlatArgs(flattenFormulaArgs(fsfAIn10701))),
    hasFormulaError(fsfAIn10700, fsfAIn10701)
      ? workbookBinding1835
      : workbookBinding1831.default.corrcoeff(fsfAIn10700, fsfAIn10701)
  );
}
export function isOddInteger() {
  return filterNumericArgs(flattenFormulaArgs(arguments)).length;
}
export function isEvenInteger() {
  let fsfABind22578 = flattenFormulaArgs(arguments);
  return fsfABind22578.length - iQe(fsfABind22578);
}
export function iQe() {
  let fsfABind20003 = flattenFormulaArgs(arguments),
    fsfABind20004 = 0,
    fsfABind20005;
  for (
    let fsfABind22322 = 0;
    fsfABind22322 < fsfABind20003.length;
    fsfABind22322++
  ) {
    fsfABind20005 = fsfABind20003[fsfABind22322];
    (fsfABind20005 == null || fsfABind20005 === "") && fsfABind20004++;
  }
  return fsfABind20004;
}
export function aQe(fsfAIn7164: any, fsfAIn7165: any) {
  if (
    ((fsfAIn7164 = flattenFormulaArgs(fsfAIn7164)),
    fsfAIn7165 === undefined || fsfAIn7165 === "*")
  )
    return fsfAIn7164.length;
  let fsfABind17512 = 0,
    fsfABind17513 = parseCriteriaTokens(fsfAIn7165 + "");
  for (
    let fsfABind21551 = 0;
    fsfABind21551 < fsfAIn7164.length;
    fsfABind21551++
  ) {
    let fsfABind22510 = fsfAIn7164[fsfABind21551],
      fsfABind22511 = [makeFormulaToken(fsfABind22510, fsfABind1846)].concat(
        fsfABind17513,
      );
    fsfABind1847(fsfABind22511) && fsfABind17512++;
  }
  return fsfABind17512;
}
export function oQe() {
  let fsfABind12471 = collectFormulaArgs(arguments),
    fsfABind12472 = Array(flattenFormulaArgs(fsfABind12471[0]).length);
  for (
    let fsfABind22968 = 0;
    fsfABind22968 < fsfABind12472.length;
    fsfABind22968++
  )
    fsfABind12472[fsfABind22968] = true;
  for (
    let fsfABind16192 = 0;
    fsfABind16192 < fsfABind12471.length;
    fsfABind16192 += 2
  ) {
    let fsfABind17148 = flattenFormulaArgs(fsfABind12471[fsfABind16192]),
      fsfABind17149 = fsfABind12471[fsfABind16192 + 1];
    if (!(fsfABind17149 === undefined || fsfABind17149 === "*")) {
      let fsfABind19567 = parseCriteriaTokens(fsfABind17149 + "");
      for (
        let fsfABind20784 = 0;
        fsfABind20784 < fsfABind17148.length;
        fsfABind20784++
      ) {
        let fsfABind21907 = fsfABind17148[fsfABind20784],
          fsfABind21908 = [
            makeFormulaToken(fsfABind21907, fsfABind1846),
          ].concat(fsfABind19567);
        fsfABind12472[fsfABind20784] =
          fsfABind12472[fsfABind20784] && fsfABind1847(fsfABind21908);
      }
    }
  }
  let fsfABind12473 = 0;
  for (
    let fsfABind22945 = 0;
    fsfABind22945 < fsfABind12472.length;
    fsfABind22945++
  )
    fsfABind12472[fsfABind22945] && fsfABind12473++;
  return fsfABind12473;
}
export function sQe() {
  let fsfABind19005 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfABind19005 instanceof Error) return fsfABind19005;
  let fsfABind19006 = workbookBinding1831.default.mean(fsfABind19005),
    fsfABind19007 = 0;
  for (
    let fsfABind22813 = 0;
    fsfABind22813 < fsfABind19005.length;
    fsfABind22813++
  )
    fsfABind19007 += (fsfABind19005[fsfABind22813] - fsfABind19006) ** 2;
  return fsfABind19007;
}
export function cQe(fsfAIn11391: any) {
  return (
    (fsfAIn11391 = flattenMatrixArgs(fsfAIn11391)),
    fsfAIn11391 instanceof Error
      ? fsfAIn11391
      : Math.log((1 + fsfAIn11391) / (1 - fsfAIn11391)) / 2
  );
}
export function lQe(fsfAIn10598: any) {
  if (
    ((fsfAIn10598 = flattenMatrixArgs(fsfAIn10598)),
    fsfAIn10598 instanceof Error)
  )
    return fsfAIn10598;
  let fsfABind21083 = Math.exp(2 * fsfAIn10598);
  return (fsfABind21083 - 1) / (fsfABind21083 + 1);
}
export function medianArgs(fsfAIn5631: any, fsfAIn5632: any, fsfAIn5633: any) {
  if (
    ((fsfAIn5631 = flattenMatrixArgs(fsfAIn5631)),
    (fsfAIn5632 = ensureFlatArgs(flattenFormulaArgs(fsfAIn5632))),
    (fsfAIn5633 = ensureFlatArgs(flattenFormulaArgs(fsfAIn5633))),
    hasFormulaError(fsfAIn5631, fsfAIn5632, fsfAIn5633))
  )
    return workbookBinding1835;
  let fsfABind15474 = workbookBinding1831.default.mean(fsfAIn5633),
    fsfABind15475 = workbookBinding1831.default.mean(fsfAIn5632),
    fsfABind15476 = fsfAIn5633.length,
    fsfABind15477 = 0,
    fsfABind15478 = 0;
  for (let fsfABind22191 = 0; fsfABind22191 < fsfABind15476; fsfABind22191++) {
    fsfABind15477 +=
      (fsfAIn5633[fsfABind22191] - fsfABind15474) *
      (fsfAIn5632[fsfABind22191] - fsfABind15475);
    fsfABind15478 += (fsfAIn5633[fsfABind22191] - fsfABind15474) ** 2;
  }
  let fsfABind15479 = fsfABind15477 / fsfABind15478;
  return (
    fsfABind15475 - fsfABind15479 * fsfABind15474 + fsfABind15479 * fsfAIn5631
  );
}
export function uQe(fsfAIn4667: any, fsfAIn4668: any) {
  if (
    ((fsfAIn4667 = ensureFlatArgs(flattenFormulaArgs(fsfAIn4667))),
    (fsfAIn4668 = ensureFlatArgs(flattenFormulaArgs(fsfAIn4668))),
    hasFormulaError(fsfAIn4667, fsfAIn4668))
  )
    return workbookBinding1835;
  let fsfABind13933 = fsfAIn4667.length,
    fsfABind13934 = fsfAIn4668.length,
    fsfABind13935 = [];
  for (let fsfABind17033 = 0; fsfABind17033 <= fsfABind13934; fsfABind17033++) {
    fsfABind13935[fsfABind17033] = 0;
    for (let fsfABind18470 = 0; fsfABind18470 < fsfABind13933; fsfABind18470++)
      fsfABind17033 === 0
        ? fsfAIn4667[fsfABind18470] <= fsfAIn4668[0] && (fsfABind13935[0] += 1)
        : fsfABind17033 < fsfABind13934
          ? fsfAIn4667[fsfABind18470] > fsfAIn4668[fsfABind17033 - 1] &&
            fsfAIn4667[fsfABind18470] <= fsfAIn4668[fsfABind17033] &&
            (fsfABind13935[fsfABind17033] += 1)
          : fsfABind17033 === fsfABind13934 &&
            fsfAIn4667[fsfABind18470] > fsfAIn4668[fsfABind13934 - 1] &&
            (fsfABind13935[fsfABind13934] += 1);
  }
  return fsfABind13935;
}
