// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula eng mids (EDATE/DEC2BIN/HEX2BIN/OCT2BIN/complex/HLOOKUP/CHOOSE).
// Stage-3 wave-128.

import {
  coerceFormulaDate,
  flattenMatrixArgs,
  excelDaysSinceEpoch,
  hasFormulaError,
  eachFormulaArg,
  chooseFormulaValue,
  formulaValueEquals,
} from "../formula-token-utils";
import { padStartRepeat } from "../formula-scalar-funcs";
import {
  complexReal,
  complexImag,
  formatComplexPair,
} from "../formula-complex";
import { matchCriteriaColumns } from "../formula-criteria-match";
import {
  workbookBinding1834 as div0Error,
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
  workbookBinding1839 as naError,
  workbookBinding1842 as useExcelEpoch,
} from "../formula-stats";

export function edate(femIn3911: any, femIn3912: any) {
  if (((femIn3911 = coerceFormulaDate(femIn3911)), femIn3911 instanceof Error))
    return femIn3911;
  if (isNaN(femIn3912)) return valueError;
  let femBind12794 = femIn3911.getDate();
  femIn3911.setDate(1);
  femIn3912 = parseInt(femIn3912, 10);
  femIn3911.setMonth(femIn3911.getMonth() + femIn3912);
  let femBind12795 = femIn3911.getMonth();
  if (femBind12794 > 28) {
    let femBind18703 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
        femBind12795
      ],
      femBind18704 = femIn3911.getFullYear();
    femBind12795 === 1 &&
      ((femBind18704 % 4 == 0 && femBind18704 % 100 != 0) ||
        femBind18704 % 400 == 0) &&
      (femBind18703 = 29);
    femBind12794 = Math.min(femBind12794, femBind18703);
  }
  return (
    femIn3911.setDate(femBind12794),
    useExcelEpoch ? excelDaysSinceEpoch(femIn3911) : femIn3911
  );
}
export function dec2bin(femIn4149: any, femIn4150: any) {
  if (((femIn4149 = flattenMatrixArgs(femIn4149)), femIn4149 instanceof Error))
    return femIn4149;
  if (!/^-?[0-9]{1,3}$/.test(femIn4149) || femIn4149 < -512 || femIn4149 > 511)
    return numError;
  if (femIn4149 < 0)
    return (
      "1" +
      padStartRepeat("0", 9 - (512 + femIn4149).toString(2).length) +
      (512 + femIn4149).toString(2)
    );
  let n = parseInt(femIn4149, 10).toString(2);
  return femIn4150 === undefined
    ? n
    : isNaN(femIn4150)
      ? valueError
      : femIn4150 < 0
        ? numError
        : ((femIn4150 = Math.floor(femIn4150)),
          femIn4150 >= n.length
            ? padStartRepeat("0", femIn4150 - n.length) + n
            : numError);
}
export function hex2bin(femIn3479: any, femIn3480: any) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(femIn3479)) return numError;
  let femBind11921 =
      femIn3479.length === 10 &&
      femIn3479.substring(0, 1).toLowerCase() === "f",
    femBind11922 = femBind11921
      ? parseInt(femIn3479, 16) - 1099511627776
      : parseInt(femIn3479, 16);
  if (femBind11922 < -512 || femBind11922 > 511) return numError;
  if (femBind11921)
    return (
      "1" +
      padStartRepeat("0", 9 - (512 + femBind11922).toString(2).length) +
      (512 + femBind11922).toString(2)
    );
  let i = femBind11922.toString(2);
  return femIn3480 === undefined
    ? i
    : isNaN(femIn3480)
      ? valueError
      : femIn3480 < 0
        ? numError
        : ((femIn3480 = Math.floor(femIn3480)),
          femIn3480 >= i.length
            ? padStartRepeat("0", femIn3480 - i.length) + i
            : numError);
}
export function complexAbs(femIn11340: any) {
  let femBind21810 = complexReal(femIn11340),
    femBind21811 = complexImag(femIn11340);
  return hasFormulaError(femBind21810, femBind21811)
    ? valueError
    : Math.sqrt(femBind21810 ** 2 + femBind21811 ** 2);
}
export function complexArg(femIn3740: any) {
  let femBind12441 = complexReal(femIn3740),
    femBind12442 = complexImag(femIn3740);
  return hasFormulaError(femBind12441, femBind12442)
    ? valueError
    : femBind12441 === 0 && femBind12442 === 0
      ? div0Error
      : femBind12441 === 0 && femBind12442 > 0
        ? Math.PI / 2
        : femBind12441 === 0 && femBind12442 < 0
          ? -Math.PI / 2
          : femBind12442 === 0 && femBind12441 > 0
            ? 0
            : femBind12442 === 0 && femBind12441 < 0
              ? -Math.PI
              : femBind12441 > 0
                ? Math.atan(femBind12442 / femBind12441)
                : femBind12441 < 0 && femBind12442 >= 0
                  ? Math.atan(femBind12442 / femBind12441) + Math.PI
                  : Math.atan(femBind12442 / femBind12441) - Math.PI;
}
export function complexPower(femIn6625: any, femIn6626: any) {
  femIn6626 = flattenMatrixArgs(femIn6626);
  let femBind16907 = complexReal(femIn6625),
    femBind16908 = complexImag(femIn6625);
  if (hasFormulaError(femIn6626, femBind16907, femBind16908)) return valueError;
  let femBind16909 = femIn6625.substring(femIn6625.length - 1);
  femBind16909 =
    femBind16909 === "i" || femBind16909 === "j" ? femBind16909 : "i";
  let femBind16910 = complexAbs(femIn6625) ** +femIn6626,
    femBind16911 = complexArg(femIn6625);
  return formatComplexPair(
    femBind16910 * Math.cos(femIn6626 * femBind16911),
    femBind16910 * Math.sin(femIn6626 * femBind16911),
    femBind16909,
  );
}
export function complexMin() {
  let femBind15947 = arguments[0];
  if (!arguments.length) return valueError;
  for (let femBind18322 = 1; femBind18322 < arguments.length; femBind18322++) {
    let femBind19612 = complexReal(femBind15947),
      femBind19613 = complexImag(femBind15947),
      femBind19614 = complexReal(arguments[femBind18322]),
      femBind19615 = complexImag(arguments[femBind18322]);
    if (hasFormulaError(femBind19612, femBind19613, femBind19614, femBind19615))
      return valueError;
    femBind15947 = formatComplexPair(
      femBind19612 * femBind19614 - femBind19613 * femBind19615,
      femBind19612 * femBind19615 + femBind19613 * femBind19614,
    );
  }
  return femBind15947;
}
export function complexCompare(femIn6556: any, femIn6557: any) {
  let femBind16805 = complexReal(femIn6556),
    femBind16806 = complexImag(femIn6556),
    femBind16807 = complexReal(femIn6557),
    femBind16808 = complexImag(femIn6557);
  if (hasFormulaError(femBind16805, femBind16806, femBind16807, femBind16808))
    return valueError;
  let femBind16809 = femIn6556.substring(femIn6556.length - 1),
    femBind16810 = femIn6557.substring(femIn6557.length - 1),
    femBind16811 = "i";
  return (
    (femBind16809 === "j" || femBind16810 === "j") && (femBind16811 = "j"),
    formatComplexPair(
      femBind16805 - femBind16807,
      femBind16806 - femBind16808,
      femBind16811,
    )
  );
}
export function oct2bin(femIn3668: any, femIn3669: any) {
  if (!/^[0-7]{1,10}$/.test(femIn3668)) return numError;
  let femBind12280 =
      femIn3668.length === 10 && femIn3668.substring(0, 1) === "7",
    femBind12281 = femBind12280
      ? parseInt(femIn3668, 8) - 1073741824
      : parseInt(femIn3668, 8);
  if (femBind12281 < -512 || femBind12281 > 511) return numError;
  if (femBind12280)
    return (
      "1" +
      padStartRepeat("0", 9 - (512 + femBind12281).toString(2).length) +
      (512 + femBind12281).toString(2)
    );
  let i = femBind12281.toString(2);
  return femIn3669 === undefined
    ? i
    : isNaN(femIn3669)
      ? valueError
      : femIn3669 < 0
        ? numError
        : ((femIn3669 = Math.floor(femIn3669)),
          femIn3669 >= i.length
            ? padStartRepeat("0", femIn3669 - i.length) + i
            : numError);
}
export function collectNonEmptyArgs(femIn11259: any) {
  let femBind21718 = [];
  return (
    eachFormulaArg(femIn11259, (femIn15656) => {
      femIn15656 && femBind21718.push(femIn15656);
    }),
    femBind21718
  );
}
export function hlookupSum(femIn5893: any, femIn5894: any, femIn5895: any) {
  if (isNaN(femIn5894) && typeof femIn5894 != "string") return valueError;
  let femBind15877 = matchCriteriaColumns(femIn5893, femIn5895),
    femBind15878 = [];
  femBind15878 = chooseFormulaValue(
    typeof femIn5894 == "string"
      ? femIn5893[formulaValueEquals(femIn5893, femIn5894)]
      : femIn5893[femIn5894],
  );
  let femBind15879 = [];
  eachFormulaArg(femBind15877, (femIn15880) => {
    femBind15879.push(femBind15878[femIn15880]);
  });
  femBind15879 = collectNonEmptyArgs(femBind15879);
  let femBind15880 = 1;
  return (
    eachFormulaArg(femBind15879, (femIn16037) => {
      femBind15880 *= femIn16037;
    }),
    femBind15880
  );
}
export function chooseValue() {
  let femBind12841;
  if (arguments.length > 0) {
    let femBind14261 = arguments[0],
      femBind14262 = arguments.length - 1,
      femBind14263 = Math.floor(femBind14262 / 2),
      femBind14264 = false,
      femBind14265 = femBind14262 % 2 != 0,
      femBind14266 =
        femBind14262 % 2 == 0 ? null : arguments[arguments.length - 1];
    if (femBind14263) {
      for (let femBind20408 = 0; femBind20408 < femBind14263; femBind20408++)
        if (femBind14261 === arguments[femBind20408 * 2 + 1]) {
          femBind12841 = arguments[femBind20408 * 2 + 2];
          femBind14264 = true;
          break;
        }
    }
    femBind14264 || (femBind12841 = femBind14265 ? femBind14266 : naError);
  } else femBind12841 = valueError;
  return femBind12841;
}

export const s1e = edate;
export const P1e = dec2bin;
export const z1e = hex2bin;
export const o0e = oct2bin;
export const X1e = complexMin;
export const r0e = complexCompare;
export const Y1e = complexPower;
export const h0e = hlookupSum;
export const s2e = chooseValue;
export const workbookHelper889 = complexAbs;
export const workbookHelper890 = complexArg;
export const workbookHelper895 = collectNonEmptyArgs;
