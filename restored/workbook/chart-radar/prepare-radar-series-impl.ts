// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: radar series preparation.
// Stage-3 wave-113.

import { workbookHelper348 } from "../chart-asset";

void workbookHelper348;

export function prepareRadarSeries(crIn1485: any, crIn1486: any) {
  let crBind7446 = workbookHelper348(crIn1485),
    crBind7447 = crBind7446.length,
    crBind7448 = crIn1485.series
      .map((item, index) => index)
      .filter((item) => !crIn1486?.has(item)),
    crBind7449 = crBind7448.map((item) => ({
      seriesIndex: item,
      values: Array.from(
        {
          length: crBind7447,
        },
        () => 0,
      ),
    })),
    crBind7450 = 1 / 0,
    crBind7451 = -1 / 0;
  crBind7446.forEach((item, index) => {
    crBind7448.forEach((_item) => {
      let crBind17595 = crIn1485.series[_item]?.values[index],
        crBind17596 =
          typeof crBind17595 == "number" && Number.isFinite(crBind17595)
            ? crBind17595
            : 0,
        crBind17597 = crBind7449.find((__item) => __item.seriesIndex === _item);
      crBind17597 &&
        ((crBind17597.values[index] = crBind17596),
        (crBind7450 = Math.min(crBind7450, crBind17596)),
        (crBind7451 = Math.max(crBind7451, crBind17596)));
    });
  });
  crBind7450 === 1 / 0 && (crBind7450 = 0);
  crBind7451 === -1 / 0 && (crBind7451 = 0);
  let crBind7452 =
      crIn1485.yAxis && crIn1485.yAxis.min !== undefined
        ? Number(crIn1485.yAxis.min)
        : undefined,
    crBind7453 =
      crIn1485.yAxis && crIn1485.yAxis.max !== undefined
        ? Number(crIn1485.yAxis.max)
        : undefined,
    crBind7454 =
      crBind7452 !== undefined && Number.isFinite(crBind7452)
        ? crBind7452
        : Math.min(0, crBind7450),
    crBind7455 =
      crBind7453 !== undefined && Number.isFinite(crBind7453)
        ? crBind7453
        : crBind7451;
  return (
    Number.isFinite(crBind7454) || (crBind7454 = 0),
    Number.isFinite(crBind7455) || (crBind7455 = 0),
    crBind7455 < crBind7451 &&
      crBind7453 === undefined &&
      (crBind7455 = crBind7451),
    crBind7455 === crBind7454 && (crBind7455 = crBind7454 + 1),
    {
      categories: crBind7446,
      visibleSeries: crBind7448,
      layers: crBind7449,
      domain: [crBind7454, crBind7455],
    }
  );
}

export const Cxe = prepareRadarSeries;
