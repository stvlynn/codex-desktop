// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: pie/donut data-label text + slice mid paint.
// Stage-3 wave-111.

import { En } from "../presentation-protobuf";
import { isDataLabelDeleted } from "../chart-data-labels";
import { cpsH } from "./boundary-hooks";

void En;
void isDataLabelDeleted;
void cpsH;

export function buildDataLabelText(
  cpsIn3600: any,
  cpsIn3601: any,
  cpsIn3602: any,
  cpsIn3603: any,
  cpsIn3604: any,
  cpsIn3605: any,
) {
  let cpsBind12128 = "text" in cpsIn3605 ? cpsIn3605.text : undefined;
  if (cpsBind12128) return cpsBind12128;
  let cpsBind12129 = cpsH.bh347(cpsIn3601, cpsIn3600.categories),
    cpsBind12130 = [];
  if (
    (cpsIn3605.showSeriesName &&
      cpsIn3601.name &&
      cpsBind12130.push(cpsIn3601.name),
    cpsIn3605.showCategoryName)
  ) {
    let cpsBind22985 = cpsBind12129[cpsIn3602];
    cpsBind22985 && cpsBind12130.push(cpsBind22985);
  }
  if (
    (cpsIn3605.showValue &&
      cpsBind12130.push(
        cpsH.formatValue(cpsIn3603, cpsIn3601.valuesFormatCode ?? undefined),
      ),
    cpsIn3605.showPercent &&
      cpsIn3604 > 0 &&
      cpsBind12130.push(`${Math.round((cpsIn3603 / cpsIn3604) * 100)}%`),
    cpsIn3605.showBubbleSize)
  ) {
    let cpsBind22533 = cpsIn3601.bubbleSizes?.[cpsIn3602];
    cpsBind22533 !== undefined &&
      cpsBind12130.push(cpsH.formatValue(cpsBind22533));
  }
  return cpsBind12130.join("\n");
}
export function paintSliceMidLabel(
  cpsIn2299: any,
  cpsIn2300: any,
  cpsIn2301: any,
  cpsIn2302: any,
  cpsIn2303: any,
) {
  let cpsBind9397 = cpsIn2300.dataLabels,
    cpsBind9398 = cpsIn2299.dataLabels;
  if (isDataLabelDeleted(cpsBind9398, cpsBind9397)) return;
  let cpsBind9399 = cpsIn2300.dataLabelOverrides?.find(
      (cpsIn16386) => cpsIn16386.idx === cpsIn2301,
    ),
    cpsBind9400 = cpsBind9399 ?? cpsBind9397 ?? cpsBind9398;
  if (!cpsBind9400) return;
  let cpsBind9401 = buildDataLabelText(
    cpsIn2299,
    cpsIn2300,
    cpsIn2301,
    cpsIn2302,
    cpsIn2303,
    cpsBind9400,
  );
  if (!cpsBind9401) return;
  let cpsBind9402 =
      cpsBind9400.position ??
      cpsBind9397?.position ??
      cpsBind9398?.position ??
      En.DATA_LABEL_POSITION_CENTER,
    cpsBind9403 =
      "showLeaderLines" in cpsBind9400
        ? (cpsBind9400.showLeaderLines ?? false)
        : (cpsBind9397?.showLeaderLines ??
          cpsBind9398?.showLeaderLines ??
          false);
  return {
    text: cpsBind9401,
    position:
      cpsBind9402 === En.DATA_LABEL_POSITION_UNSPECIFIED
        ? En.DATA_LABEL_POSITION_CENTER
        : cpsBind9402,
    textStyle:
      cpsBind9399?.textStyle ??
      cpsBind9397?.textStyle ??
      cpsBind9398?.textStyle,
    fill: cpsBind9399?.fill ?? cpsBind9397?.fill ?? cpsBind9398?.fill,
    stroke: cpsBind9399?.stroke ?? cpsBind9397?.stroke ?? cpsBind9398?.stroke,
    showLeaderLines: cpsBind9403,
  };
}

export const ube = buildDataLabelText;
export const dbe = paintSliceMidLabel;
