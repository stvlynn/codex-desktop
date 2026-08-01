// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: data-label text resolve (legacy helper #495).
// Stage-3 wave-109.

import { cdlH } from "./boundary-hooks";
import { hundredthsPointToCssPx } from "../font-stack";
import { axisHidesTickLabels } from "../chart-axis-reserve";
import { Cn } from "../spreadsheet-protobuf";
import { En, Vn as PresentationVn } from "../presentation-protobuf";

void cdlH;

export function isDataCallout(cdlIn14385: any) {
  return cdlIn14385?.kind === "dataCallout";
}
export function isDataLabelDeleted(cdlIn13674: any, cdlIn13675: any) {
  return cdlIn13675?.deleted ?? cdlIn13674?.deleted ?? false;
}
export function seriesShowsValueLabels(cdlIn7865: any) {
  return cdlIn7865.series.some((item) =>
    isDataLabelDeleted(cdlIn7865.dataLabels, item.dataLabels)
      ? false
      : item.dataLabels === undefined
        ? cdlIn7865.dataLabels?.showValue === true
        : item.dataLabels.showValue === true,
  );
}
export function resolveDataLabelText(
  cdlIn2186: any,
  cdlIn2187: any,
  cdlIn2188: any,
  cdlIn2189: any,
) {
  let cdlBind9192 = cdlIn2186.dataLabels,
    cdlBind9193 = cdlIn2187.dataLabels,
    cdlBind9194;
  if (cdlIn2187.dataLabelOverrides)
    for (
      let cdlBind19704 = cdlIn2187.dataLabelOverrides.length - 1;
      cdlBind19704 >= 0;
      --cdlBind19704
    ) {
      let cdlBind21501 = cdlIn2187.dataLabelOverrides[cdlBind19704];
      if (cdlBind21501?.idx === cdlIn2188) {
        cdlBind9194 = cdlBind21501;
        break;
      }
    }
  let cdlBind9195 =
      cdlBind9194?.showValue ??
      (cdlBind9193 === undefined
        ? cdlBind9192?.showValue === true
        : cdlBind9193.showValue === true),
    cdlBind9196 = isDataLabelDeleted(cdlBind9192, cdlBind9193),
    cdlBind9197 =
      cdlBind9194?.position ??
      cdlBind9193?.position ??
      cdlBind9192?.position ??
      cdlH.En.DATA_LABEL_POSITION_OUT_END,
    cdlBind9198 = cdlBind9194?.text ?? "";
  cdlBind9198 ||= cdlH.formatNumber(
    cdlIn2189,
    cdlBind9193?.numberFormatCode ??
      cdlBind9192?.numberFormatCode ??
      cdlIn2187.valuesFormatCode ??
      undefined,
  );
  let cdlBind9199 =
    cdlBind9194?.textStyle ??
    cdlBind9193?.textStyle ??
    cdlBind9192?.textStyle ??
    undefined;
  return {
    show: !cdlBind9196 && cdlBind9195,
    position: cdlBind9197,
    callout:
      isDataCallout(cdlBind9194) ||
      isDataCallout(cdlBind9193) ||
      isDataCallout(cdlBind9192),
    text: cdlBind9198,
    textStyle: cdlBind9199,
  };
}

/** Legacy aliases. */
// Wave-130: out-end value label font size (legacy $xe).
export function outEndValueLabelFontSize(cdlIn4362: any) {
  let cdlBind13501 = cdlIn4362.barDirection;
  if (
    (cdlIn4362.type === Cn.CHART_TYPE_BAR ||
      cdlIn4362.type === Cn.CHART_TYPE_BAR_3D) &&
    cdlBind13501 === PresentationVn.BAR_DIRECTION_BAR &&
    (cdlIn4362.yAxis?.deleted === true || axisHidesTickLabels(cdlIn4362.yAxis))
  )
    return;
  let cdlBind13502 = cdlIn4362.dataLabels;
  if (
    !(
      cdlBind13502?.showValue !== true ||
      !seriesShowsValueLabels(cdlIn4362) ||
      cdlBind13502.position !== En.DATA_LABEL_POSITION_OUT_END
    )
  )
    return cdlBind13502.textStyle?.fontSize
      ? hundredthsPointToCssPx(cdlBind13502.textStyle.fontSize)
      : 10;
}

export const $xe = outEndValueLabelFontSize;
/** Compat alias for barrels. */
export const workbookHelper494 = isDataCallout;
