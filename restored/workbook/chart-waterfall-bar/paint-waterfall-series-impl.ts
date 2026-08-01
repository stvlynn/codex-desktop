// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall series painter (legacy pCe; wired as paintPie).
// Stage-3 wave-107.

import { cwbH } from "./boundary-hooks";
import { workbookHelper575 } from "./waterfall-accent-color-impl";

void cwbH;

export function paintWaterfallSeries(
  cwbIn1866: any,
  cwbIn1867: any,
  cwbIn1868: any,
  cwbIn1869: any,
  cwbIn1870: any,
  cwbIn1871: any = {},
) {
  if (!cwbH.bh424(cwbIn1868.x) || cwbIn1869.seriesIndex === -1) return;
  let cwbBind8485 = cwbIn1868.x,
    cwbBind8486 = cwbIn1868.y,
    cwbBind8487 = cwbBind8485.bandwidth(),
    cwbBind8488 = cwbIn1869.seriesIndex,
    cwbBind8489 = cwbIn1867.series[cwbBind8488];
  if (!cwbBind8489) return;
  let cwbBind8490;
  cwbIn1869.segments.forEach((item) => {
    let cwbBind10438 = cwbBind8485(item.category);
    if (cwbBind10438 === undefined) return;
    item.kind !== "total" &&
      cwbBind8490 &&
      cwbH.paintBridge(
        cwbIn1866,
        cwbBind8490.x,
        cwbBind10438,
        item.cumulativeBefore,
        cwbBind8487,
        cwbBind8486,
      );
    let cwbBind10439 = cwbH.paintBar(
      cwbIn1866,
      item,
      cwbBind10438,
      cwbBind8487,
      cwbBind8486,
      cwbIn1867,
      cwbBind8488,
      cwbIn1870,
    );
    cwbBind10439 &&
      (cwbH.paintConnector(
        cwbIn1866,
        cwbIn1867,
        cwbBind8488,
        item,
        {
          ...cwbBind10439,
          x: cwbBind10438,
          width: cwbBind8487,
        },
        cwbIn1870,
      ),
      cwbIn1871.chartHoverTargets &&
        cwbIn1871.chartHoverTargets.push({
          kind: "bar-vertical",
          x: cwbBind10438,
          y: cwbBind10439.top,
          width: cwbBind8487,
          height: cwbBind10439.bottom - cwbBind10439.top,
          category: item.category,
          seriesName: cwbBind8489.name,
          value: item.value,
          color: workbookHelper575(cwbIn1870, item.kind),
          anchorX: cwbBind10438,
          anchorY: cwbBind10439.top,
        }),
      (cwbBind8490 = {
        x: cwbBind10438,
        cumulativeAfter: item.cumulativeAfter,
      }));
  });
}

/** Legacy alias. */
export const pCe = paintWaterfallSeries;
