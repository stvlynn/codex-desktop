// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram binning (legacy helper555).
// Stage-3 wave-102.

import { Jn as _presentationJn } from "../presentation-protobuf";
import { chbinH } from "./boundary-hooks";
import { aggregateHistogramBins } from "./aggregate-histogram-bins-impl";

void _presentationJn;
void chbinH;

export function computeHistogramBins(chbIn937: any, chbIn938: any) {
  let chbBind5954 = chbIn938?.hiddenSeriesIndices,
    chbBind5955 = chbIn937.series.findIndex(
      (item, index) => !chbBind5954?.has(index),
    );
  if (chbBind5955 === -1)
    return {
      bins: [],
      extents: {
        x: [0, 1],
        y: [0, 1],
      },
      seriesIndex: -1,
    };
  let chbBind5956 = chbIn937.histogramOptions;
  if (chbBind5956?.aggregated) {
    let chbBind22874 = aggregateHistogramBins(
      chbIn937,
      chbBind5955,
      chbBind5956,
    );
    if (chbBind22874) return chbBind22874;
  }
  let chbBind5957 = (
    chbIn937.series[chbBind5955]?.values ?? []
  )
    .map((item) => chbinH.coerceNumber(item))
    .filter((item) => item !== undefined);
  if (chbBind5957.length === 0)
    return {
      bins: [],
      extents: {
        x: [0, 1],
        y: [0, 1],
      },
      seriesIndex: chbBind5955,
    };
  let [chbBind5958, chbBind5959] = chbinH.valueExtent(
      chbBind5957,
      chbBind5956,
    ),
    chbBind5960 = Math.max(
      chbBind5959 - chbBind5958,
      1,
    ),
    chbBind5961 = chbinH.binWidth(
      chbBind5957,
      chbBind5960,
      chbBind5956,
    ),
    chbBind5962 = chbinH.coerceNumber(chbBind5956?.binCount),
    chbBind5963 =
      chbBind5962 !== undefined && chbBind5962 > 0
        ? Math.max(1, Math.floor(chbBind5962))
        : Math.max(1, Math.ceil(chbBind5960 / chbBind5961)),
    chbBind5964 =
      chbBind5958 + chbBind5963 * chbBind5961,
    chbBind5965 =
      chbBind5956?.intervalClosed ===
      chbinH.INTERVAL_CLOSED_LEFT,
    chbBind5966 = Array.from(
      {
        length: chbBind5963,
      },
      (chbIn8219, chbIn8220) => {
        let chbBind18724 =
            chbBind5958 + chbIn8220 * chbBind5961,
          chbBind18725 =
            chbIn8220 === chbBind5963 - 1
              ? chbBind5964
              : chbBind18724 + chbBind5961;
        return {
          x0: chbBind18724,
          x1: chbBind18725,
          count: 0,
          label: chbinH.binLabel(
            chbBind18724,
            chbBind18725,
            chbIn8220,
            chbBind5963,
            chbBind5956?.intervalClosed,
          ),
        };
      },
    );
  chbBind5957.forEach((item) => {
    let chbBind15892 = chbBind5966.findIndex((_item, index) =>
      chbBind5965
        ? index === chbBind5966.length - 1
          ? item >= _item.x0 && item <= _item.x1
          : item >= _item.x0 && item < _item.x1
        : index === 0
          ? item >= _item.x0 && item <= _item.x1
          : item > _item.x0 && item <= _item.x1,
    );
    if (chbBind15892 === -1) return;
    let chbBind15893 = chbBind5966[chbBind15892];
    chbBind15893.count += 1;
  });
  let chbBind5967 = chbBind5966.reduce(
    (accumulator, current) => Math.max(accumulator, current.count),
    0,
  );
  return {
    bins: chbBind5966,
    extents: {
      x: [chbBind5958, chbBind5964],
      y: [0, chbBind5967],
    },
    seriesIndex: chbBind5955,
  };
}

/** Legacy alias. */
export const workbookHelper555 = computeHistogramBins;
