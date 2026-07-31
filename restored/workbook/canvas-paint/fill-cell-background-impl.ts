// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: double-edge cell border stroke (legacy helper600).
// Wired historically as fillCellBackground.
// Stage-3 wave-105.

export function fillCellBackground(
  cpbIn1371: any,
  cpbIn1372: any,
  cpbIn1373: any,
  cpbIn1374: any,
  cpbIn1375: any,
  cpbIn1376: any,
  cpbIn1377: any,
) {
  cpbIn1371.save();
  cpbIn1371.strokeStyle = cpbIn1373;
  cpbIn1371.setLineDash([]);
  cpbIn1371.lineWidth = 1;
  cpbIn1372 === "top"
    ? (cpbIn1371.beginPath(),
      cpbIn1371.moveTo(cpbIn1374, cpbIn1375),
      cpbIn1371.lineTo(cpbIn1374 + cpbIn1376, cpbIn1375),
      cpbIn1371.stroke(),
      cpbIn1371.beginPath(),
      cpbIn1371.moveTo(cpbIn1374, cpbIn1375 + 2),
      cpbIn1371.lineTo(cpbIn1374 + cpbIn1376, cpbIn1375 + 2),
      cpbIn1371.stroke())
    : cpbIn1372 === "bottom"
      ? (cpbIn1371.beginPath(),
        cpbIn1371.moveTo(cpbIn1374, cpbIn1375 + cpbIn1377),
        cpbIn1371.lineTo(cpbIn1374 + cpbIn1376, cpbIn1375 + cpbIn1377),
        cpbIn1371.stroke(),
        cpbIn1371.beginPath(),
        cpbIn1371.moveTo(cpbIn1374, cpbIn1375 + cpbIn1377 - 2),
        cpbIn1371.lineTo(cpbIn1374 + cpbIn1376, cpbIn1375 + cpbIn1377 - 2),
        cpbIn1371.stroke())
      : cpbIn1372 === "left"
        ? (cpbIn1371.beginPath(),
          cpbIn1371.moveTo(cpbIn1374, cpbIn1375),
          cpbIn1371.lineTo(cpbIn1374, cpbIn1375 + cpbIn1377),
          cpbIn1371.stroke(),
          cpbIn1371.beginPath(),
          cpbIn1371.moveTo(cpbIn1374 + 2, cpbIn1375),
          cpbIn1371.lineTo(cpbIn1374 + 2, cpbIn1375 + cpbIn1377),
          cpbIn1371.stroke())
        : cpbIn1372 === "right" &&
          (cpbIn1371.beginPath(),
          cpbIn1371.moveTo(cpbIn1374 + cpbIn1376, cpbIn1375),
          cpbIn1371.lineTo(cpbIn1374 + cpbIn1376, cpbIn1375 + cpbIn1377),
          cpbIn1371.stroke(),
          cpbIn1371.beginPath(),
          cpbIn1371.moveTo(cpbIn1374 + cpbIn1376 - 2, cpbIn1375),
          cpbIn1371.lineTo(cpbIn1374 + cpbIn1376 - 2, cpbIn1375 + cpbIn1377),
          cpbIn1371.stroke());
  cpbIn1371.restore();
}

/** Legacy alias. */
export const workbookHelper600 = fillCellBackground;
