// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-64: color parse + solid fill + worksheet ref helpers
// (legacy Kgt / qgt / Jgt / Xgt / Binding1034).

import { tr, Zn } from "../presentation-protobuf";

export function Kgt(props: any): any {
  let eqBind11528 = props.trim();
  if (eqBind11528.startsWith("#") && eqBind11528.length === 7) {
    let eqBind18944 = parseInt(eqBind11528.slice(1, 3), 16),
      eqBind18945 = parseInt(eqBind11528.slice(3, 5), 16),
      eqBind18946 = parseInt(eqBind11528.slice(5, 7), 16);
    return [eqBind18944, eqBind18945, eqBind18946].some((item) =>
      Number.isNaN(item),
    )
      ? null
      : [eqBind18944, eqBind18945, eqBind18946];
  }
  let eqBind11529 = eqBind11528.match(
    /^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)$/i,
  );
  if (!eqBind11529) return null;
  let eqBind11530 = parseInt(eqBind11529[1] ?? "", 10),
    eqBind11531 = parseInt(eqBind11529[2] ?? "", 10),
    eqBind11532 = parseInt(eqBind11529[3] ?? "", 10);
  return [eqBind11530, eqBind11531, eqBind11532].some((item) =>
    Number.isNaN(item),
  )
    ? null
    : [eqBind11530, eqBind11531, eqBind11532];
}
export function qgt(eqIn6462: any, eqIn6463: any, eqIn6464: any): any {
  let eqBind16661 = (eqIn10577) =>
      Math.max(0, Math.min(255, Math.round(eqIn10577)))
        .toString(16)
        .padStart(2, "0")
        .toUpperCase(),
    eqBind16662 = `FF${eqBind16661(eqIn6462)}${eqBind16661(eqIn6463)}${eqBind16661(eqIn6464)}`;
  return {
    type: Zn.COLOR_TYPE_RGB,
    value: eqBind16662,
    lastColor: eqBind16662,
    transform: undefined,
  };
}
export function Jgt(eqIn8319: any): any {
  let eqBind18819 = Kgt(eqIn8319);
  if (!eqBind18819) return null;
  let [eqBind18820, eqBind18821, eqBind18822] = eqBind18819;
  return {
    type: tr.FILL_TYPE_SOLID,
    color: qgt(eqBind18820, eqBind18821, eqBind18822),
    gradientStops: [],
    pictureEffects: [],
  };
}
export function Xgt(props: any): any {
  let eqBind22279 = props.trim();
  return eqBind22279.startsWith("ws/") ? eqBind22279.slice(3) : eqBind22279;
}
export function resolveWorksheetRef(eqIn6880: any, eqIn6881: any): any {
  let eqBind17200 = Xgt(eqIn6881),
    eqBind17201 = eqIn6880.worksheets.getItemOrNullObject(eqBind17200);
  if (!eqBind17201.isNullObject) return eqBind17201;
  for (let eqBind22099 of eqIn6880.worksheets)
    if (
      eqBind22099.sheetId === eqBind17200 ||
      eqBind22099.id === eqBind17200 ||
      eqBind22099.name === eqBind17200
    )
      return eqBind22099;
  throw Error(`Worksheet ${eqIn6881} not found.`);
}
