// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: deferred wires for pivot proto helpers still in the boundary.

export type PivotTableProtoGetter = (pivot: any) => any;
export type PivotCacheProtoGetter = (pivot: any) => any;
export type PivotTableSourceGetter = (pivot: any) => any;
export type PivotLayoutRefresher = (pivot: any) => void;
export type PivotCacheModelType = {
  createFromSource: (source: any) => { toProto: () => any };
};
export type PivotTableFactory = (opts: any) => any;

let refreshPivotTableLayoutImpl: PivotLayoutRefresher | null = null;
let getPivotTableProtoImpl: PivotTableProtoGetter | null = null;
let getPivotCacheProtoImpl: PivotCacheProtoGetter | null = null;
let getPivotTableSourceImpl: PivotTableSourceGetter | null = null;
let PivotCacheModelImpl: PivotCacheModelType | null = null;
let createOrReusePivotTableImpl: PivotTableFactory | null = null;

export function wirePivotCachesBoundaryHooks(hooks: {
  refreshPivotTableLayout: PivotLayoutRefresher;
  getPivotTableProto: PivotTableProtoGetter;
  getPivotCacheProto: PivotCacheProtoGetter;
  getPivotTableSource: PivotTableSourceGetter;
  PivotCacheModel: PivotCacheModelType;
  createOrReusePivotTable: PivotTableFactory;
}): void {
  refreshPivotTableLayoutImpl = hooks.refreshPivotTableLayout;
  getPivotTableProtoImpl = hooks.getPivotTableProto;
  getPivotCacheProtoImpl = hooks.getPivotCacheProto;
  getPivotTableSourceImpl = hooks.getPivotTableSource;
  PivotCacheModelImpl = hooks.PivotCacheModel;
  createOrReusePivotTableImpl = hooks.createOrReusePivotTable;
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

export function getPivotTableProto(pivot: any): any {
  return requireWired(getPivotTableProtoImpl, "getPivotTableProto")(pivot);
}

export function getPivotCacheProto(pivot: any): any {
  return requireWired(getPivotCacheProtoImpl, "getPivotCacheProto")(pivot);
}

export function getPivotTableSource(pivot: any): any {
  return requireWired(getPivotTableSourceImpl, "getPivotTableSource")(pivot);
}

export const PivotCacheModel: PivotCacheModelType = {
  createFromSource(source: any) {
    return requireWired(
      PivotCacheModelImpl,
      "PivotCacheModel",
    ).createFromSource(source);
  },
};

export function createOrReusePivotTable(opts: any): any {
  return requireWired(
    createOrReusePivotTableImpl,
    "createOrReusePivotTable",
  )(opts);
}
