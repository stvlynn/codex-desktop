// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: worksheet-drawings barrel (legacy Binding740–789 + Sve).

export {
  wireWorksheetDrawingsBoundaryHooks,
  type WorksheetDrawingsBoundaryHooks,
} from "./boundary-hooks";
export { worksheetDrawings } from "./drawing-bindings";
export {
  cloneDrawingJson,
  hashWorksheetChartId,
  newChartSeriesId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
} from "./chart-drawing-ids";
export { createWorksheetDrawingContext } from "./drawing-context-stub";
export { ensureWorksheetDrawingsInit } from "./ensure-worksheet-drawings-init";
export { ensureDrawingHelpersInit } from "./drawing-helpers";
export { ensureDrawingAnchorInit } from "./drawing-anchor";
export { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
export { ensureDrawingCollectionsAInit } from "./drawing-collections-a";
export { ensureDrawingCollectionsBInit } from "./drawing-collections-b";

import { ensureWorksheetDrawingsInit } from "./ensure-worksheet-drawings-init";
import { worksheetDrawings } from "./drawing-bindings";

export function getChartDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.ChartDrawing;
}
export function getWorksheetImageDrawingClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.WorksheetImageDrawing;
}
export function getWorksheetDrawingsClass(): any {
  ensureWorksheetDrawingsInit();
  return worksheetDrawings.WorksheetDrawings;
}
