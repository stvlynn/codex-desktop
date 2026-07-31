// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-52: hydrate pivot cache fields from source rows (legacy el).

import { buildCacheFieldFromColumn } from "./build-cache-field";

export function hydrateCacheFields(pivotIn8114: any, pivotIn8115: any) {
  pivotIn8114.fields = pivotIn8115.headers.map((item, index) =>
    buildCacheFieldFromColumn(item, pivotIn8115.rows, index, {
      includeSharedValues: pivotIn8115.sharedValuesFieldIndices.has(index),
      numFmtId: pivotIn8115.numFmtIdByFieldIndex.get(index),
    }),
  );
}
