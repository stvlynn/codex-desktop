// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-41: chart dataLabel/bar/pie/area option serializers (legacy cfe…ffe).

import type { LooseBag } from "./types";
import { fillToConfig } from "./chart-fill-config";
import { serializeChartStroke } from "./chart-series-serialize";

export function serializeDataLabels(opIn5481: LooseBag): LooseBag | undefined {
  let opBind15289 = opIn5481.dataLabels,
    opBind15290 = {
      position: opBind15289.position,
      showValue: opBind15289.showValue,
      showSeriesName: opBind15289.showSeriesName,
      showCategoryName: opBind15289.showCategoryName,
      showPercent: opBind15289.showPercent,
      showLeaderLines: opBind15289.showLeaderLines,
    };
  return Object.values(opBind15290).some((item) => item === true)
    ? opBind15290
    : undefined;
}
export function serializeBarOptions(opIn5440: LooseBag): LooseBag | undefined {
  let opBind15206 = opIn5440.barOptions,
    opBind15207 = {
      direction: opBind15206.direction,
      grouping: opBind15206.grouping,
      varyColors: opBind15206.varyColors ? true : undefined,
      gapWidth: opBind15206.gapWidth,
      gapDepth: opBind15206.gapDepth,
      overlap: opBind15206.overlap,
      bar3dShape: opBind15206.bar3dShape,
    };
  return Object.values(opBind15207).some((item) => item !== undefined)
    ? opBind15207
    : undefined;
}
export function serializePieOptions(opIn10796: LooseBag): LooseBag | undefined {
  let opBind21326 = opIn10796.pieOptions.firstSliceAngle;
  return opBind21326 === undefined
    ? undefined
    : {
        firstSliceAngle: opBind21326,
      };
}
export function serializeDoughnutOptions(
  opIn6496: LooseBag,
): LooseBag | undefined {
  let opBind16701 = opIn6496.doughnutOptions.holeSize,
    opBind16702 = opIn6496.doughnutOptions.firstSliceAngle;
  return opBind16701 !== undefined || opBind16702 !== undefined
    ? {
        ...(opBind16701 === undefined
          ? {}
          : {
              holeSize: opBind16701,
            }),
        ...(opBind16702 === undefined
          ? {}
          : {
              firstSliceAngle: opBind16702,
            }),
      }
    : undefined;
}
export function serializeChartAreaStyle(
  opIn8172: unknown,
  opIn8173: LooseBag,
): LooseBag | undefined {
  let opBind18681 = fillToConfig(opIn8172),
    opBind18682 = serializeChartStroke(opIn8173);
  if (!(opBind18681 === undefined && opBind18682 === undefined))
    return {
      ...(opBind18681 === undefined
        ? {}
        : {
            fill: opBind18681,
          }),
      ...(opBind18682 === undefined
        ? {}
        : {
            line: opBind18682,
          }),
    };
}
