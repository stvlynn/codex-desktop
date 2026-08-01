// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: complex trig/log/exp/sqrt helpers (legacy H1e..e0e / 891/894).
// Stage-3 wave-132.

import { hasFormulaError } from "../formula-token-utils";
import {
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
} from "../formula-stats";
import { complexReal, complexImag } from "./formula-complex-impl";
import { formatComplexPair, complexDivide } from "./complex-divide-impl";
import { complexAbs, complexArg } from "../formula-eng-mids";

void numError;

export function H1e(props: any) {
  let fcxBind19008 = complexReal(props),
    fcxBind19009 = $4(props);
  if (hasFormulaError(fcxBind19008, fcxBind19009)) return valueError;
  let fcxBind19010 = props.substring(props.length - 1);
  return (
    (fcxBind19010 =
      fcxBind19010 === "i" || fcxBind19010 === "j" ? fcxBind19010 : "i"),
    fcxBind19009 === 0
      ? props
      : formatComplexPair(fcxBind19008, -fcxBind19009, fcxBind19010)
  );
}
export function workbookHelper891(fcxIn5925: any) {
  let fcxBind15926 = complexReal(fcxIn5925),
    fcxBind15927 = $4(fcxIn5925);
  if (hasFormulaError(fcxBind15926, fcxBind15927)) return valueError;
  let fcxBind15928 = fcxIn5925.substring(fcxIn5925.length - 1);
  return (
    (fcxBind15928 =
      fcxBind15928 === "i" || fcxBind15928 === "j" ? fcxBind15928 : "i"),
    formatComplexPair(
      (Math.cos(fcxBind15926) *
        (Math.exp(fcxBind15927) + Math.exp(-fcxBind15927))) /
        2,
      (-Math.sin(fcxBind15926) *
        (Math.exp(fcxBind15927) - Math.exp(-fcxBind15927))) /
        2,
      fcxBind15928,
    )
  );
}
export function U1e(props: any) {
  let fcxBind15929 = complexReal(props),
    fcxBind15930 = $4(props);
  if (hasFormulaError(fcxBind15929, fcxBind15930)) return valueError;
  let fcxBind15931 = props.substring(props.length - 1);
  return (
    (fcxBind15931 =
      fcxBind15931 === "i" || fcxBind15931 === "j" ? fcxBind15931 : "i"),
    formatComplexPair(
      (Math.cos(fcxBind15930) *
        (Math.exp(fcxBind15929) + Math.exp(-fcxBind15929))) /
        2,
      (Math.sin(fcxBind15930) *
        (Math.exp(fcxBind15929) - Math.exp(-fcxBind15929))) /
        2,
      fcxBind15931,
    )
  );
}
export function W1e(fcxIn13196: any) {
  return hasFormulaError(complexReal(fcxIn13196), $4(fcxIn13196))
    ? valueError
    : complexDivide(
        workbookHelper891(fcxIn13196),
        workbookHelper894(fcxIn13196),
      );
}
export function G1e(props: any) {
  let fcxBind18002 = complexReal(props),
    fcxBind18003 = $4(props);
  if (hasFormulaError(fcxBind18002, fcxBind18003)) return valueError;
  let fcxBind18004 = props.substring(props.length - 1);
  fcxBind18004 =
    fcxBind18004 === "i" || fcxBind18004 === "j" ? fcxBind18004 : "i";
  let fcxBind18005 = Math.exp(fcxBind18002);
  return formatComplexPair(
    fcxBind18005 * Math.cos(fcxBind18003),
    fcxBind18005 * Math.sin(fcxBind18003),
    fcxBind18004,
  );
}
export function K1e(props: any) {
  let fcxBind17695 = complexReal(props),
    fcxBind17696 = $4(props);
  if (hasFormulaError(fcxBind17695, fcxBind17696)) return valueError;
  let fcxBind17697 = props.substring(props.length - 1);
  return (
    (fcxBind17697 =
      fcxBind17697 === "i" || fcxBind17697 === "j" ? fcxBind17697 : "i"),
    formatComplexPair(
      Math.log(
        Math.sqrt(fcxBind17695 * fcxBind17695 + fcxBind17696 * fcxBind17696),
      ),
      Math.atan(fcxBind17696 / fcxBind17695),
      fcxBind17697,
    )
  );
}
export function J1e(props: any) {
  let fcxBind16328 = complexReal(props),
    fcxBind16329 = $4(props);
  if (hasFormulaError(fcxBind16328, fcxBind16329)) return valueError;
  let fcxBind16330 = props.substring(props.length - 1);
  return (
    (fcxBind16330 =
      fcxBind16330 === "i" || fcxBind16330 === "j" ? fcxBind16330 : "i"),
    formatComplexPair(
      Math.log(
        Math.sqrt(fcxBind16328 * fcxBind16328 + fcxBind16329 * fcxBind16329),
      ) / Math.log(2),
      Math.atan(fcxBind16329 / fcxBind16328) / Math.log(2),
      fcxBind16330,
    )
  );
}
export function Z1e(fcxIn11876: any) {
  return fcxIn11876 === true ||
    fcxIn11876 === false ||
    hasFormulaError(complexReal(fcxIn11876), $4(fcxIn11876))
    ? valueError
    : complexDivide("1", workbookHelper891(fcxIn11876));
}
export function Q1e(fcxIn13278: any) {
  return hasFormulaError(complexReal(fcxIn13278), $4(fcxIn13278))
    ? valueError
    : complexDivide("1", U1e(fcxIn13278));
}
export function workbookHelper894(fcxIn5934: any) {
  let fcxBind15948 = complexReal(fcxIn5934),
    fcxBind15949 = $4(fcxIn5934);
  if (hasFormulaError(fcxBind15948, fcxBind15949)) return valueError;
  let fcxBind15950 = fcxIn5934.substring(fcxIn5934.length - 1);
  return (
    (fcxBind15950 =
      fcxBind15950 === "i" || fcxBind15950 === "j" ? fcxBind15950 : "i"),
    formatComplexPair(
      (Math.sin(fcxBind15948) *
        (Math.exp(fcxBind15949) + Math.exp(-fcxBind15949))) /
        2,
      (Math.cos(fcxBind15948) *
        (Math.exp(fcxBind15949) - Math.exp(-fcxBind15949))) /
        2,
      fcxBind15950,
    )
  );
}
export function e0e(fcxIn7429: any) {
  if (hasFormulaError(complexReal(fcxIn7429), $4(fcxIn7429))) return valueError;
  let fcxBind17898 = fcxIn7429.substring(fcxIn7429.length - 1);
  fcxBind17898 =
    fcxBind17898 === "i" || fcxBind17898 === "j" ? fcxBind17898 : "i";
  let fcxBind17899 = Math.sqrt(complexAbs(fcxIn7429)),
    fcxBind17900 = complexArg(fcxIn7429);
  return formatComplexPair(
    fcxBind17899 * Math.cos(fcxBind17900 / 2),
    fcxBind17899 * Math.sin(fcxBind17900 / 2),
    fcxBind17898,
  );
}

export const complexConjugate = H1e;
export const complexCosh = workbookHelper891;
export const complexCos = U1e;
export const complexTan = W1e;
export const complexExp = G1e;
export const complexLn = K1e;
export const complexLog2 = J1e;
export const complexSec = Z1e;
export const complexCsc = Q1e;
export const complexSinhAlt = workbookHelper894;
export const complexSqrt = e0e;
