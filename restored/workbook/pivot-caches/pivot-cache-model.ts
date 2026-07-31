// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-52: PivotCacheModel (legacy Binding332 / Class55).

import { esmInit } from "../../runtime/rolldown-runtime";
import { hydrateCacheFields } from "./hydrate-cache-fields";

/** Legacy Binding332 — pivot cache proto wrapper. */
export class PivotCacheModel {
  #e: any;
  constructor(pivotIn15220: any) {
    this.#e = pivotIn15220;
  }
  static createFromSource(pivotIn3610: any): PivotCacheModel {
    let pivotBind12136 = {
      id: pivotIn3610.id,
      name: pivotIn3610.name,
      fields: [],
      cacheHierarchies: [],
      dimensions: [],
      measureGroups: [],
      maps: [],
      records: [],
    };
    return (
      hydrateCacheFields(pivotBind12136, {
        headers: pivotIn3610.headers,
        rows: pivotIn3610.rows,
        sharedValuesFieldIndices: new Set(
          pivotIn3610.headers.map((item: any, index: number) => index),
        ),
        numFmtIdByFieldIndex: new Map(),
      }),
      new PivotCacheModel(pivotBind12136)
    );
  }
  toProto(): any {
    return this.#e;
  }
}

export const ensurePivotCacheModelInit = esmInit(() => {
  void PivotCacheModel;
});
