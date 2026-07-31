// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: spreadsheet canvas painter entry (legacy BYe).

import { paint } from "./paint-bag";
import { ensureCanvasPaintConstsInit } from "./paint-consts";
import { runPaintSetup } from "./paint-setup";
import { runPaintCells } from "./paint-cells";
import { runPaintOverlays } from "./paint-overlays";

export function paintSpreadsheetCanvas(
  cpIn6: any,
  cpIn7: any,
  cpIn8: any,
  ...cpIn9: any[]
): any {
  ensureCanvasPaintConstsInit();
  paint.cpIn6 = cpIn6;
  paint.cpIn7 = cpIn7;
  paint.cpIn8 = cpIn8;
  paint.cpIn9 = cpIn9;
  paint.__earlyReturn = false;
  runPaintSetup();
  if (paint.__earlyReturn) return;
  runPaintCells();
  runPaintOverlays();
}

/** Legacy BYe. */
export const BYe = paintSpreadsheetCanvas;
