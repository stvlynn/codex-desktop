import { workbookHelper635 } from "./border-segment-key-impl";
// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: merge + materialize table border strokes (legacy bTe/xTe).
// Stage-3 wave-107.

import { tcpH } from "./boundary-hooks";

void tcpH;

export function mergeCollinearBorderStrokes(tcpIn2052: any) {
  let tcpBind8914 = [...tcpIn2052].sort((tcpIn5973, tcpIn5974) =>
      tcpIn5973.orientation === tcpIn5974.orientation
        ? Math.abs(tcpIn5973.crossPx - tcpIn5974.crossPx) > 0.001
          ? tcpIn5973.crossPx - tcpIn5974.crossPx
          : Math.abs(tcpIn5973.startPx - tcpIn5974.startPx) > 0.001
            ? tcpIn5973.startPx - tcpIn5974.startPx
            : tcpIn5973.endPx - tcpIn5974.endPx
        : tcpIn5973.orientation.localeCompare(tcpIn5974.orientation),
    ),
    tcpBind8915 = [];
  for (let tcpBind12889 of tcpBind8914) {
    let tcpBind13149 = tcpBind8915[tcpBind8915.length - 1];
    if (
      tcpBind13149 &&
      tcpBind13149.orientation === tcpBind12889.orientation &&
      Math.abs(tcpBind13149.crossPx - tcpBind12889.crossPx) <= 0.001 &&
      Math.abs(tcpBind13149.endPx - tcpBind12889.startPx) <= 0.001 &&
      tcpBind13149.widthPx === tcpBind12889.widthPx &&
      tcpBind13149.line.style === tcpBind12889.line.style &&
      tcpBind13149.line.compound === tcpBind12889.line.compound &&
      tcpBind13149.line.fill?.color?.value ===
        tcpBind12889.line.fill?.color?.value
    ) {
      tcpBind13149.endPx = tcpBind12889.endPx;
      continue;
    }
    tcpBind8915.push({
      ...tcpBind12889,
    });
  }
  return tcpBind8915;
}
export function materializeBorderStrokes(tcpIn1551: any) {
  let tcpBind7624 = new Map();
  for (let tcpBind19907 of tcpIn1551) {
    let tcpBind20442 = `${tcpBind19907.orientation}:${workbookHelper635(tcpBind19907.crossPx)}`,
      tcpBind20443 = tcpBind7624.get(tcpBind20442);
    if (tcpBind20443) {
      tcpBind20443.push(tcpBind19907);
      continue;
    }
    tcpBind7624.set(tcpBind20442, [tcpBind19907]);
  }
  let tcpBind7625 = [];
  for (let tcpBind9170 of tcpBind7624.values()) {
    let tcpBind9404 = [
      ...new Set(
        tcpBind9170.flatMap((item) => [
          workbookHelper635(item.startPx),
          workbookHelper635(item.endPx),
        ]),
      ),
    ]
      .sort((tcpIn16535, tcpIn16536) => tcpIn16535 - tcpIn16536)
      .map((item) => item / 1e3);
    for (
      let tcpBind10657 = 0;
      tcpBind10657 < tcpBind9404.length - 1;
      tcpBind10657 += 1
    ) {
      let tcpBind11054 = tcpBind9404[tcpBind10657],
        tcpBind11055 = tcpBind9404[tcpBind10657 + 1];
      if (
        tcpBind11054 === undefined ||
        tcpBind11055 === undefined ||
        tcpBind11055 - tcpBind11054 <= 0.001
      )
        continue;
      let tcpBind11056 = tcpBind9170.filter(
        (item) =>
          item.startPx <= tcpBind11054 + 0.001 &&
          item.endPx >= tcpBind11055 - 0.001,
      );
      if (tcpBind11056.length === 0) continue;
      let tcpBind11057 = tcpBind11056[0];
      if (tcpBind11057) {
        for (
          let tcpBind20861 = 1;
          tcpBind20861 < tcpBind11056.length;
          tcpBind20861 += 1
        ) {
          let tcpBind22083 = tcpBind11056[tcpBind20861];
          tcpBind22083 &&
            tcpH.bh638(tcpBind11057.line, tcpBind22083.line) ===
              tcpBind22083.line &&
            (tcpBind11057 = tcpBind22083);
        }
        tcpBind7625.push({
          orientation: tcpBind11057.orientation,
          crossPx: tcpBind11057.crossPx,
          startPx: tcpBind11054,
          endPx: tcpBind11055,
          widthPx: tcpH.bh636(tcpBind11057.line),
          line: tcpBind11057.line,
        });
      }
    }
  }
  return mergeCollinearBorderStrokes(tcpBind7625);
}

/** Legacy aliases. */
export const bTe = mergeCollinearBorderStrokes;
export const xTe = materializeBorderStrokes;
