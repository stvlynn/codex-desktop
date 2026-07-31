// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: PivotTable WeakMaps + proto/source accessors (legacy 363–368 / workbookHelper 27–29).

import { snapshotPivotSource } from "./snapshot-pivot-source";
import type { PivotLayoutMeta, PivotTableSource } from "./types";

export const pivotProtoByInstance = new WeakMap<object, any>();
export const pivotCacheProtoByInstance = new WeakMap<object, any>();
export const pivotSourceByInstance = new WeakMap<object, PivotTableSource>();
export const pivotTableByProto = new WeakMap<object, any>();
export const pivotLayoutMetaByInstance = new WeakMap<object, PivotLayoutMeta>();
export const pivotCellHintsByInstance = new WeakMap<object, Map<string, any>>();

export function getPivotTableProto(pivot: object): any {
  const proto = pivotProtoByInstance.get(pivot);
  if (!proto) throw new Error("PivotTable proto not found");
  return proto;
}

export function getPivotCacheProto(pivot: object): any {
  const proto = pivotCacheProtoByInstance.get(pivot);
  if (!proto) throw new Error("PivotCache proto not found");
  return proto;
}

export function getPivotTableSource(pivot: object): PivotTableSource {
  const source = pivotSourceByInstance.get(pivot);
  if (!source) throw new Error("PivotTable source not found");
  if (!source.address) return source;
  const snapped = snapshotPivotSource(source);
  pivotSourceByInstance.set(pivot, snapped);
  return snapped;
}
