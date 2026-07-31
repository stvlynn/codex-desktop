// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47/49: deferred wires for helpers still in the boundary;
// proto accessors + createOrReuse now owned by workbook/pivot-table.

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

let refreshPivotTableLayoutImpl: PivotLayoutRefresher | null = null;
let PivotCacheModelImpl: PivotCacheModelType | null = null;

export function wirePivotCachesBoundaryHooks(hooks: {
  refreshPivotTableLayout: PivotLayoutRefresher;
  PivotCacheModel: PivotCacheModelType;
}): void {
  refreshPivotTableLayoutImpl = hooks.refreshPivotTableLayout;
  PivotCacheModelImpl = hooks.PivotCacheModel;
}

function requireWired<T>(value: T | null, name: string): T {
  if (!value) {
    throw new Error(`${name} not wired (expected Cme / ensurePivotCachesInit)`);
  }
  return value;
}

export function refreshPivotTableLayout(pivot: any): void {
  requireWired(refreshPivotTableLayoutImpl, "refreshPivotTableLayout")(pivot);
}

export const PivotCacheModel: PivotCacheModelType = {
  createFromSource(source: any) {
    return requireWired(
      PivotCacheModelImpl,
      "PivotCacheModel",
    ).createFromSource(source);
  },
};
