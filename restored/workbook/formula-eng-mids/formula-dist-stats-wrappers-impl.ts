// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: dist/stats formula wrappers (legacy _3e/v3e/s3e… + stubs).
// Stage-3 wave-142.

import { isFormulaErrorToken } from "../formula-average-a";
import {
  workbookBinding1850,
  workbookBinding1851,
  workbookBinding1852,
  workbookBinding1853,
  workbookBinding1854,
  workbookBinding1857,
  workbookBinding1858,
  workbookBinding1860,
  workbookBinding1861,
  workbookBinding1862,
  workbookBinding1869,
  workbookBinding1872,
  workbookBinding1873,
} from "../formula-stats";
import {
  aQe,
  iQe,
  geomeanArgs,
  modeArgs,
  medianArgs,
  EQe,
  dQe,
  DQe,
  arabicNumeral,
  romanNumeral,
} from "../formula-scalar-funcs";
import { g4e } from "../formula-averageif";
import { coerceCriteriaMatrix as workbookHelper922 } from "../formula-criteria-shape";
import { workbookHelper911 } from "./formula-series-utils-impl";
import { workbookHelper917 } from "./formula-eng-mids-impl";

export function J4e(femIn14838: any, femIn14839: any) {
  return aQe(workbookHelper922(femIn14838), workbookHelper922(femIn14839));
}
export function Y4e(femIn15660: any) {
  return iQe(femIn15660);
}
export function i3e(femIn14979: any, femIn14980: any, femIn14981: any) {
  return g4e(femIn14979, femIn14980, femIn14981);
}
export function s3e(femIn14741: any, femIn14742: any, femIn14743: any) {
  return workbookBinding1850.INV(femIn14741, femIn14742, femIn14743);
}
export function c3e(femIn14643: any, femIn14644: any, femIn14645: any) {
  return workbookBinding1852.NORM(femIn14643, femIn14644, femIn14645);
}
export function l3e(femIn14919: any, femIn14920: any, femIn14921: any) {
  return workbookBinding1852.T(femIn14919, femIn14920, femIn14921);
}
export function u3e(femIn15203: any, femIn15204: any) {
  return workbookBinding1851.TEST(femIn15203, femIn15204);
}
export function f3e(femIn15321: any, femIn15322: any) {
  return workbookBinding1853.P(femIn15321, femIn15322);
}
export function p3e(femIn15323: any, femIn15324: any) {
  return workbookBinding1853.S(femIn15323, femIn15324);
}
export function m3e(femIn14646: any, femIn14647: any, femIn14648: any) {
  return workbookBinding1854.DIST(femIn14646, femIn14647, femIn14648);
}
export function _3e(femIn13695: any, femIn13696: any, ...femIn13697: any[]) {
  return workbookHelper911(
    workbookBinding1858.MULT,
    femIn13695,
    femIn13696,
    ...femIn13697,
  );
}
export function v3e(femIn13698: any, femIn13699: any, ...femIn13700: any[]) {
  return workbookHelper911(
    workbookBinding1858.SNGL,
    femIn13698,
    femIn13699,
    ...femIn13700,
  );
}
export function b3e(femIn14744: any, femIn14745: any, femIn14746: any) {
  return workbookBinding1860.INV(femIn14744, femIn14745, femIn14746);
}
export function x3e(femIn12855: any, femIn12856: any) {
  let femBind22512 = workbookHelper917(femIn12855);
  return isFormulaErrorToken(femBind22512)
    ? femBind22512
    : workbookBinding1861.EXC(femBind22512, femIn12856);
}
export function S3e(femIn12857: any, femIn12858: any) {
  let femBind22513 = workbookHelper917(femIn12857);
  return isFormulaErrorToken(femBind22513)
    ? femBind22513
    : workbookBinding1861.INC(femBind22513, femIn12858);
}
export function w3e(femIn14747: any, femIn14748: any, femIn14749: any) {
  return workbookBinding1862.INC(femIn14747, femIn14748, femIn14749);
}
export function t6e(femIn14753: any, femIn14754: any, femIn14755: any) {
  return workbookBinding1857.INV(femIn14753, femIn14754, femIn14755);
}
export function r6e(femIn14982: any, femIn14983: any) {
  return workbookBinding1860.S.DIST(femIn14982, femIn14983);
}
export function i6e(femIn15509: any) {
  return workbookBinding1860.S.INV(femIn15509);
}
export function o6e(femIn14649: any, femIn14650: any, femIn14651: any) {
  return workbookBinding1869.TEST(femIn14649, femIn14650, femIn14651);
}
export function s6e(femIn15325: any) {
  return geomeanArgs.PRECISE(femIn15325);
}
export function c6e(femIn15364: any, femIn15365: any) {
  return EQe(femIn15364, femIn15365);
}
export function u6e(femIn15756: any) {
  return modeArgs(femIn15756);
}
export function f6e(femIn15661: any) {
  return dQe(femIn15661);
}
export function p6e(femIn15662: any) {
  return DQe(femIn15662);
}
export function m6e(femIn15136: any, femIn15137: any, femIn15138: any) {
  return medianArgs(femIn15136, femIn15137, femIn15138);
}
export function A6e(femIn9835: any, femIn9836: any, femIn9837: any) {
  throw Error(
    `CONFIDENCE is not implemented. alpha=${String(femIn9835)}, standardDev=${String(femIn9836)}, size=${String(femIn9837)}`,
  );
}
export function F6e(femIn15510: any, femIn15511: any) {
  return arabicNumeral(femIn15510, femIn15511);
}
export function R6e(femIn15512: any, femIn15513: any) {
  return romanNumeral(femIn15512, femIn15513);
}
export function q6e(femIn10134: any, femIn10135: any, femIn10136: any) {
  throw Error(
    `POISSON is not implemented. x=${String(femIn10134)}, mean=${String(femIn10135)}, cumulative=${String(femIn10136)}`,
  );
}
export function J6e(femIn15139: any, femIn15140: any, femIn15141: any) {
  return workbookBinding1872(femIn15139, femIn15140, femIn15141);
}
export function Q6e(femIn15142: any, femIn15143: any, femIn15144: any) {
  return medianArgs(femIn15142, femIn15143, femIn15144);
}
export function r8e(femIn15235: any, femIn15236: any) {
  return workbookBinding1861.INC(femIn15235, femIn15236);
}
export function i8e(femIn15017: any, femIn15018: any, femIn15019: any) {
  return w3e(femIn15017, femIn15018, femIn15019);
}
export function a8e(femIn9804: any, femIn9805: any, ...femIn9806: any[]) {
  throw Error(
    `MODE is not implemented. number1=${String(femIn9804)}, number2=${String(femIn9805)}, rest.length=${femIn9806.length}`,
  );
}
export function o8e(femIn15516: any, femIn15517: any) {
  return workbookBinding1873(femIn15516, femIn15517);
}
export function l8e(femIn9241: any, femIn9242: any, ...femIn9243: any[]) {
  throw Error(
    `CUBEVALUE is not implemented. connection=${String(femIn9241)}, memberExpression1=${String(femIn9242)}, rest.length=${femIn9243.length}`,
  );
}
export function u8e(femIn9445: any, femIn9446: any, femIn9447: any) {
  throw Error(
    `CUBEMEMBER is not implemented. connection=${String(femIn9445)}, memberExpression=${String(femIn9446)}, caption=${String(femIn9447)}`,
  );
}
export function d8e(femIn9155: any, femIn9156: any, femIn9157: any) {
  throw Error(
    `CUBEMEMBERPROPERTY is not implemented. connection=${String(femIn9155)}, memberExpression=${String(femIn9156)}, property=${String(femIn9157)}`,
  );
}
export function h8e(femIn11768: any) {
  throw Error(
    `CUBESETCOUNT is not implemented. setParam=${String(femIn11768)}`,
  );
}
export function bot(femIn12037: any) {
  throw Error(`SHEETS is not implemented. reference=${String(femIn12037)}`);
}
export function xot(femIn11881: any) {
  throw Error(`ISFORMULA is not implemented. reference=${String(femIn11881)}`);
}
export function Sot(femIn11939: any) {
  throw Error(`ISOMITTED is not implemented. argument=${String(femIn11939)}`);
}
export function Uot(femIn10111: any, ...femIn10112: any[]) {
  throw Error(
    `LAMBDA is not implemented. parameterOrCalculation=${String(femIn10111)}, rest.length=${femIn10112.length}`,
  );
}
export function Wot(femIn9753: any, femIn9754: any, femIn9755: any) {
  throw Error(
    `MAKEARRAY is not implemented. rows=${String(femIn9753)}, columns=${String(femIn9754)}, functionParam=${String(femIn9755)}`,
  );
}
export function Got(femIn9692: any, femIn9693: any, ...femIn9694: any[]) {
  throw Error(
    `MAP is not implemented. array=${String(femIn9692)}, lambdaOrArray2=${String(femIn9693)}, rest.length=${femIn9694.length}`,
  );
}
export function Kot(femIn9655: any, femIn9656: any, femIn9657: any) {
  throw Error(
    `REDUCE is not implemented. initialValue=${String(femIn9655)}, array=${String(femIn9656)}, functionParam=${String(femIn9657)}`,
  );
}
export function qot(femIn9725: any, femIn9726: any, femIn9727: any) {
  throw Error(
    `SCAN is not implemented. initialValue=${String(femIn9725)}, array=${String(femIn9726)}, functionParam=${String(femIn9727)}`,
  );
}
export function cst(femIn12094: any) {
  throw Error(`AREAS is not implemented. reference=${String(femIn12094)}`);
}
export function jst(femIn10818: any, femIn10819: any) {
  throw Error(
    `INDIRECT is not implemented. refText=${String(femIn10818)}, a1=${String(femIn10819)}`,
  );
}
export function Pst(femIn10344: any, femIn10345: any) {
  throw Error(
    `HYPERLINK is not implemented. linkLocation=${String(femIn10344)}, friendlyName=${String(femIn10345)}`,
  );
}
export function Fst(femIn11769: any) {
  throw Error(
    `FORMULATEXT is not implemented. reference=${String(femIn11769)}`,
  );
}
export function Ist(femIn10633: any, femIn10634: any) {
  throw Error(
    `FIELDVALUE is not implemented. value=${String(femIn10633)}, fieldName=${String(femIn10634)}`,
  );
}
export function Lct(femIn10281: any) {
  throw Error(
    `PY is not implemented. useCtrlEnterToCommitPythonCodeCreatesPythonFormulas=${String(femIn10281)}`,
  );
}
export function Vct(femIn9658: any, femIn9659: any, femIn9660: any) {
  throw Error(
    `TRIMRANGE is not implemented. range=${String(femIn9658)}, rowTrimMode=${String(femIn9659)}, colTrimMode=${String(femIn9660)}`,
  );
}
export function zut(femIn10575: any, femIn10576: any) {
  throw Error(
    `PERCENTOF is not implemented. dataSubset=${String(femIn10575)}, dataAll=${String(femIn10576)}`,
  );
}
export function fdt(femIn11817: any) {
  throw Error(`BAHTTEXT is not implemented. numberParam=${String(femIn11817)}`);
}
