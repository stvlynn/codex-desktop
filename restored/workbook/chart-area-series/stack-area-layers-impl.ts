// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: stacked/standard area series layers.
// Stage-3 wave-113.

import { workbookHelper348 } from "../chart-asset";

void workbookHelper348;

export function stackAreaLayers(casIn873: any, casIn874: any) {
  let casBind5595 = workbookHelper348(casIn873),
    casBind5596 = casIn873.series
      .map((item, index) => index)
      .filter((item) => !casIn874?.has(item)),
    casBind5597 = casIn873.areaOptions?.grouping,
    casBind5598 =
      casBind5597 === _presentationPn.AREA_GROUPING_STACKED
        ? "stacked"
        : casBind5597 === _presentationPn.AREA_GROUPING_PERCENT_STACKED
          ? "percent"
          : "standard",
    casBind5599 = casBind5596.map((item) => ({
      seriesIndex: item,
      tuples: casBind5595.map(() => ({
        start: 0,
        end: 0,
      })),
    }));
  if (casBind5598 === "standard" || casBind5596.length === 0)
    return (
      casBind5595.forEach((item, index) => {
        casBind5596.forEach((_item) => {
          let casBind19026 = casBind5599.find(
            (__item) => __item.seriesIndex === _item,
          );
          if (!casBind19026) return;
          let casBind19027 = casIn873.series[_item]?.values[index] ?? 0;
          casBind19026.tuples[index] = {
            start: 0,
            end: casBind19027,
          };
        });
      }),
      {
        categories: casBind5595,
        visibleSeries: casBind5596,
        mode: casBind5598,
        layers: casBind5599,
      }
    );
  let casBind5600 = casBind5595.map((item, index) => {
      let casBind19253 = {};
      return (
        casBind5596.forEach((_item) => {
          let casBind22050 = casIn873.series[_item];
          casBind19253[String(_item)] = casBind22050?.values[index] ?? 0;
        }),
        casBind19253
      );
    }),
    casBind5601 = AppInitialWrt()
      .keys(casBind5596.map((item) => String(item)))
      .value((casIn16360, casIn16361) => casIn16360[casIn16361] ?? 0)
      .order(AppInitialKrt);
  return (
    casBind5598 === "percent"
      ? casBind5601.offset(AppInitialVrt)
      : casBind5601.offset(AppInitialZrt),
    casBind5601(casBind5600).forEach((item) => {
      let casBind14943 = Number.parseInt(item.key, 10),
        casBind14944 = casBind5599.find(
          (_item) => _item.seriesIndex === casBind14943,
        );
      casBind14944 &&
        casBind5595.forEach((_item, index) => {
          let casBind18206 = item[index];
          if (!casBind18206) return;
          let casBind18207 = Number.isFinite(casBind18206[0])
              ? casBind18206[0]
              : 0,
            casBind18208 = Number.isFinite(casBind18206[1])
              ? casBind18206[1]
              : 0;
          casBind14944.tuples[index] = {
            start: casBind18207,
            end: casBind18208,
          };
        });
    }),
    {
      categories: casBind5595,
      visibleSeries: casBind5596,
      mode: casBind5598,
      layers: casBind5599,
    }
  );
}

export const hxe = stackAreaLayers;
