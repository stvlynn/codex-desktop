// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: ArrayValue create/map/zip + error/lambda guards.
import { RANGE_METADATA } from "./formula-array-constants";

export function createArrayValue(formulaArrayIn6792: any) {
  let formulaArrayBind17094 = formulaArrayIn6792.map((item) =>
      item.map((_item) =>
        isArrayValue(_item) ? makeErrorValue("#VALUE!") : _item,
      ),
    ),
    formulaArrayBind17095 = formulaArrayBind17094.reduce(
      (accumulator, current) => Math.max(accumulator, current.length),
      0,
    );
  for (let formulaArrayBind22853 of formulaArrayBind17094)
    for (; formulaArrayBind22853.length < formulaArrayBind17095; )
      formulaArrayBind22853.push(null);
  return {
    kind: "Array",
    rows: formulaArrayBind17094.length,
    cols: formulaArrayBind17095,
    values: formulaArrayBind17094,
  };
}
export function isArrayValue(formulaArrayIn11663: any) {
  return (
    typeof formulaArrayIn11663 == "object" &&
    !!formulaArrayIn11663 &&
    "kind" in formulaArrayIn11663 &&
    formulaArrayIn11663.kind === "Array"
  );
}
export function cloneArrayValues(formulaArrayIn14140: any) {
  return formulaArrayIn14140.values.map((item) => [...item]);
}
export function mapArrayValue(
  formulaArrayIn12704: any,
  formulaArrayIn12705: any,
) {
  return createArrayValue(
    formulaArrayIn12704.values.map((item) =>
      item.map((_item) => formulaArrayIn12705(_item)),
    ),
  );
}
export function zipArrayValues(
  formulaArrayIn2656: any,
  formulaArrayIn2657: any,
  formulaArrayIn2658: any,
) {
  if (isArrayValue(formulaArrayIn2656) && isArrayValue(formulaArrayIn2657)) {
    if (
      formulaArrayIn2656.rows !== formulaArrayIn2657.rows ||
      formulaArrayIn2656.cols !== formulaArrayIn2657.cols
    )
      return makeErrorValue("#VALUE!");
    let formulaArrayBind11713 = [];
    for (
      let formulaArrayBind13366 = 0;
      formulaArrayBind13366 < formulaArrayIn2656.rows;
      formulaArrayBind13366 += 1
    ) {
      let formulaArrayBind14044 =
          formulaArrayIn2656.values[formulaArrayBind13366],
        formulaArrayBind14045 =
          formulaArrayIn2657.values[formulaArrayBind13366];
      if (!formulaArrayBind14044 || !formulaArrayBind14045)
        throw Error("ArrayValue row metadata is inconsistent");
      let formulaArrayBind14046 = [];
      for (
        let formulaArrayBind18074 = 0;
        formulaArrayBind18074 < formulaArrayIn2656.cols;
        formulaArrayBind18074 += 1
      ) {
        let formulaArrayBind19124 =
            formulaArrayBind14044[formulaArrayBind18074],
          formulaArrayBind19125 = formulaArrayBind14045[formulaArrayBind18074];
        if (
          formulaArrayBind19124 === undefined ||
          formulaArrayBind19125 === undefined
        )
          throw Error("ArrayValue column metadata is inconsistent");
        formulaArrayBind14046.push(
          formulaArrayIn2658(formulaArrayBind19124, formulaArrayBind19125),
        );
      }
      formulaArrayBind11713.push(formulaArrayBind14046);
    }
    return createArrayValue(formulaArrayBind11713);
  }
  return isArrayValue(formulaArrayIn2656)
    ? mapArrayValue(formulaArrayIn2656, (formulaArrayIn16581) =>
        formulaArrayIn2658(formulaArrayIn16581, formulaArrayIn2657),
      )
    : isArrayValue(formulaArrayIn2657)
      ? mapArrayValue(formulaArrayIn2657, (formulaArrayIn16582) =>
          formulaArrayIn2658(formulaArrayIn2656, formulaArrayIn16582),
        )
      : formulaArrayIn2658(formulaArrayIn2656, formulaArrayIn2657);
}
export function attachRangeMetadata(
  formulaArrayIn11314: any,
  formulaArrayIn11315: any,
) {
  Object.defineProperty(formulaArrayIn11314, RANGE_METADATA, {
    value: formulaArrayIn11315,
    enumerable: false,
    configurable: false,
  });
}
export function getRangeMetadata(formulaArrayIn13034: any) {
  return Array.isArray(formulaArrayIn13034)
    ? (formulaArrayIn13034[RANGE_METADATA] ?? null)
    : null;
}
export function copyRangeMetadata(
  formulaArrayIn14286: any,
  formulaArrayIn14287: any,
) {
  let formulaArrayBind22821 = getRangeMetadata(formulaArrayIn14286);
  formulaArrayBind22821 &&
    attachRangeMetadata(formulaArrayIn14287, formulaArrayBind22821);
}
export function makeErrorValue(formulaArrayIn14288: any) {
  return {
    kind: "Error",
    code: formulaArrayIn14288,
  };
}
export function isErrorValue(formulaArrayIn12589: any) {
  return (
    typeof formulaArrayIn12589 == "object" &&
    !!formulaArrayIn12589 &&
    formulaArrayIn12589.kind === "Error"
  );
}
export function isLambdaValue(formulaArrayIn12476: any) {
  return (
    typeof formulaArrayIn12476 == "object" &&
    !!formulaArrayIn12476 &&
    formulaArrayIn12476.kind === "Lambda"
  );
}
export function isRefErrorName(formulaArrayIn7455: any) {
  if (typeof formulaArrayIn7455 != "string") return false;
  let formulaArrayBind17930 = formulaArrayIn7455.trim().toUpperCase();
  if (
    formulaArrayBind17930 === "#REF!" ||
    formulaArrayBind17930.endsWith("!#REF!")
  )
    return true;
  let formulaArrayBind17931 = formulaArrayBind17930.lastIndexOf("!");
  return formulaArrayBind17931 >= 0
    ? formulaArrayBind17930.slice(formulaArrayBind17931 + 1) === "#REF!"
    : false;
}
