// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: complex real/imag coerce (legacy helper893 / $4).
// Stage-3 wave-108.

import { fcxH } from "./boundary-hooks";

void fcxH;

export function complexReal(fcxIn1749: any) {
  if (fcxIn1749 === undefined || fcxIn1749 === true || fcxIn1749 === false)
    return fcxH.VALUE_ERROR;
  if (
    fcxIn1749 === 0 ||
    fcxIn1749 === "0" ||
    [
      "i",
      "+i",
      "1i",
      "+1i",
      "-i",
      "-1i",
      "j",
      "+j",
      "1j",
      "+1j",
      "-j",
      "-1j",
    ].indexOf(fcxIn1749) >= 0
  )
    return 0;
  fcxIn1749 += "";
  let fcxBind8196 = fcxIn1749.indexOf("+"),
    fcxBind8197 = fcxIn1749.indexOf("-");
  fcxBind8196 === 0 && (fcxBind8196 = fcxIn1749.indexOf("+", 1));
  fcxBind8197 === 0 && (fcxBind8197 = fcxIn1749.indexOf("-", 1));
  let fcxBind8198 = fcxIn1749.substring(fcxIn1749.length - 1, fcxIn1749.length),
    fcxBind8199 = fcxBind8198 === "i" || fcxBind8198 === "j";
  return fcxBind8196 >= 0 || fcxBind8197 >= 0
    ? fcxBind8199
      ? fcxBind8196 >= 0
        ? isNaN(fcxIn1749.substring(0, fcxBind8196)) ||
          isNaN(fcxIn1749.substring(fcxBind8196 + 1, fcxIn1749.length - 1))
          ? fcxH.NUM_ERROR
          : Number(fcxIn1749.substring(0, fcxBind8196))
        : isNaN(fcxIn1749.substring(0, fcxBind8197)) ||
            isNaN(fcxIn1749.substring(fcxBind8197 + 1, fcxIn1749.length - 1))
          ? fcxH.NUM_ERROR
          : Number(fcxIn1749.substring(0, fcxBind8197))
      : fcxH.NUM_ERROR
    : fcxBind8199
      ? isNaN(fcxIn1749.substring(0, fcxIn1749.length - 1))
        ? fcxH.NUM_ERROR
        : 0
      : isNaN(fcxIn1749)
        ? fcxH.NUM_ERROR
        : fcxIn1749;
}

export function complexImag(fcxIn1680: any) {
  if (fcxIn1680 === undefined || fcxIn1680 === true || fcxIn1680 === false)
    return fcxH.VALUE_ERROR;
  if (fcxIn1680 === 0 || fcxIn1680 === "0") return 0;
  if (["i", "j"].indexOf(fcxIn1680) >= 0) return 1;
  fcxIn1680 += "";
  fcxIn1680 = fcxIn1680
    .replace("+i", "+1i")
    .replace("-i", "-1i")
    .replace("+j", "+1j")
    .replace("-j", "-1j");
  let fcxBind7980 = fcxIn1680.indexOf("+"),
    fcxBind7981 = fcxIn1680.indexOf("-");
  fcxBind7980 === 0 && (fcxBind7980 = fcxIn1680.indexOf("+", 1));
  fcxBind7981 === 0 && (fcxBind7981 = fcxIn1680.indexOf("-", 1));
  let fcxBind7982 = fcxIn1680.substring(fcxIn1680.length - 1, fcxIn1680.length),
    fcxBind7983 = fcxBind7982 === "i" || fcxBind7982 === "j";
  return fcxBind7980 >= 0 || fcxBind7981 >= 0
    ? fcxBind7983
      ? fcxBind7980 >= 0
        ? isNaN(fcxIn1680.substring(0, fcxBind7980)) ||
          isNaN(fcxIn1680.substring(fcxBind7980 + 1, fcxIn1680.length - 1))
          ? fcxH.NUM_ERROR
          : Number(fcxIn1680.substring(fcxBind7980 + 1, fcxIn1680.length - 1))
        : isNaN(fcxIn1680.substring(0, fcxBind7981)) ||
            isNaN(fcxIn1680.substring(fcxBind7981 + 1, fcxIn1680.length - 1))
          ? fcxH.NUM_ERROR
          : -Number(fcxIn1680.substring(fcxBind7981 + 1, fcxIn1680.length - 1))
      : fcxH.NUM_ERROR
    : fcxBind7983
      ? isNaN(fcxIn1680.substring(0, fcxIn1680.length - 1))
        ? fcxH.NUM_ERROR
        : fcxIn1680.substring(0, fcxIn1680.length - 1)
      : isNaN(fcxIn1680)
        ? fcxH.NUM_ERROR
        : 0;
}

/** Legacy aliases. */
export const workbookHelper893 = complexReal;
export const $4 = complexImag;
