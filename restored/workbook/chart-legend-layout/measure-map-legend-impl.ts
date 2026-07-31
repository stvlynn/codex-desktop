// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map-legend size measure (legacy abe).
// Stage-3 wave-108.

import { cllH } from "./boundary-hooks";

void cllH;

export function measureMapLegend(
  cllIn2808: any,
  cllIn2809: any,
  cllIn2810: any,
  cllIn2811: any,
) {
  let cllBind10530 = cllIn2809.legend?.textStyle?.fontSize,
    cllBind10531 = cllBind10530 ? cllH.bh152(cllBind10530) : 11;
  cllIn2808.font = `${cllBind10531}px ${cllH.bh387(cllIn2809.legend?.textStyle)}`;
  let cllBind10532 = cllH.bh489(cllIn2809, cllIn2810);
  if (!cllBind10532)
    return {
      width: 0,
      height: 0,
    };
  let cllBind10533 = cllIn2808.measureText(cllBind10532.minLabel).width,
    cllBind10534 = cllIn2808.measureText(cllBind10532.maxLabel).width,
    cllBind10535 = cllBind10532.seriesName
      ? cllIn2808.measureText(cllBind10532.seriesName).width
      : 0,
    cllBind10536 = !!cllBind10532.seriesName,
    cllBind10537 = cllBind10536 ? cllBind10531 : 0,
    cllBind10538 = cllBind10536 ? cllH.seriesGap : 0;
  if (cllH.bh487(cllIn2811))
    return {
      width: cllH.legendPad * 2 + Math.max(cllH.swatchSize, cllBind10535),
      height:
        cllH.legendPad * 2 +
        cllBind10537 +
        cllBind10538 +
        cllH.rampHeight +
        cllH.labelGap +
        cllBind10531,
    };
  let cllBind10539 = Math.max(cllBind10533, cllBind10534),
    cllBind10540 = Math.max(
      cllH.rampHeight + (cllBind10539 > 0 ? cllH.labelGap : 0) + cllBind10539,
      cllBind10535,
    );
  return {
    width: cllH.legendPad * 2 + cllBind10540,
    height: cllH.legendPad * 2 + cllBind10537 + cllBind10538 + cllH.swatchSize,
  };
}

/** Legacy alias. */
export const abe = measureMapLegend;
