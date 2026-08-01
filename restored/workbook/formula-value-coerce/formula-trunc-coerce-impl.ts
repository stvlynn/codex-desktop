// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: trunc coerce + first-cell unwrap (legacy D3e/O3e).
// Stage-3 wave-132.

import { isArrayValue } from "../formula-array";
import { isFormulaErrorToken } from "../formula-average-a";
import { workbookBinding1835 as valueError } from "../formula-stats";

export function D3e(fvcIn4203: any) {
  let fvcBind13250 = O3e(fvcIn4203);
  if (fvcBind13250 === undefined) return valueError;
  if (isFormulaErrorToken(fvcBind13250)) return fvcBind13250;
  if (
    fvcBind13250 instanceof Error ||
    fvcBind13250 == null ||
    fvcBind13250 === ""
  )
    return valueError;
  if (typeof fvcBind13250 == "number")
    return Number.isFinite(fvcBind13250)
      ? Math.trunc(fvcBind13250)
      : valueError;
  if (typeof fvcBind13250 == "boolean") return +!!fvcBind13250;
  if (typeof fvcBind13250 == "string") {
    let fvcBind20831 = fvcBind13250.trim();
    if (fvcBind20831 === "") return valueError;
    let fvcBind20832 = Number(fvcBind20831);
    return Number.isFinite(fvcBind20832)
      ? Math.trunc(fvcBind20832)
      : valueError;
  }
  return valueError;
}
export function O3e(props: any) {
  if (props === undefined) return;
  if (Array.isArray(props)) return props[0]?.[0] ?? null;
  let fvcBind20008 = props;
  return isArrayValue(fvcBind20008)
    ? (fvcBind20008.values[0]?.[0] ?? null)
    : fvcBind20008;
}

export const coerceTruncNumber = D3e;
export const unwrapFirstCell = O3e;
