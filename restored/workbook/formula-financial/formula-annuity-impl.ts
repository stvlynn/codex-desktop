// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel annuity / coupon / NPV family (legacy w0e / futureValue / computePmt / Q0e cluster).
// Stage-3 wave-122. Preferred peels w0e / futureValue / npvArgs / computePmt; closes financial hooks.

import {
  flattenFormulaArgs,
  anyFormulaError,
  hasFormulaError,
  coerceFormulaDate,
  coerceFormulaDates as uZe,
  flattenMatrixArgs,
  ensureFlatArgs,
} from "../formula-token-utils";
import { dateDif } from "../formula-datedif";
import { yearFrac, dateDiffDays } from "../formula-yearfrac";
import { days360 } from "../formula-scalar-funcs";
import {
  workbookBinding1834 as div0Error,
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
} from "../formula-stats";
import { P0e } from "./formula-financial-impl";

export function isValidDateArg(ffaIn13332: any) {
  return ffaIn13332 && ffaIn13332.getTime && !isNaN(ffaIn13332.getTime());
}
export function coerceToDate(ffaIn13551: any) {
  return ffaIn13551 instanceof Date ? ffaIn13551 : new Date(ffaIn13551);
}
export function b0e(ffaIn8313: any, ffaIn8314: any, ffaIn8315: any) {
  let ffaBind18815 = coerceFormulaDate(ffaIn8314);
  for (
    ffaBind18815.setFullYear(ffaIn8313.getFullYear()),
      ffaBind18815 < ffaIn8313 &&
        ffaBind18815.setFullYear(ffaBind18815.getFullYear() + 1);
    ffaBind18815 > ffaIn8313;
  )
    ffaBind18815.setMonth(ffaBind18815.getMonth() + -12 / ffaIn8315);
  return ffaBind18815;
}
export function x0e(ffaIn12524: any) {
  return (
    (ffaIn12524 = flattenMatrixArgs(ffaIn12524)),
    [1, 2, 4].indexOf(ffaIn12524) === -1 ? numError : ffaIn12524
  );
}
export function S0e(ffaIn12153: any) {
  return (
    (ffaIn12153 = flattenMatrixArgs(ffaIn12153)),
    [0, 1, 2, 3, 4].indexOf(ffaIn12153) === -1 ? numError : ffaIn12153
  );
}
export function C0e(
  ffaIn5791: any,
  ffaIn5792: any,
  ffaIn5793: any,
  ffaIn5794: any,
  ffaIn5795: any,
  ffaIn5796: any,
  ffaIn5797: any,
) {
  return (
    (ffaIn5791 = coerceToDate(ffaIn5791)),
    (ffaIn5792 = coerceToDate(ffaIn5792)),
    (ffaIn5793 = coerceToDate(ffaIn5793)),
    (ffaIn5796 = x0e(ffaIn5796)),
    (ffaIn5797 = S0e(ffaIn5797)),
    anyFormulaError(ffaIn5796, ffaIn5797)
      ? numError
      : !isValidDateArg(ffaIn5791) ||
          !isValidDateArg(ffaIn5792) ||
          !isValidDateArg(ffaIn5793)
        ? valueError
        : ffaIn5794 <= 0 || ffaIn5795 <= 0 || ffaIn5793 <= ffaIn5791
          ? numError
          : ((ffaIn5795 ||= 0),
            (ffaIn5797 ||= 0),
            ffaIn5795 * ffaIn5794 * yearFrac(ffaIn5791, ffaIn5793, ffaIn5797))
  );
}
export function w0e(
  ffaIn4078: any,
  ffaIn4079: any,
  ffaIn4080: any,
  ffaIn4081: any,
) {
  if (
    ((ffaIn4081 = S0e(ffaIn4081)),
    (ffaIn4080 = x0e(ffaIn4080)),
    (ffaIn4078 = coerceFormulaDate(ffaIn4078)),
    (ffaIn4079 = coerceFormulaDate(ffaIn4079)),
    anyFormulaError(ffaIn4078, ffaIn4079))
  )
    return valueError;
  if (anyFormulaError(ffaIn4080, ffaIn4081) || ffaIn4078 >= ffaIn4079)
    return numError;
  if (ffaIn4081 === 1) {
    let ffaBind21485 = b0e(ffaIn4078, ffaIn4079, ffaIn4080),
      ffaBind21486 = coerceFormulaDate(ffaBind21485);
    return (
      ffaBind21486.setMonth(ffaBind21486.getMonth() + 12 / ffaIn4080),
      dateDif(ffaBind21485, ffaBind21486, "D")
    );
  }
  let ffaBind13048;
  switch (ffaIn4081) {
    case 0:
    case 2:
    case 4:
      ffaBind13048 = 360;
      break;
    case 3:
      ffaBind13048 = 365;
      break;
    default:
      return numError;
  }
  return ffaBind13048 / ffaIn4080;
}
export function A0e(ffaIn5431: any, ffaIn5432: any) {
  if (
    ((ffaIn5431 = flattenMatrixArgs(ffaIn5431)),
    (ffaIn5432 = flattenMatrixArgs(ffaIn5432)),
    hasFormulaError(ffaIn5431, ffaIn5432))
  )
    return valueError;
  if (ffaIn5432 < 0) return numError;
  if (ffaIn5432 >= 0 && ffaIn5432 < 1) return div0Error;
  ffaIn5432 = parseInt(ffaIn5432, 10);
  let ffaBind15194 = parseInt(ffaIn5431, 10);
  ffaBind15194 +=
    ((ffaIn5431 % 1) * 10 ** Math.ceil(Math.log(ffaIn5432) / Math.LN10)) /
    ffaIn5432;
  let ffaBind15195 = 10 ** (Math.ceil(Math.log(ffaIn5432) / Math.LN2) + 1);
  return (
    (ffaBind15194 = Math.round(ffaBind15194 * ffaBind15195) / ffaBind15195),
    ffaBind15194
  );
}
export function j0e(ffaIn6835: any, ffaIn6836: any) {
  if (
    ((ffaIn6835 = flattenMatrixArgs(ffaIn6835)),
    (ffaIn6836 = flattenMatrixArgs(ffaIn6836)),
    hasFormulaError(ffaIn6835, ffaIn6836))
  )
    return valueError;
  if (ffaIn6836 < 0) return numError;
  if (ffaIn6836 >= 0 && ffaIn6836 < 1) return div0Error;
  ffaIn6836 = parseInt(ffaIn6836, 10);
  let ffaBind17156 = parseInt(ffaIn6835, 10);
  return (
    (ffaBind17156 +=
      (ffaIn6835 % 1) *
      10 ** -Math.ceil(Math.log(ffaIn6836) / Math.LN10) *
      ffaIn6836),
    ffaBind17156
  );
}
export function M0e(ffaIn8700: any, ffaIn8701: any) {
  return (
    (ffaIn8700 = flattenMatrixArgs(ffaIn8700)),
    (ffaIn8701 = flattenMatrixArgs(ffaIn8701)),
    hasFormulaError(ffaIn8700, ffaIn8701)
      ? valueError
      : ffaIn8700 <= 0 || ffaIn8701 < 1
        ? numError
        : ((ffaIn8701 = parseInt(ffaIn8701, 10)),
          (1 + ffaIn8700 / ffaIn8701) ** +ffaIn8701 - 1)
  );
}
export function futureValue(
  ffaIn5152: any,
  ffaIn5153: any,
  ffaIn5154: any,
  ffaIn5155: any,
  ffaIn5156: any,
) {
  if (
    ((ffaIn5155 ||= 0),
    (ffaIn5156 ||= 0),
    (ffaIn5152 = flattenMatrixArgs(ffaIn5152)),
    (ffaIn5153 = flattenMatrixArgs(ffaIn5153)),
    (ffaIn5154 = flattenMatrixArgs(ffaIn5154)),
    (ffaIn5155 = flattenMatrixArgs(ffaIn5155)),
    (ffaIn5156 = flattenMatrixArgs(ffaIn5156)),
    hasFormulaError(ffaIn5152, ffaIn5153, ffaIn5154, ffaIn5155, ffaIn5156))
  )
    return valueError;
  let ffaBind14655;
  if (ffaIn5152 === 0) ffaBind14655 = ffaIn5155 + ffaIn5154 * ffaIn5153;
  else {
    let ffaBind21177 = (1 + ffaIn5152) ** +ffaIn5153;
    ffaBind14655 =
      ffaIn5156 === 1
        ? ffaIn5155 * ffaBind21177 +
          (ffaIn5154 * (1 + ffaIn5152) * (ffaBind21177 - 1)) / ffaIn5152
        : ffaIn5155 * ffaBind21177 +
          (ffaIn5154 * (ffaBind21177 - 1)) / ffaIn5152;
  }
  return -ffaBind14655;
}
export function N0e(ffaIn9294: any, ffaIn9295: any) {
  if (
    ((ffaIn9294 = flattenMatrixArgs(ffaIn9294)),
    (ffaIn9295 = ensureFlatArgs(flattenFormulaArgs(ffaIn9295))),
    hasFormulaError(ffaIn9294, ffaIn9295))
  )
    return valueError;
  let ffaBind19854 = ffaIn9295.length,
    ffaBind19855 = ffaIn9294;
  for (let ffaBind23002 = 0; ffaBind23002 < ffaBind19854; ffaBind23002++)
    ffaBind19855 *= 1 + ffaIn9295[ffaBind23002];
  return ffaBind19855;
}
export function I0e(
  ffaIn9685: any,
  ffaIn9686: any,
  ffaIn9687: any,
  ffaIn9688: any,
) {
  return (
    (ffaIn9685 = flattenMatrixArgs(ffaIn9685)),
    (ffaIn9686 = flattenMatrixArgs(ffaIn9686)),
    (ffaIn9687 = flattenMatrixArgs(ffaIn9687)),
    (ffaIn9688 = flattenMatrixArgs(ffaIn9688)),
    hasFormulaError(ffaIn9685, ffaIn9686, ffaIn9687, ffaIn9688)
      ? valueError
      : ffaIn9688 * ffaIn9685 * (ffaIn9686 / ffaIn9687 - 1)
  );
}
export function L0e(ffaIn5877: any, ffaIn5878: any, ffaIn5879: any) {
  if (
    ((ffaIn5877 = ensureFlatArgs(flattenFormulaArgs(ffaIn5877))),
    (ffaIn5878 = flattenMatrixArgs(ffaIn5878)),
    (ffaIn5879 = flattenMatrixArgs(ffaIn5879)),
    hasFormulaError(ffaIn5877, ffaIn5878, ffaIn5879))
  )
    return valueError;
  let ffaBind15855 = ffaIn5877.length,
    ffaBind15856 = [],
    ffaBind15857 = [];
  for (let ffaBind22603 = 0; ffaBind22603 < ffaBind15855; ffaBind22603++)
    ffaIn5877[ffaBind22603] < 0
      ? ffaBind15856.push(ffaIn5877[ffaBind22603])
      : ffaBind15857.push(ffaIn5877[ffaBind22603]);
  return (
    ((-npvArgs(ffaIn5879, ffaBind15857) *
      (1 + ffaIn5879) ** (ffaBind15855 - 1)) /
      (npvArgs(ffaIn5878, ffaBind15856) * (1 + ffaIn5878))) **
      (1 / (ffaBind15855 - 1)) -
    1
  );
}
export function R0e(ffaIn8492: any, ffaIn8493: any) {
  return (
    (ffaIn8492 = flattenMatrixArgs(ffaIn8492)),
    (ffaIn8493 = flattenMatrixArgs(ffaIn8493)),
    hasFormulaError(ffaIn8492, ffaIn8493)
      ? valueError
      : ffaIn8492 <= 0 || ffaIn8493 < 1
        ? numError
        : ((ffaIn8493 = parseInt(ffaIn8493, 10)),
          ((ffaIn8492 + 1) ** (1 / ffaIn8493) - 1) * ffaIn8493)
  );
}
export function z0e(
  ffaIn4927: any,
  ffaIn4928: any,
  ffaIn4929: any,
  ffaIn4930: any,
  ffaIn4931: any,
) {
  if (
    ((ffaIn4931 = ffaIn4931 === undefined ? 0 : ffaIn4931),
    (ffaIn4930 = ffaIn4930 === undefined ? 0 : ffaIn4930),
    (ffaIn4927 = flattenMatrixArgs(ffaIn4927)),
    (ffaIn4928 = flattenMatrixArgs(ffaIn4928)),
    (ffaIn4929 = flattenMatrixArgs(ffaIn4929)),
    (ffaIn4930 = flattenMatrixArgs(ffaIn4930)),
    (ffaIn4931 = flattenMatrixArgs(ffaIn4931)),
    hasFormulaError(ffaIn4927, ffaIn4928, ffaIn4929, ffaIn4930, ffaIn4931))
  )
    return valueError;
  if (ffaIn4927 === 0) return -(ffaIn4929 + ffaIn4930) / ffaIn4928;
  {
    let ffaBind21109 =
        ffaIn4928 * (1 + ffaIn4927 * ffaIn4931) - ffaIn4930 * ffaIn4927,
      ffaBind21110 =
        ffaIn4929 * ffaIn4927 + ffaIn4928 * (1 + ffaIn4927 * ffaIn4931);
    return Math.log(ffaBind21109 / ffaBind21110) / Math.log(1 + ffaIn4927);
  }
}
export function npvArgs() {
  let ffaBind19267 = ensureFlatArgs(flattenFormulaArgs(arguments));
  if (ffaBind19267 instanceof Error) return ffaBind19267;
  let ffaBind19268 = ffaBind19267[0],
    ffaBind19269 = 0;
  for (let ffaBind22730 = 1; ffaBind22730 < ffaBind19267.length; ffaBind22730++)
    ffaBind19269 +=
      ffaBind19267[ffaBind22730] / (1 + ffaBind19268) ** +ffaBind22730;
  return ffaBind19269;
}
export function B0e(ffaIn9152: any, ffaIn9153: any, ffaIn9154: any) {
  return (
    (ffaIn9152 = flattenMatrixArgs(ffaIn9152)),
    (ffaIn9153 = flattenMatrixArgs(ffaIn9153)),
    (ffaIn9154 = flattenMatrixArgs(ffaIn9154)),
    hasFormulaError(ffaIn9152, ffaIn9153, ffaIn9154)
      ? valueError
      : ffaIn9152 <= 0
        ? numError
        : (Math.log(ffaIn9154) - Math.log(ffaIn9153)) / Math.log(1 + ffaIn9152)
  );
}
export function computePmt(
  ffaIn4438: any,
  ffaIn4439: any,
  ffaIn4440: any,
  ffaIn4441: any,
  ffaIn4442: any,
) {
  if (
    ((ffaIn4441 ||= 0),
    (ffaIn4442 ||= 0),
    (ffaIn4438 = flattenMatrixArgs(ffaIn4438)),
    (ffaIn4439 = flattenMatrixArgs(ffaIn4439)),
    (ffaIn4440 = flattenMatrixArgs(ffaIn4440)),
    (ffaIn4441 = flattenMatrixArgs(ffaIn4441)),
    (ffaIn4442 = flattenMatrixArgs(ffaIn4442)),
    hasFormulaError(ffaIn4438, ffaIn4439, ffaIn4440, ffaIn4441, ffaIn4442))
  )
    return valueError;
  let ffaBind13677;
  if (ffaIn4438 === 0) ffaBind13677 = (ffaIn4440 + ffaIn4441) / ffaIn4439;
  else {
    let ffaBind19667 = (1 + ffaIn4438) ** +ffaIn4439;
    ffaBind13677 =
      ffaIn4442 === 1
        ? ((ffaIn4441 * ffaIn4438) / (ffaBind19667 - 1) +
            (ffaIn4440 * ffaIn4438) / (1 - 1 / ffaBind19667)) /
          (1 + ffaIn4438)
        : (ffaIn4441 * ffaIn4438) / (ffaBind19667 - 1) +
          (ffaIn4440 * ffaIn4438) / (1 - 1 / ffaBind19667);
  }
  return -ffaBind13677;
}
export function V0e(
  ffaIn7448: any,
  ffaIn7449: any,
  ffaIn7450: any,
  ffaIn7451: any,
  ffaIn7452: any,
  ffaIn7453: any,
) {
  return (
    (ffaIn7452 ||= 0),
    (ffaIn7453 ||= 0),
    (ffaIn7448 = flattenMatrixArgs(ffaIn7448)),
    (ffaIn7450 = flattenMatrixArgs(ffaIn7450)),
    (ffaIn7451 = flattenMatrixArgs(ffaIn7451)),
    (ffaIn7452 = flattenMatrixArgs(ffaIn7452)),
    (ffaIn7453 = flattenMatrixArgs(ffaIn7453)),
    hasFormulaError(ffaIn7448, ffaIn7450, ffaIn7451, ffaIn7452, ffaIn7453)
      ? valueError
      : computePmt(ffaIn7448, ffaIn7450, ffaIn7451, ffaIn7452, ffaIn7453) -
        P0e(ffaIn7448, ffaIn7449, ffaIn7450, ffaIn7451, ffaIn7452, ffaIn7453)
  );
}
export function U0e(
  ffaIn6028: any,
  ffaIn6029: any,
  ffaIn6030: any,
  ffaIn6031: any,
  ffaIn6032: any,
) {
  return (
    (ffaIn6031 ||= 0),
    (ffaIn6032 ||= 0),
    (ffaIn6028 = flattenMatrixArgs(ffaIn6028)),
    (ffaIn6029 = flattenMatrixArgs(ffaIn6029)),
    (ffaIn6030 = flattenMatrixArgs(ffaIn6030)),
    (ffaIn6031 = flattenMatrixArgs(ffaIn6031)),
    (ffaIn6032 = flattenMatrixArgs(ffaIn6032)),
    hasFormulaError(ffaIn6028, ffaIn6029, ffaIn6030, ffaIn6031, ffaIn6032)
      ? valueError
      : ffaIn6028 === 0
        ? -ffaIn6030 * ffaIn6029 - ffaIn6031
        : (((1 - (1 + ffaIn6028) ** +ffaIn6029) / ffaIn6028) *
            ffaIn6030 *
            (1 + ffaIn6028 * ffaIn6032) -
            ffaIn6031) /
          (1 + ffaIn6028) ** +ffaIn6029
  );
}
export function G0e(ffaIn9507: any, ffaIn9508: any, ffaIn9509: any) {
  return (
    (ffaIn9507 = flattenMatrixArgs(ffaIn9507)),
    (ffaIn9508 = flattenMatrixArgs(ffaIn9508)),
    (ffaIn9509 = flattenMatrixArgs(ffaIn9509)),
    hasFormulaError(ffaIn9507, ffaIn9508, ffaIn9509)
      ? valueError
      : ffaIn9507 === 0 || ffaIn9508 === 0
        ? numError
        : (ffaIn9509 / ffaIn9508) ** (1 / ffaIn9507) - 1
  );
}
export function K0e(ffaIn10231: any, ffaIn10232: any, ffaIn10233: any) {
  return (
    (ffaIn10231 = flattenMatrixArgs(ffaIn10231)),
    (ffaIn10232 = flattenMatrixArgs(ffaIn10232)),
    (ffaIn10233 = flattenMatrixArgs(ffaIn10233)),
    hasFormulaError(ffaIn10231, ffaIn10232, ffaIn10233)
      ? valueError
      : ffaIn10233 === 0
        ? numError
        : (ffaIn10231 - ffaIn10232) / ffaIn10233
  );
}
export function q0e(
  ffaIn6761: any,
  ffaIn6762: any,
  ffaIn6763: any,
  ffaIn6764: any,
) {
  return (
    (ffaIn6761 = flattenMatrixArgs(ffaIn6761)),
    (ffaIn6762 = flattenMatrixArgs(ffaIn6762)),
    (ffaIn6763 = flattenMatrixArgs(ffaIn6763)),
    (ffaIn6764 = flattenMatrixArgs(ffaIn6764)),
    hasFormulaError(ffaIn6761, ffaIn6762, ffaIn6763, ffaIn6764)
      ? valueError
      : ffaIn6763 === 0 || ffaIn6764 < 1 || ffaIn6764 > ffaIn6763
        ? numError
        : ((ffaIn6764 = parseInt(ffaIn6764, 10)),
          ((ffaIn6761 - ffaIn6762) * (ffaIn6763 - ffaIn6764 + 1) * 2) /
            (ffaIn6763 * (ffaIn6763 + 1)))
  );
}
export function J0e(ffaIn7347: any, ffaIn7348: any, ffaIn7349: any) {
  return (
    (ffaIn7347 = coerceFormulaDate(ffaIn7347)),
    (ffaIn7348 = coerceFormulaDate(ffaIn7348)),
    (ffaIn7349 = flattenMatrixArgs(ffaIn7349)),
    hasFormulaError(ffaIn7347, ffaIn7348, ffaIn7349)
      ? valueError
      : ffaIn7349 <= 0 ||
          ffaIn7347 > ffaIn7348 ||
          ffaIn7348 - ffaIn7347 > 31536000000
        ? numError
        : (365 * ffaIn7349) /
          (360 - ffaIn7349 * days360(ffaIn7347, ffaIn7348, false))
  );
}
export function Y0e(ffaIn7350: any, ffaIn7351: any, ffaIn7352: any) {
  return (
    (ffaIn7350 = coerceFormulaDate(ffaIn7350)),
    (ffaIn7351 = coerceFormulaDate(ffaIn7351)),
    (ffaIn7352 = flattenMatrixArgs(ffaIn7352)),
    hasFormulaError(ffaIn7350, ffaIn7351, ffaIn7352)
      ? valueError
      : ffaIn7352 <= 0 ||
          ffaIn7350 > ffaIn7351 ||
          ffaIn7351 - ffaIn7350 > 31536000000
        ? numError
        : 100 * (1 - (ffaIn7352 * days360(ffaIn7350, ffaIn7351, false)) / 360)
  );
}
export function X0e(ffaIn7314: any, ffaIn7315: any, ffaIn7316: any) {
  return (
    (ffaIn7314 = coerceFormulaDate(ffaIn7314)),
    (ffaIn7315 = coerceFormulaDate(ffaIn7315)),
    (ffaIn7316 = flattenMatrixArgs(ffaIn7316)),
    hasFormulaError(ffaIn7314, ffaIn7315, ffaIn7316)
      ? valueError
      : ffaIn7316 <= 0 ||
          ffaIn7314 > ffaIn7315 ||
          ffaIn7315 - ffaIn7314 > 31536000000
        ? numError
        : ((100 - ffaIn7316) * 360) /
          (ffaIn7316 * days360(ffaIn7314, ffaIn7315, false))
  );
}
export function Q0e(ffaIn7895: any, ffaIn7896: any, ffaIn7897: any) {
  if (
    ((ffaIn7895 = flattenMatrixArgs(ffaIn7895)),
    (ffaIn7896 = ensureFlatArgs(flattenFormulaArgs(ffaIn7896))),
    (ffaIn7897 = uZe(flattenFormulaArgs(ffaIn7897))),
    hasFormulaError(ffaIn7895, ffaIn7896, ffaIn7897))
  )
    return valueError;
  let ffaBind18378 = 0;
  for (let ffaBind22304 = 0; ffaBind22304 < ffaIn7896.length; ffaBind22304++)
    ffaBind18378 +=
      ffaIn7896[ffaBind22304] /
      (1 + ffaIn7895) **
        (dateDiffDays(ffaIn7897[ffaBind22304], ffaIn7897[0]) / 365);
  return ffaBind18378;
}
