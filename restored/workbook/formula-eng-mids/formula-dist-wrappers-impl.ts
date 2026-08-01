// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: PROB + distribution wrappers (legacy d4e/z4e/h3e…Z3e).
// Stage-3 wave-134.

import {
  workbookHelper904,
  workbookHelper905,
  workbookHelper906,
  workbookHelper908,
  workbookHelper909,
  ERR_NUM,
  ERR_VALUE,
} from "../formula-value-coerce";
import { workbookHelper912 } from "../formula-skew";
import { flattenSingleCellArg as workbookHelper914 } from "../formula-averageif";
import {
  isFormulaErrorToken,
  formulaErrorFromMessage,
} from "../formula-average-a";
import { modeArgs, OQe } from "../formula-scalar-funcs";
import { workbookHelper917 } from "./formula-eng-mids-impl";
import {
  workbookBinding1849,
  workbookBinding1855,
  workbookBinding1862,
  workbookBinding1868,
  M2e,
} from "../formula-stats";

/** Legacy y6e — PROB sum tolerance. */
export const PROB_SUM_EPS = 1e-12;

export function d4e(fdwIn5609: any) {
  let fdwBind15446 = workbookHelper914(fdwIn5609),
    fdwBind15447 = 0;
  for (let fdwBind18338 of fdwBind15446) {
    if (isFormulaErrorToken(fdwBind18338)) return fdwBind18338;
    if (fdwBind18338 instanceof Error)
      return formulaErrorFromMessage(fdwBind18338);
    let fdwBind18843 = workbookHelper912(fdwBind18338);
    if (typeof fdwBind18843 != "number")
      return fdwBind18843 === null ? ERR_VALUE : fdwBind18843;
    if (fdwBind18843 < 0 || fdwBind18843 > 1) return ERR_NUM;
    fdwBind15447 += fdwBind18843;
  }
  return Number.isFinite(fdwBind15447) &&
    Math.abs(fdwBind15447 - 1) <= PROB_SUM_EPS
    ? null
    : ERR_NUM;
}
export function z4e(
  fdwIn13552: any,
  fdwIn13553: any,
  fdwIn13554: any,
  fdwIn13555: any,
) {
  return d4e(fdwIn13553) || OQe(fdwIn13552, fdwIn13553, fdwIn13554, fdwIn13555);
}
export function h3e(
  fdwIn7898: any,
  fdwIn7899: any,
  fdwIn7900: any,
  fdwIn7901: any,
) {
  let fdwBind18379 = workbookHelper905(fdwIn7898);
  if (typeof fdwBind18379 != "number") return fdwBind18379;
  let fdwBind18380 = workbookHelper906(fdwIn7899);
  if (typeof fdwBind18380 != "number") return fdwBind18380;
  let fdwBind18381 = workbookHelper906(fdwIn7900);
  return typeof fdwBind18381 == "number"
    ? modeArgs.DIST(fdwBind18379, fdwBind18380, fdwBind18381, fdwIn7901)
    : fdwBind18381;
}
export function g3e(fdwIn7088: any, fdwIn7089: any, fdwIn7090: any) {
  let fdwBind17429 = workbookHelper908(fdwIn7088, {
    inclusiveZero: false,
    inclusiveOne: false,
  });
  if (typeof fdwBind17429 != "number") return fdwBind17429;
  let fdwBind17430 = workbookHelper906(fdwIn7089);
  if (typeof fdwBind17430 != "number") return fdwBind17430;
  let fdwBind17431 = workbookHelper906(fdwIn7090);
  return typeof fdwBind17431 == "number"
    ? modeArgs.INV(fdwBind17429, fdwBind17430, fdwBind17431)
    : fdwBind17431;
}
export function C3e(fdwIn5596: any, fdwIn5597: any, fdwIn5598: any) {
  let fdwBind15423 = workbookHelper917(fdwIn5596);
  if (isFormulaErrorToken(fdwBind15423)) return fdwBind15423;
  if (fdwBind15423.length < 2) return ERR_NUM;
  let fdwBind15424 = workbookHelper904(fdwIn5597);
  if (typeof fdwBind15424 != "number") return fdwBind15424;
  let fdwBind15425 = Math.min(...fdwBind15423),
    fdwBind15426 = Math.max(...fdwBind15423);
  return !Number.isFinite(fdwBind15425) ||
    !Number.isFinite(fdwBind15426) ||
    fdwBind15425 === fdwBind15426 ||
    fdwBind15424 <= fdwBind15425 ||
    fdwBind15424 >= fdwBind15426
    ? ERR_NUM
    : workbookBinding1862.EXC(fdwBind15423, fdwBind15424, fdwIn5598);
}
export function H3e(
  fdwIn7902: any,
  fdwIn7903: any,
  fdwIn7904: any,
  fdwIn7905: any,
) {
  let fdwBind18382 = workbookHelper905(fdwIn7902);
  if (typeof fdwBind18382 != "number") return fdwBind18382;
  let fdwBind18383 = workbookHelper906(fdwIn7903);
  if (typeof fdwBind18383 != "number") return fdwBind18383;
  let fdwBind18384 = workbookHelper906(fdwIn7904);
  return typeof fdwBind18384 == "number"
    ? workbookBinding1868.DIST(
        fdwBind18382,
        fdwBind18383,
        fdwBind18384,
        fdwIn7905,
      )
    : fdwBind18384;
}
export function U3e(
  fdwIn13082: any,
  fdwIn13083: any,
  fdwIn13084: any,
  fdwIn13085: any,
  fdwIn13086: any,
  fdwIn13087: any,
) {
  return workbookBinding1849.DIST(
    fdwIn13082,
    fdwIn13083,
    fdwIn13084,
    fdwIn13085,
    fdwIn13086,
    fdwIn13087,
  );
}
export function Y3e(
  fdwIn7906: any,
  fdwIn7907: any,
  fdwIn7908: any,
  fdwIn7909: any,
) {
  let fdwBind18385 = workbookHelper905(fdwIn7906);
  if (typeof fdwBind18385 != "number") return fdwBind18385;
  let fdwBind18386 = workbookHelper909(fdwIn7907);
  if (typeof fdwBind18386 != "number") return fdwBind18386;
  let fdwBind18387 = workbookHelper909(fdwIn7908);
  return typeof fdwBind18387 == "number"
    ? workbookBinding1855.DIST(
        fdwBind18385,
        fdwBind18386,
        fdwBind18387,
        fdwIn7909,
      )
    : fdwBind18387;
}
export function X3e(fdwIn8204: any, fdwIn8205: any, fdwIn8206: any) {
  let fdwBind18707 = workbookHelper905(fdwIn8204);
  if (typeof fdwBind18707 != "number") return fdwBind18707;
  let fdwBind18708 = workbookHelper909(fdwIn8205);
  if (typeof fdwBind18708 != "number") return fdwBind18708;
  let fdwBind18709 = workbookHelper909(fdwIn8206);
  return typeof fdwBind18709 == "number"
    ? M2e(fdwBind18707, fdwBind18708, fdwBind18709)
    : fdwBind18709;
}
export function Z3e(fdwIn7091: any, fdwIn7092: any, fdwIn7093: any) {
  let fdwBind17432 = workbookHelper908(fdwIn7091, {
    inclusiveZero: false,
    inclusiveOne: false,
  });
  if (typeof fdwBind17432 != "number") return fdwBind17432;
  let fdwBind17433 = workbookHelper909(fdwIn7092);
  if (typeof fdwBind17433 != "number") return fdwBind17433;
  let fdwBind17434 = workbookHelper909(fdwIn7093);
  return typeof fdwBind17434 == "number"
    ? workbookBinding1855.INV(fdwBind17432, fdwBind17433, fdwBind17434)
    : fdwBind17434;
}
