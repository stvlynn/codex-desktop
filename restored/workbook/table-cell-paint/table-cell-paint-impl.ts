// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table cell border segment paint (legacy STe).
// Stage-3 wave-99/104 (layoutTableColumns / $B).

import { workbookGt } from "../text-style";
import { tcpH } from "./boundary-hooks";
import { layoutTableColumns } from "./layout-table-columns-impl";

void layoutTableColumns;

void workbookGt;
void tcpH;

export function paintTableCells(tcpIn657: any, tcpIn658: any, tcpIn659: any = {}) {
  if (!tcpIn657.table || !tcpH.hasTableContent(tcpIn657)) return [];
  let tcpBind4804 = tcpIn657.bbox?.xEmu ?? 0,
    tcpBind4805 = tcpIn657.bbox?.yEmu ?? 0,
    tcpBind4806 = tcpIn657.bbox?.widthEmu ?? 0,
    tcpBind4807 = layoutTableColumns(tcpIn657.table, {
      frameWidthEmu: tcpBind4806,
      fitColumnWidthsToFrame: tcpIn659.fitColumnWidthsToFrame,
    }),
    tcpBind4808 = new Map(),
    tcpBind4809 = [],
    tcpBind4810 = tcpBind4804 * workbookGt,
    tcpBind4811 = tcpBind4805 * workbookGt,
    tcpBind4812 = tcpBind4811;
  for (
    let tcpBind22575 = 0;
    tcpBind22575 < tcpIn658.length;
    tcpBind22575 += 1
  ) {
    tcpBind4809[tcpBind22575] = tcpBind4812;
    tcpBind4812 += tcpIn658[tcpBind22575] ?? 0;
  }
  let tcpBind4813 =
      tcpBind4810 + tcpBind4806 * workbookGt,
    tcpBind4814 = tcpBind4812,
    tcpBind4815 = (
      tcpIn5125,
      tcpIn5126,
      tcpIn5127,
      tcpIn5128,
    ) =>
      tcpIn5125 === "horizontal"
        ? tcpIn5126 === "top" &&
          Math.abs(tcpIn5127 - tcpBind4811) <= 0.01
          ? tcpIn5127 + tcpIn5128 / 2
          : tcpIn5126 === "bottom" &&
              Math.abs(tcpIn5127 - tcpBind4814) <= 0.01
            ? tcpIn5127 - tcpIn5128 / 2
            : tcpIn5127
        : tcpIn5126 === "left" &&
            Math.abs(tcpIn5127 - tcpBind4810) <= 0.01
          ? tcpIn5127 + tcpIn5128 / 2
          : tcpIn5126 === "right" &&
              Math.abs(tcpIn5127 - tcpBind4813) <= 0.01
            ? tcpIn5127 - tcpIn5128 / 2
            : tcpIn5127;
  for (let tcpBind7175 of tcpBind4807.rows)
    for (let tcpBind7350 of tcpBind7175.cells) {
      let tcpBind7470 = tcpBind7350.cell,
        tcpBind7471 =
          tcpBind4809[tcpBind7350.rowIndex] ??
          tcpBind4805 * 0.00010498687664041995,
        tcpBind7472 =
          tcpBind4804 * workbookGt +
          tcpBind7350.xEmu * workbookGt,
        tcpBind7473 = tcpBind7350.widthEmu * workbookGt,
        tcpBind7474 = 0;
      for (
        let tcpBind22599 = 0;
        tcpBind22599 < tcpBind7350.rowSpan;
        tcpBind22599 += 1
      )
        tcpBind7474 +=
          tcpIn658[
            tcpBind7350.rowIndex + tcpBind22599
          ] ?? 0;
      let tcpBind7475 = tcpBind7472 + tcpBind7473,
        tcpBind7476 = tcpBind7471 + tcpBind7474,
        tcpBind7477 = (
          tcpIn3277,
          tcpIn3278,
          tcpIn3279,
          tcpIn3280,
          tcpIn3281,
          tcpIn3282,
        ) => {
          if (!tcpH.bh634(tcpIn3282)) return;
          let tcpBind11517 = tcpH.bh636(tcpIn3282),
            tcpBind11518 = tcpBind4815(
              tcpIn3277,
              tcpIn3281,
              tcpIn3278,
              tcpBind11517,
            ),
            tcpBind11519 = tcpH.borderSegmentKey(
              tcpIn3277,
              tcpIn3278,
              tcpIn3279,
              tcpIn3280,
            ),
            tcpBind11520 =
              tcpBind4808.get(tcpBind11519);
          if (!tcpBind11520) {
            tcpBind4808.set(tcpBind11519, {
              orientation: tcpIn3277,
              crossPx: tcpBind11518,
              startPx: tcpIn3279,
              endPx: tcpIn3280,
              widthPx: tcpBind11517,
              line: tcpIn3282,
            });
            return;
          }
          let tcpBind11521 = tcpH.bh638(
            tcpBind11520.line,
            tcpIn3282,
          );
          tcpBind11520.line = tcpBind11521;
          tcpBind11520.widthPx =
            tcpH.bh636(tcpBind11521);
          tcpBind11520.crossPx = tcpBind4815(
            tcpIn3277,
            tcpIn3281,
            tcpIn3278,
            tcpBind11520.widthPx,
          );
        };
      tcpBind7477(
        "horizontal",
        tcpBind7471,
        tcpBind7472,
        tcpBind7475,
        "top",
        tcpBind7470.lines?.top,
      );
      tcpBind7477(
        "vertical",
        tcpBind7475,
        tcpBind7471,
        tcpBind7476,
        "right",
        tcpBind7470.lines?.right,
      );
      tcpBind7477(
        "horizontal",
        tcpBind7476,
        tcpBind7472,
        tcpBind7475,
        "bottom",
        tcpBind7470.lines?.bottom,
      );
      tcpBind7477(
        "vertical",
        tcpBind7472,
        tcpBind7471,
        tcpBind7476,
        "left",
        tcpBind7470.lines?.left,
      );
    }
  return tcpH.materializeBorderStrokes([...tcpBind4808.values()]);
}

/** Legacy alias. */
export const STe = paintTableCells;
