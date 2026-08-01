// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-155: binding662-gate boundary hooks (leave-behind ensures).

export type Binding662GateHooks = {
  ensureUDeps: () => void;
  ensureGaeDeps: () => void;
  ensureVaeDeps: () => void;
  ensureBinding412Deps: () => void;
  ensureMdeDeps: () => void;
  ensureBinding661Deps: () => void;
  ensureCDeps: () => void;
  ensureBinding675Deps: () => void;
  ensureCmeDeps: () => void;
  ensureTmeDeps: () => void;
  ensureEmeDeps: () => void;
  getShapeGeometryNameToProto: () => Record<string, string>;
  getWorksheetOwnerMap: () => WeakMap<object, unknown>;
  getExcelEpochUtcMs: () => number;
  getMsPerDay: () => number;
  getRangeClass: () => unknown;
  getMaxWorksheetRows: () => number;
  getMaxWorksheetCols: () => number;
  getPivotTableClass: () => unknown;
  getPivotCachesClass: () => unknown;
  getSlicerClass: () => unknown;
  getSlicersClass: () => unknown;
  wirePivotCachesHooks: () => void;
};

export const b662H: Binding662GateHooks = {} as Binding662GateHooks;

export function wireBinding662GateHooks(next: Binding662GateHooks): void {
  Object.assign(b662H, next);
}
