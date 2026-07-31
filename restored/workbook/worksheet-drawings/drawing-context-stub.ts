// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: worksheet drawing context stub (legacy Sve).

import { chartTypeNameToProto } from "../chart-proto-name-maps";
import { getChartAssetClass, getImageAssetClass } from "./boundary-hooks";

export function createWorksheetDrawingContext(wdIn2205: any = undefined) {
  let wdBind9233 = {
    stub: () => {},
  };
  return {
    stub: () => {},
    getTextStyleByName: () => undefined,
    getImageById: (wdIn10978) => {
      let wdBind21500 = wdIn2205
        ?.getImages?.()
        .find((wdIn16421) => wdIn16421.id === wdIn10978);
      return wdBind21500
        ? new (getImageAssetClass() as any)(wdBind9233, wdBind21500)
        : undefined;
    },
    createImageAsset: (wdIn9117 = {}) => {
      let wdBind19700 = wdIn2205?.createImageAsset?.(wdIn9117);
      if (wdBind19700)
        return new (getImageAssetClass() as any)(wdBind9233, wdBind19700);
      throw Error("Worksheet drawings need workbook image asset context.");
    },
    getChartById: () => undefined,
    createChartAsset: (wdIn6467) => {
      let wdBind16673 = new (getChartAssetClass() as any)({
        type: chartTypeNameToProto[wdIn6467],
      });
      return (
        (wdBind16673.hasLegend = true),
        (wdBind16673.legend.position = "bottom"),
        wdIn6467 === "scatter" &&
          wdBind16673.scatterOptions.style === undefined &&
          (wdBind16673.scatterOptions.style = "marker"),
        wdBind16673
      );
    },
    attachChartAsset: (wdIn16656) => wdIn16656,
  };
}
