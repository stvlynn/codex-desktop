// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: max visible data-label font (legacy tSe/nSe).
// Stage-3 wave-127.

import { En } from "../presentation-protobuf";
import { hundredthsPointToCssPx } from "../font-stack";
import { resolveDataLabelText } from "../chart-data-labels";

export function maxVisibleDataLabelFontPx(cdlfIn5192: any) {
  let cdlfBind14710;
  for (let cdlfBind15604 of cdlfIn5192.series)
    for (
      let cdlfBind16227 = 0;
      cdlfBind16227 < cdlfBind15604.values.length;
      cdlfBind16227 += 1
    ) {
      let cdlfBind17324 = cdlfBind15604.values[cdlfBind16227];
      if (cdlfBind17324 === undefined || !Number.isFinite(cdlfBind17324))
        continue;
      let cdlfBind17325 = resolveDataLabelText(
        cdlfIn5192,
        cdlfBind15604,
        cdlfBind16227,
        cdlfBind17324,
      );
      if (!isOutEndDataLabel(cdlfBind17325)) continue;
      let cdlfBind17326 = cdlfBind17325.textStyle?.fontSize
        ? hundredthsPointToCssPx(cdlfBind17325.textStyle.fontSize)
        : 10;
      cdlfBind14710 = Math.max(cdlfBind14710 ?? 0, cdlfBind17326);
    }
  return cdlfBind14710;
}
export function isOutEndDataLabel(cdlfIn9503: any) {
  return cdlfIn9503.show
    ? cdlfIn9503.position === En.DATA_LABEL_POSITION_OUT_END ||
        cdlfIn9503.position === En.DATA_LABEL_POSITION_UNSPECIFIED
    : false;
}

export const tSe = maxVisibleDataLabelFontPx;
export const nSe = isOutEndDataLabel;
