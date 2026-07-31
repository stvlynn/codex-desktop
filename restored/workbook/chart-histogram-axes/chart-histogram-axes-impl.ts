// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram axis paint (legacy gCe).
// Stage-3 wave-96. Wave-89 chart-paint hook was misnamed paintDoughnut.

import { Wn as _presentationWn } from "../presentation-protobuf";
import { resolveColorToCssRgba } from "../color-resolve";
import { chaH } from "./boundary-hooks";

/** Legacy Binding1217 — near-equality epsilon (px). */
const AXIS_NEAR_EPS = 0.5;
/** Legacy Binding1218 — label inset (px). */
const AXIS_LABEL_INSET = 6;
/** Legacy Binding1219 — title gap (px). */
const AXIS_TITLE_GAP = 8;

void _presentationWn;
void resolveColorToCssRgba;
void chaH;
void AXIS_NEAR_EPS;
void AXIS_LABEL_INSET;
void AXIS_TITLE_GAP;

function nearEqualPx(chaIn14391: any, chaIn14392: any) {
  return (
    Math.abs(chaIn14391 - chaIn14392) <= AXIS_NEAR_EPS
  );
}
export function paintHistogramAxes(chaIn270: any, chaIn271: any, chaIn272: any, chaIn273: any, chaIn274: any, chaIn275: any, ) {
  let chaBind3407 = chaIn271.xAxis,
    chaBind3408 = chaIn271.yAxis,
    chaBind3409 = chaH.bh428(
      chaBind3407,
      chaIn275,
    ),
    chaBind3410 = chaH.bh428(
      chaBind3408,
      chaIn275,
    ),
    chaBind3411 = chaIn273.y + chaIn273.height,
    chaBind3412 = chaIn273.x;
  chaIn270.save();
  chaIn270.lineWidth = 1;
  let chaBind3413 = !!chaBind3407?.deleted,
    chaBind3414 = !!chaBind3408?.deleted,
    chaBind3415 = 0;
  if (
    (!chaBind3413 &&
      chaBind3407?.line?.fill?.color &&
      ((chaIn270.strokeStyle = chaBind3409.lineColor ?? "#666"),
      chaIn270.beginPath(),
      chaIn270.moveTo(chaIn273.x, chaBind3411),
      chaIn270.lineTo(
        chaIn273.x + chaIn273.width,
        chaBind3411,
      ),
      chaIn270.stroke()),
    !chaBind3414 &&
      chaBind3408?.line?.fill?.color &&
      ((chaIn270.strokeStyle = chaBind3410.lineColor ?? "#666"),
      chaIn270.beginPath(),
      chaIn270.moveTo(chaBind3412, chaIn273.y),
      chaIn270.lineTo(
        chaBind3412,
        chaIn273.y + chaIn273.height,
      ),
      chaIn270.stroke()),
    !chaBind3414)
  ) {
    let chaBind6440 = Math.max(
        2,
        Math.floor(chaIn273.height / 60),
      ),
      chaBind6441 = chaH.bh440({
        ctx: chaIn270,
        axis: chaBind3408,
        scale: chaIn272.y,
        preferredTickCount: chaBind6440,
        themeMap: chaIn275,
      }),
      chaBind6442 = chaBind6441.ticks,
      chaBind6443 =
        chaBind3408?.majorTickMark !== undefined &&
        chaBind3408.majorTickMark !== _presentationWn.TICK_MARK_UNSPECIFIED &&
        chaBind3408.majorTickMark !== _presentationWn.TICK_MARK_NONE,
      chaBind6444 = !!chaBind3408?.majorGridlines?.fill?.color,
      chaBind6445 =
        chaBind3410.gridLineColor ?? chaBind3410.lineColor;
    chaIn270.font = chaH.bh430(chaBind3410);
    chaIn270.fillStyle = chaBind3410.textColor;
    chaIn270.textAlign = "right";
    chaIn270.textBaseline = "middle";
    chaBind6442.forEach((item) => {
      let chaBind10635 = chaIn272.y(item);
      if (
        Number.isFinite(chaBind10635) &&
        (chaBind6444 &&
          !nearEqualPx(chaBind10635, chaBind3411) &&
          (chaIn270.save(),
          (chaIn270.strokeStyle = chaBind6445 ?? "#666"),
          chaIn270.beginPath(),
          chaIn270.moveTo(chaIn273.x, chaBind10635),
          chaIn270.lineTo(
            chaIn273.x + chaIn273.width,
            chaBind10635,
          ),
          chaIn270.stroke(),
          chaIn270.restore()),
        chaBind6443 &&
          ((chaIn270.strokeStyle =
            chaBind3410.lineColor ?? "#666"),
          chaIn270.beginPath(),
          chaIn270.moveTo(
            chaBind3412 - 4,
            chaBind10635,
          ),
          chaIn270.lineTo(chaBind3412, chaBind10635),
          chaIn270.stroke()),
        !chaBind6441.hideTickLabels)
      ) {
        let chaBind22082 = chaH.bh439(
          item,
          chaBind3408?.numberFormatCode,
        );
        chaIn270.fillText(
          chaBind22082,
          chaBind3412 - 6,
          chaBind10635,
        );
      }
    });
    chaBind3415 = Math.max(
      chaBind3415,
      Math.max(0, chaBind6441.labelBandWidth - AXIS_LABEL_INSET),
    );
  }
  if (!chaBind3413) {
    let chaBind6523 = chaIn274.bins.length,
      chaBind6524 = chaBind3411 + 4 + 2,
      chaBind6525 =
        chaBind6523 > 0
          ? chaBind3409.fontSize + AXIS_LABEL_INSET
          : 0;
    chaBind6523 > 0 &&
      ((chaIn270.font = chaH.bh430(chaBind3409)),
      (chaIn270.fillStyle = chaBind3409.textColor),
      (chaIn270.textAlign = "center"),
      (chaIn270.textBaseline = "top"),
      chaIn274.bins.forEach((item) => {
        let chaBind11949 = chaIn272.x(item.x0),
          chaBind11950 = chaIn272.x(item.x1);
        if (
          !Number.isFinite(chaBind11949) ||
          !Number.isFinite(chaBind11950)
        )
          return;
        let chaBind11951 =
            chaBind11949 +
            (chaBind11950 - chaBind11949) / 2,
          chaBind11952 = item.label ?? "";
        chaBind3407?.majorTickMark !== undefined &&
          chaBind3407.majorTickMark !== _presentationWn.TICK_MARK_UNSPECIFIED &&
          chaBind3407.majorTickMark !== _presentationWn.TICK_MARK_NONE &&
          ((chaIn270.strokeStyle =
            chaBind3409.lineColor ?? "#666"),
          chaIn270.beginPath(),
          chaIn270.moveTo(chaBind11951, chaBind3411),
          chaIn270.lineTo(
            chaBind11951,
            chaBind3411 + 4,
          ),
          chaIn270.stroke());
        chaIn270.fillText(
          chaBind11952,
          chaBind11951,
          chaBind6524,
        );
      }));
    let chaBind6526 = chaH.bh438(
      chaIn275,
      chaBind3407?.title,
      chaBind3407?.titleTextStyle,
      chaBind3409.fontSize,
      0,
    );
    if (chaBind6526) {
      let chaBind13743 = chaBind3407?.titleTextStyle,
        chaBind13744 = chaBind13743?.fill?.color
          ? resolveColorToCssRgba(chaBind13743.fill.color, chaIn275)
          : chaBind3409.textColor;
      chaIn270.save();
      chaIn270.fillStyle =
        chaBind13744 ?? chaBind3409.textColor;
      chaIn270.font = chaBind6526.font;
      chaIn270.textAlign = "center";
      chaIn270.textBaseline = "middle";
      chaIn270.translate(
        chaIn273.x + chaIn273.width / 2,
        chaBind3411 +
          chaBind6525 +
          AXIS_TITLE_GAP +
          chaBind6526.height / 2,
      );
      chaIn270.rotate(chaBind6526.rotationRad);
      chaIn270.fillText(chaBind6526.text, 0, 0);
      chaIn270.restore();
    }
  }
  if (!chaBind3414) {
    let chaBind11953 =
        chaBind3415 > 0 ? chaBind3415 + AXIS_LABEL_INSET : 0,
      chaBind11954 = chaH.bh438(
        chaIn275,
        chaBind3408?.title,
        chaBind3408?.titleTextStyle,
        chaBind3410.fontSize,
        -90,
      );
    if (chaBind11954) {
      let chaBind13713 = chaBind3408?.titleTextStyle,
        chaBind13714 = chaBind13713?.fill?.color
          ? resolveColorToCssRgba(chaBind13713.fill.color, chaIn275)
          : chaBind3410.textColor;
      chaIn270.save();
      chaIn270.fillStyle =
        chaBind13714 ?? chaBind3410.textColor;
      chaIn270.font = chaBind11954.font;
      chaIn270.textAlign = "center";
      chaIn270.textBaseline = "middle";
      chaIn270.translate(
        chaIn273.x -
          chaBind11953 -
          AXIS_TITLE_GAP -
          chaBind11954.width / 2,
        chaIn273.y + chaIn273.height / 2,
      );
      chaIn270.rotate(chaBind11954.rotationRad);
      chaIn270.fillText(chaBind11954.text, 0, 0);
      chaIn270.restore();
    }
  }
  chaIn270.restore();
}

/** Legacy alias. */
export const gCe = paintHistogramAxes;
