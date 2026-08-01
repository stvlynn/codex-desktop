// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: database aggregate formulas (legacy l0e..y0e).
// Stage-3 wave-130.

import {
  eachFormulaArg,
  chooseFormulaValue,
  formulaValueEquals,
} from "../formula-token-utils";
import { matchCriteriaColumns } from "../formula-criteria-match";
import { collectNonEmptyArgs } from "../formula-eng-mids";
import {
  workbookBinding1834 as div0Error,
  workbookBinding1835 as valueError,
  workbookBinding1838 as numError,
  workbookBinding1866 as sampleStats,
  workbookBinding1867 as populationStats,
} from "../formula-stats";
import { isOddInteger, isEvenInteger } from "../formula-scalar-funcs";

export function daverage(fdsIn6541: any, fdsIn6542: any, fdsIn6543: any) {
  if (isNaN(fdsIn6542) && typeof fdsIn6542 != "string") return valueError;
  let fdsBind16782 = matchCriteriaColumns(fdsIn6541, fdsIn6543),
    fdsBind16783 = [];
  fdsBind16783 = chooseFormulaValue(
    typeof fdsIn6542 == "string"
      ? fdsIn6541[formulaValueEquals(fdsIn6541, fdsIn6542)]
      : fdsIn6541[fdsIn6542],
  );
  let fdsBind16784 = 0;
  return (
    eachFormulaArg(fdsBind16782, (fdsIn15859) => {
      fdsBind16784 += fdsBind16783[fdsIn15859];
    }),
    fdsBind16782.length === 0 ? div0Error : fdsBind16784 / fdsBind16782.length
  );
}
export function dodd(fdsIn7046: any, fdsIn7047: any, fdsIn7048: any) {
  if (isNaN(fdsIn7047) && typeof fdsIn7047 != "string") return valueError;
  let fdsBind17391 = matchCriteriaColumns(fdsIn7046, fdsIn7048),
    fdsBind17392 = [];
  fdsBind17392 = chooseFormulaValue(
    typeof fdsIn7047 == "string"
      ? fdsIn7046[formulaValueEquals(fdsIn7046, fdsIn7047)]
      : fdsIn7046[fdsIn7047],
  );
  let fdsBind17393 = [];
  return (
    eachFormulaArg(fdsBind17391, (fdsIn15800) => {
      fdsBind17393.push(fdsBind17392[fdsIn15800]);
    }),
    isOddInteger(fdsBind17393)
  );
}
export function deven(fdsIn7049: any, fdsIn7050: any, fdsIn7051: any) {
  if (isNaN(fdsIn7050) && typeof fdsIn7050 != "string") return valueError;
  let fdsBind17394 = matchCriteriaColumns(fdsIn7049, fdsIn7051),
    fdsBind17395 = [];
  fdsBind17395 = chooseFormulaValue(
    typeof fdsIn7050 == "string"
      ? fdsIn7049[formulaValueEquals(fdsIn7049, fdsIn7050)]
      : fdsIn7049[fdsIn7050],
  );
  let fdsBind17396 = [];
  return (
    eachFormulaArg(fdsBind17394, (fdsIn15801) => {
      fdsBind17396.push(fdsBind17395[fdsIn15801]);
    }),
    isEvenInteger(fdsBind17396)
  );
}
export function dget(fdsIn7403: any, fdsIn7404: any, fdsIn7405: any) {
  if (isNaN(fdsIn7404) && typeof fdsIn7404 != "string") return valueError;
  let fdsBind17844 = matchCriteriaColumns(fdsIn7403, fdsIn7405),
    fdsBind17845 = [];
  return (
    (fdsBind17845 = chooseFormulaValue(
      typeof fdsIn7404 == "string"
        ? fdsIn7403[formulaValueEquals(fdsIn7403, fdsIn7404)]
        : fdsIn7403[fdsIn7404],
    )),
    fdsBind17844.length === 0
      ? valueError
      : fdsBind17844.length > 1
        ? numError
        : fdsBind17845[fdsBind17844[0]]
  );
}
export function dmax(fdsIn6829: any, fdsIn6830: any, fdsIn6831: any) {
  if (isNaN(fdsIn6830) && typeof fdsIn6830 != "string") return valueError;
  let fdsBind17150 = matchCriteriaColumns(fdsIn6829, fdsIn6831),
    fdsBind17151 = [];
  fdsBind17151 = chooseFormulaValue(
    typeof fdsIn6830 == "string"
      ? fdsIn6829[formulaValueEquals(fdsIn6829, fdsIn6830)]
      : fdsIn6829[fdsIn6830],
  );
  let fdsBind17152 = fdsBind17151[fdsBind17150[0]];
  return (
    eachFormulaArg(fdsBind17150, (fdsIn15267) => {
      fdsBind17152 < fdsBind17151[fdsIn15267] &&
        (fdsBind17152 = fdsBind17151[fdsIn15267]);
    }),
    fdsBind17152
  );
}
export function dmin(fdsIn6832: any, fdsIn6833: any, fdsIn6834: any) {
  if (isNaN(fdsIn6833) && typeof fdsIn6833 != "string") return valueError;
  let fdsBind17153 = matchCriteriaColumns(fdsIn6832, fdsIn6834),
    fdsBind17154 = [];
  fdsBind17154 = chooseFormulaValue(
    typeof fdsIn6833 == "string"
      ? fdsIn6832[formulaValueEquals(fdsIn6832, fdsIn6833)]
      : fdsIn6832[fdsIn6833],
  );
  let fdsBind17155 = fdsBind17154[fdsBind17153[0]];
  return (
    eachFormulaArg(fdsBind17153, (fdsIn15268) => {
      fdsBind17155 > fdsBind17154[fdsIn15268] &&
        (fdsBind17155 = fdsBind17154[fdsIn15268]);
    }),
    fdsBind17155
  );
}
export function dstdev(fdsIn6641: any, fdsIn6642: any, fdsIn6643: any) {
  if (isNaN(fdsIn6642) && typeof fdsIn6642 != "string") return valueError;
  let fdsBind16935 = matchCriteriaColumns(fdsIn6641, fdsIn6643),
    fdsBind16936 = [];
  fdsBind16936 = chooseFormulaValue(
    typeof fdsIn6642 == "string"
      ? fdsIn6641[formulaValueEquals(fdsIn6641, fdsIn6642)]
      : fdsIn6641[fdsIn6642],
  );
  let fdsBind16937 = [];
  return (
    eachFormulaArg(fdsBind16935, (fdsIn15802) => {
      fdsBind16937.push(fdsBind16936[fdsIn15802]);
    }),
    (fdsBind16937 = collectNonEmptyArgs(fdsBind16937)),
    sampleStats.S(fdsBind16937)
  );
}
export function dvar(fdsIn6644: any, fdsIn6645: any, fdsIn6646: any) {
  if (isNaN(fdsIn6645) && typeof fdsIn6645 != "string") return valueError;
  let fdsBind16938 = matchCriteriaColumns(fdsIn6644, fdsIn6646),
    fdsBind16939 = [];
  fdsBind16939 = chooseFormulaValue(
    typeof fdsIn6645 == "string"
      ? fdsIn6644[formulaValueEquals(fdsIn6644, fdsIn6645)]
      : fdsIn6644[fdsIn6645],
  );
  let fdsBind16940 = [];
  return (
    eachFormulaArg(fdsBind16938, (fdsIn15803) => {
      fdsBind16940.push(fdsBind16939[fdsIn15803]);
    }),
    (fdsBind16940 = collectNonEmptyArgs(fdsBind16940)),
    sampleStats.P(fdsBind16940)
  );
}
export function dstdevp(fdsIn6994: any, fdsIn6995: any, fdsIn6996: any) {
  if (isNaN(fdsIn6995) && typeof fdsIn6995 != "string") return valueError;
  let fdsBind17347 = matchCriteriaColumns(fdsIn6994, fdsIn6996),
    fdsBind17348 = [];
  fdsBind17348 = chooseFormulaValue(
    typeof fdsIn6995 == "string"
      ? fdsIn6994[formulaValueEquals(fdsIn6994, fdsIn6995)]
      : fdsIn6994[fdsIn6995],
  );
  let fdsBind17349 = [];
  return (
    eachFormulaArg(fdsBind17347, (fdsIn15804) => {
      fdsBind17349.push(fdsBind17348[fdsIn15804]);
    }),
    populationStats.S(fdsBind17349)
  );
}
export function dvarp(fdsIn6997: any, fdsIn6998: any, fdsIn6999: any) {
  if (isNaN(fdsIn6998) && typeof fdsIn6998 != "string") return valueError;
  let fdsBind17350 = matchCriteriaColumns(fdsIn6997, fdsIn6999),
    fdsBind17351 = [];
  fdsBind17351 = chooseFormulaValue(
    typeof fdsIn6998 == "string"
      ? fdsIn6997[formulaValueEquals(fdsIn6997, fdsIn6998)]
      : fdsIn6997[fdsIn6998],
  );
  let fdsBind17352 = [];
  return (
    eachFormulaArg(fdsBind17350, (fdsIn15805) => {
      fdsBind17352.push(fdsBind17351[fdsIn15805]);
    }),
    populationStats.P(fdsBind17352)
  );
}

export const l0e = daverage;
export const u0e = dodd;
export const d0e = deven;
export const f0e = dget;
export const p0e = dmax;
export const m0e = dmin;
export const g0e = dstdev;
export const _0e = dvar;
export const v0e = dstdevp;
export const y0e = dvarp;
