// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula token/arg/criteria utilities (legacy $Xe + 836–853).
// Stage-3 wave-116.

import {
  f2e,
  d2e,
  u2e,
  workbookBinding1835,
  workbookBinding1838,
  workbookBinding1845,
  workbookBinding1846,
  workbookBinding1847,
} from "../formula-stats";

void f2e;
void d2e;
void u2e;
void workbookBinding1835;
void workbookBinding1838;
void workbookBinding1845;
void workbookBinding1846;
void workbookBinding1847;

export function excelSerialToDate(ftuIn4407: any) {
  ftuIn4407 < 60 && (ftuIn4407 += 1);
  let ftuBind13613 = Math.floor(ftuIn4407 - 25569) * 86400,
    ftuBind13614 = new Date(ftuBind13613 * 1e3),
    ftuBind13615 = ftuIn4407 - Math.floor(ftuIn4407) + 1e-7,
    ftuBind13616 = Math.floor(86400 * ftuBind13615),
    ftuBind13617 = ftuBind13616 % 60;
  ftuBind13616 -= ftuBind13617;
  let ftuBind13618 = Math.floor(ftuBind13616 / 3600),
    ftuBind13619 = Math.floor(ftuBind13616 / 60) % 60,
    ftuBind13620 = ftuBind13614.getUTCDate(),
    ftuBind13621 = ftuBind13614.getUTCMonth();
  return (
    ftuIn4407 >= 60 &&
      ftuIn4407 < 61 &&
      ((ftuBind13620 = 29), (ftuBind13621 = 1)),
    new Date(
      ftuBind13614.getUTCFullYear(),
      ftuBind13621,
      ftuBind13620,
      ftuBind13618,
      ftuBind13619,
      ftuBind13617,
    )
  );
}
export function excelDaysSinceEpoch(ftuIn10597: any) {
  let ftuBind21081 = new Date(1900, 0, 1),
    ftuBind21082 = ftuIn10597 > -2203891200000 ? 2 : 1;
  return Math.ceil((ftuIn10597 - ftuBind21081) / 864e5) + ftuBind21082;
}
export function makeFormulaToken(ftuIn10494: any, ftuIn10495: any) {
  if (f2e.indexOf(ftuIn10495) === -1)
    throw Error("Unsupported token type: " + ftuIn10495);
  return {
    value: ftuIn10494,
    type: ftuIn10495,
  };
}
export function coerceNumericToken(props: any) {
  return (
    typeof props == "string" &&
      /^\d+(\.\d+)?$/.test(props) &&
      (props =
        props.indexOf(".") === -1 ? parseInt(props, 10) : parseFloat(props)),
    props
  );
}
export function splitCriteriaOperators(ftuIn4184: any) {
  let ftuBind13209 = ftuIn4184.length,
    ftuBind13210 = [],
    ftuBind13211 = 0,
    ftuBind13212 = "",
    ftuBind13213 = "";
  for (; ftuBind13211 < ftuBind13209; ) {
    let ftuBind16750 = ftuIn4184.charAt(ftuBind13211);
    switch (ftuBind16750) {
      case ">":
      case "<":
      case "=":
        ftuBind13213 += ftuBind16750;
        ftuBind13212.length > 0 &&
          (ftuBind13210.push(ftuBind13212), (ftuBind13212 = ""));
        break;
      default:
        ftuBind13213.length > 0 &&
          (ftuBind13210.push(ftuBind13213), (ftuBind13213 = ""));
        ftuBind13212 += ftuBind16750;
        break;
    }
    ftuBind13211++;
  }
  return (
    ftuBind13212.length > 0 && ftuBind13210.push(ftuBind13212),
    ftuBind13213.length > 0 && ftuBind13210.push(ftuBind13213),
    ftuBind13210
  );
}
export function tokenizeUnaryCriteria(ftuIn5997: any) {
  let ftuBind16024 = "",
    ftuBind16025 = [];
  for (let ftuBind21041 = 0; ftuBind21041 < ftuIn5997.length; ftuBind21041++) {
    let ftuBind22156 = ftuIn5997[ftuBind21041];
    ftuBind21041 === 0 && d2e.indexOf(ftuBind22156) >= 0
      ? ftuBind16025.push(makeFormulaToken(ftuBind22156, ftuBind1845))
      : (ftuBind16024 += ftuBind22156);
  }
  return (
    ftuBind16024.length > 0 &&
      ftuBind16025.push(
        makeFormulaToken(coerceNumericToken(ftuBind16024), ftuBind1846),
      ),
    ftuBind16025.length > 0 &&
      ftuBind16025[0].type !== ftuBind1845 &&
      ftuBind16025.unshift(makeFormulaToken(u2e, ftuBind1845)),
    ftuBind16025
  );
}
export function applyCriteriaOperator(ftuIn6897: any) {
  let ftuBind17219 = [],
    ftuBind17220;
  for (let ftuBind19004 = 0; ftuBind19004 < ftuIn6897.length; ftuBind19004++) {
    let ftuBind20061 = ftuIn6897[ftuBind19004];
    switch (ftuBind20061.type) {
      case ftuBind1845:
        ftuBind17220 = ftuBind20061.value;
        break;
      case ftuBind1846:
        ftuBind17219.push(ftuBind20061.value);
        break;
    }
  }
  return compareCriteriaValues(ftuBind17219, ftuBind17220);
}
export function compareCriteriaValues(ftuIn5094: any, ftuIn5095: any) {
  let ftuBind14542 = false;
  switch (ftuIn5095) {
    case ">":
      ftuBind14542 = ftuIn5094[0] > ftuIn5094[1];
      break;
    case ">=":
      ftuBind14542 = ftuIn5094[0] >= ftuIn5094[1];
      break;
    case "<":
      ftuBind14542 = ftuIn5094[0] < ftuIn5094[1];
      break;
    case "<=":
      ftuBind14542 = ftuIn5094[0] <= ftuIn5094[1];
      break;
    case "=":
      ftuBind14542 = ftuIn5094[0] == ftuIn5094[1];
      break;
    case "<>":
      ftuBind14542 = ftuIn5094[0] != ftuIn5094[1];
      break;
  }
  return ftuBind14542;
}
export function parseCriteriaTokens(ftuIn15556: any) {
  return tokenizeUnaryCriteria(splitCriteriaOperators(ftuIn15556));
}
export function collectFormulaArgs(ftuIn11496: any) {
  let ftuBind21906 = [];
  return (
    eachFormulaArg(ftuIn11496, (ftuIn15858) => {
      ftuBind21906.push(ftuIn15858);
    }),
    ftuBind21906
  );
}
export function eachFormulaArg(ftuIn10998: any, ftuIn10999: any) {
  let ftuBind21524 = -1,
    ftuBind21525 = ftuIn10998.length;
  for (
    ;
    ++ftuBind21524 < ftuBind21525 &&
    ftuIn10999(ftuIn10998[ftuBind21524], ftuBind21524, ftuIn10998) !== false;
  );
  return ftuIn10998;
}
export function coerceArgNumbers(ftuIn5209: any) {
  let ftuBind14747 = ftuIn5209.length,
    ftuBind14748;
  for (; ftuBind14747--; )
    if (
      ((ftuBind14748 = ftuIn5209[ftuBind14747]),
      typeof ftuBind14748 != "number")
    ) {
      if (ftuBind14748 === true) {
        ftuIn5209[ftuBind14747] = 1;
        continue;
      }
      if (ftuBind14748 === false) {
        ftuIn5209[ftuBind14747] = 0;
        continue;
      }
      if (typeof ftuBind14748 == "string") {
        let ftuBind22509 = flattenMatrixArgs(ftuBind14748);
        ftuIn5209[ftuBind14747] =
          ftuBind22509 instanceof Error ? 0 : ftuBind22509;
      }
    }
  return ftuIn5209;
}
export function zipFormulaArgs(ftuIn5200: any, ftuIn5201: any) {
  if (!ftuIn5200) return ftuBind1835;
  (!ftuIn5200.every((item) => Array.isArray(item)) || ftuIn5200.length === 0) &&
    (ftuIn5200 = [[...ftuIn5200]]);
  ftuIn5200.map((item, index) => {
    item.map((_item, _index) => {
      _item || (ftuIn5200[index][_index] = 0);
    });
  });
  let ftuBind14723 = ftuIn5200.reduce(
      (accumulator, current, index) =>
        current.length > ftuIn5200[accumulator].length ? index : accumulator,
      0,
    ),
    ftuBind14724 = ftuIn5200[ftuBind14723].length;
  return ftuIn5200.map((item) => [
    ...item,
    ...Array(ftuBind14724 - item.length).fill(0),
  ]);
}
export function flattenFormulaArgs() {
  let ftuBind18377;
  if (arguments.length === 1) {
    let ftuBind22400 = arguments[0];
    ftuBind18377 = isTruthyFormulaValue(ftuBind22400)
      ? collectFormulaArgs.apply(null, arguments)
      : [ftuBind22400];
  } else ftuBind18377 = Array.from(arguments);
  for (; !isTruthyFormulaValue(ftuBind18377); )
    ftuBind18377 = flattenFormulaArgsDeep(ftuBind18377);
  return ftuBind18377;
}
export function flattenFormulaArgsDeep(ftuIn5835: any) {
  return !ftuIn5835 || !ftuIn5835.reduce
    ? [ftuIn5835]
    : ftuIn5835.reduce((accumulator, current) => {
        let ftuBind17489 = Array.isArray(accumulator),
          ftuBind17490 = Array.isArray(current);
        return ftuBind17489 && ftuBind17490
          ? accumulator.concat(current)
          : ftuBind17489
            ? (accumulator.push(current), accumulator)
            : ftuBind17490
              ? [accumulator].concat(current)
              : [accumulator, current];
      });
}
export function ensureArrayArg(ftuIn10630: any, ftuIn10631: any) {
  return (
    (ftuIn10631 ||= 1),
    !ftuIn10630 || typeof ftuIn10630.slice != "function"
      ? ftuIn10630
      : ftuIn10630.slice(0, ftuIn10630.length - ftuIn10631)
  );
}
export function isArrayLike(ftuIn11650: any) {
  return (
    ftuIn11650 != null &&
    typeof ftuIn11650.length == "number" &&
    typeof ftuIn11650 != "string"
  );
}
export function isFlatArray(ftuIn10549: any) {
  if (!ftuIn10549) return false;
  for (let ftuBind22563 = 0; ftuBind22563 < ftuIn10549.length; ++ftuBind22563)
    if (Array.isArray(ftuIn10549[ftuBind22563])) return false;
  return true;
}
export function chooseFormulaValue(ftuIn11581: any, ftuIn11582: any) {
  return (
    (ftuIn11582 ||= 1),
    !ftuIn11581 || typeof ftuIn11581.slice != "function"
      ? ftuIn11581
      : ftuIn11581.slice(ftuIn11582)
  );
}
export function transposeMatrixArgs(ftuIn12692: any) {
  return ftuIn12692
    ? ftuIn12692[0].map((item, index) =>
        ftuIn12692.map((_item) => _item[index]),
      )
    : ftuBind1835;
}
export function formulaValueEquals(ftuIn10165: any, ftuIn10166: any) {
  let ftuBind20627 = null;
  return (
    eachFormulaArg(ftuIn10165, (ftuIn13749, ftuIn13750) => {
      if (ftuIn13749[0] === ftuIn10166)
        return ((ftuBind20627 = ftuIn13750), false);
    }),
    ftuBind20627 ?? ftuBind1835
  );
}
export function anyFormulaError() {
  for (let ftuBind21769 = 0; ftuBind21769 < arguments.length; ftuBind21769++)
    if (arguments[ftuBind21769] instanceof Error)
      return arguments[ftuBind21769];
}
export function hasFormulaError() {
  let ftuBind21248 = arguments.length;
  for (; ftuBind21248--; )
    if (arguments[ftuBind21248] instanceof Error) return true;
  return false;
}
export function roundFormulaFloat(ftuIn12637: any) {
  return Math.round(ftuIn12637 * 0x5af3107a4000) / 0x5af3107a4000;
}
export function filterNumericArgs() {
  return flattenFormulaArgs
    .apply(null, arguments)
    .filter((item) => typeof item == "number");
}
export function coerceFormulaBoolean(ftuIn5977: any) {
  if (typeof ftuIn5977 == "boolean" || ftuIn5977 instanceof Error)
    return ftuIn5977;
  if (typeof ftuIn5977 == "number") return ftuIn5977 !== 0;
  if (typeof ftuIn5977 == "string") {
    let ftuBind21806 = ftuIn5977.toUpperCase();
    if (ftuBind21806 === "TRUE") return true;
    if (ftuBind21806 === "FALSE") return false;
  }
  return ftuIn5977 instanceof Date && !isNaN(ftuIn5977) ? true : ftuBind1835;
}
export function coerceFormulaDate(ftuIn5595: any) {
  if (!isNaN(ftuIn5595)) {
    if (ftuIn5595 instanceof Date) return new Date(ftuIn5595);
    let ftuBind21005 = parseFloat(ftuIn5595);
    return ftuBind21005 < 0 || ftuBind21005 >= 2958466
      ? ftuBind1838
      : excelSerialToDate(ftuBind21005);
  }
  return typeof ftuIn5595 == "string" &&
    ((ftuIn5595 = /(\d{4})-(\d\d?)-(\d\d?)$/.test(ftuIn5595)
      ? new Date(ftuIn5595 + "T00:00:00.000")
      : new Date(ftuIn5595)),
    !isNaN(ftuIn5595))
    ? ftuIn5595
    : ftuBind1835;
}
export function coerceFormulaDates(ftuIn10133: any) {
  let ftuBind20603 = ftuIn10133.length,
    ftuBind20604;
  for (; ftuBind20603--; ) {
    if (
      ((ftuBind20604 = coerceFormulaDate(ftuIn10133[ftuBind20603])),
      ftuBind20604 === ftuBind1835)
    )
      return ftuBind20604;
    ftuIn10133[ftuBind20603] = ftuBind20604;
  }
  return ftuIn10133;
}
export function flattenMatrixArgs(ftuIn8960: any) {
  return ftuIn8960 instanceof Error
    ? ftuIn8960
    : ftuIn8960 == null
      ? 0
      : (typeof ftuIn8960 == "boolean" && (ftuIn8960 = +ftuIn8960),
        !isNaN(ftuIn8960) && ftuIn8960 !== ""
          ? parseFloat(ftuIn8960)
          : ftuBind1835);
}
export function ensureFlatArgs(ftuIn7520: any) {
  let ftuBind18000;
  if (!ftuIn7520 || (ftuBind18000 = ftuIn7520.length) === 0) return ftuBind1835;
  let ftuBind18001;
  for (; ftuBind18000--; ) {
    if (ftuIn7520[ftuBind18000] instanceof Error)
      return ftuIn7520[ftuBind18000];
    if (
      ((ftuBind18001 = flattenMatrixArgs(ftuIn7520[ftuBind18000])),
      ftuBind18001 instanceof Error)
    )
      return ftuBind18001;
    ftuIn7520[ftuBind18000] = ftuBind18001;
  }
  return ftuIn7520;
}
export function isBlankLike(ftuIn12271: any) {
  return ftuIn12271 instanceof Error
    ? ftuIn12271
    : ftuIn12271 == null
      ? ""
      : ftuIn12271.toString();
}
export function isAnyStringArg() {
  let ftuBind21146 = arguments.length;
  for (; ftuBind21146--; )
    if (typeof arguments[ftuBind21146] == "string") return true;
  return false;
}
export function matchCriteriaPairs() {
  let ftuBind10737 = collectFormulaArgs(arguments),
    ftuBind10738 = ensureFlatArgs(flattenFormulaArgs(ftuBind10737.shift()));
  if (ftuBind10738 instanceof Error) return ftuBind10738;
  let ftuBind10739 = ftuBind10737,
    ftuBind10740 = ftuBind10739.length / 2;
  for (let ftuBind22889 = 0; ftuBind22889 < ftuBind10740; ftuBind22889++)
    ftuBind10739[ftuBind22889 * 2] = flattenFormulaArgs(
      ftuBind10739[ftuBind22889 * 2],
    );
  let ftuBind10741 = [];
  for (
    let ftuBind13649 = 0;
    ftuBind13649 < ftuBind10738.length;
    ftuBind13649++
  ) {
    let ftuBind14309 = false;
    for (let ftuBind15347 = 0; ftuBind15347 < ftuBind10740; ftuBind15347++) {
      let ftuBind15873 = ftuBind10739[ftuBind15347 * 2][ftuBind13649],
        ftuBind15874 = ftuBind10739[ftuBind15347 * 2 + 1],
        ftuBind15875 = ftuBind15874 === undefined || ftuBind15874 === "*",
        ftuBind15876 = false;
      if (ftuBind15875) ftuBind15876 = true;
      else {
        let ftuBind22062 = parseCriteriaTokens(ftuBind15874 + ""),
          ftuBind22063 = [makeFormulaToken(ftuBind15873, ftuBind1846)].concat(
            ftuBind22062,
          );
        ftuBind15876 = ftuBind1847(ftuBind22063);
      }
      if (!ftuBind15876) {
        ftuBind14309 = false;
        break;
      }
      ftuBind14309 = true;
    }
    ftuBind14309 && ftuBind10741.push(ftuBind10738[ftuBind13649]);
  }
  return ftuBind10741;
}

export const ZXe = excelSerialToDate;
export const QXe = coerceNumericToken;
export const $Xe = splitCriteriaOperators;
export const eZe = tokenizeUnaryCriteria;
export const tZe = applyCriteriaOperator;
export const nZe = compareCriteriaValues;
export const rZe = zipFormulaArgs;
export const iZe = ensureArrayArg;
export const aZe = isArrayLike;
export const oZe = isFlatArray;
export const sZe = transposeMatrixArgs;
export const cZe = roundFormulaFloat;
export const lZe = coerceFormulaBoolean;
export const uZe = coerceFormulaDates;
