// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: fill direction detect + source-cell map (legacy pme/mme).

import { boundsEndRow, boundsEndCol } from "./range-bounds";

export function detectFillDirection(fillIn2909: unknown, fillIn2910: unknown) {
  let fillBind10785 = boundsEndRow(fillIn2909),
    fillBind10786 = boundsEndCol(fillIn2909),
    fillBind10787 = boundsEndRow(fillIn2910),
    fillBind10788 = boundsEndCol(fillIn2910),
    fillBind10789 =
      fillIn2910.startCol === fillIn2909.startCol &&
      fillBind10788 === fillBind10786,
    fillBind10790 =
      fillIn2910.startRow === fillIn2909.startRow &&
      fillBind10787 === fillBind10785;
  return fillBind10789 &&
    fillIn2910.startRow === fillIn2909.startRow &&
    fillBind10787 >= fillBind10785
    ? fillBind10787 === fillBind10785
      ? "none"
      : "down"
    : fillBind10789 &&
        fillBind10787 === fillBind10785 &&
        fillIn2910.startRow <= fillIn2909.startRow
      ? fillIn2910.startRow === fillIn2909.startRow
        ? "none"
        : "up"
      : fillBind10790 &&
          fillIn2910.startCol === fillIn2909.startCol &&
          fillBind10788 >= fillBind10786
        ? fillBind10788 === fillBind10786
          ? "none"
          : "right"
        : fillBind10790 &&
            fillBind10788 === fillBind10786 &&
            fillIn2910.startCol <= fillIn2909.startCol
          ? fillIn2910.startCol === fillIn2909.startCol
            ? "none"
            : "left"
          : null;
}
export function mapFillSourceCell(fillIn1811: unknown) {
  let fillBind8337 = boundsEndRow(fillIn1811.sourceBounds),
    fillBind8338 = boundsEndCol(fillIn1811.sourceBounds);
  return fillIn1811.direction === "down"
    ? {
        row:
          fillIn1811.sourceBounds.startRow +
          ((fillIn1811.destinationRow - fillBind8337 - 1) %
            fillIn1811.sourceBounds.rows),
        col: fillIn1811.destinationCol,
      }
    : fillIn1811.direction === "up"
      ? {
          row:
            fillIn1811.sourceBounds.startRow +
            ((fillIn1811.sourceBounds.startRow -
              fillIn1811.destinationRow -
              1) %
              fillIn1811.sourceBounds.rows),
          col: fillIn1811.destinationCol,
        }
      : fillIn1811.direction === "right"
        ? {
            row: fillIn1811.destinationRow,
            col:
              fillIn1811.sourceBounds.startCol +
              ((fillIn1811.destinationCol - fillBind8338 - 1) %
                fillIn1811.sourceBounds.cols),
          }
        : {
            row: fillIn1811.destinationRow,
            col:
              fillIn1811.sourceBounds.startCol +
              ((fillIn1811.sourceBounds.startCol -
                fillIn1811.destinationCol -
                1) %
                fillIn1811.sourceBounds.cols),
          };
}
