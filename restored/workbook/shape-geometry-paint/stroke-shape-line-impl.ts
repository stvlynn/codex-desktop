// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: stroke shape line + preset geometry path.
// Stage-3 wave-112.

import { evalPresetGuides } from "../preset-shape";
import { drawShapePath } from "../shape-path";
import { resolveFillStyle, applyCanvasLineDash as M_ } from "../canvas-fill";
import { ur } from "../presentation-protobuf";

void evalPresetGuides;
void drawShapePath;
void resolveFillStyle;
void M_;
void ur;

export function drawPresetShapePath(
  sgpIn7623: any,
  sgpIn7624: any,
  { w, h, x = 0, y = 0, adjustments = {} }: any,
) {
  sgpIn7623.beginPath();
  sgpIn7623.save();
  sgpIn7623.translate(x, y);
  let sgpBind18114 = evalPresetGuides(sgpIn7624, w, h, adjustments);
  for (let sgpBind22887 of sgpIn7624.paths)
    drawShapePath(
      sgpIn7623,
      sgpBind22887,
      sgpBind18114,
      false,
      false,
      false,
      false,
    );
  sgpIn7623.restore();
}
export function strokePresetGeometry(
  sgpIn11247: any,
  sgpIn11248: any,
  sgpIn11249: any,
  sgpIn11250: any,
) {
  drawPresetShapePath(sgpIn11247, sgpIn11248.preset, {
    w: sgpIn11249,
    h: sgpIn11250,
    x: 0,
    y: 0,
    adjustments: sgpIn11248.adjustments,
  });
}
export function strokeShapeLine(
  sgpIn3436: any,
  sgpIn3437: any,
  sgpIn3438: any,
  sgpIn3439: any,
  sgpIn3440: any,
  sgpIn3441: any,
) {
  let sgpBind11873 = sgpIn3436.line,
    sgpBind11874 = sgpBind11873.toProto(),
    sgpBind11875 = sgpBind11873.width ?? 0;
  if (!sgpBind11874 || !Number.isFinite(sgpBind11875) || sgpBind11875 <= 0)
    return;
  let sgpBind11876 = resolveFillStyle(
      sgpIn3437,
      {
        x: 0,
        y: 0,
        width: sgpIn3440,
        height: sgpIn3441,
      },
      sgpBind11874.fill,
      sgpIn3438,
    ),
    sgpBind11877 =
      sgpBind11874.style === undefined ||
      sgpBind11874.style === ur.LINE_STYLE_UNSPECIFIED
        ? ur.LINE_STYLE_SOLID
        : sgpBind11874.style;
  if (
    (sgpIn3437.save(),
    (sgpIn3437.lineWidth = sgpBind11875),
    (sgpIn3437.strokeStyle = sgpBind11876),
    M_(sgpIn3437, sgpBind11877, sgpBind11875),
    sgpIn3439)
  ) {
    strokePresetGeometry(sgpIn3437, sgpIn3439, sgpIn3440, sgpIn3441);
    sgpIn3437.stroke();
    sgpIn3437.restore();
    return;
  }
  sgpIn3437.beginPath();
  sgpIn3437.rect(0, 0, sgpIn3440, sgpIn3441);
  sgpIn3437.stroke();
  sgpIn3437.restore();
}

export const Lwe = drawPresetShapePath;
