// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map style case-expression builder (legacy bh467).
// Stage-3 wave-138.

import { Jye } from "./map-name-filter-impl";

export function workbookHelper467(csmIn10181: any, csmIn10182: any) {
  let csmBind20642 = ["case"];
  return (
    csmIn10181.forEach((item, index) => {
      csmBind20642.push(Jye(index), item);
    }),
    csmBind20642.push(csmIn10182),
    csmBind20642
  );
}
