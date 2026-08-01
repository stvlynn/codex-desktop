// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scatter default tick/domain helpers (legacy 535/537/538).
// Stage-3 wave-135 — Binding1158/1161/1162 inlined (6 / 1 / 0.1).

export function workbookHelper535(csscIn6424: any, csscIn6425: any) {
  if (
    csscIn6425 === undefined &&
    (csscIn6424 === undefined ||
      (csscIn6424.min === undefined &&
        csscIn6424.max === undefined) ||
      (csscIn6424.min !== undefined &&
        csscIn6424.min !== 0 &&
        csscIn6424.max === undefined) ||
      (csscIn6424.min === undefined &&
        csscIn6424.max === 1 &&
        csscIn6424.numberFormatCode?.includes("%")))
  )
    return 6;
}
export function workbookHelper537(csscIn7080: any, csscIn7081: any) {
  if (
    csscIn7080?.min !== 0 ||
    csscIn7080.max !== undefined ||
    !csscIn7080.numberFormatCode?.includes("%") ||
    csscIn7081 <= 0 ||
    csscIn7081 >= 1
  )
    return;
  let csscBind17419 =
    Math.ceil(csscIn7081 / 0.1) * 0.1;
  if (
    Number(csscBind17419.toPrecision(15)) ===
    1 - 0.1
  )
    return 1;
}
export function workbookHelper538([csscIn7621: any, csscIn7622]: any) {
  if (
    !Number.isFinite(csscIn7621) ||
    !Number.isFinite(csscIn7622)
  )
    return [0, 1];
  if (csscIn7621 === csscIn7622) {
    if (csscIn7621 === 0) return [-1, 1];
    let csscBind21793 = Math.abs(csscIn7621) * 0.1 || 1;
    return [
      csscIn7621 - csscBind21793,
      csscIn7622 + csscBind21793,
    ];
  }
  return [csscIn7621, csscIn7622];
}
