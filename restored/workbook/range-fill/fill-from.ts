// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: Range.fillFrom core (legacy dme).

import { isCellInBounds } from "./range-bounds";
import { detectFillDirection, mapFillSourceCell } from "./fill-direction";

export function fillRangeFrom(fillIn912: unknown) {
  let fillBind5810 = detectFillDirection(
    fillIn912.sourceBounds,
    fillIn912.destinationBounds,
  );
  if (fillBind5810 === "none") return null;
  if (!fillBind5810)
    throw Error(
      `Range.fillFrom requires destination to extend source in exactly one direction while sharing the other axis. Source is ${fillIn912.sourceRangeAddress || "(unnamed range)"}, destination is ${fillIn912.destinationRangeAddress || "(unnamed range)"}.`,
    );
  let fillBind5811 = [];
  for (
    let fillBind7565 = 0;
    fillBind7565 < fillIn912.destinationBounds.rows;
    fillBind7565 += 1
  ) {
    let fillBind7847 = [],
      fillBind7848 = fillIn912.destinationBounds.startRow + fillBind7565;
    for (
      let fillBind8500 = 0;
      fillBind8500 < fillIn912.destinationBounds.cols;
      fillBind8500 += 1
    ) {
      let fillBind8883 = fillIn912.destinationBounds.startCol + fillBind8500,
        fillBind8884 = isCellInBounds(
          fillBind7848,
          fillBind8883,
          fillIn912.sourceBounds,
        )
          ? {
              row: fillBind7848,
              col: fillBind8883,
            }
          : mapFillSourceCell({
              destinationCol: fillBind8883,
              destinationRow: fillBind7848,
              direction: fillBind5810,
              sourceBounds: fillIn912.sourceBounds,
            }),
        fillBind8885 = fillIn912.readSourceCell(
          fillBind8884.row,
          fillBind8884.col,
        ),
        fillBind8886 = fillBind8885?.formula,
        fillBind8887 = isCellInBounds(
          fillBind7848,
          fillBind8883,
          fillIn912.sourceBounds,
        );
      if (fillBind8886 && fillBind8886.trim()) {
        let fillBind19223 = fillIn912.shiftFormulaRefs(
          fillBind8886,
          fillBind7848 - fillBind8884.row,
          fillBind8883 - fillBind8884.col,
        );
        fillBind8887 ||
          fillIn912.writeFormulaCell(fillBind7848, fillBind8883, fillBind19223);
        fillIn912.shouldCollectValues && fillBind7847.push(`=${fillBind19223}`);
        continue;
      }
      if (fillBind8885?.value !== undefined) {
        fillBind8887 ||
          fillIn912.writeValueCell(fillBind7848, fillBind8883, fillBind8885);
        fillIn912.shouldCollectValues &&
          fillBind7847.push(fillIn912.coerceCellValue(fillBind8885));
        continue;
      }
      fillBind8887 || fillIn912.clearCell(fillBind7848, fillBind8883);
      fillIn912.shouldCollectValues && fillBind7847.push(null);
    }
    fillIn912.shouldCollectValues && fillBind5811.push(fillBind7847);
  }
  return fillIn912.shouldCollectValues ? fillBind5811 : null;
}
