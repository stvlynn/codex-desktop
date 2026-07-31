// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47/49/52: PivotCacheModel is local; layout refresh from pivot-fields.

import { refreshPivotTableLayout } from "../pivot-fields/refresh-pivot-layout";
import { PivotCacheModel } from "./pivot-cache-model";

export type PivotLayoutRefresher = (pivot: any) => void;
export type PivotCacheModelType = {
  createFromSource: (source: any) => { toProto: () => any };
};

export {
  getPivotTableProto,
  getPivotCacheProto,
  getPivotTableSource,
  createOrReusePivotTable,
} from "../pivot-table";

export { refreshPivotTableLayout };
export { PivotCacheModel };

/** @deprecated wave-52: PivotCacheModel + refresh are direct; no-op for boundary `Cme`. */
export function wirePivotCachesBoundaryHooks(_hooks: {
  refreshPivotTableLayout: PivotLayoutRefresher;
  PivotCacheModel: PivotCacheModelType;
}): void {
  void _hooks;
}
