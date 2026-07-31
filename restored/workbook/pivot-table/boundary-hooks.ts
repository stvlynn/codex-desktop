// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49/52: field-VO / layout / hydrate hooks — now direct exports.

import {
  refreshPivotTableLayout,
  PivotField,
  PivotHierarchy,
  PivotHierarchies,
  PivotDataField,
  PivotDataHierarchies,
  dateFilterToken,
  labelFilterToken,
  valueFilterToken,
  getPivotFieldFromHierarchy,
} from "../pivot-fields";
import { hydrateCacheFields } from "../pivot-caches/hydrate-cache-fields";
import { PivotLayout } from "./pivot-layout";
import { cellHintKey } from "./cell-hint-key";

export type PivotLayoutRefresher = (pivot: any) => void;
export type PivotClassCtor = new (...args: any[]) => any;
export type HydrateCacheFields = (cache: any, source: any) => void;
export type FilterTokenFn = (condition: any) => string;
export type HierarchyFieldGetter = (hierarchy: any) => any;
export type CellHintKeyFn = (row: number, col: number) => string;

export { refreshPivotTableLayout };
export { hydrateCacheFields };
export { cellHintKey };
export { dateFilterToken, labelFilterToken, valueFilterToken };
export { getPivotFieldFromHierarchy };

export function getPivotLayoutCtor(): PivotClassCtor {
  return PivotLayout;
}

export function getPivotFieldCtor(): PivotClassCtor {
  return PivotField;
}

export function getPivotHierarchyCtor(): PivotClassCtor {
  return PivotHierarchy;
}

export function getPivotHierarchiesCtor(): PivotClassCtor {
  return PivotHierarchies;
}

export function getPivotDataFieldCtor(): PivotClassCtor {
  return PivotDataField;
}

export function getPivotDataHierarchiesCtor(): PivotClassCtor {
  return PivotDataHierarchies;
}

/** @deprecated wave-52: hooks are direct exports; kept as no-op for boundary `_u`. */
export function wirePivotTableBoundaryHooks(_hooks: {
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
  void _hooks;
}
