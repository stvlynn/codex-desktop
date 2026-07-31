// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-48: slicer proto meta key + WeakMap accessors (meta bag + proto map).

import type { SlicerMeta } from "./types";

/** Legacy `workbookBinding677` — hidden meta bag on slicer protos. */
export const SLICER_META_KEY = "__granolaSlicerMeta";

const slicerProtoByInstance = new WeakMap<object, any>();

export function setSlicerProto(instance: object, proto: any): void {
  slicerProtoByInstance.set(instance, proto);
}

export function getSlicerProto(instance: object): any {
  const proto = slicerProtoByInstance.get(instance);
  if (!proto) throw new Error("Slicer proto not found");
  return proto;
}

export function ensureSlicerMeta(proto: any): SlicerMeta {
  return (
    proto[SLICER_META_KEY] ||
      (proto[SLICER_META_KEY] = {
        pivotTableName: "",
        fieldName: "",
        selectedItems: [],
      }),
    proto[SLICER_META_KEY]
  );
}
