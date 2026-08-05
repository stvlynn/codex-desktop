// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel MATCH lookup (legacy DZe).
// Stage-3 wave-109.

import { fmH } from "./boundary-hooks";

void fmH;

export function matchLookup(fmIn1478: any, fmIn1479: any, fmIn1480: any) {
  if (
    (!fmIn1478 && fmIn1478 !== 0) ||
    !fmIn1479 ||
    (arguments.length === 2 && (fmIn1480 = 1),
    (fmIn1479 = fmH.flattenArgs(fmIn1479)),
    !(fmIn1479 instanceof Array)) ||
    (fmIn1480 !== -1 && fmIn1480 !== 0 && fmIn1480 !== 1)
  )
    return fmH.NA_ERROR;
  let fmBind7419, fmBind7420;
  for (let fmBind8802 = 0; fmBind8802 < fmIn1479.length; fmBind8802++)
    if (fmIn1480 === 1) {
      if (fmIn1479[fmBind8802] === fmIn1478) return fmBind8802 + 1;
      fmIn1479[fmBind8802] < fmIn1478 &&
        (fmBind7420
          ? fmIn1479[fmBind8802] > fmBind7420 &&
            ((fmBind7419 = fmBind8802 + 1), (fmBind7420 = fmIn1479[fmBind8802]))
          : ((fmBind7419 = fmBind8802 + 1),
            (fmBind7420 = fmIn1479[fmBind8802])));
    } else if (fmIn1480 === 0) {
      if (
        typeof fmIn1478 == "string" &&
        typeof fmIn1479[fmBind8802] == "string"
      ) {
        let fmBind14320 = fmIn1478
          .toLowerCase()
          .replace(/\?/g, ".")
          .replace(/\*/g, ".*")
          .replace(/~/g, "\\")
          .replace(/\+/g, "\\+")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]");
        if (
          RegExp("^" + fmBind14320 + "$").test(
            fmIn1479[fmBind8802].toLowerCase(),
          )
        )
          return fmBind8802 + 1;
      } else if (fmIn1479[fmBind8802] === fmIn1478) return fmBind8802 + 1;
    } else if (fmIn1480 === -1) {
      if (fmIn1479[fmBind8802] === fmIn1478) return fmBind8802 + 1;
      fmIn1479[fmBind8802] > fmIn1478 &&
        (fmBind7420
          ? fmIn1479[fmBind8802] < fmBind7420 &&
            ((fmBind7419 = fmBind8802 + 1), (fmBind7420 = fmIn1479[fmBind8802]))
          : ((fmBind7419 = fmBind8802 + 1),
            (fmBind7420 = fmIn1479[fmBind8802])));
    }
  return fmBind7419 || fmH.NA_ERROR;
}

/** Legacy alias. */
export const DZe = matchLookup;
