// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rewrite formula function names outside strings (legacy ppt/mpt).
// Stage-3 wave-123.

export function replaceFormulaFunctionName(
  ftrIn3907: any,
  ftrIn3908: any,
  ftrIn3909: any,
) {
  let ftrBind12787 = ftrIn3908.toUpperCase(),
    ftrBind12788 = ftrBind12787.length,
    ftrBind12789 = "",
    ftrBind12790 = false,
    ftrBind12791 = 0;
  for (; ftrBind12791 < ftrIn3907.length; ) {
    let ftrBind15413 = ftrIn3907[ftrBind12791];
    if (ftrBind15413 === '"') {
      let ftrBind19623 = ftrIn3907[ftrBind12791 + 1];
      if (ftrBind12790 && ftrBind19623 === '"') {
        ftrBind12789 += '""';
        ftrBind12791 += 2;
        continue;
      }
      ftrBind12790 = !ftrBind12790;
      ftrBind12789 += ftrBind15413;
      ftrBind12791 += 1;
      continue;
    }
    if (
      !ftrBind12790 &&
      matchFormulaFunctionNameAt(
        ftrIn3907,
        ftrBind12791,
        ftrBind12787,
        ftrBind12788,
      )
    ) {
      ftrBind12789 += `${ftrIn3909}${ftrBind12787}`;
      ftrBind12791 += ftrBind12788;
      continue;
    }
    ftrBind12789 += ftrBind15413;
    ftrBind12791 += 1;
  }
  return ftrBind12789;
}
export function matchFormulaFunctionNameAt(
  ftrIn6927: any,
  ftrIn6928: any,
  ftrIn6929: any,
  ftrIn6930: any,
) {
  let ftrBind17277 = ftrIn6928 > 0 ? ftrIn6927[ftrIn6928 - 1] : "";
  if (
    (ftrBind17277 && /[A-Za-z0-9_.]/.test(ftrBind17277)) ||
    ftrIn6927.slice(ftrIn6928, ftrIn6928 + ftrIn6930).toUpperCase() !==
      ftrIn6929
  )
    return false;
  let ftrBind17278 = ftrIn6928 + ftrIn6930;
  for (
    ;
    ftrBind17278 < ftrIn6927.length && /\s/.test(ftrIn6927[ftrBind17278] ?? "");
  )
    ftrBind17278 += 1;
  return ftrIn6927[ftrBind17278] === "(";
}

/** Legacy aliases (wave-123). */
export const ppt = replaceFormulaFunctionName;
export const mpt = matchFormulaFunctionNameAt;
