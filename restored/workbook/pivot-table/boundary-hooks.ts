// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: deferred wires for field-VO / layout helpers still in the boundary.

export type PivotLayoutRefresher = (pivot: any) => void;
export type PivotClassCtor = new (...args: any[]) => any;
export type HydrateCacheFields = (cache: any, source: any) => void;
export type FilterTokenFn = (condition: any) => string;
export type HierarchyFieldGetter = (hierarchy: any) => any;
export type CellHintKeyFn = (row: number, col: number) => string;

let refreshPivotTableLayoutImpl: PivotLayoutRefresher | null = null;
let PivotLayoutImpl: PivotClassCtor | null = null;
let PivotFieldImpl: PivotClassCtor | null = null;
let PivotHierarchyImpl: PivotClassCtor | null = null;
let PivotHierarchiesImpl: PivotClassCtor | null = null;
let PivotDataFieldImpl: PivotClassCtor | null = null;
let PivotDataHierarchiesImpl: PivotClassCtor | null = null;
let hydrateCacheFieldsImpl: HydrateCacheFields | null = null;
let dateFilterTokenImpl: FilterTokenFn | null = null;
let labelFilterTokenImpl: FilterTokenFn | null = null;
let valueFilterTokenImpl: FilterTokenFn | null = null;
let getPivotFieldFromHierarchyImpl: HierarchyFieldGetter | null = null;
let cellHintKeyImpl: CellHintKeyFn | null = null;

export function wirePivotTableBoundaryHooks(hooks: {
  refreshPivotTableLayout: PivotLayoutRefresher;
  PivotLayout: PivotClassCtor;
  PivotField: PivotClassCtor;
  PivotHierarchy: PivotClassCtor;
  PivotHierarchies: PivotClassCtor;
  PivotDataField: PivotClassCtor;
  PivotDataHierarchies: PivotClassCtor;
  hydrateCacheFields: HydrateCacheFields;
  dateFilterToken: FilterTokenFn;
  labelFilterToken: FilterTokenFn;
  valueFilterToken: FilterTokenFn;
  getPivotFieldFromHierarchy: HierarchyFieldGetter;
  cellHintKey: CellHintKeyFn;
}): void {
  refreshPivotTableLayoutImpl = hooks.refreshPivotTableLayout;
  PivotLayoutImpl = hooks.PivotLayout;
  PivotFieldImpl = hooks.PivotField;
  PivotHierarchyImpl = hooks.PivotHierarchy;
  PivotHierarchiesImpl = hooks.PivotHierarchies;
  PivotDataFieldImpl = hooks.PivotDataField;
  PivotDataHierarchiesImpl = hooks.PivotDataHierarchies;
  hydrateCacheFieldsImpl = hooks.hydrateCacheFields;
  dateFilterTokenImpl = hooks.dateFilterToken;
  labelFilterTokenImpl = hooks.labelFilterToken;
  valueFilterTokenImpl = hooks.valueFilterToken;
  getPivotFieldFromHierarchyImpl = hooks.getPivotFieldFromHierarchy;
  cellHintKeyImpl = hooks.cellHintKey;
}

function requireWired<T>(value: T | null, name: string): T {
  if (!value) {
    throw new Error(`${name} not wired (expected _u / ensurePivotTableInit)`);
  }
  return value;
}

export function refreshPivotTableLayout(pivot: any): void {
  requireWired(refreshPivotTableLayoutImpl, "refreshPivotTableLayout")(pivot);
}

export function getPivotLayoutCtor(): PivotClassCtor {
  return requireWired(PivotLayoutImpl, "PivotLayout");
}

export function getPivotFieldCtor(): PivotClassCtor {
  return requireWired(PivotFieldImpl, "PivotField");
}

export function getPivotHierarchyCtor(): PivotClassCtor {
  return requireWired(PivotHierarchyImpl, "PivotHierarchy");
}

export function getPivotHierarchiesCtor(): PivotClassCtor {
  return requireWired(PivotHierarchiesImpl, "PivotHierarchies");
}

export function getPivotDataFieldCtor(): PivotClassCtor {
  return requireWired(PivotDataFieldImpl, "PivotDataField");
}

export function getPivotDataHierarchiesCtor(): PivotClassCtor {
  return requireWired(PivotDataHierarchiesImpl, "PivotDataHierarchies");
}

export function hydrateCacheFields(cache: any, source: any): void {
  requireWired(hydrateCacheFieldsImpl, "hydrateCacheFields")(cache, source);
}

export function dateFilterToken(condition: any): string {
  return requireWired(dateFilterTokenImpl, "dateFilterToken")(condition);
}

export function labelFilterToken(condition: any): string {
  return requireWired(labelFilterTokenImpl, "labelFilterToken")(condition);
}

export function valueFilterToken(condition: any): string {
  return requireWired(valueFilterTokenImpl, "valueFilterToken")(condition);
}

export function getPivotFieldFromHierarchy(hierarchy: any): any {
  return requireWired(
    getPivotFieldFromHierarchyImpl,
    "getPivotFieldFromHierarchy",
  )(hierarchy);
}

export function cellHintKey(row: number, col: number): string {
  return requireWired(cellHintKeyImpl, "cellHintKey")(row, col);
}
