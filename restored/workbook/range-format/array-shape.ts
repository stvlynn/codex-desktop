// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: 2D array shape helpers (legacy zle / Ble).

export function measure2dArrayShape(rfIn4780: unknown) {
  if (!Array.isArray(rfIn4780)) throw Error("Expected a 2D array.");
  let rfBind14136 = [];
  for (let rfBind19247 = 0; rfBind19247 < rfIn4780.length; rfBind19247 += 1) {
    let rfBind20426 = rfIn4780[rfBind19247];
    if (!Array.isArray(rfBind20426)) throw Error(`Expected a 2D array; row ${rfBind19247 + 1} is not an array.`);
    rfBind14136.push(rfBind20426.length);
  }
  let rfBind14137 = rfIn4780.length,
    rfBind14138 = rfBind14136[0] ?? 0;
  return {
    rows: rfBind14137,
    cols: rfBind14138,
    ragged: rfBind14136.some(item => item !== rfBind14138),
    colCounts: rfBind14136
  };
}
export function uniform2dArrayFirstValue(props: unknown) {
  let rfBind17336 = props[0]?.[0];
  if (typeof rfBind17336 != "string") return null;
  for (let rfBind20166 = 0; rfBind20166 < props.length; rfBind20166 += 1) {
    let rfBind21352 = props[rfBind20166];
    if (rfBind21352) {
      for (let rfBind22614 = 0; rfBind22614 < rfBind21352.length; rfBind22614 += 1) if (rfBind21352[rfBind22614] !== rfBind17336) return null;
    }
  }
  return rfBind17336;
}
