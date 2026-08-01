// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint embedded workbook view (legacy BTe/VTe/WTe).
// Stage-3 wave-114.

import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import { HTe } from "../worksheet-used-range";
import { paintSpreadsheetCanvas } from "../canvas-paint";

void parseA1Range;
void HTe;
void paintSpreadsheetCanvas;

export function paintEmbeddedWorkbookView(tfeIn1131: any, tfeIn1132: any) {
  let tfeBind6566 = tfeIn1131.resolveFrame(),
    tfeBind6567 = tfeIn1131.workbook,
    tfeBind6568 = tfeIn1131.view,
    tfeBind6569 = resolveEmbeddedWorksheet(tfeBind6567, tfeBind6568),
    tfeBind6570 = tfeBind6568.rangeA1 ?? HTe(tfeBind6569),
    tfeBind6571 = parseA1Range(tfeBind6570);
  if (!tfeBind6571)
    throw Error(`Embedded workbook view has invalid range: ${tfeBind6570}`);
  let tfeBind6572 = tfeBind6571.bounds,
    tfeBind6573 = embeddedViewportMetrics(tfeBind6569, tfeBind6572),
    tfeBind6574 = tfeBind6568.showHeaders === true ? 40 : 0,
    tfeBind6575 = tfeBind6568.showHeaders === true ? 20 : 0,
    tfeBind6576 = tfeBind6573.width + tfeBind6574,
    tfeBind6577 = tfeBind6573.height + tfeBind6575,
    tfeBind6578 =
      tfeBind6576 > 0 && tfeBind6577 > 0
        ? Math.min(
            tfeBind6566.width / tfeBind6576,
            tfeBind6566.height / tfeBind6577,
          )
        : 1,
    tfeBind6579 = tfeBind6567.getSpreadsheetRenderAssets(),
    tfeBind6580 = tfeBind6569.showGridLines;
  tfeBind6568.showGridlines !== undefined &&
    (tfeBind6569.showGridLines = tfeBind6568.showGridlines);
  tfeIn1132.save();
  tfeIn1132.beginPath();
  tfeIn1132.rect(
    tfeBind6566.left,
    tfeBind6566.top,
    tfeBind6566.width,
    tfeBind6566.height,
  );
  tfeIn1132.clip();
  tfeIn1132.translate(tfeBind6566.left, tfeBind6566.top);
  try {
    paintSpreadsheetCanvas(
      tfeIn1132,
      tfeBind6567,
      tfeBind6569.name,
      tfeBind6573.scrollX * tfeBind6578,
      tfeBind6573.scrollY * tfeBind6578,
      tfeBind6566.width,
      tfeBind6566.height,
      null,
      null,
      tfeBind6578,
      tfeBind6579.styleInfos,
      {},
      new Set(),
      new Set(),
      false,
      tfeBind6579.themeMap,
      false,
      undefined,
      undefined,
      undefined,
      {
        maxCols: tfeBind6572.endCol + 1,
        maxRows: tfeBind6572.endRow + 1,
        showHeaders: tfeBind6568.showHeaders === true,
        backgroundColor: tfeBind6568.backgroundFill,
      },
    );
  } finally {
    tfeBind6568.showGridlines !== undefined &&
      (tfeBind6569.showGridLines = tfeBind6580);
    tfeIn1132.restore();
  }
}
export function resolveEmbeddedWorksheet(tfeIn7013: any, tfeIn7014: any) {
  let tfeBind17370 = tfeIn7014.sheetId;
  if (tfeBind17370 !== undefined) {
    let tfeBind20309 = tfeIn7013.worksheets.items.find(
      (item) => item.id === tfeBind17370,
    );
    if (!tfeBind20309)
      throw Error(`Worksheet artifact view sheet ${tfeBind17370} not found.`);
    return tfeBind20309;
  }
  return tfeIn7013.worksheets.getActive();
}
export function embeddedViewportMetrics(tfeIn4716: any, tfeIn4717: any) {
  let tfeBind14015 = tfeIn4716.__getViewportLayout({
      maxCols: tfeIn4717.endCol + 1,
      maxRows: tfeIn4717.endRow + 1,
    }),
    tfeBind14016 = tfeBind14015.colOffsetsPx[tfeIn4717.startCol] ?? 0,
    tfeBind14017 =
      tfeBind14015.colOffsetsPx[tfeIn4717.endCol + 1] ?? tfeBind14016,
    tfeBind14018 = tfeBind14015.rowOffsetsPx[tfeIn4717.startRow] ?? 0,
    tfeBind14019 =
      tfeBind14015.rowOffsetsPx[tfeIn4717.endRow + 1] ?? tfeBind14018;
  return {
    width: Math.max(1, tfeBind14017 - tfeBind14016),
    height: Math.max(1, tfeBind14019 - tfeBind14018),
    scrollX: tfeBind14016,
    scrollY: tfeBind14018,
  };
}

export const BTe = paintEmbeddedWorkbookView;
export const VTe = resolveEmbeddedWorksheet;
export const WTe = embeddedViewportMetrics;
