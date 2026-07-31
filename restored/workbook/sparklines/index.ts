// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: sparklines barrel (legacy Binding804–815 + _D / ensureCellVoInit…ensureSparklineGroupsInit).

export {
  wireSparklinesBoundaryHooks,
  type SparklinesBoundaryHooks,
} from "./boundary-hooks";
export { sparklines } from "./sparkline-bindings";
export { ensureSparklinesInit } from "./ensure-sparklines-init";
export { ensureCellVoInit } from "./cell-vo";
export { ensureCellGridInit } from "./cell-grid";
export { ensureSparklineGroupsInit } from "./sparkline-groups";

import { ensureSparklinesInit } from "./ensure-sparklines-init";
import { sparklines } from "./sparkline-bindings";

export function getCellClass(): any {
  ensureSparklinesInit();
  return sparklines.Cell;
}
export function getCellGridClass(): any {
  ensureSparklinesInit();
  return sparklines.CellGrid;
}
export function getSparklineGroupsClass(): any {
  ensureSparklinesInit();
  return sparklines.SparklineGroups;
}
