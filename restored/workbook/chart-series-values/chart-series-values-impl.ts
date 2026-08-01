// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: extract chart series point arrays (legacy helper #551).
// Stage-3 wave-104.

import { csvH } from "./boundary-hooks";

void csvH;

export function buildSeriesXValues(csvIn3395: any, csvIn3396: any, csvIn3397: any) {
  let csvBind11769 = [],
    csvBind11770 = csvIn3396.xValues ?? [],
    csvBind11771 = csvH.coerceChartNumber(
      csvIn3396,
      csvIn3395.categories,
    ),
    csvBind11772 = csvIn3397.length,
    csvBind11773 =
      csvBind11770.length > csvBind11772 &&
      csvIn3397.every((item) => item < csvBind11770.length),
    csvBind11774 =
      csvBind11771.length > csvBind11772 &&
      csvIn3397.every((item) => item < csvBind11771.length);
  for (let [
    csvBind15890,
    csvBind15891,
  ] of csvIn3397.entries()) {
    let csvBind16635 = csvBind15890;
    if (
      (csvBind11773 && (csvBind16635 = csvBind15891),
      csvBind16635 < csvBind11770.length)
    ) {
      csvBind11769.push(
        csvH.parseFiniteNumber(csvBind11770[csvBind16635]),
      );
      continue;
    }
    let csvBind16636 = csvBind15890;
    if (
      (csvBind11774 && (csvBind16636 = csvBind15891),
      csvBind16636 < csvBind11771.length)
    ) {
      let csvBind21751 = csvH.parseFiniteNumber(
        csvBind11771[csvBind16636],
      );
      if (csvBind21751 !== undefined) {
        csvBind11769.push(csvBind21751);
        continue;
      }
    }
    csvBind11769.push(csvBind15891);
  }
  return csvBind11769;
}
export function padSeriesValues(csvIn10586: any, csvIn10587: any) {
  let csvBind21062 = csvIn10586.valueIndices ?? [];
  return csvBind21062.length === csvIn10587
    ? csvBind21062
    : Array.from(
        {
          length: csvIn10587,
        },
        (csvIn16629, csvIn16630) => csvIn16630,
      );
}
export function extractChartSeriesValues(csvIn920: any, csvIn921: any = {}) {
  let csvBind5856 = csvIn921.hiddenSeriesIndices ?? new Set(),
    csvBind5857 = [],
    csvBind5858 = [],
    csvBind5859 = [],
    csvBind5860 = [];
  csvIn920.series.forEach((item, index) => {
    if (csvBind5856.has(index)) return;
    let csvBind9854 = item.values ?? [],
      csvBind9855 = csvBind9854.length,
      csvBind9856 = padSeriesValues(item, csvBind9855),
      csvBind9857 = buildSeriesXValues(csvIn920, item, csvBind9856),
      csvBind9858 = item.bubbleSizes ?? [],
      csvBind9859 =
        csvBind9858.length > csvBind9855 &&
        csvBind9856.every(
          (_item) => _item < csvBind9858.length,
        ),
      csvBind9860 = [];
    for (let [
      csvBind13342,
      csvBind13343,
    ] of csvBind9856.entries()) {
      let csvBind13922 = csvBind9854[csvBind13342],
        csvBind13923 = csvBind9857[csvBind13342],
        csvBind13924 = csvH.parseFiniteNumber(csvBind13922),
        csvBind13925 = csvH.parseFiniteNumber(csvBind13923);
      if (
        csvBind13925 === undefined ||
        csvBind13924 === undefined
      )
        continue;
      let csvBind13926 = {
        idx: csvBind13343,
        x: csvBind13925,
        y: csvBind13924,
      };
      if (csvIn921.includeBubbleSize) {
        let csvBind19904 = csvBind13342;
        csvBind9859 && (csvBind19904 = csvBind13343);
        let csvBind19905 = csvBind9858[csvBind19904],
          csvBind19906 = csvH.parseFiniteNumber(csvBind19905);
        csvBind19906 !== undefined &&
          ((csvBind13926.size = Math.max(0, csvBind19906)),
          csvBind5860.push(csvBind13926.size));
      }
      csvBind9860.push(csvBind13926);
      csvBind5858.push(csvBind13925);
      csvBind5859.push(csvBind13924);
    }
    csvBind5857.push({
      seriesIndex: index,
      series: item,
      points: csvBind9860,
    });
  });
  let csvBind5861 = AppInitialNat(csvBind5858),
    csvBind5862 = AppInitialNat(csvBind5859),
    csvBind5863 = 0;
  csvBind5861[0] !== undefined &&
    Number.isFinite(csvBind5861[0]) &&
    (csvBind5863 = csvBind5861[0]);
  let csvBind5864 = 1;
  csvBind5861[1] !== undefined &&
    Number.isFinite(csvBind5861[1]) &&
    (csvBind5864 = csvBind5861[1]);
  let csvBind5865 = 0;
  csvBind5862[0] !== undefined &&
    Number.isFinite(csvBind5862[0]) &&
    (csvBind5865 = csvBind5862[0]);
  let csvBind5866 = 1;
  csvBind5862[1] !== undefined &&
    Number.isFinite(csvBind5862[1]) &&
    (csvBind5866 = csvBind5862[1]);
  let csvBind5867;
  if (csvIn921.includeBubbleSize && csvBind5860.length > 0) {
    let csvBind18996 = AppInitialNat(csvBind5860);
    if (
      csvBind18996[0] === undefined ||
      csvBind18996[1] === undefined
    )
      throw Error("Expected a non-empty bubble size extent");
    let csvBind18997 = Math.max(0, csvBind18996[0]);
    csvBind5867 = [
      csvBind18997,
      Math.max(csvBind18997, csvBind18996[1]),
    ];
  }
  return {
    series: csvBind5857,
    extents: {
      x: [csvBind5863, csvBind5864],
      y: [csvBind5865, csvBind5866],
      size: csvBind5867,
    },
  };
}

/** Legacy aliases. */
export const fSe = buildSeriesXValues;
export const pSe = padSeriesValues;
/** Compat alias for barrels. */
export const workbookHelper551 = buildSeriesXValues;
