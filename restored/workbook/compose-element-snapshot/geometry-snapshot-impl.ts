// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: element geometry snapshot string (legacy TOe).
// Stage-3 wave-139.

import { workbookBinding1492 as geometryNameByProto } from "../compose-dsl";

export function TOe(cesIn8888: any, cesIn8889: any) {
  if (
    typeof cesIn8888.geometry == "string" &&
    cesIn8888.geometry.trim().length > 0
  )
    return cesIn8888.geometry;
  let cesBind19434 = cesIn8889?.shape?.geometry;
  if (cesBind19434 !== undefined) return geometryNameByProto[cesBind19434];
}
