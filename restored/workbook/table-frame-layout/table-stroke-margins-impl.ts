// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table stroke + cell margins (legacy ETe/DTe/641/644/ITe).
// Stage-3 wave-133 — Binding1275 → DEFAULT_CELL_MARGINS; _V local fallback.

import { workbookSt } from "../canvas-paint/boundary-hooks";
import { Sr as _presentationSr } from "../presentation-protobuf";
import { workbookGt } from "../text-style";
import { DEFAULT_CELL_MARGINS } from "./table-frame-layout-impl";

export const TABLE_STROKE_FALLBACK = "#000000";

export function ETe(tflIn6599: any, tflIn6600: any, tflIn6601: any) {
  for (let tflBind17598 of tflIn6601) {
    if (
      ((tflIn6599.strokeStyle = workbookSt(
        tflBind17598.line.fill?.color,
        tflIn6600,
        TABLE_STROKE_FALLBACK,
      )),
      tflBind17598.line.compound === _presentationSr.COMPOUND_STYLE_DOUBLE)
    ) {
      DTe(tflIn6599, tflBind17598);
      continue;
    }
    tflIn6599.lineWidth = tflBind17598.widthPx;
    workbookHelper641(tflIn6599, tflBind17598, tflBind17598.crossPx);
  }
}
export function workbookHelper641(
  tflIn8090: any,
  tflIn8091: any,
  tflIn8092: any,
) {
  tflIn8090.beginPath();
  tflIn8091.orientation === "horizontal"
    ? (tflIn8090.moveTo(tflIn8091.startPx, tflIn8092),
      tflIn8090.lineTo(tflIn8091.endPx, tflIn8092))
    : (tflIn8090.moveTo(tflIn8092, tflIn8091.startPx),
      tflIn8090.lineTo(tflIn8092, tflIn8091.endPx));
  tflIn8090.stroke();
}
export function DTe(tflIn8802: any, tflIn8803: any) {
  let tflBind19347 = Math.max(0.5, tflIn8803.widthPx / 3),
    tflBind19348 = Math.max(1, tflIn8803.widthPx * 0.55);
  tflIn8802.lineWidth = tflBind19347;
  for (let tflBind22779 of [
    tflIn8803.crossPx - tflBind19348,
    tflIn8803.crossPx + tflBind19348,
  ])
    workbookHelper641(tflIn8802, tflIn8803, tflBind22779);
}
export function workbookHelper644(tflIn6096: any, tflIn6097: any) {
  return {
    left:
      tflIn6096.marginLeft === undefined
        ? tflIn6097.left
        : tflIn6096.marginLeft * workbookGt,
    right:
      tflIn6096.marginRight === undefined
        ? tflIn6097.right
        : tflIn6096.marginRight * workbookGt,
    top:
      tflIn6096.marginTop === undefined
        ? tflIn6097.top
        : tflIn6096.marginTop * workbookGt,
    bottom:
      tflIn6096.marginBottom === undefined
        ? tflIn6097.bottom
        : tflIn6096.marginBottom * workbookGt,
  };
}
export function ITe(props: any) {
  let tflBind16271 = props.properties?.cellMargins;
  return {
    left:
      tflBind16271?.left === undefined
        ? DEFAULT_CELL_MARGINS.left
        : tflBind16271.left * workbookGt,
    right:
      tflBind16271?.right === undefined
        ? DEFAULT_CELL_MARGINS.right
        : tflBind16271.right * workbookGt,
    top:
      tflBind16271?.top === undefined
        ? DEFAULT_CELL_MARGINS.top
        : tflBind16271.top * workbookGt,
    bottom:
      tflBind16271?.bottom === undefined
        ? DEFAULT_CELL_MARGINS.bottom
        : tflBind16271.bottom * workbookGt,
  };
}

export const fillTableBackground = ETe;
export const strokeTableGuide = workbookHelper641;
export const strokeDoubleCompound = DTe;
export const resolveMarginsFromStyle = workbookHelper644;
export const resolveCellMargins = ITe;
