// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel scalar / statistical formula helpers (modeArgs..arabicNumeral).
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

export function modeArgs(fsfBIn8894: any) {
  return (
    (fsfBIn8894 = flattenMatrixArgs(fsfBIn8894)),
    fsfBIn8894 instanceof Error
      ? fsfBIn8894
      : fsfBIn8894 === 0 ||
          (parseInt(fsfBIn8894, 10) === fsfBIn8894 && fsfBIn8894 < 0)
        ? workbookBinding1838
        : workbookBinding1831.default.gammafn(fsfBIn8894)
  );
}
export function geomeanArgs(fsfBIn11993: any) {
  return (
    (fsfBIn11993 = flattenMatrixArgs(fsfBIn11993)),
    fsfBIn11993 instanceof Error
      ? fsfBIn11993
      : workbookBinding1831.default.gammaln(fsfBIn11993)
  );
}
export function dQe(fsfBIn10813: any) {
  return (
    (fsfBIn10813 = flattenMatrixArgs(fsfBIn10813)),
    fsfBIn10813 instanceof Error
      ? fsfBIn10813
      : workbookBinding1831.default.normal.cdf(fsfBIn10813, 0, 1) - 0.5
  );
}
export function fQe() {
  let fsfBBind21807 = ensureFlatArgs(flattenFormulaArgs(arguments));
  return fsfBBind21807 instanceof Error
    ? fsfBBind21807
    : workbookBinding1831.default.geomean(fsfBBind21807);
}
export function mQe() {
  let fsfBBind19568 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfBBind19568 instanceof Error) return fsfBBind19568;
  let fsfBBind19569 = fsfBBind19568.length,
    fsfBBind19570 = 0;
  for (let fsfBBind23001 = 0; fsfBBind23001 < fsfBBind19569; fsfBBind23001++)
    fsfBBind19570 += 1 / fsfBBind19568[fsfBBind23001];
  return fsfBBind19569 / fsfBBind19570;
}
export function hQe(fsfBIn10443: any, fsfBIn10444: any) {
  return (
    (fsfBIn10443 = ensureFlatArgs(fsfBIn10443)),
    (fsfBIn10444 = ensureFlatArgs(fsfBIn10444)),
    hasFormulaError(fsfBIn10443, fsfBIn10444)
      ? workbookBinding1835
      : fsfBIn10443.length === fsfBIn10444.length
        ? medianArgs(0, fsfBIn10443, fsfBIn10444)
        : workbookBinding1839
  );
}
export function gQe() {
  let fsfBBind14917 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfBBind14917 instanceof Error) return fsfBBind14917;
  let fsfBBind14918 = workbookBinding1831.default.mean(fsfBBind14917),
    fsfBBind14919 = fsfBBind14917.length,
    fsfBBind14920 = 0;
  for (let fsfBBind22920 = 0; fsfBBind22920 < fsfBBind14919; fsfBBind22920++)
    fsfBBind14920 += (fsfBBind14917[fsfBBind22920] - fsfBBind14918) ** 4;
  return (
    (fsfBBind14920 /=
      workbookBinding1831.default.stdev(fsfBBind14917, true) ** 4),
    ((fsfBBind14919 * (fsfBBind14919 + 1)) /
      ((fsfBBind14919 - 1) * (fsfBBind14919 - 2) * (fsfBBind14919 - 3))) *
      fsfBBind14920 -
      (3 * (fsfBBind14919 - 1) * (fsfBBind14919 - 1)) /
        ((fsfBBind14919 - 2) * (fsfBBind14919 - 3))
  );
}
export function _Qe(fsfBIn8274: any, fsfBIn8275: any) {
  return (
    anyFormulaError.apply(undefined, fsfBIn8274) ||
    (hasFormulaError(fsfBIn8275)
      ? fsfBIn8275
      : ((fsfBIn8274 = filterNumericArgs(flattenFormulaArgs(fsfBIn8274))),
        (fsfBIn8275 = flattenMatrixArgs(fsfBIn8275)),
        fsfBIn8275 < 0 || fsfBIn8274.length < fsfBIn8275
          ? workbookBinding1835
          : fsfBIn8274.sort(
              (fsfBIn16549, fsfBIn16550) => fsfBIn16550 - fsfBIn16549,
            )[fsfBIn8275 - 1]))
  );
}
export function harmeanArgs(fsfBIn5923: any, fsfBIn5924: any) {
  if (
    ((fsfBIn5923 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5923))),
    (fsfBIn5924 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5924))),
    hasFormulaError(fsfBIn5923, fsfBIn5924))
  )
    return workbookBinding1835;
  let fsfBBind15920 = workbookBinding1831.default.mean(fsfBIn5923),
    fsfBBind15921 = workbookBinding1831.default.mean(fsfBIn5924),
    fsfBBind15922 = fsfBIn5924.length,
    fsfBBind15923 = 0,
    fsfBBind15924 = 0;
  for (let fsfBBind22192 = 0; fsfBBind22192 < fsfBBind15922; fsfBBind22192++) {
    fsfBBind15923 +=
      (fsfBIn5924[fsfBBind22192] - fsfBBind15921) *
      (fsfBIn5923[fsfBBind22192] - fsfBBind15920);
    fsfBBind15924 += (fsfBIn5924[fsfBBind22192] - fsfBBind15921) ** 2;
  }
  let fsfBBind15925 = fsfBBind15923 / fsfBBind15924;
  return [fsfBBind15925, fsfBBind15920 - fsfBBind15925 * fsfBBind15921];
}
export function vQe(fsfBIn5821: any, fsfBIn5822: any) {
  if (
    ((fsfBIn5821 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5821))),
    (fsfBIn5822 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5822))),
    hasFormulaError(fsfBIn5821, fsfBIn5822) ||
      fsfBIn5821.length !== fsfBIn5822.length)
  )
    return workbookBinding1835;
  for (
    let fsfBBind22795 = 0;
    fsfBBind22795 < fsfBIn5821.length;
    fsfBBind22795++
  )
    fsfBIn5821[fsfBBind22795] = Math.log(fsfBIn5821[fsfBBind22795]);
  let fsfBBind15764 = harmeanArgs(fsfBIn5821, fsfBIn5822);
  return (
    (fsfBBind15764[0] = Math.round(Math.exp(fsfBBind15764[0]) * 1e6) / 1e6),
    (fsfBBind15764[1] = Math.round(Math.exp(fsfBBind15764[1]) * 1e6) / 1e6),
    fsfBBind15764
  );
}
export function trimmeanArgs() {
  let fsfBBind19936 = flattenFormulaArgs(arguments),
    fsfBBind19937 = anyFormulaError.apply(undefined, fsfBBind19936);
  if (fsfBBind19937) return fsfBBind19937;
  let fsfBBind19938 = filterNumericArgs(fsfBBind19936);
  return fsfBBind19938.length === 0 ? 0 : Math.max.apply(Math, fsfBBind19938);
}
export function yQe() {
  let fsfBBind18625 = flattenFormulaArgs(arguments),
    fsfBBind18626 = anyFormulaError.apply(undefined, fsfBBind18625);
  if (fsfBBind18626) return fsfBBind18626;
  let fsfBBind18627 = coerceArgNumbers(fsfBBind18625);
  return (
    (fsfBBind18627 = fsfBBind18627.map((item) => item ?? 0)),
    fsfBBind18627.length === 0 ? 0 : Math.max.apply(Math, fsfBBind18627)
  );
}
export function bQe() {
  let fsfBBind21808 = matchCriteriaPairs(...arguments);
  return fsfBBind21808.length === 0 ? 0 : Math.max.apply(Math, fsfBBind21808);
}
export function xQe() {
  let fsfBBind19661 = flattenFormulaArgs(arguments),
    fsfBBind19662 = anyFormulaError.apply(undefined, fsfBBind19661);
  if (fsfBBind19662) return fsfBBind19662;
  let fsfBBind19663 = coerceArgNumbers(fsfBBind19661),
    fsfBBind19664 = workbookBinding1831.default.median(fsfBBind19663);
  return (
    isNaN(fsfBBind19664) && (fsfBBind19664 = workbookBinding1838),
    fsfBBind19664
  );
}
export function percentileArgs() {
  let fsfBBind19939 = flattenFormulaArgs(arguments),
    fsfBBind19940 = anyFormulaError.apply(undefined, fsfBBind19939);
  if (fsfBBind19940) return fsfBBind19940;
  let fsfBBind19941 = filterNumericArgs(fsfBBind19939);
  return fsfBBind19941.length === 0 ? 0 : Math.min.apply(Math, fsfBBind19941);
}
export function SQe() {
  let fsfBBind18628 = flattenFormulaArgs(arguments),
    fsfBBind18629 = anyFormulaError.apply(undefined, fsfBBind18628);
  if (fsfBBind18629) return fsfBBind18629;
  let fsfBBind18630 = coerceArgNumbers(fsfBBind18628);
  return (
    (fsfBBind18630 = fsfBBind18630.map((item) => item ?? 0)),
    fsfBBind18630.length === 0 ? 0 : Math.min.apply(Math, fsfBBind18630)
  );
}
export function CQe() {
  let fsfBBind21809 = matchCriteriaPairs(...arguments);
  return fsfBBind21809.length === 0 ? 0 : Math.min.apply(Math, fsfBBind21809);
}
export function wQe(fsfBIn5429: any, fsfBIn5430: any) {
  if (
    ((fsfBIn5430 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5430))),
    (fsfBIn5429 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5429))),
    hasFormulaError(fsfBIn5430, fsfBIn5429))
  )
    return workbookBinding1835;
  let fsfBBind15188 = workbookBinding1831.default.mean(fsfBIn5429),
    fsfBBind15189 = workbookBinding1831.default.mean(fsfBIn5430),
    fsfBBind15190 = fsfBIn5429.length,
    fsfBBind15191 = 0,
    fsfBBind15192 = 0,
    fsfBBind15193 = 0;
  for (let fsfBBind21042 = 0; fsfBBind21042 < fsfBBind15190; fsfBBind21042++) {
    fsfBBind15191 +=
      (fsfBIn5429[fsfBBind21042] - fsfBBind15188) *
      (fsfBIn5430[fsfBBind21042] - fsfBBind15189);
    fsfBBind15192 += (fsfBIn5429[fsfBBind21042] - fsfBBind15188) ** 2;
    fsfBBind15193 += (fsfBIn5430[fsfBBind21042] - fsfBBind15189) ** 2;
  }
  return fsfBBind15191 / Math.sqrt(fsfBBind15192 * fsfBBind15193);
}
export function TQe(fsfBIn11874: any, fsfBIn11875: any) {
  return (
    (fsfBIn11874 = flattenMatrixArgs(fsfBIn11874)),
    (fsfBIn11875 = flattenMatrixArgs(fsfBIn11875)),
    hasFormulaError(fsfBIn11874, fsfBIn11875)
      ? workbookBinding1835
      : absNumber(fsfBIn11874) / absNumber(fsfBIn11874 - fsfBIn11875)
  );
}
export function EQe(fsfBIn12454: any, fsfBIn12455: any) {
  return (
    (fsfBIn12454 = flattenMatrixArgs(fsfBIn12454)),
    (fsfBIn12455 = flattenMatrixArgs(fsfBIn12455)),
    hasFormulaError(fsfBIn12454, fsfBIn12455)
      ? workbookBinding1835
      : fsfBIn12454 ** +fsfBIn12455
  );
}
export function DQe(fsfBIn11544: any) {
  return (
    (fsfBIn11544 = flattenMatrixArgs(fsfBIn11544)),
    fsfBIn11544 instanceof Error
      ? workbookBinding1835
      : Math.exp(-0.5 * fsfBIn11544 * fsfBIn11544) / g2e
  );
}
export function OQe(
  fsfBIn4338: any,
  fsfBIn4339: any,
  fsfBIn4340: any,
  fsfBIn4341: any,
) {
  if (fsfBIn4340 === undefined) return 0;
  if (
    ((fsfBIn4341 = fsfBIn4341 === undefined ? fsfBIn4340 : fsfBIn4341),
    (fsfBIn4338 = ensureFlatArgs(flattenFormulaArgs(fsfBIn4338))),
    (fsfBIn4339 = ensureFlatArgs(flattenFormulaArgs(fsfBIn4339))),
    (fsfBIn4340 = flattenMatrixArgs(fsfBIn4340)),
    (fsfBIn4341 = flattenMatrixArgs(fsfBIn4341)),
    hasFormulaError(fsfBIn4338, fsfBIn4339, fsfBIn4340, fsfBIn4341))
  )
    return workbookBinding1835;
  if (fsfBIn4340 === fsfBIn4341)
    return fsfBIn4338.indexOf(fsfBIn4340) >= 0
      ? fsfBIn4339[fsfBIn4338.indexOf(fsfBIn4340)]
      : 0;
  let fsfBBind13467 = fsfBIn4338.sort(
      (fsfBIn16551, fsfBIn16552) => fsfBIn16551 - fsfBIn16552,
    ),
    fsfBBind13468 = fsfBBind13467.length,
    fsfBBind13469 = 0;
  for (let fsfBBind22323 = 0; fsfBBind22323 < fsfBBind13468; fsfBBind22323++)
    fsfBBind13467[fsfBBind22323] >= fsfBIn4340 &&
      fsfBBind13467[fsfBBind22323] <= fsfBIn4341 &&
      (fsfBBind13469 +=
        fsfBIn4339[fsfBIn4338.indexOf(fsfBBind13467[fsfBBind22323])]);
  return fsfBBind13469;
}
export function kQe(fsfBIn8276: any, fsfBIn8277: any) {
  if (arguments.length !== 2) return workbookBinding1839;
  if (fsfBIn8277 < 0) return workbookBinding1838;
  if (!(fsfBIn8276 instanceof Array) || typeof fsfBIn8277 != "number")
    return workbookBinding1835;
  if (fsfBIn8276.length !== 0)
    return workbookBinding1831.default.row(fsfBIn8276, fsfBIn8277);
}
export function AQe(fsfBIn11707: any, fsfBIn11708: any) {
  return (
    (fsfBIn11707 = ensureFlatArgs(flattenFormulaArgs(fsfBIn11707))),
    (fsfBIn11708 = ensureFlatArgs(flattenFormulaArgs(fsfBIn11708))),
    hasFormulaError(fsfBIn11707, fsfBIn11708)
      ? workbookBinding1835
      : wQe(fsfBIn11707, fsfBIn11708) ** 2
  );
}
export function jQe() {
  let fsfBBind17067 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (fsfBBind17067 instanceof Error) return fsfBBind17067;
  let fsfBBind17068 = workbookBinding1831.default.mean(fsfBBind17067),
    fsfBBind17069 = fsfBBind17067.length,
    fsfBBind17070 = 0;
  for (let fsfBBind22921 = 0; fsfBBind22921 < fsfBBind17069; fsfBBind22921++)
    fsfBBind17070 += (fsfBBind17067[fsfBBind22921] - fsfBBind17068) ** 3;
  return (
    (fsfBBind17069 * fsfBBind17070) /
    ((fsfBBind17069 - 1) *
      (fsfBBind17069 - 2) *
      workbookBinding1831.default.stdev(fsfBBind17067, true) ** 3)
  );
}
export function MQe(fsfBIn6344: any, fsfBIn6345: any) {
  if (
    ((fsfBIn6344 = ensureFlatArgs(flattenFormulaArgs(fsfBIn6344))),
    (fsfBIn6345 = ensureFlatArgs(flattenFormulaArgs(fsfBIn6345))),
    hasFormulaError(fsfBIn6344, fsfBIn6345))
  )
    return workbookBinding1835;
  let fsfBBind16495 = workbookBinding1831.default.mean(fsfBIn6345),
    fsfBBind16496 = workbookBinding1831.default.mean(fsfBIn6344),
    fsfBBind16497 = fsfBIn6345.length,
    fsfBBind16498 = 0,
    fsfBBind16499 = 0;
  for (let fsfBBind22193 = 0; fsfBBind22193 < fsfBBind16497; fsfBBind22193++) {
    fsfBBind16498 +=
      (fsfBIn6345[fsfBBind22193] - fsfBBind16495) *
      (fsfBIn6344[fsfBBind22193] - fsfBBind16496);
    fsfBBind16499 += (fsfBIn6345[fsfBBind22193] - fsfBBind16495) ** 2;
  }
  return fsfBBind16498 / fsfBBind16499;
}
export function NQe(fsfBIn10655: any, fsfBIn10656: any) {
  return (
    (fsfBIn10655 = ensureFlatArgs(flattenFormulaArgs(fsfBIn10655))),
    (fsfBIn10656 = flattenMatrixArgs(fsfBIn10656)),
    hasFormulaError(fsfBIn10655, fsfBIn10656)
      ? fsfBIn10655
      : fsfBIn10655.sort(
          (fsfBIn16553, fsfBIn16554) => fsfBIn16553 - fsfBIn16554,
        )[fsfBIn10656 - 1]
  );
}
export function PQe(fsfBIn11302: any, fsfBIn11303: any, fsfBIn11304: any) {
  return (
    (fsfBIn11302 = flattenMatrixArgs(fsfBIn11302)),
    (fsfBIn11303 = flattenMatrixArgs(fsfBIn11303)),
    (fsfBIn11304 = flattenMatrixArgs(fsfBIn11304)),
    hasFormulaError(fsfBIn11302, fsfBIn11303, fsfBIn11304)
      ? workbookBinding1835
      : (fsfBIn11302 - fsfBIn11303) / fsfBIn11304
  );
}
export function FQe() {
  let fsfBBind22426 = BQe.apply(this, arguments);
  return Math.sqrt(fsfBBind22426);
}
export function IQe() {
  let fsfBBind21415 = VQe.apply(this, arguments),
    fsfBBind21416 = Math.sqrt(fsfBBind21415);
  return (
    isNaN(fsfBBind21416) && (fsfBBind21416 = workbookBinding1838),
    fsfBBind21416
  );
}
export function LQe(fsfBIn5220: any, fsfBIn5221: any) {
  if (
    ((fsfBIn5220 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5220))),
    (fsfBIn5221 = ensureFlatArgs(flattenFormulaArgs(fsfBIn5221))),
    hasFormulaError(fsfBIn5220, fsfBIn5221))
  )
    return workbookBinding1835;
  let fsfBBind14768 = workbookBinding1831.default.mean(fsfBIn5221),
    fsfBBind14769 = workbookBinding1831.default.mean(fsfBIn5220),
    fsfBBind14770 = fsfBIn5221.length,
    fsfBBind14771 = 0,
    fsfBBind14772 = 0,
    fsfBBind14773 = 0;
  for (let fsfBBind21043 = 0; fsfBBind21043 < fsfBBind14770; fsfBBind21043++) {
    fsfBBind14771 += (fsfBIn5220[fsfBBind21043] - fsfBBind14769) ** 2;
    fsfBBind14772 +=
      (fsfBIn5221[fsfBBind21043] - fsfBBind14768) *
      (fsfBIn5220[fsfBBind21043] - fsfBBind14769);
    fsfBBind14773 += (fsfBIn5221[fsfBBind21043] - fsfBBind14768) ** 2;
  }
  return Math.sqrt(
    (fsfBBind14771 - (fsfBBind14772 * fsfBBind14772) / fsfBBind14773) /
      (fsfBBind14770 - 2),
  );
}
export function RQe(fsfBIn7287: any, fsfBIn7288: any, fsfBIn7289: any) {
  if (
    ((fsfBIn7287 = ensureFlatArgs(flattenFormulaArgs(fsfBIn7287))),
    (fsfBIn7288 = ensureFlatArgs(flattenFormulaArgs(fsfBIn7288))),
    (fsfBIn7289 = ensureFlatArgs(flattenFormulaArgs(fsfBIn7289))),
    hasFormulaError(fsfBIn7287, fsfBIn7288, fsfBIn7289))
  )
    return workbookBinding1835;
  let fsfBBind17672 = harmeanArgs(fsfBIn7287, fsfBIn7288),
    fsfBBind17673 = fsfBBind17672[0],
    fsfBBind17674 = fsfBBind17672[1],
    fsfBBind17675 = [];
  return (
    fsfBIn7289.forEach((item) => {
      fsfBBind17675.push(fsfBBind17673 * item + fsfBBind17674);
    }),
    fsfBBind17675
  );
}
export function zQe(fsfBIn7446: any, fsfBIn7447: any) {
  if (
    ((fsfBIn7446 = ensureFlatArgs(flattenFormulaArgs(fsfBIn7446))),
    (fsfBIn7447 = flattenMatrixArgs(fsfBIn7447)),
    hasFormulaError(fsfBIn7446, fsfBIn7447))
  )
    return workbookBinding1835;
  let fsfBBind17918 = arabicNumeral(fsfBIn7446.length * fsfBIn7447, 2) / 2;
  return workbookBinding1831.default.mean(
    iZe(
      chooseFormulaValue(
        fsfBIn7446.sort(
          (fsfBIn16555, fsfBIn16556) => fsfBIn16555 - fsfBIn16556,
        ),
        fsfBBind17918,
      ),
      fsfBBind17918,
    ),
  );
}
export function BQe() {
  let fsfBBind15441 = flattenFormulaArgs(arguments),
    fsfBBind15442 = fsfBBind15441.length,
    fsfBBind15443 = 0,
    fsfBBind15444 = 0,
    fsfBBind15445 = averageAArgs(fsfBBind15441);
  for (let fsfBBind18471 = 0; fsfBBind18471 < fsfBBind15442; fsfBBind18471++) {
    let fsfBBind19358 = fsfBBind15441[fsfBBind18471];
    typeof fsfBBind19358 == "number"
      ? (fsfBBind15443 += (fsfBBind19358 - fsfBBind15445) ** 2)
      : fsfBBind19358 === true
        ? (fsfBBind15443 += (1 - fsfBBind15445) ** 2)
        : (fsfBBind15443 += (0 - fsfBBind15445) ** 2);
    fsfBBind19358 !== null && fsfBBind15444++;
  }
  return fsfBBind15443 / (fsfBBind15444 - 1);
}
export function VQe() {
  let fsfBBind14749 = flattenFormulaArgs(arguments),
    fsfBBind14750 = fsfBBind14749.length,
    fsfBBind14751 = 0,
    fsfBBind14752 = 0,
    fsfBBind14753 = averageAArgs(fsfBBind14749),
    fsfBBind14754;
  for (let fsfBBind18472 = 0; fsfBBind18472 < fsfBBind14750; fsfBBind18472++) {
    let fsfBBind19359 = fsfBBind14749[fsfBBind18472];
    typeof fsfBBind19359 == "number"
      ? (fsfBBind14751 += (fsfBBind19359 - fsfBBind14753) ** 2)
      : fsfBBind19359 === true
        ? (fsfBBind14751 += (1 - fsfBBind14753) ** 2)
        : (fsfBBind14751 += (0 - fsfBBind14753) ** 2);
    fsfBBind19359 !== null && fsfBBind14752++;
  }
  return (
    (fsfBBind14754 = fsfBBind14751 / fsfBBind14752),
    isNaN(fsfBBind14754) && (fsfBBind14754 = workbookBinding1838),
    fsfBBind14754
  );
}
export function HQe(fsfBIn12456: any) {
  return (
    (fsfBIn12456 = flattenMatrixArgs(fsfBIn12456)),
    fsfBIn12456 instanceof Error ? fsfBIn12456 : Math.abs(fsfBIn12456)
  );
}
export function UQe(fsfBIn10471: any) {
  if (
    ((fsfBIn10471 = flattenMatrixArgs(fsfBIn10471)),
    fsfBIn10471 instanceof Error)
  )
    return fsfBIn10471;
  let fsfBBind20935 = Math.acos(fsfBIn10471);
  return (
    isNaN(fsfBBind20935) && (fsfBBind20935 = workbookBinding1838),
    fsfBBind20935
  );
}
export function WQe(fsfBIn9748: any) {
  if (
    ((fsfBIn9748 = flattenMatrixArgs(fsfBIn9748)), fsfBIn9748 instanceof Error)
  )
    return fsfBIn9748;
  let fsfBBind20276 = Math.log(
    fsfBIn9748 + Math.sqrt(fsfBIn9748 * fsfBIn9748 - 1),
  );
  return (
    isNaN(fsfBBind20276) && (fsfBBind20276 = workbookBinding1838),
    fsfBBind20276
  );
}
export function GQe(fsfBIn12151: any) {
  return (
    (fsfBIn12151 = flattenMatrixArgs(fsfBIn12151)),
    fsfBIn12151 instanceof Error ? fsfBIn12151 : Math.atan(1 / fsfBIn12151)
  );
}
export function KQe(fsfBIn9782: any) {
  if (
    ((fsfBIn9782 = flattenMatrixArgs(fsfBIn9782)), fsfBIn9782 instanceof Error)
  )
    return fsfBIn9782;
  let fsfBBind20322 = 0.5 * Math.log((fsfBIn9782 + 1) / (fsfBIn9782 - 1));
  return (
    isNaN(fsfBBind20322) && (fsfBBind20322 = workbookBinding1838),
    fsfBBind20322
  );
}
export function qQe(
  fsfBIn2386: any,
  fsfBIn2387: any,
  fsfBIn2388: any,
  fsfBIn2389: any,
) {
  if (
    ((fsfBIn2386 = flattenMatrixArgs(fsfBIn2386)),
    (fsfBIn2387 = flattenMatrixArgs(fsfBIn2386)),
    hasFormulaError(fsfBIn2386, fsfBIn2387))
  )
    return workbookBinding1835;
  switch (fsfBIn2386) {
    case 1:
      return averageNumericArgs(fsfBIn2388);
    case 2:
      return isOddInteger(fsfBIn2388);
    case 3:
      return isEvenInteger(fsfBIn2388);
    case 4:
      return trimmeanArgs(fsfBIn2388);
    case 5:
      return percentileArgs(fsfBIn2388);
    case 6:
      return multiGcd(fsfBIn2388);
    case 7:
      return fsfBBind1866.S(fsfBIn2388);
    case 8:
      return fsfBBind1866.P(fsfBIn2388);
    case 9:
      return sumproductArgs(fsfBIn2388);
    case 10:
      return fsfBBind1867.S(fsfBIn2388);
    case 11:
      return fsfBBind1867.P(fsfBIn2388);
    case 12:
      return xQe(fsfBIn2388);
    case 13:
      return fsfBBind1858.SNGL(fsfBIn2388);
    case 14:
      return _Qe(fsfBIn2388, fsfBIn2389);
    case 15:
      return NQe(fsfBIn2388, fsfBIn2389);
    case 16:
      return fsfBBind1861.INC(fsfBIn2388, fsfBIn2389);
    case 17:
      return fsfBBind1864.INC(fsfBIn2388, fsfBIn2389);
    case 18:
      return fsfBBind1861.EXC(fsfBIn2388, fsfBIn2389);
    case 19:
      return fsfBBind1864.EXC(fsfBIn2388, fsfBIn2389);
  }
}
export function JQe(props: any) {
  if (props == null) return 0;
  if (props instanceof Error) return props;
  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(props))
    return workbookBinding1835;
  let fsfBBind12432 = 0;
  return (
    props.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (fsfBIn7203) => {
      fsfBBind12432 += {
        M: 1e3,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      }[fsfBIn7203];
    }),
    fsfBBind12432
  );
}
export function YQe(fsfBIn10472: any) {
  if (
    ((fsfBIn10472 = flattenMatrixArgs(fsfBIn10472)),
    fsfBIn10472 instanceof Error)
  )
    return fsfBIn10472;
  let fsfBBind20936 = Math.asin(fsfBIn10472);
  return (
    isNaN(fsfBBind20936) && (fsfBBind20936 = workbookBinding1838),
    fsfBBind20936
  );
}
export function XQe(fsfBIn10854: any) {
  return (
    (fsfBIn10854 = flattenMatrixArgs(fsfBIn10854)),
    fsfBIn10854 instanceof Error
      ? fsfBIn10854
      : Math.log(fsfBIn10854 + Math.sqrt(fsfBIn10854 * fsfBIn10854 + 1))
  );
}
export function ZQe(fsfBIn12382: any) {
  return (
    (fsfBIn12382 = flattenMatrixArgs(fsfBIn12382)),
    fsfBIn12382 instanceof Error ? fsfBIn12382 : Math.atan(fsfBIn12382)
  );
}
export function QQe(fsfBIn12030: any, fsfBIn12031: any) {
  return (
    (fsfBIn12030 = flattenMatrixArgs(fsfBIn12030)),
    (fsfBIn12031 = flattenMatrixArgs(fsfBIn12031)),
    anyFormulaError(fsfBIn12030, fsfBIn12031) ||
      Math.atan2(fsfBIn12030, fsfBIn12031)
  );
}
export function $Qe(fsfBIn9831: any) {
  if (
    ((fsfBIn9831 = flattenMatrixArgs(fsfBIn9831)), fsfBIn9831 instanceof Error)
  )
    return fsfBIn9831;
  let fsfBBind20374 = Math.log((1 + fsfBIn9831) / (1 - fsfBIn9831)) / 2;
  return (
    isNaN(fsfBBind20374) && (fsfBBind20374 = workbookBinding1838),
    fsfBBind20374
  );
}
export function romanNumeral(fsfBIn9988: any, fsfBIn9989: any) {
  return (
    (fsfBIn9988 = flattenMatrixArgs(fsfBIn9988)),
    (fsfBIn9989 = flattenMatrixArgs(fsfBIn9989)),
    anyFormulaError(fsfBIn9988, fsfBIn9989) ||
      (fsfBIn9989 === 0
        ? 0
        : fsfBIn9988 > 0 && fsfBIn9989 < 0
          ? workbookBinding1838
          : Math.ceil(fsfBIn9988 / fsfBIn9989) * fsfBIn9989)
  );
}
export function sqrtFloor(fsfBIn10496: any, fsfBIn10497: any) {
  return (
    (fsfBIn10496 = flattenMatrixArgs(fsfBIn10496)),
    (fsfBIn10497 = flattenMatrixArgs(fsfBIn10497)),
    anyFormulaError(fsfBIn10496, fsfBIn10497) ||
      (fsfBIn10496 < fsfBIn10497
        ? workbookBinding1838
        : absNumber(fsfBIn10496) /
          (absNumber(fsfBIn10497) * absNumber(fsfBIn10496 - fsfBIn10497)))
  );
}
export function e$e(fsfBIn9860: any, fsfBIn9861: any) {
  return (
    (fsfBIn9860 = flattenMatrixArgs(fsfBIn9860)),
    (fsfBIn9861 = flattenMatrixArgs(fsfBIn9861)),
    anyFormulaError(fsfBIn9860, fsfBIn9861) ||
      (fsfBIn9860 < fsfBIn9861
        ? workbookBinding1838
        : fsfBIn9860 === 0 && fsfBIn9861 === 0
          ? 1
          : sqrtFloor(fsfBIn9860 + fsfBIn9861 - 1, fsfBIn9860 - 1))
  );
}
export function t$e(fsfBIn12457: any) {
  return (
    (fsfBIn12457 = flattenMatrixArgs(fsfBIn12457)),
    fsfBIn12457 instanceof Error ? fsfBIn12457 : Math.cos(fsfBIn12457)
  );
}
export function n$e(fsfBIn10907: any) {
  return (
    (fsfBIn10907 = flattenMatrixArgs(fsfBIn10907)),
    fsfBIn10907 instanceof Error
      ? fsfBIn10907
      : (Math.exp(fsfBIn10907) + Math.exp(-fsfBIn10907)) / 2
  );
}
export function r$e(fsfBIn11437: any) {
  return (
    (fsfBIn11437 = flattenMatrixArgs(fsfBIn11437)),
    fsfBIn11437 instanceof Error
      ? fsfBIn11437
      : fsfBIn11437 === 0
        ? workbookBinding1834
        : 1 / Math.tan(fsfBIn11437)
  );
}
export function i$e(fsfBIn9749: any) {
  if (
    ((fsfBIn9749 = flattenMatrixArgs(fsfBIn9749)), fsfBIn9749 instanceof Error)
  )
    return fsfBIn9749;
  if (fsfBIn9749 === 0) return workbookBinding1834;
  let fsfBBind20277 = Math.exp(2 * fsfBIn9749);
  return (fsfBBind20277 + 1) / (fsfBBind20277 - 1);
}
export function a$e(fsfBIn11438: any) {
  return (
    (fsfBIn11438 = flattenMatrixArgs(fsfBIn11438)),
    fsfBIn11438 instanceof Error
      ? fsfBIn11438
      : fsfBIn11438 === 0
        ? workbookBinding1834
        : 1 / Math.sin(fsfBIn11438)
  );
}
export function o$e(fsfBIn10473: any) {
  return (
    (fsfBIn10473 = flattenMatrixArgs(fsfBIn10473)),
    fsfBIn10473 instanceof Error
      ? fsfBIn10473
      : fsfBIn10473 === 0
        ? workbookBinding1834
        : 2 / (Math.exp(fsfBIn10473) - Math.exp(-fsfBIn10473))
  );
}
export function s$e(fsfBIn8040: any, fsfBIn8041: any) {
  if (arguments.length < 2) return workbookBinding1839;
  fsfBIn8040 ||= "0";
  fsfBIn8041 = flattenMatrixArgs(fsfBIn8041);
  let fsfBBind18546 = anyFormulaError(fsfBIn8040, fsfBIn8041);
  if (fsfBBind18546) return fsfBBind18546;
  if (fsfBIn8041 === 0) return workbookBinding1838;
  let fsfBBind18547 = parseInt(fsfBIn8040, fsfBIn8041);
  return isNaN(fsfBBind18547) ? workbookBinding1838 : fsfBBind18547;
}
export function c$e(fsfBIn11994: any) {
  return (
    (fsfBIn11994 = flattenMatrixArgs(fsfBIn11994)),
    fsfBIn11994 instanceof Error ? fsfBIn11994 : (fsfBIn11994 * 180) / Math.PI
  );
}
export function l$e(fsfBIn12032: any) {
  return (
    (fsfBIn12032 = flattenMatrixArgs(fsfBIn12032)),
    fsfBIn12032 instanceof Error
      ? fsfBIn12032
      : romanNumeral.MATH(fsfBIn12032, -2, -1)
  );
}
export function u$e(fsfBIn9356: any) {
  return arguments.length < 1
    ? workbookBinding1839
    : arguments.length > 1
      ? workbookBinding1840
      : ((fsfBIn9356 = flattenMatrixArgs(fsfBIn9356)),
        fsfBIn9356 instanceof Error || (fsfBIn9356 = Math.exp(fsfBIn9356)),
        fsfBIn9356);
}
export function absNumber(fsfBIn8997: any) {
  if (
    ((fsfBIn8997 = flattenMatrixArgs(fsfBIn8997)), fsfBIn8997 instanceof Error)
  )
    return fsfBIn8997;
  let fsfBBind19541 = Math.floor(fsfBIn8997);
  return fsfBBind19541 === 0 || fsfBBind19541 === 1
    ? 1
    : (fsfBBind1870[fsfBBind19541] > 0 ||
        (fsfBBind1870[fsfBBind19541] =
          absNumber(fsfBBind19541 - 1) * fsfBBind19541),
      fsfBBind1870[fsfBBind19541]);
}
export function arabicNumeral(fsfBIn10059: any, fsfBIn10060: any) {
  return (
    (fsfBIn10059 = flattenMatrixArgs(fsfBIn10059)),
    (fsfBIn10060 = flattenMatrixArgs(fsfBIn10060)),
    anyFormulaError(fsfBIn10059, fsfBIn10060) ||
      (fsfBIn10060
        ? fsfBIn10059 > 0 && fsfBIn10060 < 0
          ? workbookBinding1838
          : Math.floor(fsfBIn10059 / fsfBIn10060) * fsfBIn10060
        : workbookBinding1834)
  );
}
