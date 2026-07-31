// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category/value axis paint for treemap/sunburst (legacy Tbe).
// Stage-3 wave-96. Wave-89 chart-paint hook was misnamed paintRadar.

import { Wn as _presentationWn } from "../presentation-protobuf";
import { ccaH } from "./boundary-hooks";

/** Legacy Binding925 — near-equality epsilon (px). */
const AXIS_NEAR_EPS = 0.5;
/** Legacy Binding926 — category label inset (px). */
const AXIS_LABEL_INSET = 6;

void _presentationWn;
void ccaH;
void AXIS_NEAR_EPS;
void AXIS_LABEL_INSET;

function nearEqualPx(ccaIn14386: any, ccaIn14387: any) {
  return Math.abs(ccaIn14386 - ccaIn14387) <= AXIS_NEAR_EPS;
}
export function paintCategoryAxes(
  ccaIn419: any,
  ccaIn420: any,
  ccaIn421: any,
  ccaIn422: any,
  ccaIn423: any = true,
  ccaIn424: any,
  ccaIn425: any,
) {
  let { x, y } = ccaIn421,
    ccaBind3872 = ccaH.bh419(ccaIn420);
  ccaIn419.save();
  ccaIn419.lineWidth = 1;
  let ccaBind3873 = ccaIn420.xAxis,
    ccaBind3874 = ccaIn420.yAxis,
    ccaBind3875 = !!ccaBind3873?.deleted,
    ccaBind3876 = x(ccaH.bh404(x, 0)),
    ccaBind3877 = ccaH.bh498(ccaIn420);
  if (!ccaBind3875) {
    let ccaBind5774 = ccaH.bh428(ccaBind3873, ccaIn424);
    ccaIn419.font = ccaH.bh430(ccaBind5774);
    ccaIn419.fillStyle = ccaBind5774.textColor;
    ccaIn419.strokeStyle = ccaBind5774.lineColor;
    ccaIn419.textAlign = ccaBind3877 ? "left" : "right";
    ccaIn419.textBaseline = "middle";
    let ccaBind5775 = ccaH.bh429(ccaBind3873);
    ccaBind5775 &&
      ccaBind3873?.line?.fill?.color &&
      (ccaIn419.beginPath(),
      ccaIn419.moveTo(ccaBind3876, ccaIn422.y),
      ccaIn419.lineTo(ccaBind3876, ccaIn422.y + ccaIn422.height),
      ccaIn419.stroke());
    let ccaBind5776 = ccaH.bh434(ccaBind3873),
      ccaBind5777 = ccaH.bh436(ccaBind3873),
      ccaBind5778 =
        ccaBind5776.tickLabelInterval !== undefined &&
        ccaBind5776.tickLabelInterval > 0
          ? Math.floor(ccaBind5776.tickLabelInterval)
          : 1,
      ccaBind5779 =
        ccaBind5776.tickMarkInterval !== undefined &&
        ccaBind5776.tickMarkInterval > 0
          ? Math.floor(ccaBind5776.tickMarkInterval)
          : ccaBind5778,
      ccaBind5780 = ccaH.bh435(ccaBind3873),
      ccaBind5781 =
        ccaIn425?.categoryLabelMaxWidth === undefined
          ? ccaIn425?.reservedLeft === undefined
            ? Math.min(140, Math.max(0, ccaIn422.x - 10))
            : Math.max(
                0,
                ccaIn425.reservedLeft - AXIS_LABEL_INSET - ccaBind5780,
              )
          : ccaIn425.categoryLabelMaxWidth,
      ccaBind5782 =
        ccaBind3873?.majorTickMark !== undefined &&
        ccaBind3873.majorTickMark !== _presentationWn.TICK_MARK_UNSPECIFIED &&
        ccaBind3873.majorTickMark !== _presentationWn.TICK_MARK_NONE;
    ccaBind3872.forEach((item, index) => {
      let ccaBind13415 = (y(item) ?? 0) + y.bandwidth() / 2,
        ccaBind13416 = ccaBind5779 <= 1 || index % ccaBind5779 === 0,
        ccaBind13417 = ccaBind5778 <= 1 || index % ccaBind5778 === 0;
      if (
        (ccaBind5775 &&
          ccaBind5782 &&
          ccaBind13416 &&
          (ccaIn419.beginPath(),
          ccaIn419.moveTo(ccaBind3876 + (ccaBind3877 ? 4 : -4), ccaBind13415),
          ccaIn419.lineTo(ccaBind3876, ccaBind13415),
          ccaIn419.stroke()),
        !ccaBind5777 && ccaBind13417)
      ) {
        let ccaBind21704 = ccaH.bh427(ccaIn419, item, ccaBind5781),
          ccaBind21705 = 6 + ccaBind5780;
        ccaIn419.fillText(
          ccaBind21704,
          ccaBind3876 + (ccaBind3877 ? ccaBind21705 : -ccaBind21705),
          ccaBind13415,
        );
      }
    });
  }
  let ccaBind3878 = !!ccaBind3874?.deleted,
    ccaBind3879 = ccaIn423 && !!ccaBind3874?.majorGridlines?.fill?.color;
  if (!ccaBind3878 || ccaBind3879) {
    let ccaBind7886 = ccaH.bh428(ccaBind3874, ccaIn424),
      ccaBind7887 = ccaH.bh429(ccaBind3874);
    ccaIn419.font = ccaH.bh430(ccaBind7886);
    ccaIn419.fillStyle = ccaBind7886.textColor;
    ccaIn419.strokeStyle = ccaBind7886.lineColor;
    ccaIn419.textAlign = "center";
    let ccaBind7888 = ccaH.bh499(ccaIn420);
    ccaIn419.textBaseline = ccaBind7888 ? "bottom" : "top";
    let ccaBind7889 = ccaBind7888 ? ccaIn422.y : ccaIn422.y + ccaIn422.height,
      ccaBind7890 = ccaBind7888 ? ccaBind7889 - 4 : ccaBind7889 + 4,
      ccaBind7891 = ccaBind7888 ? ccaBind7889 - 6 : ccaBind7889 + 6,
      ccaBind7892 = ccaBind7888 ? ccaIn422.y + ccaIn422.height : ccaBind7889;
    !ccaBind3878 &&
      ccaBind7887 &&
      (ccaIn419.beginPath(),
      ccaIn419.moveTo(ccaIn422.x, ccaBind7889),
      ccaIn419.lineTo(ccaIn422.x + ccaIn422.width, ccaBind7889),
      ccaIn419.stroke());
    let ccaBind7893 = ccaH.bh436(ccaBind3874);
    ccaH.bh406(ccaBind3874, x, 5).forEach((item) => {
      let ccaBind12541 = x(item);
      !ccaBind3878 &&
        ccaBind7887 &&
        (ccaIn419.beginPath(),
        ccaIn419.moveTo(ccaBind12541, ccaBind7889),
        ccaIn419.lineTo(ccaBind12541, ccaBind7890),
        ccaIn419.stroke());
      ccaBind3879 &&
        !nearEqualPx(ccaBind12541, ccaBind3876) &&
        (ccaIn419.save(),
        ccaH.bh433(ccaIn419, ccaBind3874?.majorGridlines, ccaIn424, {
          color: ccaBind7886.gridLineColor ?? ccaBind7886.lineColor,
          widthPx: 1,
        }),
        ccaIn419.beginPath(),
        ccaIn419.moveTo(ccaBind12541, ccaIn422.y),
        ccaIn419.lineTo(ccaBind12541, ccaBind7892),
        ccaIn419.stroke(),
        ccaIn419.restore());
      !ccaBind3878 &&
        !ccaBind7893 &&
        ccaIn419.fillText(
          ccaH.bh439(item, ccaBind3874?.numberFormatCode),
          ccaBind12541,
          ccaBind7891,
        );
    });
  }
  ccaIn419.restore();
}

/** Legacy alias. */
export const Tbe = paintCategoryAxes;
