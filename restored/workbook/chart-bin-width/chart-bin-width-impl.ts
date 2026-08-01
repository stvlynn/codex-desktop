// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram bin-width resolver (legacy gSe).
// Stage-3 wave-128.

import { deviation } from "../../vendor/d3-array-stats";
import { cbwH } from "./boundary-hooks";

export function resolveHistogramBinWidth(
  cbwIn3726: any,
  cbwIn3727: any,
  cbwIn3728: any,
) {
  let cbwBind12403 = cbwH.coerceBinNumber(cbwIn3728?.binWidth);
  if (cbwBind12403 !== undefined && cbwBind12403 > 0) return cbwBind12403;
  let cbwBind12404 = cbwH.coerceBinNumber(cbwIn3728?.binCount);
  if (cbwBind12404 !== undefined && cbwBind12404 > 0)
    return cbwIn3727 / Math.max(1, Math.floor(cbwBind12404));
  let cbwBind12405 = deviation(cbwIn3726);
  if (
    cbwBind12405 !== undefined &&
    Number.isFinite(cbwBind12405) &&
    cbwBind12405 > 0
  ) {
    let cbwBind17797 = (3.5 * cbwBind12405) / Math.cbrt(cbwIn3726.length),
      cbwBind17798 = 10 ** Math.floor(Math.log10(cbwBind17797)),
      cbwBind17799 = cbwBind17797 / cbwBind17798;
    return (
      [1, 2, 4, 5, 10].reduce((accumulator, current) =>
        Math.abs(current - cbwBind17799) < Math.abs(accumulator - cbwBind17799)
          ? current
          : accumulator,
      ) * cbwBind17798
    );
  }
  return cbwIn3727;
}

export const gSe = resolveHistogramBinWidth;
