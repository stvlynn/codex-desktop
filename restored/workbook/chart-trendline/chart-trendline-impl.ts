// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart trendline paint (legacy helper525).
// Stage-3 wave-97.

import { Kn } from "../presentation-protobuf";
import { ctlH } from "./boundary-hooks";

/** Legacy Binding1145 — default trendline type name. */
const DEFAULT_TRENDLINE_TYPE = "linear";
/** Legacy Binding1146 — protobuf trendline type → name. */
const TRENDLINE_TYPE_PROTO_TO_NAME: Record<number, string> = {
  [Kn.TRENDLINE_TYPE_LINEAR]: "linear",
  [Kn.TRENDLINE_TYPE_EXPONENTIAL]: "exponential",
  [Kn.TRENDLINE_TYPE_LOGARITHMIC]: "logarithmic",
  [Kn.TRENDLINE_TYPE_POLYNOMIAL]: "polynomial",
  [Kn.TRENDLINE_TYPE_POWER]: "power",
  [Kn.TRENDLINE_TYPE_MOVING_AVERAGE]: "movingAverage",
};

void Kn;
void ctlH;
void DEFAULT_TRENDLINE_TYPE;
void TRENDLINE_TYPE_PROTO_TO_NAME;

export function paintChartTrendline(ctlIn577: any, ctlIn578: any, ctlIn579: any, ctlIn580: any, ctlIn581: any, ctlIn582: any, ctlIn583: any, ctlIn584: any, ctlIn585: any, ctlIn586: any, ) {
  let ctlBind4550 = [],
    ctlBind4551 = [];
  for (
    let ctlBind18134 = 0;
    ctlBind18134 < ctlIn581.length;
    ctlBind18134++
  ) {
    let ctlBind19166 = ctlIn581[ctlBind18134],
      ctlBind19167 = ctlIn584.xCenter(ctlBind19166);
    ctlBind19167 !== undefined &&
      Number.isFinite(ctlBind19167) &&
      (ctlBind4551[ctlBind18134] = ctlBind19167);
    let ctlBind19168 = ctlIn582[ctlBind18134];
    ctlBind19168 === undefined ||
      !Number.isFinite(ctlBind19168) ||
      ctlBind4550.push({
        x: ctlBind18134,
        y: ctlBind19168,
      });
  }
  if (ctlBind4550.length < 2) return;
  let ctlBind4552 = (ctlIn1721) => {
    let ctlBind8062 = ctlBind4551.findIndex((item) =>
        Number.isFinite(item),
      ),
      ctlBind8063 = (() => {
        for (
          let ctlBind22265 = ctlBind4551.length - 1;
          ctlBind22265 >= 0;
          ctlBind22265--
        )
          if (Number.isFinite(ctlBind4551[ctlBind22265]))
            return ctlBind22265;
        return -1;
      })(),
      ctlBind8064 =
        ctlBind8062 >= 0 ? ctlBind4551[ctlBind8062] : 0,
      ctlBind8065 =
        ctlBind8063 >= 0
          ? ctlBind4551[ctlBind8063]
          : ctlBind8064,
      ctlBind8066 = 0;
    if (ctlBind8062 >= 0 && ctlBind8063 > ctlBind8062) {
      let ctlBind15795 = 0,
        ctlBind15796 = 0;
      for (
        let ctlBind17594 = ctlBind8062 + 1;
        ctlBind17594 <= ctlBind8063;
        ctlBind17594++
      ) {
        let ctlBind18525 =
            ctlBind4551[ctlBind17594 - 1],
          ctlBind18526 = ctlBind4551[ctlBind17594];
        if (
          !Number.isFinite(ctlBind18525) ||
          !Number.isFinite(ctlBind18526)
        )
          continue;
        let ctlBind18527 = ctlBind18526 - ctlBind18525;
        !Number.isFinite(ctlBind18527) ||
          ctlBind18527 <= 0 ||
          ((ctlBind15795 += ctlBind18527),
          (ctlBind15796 += 1));
      }
      ctlBind15796 > 0 &&
        (ctlBind8066 = ctlBind15795 / ctlBind15796);
    }
    if (ctlBind8066 > 0 && ctlIn1721 < ctlBind8062)
      return (
        ctlBind8064 +
        (ctlIn1721 - ctlBind8062) * ctlBind8066
      );
    if (ctlBind8066 > 0 && ctlIn1721 > ctlBind8063)
      return (
        ctlBind8065 +
        (ctlIn1721 - ctlBind8063) * ctlBind8066
      );
    let ctlBind8067 = Math.max(
        0,
        Math.min(ctlIn581.length - 1, Math.floor(ctlIn1721)),
      ),
      ctlBind8068 = Math.max(
        0,
        Math.min(ctlIn581.length - 1, Math.ceil(ctlIn1721)),
      ),
      ctlBind8069 =
        ctlBind4551[ctlBind8067] ?? ctlBind8064,
      ctlBind8070 =
        ctlBind4551[ctlBind8068] ?? ctlBind8069;
    if (ctlBind8067 === ctlBind8068) return ctlBind8069;
    let ctlBind8071 =
      (ctlIn1721 - ctlBind8067) /
      (ctlBind8068 - ctlBind8067);
    return (
      ctlBind8069 +
      (ctlBind8070 - ctlBind8069) * ctlBind8071
    );
  };
  ctlIn579.trendlines?.length &&
    ctlIn579.trendlines.forEach((item, index) => {
      ctlH.bh523(
        ctlIn577,
        ctlIn578,
        ctlIn579,
        ctlIn580,
        item,
        ctlIn583,
      );
      let ctlBind9156 =
          TRENDLINE_TYPE_PROTO_TO_NAME[item.type] ?? DEFAULT_TRENDLINE_TYPE,
        ctlBind9157 =
          ctlIn586?.[index] ??
          ctlH.bh352({
            type: ctlBind9156,
            points: ctlBind4550,
            polynomialOrder: item.order,
            movingAveragePeriod: item.period,
            forecastForward: item.forward,
            forecastBackward: item.backward,
            intercept: item.intercept,
            displayEquation: item.displayEquation,
            displayRSquared: item.displayRSquared,
          });
      if (!ctlBind9157 || ctlBind9157.points.length < 2) return;
      ctlIn577.beginPath();
      let ctlBind9158 = false;
      for (let ctlBind18573 of ctlBind9157.points) {
        let ctlBind19294 = ctlBind4552(ctlBind18573.x),
          ctlBind19295 = ctlIn584.y(ctlBind18573.y);
        !Number.isFinite(ctlBind19294) ||
          !Number.isFinite(ctlBind19295) ||
          (ctlBind9158
            ? ctlIn577.lineTo(
                ctlBind19294,
                ctlBind19295,
              )
            : (ctlIn577.moveTo(
                ctlBind19294,
                ctlBind19295,
              ),
              (ctlBind9158 = true)));
      }
      ctlBind9158 && ctlIn577.stroke();
      ctlH.bh524(
        ctlIn577,
        item,
        ctlBind9157,
        ctlIn583,
        ctlIn585,
      );
    });
}
