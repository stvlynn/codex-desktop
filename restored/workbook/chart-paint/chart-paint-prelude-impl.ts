// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart canvas paint prelude
// (legacy chrome/rounded-rect prelude / NCe / FCe / ICe / PCe / Binding1224–1225).
// Stage-3 wave-89; kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Cn, tr } from "../presentation-protobuf";
import { resolveFillStyle } from "../canvas-fill";
import { cpH } from "./boundary-hooks";

export function chartCornerRadiusPx(cpIn11976: any) {
  return Math.min(
    workbookBinding1225,
    Math.max(
      0,
      Math.min(cpIn11976.width, cpIn11976.height) * workbookBinding1224,
    ),
  );
}
export function pathRoundedRect(cpIn3977: any, cpIn3978: any, cpIn3979: any) {
  let cpBind12872 = Math.min(cpIn3979, cpIn3978.width / 2, cpIn3978.height / 2),
    cpBind12873 = cpIn3978.x + cpIn3978.width,
    cpBind12874 = cpIn3978.y + cpIn3978.height;
  cpIn3977.beginPath();
  cpIn3977.moveTo(cpIn3978.x + cpBind12872, cpIn3978.y);
  cpIn3977.lineTo(cpBind12873 - cpBind12872, cpIn3978.y);
  cpIn3977.quadraticCurveTo(
    cpBind12873,
    cpIn3978.y,
    cpBind12873,
    cpIn3978.y + cpBind12872,
  );
  cpIn3977.lineTo(cpBind12873, cpBind12874 - cpBind12872);
  cpIn3977.quadraticCurveTo(
    cpBind12873,
    cpBind12874,
    cpBind12873 - cpBind12872,
    cpBind12874,
  );
  cpIn3977.lineTo(cpIn3978.x + cpBind12872, cpBind12874);
  cpIn3977.quadraticCurveTo(
    cpIn3978.x,
    cpBind12874,
    cpIn3978.x,
    cpBind12874 - cpBind12872,
  );
  cpIn3977.lineTo(cpIn3978.x, cpIn3978.y + cpBind12872);
  cpIn3977.quadraticCurveTo(
    cpIn3978.x,
    cpIn3978.y,
    cpIn3978.x + cpBind12872,
    cpIn3978.y,
  );
  cpIn3977.closePath();
}
export function fillChartBackground(
  cpIn9252: any,
  cpIn9253: any,
  cpIn9254: any,
  cpIn9255: any,
  cpIn9256: any = false,
) {
  cpIn9252.fillStyle = resolveFillStyle(
    cpIn9252,
    cpIn9253,
    cpIn9254,
    cpIn9255,
    "transparent",
  );
  cpIn9256
    ? (pathRoundedRect(cpIn9252, cpIn9253, chartCornerRadiusPx(cpIn9253)),
      cpIn9252.fill())
    : cpIn9252.fillRect(
        cpIn9253.x,
        cpIn9253.y,
        cpIn9253.width,
        cpIn9253.height,
      );
}
export function strokeChartBorder(
  cpIn8386: any,
  cpIn8387: any,
  cpIn8388: any,
  cpIn8389: any,
  cpIn8390: any = false,
) {
  cpIn8388 &&
    cpIn8388.fill?.color &&
    (cpH.bh433(cpIn8386, cpIn8388, cpIn8389, {
      widthPx: 0.5,
    }),
    cpIn8390
      ? (pathRoundedRect(cpIn8386, cpIn8387, chartCornerRadiusPx(cpIn8387)),
        cpIn8386.stroke())
      : cpIn8386.strokeRect(
          cpIn8387.x,
          cpIn8387.y,
          cpIn8387.width,
          cpIn8387.height,
        ));
}
export function paintChartChrome(
  cpIn2390: any,
  cpIn2391: any,
  cpIn2392: any,
  cpIn2393: any,
  cpIn2394: any = {},
) {
  let cpBind9599 = cpIn2391.chartFill ?? cpIn2391.chartSpaceFill,
    cpBind9600 = cpIn2391.chartLine ?? cpIn2391.chartSpaceLine,
    cpBind9601 = cpIn2391.roundedCorners === true;
  cpBind9599
    ? fillChartBackground(cpIn2390, cpIn2392, cpBind9599, cpIn2393, cpBind9601)
    : cpIn2394.excelDefaults &&
      ((cpIn2390.fillStyle = "#ffffff"),
      cpBind9601
        ? (pathRoundedRect(cpIn2390, cpIn2392, chartCornerRadiusPx(cpIn2392)),
          cpIn2390.fill())
        : cpIn2390.fillRect(
            cpIn2392.x,
            cpIn2392.y,
            cpIn2392.width,
            cpIn2392.height,
          ));
  let cpBind9602 = cpBind9600?.fill,
    cpBind9603 =
      cpBind9602 !== undefined &&
      cpBind9602.type === tr.FILL_TYPE_UNSPECIFIED &&
      cpBind9602.color === undefined;
  cpBind9600?.fill?.color
    ? strokeChartBorder(cpIn2390, cpIn2392, cpBind9600, cpIn2393, cpBind9601)
    : cpBind9603 ||
      (cpIn2394.excelDefaults &&
        (cpIn2390.save(),
        (cpIn2390.strokeStyle = "#d0d0d0"),
        (cpIn2390.lineWidth = 0.5),
        cpIn2390.setLineDash([]),
        cpBind9601
          ? (pathRoundedRect(cpIn2390, cpIn2392, chartCornerRadiusPx(cpIn2392)),
            cpIn2390.stroke())
          : cpIn2390.strokeRect(
              cpIn2392.x,
              cpIn2392.y,
              cpIn2392.width,
              cpIn2392.height,
            ),
        cpIn2390.restore()));
}
export function strokePlotAreaBorder(
  cpIn9998: any,
  cpIn9999: any,
  cpIn10000: any,
  cpIn10001: any,
) {
  cpIn9999.plotAreaFill &&
    fillChartBackground(cpIn9998, cpIn10000, cpIn9999.plotAreaFill, cpIn10001);
  cpIn9999.plotAreaLine?.fill?.color &&
    strokeChartBorder(cpIn9998, cpIn10000, cpIn9999.plotAreaLine, cpIn10001);
}
export let workbookBinding1224: number;
export let workbookBinding1225: number;
export const ensureChartPaintConsts = esmInit(() => {
  cpH.ensureWr();
  cpH.ensureFillResolveInit();
  cpH.ensureWorkbookBinding862();
  workbookBinding1224 = 0.05;
  workbookBinding1225 = 16;
});
export function axisCrossesZero(cpIn6809: any, cpIn6810: any) {
  if (cpIn6809.xAxis?.deleted) return false;
  let [cpBind17132 = 0, cpBind17133 = 0] = cpIn6810.y.domain(),
    cpBind17134 = Math.min(cpBind17132, cpBind17133),
    cpBind17135 = Math.max(cpBind17132, cpBind17133),
    cpBind17136 = cpH.bh405(cpIn6809.yAxis, cpIn6810.y),
    cpBind17137 = Math.max(1, cpBind17135 - cpBind17134) * 1e-9;
  return (
    Number.isFinite(cpBind17136) &&
    cpBind17136 > cpBind17134 + cpBind17137 &&
    cpBind17136 < cpBind17135 - cpBind17137
  );
}
export function doughnutHoleLayout(
  cpIn3407: any,
  cpIn3408: any,
  cpIn3409: any,
) {
  let cpBind11800 = Math.max(0, cpIn3409 + 4);
  if (cpIn3407.type !== Cn.CHART_TYPE_DOUGHNUT)
    return {
      x: cpIn3408.x,
      y: cpIn3408.y + Math.max(0, (cpIn3408.height - cpBind11800) / 2),
      width: cpIn3408.width,
      height: cpBind11800,
    };
  let cpBind11801 = cpIn3408.x + cpIn3408.width / 2,
    cpBind11802 = cpIn3408.y + cpIn3408.height / 2,
    cpBind11803 = Math.min(cpIn3408.width, cpIn3408.height) / 2,
    cpBind11804 = Math.max(
      0,
      Math.min(100, cpIn3407.doughnutOptions?.holeSize ?? 55),
    ),
    cpBind11805 = cpBind11803 * 2 * (cpBind11804 / 100),
    cpBind11806 = Math.min(
      Math.min(cpIn3408.width, cpIn3408.height),
      Math.max(cpBind11805, cpIn3409 + 8),
    );
  return {
    x: cpBind11801 - cpBind11806 / 2,
    y: cpBind11802 - cpBind11806 / 2,
    width: cpBind11806,
    height: cpBind11806,
  };
}
