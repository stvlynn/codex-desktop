// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: histogram series → aggregated bins (legacy _Se).
// Stage-3 wave-107.

import { chbinH } from "./boundary-hooks";

void chbinH;

export function aggregateHistogramBins(chbIn1617: any, chbIn1618: any, chbIn1619: any) {
  let chbBind7810 = chbIn1617.series[chbIn1618];
  if (!chbBind7810) return;
  let chbBind7811 = chbinH.bh347(
      chbBind7810,
      chbIn1617.categories,
    ),
    chbBind7812 = chbBind7810.values ?? [];
  if (chbBind7812.length === 0 || chbBind7811.length === 0)
    return;
  let chbBind7813 = [],
    chbBind7814 = 0,
    chbBind7815 = 1 / 0,
    chbBind7816 = -1 / 0,
    chbBind7817 = chbinH.coerceNumber(chbIn1619?.binWidth),
    chbBind7818 =
      chbBind7817 !== undefined && chbBind7817 > 0
        ? chbBind7817
        : undefined;
  if (
    (chbBind7811.forEach((item, index) => {
      let chbBind13573 = chbinH.coerceNumber(chbBind7812[index]);
      if (chbBind13573 === undefined || chbBind13573 < 0)
        return;
      let chbBind13574 = item ? chbinH.parseBinLabel(item) : undefined,
        chbBind13575 = 0,
        chbBind13576 = 0;
      if (chbBind13574) {
        chbBind13575 = chbBind13574[0];
        chbBind13576 = chbBind13574[1];
        chbBind13575 === chbBind13576 &&
          (chbBind13576 =
            chbBind13575 + (chbBind7818 ?? 1));
      } else {
        let chbBind22650 = chbBind7818 ?? 1;
        chbBind13575 = chbBind7814;
        chbBind13576 = chbBind7814 + chbBind22650;
      }
      chbBind7814 = chbBind13576;
      chbBind7815 = Math.min(chbBind7815, chbBind13575);
      chbBind7816 = Math.max(chbBind7816, chbBind13576);
      chbBind7813.push({
        x0: chbBind13575,
        x1: chbBind13576,
        count: chbBind13573,
        label: item,
      });
    }),
    chbBind7813.length === 0)
  )
    return;
  let chbBind7819 = chbBind7813.reduce(
    (accumulator, current) => Math.max(accumulator, current.count),
    0,
  );
  return (
    chbBind7813.forEach((item, index) => {
      item.label ||= chbinH.binLabel(
        item.x0,
        item.x1,
        index,
        chbBind7813.length,
        chbIn1619?.intervalClosed,
      );
    }),
    {
      bins: chbBind7813,
      extents: {
        x: [chbBind7815, chbBind7816],
        y: [0, chbBind7819],
      },
      seriesIndex: chbIn1618,
    }
  );
}

/** Legacy alias. */
export const _Se = aggregateHistogramBins;
