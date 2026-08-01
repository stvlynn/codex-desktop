// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel scalar / statistical formula helpers (d$e..days360/qQe/z$e).
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
import {
  isNonNullArg,
  dZe,
  isErrorOrBlank,
  fZe,
  pZe,
  mZe,
  hZe,
  isFiniteNumber,
  gZe,
  _Ze,
  vZe,
  yZe,
  bZe,
  xZe,
  SZe,
  CZe,
  wZe,
  TZe,
  EZe,
  OZe,
  kZe,
  AZe,
  jZe,
  MZe,
  NZe,
  PZe,
  FZe,
  IZe,
  LZe,
  RZe,
  zZe,
  BZe,
  VZe,
  HZe,
  UZe,
  WZe,
  GZe,
  KZe,
  padStartRepeat,
  qZe,
  JZe,
  YZe,
  averageArgs,
  XZe,
  ZZe,
  QZe,
  $Ze,
  eQe,
  tQe,
  averageNumericArgs,
  averageAArgs,
  nQe,
  rQe,
  isOddInteger,
  isEvenInteger,
  iQe,
  aQe,
  oQe,
  sQe,
  cQe,
  lQe,
  medianArgs,
  uQe,
} from "./scalar-funcs-a-impl";
import {
  modeArgs,
  geomeanArgs,
  dQe,
  fQe,
  mQe,
  hQe,
  gQe,
  _Qe,
  harmeanArgs,
  vQe,
  trimmeanArgs,
  yQe,
  bQe,
  xQe,
  percentileArgs,
  SQe,
  CQe,
  wQe,
  TQe,
  EQe,
  DQe,
  OQe,
  kQe,
  AQe,
  jQe,
  MQe,
  NQe,
  PQe,
  FQe,
  IQe,
  LQe,
  RQe,
  zQe,
  BQe,
  VQe,
  HQe,
  UQe,
  WQe,
  GQe,
  KQe,
  qQe,
  JQe,
  YQe,
  XQe,
  ZQe,
  QQe,
  $Qe,
  romanNumeral,
  sqrtFloor,
  e$e,
  t$e,
  n$e,
  r$e,
  i$e,
  a$e,
  o$e,
  s$e,
  c$e,
  l$e,
  u$e,
  absNumber,
  arabicNumeral,
} from "./scalar-funcs-b-impl";

export function d$e() {
  let fsfCBind16252 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfCBind16252 instanceof Error) return fsfCBind16252;
  let fsfCBind16253 = fsfCBind16252.length,
    fsfCBind16254 = fsfCBind16252[0],
    fsfCBind16255 = fsfCBind16254 < 0 ? -fsfCBind16254 : fsfCBind16254;
  for (let fsfCBind20605 = 1; fsfCBind20605 < fsfCBind16253; fsfCBind20605++) {
    let fsfCBind21483 = fsfCBind16252[fsfCBind20605],
      fsfCBind21484 = fsfCBind21483 < 0 ? -fsfCBind21483 : fsfCBind21483;
    for (; fsfCBind16255 && fsfCBind21484; )
      fsfCBind16255 > fsfCBind21484
        ? (fsfCBind16255 %= fsfCBind21484)
        : (fsfCBind21484 %= fsfCBind16255);
    fsfCBind16255 += fsfCBind21484;
  }
  return fsfCBind16255;
}
export function f$e(fsfCIn12326: any) {
  return (
    (fsfCIn12326 = flattenMatrixArgs(fsfCIn12326)),
    fsfCIn12326 instanceof Error ? fsfCIn12326 : Math.floor(fsfCIn12326)
  );
}
export function p$e() {
  let fsfCBind12589 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfCBind12589 instanceof Error) return fsfCBind12589;
  for (
    var fsfCBind12590,
      fsfCBind12591,
      fsfCBind12592,
      fsfCBind12593,
      fsfCBind12594 = 1;
    (fsfCBind12592 = fsfCBind12589.pop()) !== undefined;
  ) {
    if (fsfCBind12592 === 0) return 0;
    for (; fsfCBind12592 > 1; ) {
      if (fsfCBind12592 % 2) {
        for (
          fsfCBind12590 = 3,
            fsfCBind12591 = Math.floor(Math.sqrt(fsfCBind12592));
          fsfCBind12590 <= fsfCBind12591 && fsfCBind12592 % fsfCBind12590;
          fsfCBind12590 += 2
        );
        fsfCBind12593 =
          fsfCBind12590 <= fsfCBind12591 ? fsfCBind12590 : fsfCBind12592;
      } else fsfCBind12593 = 2;
      for (
        fsfCBind12592 /= fsfCBind12593,
          fsfCBind12594 *= fsfCBind12593,
          fsfCBind12590 = fsfCBind12589.length;
        fsfCBind12590;
        fsfCBind12589[--fsfCBind12590] % fsfCBind12593 === 0 &&
        (fsfCBind12589[fsfCBind12590] /= fsfCBind12593) === 1 &&
        fsfCBind12589.splice(fsfCBind12590, 1)
      );
    }
  }
  return fsfCBind12594;
}
export function m$e(fsfCIn11651: any) {
  return (
    (fsfCIn11651 = flattenMatrixArgs(fsfCIn11651)),
    fsfCIn11651 instanceof Error
      ? fsfCIn11651
      : fsfCIn11651 === 0
        ? workbookBinding1838
        : Math.log(fsfCIn11651)
  );
}
export function h$e(fsfCIn9802: any, fsfCIn9803: any) {
  return (
    (fsfCIn9802 = flattenMatrixArgs(fsfCIn9802)),
    (fsfCIn9803 = fsfCIn9803 ? flattenMatrixArgs(fsfCIn9803) : 10),
    anyFormulaError(fsfCIn9802, fsfCIn9803) ||
      (fsfCIn9802 === 0 || fsfCIn9803 === 0
        ? workbookBinding1838
        : Math.log(fsfCIn9802) / Math.log(fsfCIn9803))
  );
}
export function g$e(fsfCIn10674: any) {
  return (
    (fsfCIn10674 = flattenMatrixArgs(fsfCIn10674)),
    fsfCIn10674 instanceof Error
      ? fsfCIn10674
      : fsfCIn10674 === 0
        ? workbookBinding1838
        : Math.log(fsfCIn10674) / Math.log(10)
  );
}
export function _$e(fsfCIn3994: any, fsfCIn3995: any) {
  return !Array.isArray(fsfCIn3994) ||
    !Array.isArray(fsfCIn3995) ||
    fsfCIn3994.some((item) => !item.length) ||
    fsfCIn3995.some((item) => !item.length) ||
    flattenFormulaArgsDeep(fsfCIn3994).some(
      (item) => typeof item != "number",
    ) ||
    flattenFormulaArgsDeep(fsfCIn3995).some(
      (item) => typeof item != "number",
    ) ||
    fsfCIn3994[0].length !== fsfCIn3995.length
    ? workbookBinding1835
    : Array(fsfCIn3994.length)
        .fill(0)
        .map(() => Array(fsfCIn3995[0].length).fill(0))
        .map((item, index) =>
          item.map((_item, _index) =>
            fsfCIn3994[index].reduce(
              (accumulator, current, __index) =>
                accumulator + current * fsfCIn3995[__index][_index],
              0,
            ),
          ),
        );
}
export function v$e(fsfCIn8434: any, fsfCIn8435: any) {
  fsfCIn8434 = flattenMatrixArgs(fsfCIn8434);
  fsfCIn8435 = flattenMatrixArgs(fsfCIn8435);
  let fsfCBind18935 = anyFormulaError(fsfCIn8434, fsfCIn8435);
  if (fsfCBind18935) return fsfCBind18935;
  if (fsfCIn8435 === 0) return workbookBinding1834;
  let fsfCBind18936 = Math.abs(fsfCIn8434 % fsfCIn8435);
  return (
    (fsfCBind18936 =
      fsfCIn8434 < 0 ? fsfCIn8435 - fsfCBind18936 : fsfCBind18936),
    fsfCIn8435 > 0 ? fsfCBind18936 : -fsfCBind18936
  );
}
export function y$e(fsfCIn9948: any, fsfCIn9949: any) {
  return (
    (fsfCIn9948 = flattenMatrixArgs(fsfCIn9948)),
    (fsfCIn9949 = flattenMatrixArgs(fsfCIn9949)),
    anyFormulaError(fsfCIn9948, fsfCIn9949) ||
      (fsfCIn9948 * fsfCIn9949 === 0
        ? 0
        : fsfCIn9948 * fsfCIn9949 < 0
          ? workbookBinding1838
          : Math.round(fsfCIn9948 / fsfCIn9949) * fsfCIn9949)
  );
}
export function b$e() {
  let fsfCBind18937 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfCBind18937 instanceof Error) return fsfCBind18937;
  let fsfCBind18938 = 0,
    fsfCBind18939 = 1;
  for (
    let fsfCBind22622 = 0;
    fsfCBind22622 < fsfCBind18937.length;
    fsfCBind22622++
  ) {
    fsfCBind18938 += fsfCBind18937[fsfCBind22622];
    fsfCBind18939 *= absNumber(fsfCBind18937[fsfCBind22622]);
  }
  return absNumber(fsfCBind18938) / fsfCBind18939;
}
export function x$e(fsfCIn7181: any) {
  return arguments.length > 1
    ? workbookBinding1839
    : ((fsfCIn7181 = parseInt(fsfCIn7181)),
      !fsfCIn7181 || fsfCIn7181 <= 0
        ? workbookBinding1835
        : Array(fsfCIn7181)
            .fill(0)
            .map(() => Array(fsfCIn7181).fill(0))
            .map((item, index) => ((item[index] = 1), item)));
}
export function S$e(fsfCIn9571: any) {
  if (
    ((fsfCIn9571 = flattenMatrixArgs(fsfCIn9571)), fsfCIn9571 instanceof Error)
  )
    return fsfCIn9571;
  let fsfCBind20102 = Math.ceil(Math.abs(fsfCIn9571));
  return (
    (fsfCBind20102 = fsfCBind20102 & 1 ? fsfCBind20102 : fsfCBind20102 + 1),
    fsfCIn9571 >= 0 ? fsfCBind20102 : -fsfCBind20102
  );
}
export function C$e() {
  return Math.PI;
}
export function w$e(fsfCIn9087: any, fsfCIn9088: any) {
  fsfCIn9087 = flattenMatrixArgs(fsfCIn9087);
  fsfCIn9088 = flattenMatrixArgs(fsfCIn9088);
  let fsfCBind19665 = anyFormulaError(fsfCIn9087, fsfCIn9088);
  if (fsfCBind19665) return fsfCBind19665;
  if (fsfCIn9087 === 0 && fsfCIn9088 === 0) return workbookBinding1838;
  let fsfCBind19666 = fsfCIn9087 ** +fsfCIn9088;
  return isNaN(fsfCBind19666) ? workbookBinding1838 : fsfCBind19666;
}
export function multiGcd() {
  let fsfCBind18093 = flattenFormulaArgs(arguments).filter(
    (item) => item != null,
  );
  if (fsfCBind18093.length === 0) return 0;
  let fsfCBind18094 = ensureFlatArgs(fsfCBind18093);
  if (fsfCBind18094 instanceof Error) return fsfCBind18094;
  let fsfCBind18095 = 1;
  for (
    let fsfCBind22969 = 0;
    fsfCBind22969 < fsfCBind18094.length;
    fsfCBind22969++
  )
    fsfCBind18095 *= fsfCBind18094[fsfCBind22969];
  return fsfCBind18095;
}
export function T$e(fsfCIn11995: any) {
  return (
    (fsfCIn11995 = flattenMatrixArgs(fsfCIn11995)),
    fsfCIn11995 instanceof Error ? fsfCIn11995 : (fsfCIn11995 * Math.PI) / 180
  );
}
export function E$e() {
  return Math.random();
}
export function D$e(fsfCIn5272: any) {
  if (
    ((fsfCIn5272 = flattenMatrixArgs(fsfCIn5272)), fsfCIn5272 instanceof Error)
  )
    return fsfCIn5272;
  let fsfCBind14863 = String(fsfCIn5272).split(""),
    fsfCBind14864 =
      ".C.CC.CCC.CD.D.DC.DCC.DCCC.CM..X.XX.XXX.XL.L.LX.LXX.LXXX.XC..I.II.III.IV.V.VI.VII.VIII.IX".split(
        ".",
      ),
    fsfCBind14865 = "",
    fsfCBind14866 = 3;
  for (; fsfCBind14866--; )
    fsfCBind14865 =
      (fsfCBind14864[+fsfCBind14863.pop() + fsfCBind14866 * 10] || "") +
      fsfCBind14865;
  return Array(+fsfCBind14863.join("") + 1).join("M") + fsfCBind14865;
}
export function multiLcm(fsfCIn6608: any, fsfCIn6609: any, fsfCIn6610: any) {
  fsfCIn6608 = flattenMatrixArgs(fsfCIn6608);
  fsfCIn6609 = flattenMatrixArgs(fsfCIn6609);
  let fsfCBind16887 = anyFormulaError(fsfCIn6608, fsfCIn6609);
  if (fsfCBind16887) return fsfCBind16887;
  let fsfCBind16888 = fsfCIn6608 >= 0 ? 1 : -1,
    fsfCBind16889 = (Math.abs(fsfCIn6608) + "e" + fsfCIn6609).split("e");
  return (
    (fsfCBind16889 = (
      fsfCIn6610(fsfCBind16889[0] + "e" + fsfCBind16889[1]) +
      "e" +
      -fsfCIn6609
    ).split("e")),
    Number(fsfCBind16889[0] + "e" + fsfCBind16889[1]) * fsfCBind16888
  );
}
export function O$e(fsfCIn14564: any, fsfCIn14565: any) {
  return multiLcm(fsfCIn14564, fsfCIn14565, Math.round);
}
export function k$e(fsfCIn14566: any, fsfCIn14567: any) {
  return multiLcm(fsfCIn14566, fsfCIn14567, Math.floor);
}
export function A$e(fsfCIn14641: any, fsfCIn14642: any) {
  return multiLcm(fsfCIn14641, fsfCIn14642, Math.ceil);
}
export function j$e(fsfCIn12212: any) {
  return (
    (fsfCIn12212 = flattenMatrixArgs(fsfCIn12212)),
    fsfCIn12212 instanceof Error ? fsfCIn12212 : 1 / Math.cos(fsfCIn12212)
  );
}
export function M$e(fsfCIn10908: any) {
  return (
    (fsfCIn10908 = flattenMatrixArgs(fsfCIn10908)),
    fsfCIn10908 instanceof Error
      ? fsfCIn10908
      : 2 / (Math.exp(fsfCIn10908) + Math.exp(-fsfCIn10908))
  );
}
export function N$e(
  fsfCIn7829: any,
  fsfCIn7830: any,
  fsfCIn7831: any,
  fsfCIn7832: any,
) {
  if (
    ((fsfCIn7829 = flattenMatrixArgs(fsfCIn7829)),
    (fsfCIn7830 = flattenMatrixArgs(fsfCIn7830)),
    (fsfCIn7831 = flattenMatrixArgs(fsfCIn7831)),
    (fsfCIn7832 = ensureFlatArgs(fsfCIn7832)),
    hasFormulaError(fsfCIn7829, fsfCIn7830, fsfCIn7831, fsfCIn7832))
  )
    return workbookBinding1835;
  let fsfCBind18321 = fsfCIn7832[0] * fsfCIn7829 ** +fsfCIn7830;
  for (
    let fsfCBind22654 = 1;
    fsfCBind22654 < fsfCIn7832.length;
    fsfCBind22654++
  )
    fsfCBind18321 +=
      fsfCIn7832[fsfCBind22654] *
      fsfCIn7829 ** +(fsfCIn7830 + fsfCBind22654 * fsfCIn7831);
  return fsfCBind18321;
}
export function P$e(fsfCIn11545: any) {
  return (
    (fsfCIn11545 = flattenMatrixArgs(fsfCIn11545)),
    fsfCIn11545 instanceof Error
      ? fsfCIn11545
      : fsfCIn11545 < 0
        ? -1
        : fsfCIn11545 === 0
          ? 0
          : 1
  );
}
export function F$e(fsfCIn12458: any) {
  return (
    (fsfCIn12458 = flattenMatrixArgs(fsfCIn12458)),
    fsfCIn12458 instanceof Error ? fsfCIn12458 : Math.sin(fsfCIn12458)
  );
}
export function I$e(fsfCIn10909: any) {
  return (
    (fsfCIn10909 = flattenMatrixArgs(fsfCIn10909)),
    fsfCIn10909 instanceof Error
      ? fsfCIn10909
      : (Math.exp(fsfCIn10909) - Math.exp(-fsfCIn10909)) / 2
  );
}
export function L$e(fsfCIn11709: any) {
  return (
    (fsfCIn11709 = flattenMatrixArgs(fsfCIn11709)),
    fsfCIn11709 instanceof Error
      ? fsfCIn11709
      : fsfCIn11709 < 0
        ? workbookBinding1838
        : Math.sqrt(fsfCIn11709)
  );
}
export function R$e(fsfCIn11814: any) {
  return (
    (fsfCIn11814 = flattenMatrixArgs(fsfCIn11814)),
    fsfCIn11814 instanceof Error
      ? fsfCIn11814
      : Math.sqrt(fsfCIn11814 * Math.PI)
  );
}
export function z$e(fsfCIn2103: any, fsfCIn2104: any) {
  if (
    ((fsfCIn2103 = flattenMatrixArgs(fsfCIn2103)), fsfCIn2103 instanceof Error)
  )
    return fsfCIn2103;
  switch (fsfCIn2103) {
    case 1:
      return averageNumericArgs(fsfCIn2104);
    case 2:
      return isOddInteger(fsfCIn2104);
    case 3:
      return isEvenInteger(fsfCIn2104);
    case 4:
      return trimmeanArgs(fsfCIn2104);
    case 5:
      return percentileArgs(fsfCIn2104);
    case 6:
      return multiGcd(fsfCIn2104);
    case 7:
      return fsfCBind1866.S(fsfCIn2104);
    case 8:
      return fsfCBind1866.P(fsfCIn2104);
    case 9:
      return sumproductArgs(fsfCIn2104);
    case 10:
      return fsfCBind1867.S(fsfCIn2104);
    case 11:
      return fsfCBind1867.P(fsfCIn2104);
    case 101:
      return averageNumericArgs(fsfCIn2104);
    case 102:
      return isOddInteger(fsfCIn2104);
    case 103:
      return isEvenInteger(fsfCIn2104);
    case 104:
      return trimmeanArgs(fsfCIn2104);
    case 105:
      return percentileArgs(fsfCIn2104);
    case 106:
      return multiGcd(fsfCIn2104);
    case 107:
      return fsfCBind1866.S(fsfCIn2104);
    case 108:
      return fsfCBind1866.P(fsfCIn2104);
    case 109:
      return sumproductArgs(fsfCIn2104);
    case 110:
      return fsfCBind1867.S(fsfCIn2104);
    case 111:
      return fsfCBind1867.P(fsfCIn2104);
  }
}
export function sumproductArgs() {
  let fsfCBind13249 = 0;
  return (
    eachFormulaArg(collectFormulaArgs(arguments), (fsfCIn5186) => {
      if (fsfCBind13249 instanceof Error) return false;
      if (fsfCIn5186 instanceof Error) fsfCBind13249 = fsfCIn5186;
      else if (typeof fsfCIn5186 == "number") fsfCBind13249 += fsfCIn5186;
      else if (typeof fsfCIn5186 == "string") {
        let fsfCBind22553 = parseFloat(fsfCIn5186);
        !isNaN(fsfCBind22553) && (fsfCBind13249 += fsfCBind22553);
      } else if (Array.isArray(fsfCIn5186)) {
        let fsfCBind22064 = sumproductArgs.apply(null, fsfCIn5186);
        fsfCBind22064 instanceof Error
          ? (fsfCBind13249 = fsfCBind22064)
          : (fsfCBind13249 += fsfCBind22064);
      }
    }),
    fsfCBind13249
  );
}
export function B$e() {
  return sumproductArgs(matchCriteriaPairs(...arguments));
}
export function V$e(fsfCIn9013: any, fsfCIn9014: any) {
  if (
    ((fsfCIn9013 = ensureFlatArgs(flattenFormulaArgs(fsfCIn9013))),
    (fsfCIn9014 = ensureFlatArgs(flattenFormulaArgs(fsfCIn9014))),
    hasFormulaError(fsfCIn9013, fsfCIn9014))
  )
    return workbookBinding1835;
  let fsfCBind19571 = 0;
  for (
    let fsfCBind22623 = 0;
    fsfCBind22623 < fsfCIn9013.length;
    fsfCBind22623++
  )
    fsfCBind19571 +=
      fsfCIn9013[fsfCBind22623] * fsfCIn9013[fsfCBind22623] -
      fsfCIn9014[fsfCBind22623] * fsfCIn9014[fsfCBind22623];
  return fsfCBind19571;
}
export function H$e(fsfCIn8042: any, fsfCIn8043: any) {
  if (
    ((fsfCIn8042 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8042))),
    (fsfCIn8043 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8043))),
    hasFormulaError(fsfCIn8042, fsfCIn8043))
  )
    return workbookBinding1835;
  let fsfCBind18548 = 0;
  fsfCIn8042 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8042));
  fsfCIn8043 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8043));
  for (
    let fsfCBind22624 = 0;
    fsfCBind22624 < fsfCIn8042.length;
    fsfCBind22624++
  )
    fsfCBind18548 +=
      fsfCIn8042[fsfCBind22624] * fsfCIn8042[fsfCBind22624] +
      fsfCIn8043[fsfCBind22624] * fsfCIn8043[fsfCBind22624];
  return fsfCBind18548;
}
export function U$e(fsfCIn8436: any, fsfCIn8437: any) {
  if (
    ((fsfCIn8436 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8436))),
    (fsfCIn8437 = ensureFlatArgs(flattenFormulaArgs(fsfCIn8437))),
    hasFormulaError(fsfCIn8436, fsfCIn8437))
  )
    return workbookBinding1835;
  let fsfCBind18940 = 0;
  fsfCIn8436 = flattenFormulaArgs(fsfCIn8436);
  fsfCIn8437 = flattenFormulaArgs(fsfCIn8437);
  for (
    let fsfCBind22758 = 0;
    fsfCBind22758 < fsfCIn8436.length;
    fsfCBind22758++
  )
    fsfCBind18940 +=
      (fsfCIn8436[fsfCBind22758] - fsfCIn8437[fsfCBind22758]) ** 2;
  return fsfCBind18940;
}
export function W$e(fsfCIn12459: any) {
  return (
    (fsfCIn12459 = flattenMatrixArgs(fsfCIn12459)),
    fsfCIn12459 instanceof Error ? fsfCIn12459 : Math.tan(fsfCIn12459)
  );
}
export function G$e(fsfCIn10599: any) {
  if (
    ((fsfCIn10599 = flattenMatrixArgs(fsfCIn10599)),
    fsfCIn10599 instanceof Error)
  )
    return fsfCIn10599;
  let fsfCBind21084 = Math.exp(2 * fsfCIn10599);
  return (fsfCBind21084 - 1) / (fsfCBind21084 + 1);
}
export function K$e(fsfCIn9715: any, fsfCIn9716: any) {
  return (
    (fsfCIn9715 = flattenMatrixArgs(fsfCIn9715)),
    (fsfCIn9716 = flattenMatrixArgs(fsfCIn9716)),
    anyFormulaError(fsfCIn9715, fsfCIn9716) ||
      ((fsfCIn9715 > 0 ? 1 : -1) *
        Math.floor(Math.abs(fsfCIn9715) * 10 ** fsfCIn9716)) /
        10 ** fsfCIn9716
  );
}
export function q$e(fsfCIn10879: any, fsfCIn10880: any) {
  return arguments.length === 2
    ? ((fsfCIn10879 = flattenMatrixArgs(fsfCIn10879)),
      (fsfCIn10880 = flattenMatrixArgs(fsfCIn10880)),
      anyFormulaError(fsfCIn10879, fsfCIn10880) || fsfCIn10879 + fsfCIn10880)
    : workbookBinding1839;
}
export function J$e(fsfCIn10360: any, fsfCIn10361: any) {
  return arguments.length === 2
    ? ((fsfCIn10360 = flattenMatrixArgs(fsfCIn10360)),
      (fsfCIn10361 = flattenMatrixArgs(fsfCIn10361)),
      anyFormulaError(fsfCIn10360, fsfCIn10361) ||
        (fsfCIn10361 === 0 ? workbookBinding1834 : fsfCIn10360 / fsfCIn10361))
    : workbookBinding1839;
}
export function Y$e(fsfCIn7858: any, fsfCIn7859: any) {
  return arguments.length === 2
    ? fsfCIn7858 instanceof Error
      ? fsfCIn7858
      : fsfCIn7859 instanceof Error
        ? fsfCIn7859
        : (fsfCIn7858 === null && (fsfCIn7858 = undefined),
          fsfCIn7859 === null && (fsfCIn7859 = undefined),
          fsfCIn7858 === fsfCIn7859)
    : workbookBinding1839;
}
export function X$e(fsfCIn7142: any, fsfCIn7143: any) {
  return arguments.length === 2
    ? fsfCIn7142 instanceof Error
      ? fsfCIn7142
      : fsfCIn7143 instanceof Error
        ? fsfCIn7143
        : (isAnyStringArg(fsfCIn7142, fsfCIn7143)
            ? ((fsfCIn7142 = isBlankLike(fsfCIn7142)),
              (fsfCIn7143 = isBlankLike(fsfCIn7143)))
            : ((fsfCIn7142 = flattenMatrixArgs(fsfCIn7142)),
              (fsfCIn7143 = flattenMatrixArgs(fsfCIn7143))),
          anyFormulaError(fsfCIn7142, fsfCIn7143) || fsfCIn7142 > fsfCIn7143)
    : workbookBinding1839;
}
export function Z$e(fsfCIn9328: any, fsfCIn9329: any) {
  return arguments.length === 2
    ? (isAnyStringArg(fsfCIn9328, fsfCIn9329)
        ? ((fsfCIn9328 = isBlankLike(fsfCIn9328)),
          (fsfCIn9329 = isBlankLike(fsfCIn9329)))
        : ((fsfCIn9328 = flattenMatrixArgs(fsfCIn9328)),
          (fsfCIn9329 = flattenMatrixArgs(fsfCIn9329))),
      anyFormulaError(fsfCIn9328, fsfCIn9329) || fsfCIn9328 >= fsfCIn9329)
    : workbookBinding1839;
}
export function Q$e(fsfCIn9357: any, fsfCIn9358: any) {
  return arguments.length === 2
    ? (isAnyStringArg(fsfCIn9357, fsfCIn9358)
        ? ((fsfCIn9357 = isBlankLike(fsfCIn9357)),
          (fsfCIn9358 = isBlankLike(fsfCIn9358)))
        : ((fsfCIn9357 = flattenMatrixArgs(fsfCIn9357)),
          (fsfCIn9358 = flattenMatrixArgs(fsfCIn9358))),
      anyFormulaError(fsfCIn9357, fsfCIn9358) || fsfCIn9357 < fsfCIn9358)
    : workbookBinding1839;
}
export function $$e(fsfCIn9330: any, fsfCIn9331: any) {
  return arguments.length === 2
    ? (isAnyStringArg(fsfCIn9330, fsfCIn9331)
        ? ((fsfCIn9330 = isBlankLike(fsfCIn9330)),
          (fsfCIn9331 = isBlankLike(fsfCIn9331)))
        : ((fsfCIn9330 = flattenMatrixArgs(fsfCIn9330)),
          (fsfCIn9331 = flattenMatrixArgs(fsfCIn9331))),
      anyFormulaError(fsfCIn9330, fsfCIn9331) || fsfCIn9330 <= fsfCIn9331)
    : workbookBinding1839;
}
export function e1e(fsfCIn10881: any, fsfCIn10882: any) {
  return arguments.length === 2
    ? ((fsfCIn10881 = flattenMatrixArgs(fsfCIn10881)),
      (fsfCIn10882 = flattenMatrixArgs(fsfCIn10882)),
      anyFormulaError(fsfCIn10881, fsfCIn10882) || fsfCIn10881 - fsfCIn10882)
    : workbookBinding1839;
}
export function t1e(fsfCIn10883: any, fsfCIn10884: any) {
  return arguments.length === 2
    ? ((fsfCIn10883 = flattenMatrixArgs(fsfCIn10883)),
      (fsfCIn10884 = flattenMatrixArgs(fsfCIn10884)),
      anyFormulaError(fsfCIn10883, fsfCIn10884) || fsfCIn10883 * fsfCIn10884)
    : workbookBinding1839;
}
export function n1e(fsfCIn7860: any, fsfCIn7861: any) {
  return arguments.length === 2
    ? fsfCIn7860 instanceof Error
      ? fsfCIn7860
      : fsfCIn7861 instanceof Error
        ? fsfCIn7861
        : (fsfCIn7860 === null && (fsfCIn7860 = undefined),
          fsfCIn7861 === null && (fsfCIn7861 = undefined),
          fsfCIn7860 !== fsfCIn7861)
    : workbookBinding1839;
}
export function r1e(fsfCIn12951: any, fsfCIn12952: any) {
  return arguments.length === 2
    ? w$e(fsfCIn12951, fsfCIn12952)
    : workbookBinding1839;
}
export function i1e(fsfCIn7725: any, fsfCIn7726: any, fsfCIn7727: any) {
  let fsfCBind18213;
  return (
    (fsfCIn7725 = flattenMatrixArgs(fsfCIn7725)),
    (fsfCIn7726 = flattenMatrixArgs(fsfCIn7726)),
    (fsfCIn7727 = flattenMatrixArgs(fsfCIn7727)),
    hasFormulaError(fsfCIn7725, fsfCIn7726, fsfCIn7727)
      ? (fsfCBind18213 = workbookBinding1835)
      : ((fsfCBind18213 = new Date(fsfCIn7725, fsfCIn7726 - 1, fsfCIn7727)),
        fsfCBind18213.getFullYear() < 0 &&
          (fsfCBind18213 = workbookBinding1838)),
    workbookBinding1842 ? excelDaysSinceEpoch(fsfCBind18213) : fsfCBind18213
  );
}
export function a1e(fsfCIn10445: any) {
  if (typeof fsfCIn10445 != "string" || isNaN(Date.parse(fsfCIn10445)))
    return workbookBinding1835;
  let fsfCBind20911 = new Date(fsfCIn10445);
  return workbookBinding1842
    ? excelDaysSinceEpoch(fsfCBind20911)
    : fsfCBind20911;
}
export function o1e(fsfCIn12272: any) {
  let fsfCBind22363 = coerceFormulaDate(fsfCIn12272);
  return fsfCBind22363 instanceof Error
    ? fsfCBind22363
    : fsfCBind22363.getDate();
}
export function toExcelDate(fsfCIn12523: any) {
  let fsfCBind22427 = new Date(fsfCIn12523);
  return (fsfCBind22427.setHours(0, 0, 0, 0), fsfCBind22427);
}
export function dateDiffDays(fsfCIn9832: any, fsfCIn9833: any) {
  return (
    (fsfCIn9832 = coerceFormulaDate(fsfCIn9832)),
    (fsfCIn9833 = coerceFormulaDate(fsfCIn9833)),
    fsfCIn9832 instanceof Error
      ? fsfCIn9832
      : fsfCIn9833 instanceof Error
        ? fsfCIn9833
        : excelDaysSinceEpoch(toExcelDate(fsfCIn9832)) -
          excelDaysSinceEpoch(toExcelDate(fsfCIn9833))
  );
}
export function days360(fsfCIn2505: any, fsfCIn2506: any, fsfCIn2507: any) {
  if (
    ((fsfCIn2507 = coerceFormulaBoolean(fsfCIn2507 || "false")),
    (fsfCIn2505 = coerceFormulaDate(fsfCIn2505)),
    (fsfCIn2506 = coerceFormulaDate(fsfCIn2506)),
    fsfCIn2505 instanceof Error)
  )
    return fsfCIn2505;
  if (fsfCIn2506 instanceof Error) return fsfCIn2506;
  if (fsfCIn2507 instanceof Error) return fsfCIn2507;
  let fsfCBind9844 = fsfCIn2505.getMonth(),
    fsfCBind9845 = fsfCIn2506.getMonth(),
    fsfCBind9846,
    fsfCBind9847;
  if (fsfCIn2507) {
    fsfCBind9846 = fsfCIn2505.getDate() === 31 ? 30 : fsfCIn2505.getDate();
    fsfCBind9847 = fsfCIn2506.getDate() === 31 ? 30 : fsfCIn2506.getDate();
  } else {
    let fsfCBind16346 = new Date(
        fsfCIn2505.getFullYear(),
        fsfCBind9844 + 1,
        0,
      ).getDate(),
      fsfCBind16347 = new Date(
        fsfCIn2506.getFullYear(),
        fsfCBind9845 + 1,
        0,
      ).getDate();
    fsfCBind9846 =
      fsfCIn2505.getDate() === fsfCBind16346 ? 30 : fsfCIn2505.getDate();
    fsfCIn2506.getDate() === fsfCBind16347
      ? fsfCBind9846 < 30
        ? (fsfCBind9845++, (fsfCBind9847 = 1))
        : (fsfCBind9847 = 30)
      : (fsfCBind9847 = fsfCIn2506.getDate());
  }
  return (
    360 * (fsfCIn2506.getFullYear() - fsfCIn2505.getFullYear()) +
    30 * (fsfCBind9845 - fsfCBind9844) +
    (fsfCBind9847 - fsfCBind9846)
  );
}
